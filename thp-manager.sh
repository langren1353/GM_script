#!/bin/bash

# 定义服务名称和路径
SERVICE_NAME="thp-tuner"
SERVICE_FILE="/etc/systemd/system/${SERVICE_NAME}.service"
THP_ENABLED_PATH="/sys/kernel/mm/transparent_hugepage/enabled"
THP_DEFRAG_PATH="/sys/kernel/mm/transparent_hugepage/defrag"

# 检查是否为 Root 用户
if [ "$(id -u)" != "0" ]; then
   echo "错误: 该脚本必须以 root 权限运行 (请使用 sudo)"
   exit 1
fi

# 安装服务函数
install_service() {
    echo "正在创建 Systemd 服务..."

    # 写入服务文件
    # 这里我们将 enabled 和 defrag 都设置为 madvise，这是配合 Redis 比较稳妥的设置
    cat > "$SERVICE_FILE" <<EOF
[Unit]
Description=Transparent Huge Pages Tuner (Set to madvise)
After=sysinit.target local-fs.target

[Service]
Type=oneshot
# 设置 enabled 为 madvise
ExecStart=/bin/sh -c 'echo madvise > ${THP_ENABLED_PATH}'
# 设置 defrag 为 madvise (防止后台碎片整理导致 CPU 抖动)
ExecStart=/bin/sh -c 'echo madvise > ${THP_DEFRAG_PATH}'
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target
EOF

    echo "正在重新加载 Systemd 配置..."
    systemctl daemon-reload

    echo "正在启用并启动服务..."
    systemctl enable "$SERVICE_NAME"
    systemctl start "$SERVICE_NAME"

    echo "✅ 安装完成！THP 已设置为 madvise。"
    check_status
}

# 卸载服务函数
uninstall_service() {
    echo "正在停止并禁用服务..."
    systemctl stop "$SERVICE_NAME" 2>/dev/null
    systemctl disable "$SERVICE_NAME" 2>/dev/null

    if [ -f "$SERVICE_FILE" ]; then
        echo "正在删除服务文件..."
        rm "$SERVICE_FILE"
    fi

    echo "正在重新加载 Systemd 配置..."
    systemctl daemon-reload

    echo "✅ 卸载完成！(注意：系统当前的 THP 设置只有重启后才会恢复默认，或者你可以手动改回 always)"
}

# 检查当前状态函数
check_status() {
    echo "---------------------------------------------------"
    echo "当前系统 THP 状态检查："
    echo -n "Enabled: "
    if [ -f "$THP_ENABLED_PATH" ]; then
        cat "$THP_ENABLED_PATH"
    else
        echo "未找到路径 (可能不支持)"
    fi
    
    echo -n "Defrag:  "
    if [ -f "$THP_DEFRAG_PATH" ]; then
        cat "$THP_DEFRAG_PATH"
    else
        echo "未找到路径 (可能不支持)"
    fi
    echo "---------------------------------------------------"
    echo "服务运行状态："
    systemctl status "$SERVICE_NAME" --no-pager | grep "Active"
}

# 主逻辑
case "$1" in
    install)
        install_service
        ;;
    uninstall)
        uninstall_service
        ;;
    status)
        check_status
        ;;
    *)
        echo "用法: $0 {install|uninstall|status}"
        echo "  install   : 安装并启动服务 (设置为 madvise)"
        echo "  uninstall : 停止并移除服务"
        echo "  status    : 查看当前 THP 状态和服务状态"
        exit 1
        ;;
esac
