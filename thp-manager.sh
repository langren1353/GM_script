#!/bin/bash

# =================================================================
#  Linux Transparent Huge Pages (THP) 管理面板 for Redis/DB
#  系统：Debian 12 / Ubuntu / CentOS
#  优化版：支持版本号显示与静默安装
# =================================================================

# 版本号
VERSION="1.1.0"

# 配置
SERVICE_NAME="thp-tuner"
SERVICE_FILE="/etc/systemd/system/${SERVICE_NAME}.service"
THP_ENABLED="/sys/kernel/mm/transparent_hugepage/enabled"
THP_DEFRAG="/sys/kernel/mm/transparent_hugepage/defrag"

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# 检查 Root 权限
if [ "$(id -u)" != "0" ]; then
   echo -e "${RED}错误: 请使用 sudo 或 root 权限运行此脚本${NC}"
   exit 1
fi

# =================================================================
#  核心逻辑函数 (无交互，供菜单和静默模式调用)
# =================================================================

# 获取当前状态
get_current_state() {
    local path=$1
    if [ -f "$path" ]; then
        cat "$path" | grep -o '\[.*\]' | tr -d '[]'
    else
        echo "不支持"
    fi
}

# 生成 Systemd 服务文件
generate_service() {
    local mode=$1
    cat > "$SERVICE_FILE" <<EOF
[Unit]
Description=Transparent Huge Pages Tuner (Mode: ${mode})
After=sysinit.target local-fs.target

[Service]
Type=oneshot
ExecStart=/bin/sh -c 'echo ${mode} > ${THP_ENABLED}'
ExecStart=/bin/sh -c 'echo ${mode} > ${THP_DEFRAG}'
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target
EOF
}

# 安装服务
install_service() {
    local mode=$1
    # 简单的参数校验
    if [[ "$mode" != "madvise" && "$mode" != "never" && "$mode" != "always" ]]; then
        echo -e "${RED}错误: 无效的模式 '$mode'。可选: madvise, never, always${NC}"
        exit 1
    fi

    echo -e "${BLUE}正在配置开机自启服务 (模式: $mode)...${NC}"
    
    generate_service "$mode"
    
    systemctl daemon-reload
    systemctl enable "$SERVICE_NAME" >/dev/null 2>&1
    systemctl start "$SERVICE_NAME"
    
    # 立即应用一次确保当前生效
    echo "$mode" > "$THP_ENABLED"
    echo "$mode" > "$THP_DEFRAG"
    
    echo -e "${GREEN}✅ 服务已安装并启动！系统重启后将自动保持 [$mode] 状态。${NC}"
}

# 卸载服务
uninstall_service() {
    echo -e "${YELLOW}正在卸载服务...${NC}"
    systemctl stop "$SERVICE_NAME" >/dev/null 2>&1
    systemctl disable "$SERVICE_NAME" >/dev/null 2>&1
    rm -f "$SERVICE_FILE"
    systemctl daemon-reload
    echo -e "${GREEN}✅ 服务已卸载。${NC}"
    echo -e "${YELLOW}提示: 当前内存状态未更改，重启服务器后将恢复系统默认。${NC}"
}

# 临时应用设置
apply_temp() {
    local mode=$1
    if [[ ! -f "$THP_ENABLED" ]]; then
        echo -e "${RED}错误: 找不到 THP 路径，您的内核可能不支持。${NC}"
        return
    fi
    echo "$mode" > "$THP_ENABLED"
    echo "$mode" > "$THP_DEFRAG"
    echo -e "${GREEN}✅ 已临时设置为 [$mode] (重启后失效)${NC}"
}

# 显示帮助信息
show_help() {
    echo -e "${CYAN}THP Tuner v${VERSION}${NC}"
    echo "用法: $0 [选项] [参数]"
    echo ""
    echo "选项:"
    echo "  --install [mode]   安装开机自启服务 (mode: madvise|never|always)"
    echo "  --uninstall        卸载开机自启服务"
    echo "  --set [mode]       仅临时修改当前状态 (重启失效)"
    echo "  --status           显示当前状态并退出"
    echo "  -v, --version      显示版本号"
    echo "  -h, --help         显示此帮助信息"
    echo ""
    echo "示例:"
    echo "  $0 --install madvise   # 静默安装 madvise 模式"
    echo "  $0 --install never     # 静默安装 never 模式"
}

# 显示状态 (命令行模式用)
show_status_cli() {
    local state_enabled=$(get_current_state "$THP_ENABLED")
    local state_defrag=$(get_current_state "$THP_DEFRAG")
    echo "THP Enabled: [$state_enabled]"
    echo "THP Defrag : [$state_defrag]"
    if systemctl is-active --quiet "$SERVICE_NAME"; then
        echo "Service    : Active"
    else
        echo "Service    : Inactive"
    fi
}

# =================================================================
#  UI 交互函数
# =================================================================

# 显示头部面板
show_header() {
    clear
    echo -e "${CYAN}======================================================${NC}"
    echo -e "${CYAN}    Redis 系统资源优化面板 (THP Manager) v${VERSION}   ${NC}"
    echo -e "${CYAN}======================================================${NC}"
    
    # 实时显示当前内核状态
    local state_enabled=$(get_current_state "$THP_ENABLED")
    local state_defrag=$(get_current_state "$THP_DEFRAG")
    
    echo -e "当前内核状态:"
    if [[ "$state_enabled" == "madvise" || "$state_enabled" == "never" ]]; then
        echo -e "  Enabled: ${GREEN}[$state_enabled]${NC} (适合 Redis)"
    else
        echo -e "  Enabled: ${RED}[$state_enabled]${NC} (可能导致 Redis 延迟/膨胀)"
    fi
    
    echo -e "  Defrag : ${YELLOW}[$state_defrag]${NC}"
    
    echo -e "------------------------------------------------------"
    
    # 显示服务状态
    if systemctl is-active --quiet "$SERVICE_NAME"; then
        echo -e "开机服务: ${GREEN}已安装 (运行中)${NC}"
    else
        echo -e "开机服务: ${RED}未安装${NC}"
    fi
    echo -e "${CYAN}======================================================${NC}"
}

# 主菜单
main_menu() {
    while true; do
        show_header
        echo -e "请选择操作："
        echo -e "${GREEN}1)${NC} 安装/重置服务为 [madvise] (推荐: 兼顾系统与Redis)"
        echo -e "${GREEN}2)${NC} 安装/重置服务为 [never]   (激进: 完全禁止大页)"
        echo -e "${RED}3)${NC} 卸载服务 (恢复系统默认)"
        echo -e "------------------------------------------------------"
        echo -e "${YELLOW}4)${NC} 仅临时切换为 [madvise] (立即生效)"
        echo -e "${YELLOW}5)${NC} 仅临时切换为 [never]   (立即生效)"
        echo -e "${YELLOW}6)${NC} 仅临时切换为 [always]  (恢复默认)"
        echo -e "------------------------------------------------------"
        echo -e "${BLUE}0)${NC} 退出面板"
        echo
        read -p "请输入数字 [0-6]: " choice

        case $choice in
            1)
                install_service "madvise"
                read -p "按回车键返回菜单..."
                ;;
            2)
                install_service "never"
                read -p "按回车键返回菜单..."
                ;;
            3)
                uninstall_service
                read -p "按回车键返回菜单..."
                ;;
            4)
                apply_temp "madvise"
                sleep 1
                ;;
            5)
                apply_temp "never"
                sleep 1
                ;;
            6)
                apply_temp "always"
                sleep 1
                ;;
            0)
                echo "退出。"
                exit 0
                ;;
            *)
                echo -e "${RED}输入错误，请重试。${NC}"
                sleep 1
                ;;
        esac
    done
}

# =================================================================
#  程序入口处理 (判断是命令行参数还是交互模式)
# =================================================================

# 检查是否有参数传入
if [ $# -gt 0 ]; then
    case "$1" in
        --install)
            MODE=${2:-madvise} # 默认使用 madvise
            install_service "$MODE"
            ;;
        --uninstall)
            uninstall_service
            ;;
        --set)
            if [ -z "$2" ]; then
                echo -e "${RED}错误: 请指定模式，例如: --set never${NC}"
                exit 1
            fi
            apply_temp "$2"
            ;;
        --status)
            show_status_cli
            ;;
        -v|--version)
            echo "THP Tuner Version: $VERSION"
            ;;
        -h|--help)
            show_help
            ;;
        *)
            echo -e "${RED}未知参数: $1${NC}"
            show_help
            exit 1
            ;;
    esac
    exit 0
else
    # 无参数时进入交互式菜单
    main_menu
fi
