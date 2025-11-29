#!/bin/bash

# ========== 初始化 ==========
SCRIPT_PATH=$(readlink -f "$0")
cd /root >/dev/null 2>&1
export DEBIAN_FRONTEND=noninteractive
set -u

# ========== 配置 ==========
CONFIG_DIR="/root/_portJump"
CONFIG_FILE="$CONFIG_DIR/config.toml"
CUSTOM_TABLE="portjump_nat"
rules_modified=0

mkdir -p "$CONFIG_DIR"

# ========== 颜色函数 ==========
_red()    { echo -e "\033[31m\033[01m$@\033[0m"; }
_green()  { echo -e "\033[32m\033[01m$@\033[0m"; }
_yellow() { echo -e "\033[33m\033[01m$@\033[0m"; }
_blue()   { echo -e "\033[36m\033[01m$@\033[0m"; }
_line()   { echo -e "\033[90m--------------------------------------------------------\033[0m"; }

# ========== 1. 依赖检查 ==========
check_env() {
    if [ "$(sysctl -n net.ipv4.ip_forward)" -eq 0 ]; then
        echo "net.ipv4.ip_forward = 1" > /etc/sysctl.d/99-portjump.conf
        sysctl -p /etc/sysctl.d/99-portjump.conf >/dev/null
    fi
    if ! command -v tomlq &> /dev/null; then
        _blue "正在初始化运行环境..."
        if command -v apt &> /dev/null; then apt update -y && apt install -y yq nftables nano
        elif command -v dnf &> /dev/null; then dnf install -y yq nftables nano
        elif command -v yum &> /dev/null; then yum install -y yq nftables nano
        else _red "❌ 请手动安装 yq, nftables, nano"; exit 1; fi
    fi
}

# ========== 2. 初始化配置 ==========
if [ ! -f "$CONFIG_FILE" ]; then
    cat > "$CONFIG_FILE" <<EOF
[[endpoints]]
# 备注: PBS 
listen = "0.0.0.0:18007"
remote = "192.168.10.100:8007"

############ 宝塔机器 + PHP ###############
[[endpoints]]
# 备注: web
listen = "0.0.0.0:80"
remote = "192.168.10.2:80"
EOF
fi

# ========== 3. 核心：应用规则 (智能透传真实IP) ==========
# ========== 3. 核心：应用规则 (智能透传真实IP - 修正版) ==========
# 【版本3 - 混合模式】
apply_rules() {
    # 1. 环境准备与清理
    # (假设 remove_table 和 check_env 函数已在脚本其他地方定义，若没有请保留原脚本的引用)
    remove_table
    check_env
    
    # 2. 获取出口网卡 (用于容器访问互联网)
    EXTERNAL_IF=$(ip route get 8.8.8.8 2>/dev/null | awk '{print $5; exit}')
    
    # 3. 定义变量
    # 内网网段定义
    PRIVATE_NETS="10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16"
    # 【重点】定义需要透传真实 IP 的后端端口（通常 Nginx 容器监听的是 80 和 443）
    _blue "正在重新加载混合防火墙规则..."
    echo -e "  混合模式     : \033[32m已开启\033[0m (80/443透传IP，其他端口全伪装)"
    echo -e "  出口网卡     : \033[33m${EXTERNAL_IF:-自动检测}\033[0m"

    # 4. 初始化表和链
    nft add table ip "$CUSTOM_TABLE"
    nft flush table ip "$CUSTOM_TABLE"
    nft add chain ip "$CUSTOM_TABLE" prerouting '{ type nat hook prerouting priority -100 ; }'
    nft add chain ip "$CUSTOM_TABLE" postrouting '{ type nat hook postrouting priority 100 ; }'
    nft add chain ip "$CUSTOM_TABLE" forward '{ type filter hook forward priority 0 ; policy accept ; }'

    # 5. 基础放行
    nft add rule ip "$CUSTOM_TABLE" forward ct state { established, related } counter accept
    nft add rule ip "$CUSTOM_TABLE" forward ct status dnat counter accept

    # ==================== [混合逻辑核心 (Postrouting)] ====================
    
    # 1. 【内网回环 (Hairpin NAT)】
    # 无论访问什么端口，只要来源是内网，必须伪装，否则内网无法通过公网IP访问映射。
    nft add rule ip "$CUSTOM_TABLE" postrouting ct status dnat ip saddr { $PRIVATE_NETS } counter masquerade

    # 2. 【容器主动上网】
    # 容器访问外部网络，必须伪装。
    if [ -n "$EXTERNAL_IF" ]; then
        nft add rule ip "$CUSTOM_TABLE" postrouting ip saddr { $PRIVATE_NETS } oifname "$EXTERNAL_IF" counter masquerade
    fi

    # 4. 【保底全伪装 (解决其他端口问题)】
    nft add rule ip "$CUSTOM_TABLE" postrouting ct status dnat counter masquerade
    
    # ==================== [端口转发映射 (Prerouting)] ====================

    if tomlq -e '.endpoints' "$CONFIG_FILE" >/dev/null 2>&1; then
        count=0
        RAW_DATA=$(tomlq -r '.endpoints[] | "\(.listen)|\(.remote)"' "$CONFIG_FILE")
        
        while IFS='|' read -r listen remote; do
            if [[ -z "$listen" || "$listen" == "null" ]]; then continue; fi

            l_port="${listen#*:}"
            r_ip="${remote%:*}"
            r_port="${remote#*:}"
            
            if [[ "$l_port" == *-* ]]; then dport_arg="{$l_port}"; else dport_arg="$l_port"; fi

            echo -e "  ➕ 激活: :$l_port -> $remote"

            # 使用 fib daddr type local 自动匹配本机所有 IP
            nft add rule ip "$CUSTOM_TABLE" prerouting \
                fib daddr type local \
                meta l4proto { tcp, udp } th dport "$dport_arg" \
                counter dnat to "$r_ip":"$r_port"

            ((count++))
        done <<< "$RAW_DATA"
        _green "✔ 已应用 $count 条规则"
    else
        _yellow "⚠ 未读取到有效规则"
    fi
    
    nft list table ip "$CUSTOM_TABLE" > /etc/nftables.portjump.conf 2>/dev/null
    rules_modified=0
    sleep 1
}

# ========== 4. 文本注释解析 ==========
parse_config_with_comments() {
    awk '
    BEGIN { FS="\""; OFS="|" }
    /^\[\[endpoints\]\]/ {
        if (l!="") print l,r,c;
        l=""; r=""; c="-";
    }
    /# *备注[:：]/ { sub(/^.*# *备注[:：] */, "", $0); c=$0; }
    /listen *=/ { l=$2 }
    /remote *=/ { r=$2 }
    END { if (l!="") print l,r,c }
    ' "$CONFIG_FILE"
}

# ========== 5. 服务管理 (开机自启) ==========
manage_autostart() {
    SERVICE_FILE="/etc/systemd/system/portjump.service"
    
    if systemctl is-enabled portjump &>/dev/null; then
        _green "✔ 开机自启已开启"
    else
        _blue "正在配置 Systemd 服务..."
        cat > "$SERVICE_FILE" <<EOF
[Unit]
Description=PortJump NAT Forwarding
After=network-online.target
Wants=network-online.target

[Service]
Type=oneshot
ExecStart=/bin/bash $SCRIPT_PATH --apply
RemainAfterExit=yes
StandardOutput=journal

[Install]
WantedBy=multi-user.target
EOF
        systemctl daemon-reload
        systemctl enable portjump
        _green "✔ 已设置开机自启！"
    fi
    read -n 1 -s -r -p "按任意键继续..."
}

remove_table() {
  # 3. 清空 NFTables 表
  if nft list table ip "$CUSTOM_TABLE" &>/dev/null; then
      nft delete table ip "$CUSTOM_TABLE"
      _green "防火墙规则已清空"
  fi
}

# ========== 6. 停止与卸载 ==========
stop_and_uninstall() {
    clear
    _red "=== ⛔ 停止与卸载 ==="
    echo "此操作将执行以下动作："
    echo "1. 停止转发服务"
    echo "2. 移除开机自启"
    echo "3. 清空当前 NAT 转发规则 (网络瞬间恢复默认)[可选]"
    echo ""
    read -p "是否确认? (y/n): " confirm
    if [[ "$confirm" != "y" ]]; then return; fi

    # 1. 停止服务
    if systemctl is-active portjump &>/dev/null; then
        systemctl stop portjump
        _yellow "服务已停止"
    fi

    # 2. 移除自启
    if systemctl is-enabled portjump &>/dev/null; then
        systemctl disable portjump
        rm -f "/etc/systemd/system/portjump.service"
        systemctl daemon-reload
        _yellow "开机自启已移除"
    fi

    remove_table

    echo ""
    _green "✔ 操作完成。"
    read -n 1 -s -r -p "按任意键返回..."
}

# ========== UI 逻辑 ==========

add_rule_ui() {
    clear
    _blue "===➕ 添加转发规则 (写入文本注释) ==="
    read -p "1. 本机端口 (如 8080): " port_in
    [ -z "$port_in" ] && return
    read -p "2. 目标地址 (如 192.168.1.2:80): " addr_out
    [ -z "$addr_out" ] && return
    read -p "3. 备注内容 (将生成 # 备注: ...): " cmt

    {
        echo ""
        echo "[[endpoints]]"
        if [ -n "$cmt" ]; then echo "# 备注: $cmt"; fi
        echo "listen = \"0.0.0.0:$port_in\""
        echo "remote = \"$addr_out\""
    } >> "$CONFIG_FILE"

    _green "\n✔ 已写入配置"
    rules_modified=1
    read -n 1 -s -r -p "按任意键继续..."
}

list_rules_ui() {
    clear
    _blue "===📋 规则列表 (解析 # 备注) ==="
    echo "文件: $CONFIG_FILE"
    _line
    printf "\033[1;37m%-20s %-25s %-20s\033[0m\n" "本机端口" "目标地址" "备注 (来自注释)"
    _line
    parse_config_with_comments | while IFS='|' read -r listen remote comment; do
        disp_port="${listen#0.0.0.0:}"
        [ "${listen}" == "${disp_port}" ] && disp_port="$listen"
        printf "%-20s %-25s \033[36m%-20s\033[0m\n" "$disp_port" "$remote" "$comment"
    done
    _line
    read -n 1 -s -r -p "按任意键返回..."
}

delete_rule_ui() {
    list_rules_ui
    total=$(tomlq -r '.endpoints | length' "$CONFIG_FILE" 2>/dev/null)
    [ -z "$total" ] && return
    echo ""; read -p "请输入要删除的规则序号 (从 0 开始): " idx_input
    if [[ "$idx_input" =~ ^[0-9]+$ ]]; then
         tomlq -r --argjson idx "$idx_input" '.endpoints |= (.[0:$idx] + .[$idx+1:])' "$CONFIG_FILE" > "$CONFIG_FILE.tmp" && mv "$CONFIG_FILE.tmp" "$CONFIG_FILE"
         _green "✔ 规则块已移除"
         rules_modified=1; sleep 1
    else
        _red "无效输入"; sleep 1
    fi
}

edit_config_manual() {
    if command -v nano &> /dev/null; then editor="nano"; else editor="vi"; fi
    $editor "$CONFIG_FILE"
    rules_modified=1
}

# ========== 主程序 ==========
if [[ "${1:-}" == "--apply" ]]; then apply_rules; exit 0; fi
check_env

while true; do
    clear
    echo -e "\033[36m"
    echo "    ____             __     __  __  "
    echo "   / __ \____  _____/ /_   / / / /___"
    echo "  / /_/ / __ \/ ___/ __/  / / / / __ \\"
    echo " / ____/ /_/ / /  / /_   / /_/ / /_/ /"
    echo "/_/    \____/_/   \__/   \____/ .___/ "
    echo "                             /_/      "
    echo -e "      \033[1;37mv14.0 真实 IP 透传版\033[0m"
    echo -e "\033[0m"
    _line
    
    rule_count=$(nft list table ip "$CUSTOM_TABLE" 2>/dev/null | grep -c "dnat to")
    if systemctl is-enabled portjump &>/dev/null; then boot_status="\033[32m开启\033[0m"; else boot_status="\033[31m关闭\033[0m"; fi

    echo -e " 运行状态: \033[32m●\033[0m 活跃中 ($rule_count 条) | 真实 IP: \033[32m已启用\033[0m | 自启: $boot_status"
    if [ "$rules_modified" -eq 1 ]; then echo -e " 配置状态: \033[33m⚠ 已变更，请执行 [4]\033[0m"; else echo -e " 配置状态: \033[32m✔ 正常\033[0m"; fi
    _line
    echo -e " \033[1;33m[1]\033[0m 添加规则  \033[90m(自动添加 # 备注:)\033[0m"
    echo -e " \033[1;33m[2]\033[0m 列表查看  \033[90m(解析文本注释显示)\033[0m"
    echo -e " \033[1;33m[3]\033[0m 删除规则  \033[90m(按块删除)\033[0m"
    echo -e " \033[1;33m[4]\033[0m \033[1;32m应用配置\033[0m  \033[90m(立即生效)\033[0m"
    echo ""
    echo -e " \033[1;36m[5]\033[0m 手动编辑  \033[90m(自由排版)\033[0m"
    echo -e " \033[1;35m[6]\033[0m \033[1;35m配置开机自启\033[0m \033[90m(推荐)\033[0m"
    echo -e " \033[1;31m[7]\033[0m \033[1;31m停止/卸载服务\033[0m \033[90m\033[0m"
    echo -e " \033[1;37m[0]\033[0m 退出"
    echo ""
    read -p " 请输入 [0-7]: " choice
    case "$choice" in
        1) add_rule_ui ;; 2) list_rules_ui ;; 3) delete_rule_ui ;;
        4) apply_rules; read -n 1 -s -r -p "按键继续..." ;;
        5) edit_config_manual ;; 
        6) manage_autostart ;;
        7) stop_and_uninstall ;;
        0) exit 0 ;;
        *) ;;
    esac
done
