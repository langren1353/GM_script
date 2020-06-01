#!/bin/sh

Green_font_prefix="\033[32m"
Red_font_prefix="\033[31m"
Green_background_prefix="\033[42;37m"
Red_background_prefix="\033[41;37m"
Font_color_suffix="\033[0m"

# 进入到指定目录并进行数据生成
certpath="/www/server/panel/vhost/cert"
num_success=0
num_failed=0
num_discard=0


SplitCert(){
	if [[ -e fullchain.pem ]]; then

		fullchian=`cat fullchain.pem` # 注意空格数据
		child=${fullchian%-----BEGIN CERTIFICATE-----*}
		middle=${fullchian#*-----END CERTIFICATE-----}

# 生成三份证书内容--主要格式，不要缩进
cat << EOF > child.crt
$child
EOF

cat << EOF > middle.crt
$middle
EOF

cat << EOF > full.crt
$fullchian
EOF

	else
		num_discard=`expr $num_discard + 1`
		echo "不存在证书文件，跳过"
	fi
}

# 重新生成OCSP的结果内容，需要先进入目录
GenOCSPRes(){
	SplitCert

	url=`openssl x509 -in child.crt -noout -ocsp_uri`

	host=${url#http*//}
	host=${host%%/*}

	echo "========================校验结果为：==========================="

	echo "提取到的OCSP验证域为：${url}";

	# 此时上面的代码已经完成了文件的分割，准备进行openssl的OCSP

	if [[ "${release}" == "centos" ]]; then
		datares=$(openssl ocsp -verify_other full.crt -issuer middle.crt -cert child.crt -text -no_nonce -noverify -respout stapling_ocsp -url $url -header "HOST" "$host" 2>&1)
	else
		datares=$(openssl ocsp -verify_other full.crt -issuer middle.crt -cert child.crt -text -no_nonce -noverify -respout stapling_ocsp -url $url -header "HOST=$host" 2>&1)
	fi
	
	OLD_IFS=$IFS
	IFS=""
	
	# 提取异常操作
	_error=`echo -e $datares | grep -i 'error'`
	if [ "" == "${_error}" ]; then
		num_success=`expr $num_success + 1`
		echo -e "${Green_background_prefix}验证成功${Font_color_suffix}${Green_font_prefix}${domain}${Font_color_suffix}"
	else
		num_failed=`expr $num_failed + 1`
		echo -e "${Red_background_prefix}验证失败${Font_color_suffix}${Red_font_prefix}${domain}${Font_color_suffix}"
		echo -e "${Red_font_prefix}${_error}${Font_color_suffix}"
	fi
	
	IFS=$OLD_IFS
	
	rm -rf child.crt middle.crt full.crt
}

DealAll(){
	cd "${certpath}"
	path=`pwd`
	for domain in `ls -a $path`
	do
		if [[ $domain != '.' && $domain != '..' ]] && [ -d "${domain}" ]
		then
			cd $domain
			GenOCSPRes
			cd ..
		fi
	done
	# 未知原因，反正后面的这些值都有问题
	echo "已经全部生成结束，成功：${num_success}个;失败：${num_failed}个;无证书：${num_discard}个"
}

CheckAll(){
	cd "${certpath}"
	path=`pwd`
	for domain in `ls -a $path`
	do
		if [[ $domain != '.' && $domain != '..' ]] && [ -d "${domain}" ]
		then
			cd $domain
			CheckOne
			cd ..
		fi
	done
	# 未知原因，反正后面的这些值都有问题
	echo "已经全部生成结束，成功：${num_success}个;失败：${num_failed}个;无证书：${num_discard}个"
}

CheckOne(){
	# ocsp校验时间极长，故不使用自动处理
	_error=$(openssl s_client -connect $domain:443 -servername ${domain} -status -tlsextdebug < /dev/null 2>&1 | grep -i "OCSP response: no response sent")
	if [ "" == "${_error}" ]; then
		num_success=`expr $num_success + 1`
		echo -e "${Green_background_prefix}OCSP测试成功${Font_color_suffix}${Green_font_prefix}${domain}${Font_color_suffix}"
	else
		num_failed=`expr $num_failed + 1`
		echo -e "${Red_background_prefix}OCSP测试失败${Font_color_suffix}${Red_font_prefix}${domain}${Font_color_suffix}"
		echo -e "${Red_font_prefix}${_error}${Font_color_suffix}"
	fi
}

SplitOne_Input(){
	cd "${certpath}"
	read -p "   请输入域名：" domain
	if [[ $domain != '.' && $domain != '..' ]] && [ -d "${domain}" ]
	then
		cd $domain
		SplitCert
		cd ..
	else
		echo "域无效，本地未查找到该域"
	fi
}

CheckOne_Input(){
	cd "${certpath}"
	read -p "   请输入域名：" domain
	CheckOne
}

DealOne_Input(){
	cd "${certpath}"
	read -p "   请输入域名：" domain
	if [[ $domain != '.' && $domain != '..' ]] && [ -d "${domain}" ]
	then
		cd $domain
		GenOCSPRes
		cd ..
	else
		echo "域无效，本地未查找到该域"
	fi
}

ShowNginxOCSPCode(){
	clear
	echo -e "
			 ${Green_font_prefix}直接在nginx中配置即可${Font_color_suffix}	
	
	
ssl_stapling_verify off;  # OCSP 服务端校验证书有效性，仅启动时校验一次
ssl_stapling on; # OCSP 服务端校验证书有效性，仅启动时校验一次
resolver 1.1.1.1 8.8.4.4 valid=300s; 
resolver_timeout 5s;
ssl_ciphers 'TLS13-AES-256-GCM-SHA384:TLS13-CHACHA20-POLY1305-SHA256:TLS13-AES-128-GCM-SHA256:TLS13-AES-128-CCM-8-SHA256:TLS13-AES-128-CCM-SHA256:EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+ECDSA+AES128:EECDH+aRSA+AES128:RSA+AES128:EECDH+ECDSA+AES256:EECDH+aRSA+AES256:RSA+AES256:EECDH+ECDSA+3DES:EECDH+aRSA+3DES:RSA+3DES:!MD5';
  ssl_early_data on;
keepalive_requests   100;
ssl_stapling_file /www/server/panel/vhost/cert/${Green_font_prefix}xxx.xxx.xxx${Font_color_suffix}/stapling_ocsp;"
	echo "";
}

#检查系统
check_sys(){
	if [[ -f /etc/redhat-release ]]; then
		release="centos"
	elif cat /etc/issue | grep -q -E -i "debian"; then
		release="debian"
	elif cat /etc/issue | grep -q -E -i "ubuntu"; then
		release="ubuntu"
	elif cat /etc/issue | grep -q -E -i "centos|red hat|redhat"; then
		release="centos"
	elif cat /proc/version | grep -q -E -i "debian"; then
		release="debian"
	elif cat /proc/version | grep -q -E -i "ubuntu"; then
		release="ubuntu"
	elif cat /proc/version | grep -q -E -i "centos|red hat|redhat"; then
		release="centos"
    fi
}

start_menu(){
	clear
	check_sys
	echo && echo -e " OCSP 一键安装管理脚本 ${Red_font_prefix}[v1.0]${Font_color_suffix}
  
————————————全域操作————————————
 ${Green_font_prefix}1.${Font_color_suffix} 一键所有域全部安装
 ${Green_font_prefix}2.${Font_color_suffix} 一键所有域测试效果
————————————单域操作————————————
 ${Green_font_prefix}3.${Font_color_suffix} 分离单一域证书
 ${Green_font_prefix}4.${Font_color_suffix} 分离并安装单一域
 ${Green_font_prefix}5.${Font_color_suffix} 测试单一域是否生效
————————————nginx操作———————————
 ${Green_font_prefix}6.${Font_color_suffix} 获取OCSP的Nginx配置代码
————————————退出操作————————————
  ${Green_font_prefix}0.${Font_color_suffix} 退出脚本
————————————————————————————————" && echo
read -p " 请输入数字：" num
case "$num" in
	1)
	DealAll
	;;
	2)
	CheckAll
	;;
	3)
	SplitOne_Input
	;;
	4)
	DealOne_Input
	;;
	5)
	CheckOne_Input
	;;
	6)
	ShowNginxOCSPCode
	;;
	0)
	exit 1
	;;
	*)
	clear
	echo "证书路径：${certpath}"
	echo -e "${Error}:请输入正确数字 [1-4]"
	sleep 5s
	start_menu
	;;
esac
}

start_menu