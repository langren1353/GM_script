#!/bin/bash

# =================================================================
#  Linux Transparent Huge Pages (THP) 管理面板 for Redis/DB
#  系统：Debian 12 / Ubuntu / CentOS
# =================================================================

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

# 获取当前状态的辅助函数
get_current_state() {
    local path=$1
    if [ -f "$path" ]; then
        # 提取被 [] 包裹的单词，即当前生效的配置
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
    echo -e "${BLUE}正在配置开机自启服务 (模式: $mode)...${NC}"
    
    generate_service "$mode"
    
    systemctl daemon-reload
    systemctl enable "$SERVICE_NAME" >/dev/null 2>&1
    systemctl start "$SERVICE_NAME"
    
    echo -e "${GREEN}✅ 服务已安装并启动！系统重启后将自动保持 [$mode] 状态。${NC}"
    read -p "按回车键返回菜单..."
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
    read -p "按回车键返回菜单..."
}

# 临时应用设置
apply_temp() {
    local mode=$1
    echo "$mode" > "$THP_ENABLED"
    echo "$mode" > "$THP_DEFRAG"
    echo -e "${GREEN}✅ 已临时设置为 [$mode] (重启后失效)${NC}"
    sleep 1
}

# 显示头部面板
show_header() {
    clear
    echo -e "${CYAN}======================================================${NC}"
    echo -e "${CYAN}       Redis 系统资源优化面板 (THP Manager)       ${NC}"
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
                ;;
            2)
                install_service "never"
                ;;
            3)
                uninstall_service
                ;;
            4)
                apply_temp "madvise"
                ;;
            5)
                apply_temp "never"
                ;;
            6)
                apply_temp "always"
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

# 启动主菜单
main_menu
