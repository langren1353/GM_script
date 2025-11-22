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
############ 宝塔机器 + PHP ###############
[[endpoints]]
# 备注: Baota+PHP-SSH
listen = "0.0.0.0:220"
remote = "192.168.10.2:22"

[[endpoints]]
# 备注: web
listen = "0.0.0.0:80"
remote = "192.168.10.2:80"
EOF
fi

# ========== 3. 核心：应用规则 (智能本地匹配) ==========
apply_rules() {
    check_env
    
    # 获取主网卡仅用于显示，逻辑不再依赖具体网卡名
    EXTERNAL_IF=$(ip route get 8.8.8.8 2>/dev/null | awk '{print $5; exit}')

    _blue "正在重新加载防火墙规则..."
    echo -e "  匹配逻辑     : \033[33mfib daddr type local\033[0m (自动匹配本机所有IP)"
    echo -e "  回环处理     : \033[33m已开启\033[0m (CT可通过公网IP访问映射端口)"

    nft add table ip "$CUSTOM_TABLE"
    nft flush table ip "$CUSTOM_TABLE"
    nft add chain ip "$CUSTOM_TABLE" prerouting '{ type nat hook prerouting priority -150 ; }'
    nft add chain ip "$CUSTOM_TABLE" postrouting '{ type nat hook postrouting priority 100 ; }'
    nft add chain ip "$CUSTOM_TABLE" forward '{ type filter hook forward priority 0 ; policy accept ; }'

    # 放行状态
    nft add rule ip "$CUSTOM_TABLE" forward ct state { established, related } counter accept
    nft add rule ip "$CUSTOM_TABLE" forward ct status dnat counter accept
    
    # [核心修改 1] 全局伪装 (Masquerade)
    # 只要是被本表 DNAT 过的流量，出站时都进行伪装。
    # 这解决了 CT 访问 PVE IP 时的“回包路径不一致”问题 (Hairpin NAT)。
    nft add rule ip "$CUSTOM_TABLE" postrouting ct status dnat counter masquerade

    # [保底] 对于非 DNAT 的普通出站流量 (如 CT 访问百度)，如果从出口网卡出去，也需要伪装
    if [ -n "$EXTERNAL_IF" ]; then
        nft add rule ip "$CUSTOM_TABLE" postrouting oifname "$EXTERNAL_IF" counter masquerade
    fi

    if tomlq -e '.endpoints' "$CONFIG_FILE" >/dev/null 2>&1; then
        count=0
        RAW_DATA=$(tomlq -r '.endpoints[] | "\(.listen)|\(.remote)"' "$CONFIG_FILE")
        
        while IFS='|' read -r listen remote; do
            if [[ -z "$listen" || "$listen" == "null" ]]; then continue; fi

            l_port="${listen#*:}"
            r_ip="${remote%:*}"
            r_port="${remote#*:}"
            
            if [[ "$l_port" == *-* ]]; then dport_arg="{$l_port}"; else dport_arg="$l_port"; fi

            echo -e "  ➕ 激活: (本机):$l_port -> $remote"

            # [核心修改 2] fib daddr type local
            # 只有当数据包的目标 IP 属于本机 (Local) 时，才拦截。
            # 这样既不需要写死 IP，也不会拦截过路的非本机流量。
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
        read -p "检测到已开启自启。是否关闭并移除? (y/n): " confirm
        if [[ "$confirm" == "y" ]]; then
            systemctl stop portjump
            systemctl disable portjump
            rm -f "$SERVICE_FILE"
            systemctl daemon-reload
            _yellow "✔ 已关闭开机自启。"
        fi
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
    echo -e "      \033[1;37mv13.0 智能 PVE 版 (fib local)\033[0m"
    echo -e "\033[0m"
    _line
    
    rule_count=$(nft list table ip "$CUSTOM_TABLE" 2>/dev/null | grep -c "dnat to")
    if systemctl is-enabled portjump &>/dev/null; then boot_status="\033[32m开启\033[0m"; else boot_status="\033[31m关闭\033[0m"; fi

    echo -e " 运行状态: \033[32m●\033[0m 活跃中 ($rule_count 条) | 模式: \033[33m自动匹配本机 IP\033[0m | 自启: $boot_status"
    if [ "$rules_modified" -eq 1 ]; then echo -e " 配置状态: \033[33m⚠ 已变更，请执行 [4]\033[0m"; else echo -e " 配置状态: \033[32m✔ 正常\033[0m"; fi
    _line
    echo -e " \033[1;33m[1]\033[0m 添加规则  \033[90m(自动添加 # 备注:)\033[0m"
    echo -e " \033[1;33m[2]\033[0m 列表查看  \033[90m(解析文本注释显示)\033[0m"
    echo -e " \033[1;33m[3]\033[0m 删除规则  \033[90m(按块删除)\033[0m"
    echo -e " \033[1;33m[4]\033[0m \033[1;32m应用配置\033[0m  \033[90m(立即生效)\033[0m"
    echo ""
    echo -e " \033[1;36m[5]\033[0m 手动编辑  \033[90m(自由排版)\033[0m"
    echo -e " \033[1;35m[6]\033[0m \033[1;35m配置开机自启\033[0m \033[90m(推荐)\033[0m"
    echo -e " \033[1;31m[0]\033[0m 退出"
    echo ""
    read -p " 请输入 [0-6]: " choice
    case "$choice" in
        1) add_rule_ui ;; 2) list_rules_ui ;; 3) delete_rule_ui ;;
        4) apply_rules; read -n 1 -s -r -p "按键继续..." ;;
        5) edit_config_manual ;; 
        6) manage_autostart ;;
        0) exit 0 ;;
        *) ;;
    esac
done
