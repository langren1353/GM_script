#!/usr/bin/env bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

#=================================================
#	System Required: CentOS 6/7/8,Debian 8/9/10,ubuntu 16/18/19
#	Description: BBR+BBRplus+Lotserver
#	Version: 1.3.2.6
#	Author: 千影,cx9208,YLX
#=================================================

sh_ver="1.3.2.6"
github_lotserver="github.000060000.xyz"
Green_font_prefix="\033[32m" && Red_font_prefix="\033[31m" && Green_background_prefix="\033[42;37m" && Red_background_prefix="\033[41;37m" && Font_color_suffix="\033[0m"
Info="${Green_font_prefix}[信息]${Font_color_suffix}"
Error="${Red_font_prefix}[错误]${Font_color_suffix}"
Tip="${Green_font_prefix}[注意]${Font_color_suffix}"

#安装BBR内核
installbbr(){
	kernel_version="4.11.8"
	bit=`uname -m`
	rm -rf bbr
	mkdir bbr && cd bbr

	reshtml=$(curl https://github.com/ylx2016/kernel/releases)

	if [[ "${release}" == "centos" ]]; then
		if [[ ${version} = "6" ]]; then
			if [[ ${bit} = "x86_64" ]]; then
			    use_img_version="c6"
                downAndInstallKernel
			else
				echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
			fi

		elif [[ ${version} = "7" ]]; then
			if [[ ${bit} = "x86_64" ]]; then
			    use_img_version="c7"
				downAndInstallKernel
			else
				echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
			fi

		elif [[ ${version} = "8" ]]; then
		    use_img_version="c8"
			downAndInstallKernel
		fi

	elif [[ "${release}" == "debian" || "${release}" == "ubuntu" ]]; then
		if [[ "${release}" == "debian" ]]; then

			if [[ ${version} = "8" ]]; then
				if [[ ${bit} = "x86_64" ]]; then
					use_img_version="d8"
					downAndInstallKernel
				else
					echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
				fi

			elif [[ ${version} = "9" ]]; then
				if [[ ${bit} = "x86_64" ]]; then
					use_img_version="d9"
					downAndInstallKernel
				else
					echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
				fi
			elif [[ ${version} = "10" ]]; then
				if [[ ${bit} = "x86_64" ]]; then
					use_img_version="d10"
					downAndInstallKernel
				else
					echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
				fi
			fi
		elif [[ "${release}" == "ubuntu" ]]; then

			if [[ ${version} = "16" ]]; then
				if [[ ${bit} = "x86_64" ]]; then
					use_img_version="u16"
					downAndInstallKernel
				else
					echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
				fi

			elif [[ ${version} = "18" ]]; then
				if [[ ${bit} = "x86_64" ]]; then
					use_img_version="u18"
					downAndInstallKernel

				else
					echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
				fi
			elif [[ ${version} = "19" ]]; then
				if [[ ${bit} = "x86_64" ]]; then
					use_img_version="u19"
					downAndInstallKernel
				else
					echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
				fi
			fi

		#else
		#	wget http://security.debian.org/debian-security/pool/updates/main/o/openssl/libssl1.0.0_1.0.1t-1+deb8u10_amd64.deb
		#	wget -N --no-check-certificate http://${github}/bbr/debian-ubuntu/linux-headers-${kernel_version}-all.deb
		#	wget -N --no-check-certificate http://${github}/bbr/debian-ubuntu/${bit}/linux-headers-${kernel_version}.deb
		#	wget -N --no-check-certificate http://${github}/bbr/debian-ubuntu/${bit}/linux-image-${kernel_version}.deb

		#	dpkg -i libssl1.0.0_1.0.1t-1+deb8u10_amd64.deb
		#	dpkg -i linux-headers-${kernel_version}-all.deb
		#	dpkg -i linux-headers-${kernel_version}.deb
		#	dpkg -i linux-image-${kernel_version}.deb
		fi
	fi
}


# for Debian & Ubuntu Only
downAndInstallKernel(){
    if [[ $use_img_version =~ "c" ]]; then
        # https://github.com/ylx2016/kernel/releases/download/5.6.0RC1/kernel-5.6.0_rc1-1-c7.x86_64.rpm
        # https://github.com/ylx2016/kernel/releases/download/5.6.0RC1/kernel-headers-5.6.0_rc1-1-c7.x86_64.rpm
        res_imagepath=$(echo $reshtml | grep -o -E "/ylx2016/kernel/releases/download[^\"]+/kernel[^\"]+(`echo ${use_img_version}`)[^\"]+.rpm" | head -1)
        res_headerspath=$(echo $reshtml | grep -o -E "/ylx2016/kernel/releases/download[^\"]+/kernel-headers[^\"]+(${use_img_version})[^\"]+.rpm" | head -1)

        # 提取到实际的下载地址
        res_imagepath="https://github.com${res_imagepath}"
        res_headerspath="https://github.com${res_headerspath}"

        # 提取到实际的文件名
        res_image_name=${res_imagepath#*download*/*/}
        res_headers_name=${res_headerspath#*download*/*/}

        # 提取kernel的version
        kernel_version=${res_image_name%-$use_img_version*}
        echo "内核版本1：${kernel_version}"
        kernel_version=${kernel_version#kernel-}
        echo "内核版本2：${kernel_version}"

        if [ -n ${res_image_name} ]; then
            # 执行
            wget -N --no-check-certificate ${res_imagepath}
            wget -N --no-check-certificate ${res_headerspath}

            echo "ImageName: ${res_image_name}"
            echo "HeadersName: ${res_headers_name}"
            echo "内核版本3：${kernel_version}"

            stty erase '^H' && read -p "请确认是否正确，好安装内核 ? [Y/n] :" yn
            [ -z "${yn}" ] && yn="y"
            if [[ $yn == [Yy] ]]; then
                echo -e "继续下一步操作..."
                yum install -y ${res_image_name}
                yum install -y ${res_headers_name}
            else
                return
            fi
        else
            echo "获取最新的linux-image失败";
            return;
        fi
    else # warn 支持Debian和Ubuntu同时处理
        # https://github.com/ylx2016/kernel/releases/download/5.6.0r3/linux-headers-5.6.0-rc3_5.6.0-rc3-1-d10_amd64.deb
        res_imagepath=$(echo $reshtml | grep -o -E "/ylx2016/kernel/releases/download[^\"]+/linux-image[^\"]+(`echo ${use_img_version}`)[^\"]+" | head -1)
        res_headerspath=$(echo $reshtml | grep -o -E "/ylx2016/kernel/releases/download[^\"]+/linux-headers[^\"]+(${use_img_version})[^\"]+" | head -1)

        # 提取到实际的下载地址
        res_imagepath="https://github.com${res_imagepath}"
        res_headerspath="https://github.com${res_headerspath}"

        # 提取到实际的文件名
        res_image_name=${res_imagepath#*download*/*/}
        res_headers_name=${res_headerspath#*download*/*/}

        # 提取kernel的version
        kernel_version=${res_image_name%-$use_img_version*}
        echo "内核版本1：${kernel_version}"
        kernel_version=${kernel_version#kernel-}
        echo "内核版本2：${kernel_version}"

        # 判断文件名是否有效，如果无效，return
        if [ -n ${res_image_name} ]; then
            # 执行
            wget -N --no-check-certificate ${res_imagepath}
            wget -N --no-check-certificate ${res_headerspath}

            echo "ImageName: ${res_image_name}"
            echo "HeadersName: ${res_headers_name}"
            echo "内核版本3：${kernel_version}"

            stty erase '^H' && read -p "请确认是否正确，好安装内核 ? [Y/n] :" yn
            [ -z "${yn}" ] && yn="y"
            if [[ $yn == [Yy] ]]; then
                echo -e "继续下一步操作..."
                dpkg -i ${res_image_name}
                dpkg -i ${res_headers_name}
            else
                return
            fi
        else
            echo "获取最新的linux-image失败";
            return;
        fi
    fi
    UpdateKernelAndRemoveOld
}

UpdateKernelAndRemoveOld(){
    cd .. && rm -rf bbr
	detele_kernel
	BBR_grub
	echo -e "${Tip} ${Red_font_prefix}请检查上面是否有内核信息，无内核千万别重启${Font_color_suffix}"
	echo -e "${Tip} ${Red_font_prefix}rescue不是正常内核，要排除这个${Font_color_suffix}"
	echo -e "${Tip} 重启VPS后，请重新运行脚本开启${Red_font_prefix}BBR${Font_color_suffix}"
	stty erase '^H' && read -p "需要重启VPS后，才能开启BBR，是否现在重启 ? [Y/n] :" yn
	[ -z "${yn}" ] && yn="y"
	if [[ $yn == [Yy] ]]; then
		echo -e "${Info} VPS 重启中..."
		reboot
	fi
}

#安装BBRplus内核
installbbrplus(){
	kernel_version="4.14.160-bbrplus"
	bit=`uname -m`
	rm -rf bbrplus
	mkdir bbrplus && cd bbrplus
	if [[ "${release}" == "centos" ]]; then
		if [[ ${version} = "6" ]]; then
			if [[ ${bit} = "x86_64" ]]; then
				wget -N --no-check-certificate https://github.com/ylx2016/kernel/releases/download/4.14.168bbrplus/kernel-headers-4.14.168_bbrplus-1-c6.x86_64.rpm
				wget -N --no-check-certificate https://github.com/ylx2016/kernel/releases/download/4.14.168bbrplus/kernel-4.14.168_bbrplus-1-c6.x86_64.rpm
				yum install -y kernel-4.14.168_bbrplus-1-c6.x86_64.rpm
				yum install -y kernel-headers-4.14.168_bbrplus-1-c6.x86_64.rpm

				kernel_version="4.14.168_bbrplus"
			else
				echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
			fi

		elif [[ ${version} = "7" ]]; then
			if [[ ${bit} = "x86_64" ]]; then
				wget -N --no-check-certificate https://github.com/chiakge/Linux-NetSpeed/raw/master/bbrplus/centos/7/kernel-4.14.129-bbrplus.rpm
				wget -N --no-check-certificate https://github.com/chiakge/Linux-NetSpeed/raw/master/bbrplus/centos/7/kernel-headers-4.14.129-bbrplus.rpm
				yum install -y kernel-4.14.129-bbrplus.rpm
				yum install -y kernel-headers-4.14.129-bbrplus.rpm


				kernel_version="4.14.129_bbrplus"
			else
				echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
			fi
		elif [[ ${version} = "8" ]]; then
				wget -N --no-check-certificate https://github.com/ylx2016/kernel/releases/download/4.14.168bbrplus/kernel-headers-4.14.168_bbrplus-1-c8.x86_64.rpm
				wget -N --no-check-certificate https://github.com/ylx2016/kernel/releases/download/4.14.168bbrplus/kernel-4.14.168_bbrplus-1-c8.x86_64.rpm
				yum install -y kernel-4.14.168_bbrplus-1-c8.x86_64.rpm
				yum install -y kernel-headers-4.14.168_bbrplus-1-c8.x86_64.rpm

				kernel_version="4.14.168_bbrplus"
		fi

	elif [[ "${release}" == "debian" || "${release}" == "ubuntu" ]]; then
		if [[ "${release}" == "debian" ]]; then
			if [[ ${version} = "8" ]]; then
				if [[ ${bit} = "x86_64" ]]; then
					wget -N --no-check-certificate https://github.com/chiakge/Linux-NetSpeed/raw/master/bbrplus/debian-ubuntu/x64/linux-image-4.14.129-bbrplus.deb
					wget -N --no-check-certificate https://github.com/chiakge/Linux-NetSpeed/raw/master/bbrplus/debian-ubuntu/x64/linux-headers-4.14.129-bbrplus.deb

					dpkg -i linux-image-4.14.129-bbrplus.deb
					dpkg -i linux-headers-4.14.129-bbrplus.deb

					kernel_version="4.14.129-bbrplus"
				else
					echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
				fi

			elif [[ ${version} = "9" ]]; then
				if [[ ${bit} = "x86_64" ]]; then
					wget -N --no-check-certificate https://github.com/chiakge/Linux-NetSpeed/raw/master/bbrplus/debian-ubuntu/x64/linux-image-4.14.129-bbrplus.deb
					wget -N --no-check-certificate https://github.com/chiakge/Linux-NetSpeed/raw/master/bbrplus/debian-ubuntu/x64/linux-headers-4.14.129-bbrplus.deb

					dpkg -i linux-image-4.14.129-bbrplus.deb
					dpkg -i linux-headers-4.14.129-bbrplus.deb

					kernel_version="4.14.129-bbrplus"
				else
					echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
				fi
			elif [[ ${version} = "10" ]]; then
				if [[ ${bit} = "x86_64" ]]; then
					wget -N --no-check-certificate https://github.com/chiakge/Linux-NetSpeed/raw/master/bbrplus/debian-ubuntu/x64/linux-image-4.14.129-bbrplus.deb
					wget -N --no-check-certificate https://github.com/chiakge/Linux-NetSpeed/raw/master/bbrplus/debian-ubuntu/x64/linux-headers-4.14.129-bbrplus.deb

					dpkg -i linux-image-4.14.129-bbrplus.deb
					dpkg -i linux-headers-4.14.129-bbrplus.deb

					kernel_version="4.14.129-bbrplus"
				else
					echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
				fi
			fi
			elif [[ "${release}" == "ubuntu" ]]; then
			if [[ ${version} = "16" ]]; then
				if [[ ${bit} = "x86_64" ]]; then
					wget -N --no-check-certificate https://github.com/chiakge/Linux-NetSpeed/raw/master/bbrplus/debian-ubuntu/x64/linux-image-4.14.129-bbrplus.deb
					wget -N --no-check-certificate https://github.com/chiakge/Linux-NetSpeed/raw/master/bbrplus/debian-ubuntu/x64/linux-headers-4.14.129-bbrplus.deb

					dpkg -i linux-image-4.14.129-bbrplus.deb
					dpkg -i linux-headers-4.14.129-bbrplus.deb

					kernel_version="4.14.129-bbrplus"
				else
					echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
				fi

			elif [[ ${version} = "18" ]]; then
				if [[ ${bit} = "x86_64" ]]; then
					wget -N --no-check-certificate https://github.com/chiakge/Linux-NetSpeed/raw/master/bbrplus/debian-ubuntu/x64/linux-image-4.14.129-bbrplus.deb
					wget -N --no-check-certificate https://github.com/chiakge/Linux-NetSpeed/raw/master/bbrplus/debian-ubuntu/x64/linux-headers-4.14.129-bbrplus.deb

					dpkg -i linux-image-4.14.129-bbrplus.deb
					dpkg -i linux-headers-4.14.129-bbrplus.deb

					kernel_version="4.14.129-bbrplus"
				else
					echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
				fi
			elif [[ ${version} = "10" ]]; then
				if [[ ${bit} = "x86_64" ]]; then
					wget -N --no-check-certificate https://github.com/chiakge/Linux-NetSpeed/raw/master/bbrplus/debian-ubuntu/x64/linux-image-4.14.129-bbrplus.deb
					wget -N --no-check-certificate https://github.com/chiakge/Linux-NetSpeed/raw/master/bbrplus/debian-ubuntu/x64/linux-headers-4.14.129-bbrplus.deb

					dpkg -i linux-image-4.14.129-bbrplus.deb
					dpkg -i linux-headers-4.14.129-bbrplus.deb

					kernel_version="4.14.129-bbrplus"
				else
					echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
				fi
			fi
		#else
		#	wget -N --no-check-certificate https://github.com/ylx2016/kernel/raw/2020.1.17/debian9/linux-headers-4.14.165-bbrplus_4.14.165-bbrplus-1_amd64.deb
		#	wget -N --no-check-certificate https://github.com/ylx2016/kernel/raw/2020.1.17/debian9/linux-image-4.14.165-bbrplus_4.14.165-bbrplus-1_amd64.deb
		#	dpkg -i linux-headers-4.14.165-bbrplus_4.14.165-bbrplus-1_amd64.deb
		#	dpkg -i linux-image-4.14.165-bbrplus_4.14.165-bbrplus-1_amd64.deb

		#	kernel_version="4.14.165-bbrplus"

		fi
	fi

	cd .. && rm -rf bbrplus
	detele_kernel
	BBR_grub
	echo -e "${Tip} ${Red_font_prefix}请检查上面是否有内核信息，无内核千万别重启${Font_color_suffix}"
	echo -e "${Tip} ${Red_font_prefix}rescue不是正常内核，要排除这个${Font_color_suffix}"
	echo -e "${Tip} 重启VPS后，请重新运行脚本开启${Red_font_prefix}BBRplus${Font_color_suffix}"
	stty erase '^H' && read -p "需要重启VPS后，才能开启BBRplus，是否现在重启 ? [Y/n] :" yn
	[ -z "${yn}" ] && yn="y"
	if [[ $yn == [Yy] ]]; then
		echo -e "${Info} VPS 重启中..."
		reboot
	fi
	#echo -e "${Tip} 内核安装完毕，请参考上面的信息检查是否安装成功及手动调整内核启动顺序"
}

#安装Lotserver内核
installlot(){
	if [[ "${release}" == "centos" ]]; then
		rpm --import http://${github_lotserver}/lotserver/${release}/RPM-GPG-KEY-elrepo.org
		yum remove -y kernel-firmware
		yum install -y http://${github_lotserver}/lotserver/${release}/${version}/${bit}/kernel-firmware-${kernel_version}.rpm
		yum install -y http://${github_lotserver}/lotserver/${release}/${version}/${bit}/kernel-${kernel_version}.rpm
		yum remove -y kernel-headers
		yum install -y http://${github_lotserver}/lotserver/${release}/${version}/${bit}/kernel-headers-${kernel_version}.rpm
		yum install -y http://${github_lotserver}/lotserver/${release}/${version}/${bit}/kernel-devel-${kernel_version}.rpm
	elif [[ "${release}" == "ubuntu" ]]; then
		bash <(wget --no-check-certificate -qO- "http://${github_lotserver}/Debian_Kernel.sh")
	elif [[ "${release}" == "debian" ]]; then
		bash <(wget --no-check-certificate -qO- "http://${github_lotserver}/Debian_Kernel.sh")
	fi

	detele_kernel
	BBR_grub
	echo -e "${Tip} ${Red_font_prefix}请检查上面是否有内核信息，无内核千万别重启${Font_color_suffix}"
	echo -e "${Tip} ${Red_font_prefix}rescue不是正常内核，要排除这个${Font_color_suffix}"
	echo -e "${Tip} 重启VPS后，请重新运行脚本开启${Red_font_prefix}Lotserver${Font_color_suffix}"
	stty erase '^H' && read -p "需要重启VPS后，才能开启Lotserver，是否现在重启 ? [Y/n] :" yn
	[ -z "${yn}" ] && yn="y"
	if [[ $yn == [Yy] ]]; then
		echo -e "${Info} VPS 重启中..."
		reboot
	fi
	#echo -e "${Tip} 内核安装完毕，请参考上面的信息检查是否安装成功及手动调整内核启动顺序"
}

#安装xanmod内核  from xanmod.org
installxanmod(){
	kernel_version="5.5.1-xanmod1"
	bit=`uname -m`
	rm -rf xanmod
	mkdir xanmod && cd xanmod
	if [[ "${release}" == "centos" ]]; then
		if [[ ${version} = "7" ]]; then
			if [[ ${bit} = "x86_64" ]]; then
				wget -N --no-check-certificate https://github.com/ylx2016/kernel/releases/download/5.5.1xanmod/kernel-5.5.1_xanmod1-1-c7.x86_64.rpm
				wget -N --no-check-certificate https://github.com/ylx2016/kernel/releases/download/5.5.1xanmod/kernel-headers-5.5.1_xanmod1-1-c7.x86_64.rpm

				yum install -y kernel-5.5.1_xanmod1-1-c7.x86_64.rpm
				yum install -y kernel-headers-5.5.1_xanmod1-1-c7.x86_64.rpm

				kernel_version="5.5.1_xanmod1"
			else
				echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
			fi
		elif [[ ${version} = "8" ]]; then
				wget -N --no-check-certificate https://github.com/ylx2016/kernel/releases/download/5.5.1xanmod/kernel-5.5.1_xanmod1-1-c8.x86_64.rpm
				wget -N --no-check-certificate https://github.com/ylx2016/kernel/releases/download/5.5.1xanmod/kernel-headers-5.5.1_xanmod1-1-c8.x86_64.rpm
				yum install -y kernel-5.5.1_xanmod1-1-c8.x86_64.rpm
				yum install -y kernel-headers-5.5.1_xanmod1-1-c8.x86_64.rpm

				kernel_version="5.5.1_xanmod1"
		fi

	elif [[ "${release}" == "debian" ]]; then
		if [[ ${version} = "9" ]]; then
			if [[ ${bit} = "x86_64" ]]; then
				wget -N --no-check-certificate https://github.com/ylx2016/kernel/releases/download/5.5.1xanmod/linux-headers-5.5.1-xanmod1_5.5.1-xanmod1-1-d9_amd64.deb
				wget -N --no-check-certificate https://github.com/ylx2016/kernel/releases/download/5.5.1xanmod/linux-image-5.5.1-xanmod1_5.5.1-xanmod1-1-d9_amd64.deb

				dpkg -i linux-image-5.5.1-xanmod1_5.5.1-xanmod1-1-d9_amd64.deb
				dpkg -i linux-headers-5.5.1-xanmod1_5.5.1-xanmod1-1-d9_amd64.deb

				#kernel_version="4.14.168-bbrplus"
			else
				echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
			fi
		elif [[ ${version} = "10" ]]; then
			if [[ ${bit} = "x86_64" ]]; then
				wget -N --no-check-certificate https://github.com/ylx2016/kernel/releases/download/5.5.1xanmod/linux-headers-5.5.1-xanmod1_5.5.1-xanmod1-1-d10_amd64.deb
				wget -N --no-check-certificate https://github.com/ylx2016/kernel/releases/download/5.5.1xanmod/linux-image-5.5.1-xanmod1_5.5.1-xanmod1-1-d10_amd64.deb

				dpkg -i linux-image-5.5.1-xanmod1_5.5.1-xanmod1-1-d10_amd64.deb
				dpkg -i linux-headers-5.5.1-xanmod1_5.5.1-xanmod1-1-d10_amd64.deb

				#kernel_version="4.14.168-bbrplus"
			else
				echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
			fi
		fi
	fi

	cd .. && rm -rf xanmod
	detele_kernel
	BBR_grub
	echo -e "${Tip} ${Red_font_prefix}请检查上面是否有内核信息，无内核千万别重启${Font_color_suffix}"
	echo -e "${Tip} ${Red_font_prefix}rescue不是正常内核，要排除这个${Font_color_suffix}"
	echo -e "${Tip} 重启VPS后，请重新运行脚本开启${Red_font_prefix}BBR${Font_color_suffix}"
	stty erase '^H' && read -p "需要重启VPS后，才能开启BBR，是否现在重启 ? [Y/n] :" yn
	[ -z "${yn}" ] && yn="y"
	if [[ $yn == [Yy] ]]; then
		echo -e "${Info} VPS 重启中..."
		reboot
	fi
	#echo -e "${Tip} 内核安装完毕，请参考上面的信息检查是否安装成功及手动调整内核启动顺序"
}

#安装bbr2内核
installbbr2(){
	kernel_version="5.4.0-rc6"
	bit=`uname -m`
	rm -rf bbr2
	mkdir bbr2 && cd bbr2
	if [[ "${release}" == "centos" ]]; then
		if [[ ${version} = "7" ]]; then
			if [[ ${bit} = "x86_64" ]]; then
				wget -N --no-check-certificate https://github.com/ylx2016/kernel/releases/download/5.4.0r6bbr2/kernel-5.4.0_rc6-1-bbr2-c7.x86_64.rpm
				wget -N --no-check-certificate https://github.com/ylx2016/kernel/releases/download/5.4.0r6bbr2/kernel-headers-5.4.0_rc6-1-bbr2-c7.x86_64.rpm

				yum install -y kernel-5.4.0_rc6-1-bbr2-c7.x86_64.rpm
				yum install -y kernel-headers-5.4.0_rc6-1-bbr2-c7.x86_64.rpm

				kernel_version="5.4.0_rc6"
			else
				echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
			fi
		elif [[ ${version} = "8" ]]; then
				wget -N --no-check-certificate https://github.com/ylx2016/kernel/releases/download/5.4.0r6bbr2/kernel-5.4.0_rc6-1-bbr2-c8.x86_64.rpm
				wget -N --no-check-certificate https://github.com/ylx2016/kernel/releases/download/5.4.0r6bbr2/kernel-headers-5.4.0_rc6-1-bbr2-c8.x86_64.rpm
				yum install -y kernel-5.4.0_rc6-1-bbr2-c8.x86_64.rpm
				yum install -y kernel-headers-5.4.0_rc6-1-bbr2-c8.x86_64.rpm

				kernel_version="5.4.0_rc6"
		fi

	elif [[ "${release}" == "debian" ]]; then
		if [[ ${version} = "9" ]]; then
			if [[ ${bit} = "x86_64" ]]; then
				wget -N --no-check-certificate https://github.com/ylx2016/kernel/releases/download/5.4.0r6bbr2/linux-image-5.4.0-rc6_5.4.0-rc6-1-bbr2-d9_amd64.deb
				wget -N --no-check-certificate https://github.com/ylx2016/kernel/releases/download/5.4.0r6bbr2/linux-headers-5.4.0-rc6_5.4.0-rc6-1-bbr2-d9_amd64.deb

				dpkg -i linux-image-5.4.0-rc6_5.4.0-rc6-1-bbr2-d9_amd64.deb
				dpkg -i linux-headers-5.4.0-rc6_5.4.0-rc6-1-bbr2-d9_amd64.deb

				#kernel_version="4.14.168-bbrplus"
			else
				echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
			fi
		elif [[ ${version} = "10" ]]; then
			if [[ ${bit} = "x86_64" ]]; then
				wget -N --no-check-certificate https://github.com/ylx2016/kernel/releases/download/5.4.0r6bbr2/linux-headers-5.4.0-rc6_5.4.0-rc6-1-bbr2-d10_amd64.deb
				wget -N --no-check-certificate https://github.com/ylx2016/kernel/releases/download/5.4.0r6bbr2/linux-image-5.4.0-rc6_5.4.0-rc6-1-bbr2-d10_amd64.deb

				dpkg -i linux-image-5.4.0-rc6_5.4.0-rc6-1-bbr2-d10_amd64.deb
				dpkg -i linux-headers-5.4.0-rc6_5.4.0-rc6-1-bbr2-d10_amd64.deb

				#kernel_version="4.14.168-bbrplus"
			else
				echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
			fi
		fi
	fi

	cd .. && rm -rf bbr2
	detele_kernel
	BBR_grub
	echo -e "${Tip} ${Red_font_prefix}请检查上面是否有内核信息，无内核千万别重启${Font_color_suffix}"
	echo -e "${Tip} ${Red_font_prefix}rescue不是正常内核，要排除这个${Font_color_suffix}"
	echo -e "${Tip} 重启VPS后，请重新运行脚本开启${Red_font_prefix}BBR${Font_color_suffix}"
	stty erase '^H' && read -p "需要重启VPS后，才能开启BBR2，是否现在重启 ? [Y/n] :" yn
	[ -z "${yn}" ] && yn="y"
	if [[ $yn == [Yy] ]]; then
		echo -e "${Info} VPS 重启中..."
		reboot
	fi
	#echo -e "${Tip} 内核安装完毕，请参考上面的信息检查是否安装成功及手动调整内核启动顺序"
}

#安装Zen内核
installzen(){
	kernel_version="5.5.2-zen"
	bit=`uname -m`
	rm -rf zen
	mkdir zen && cd zen
	if [[ "${release}" == "centos" ]]; then
		if [[ ${version} = "7" ]]; then
			if [[ ${bit} = "x86_64" ]]; then
				wget -N --no-check-certificate https://github.com/ylx2016/kernel/releases/download/5.5.2zen/kernel-5.5.2_zen-1-c7.x86_64.rpm
				wget -N --no-check-certificate https://github.com/ylx2016/kernel/releases/download/5.5.2zen/kernel-headers-5.5.2_zen-1-c7.x86_64.rpm

				yum install -y kernel-5.5.2_zen-1-c7.x86_64.rpm
				yum install -y kernel-headers-5.5.2_zen-1-c7.x86_64.rpm

				kernel_version="5.5.2_zen"
			else
				echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
			fi
		elif [[ ${version} = "8" ]]; then
				wget -N --no-check-certificate https://github.com/ylx2016/kernel/releases/download/5.5.2zen/kernel-5.5.2_zen-1-c8.x86_64.rpm
				wget -N --no-check-certificate https://github.com/ylx2016/kernel/releases/download/5.5.2zen/kernel-headers-5.5.2_zen-1-c8.x86_64.rpm
				yum install -y kernel-5.5.2_zen-1-c8.x86_64.rpm
				yum install -y kernel-headers-5.5.2_zen-1-c8.x86_64.rpm

				kernel_version="5.5.2_zen"
		fi

	elif [[ "${release}" == "debian" ]]; then
		if [[ ${version} = "9" ]]; then
			if [[ ${bit} = "x86_64" ]]; then
				wget -N --no-check-certificate https://github.com/ylx2016/kernel/releases/download/5.5.2zen/linux-headers-5.5.2-zen_5.5.2-zen-1-d9_amd64.deb
				wget -N --no-check-certificate https://github.com/ylx2016/kernel/releases/download/5.5.2zen/linux-image-5.5.2-zen_5.5.2-zen-1-d9_amd64.deb

				dpkg -i linux-image-5.5.2-zen_5.5.2-zen-1-d9_amd64.deb
				dpkg -i linux-headers-5.5.2-zen_5.5.2-zen-1-d9_amd64.deb

				#kernel_version="4.14.168-bbrplus"
			else
				echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
			fi
		elif [[ ${version} = "10" ]]; then
			if [[ ${bit} = "x86_64" ]]; then
				wget -N --no-check-certificate https://github.com/ylx2016/kernel/releases/download/5.5.2zen/linux-headers-5.5.2-zen_5.5.2-zen-1-d10_amd64.deb
				wget -N --no-check-certificate https://github.com/ylx2016/kernel/releases/download/5.5.2zen/linux-image-5.5.2-zen_5.5.2-zen-1-d10_amd64.deb

				dpkg -i linux-image-5.5.2-zen_5.5.2-zen-1-d10_amd64.deb
				dpkg -i linux-headers-5.5.2-zen_5.5.2-zen-1-d10_amd64.deb

				#kernel_version="4.14.168-bbrplus"
			else
				echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
			fi
		fi
	fi

	cd .. && rm -rf zen
	detele_kernel
	BBR_grub
	echo -e "${Tip} ${Red_font_prefix}请检查上面是否有内核信息，无内核千万别重启${Font_color_suffix}"
	echo -e "${Tip} ${Red_font_prefix}rescue不是正常内核，要排除这个${Font_color_suffix}"
	echo -e "${Tip} 重启VPS后，请重新运行脚本开启${Red_font_prefix}BBR${Font_color_suffix}"
	stty erase '^H' && read -p "需要重启VPS后，才能开启BBR2，是否现在重启 ? [Y/n] :" yn
	[ -z "${yn}" ] && yn="y"
	if [[ $yn == [Yy] ]]; then
		echo -e "${Info} VPS 重启中..."
		reboot
	fi
	#echo -e "${Tip} 内核安装完毕，请参考上面的信息检查是否安装成功及手动调整内核启动顺序"
}

#启用BBR+fq
startbbrfq(){
	remove_all
	echo "net.core.default_qdisc=fq" >> /etc/sysctl.conf
	echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf
	sysctl -p
	echo -e "${Info}BBR+FQ启动成功！"
}

#启用BBR+cake
startbbrcake(){
	remove_all
	echo "net.core.default_qdisc=cake" >> /etc/sysctl.conf
	echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf
	sysctl -p
	echo -e "${Info}BBR+cake启动成功！"
}

#启用BBRplus
startbbrplus(){
	remove_all
	echo "net.core.default_qdisc=fq" >> /etc/sysctl.conf
	echo "net.ipv4.tcp_congestion_control=bbrplus" >> /etc/sysctl.conf
	sysctl -p
	echo -e "${Info}BBRplus启动成功！"
}

#启用Lotserver
startlotserver(){
	remove_all
	if [[ "${release}" == "centos" ]]; then
		yum install ethtool
	else
		apt-get update
		apt-get install ethtool
	fi
	bash <(wget --no-check-certificate -qO- https://raw.githubusercontent.com/chiakge/lotServer/master/Install.sh) install
	sed -i '/advinacc/d' /appex/etc/config
	sed -i '/maxmode/d' /appex/etc/config
	echo -e "advinacc=\"1\"
maxmode=\"1\"">>/appex/etc/config
	/appex/bin/lotServer.sh restart
	start_menu
}

#启用BBR2+FQ
startbbr2fq(){
	remove_all
	echo "net.ipv4.tcp_ecn=0" >> /etc/sysctl.conf
	echo "net.core.default_qdisc=fq" >> /etc/sysctl.conf
	echo "net.ipv4.tcp_congestion_control=bbr2" >> /etc/sysctl.conf
	sysctl -p
	echo -e "${Info}BBR2启动成功！"
}

#启用BBR2+CAKE
startbbr2cake(){
	remove_all
	echo "net.ipv4.tcp_ecn=0" >> /etc/sysctl.conf
	echo "net.core.default_qdisc=cake" >> /etc/sysctl.conf
	echo "net.ipv4.tcp_congestion_control=bbr2" >> /etc/sysctl.conf
	sysctl -p
	echo -e "${Info}BBR2启动成功！"
}

#启用bbrWhyfine(Zen内核)
startWhyfine(){
	remove_all
	echo "net.ipv4.tcp_ecn=1" >> /etc/sysctl.conf
	echo "net.core.default_qdisc=pfifo_fast" >> /etc/sysctl.conf
	echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf
	sysctl -p
	echo -e "${Info}BBR启动成功！"
}

#启用BBR2+CAKE+ecn
startbbr2cakeecn(){
	remove_all
	echo "net.ipv4.tcp_ecn=1" >> /etc/sysctl.conf
	echo "net.core.default_qdisc=cake" >> /etc/sysctl.conf
	echo "net.ipv4.tcp_congestion_control=bbr2" >> /etc/sysctl.conf
	sysctl -p
	echo -e "${Info}BBR2启动成功！"
}


#卸载全部加速
remove_all(){
	rm -rf bbrmod
	sed -i '/net.ipv4.tcp_retries2/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_slow_start_after_idle/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_fastopen/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_ecn/d' /etc/sysctl.conf
	sed -i '/net.core.default_qdisc/d' /etc/sysctl.conf
    sed -i '/net.ipv4.tcp_congestion_control/d' /etc/sysctl.conf
    sed -i '/fs.file-max/d' /etc/sysctl.conf
	sed -i '/net.core.rmem_max/d' /etc/sysctl.conf
	sed -i '/net.core.wmem_max/d' /etc/sysctl.conf
	sed -i '/net.core.rmem_default/d' /etc/sysctl.conf
	sed -i '/net.core.wmem_default/d' /etc/sysctl.conf
	sed -i '/net.core.netdev_max_backlog/d' /etc/sysctl.conf
	sed -i '/net.core.somaxconn/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_syncookies/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_tw_reuse/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_tw_recycle/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_fin_timeout/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_keepalive_time/d' /etc/sysctl.conf
	sed -i '/net.ipv4.ip_local_port_range/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_max_syn_backlog/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_max_tw_buckets/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_rmem/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_wmem/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_mtu_probing/d' /etc/sysctl.conf
	sed -i '/net.ipv4.ip_forward/d' /etc/sysctl.conf
	sed -i '/fs.inotify.max_user_instances/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_syncookies/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_fin_timeout/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_tw_reuse/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_max_syn_backlog/d' /etc/sysctl.conf
	sed -i '/net.ipv4.ip_local_port_range/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_max_tw_buckets/d' /etc/sysctl.conf
	sed -i '/net.ipv4.route.gc_timeout/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_synack_retries/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_syn_retries/d' /etc/sysctl.conf
	sed -i '/net.core.somaxconn/d' /etc/sysctl.conf
	sed -i '/net.core.netdev_max_backlog/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_timestamps/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_max_orphans/d' /etc/sysctl.conf
	if [[ -e /appex/bin/lotServer.sh ]]; then
		bash <(wget --no-check-certificate -qO- https://github.com/MoeClub/lotServer/raw/master/Install.sh) uninstall
	fi
	clear
	echo -e "${Info}:清除加速完成。"
	sleep 1s
}

#优化系统配置
optimizing_system(){
	sed -i '/net.ipv4.tcp_retries2/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_slow_start_after_idle/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_fastopen/d' /etc/sysctl.conf
	sed -i '/fs.file-max/d' /etc/sysctl.conf
	sed -i '/fs.inotify.max_user_instances/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_syncookies/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_fin_timeout/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_tw_reuse/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_max_syn_backlog/d' /etc/sysctl.conf
	sed -i '/net.ipv4.ip_local_port_range/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_max_tw_buckets/d' /etc/sysctl.conf
	sed -i '/net.ipv4.route.gc_timeout/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_synack_retries/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_syn_retries/d' /etc/sysctl.conf
	sed -i '/net.core.somaxconn/d' /etc/sysctl.conf
	sed -i '/net.core.netdev_max_backlog/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_timestamps/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_max_orphans/d' /etc/sysctl.conf
	sed -i '/net.ipv4.ip_forward/d' /etc/sysctl.conf
	echo "net.ipv4.tcp_retries2 = 8
net.ipv4.tcp_slow_start_after_idle = 0
net.ipv4.tcp_fastopen = 3
fs.file-max = 1000000
fs.inotify.max_user_instances = 8192
net.core.rmem_max = 67108864
net.core.wmem_max = 67108864
net.core.rmem_default = 65536
net.core.wmem_default = 65536
net.ipv4.tcp_syncookies = 1
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_tw_recycle = 0
net.ipv4.tcp_fin_timeout = 20
net.ipv4.tcp_keepalive_time = 1200
net.ipv4.ip_local_port_range = 1024 65000
net.ipv4.tcp_max_syn_backlog = 16384
net.ipv4.tcp_max_tw_buckets = 6000
net.ipv4.route.gc_timeout = 100
net.ipv4.tcp_syn_retries = 1
net.ipv4.tcp_synack_retries = 1
net.core.somaxconn = 32768
net.core.netdev_max_backlog = 32768
net.ipv4.tcp_timestamps = 0
net.ipv4.tcp_max_orphans = 32768
net.ipv4.tcp_rmem = 4096 87380 67108864
net.ipv4.tcp_wmem = 4096 65536 67108864
net.ipv4.tcp_mtu_probing = 1
# forward ipv4
net.ipv4.ip_forward = 1">>/etc/sysctl.conf
	sysctl -p
	echo "*               soft    nofile           1000000
*               hard    nofile          1000000">/etc/security/limits.conf
	echo "ulimit -SHn 1000000">>/etc/profile
	read -p "需要重启VPS后，才能生效系统优化配置，是否现在重启 ? [Y/n] :" yn
	[ -z "${yn}" ] && yn="y"
	if [[ $yn == [Yy] ]]; then
		echo -e "${Info} VPS 重启中..."
		reboot
	fi
}
#更新脚本
Update_Shell(){
	echo -e "当前版本为 [ ${sh_ver} ]，开始检测最新版本..."
	sh_new_ver=$(wget --no-check-certificate -qO- "https://${github_lotserver}/tcp.sh"|grep 'sh_ver="'|awk -F "=" '{print $NF}'|sed 's/\"//g'|head -1)
	[[ -z ${sh_new_ver} ]] && echo -e "${Error} 检测最新版本失败 !" && start_menu
	if [[ ${sh_new_ver} != ${sh_ver} ]]; then
		echo -e "发现新版本[ ${sh_new_ver} ]，是否更新？[Y/n]"
		read -p "(默认: y):" yn
		[[ -z "${yn}" ]] && yn="y"
		if [[ ${yn} == [Yy] ]]; then
			wget -N --no-check-certificate http://${github_lotserver}/tcp.sh && chmod +x tcp.sh
			echo -e "脚本已更新为最新版本[ ${sh_new_ver} ] !"
		else
			echo && echo "	已取消..." && echo
		fi
	else
		echo -e "当前已是最新版本[ ${sh_new_ver} ] !"
		sleep 5s
	fi
}

#开始菜单
start_menu(){
clear
echo && echo -e " TCP加速 一键安装管理脚本 ${Red_font_prefix}[v${sh_ver}]${Font_color_suffix}

 ${Green_font_prefix}0.${Font_color_suffix} 升级脚本
 ${Green_font_prefix}66.${Font_color_suffix} 安装wget和curl并继续
————————————内核管理————————————
 ${Green_font_prefix}1.${Font_color_suffix} 安装 BBR原版内核 - 直接使用最新内核
 ${Green_font_prefix}2.${Font_color_suffix} 安装 BBRplus版内核 - 4.14.168
 ${Green_font_prefix}3.${Font_color_suffix} 安装 Lotserver(锐速)内核 - 多种
 ${Green_font_prefix}4.${Font_color_suffix} 安装 xanmod版内核 - 5.5.1
 ${Green_font_prefix}5.${Font_color_suffix} 安装 BBR2测试版内核 - 5.4.0
 ${Green_font_prefix}6.${Font_color_suffix} 安装 Zen版内核 - 5.5.2
————————————加速管理————————————
 ${Green_font_prefix}11.${Font_color_suffix} 使用BBR+FQ加速
 ${Green_font_prefix}12.${Font_color_suffix} 使用BBR+CAKE加速
 ${Green_font_prefix}13.${Font_color_suffix} 使用BBRplus+FQ版加速
 ${Green_font_prefix}14.${Font_color_suffix} 使用Lotserver(锐速)加速
 ${Green_font_prefix}15.${Font_color_suffix} 使用BBR2+FQ加速
 ${Green_font_prefix}16.${Font_color_suffix} 使用BBR2+CAKE加速
 ${Green_font_prefix}17.${Font_color_suffix} 启用bbrWhyfine(Zen内核)
 ${Green_font_prefix}18.${Font_color_suffix} 使用BBR2+CAKE+ECN加速
————————————杂项管理————————————
 ${Green_font_prefix}22.${Font_color_suffix} 系统配置优化 <-
 ${Green_font_prefix}21.${Font_color_suffix} 卸载全部加速
 ${Green_font_prefix}23.${Font_color_suffix} 退出脚本
————————————————————————————————" && echo

	check_status
	echo -e " 当前内核为：${Font_color_suffix}${kernel_version_r}${Font_color_suffix}"
	if [[ ${kernel_status} == "noinstall" ]]; then
		echo -e " 当前状态: ${Green_font_prefix}未安装${Font_color_suffix} 加速内核 ${Red_font_prefix}请先安装内核${Font_color_suffix}"
	else
		echo -e " 当前状态: ${Green_font_prefix}已安装${Font_color_suffix} ${_font_prefix}${kernel_status}${Font_color_suffix} 加速内核 , ${Green_font_prefix}${run_status}${Font_color_suffix}"

	fi
	echo -e " 当前拥塞控制算法为: ${Green_font_prefix}${net_congestion_control}${Font_color_suffix} 当前队列算法为: ${Green_font_prefix}${net_qdisc}${Font_color_suffix} "

echo
read -p " 请输入数字 :" num
case "$num" in
    66)
	installwgetcurl
	start_menu
	;;
	0)
	Update_Shell
	;;
	1)
	check_sys_bbr
	;;
	2)
	check_sys_bbrplus
	;;
	3)
	check_sys_Lotsever
	;;
	4)
	check_sys_xanmod
	;;
	5)
	check_sys_bbr2
	;;
	6)
	check_sys_zen
	;;
	11)
	startbbrfq
	;;
	12)
	startbbrcake
	;;
	13)
	startbbrplus
	;;
	14)
	startlotserver
	;;
	15)
	startbbr2fq
	;;
	16)
	startbbr2cake
	;;
	17)
	startWhyfine
	;;
	18)
	startbbr2cakeecn
	;;
	21)
	remove_all
	;;
	22)
	optimizing_system
	;;
	23)
	exit 1
	;;
	*)
	clear
	echo -e "${Error}:请输入正确数字 [0-11]"
	sleep 5s
	start_menu
	;;
esac
}
#############内核管理组件#############

#删除多余内核
detele_kernel(){
	if [[ "${release}" == "centos" ]]; then
		rpm_total=`rpm -qa | grep kernel | grep -v "${kernel_version}" | grep -v "noarch" | wc -l`
		if [ "${rpm_total}" > "1" ]; then
			echo -e "检测到 ${rpm_total} 个其余内核，开始卸载..."
			for((integer = 1; integer <= ${rpm_total}; integer++)); do
				rpm_del=`rpm -qa | grep kernel | grep -v "${kernel_version}" | grep -v "noarch" | head -${integer}`
				echo -e "开始卸载 ${rpm_del} 内核..."
				rpm --nodeps -e ${rpm_del}
				echo -e "卸载 ${rpm_del} 内核卸载完成，继续..."
			done
			echo --nodeps -e "内核卸载完毕，继续..."
		else
			echo -e " 检测到 内核 数量不正确，请检查 !" && exit 1
		fi
	elif [[ "${release}" == "debian" || "${release}" == "ubuntu" ]]; then
		deb_total=`dpkg -l | grep linux-image | awk '{print $2}' | grep -v "${kernel_version}" | wc -l`
		if [ "${deb_total}" > "1" ]; then
			echo -e "检测到 ${deb_total} 个其余内核，开始卸载..."
			for((integer = 1; integer <= ${deb_total}; integer++)); do
				deb_del=`dpkg -l|grep linux-image | awk '{print $2}' | grep -v "${kernel_version}" | head -${integer}`
				echo -e "开始卸载 ${deb_del} 内核..."
				apt-get purge -y ${deb_del}
				echo -e "卸载 ${deb_del} 内核卸载完成，继续..."
			done
			echo -e "内核卸载完毕，继续..."
		else
			echo -e " 检测到 内核 数量不正确，请检查 !" && exit 1
		fi
	fi
}

#更新引导
BBR_grub(){
	if [[ "${release}" == "centos" ]]; then
        if [[ ${version} = "6" ]]; then
            if [ ! -f "/boot/grub/grub.conf" ]; then
                echo -e "${Error} /boot/grub/grub.conf 找不到，请检查."
                exit 1
            fi
            sed -i 's/^default=.*/default=0/g' /boot/grub/grub.conf
        elif [[ ${version} = "7" ]]; then
            if [ ! -f "/boot/grub2/grub.cfg" ]; then
                echo -e "${Error} /boot/grub2/grub.cfg 找不到，请检查."
                exit 1
            fi
			grub2-mkconfig  -o   /boot/grub2/grub.cfg
			grub2-set-default 0

		elif [[ ${version} = "8" ]]; then
			grub2-mkconfig  -o   /boot/grub2/grub.cfg
			grubby --info=ALL|awk -F= '$1=="kernel" {print i++ " : " $2}'
        fi
    elif [[ "${release}" == "debian" || "${release}" == "ubuntu" ]]; then
        /usr/sbin/update-grub
    fi
}

#############内核管理组件#############



#############系统检测组件#############
installwgetcurl(){
    if [[ "${release}" == "centos" ]]; then
        yum update
        yum install -y wget curl
    else
        apt-get update # 不更新一下，可能装不上wget和curl
        apt-get install -y wget curl
    fi
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

#检查Linux版本
check_version(){
	if [[ -s /etc/redhat-release ]]; then
		version=`grep -oE  "[0-9.]+" /etc/redhat-release | cut -d . -f 1`
	else
		version=`grep -oE  "[0-9.]+" /etc/issue | cut -d . -f 1`
	fi
	bit=`uname -m`
	if [[ ${bit} = "x86_64" ]]; then
		bit="x64"
	else
		bit="x32"
	fi
}

#检查安装bbr的系统要求
check_sys_bbr(){
	check_version
	if [[ "${release}" == "centos" ]]; then
		if [[ ${version} = "6" || ${version} = "7" || ${version} = "8" ]]; then
			installbbr
		else
			echo -e "${Error} BBR内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		fi
	elif [[ "${release}" == "debian" ]]; then
		if [[ ${version} = "8" || ${version} = "9" || ${version} = "10" ]]; then
			installbbr
		else
			echo -e "${Error} BBR内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		fi
	elif [[ "${release}" == "ubuntu" ]]; then
		if [[ ${version} = "16" || ${version} = "18" || ${version} = "19" ]]; then
			installbbr
		else
			echo -e "${Error} BBR内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		fi
	else
		echo -e "${Error} BBR内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
	fi
}

check_sys_bbrplus(){
	check_version
	if [[ "${release}" == "centos" ]]; then
		if [[ ${version} = "6" || ${version} = "7" || ${version} = "8" ]]; then
			installbbrplus
		else
			echo -e "${Error} BBRplus内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		fi
	elif [[ "${release}" == "debian" ]]; then
		if [[ ${version} = "8" || ${version} = "9" || ${version} = "10" ]]; then
			installbbrplus
		else
			echo -e "${Error} BBRplus内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		fi
	elif [[ "${release}" == "ubuntu" ]]; then
		if [[ ${version} = "16" || ${version} = "18" || ${version} = "19" ]]; then
			installbbrplus
		else
			echo -e "${Error} BBRplus内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		fi
	else
		echo -e "${Error} BBRplus内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
	fi
}

check_sys_xanmod(){
	check_version
	if [[ "${release}" == "centos" ]]; then
		if [[ ${version} = "7" || ${version} = "8" ]]; then
			installxanmod
		else
			echo -e "${Error} xanmod内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		fi
	elif [[ "${release}" == "debian" ]]; then
		if [[ ${version} = "9" || ${version} = "10" ]]; then
			installxanmod
		else
			echo -e "${Error} xanmod内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		fi
	elif [[ "${release}" == "ubuntu" ]]; then
			echo -e "${Error} xanmod内核不支持当前系统 ${release} ${version} ${bit} ,去xanmod.org 官网安装吧!" && exit 1
	else
		echo -e "${Error} xanmod内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
	fi
}

check_sys_bbr2(){
	check_version
	if [[ "${release}" == "centos" ]]; then
		if [[ ${version} = "7" || ${version} = "8" ]]; then
			installbbr2
		else
			echo -e "${Error} bbr2内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		fi
	elif [[ "${release}" == "debian" ]]; then
		if [[ ${version} = "9" || ${version} = "10" ]]; then
			installbbr2
		else
			echo -e "${Error} bbr2内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		fi
	elif [[ "${release}" == "ubuntu" ]]; then
			echo -e "${Error} bbr2内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
	else
		echo -e "${Error} bbr2内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
	fi
}


check_sys_zen(){
	check_version
	if [[ "${release}" == "centos" ]]; then
		if [[ ${version} = "7" || ${version} = "8" ]]; then
			installzen
		else
			echo -e "${Error} zen内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		fi
	elif [[ "${release}" == "debian" ]]; then
		if [[ ${version} = "9" || ${version} = "10" ]]; then
			installzen
		else
			echo -e "${Error} zen内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		fi
	elif [[ "${release}" == "ubuntu" ]]; then
			echo -e "${Error} zen内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
	else
		echo -e "${Error} zen内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
	fi
}

#检查安装Lotsever的系统要求
check_sys_Lotsever(){
	check_version
	if [[ "${release}" == "centos" ]]; then
		if [[ ${version} == "6" ]]; then
			kernel_version="2.6.32-504"
			installlot
		elif [[ ${version} == "7" ]]; then
			yum -y install net-tools
			kernel_version="4.11.2-1"
			installlot
		else
			echo -e "${Error} Lotsever不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		fi
	elif [[ "${release}" == "debian" ]]; then
		if [[ ${version} = "7" || ${version} = "8" ]]; then
			if [[ ${bit} == "x64" ]]; then
				kernel_version="3.16.0-4"
				installlot
			elif [[ ${bit} == "x32" ]]; then
				kernel_version="3.2.0-4"
				installlot
			fi
		elif [[ ${version} = "9" ]]; then
			if [[ ${bit} == "x64" ]]; then
				kernel_version="4.9.0-4"
				installlot
			fi
		else
			echo -e "${Error} Lotsever不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		fi
	elif [[ "${release}" == "ubuntu" ]]; then
		if [[ ${version} -ge "12" ]]; then
			if [[ ${bit} == "x64" ]]; then
				kernel_version="4.4.0-47"
				installlot
			elif [[ ${bit} == "x32" ]]; then
				kernel_version="3.13.0-29"
				installlot
			fi
		else
			echo -e "${Error} Lotsever不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		fi
	else
		echo -e "${Error} Lotsever不支持当前系统 ${release} ${version} ${bit} !" && exit 1
	fi
}

check_status(){
	kernel_version=`uname -r | awk -F "-" '{print $1}'`
	kernel_version_full=`uname -r`
	net_congestion_control=`cat /proc/sys/net/ipv4/tcp_congestion_control | awk '{print $1}'`
	net_qdisc=`cat /proc/sys/net/core/default_qdisc | awk '{print $1}'`
	kernel_version_r=`uname -r | awk '{print $1}'`
	if [[ ${kernel_version_full} = "4.14.168-bbrplus" || ${kernel_version_full} = "4.14.98-bbrplus" || ${kernel_version_full} = "4.14.129-bbrplus" || ${kernel_version_full} = "4.14.160-bbrplus" || ${kernel_version_full} = "4.14.166-bbrplus" || ${kernel_version_full} = "4.14.161-bbrplus" ]]; then
		kernel_status="BBRplus"
	elif [[ ${kernel_version} = "3.10.0" || ${kernel_version} = "3.16.0" || ${kernel_version} = "3.2.0" || ${kernel_version} = "4.4.0" || ${kernel_version} = "3.13.0"  || ${kernel_version} = "2.6.32" || ${kernel_version} = "4.9.0" || ${kernel_version} = "4.11.2" ]]; then
		kernel_status="Lotserver"
	elif [[ `echo ${kernel_version} | awk -F'.' '{print $1}'` == "4" ]] && [[ `echo ${kernel_version} | awk -F'.' '{print $2}'` -ge 9 ]] || [[ `echo ${kernel_version} | awk -F'.' '{print $1}'` == "5" ]]; then
		kernel_status="BBR"
	else
		kernel_status="noinstall"
	fi


	if [[ ${kernel_status} == "BBR" ]]; then
		run_status=`cat /proc/sys/net/ipv4/tcp_congestion_control | awk '{print $1}'`
		if [[ ${run_status} == "bbr" ]]; then
			run_status=`cat /proc/sys/net/ipv4/tcp_congestion_control | awk '{print $1}'`
			if [[ ${run_status} == "bbr" ]]; then
				run_status="BBR启动成功"
			else
				run_status="BBR启动失败"
			fi
		elif [[ ${run_status} == "bbr2" ]]; then
			run_status=`cat /proc/sys/net/ipv4/tcp_congestion_control | awk '{print $1}'`
			if [[ ${run_status} == "bbr2" ]]; then
				run_status="BBR2启动成功"
			else
				run_status="BBR2启动失败"
			fi
		elif [[ ${run_status} == "tsunami" ]]; then
			run_status=`lsmod | grep "tsunami" | awk '{print $1}'`
			if [[ ${run_status} == "tcp_tsunami" ]]; then
				run_status="BBR魔改版启动成功"
			else
				run_status="BBR魔改版启动失败"
			fi
		elif [[ ${run_status} == "nanqinlang" ]]; then
			run_status=`lsmod | grep "nanqinlang" | awk '{print $1}'`
			if [[ ${run_status} == "tcp_nanqinlang" ]]; then
				run_status="暴力BBR魔改版启动成功"
			else
				run_status="暴力BBR魔改版启动失败"
			fi
		else
			run_status="未安装加速模块"
		fi

	elif [[ ${kernel_status} == "Lotserver" ]]; then
		if [[ -e /appex/bin/lotServer.sh ]]; then
			run_status=`bash /appex/bin/lotServer.sh status | grep "LotServer" | awk  '{print $3}'`
			if [[ ${run_status} = "running!" ]]; then
				run_status="启动成功"
			else
				run_status="启动失败"
			fi
		else
			run_status="未安装加速模块"
		fi
	elif [[ ${kernel_status} == "BBRplus" ]]; then
		run_status=`cat /proc/sys/net/ipv4/tcp_congestion_control | awk '{print $1}'`
		if [[ ${run_status} == "bbrplus" ]]; then
			run_status=`cat /proc/sys/net/ipv4/tcp_congestion_control | awk '{print $1}'`
			if [[ ${run_status} == "bbrplus" ]]; then
				run_status="BBRplus启动成功"
			else
				run_status="BBRplus启动失败"
			fi
		else
			run_status="未安装加速模块"
		fi
	fi
}

#############系统检测组件#############
check_sys
check_version
[[ ${release} != "debian" ]] && [[ ${release} != "ubuntu" ]] && [[ ${release} != "centos" ]] && echo -e "${Error} 本脚本不支持当前系统 ${release} !" && exit 1
start_menu
