#!/bin/bash

cd /root >/dev/null 2>&1

# ========== 颜色与提示函数优化 ==========
_info() { echo -e "$@"; }
_red() { echo -e "\033[31m\033[01m$@\033[0m"; }
_green() { echo -e "\033[32m\033[01m$@\033[0m"; }
_yellow() { echo -e "\033[33m\033[01m$@\033[0m"; }
_blue() { echo -e "\033[36m\033[01m$@\033[0m"; }
reading() { read -rp "$(_green "$1")" "$2"; }

export DEBIAN_FRONTEND=noninteractive
utf8_locale=$(locale -a 2>/dev/null | grep -i -m 1 -E "UTF-8|utf8")
if [[ -z "$utf8_locale" ]]; then
    _error "No UTF-8 locale found"
else
    export LC_ALL="$utf8_locale"
    export LANG="$utf8_locale"
    export LANGUAGE="$utf8_locale"
    _info "Locale set to $utf8_locale"
fi
set -euo pipefail

# 配置目录与文件
CONFIG_DIR="/root/_portJump"
CONFIG_FILE="$CONFIG_DIR/config.toml"
CUSTOM_TABLE="myportjump"
rules_modified=0

mkdir -p "$CONFIG_DIR"

if [ ! -f "$CONFIG_FILE" ]; then
    cat > "$CONFIG_FILE" <<EOF
# 全局配置
internal_ip_prefix = "192.168.10"

# 端口跳转规则配置文件
# 格式示例：
#
# [[endpoints]]
# # 备注: Proxmox Backup Server
# listen = "0.0.0.0:18000-18010"
# remote = "192.168.10.100:18000-18010"
EOF
    _green "默认配置文件已创建：$CONFIG_FILE"
fi


# ========== 依赖检查 ==========
if ! command -v tomlq &> /dev/null; then
    _info "未检测到 tomlq（来自 yq 工具），正在尝试安装..."
    if command -v apt &> /dev/null; then
        apt update -y && apt install -y yq nftables
    elif command -v dnf &> /dev/null; then
        dnf install -y yq nftables
    elif command -v yum &> /dev/null; then
        yum install -y yq nftables
    else
        _error "不支持的包管理器。"
        exit 1
    fi
fi

if ! command -v tomlq &> /dev/null; then
    _error "tomlq 未安装。"
    exit 1
fi

if ! command -v nft &> /dev/null; then
    _error "未安装 nftables。"
    exit 1
fi

# ========== 其余函数保持逻辑，仅替换输出 ==========
read_internal_prefix() {
    if ! tomlq -e '.internal_ip_prefix // empty' "$CONFIG_FILE" >/dev/null; then
        _warn "配置文件中缺少 'internal_ip_prefix' 字段。"
        read -p "请输入用于识别内网接口的 IP 前缀（例如 192.168.10）: " prefix
        if [[ ! "$prefix" =~ ^[0-9]{1,3}(\.[0-9]{1,3}){1,3}$ ]]; then
            _error "无效的 IP 前缀格式（例如：192.168.10）"
            exit 1
        fi
        tomlq --arg prefix "$prefix" '.internal_ip_prefix = $prefix' "$CONFIG_FILE" > "$CONFIG_FILE.tmp" && mv "$CONFIG_FILE.tmp" "$CONFIG_FILE"
        _green "内网 IP 前缀已设置为: $prefix"
    fi
    tomlq -r '.internal_ip_prefix // "192.168.10"' "$CONFIG_FILE"
}

INTERNAL_IP_PREFIX=$(read_internal_prefix)

detect_interfaces() {
    _info "正在自动检测内网接口（匹配 $INTERNAL_IP_PREFIX.x）..."
    SAFE_PREFIX=$(echo "$INTERNAL_IP_PREFIX" | sed 's/\./\\./g')
    INTERNAL_INTERFACE=$(ip -o addr show 2>/dev/null | grep -E "inet ${SAFE_PREFIX}\\.[0-9]+" | awk '{print $2}' | head -n1)

    if [ -z "$INTERNAL_INTERFACE" ]; then
        INTERNAL_INTERFACE="vmbr0"
        _warn "未找到匹配 $INTERNAL_IP_PREFIX.x 的接口，使用默认内网接口: $INTERNAL_INTERFACE"
    else
        _green "检测到内网接口: $INTERNAL_INTERFACE"
    fi

    if [ "$INTERNAL_INTERFACE" = "vmbr0" ]; then
        EXTERNAL_INTERFACE=$(ip -o link show 2>/dev/null | awk -F': ' '{print $2}' | grep -v -E 'lo|vmbr0|vlan|bond|dummy' | head -n1)
    else
        EXTERNAL_INTERFACE=$(ip -o link show 2>/dev/null | awk -F': ' '{print $2}' | grep -v -E "lo|$INTERNAL_INTERFACE|vlan|bond|dummy" | head -n1)
    fi

    if [ -z "$EXTERNAL_INTERFACE" ]; then
        _error "无法确定外网接口，请手动检查网络配置。"
        exit 1
    fi

    _info "外网接口: $EXTERNAL_INTERFACE"
    _info "内网接口: $INTERNAL_INTERFACE"
}

detect_interfaces

# ========== 规则管理 ==========
clear_nft_rules() {
    _info "正在清空 nftables 自定义表 '$CUSTOM_TABLE'..."
    nft delete table ip "$CUSTOM_TABLE" 2>/dev/null || true
    _green "自定义表已清空。"
    sleep 1
}

apply_rules_from_toml() {
    _info "正在从 $CONFIG_FILE 加载规则并应用到表 '$CUSTOM_TABLE'..."
    clear_nft_rules

    nft add table ip "$CUSTOM_TABLE"
    nft add chain ip "$CUSTOM_TABLE" prerouting '{ type nat hook prerouting priority -100 ; }'
    nft add chain ip "$CUSTOM_TABLE" postrouting '{ type nat hook postrouting priority 100 ; }'
    nft add chain ip "$CUSTOM_TABLE" forward '{ type filter hook forward priority 0 ; policy accept ; }'

    nft add rule ip "$CUSTOM_TABLE" forward iifname "$EXTERNAL_INTERFACE" oifname "$INTERNAL_INTERFACE" counter accept
    nft add rule ip "$CUSTOM_TABLE" forward iifname "$INTERNAL_INTERFACE" oifname "$EXTERNAL_INTERFACE" counter accept
    nft add rule ip "$CUSTOM_TABLE" postrouting oifname "$EXTERNAL_INTERFACE" counter masquerade

    LOCAL_IP=$(ip -4 addr show dev "$EXTERNAL_INTERFACE" | grep -oP 'inet \K[\d.]+')
    if [ -z "$LOCAL_IP" ]; then
        _warn "无法获取 $EXTERNAL_INTERFACE 的 IPv4 地址，将使用 0.0.0.0 匹配所有。"
        LOCAL_IP="0.0.0.0"
    fi

    if [ -s "$CONFIG_FILE" ] && grep -q '\[\[endpoints\]\]' "$CONFIG_FILE" 2>/dev/null; then
        tomlq -e '.endpoints // []' "$CONFIG_FILE" >/dev/null || {
            _error "config.toml 格式无效。"
            return 1
        }

        total=$(tomlq -r '.endpoints // [] | length' "$CONFIG_FILE")
        if [ "$total" -eq 0 ]; then
            _info "配置文件中无有效端点规则。"
        else
            _info "共检测到 $total 条端点规则，正在应用..."
            while IFS='|' read -r listen remote; do
                listen_port_spec="${listen#*:}"
                remote_ip="${remote%:*}"
                remote_port_spec="${remote#*:}"

                if [ -z "$listen_port_spec" ] || [ -z "$remote_ip" ] || [ -z "$remote_port_spec" ]; then
                    _warn "跳过无效规则: listen='$listen' remote='$remote'"
                    continue
                fi

                if [[ "$listen_port_spec" == *-* ]]; then
                    nft add rule ip "$CUSTOM_TABLE" prerouting iifname "$EXTERNAL_INTERFACE" \
                        ip daddr "$LOCAL_IP" \
                        tcp dport "{$listen_port_spec}" counter dnat to "$remote_ip":"$remote_port_spec"
                    nft add rule ip "$CUSTOM_TABLE" prerouting iifname "$EXTERNAL_INTERFACE" \
                        ip daddr "$LOCAL_IP" \
                        udp dport "{$listen_port_spec}" counter dnat to "$remote_ip":"$remote_port_spec"
                else
                    nft add rule ip "$CUSTOM_TABLE" prerouting iifname "$EXTERNAL_INTERFACE" \
                        ip daddr "$LOCAL_IP" \
                        tcp dport "$listen_port_spec" counter dnat to "$remote_ip":"$remote_port_spec"
                    nft add rule ip "$CUSTOM_TABLE" prerouting iifname "$EXTERNAL_INTERFACE" \
                        ip daddr "$LOCAL_IP" \
                        udp dport "$listen_port_spec" counter dnat to "$remote_ip":"$remote_port_spec"
                fi
            done < <(tomlq -r '.endpoints[] | @text "\(.listen)|\(.remote)"' "$CONFIG_FILE")
        fi
    else
        _info "配置文件中无 endpoints 配置。"
    fi

    nft list ruleset > /etc/nftables.conf
    _green "规则已成功应用并保存至 /etc/nftables.conf"
    rules_modified=0
    sleep 1
}

# ========== 规则编辑 ==========
add_endpoint() {
    clear
    _info "请按提示输入新的端口映射规则："
    read -p "监听地址 (格式: 0.0.0.0:端口 或 0.0.0.0:起始-结束): " listen
    read -p "目标地址 (格式: 192.168.10.x:端口 或 192.168.10.x:起始-结束): " remote
    read -p "备注 (可选): " comment

    if [[ ! "$listen" =~ ^[0-9.]+:[0-9]+(-[0-9]+)?$ ]] || [[ ! "$remote" =~ ^[0-9.]+:[0-9]+(-[0-9]+)?$ ]]; then
        _error "格式错误！"
        sleep 1
        return 1
    fi

    {
        echo ""
        echo "[[endpoints]]"
        if [ -n "$comment" ]; then
            echo "# 备注: $comment"
        fi
        echo "listen = \"$listen\""
        echo "remote = \"$remote\""
    } >> "$CONFIG_FILE"

    _green "新规则已保存到 $CONFIG_FILE"
    rules_modified=1
    sleep 1
}

list_endpoints() {
    clear
    if ! grep -q '\[\[endpoints\]\]' "$CONFIG_FILE" 2>/dev/null || [ "$(tomlq -r '.endpoints // [] | length' "$CONFIG_FILE")" -eq 0 ]; then
        _info "📌 当前无任何端点规则。"
        sleep 2
        return
    fi

    _info "📌 当前已配置的端点规则："
    idx=0
    while IFS= read -r line; do
        echo "  [$idx] $line"
        ((idx++))
    done < <(tomlq -r '.endpoints[] | @text "\(.listen) ➡ \(.remote)"' "$CONFIG_FILE")

    echo
    _info "按任意键返回主菜单..."
    read -r _
}

delete_endpoint() {
    clear
    list_endpoints
    total=$(tomlq -r '.endpoints // [] | length' "$CONFIG_FILE")
    if [ "$total" -eq 0 ]; then
        return
    fi

    read -p "请输入要删除的规则编号: " idx_input
    if ! [[ "$idx_input" =~ ^[0-9]+$ ]] || [ "$idx_input" -ge "$total" ]; then
        _error "无效编号。"
        sleep 1
        return 1
    fi

    tomlq -r --argjson idx "$idx_input" '.endpoints |= (.[0:$idx] + .[$idx+1:])' "$CONFIG_FILE" > "$CONFIG_FILE.tmp" && mv "$CONFIG_FILE.tmp" "$CONFIG_FILE"
    _green "规则 [$idx_input] 已删除。"
    rules_modified=1
    sleep 1
}

modify_internal_prefix() {
    clear
    current=$(tomlq -r '.internal_ip_prefix // "192.168.10"' "$CONFIG_FILE")
    _info "当前内网 IP 前缀: $current"
    _info "示例: 192.168.10 表示匹配 192.168.10.x 的接口"
    read -p "请输入新的内网 IP 前缀（直接回车保持不变）: " new_prefix

    if [ -n "$new_prefix" ]; then
        if [[ ! "$new_prefix" =~ ^[0-9]{1,3}(\.[0-9]{1,3}){1,3}$ ]]; then
            _error "无效格式（应为类似 192.168.10）"
            sleep 1
            return 1
        fi
        tomlq --arg prefix "$new_prefix" '.internal_ip_prefix = $prefix' "$CONFIG_FILE" > "$CONFIG_FILE.tmp" && mv "$CONFIG_FILE.tmp" "$CONFIG_FILE"
        _green "内网 IP 前缀已更新为: $new_prefix"
        INTERNAL_IP_PREFIX="$new_prefix"
        detect_interfaces
    else
        _info "未修改内网 IP 前缀。"
    fi
    sleep 1
}

install_systemd() {
    _info "正在安装 systemd 服务..."
    SCRIPT_ABS_PATH="$(realpath "$0")"
    cat > /etc/systemd/system/portjump.service <<EOF
[Unit]
Description=端口跳转服务 (自定义表: $CUSTOM_TABLE)
After=network.target

[Service]
Type=oneshot
ExecStart=/bin/bash '$SCRIPT_ABS_PATH' --apply
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target
EOF
    systemctl daemon-reload
    systemctl enable --now portjump.service
    _green "systemd 服务已启用。"
    sleep 2
}

# ========== 非交互模式 ==========
if [[ "${1:-}" == "--apply" ]]; then
    apply_rules_from_toml
    exit 0
fi

# ========== 主菜单 ==========
while true; do
    clear
    echo "========================================"
    _blue "          端口跳转管理工具（自定义表: $CUSTOM_TABLE）"
    _blue "  配置文件: $CONFIG_FILE"
    _blue "  内网标识: $INTERNAL_IP_PREFIX.x"
    echo "========================================"

    if [ "$rules_modified" -eq 1 ]; then
        _yellow "🔍 ⚠️  注意：配置已修改，但规则尚未生效！"
        _yellow "   请执行【4. 重启应用】以使新规则生效。"
        echo "----------------------------------------"
    fi

    echo "1. 添加新端口映射规则"
    echo "2. 查看现有规则"
    echo "3. 删除已有规则"
    echo "4. 重启应用（加载 $CONFIG_FILE）"
    echo "5. 安装 systemd 服务（开机自启）"
    echo "6. 修改内网 IP 段标识（当前: $INTERNAL_IP_PREFIX）"
    echo "9. 仅清空自定义规则表"
    echo "0. 退出"
    read -p "请选择操作: " choice

    case "$choice" in
        1) add_endpoint ;;
        2) list_endpoints ;;
        3) delete_endpoint ;;
        4) apply_rules_from_toml ;;
        5) install_systemd ;;
        6) modify_internal_prefix ;;
        9) clear_nft_rules ;;
        0) _green "再见！"; exit 0 ;;
        *) _error "无效选项。"; sleep 1 ;;
    esac
done
