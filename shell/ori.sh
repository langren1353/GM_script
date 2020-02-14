#!/bin/sh
qb_version="4.2.0"
qb_username="hostloc"
qb_password="hostloc.com"
qb_web_url="http://localhost:8080"
log_dir="/root/qbauto"
expect_ratio=0.3
auto_del_flag="rclone"

if [ ! -d ${log_dir} ]
then
	mkdir -p ${log_dir}
fi

version=$(echo ${qb_version} | grep -P -o "([0-9]\.){2}[0-9]" | sed s/\\.//g)

function qb_login(){
	if [ ${version} -gt 404 ]
	then
		qb_v="1"
		cookie=$(curl -i --header "Referer: ${qb_web_url}" --data "username=${qb_username}&password=${qb_password}" "${qb_web_url}/api/v2/auth/login" | grep -P -o 'SID=\S{32}')
		if [ -n ${cookie} ]
		then
			echo "[$(date '+%Y-%m-%d %H:%M:%S')] 登录成功！cookie:${cookie}" >> ${log_dir}/autodel.log

		else
			echo "[$(date '+%Y-%m-%d %H:%M:%S')] 登录失败！" >> ${log_dir}/autodel.log
		fi
	elif [[ ${version} -le 404 && ${version} -ge 320 ]]
	then
		qb_v="2"
		cookie=$(curl -i --header "Referer: ${qb_web_url}" --data "username=${qb_username}&password=${qb_password}" "${qb_web_url}/login" | grep -P -o 'SID=\S{32}')
		if [ -n ${cookie} ]
		then
			echo "[$(date '+%Y-%m-%d %H:%M:%S')] 登录成功！cookie:${cookie}" >> ${log_dir}/autodel.log
		else
			echo "[$(date '+%Y-%m-%d %H:%M:%S')] 登录失败" >> ${log_dir}/autodel.log
		fi
	elif [[ ${version} -ge 310 && ${version} -lt 320 ]]
	then
		qb_v="3"
		echo "陈年老版本，请及时升级"
		exit
	else
		qb_v="0"
		exit
	fi
}

function qb_del(){
	if [ ${qb_v} == "1" ]
	then
		curl "${qb_web_url}/api/v2/torrents/delete?hashes=$1&deleteFiles=true" --cookie ${cookie}
	elif [ ${qb_v} == "2" ]
	then
		curl -X POST -d "hashes=$1" "${qb_web_url}/command/deletePerm" --cookie ${cookie}
	else
		echo "删除错误" >> ${log_dir}/autodel.log
		echo "qb_v=${qb_v}" >> ${log_dir}/autodel.log
	fi
}

function qb_get_status(){
	qb_login
	if [ ${qb_v} == "1" ]
	then
		completed_torrents_num=$(curl "${qb_web_url}/api/v2/torrents/info?filter=completed" --cookie "${cookie}" | jq '.[] | length' | wc -l)
		for((i=0;i<${completed_torrents_num};i++));
		do
			del_flag=$(curl "${qb_web_url}/api/v2/torrents/info?filter=completed" --cookie "${cookie}" | jq ".[$i] | .tags" | sed s/\"//g | grep -P -o "${auto_del_flag}")
			if [ -z "${del_flag}" ]
			then
				del_flag="null"
			fi
			if [ ${del_flag} == "${auto_del_flag}" ]
			then
				real_ratio=$(curl "${qb_web_url}/api/v2/torrents/info?filter=completed" --cookie "${cookie}" | jq ".[$i] | .ratio" | grep -P -o "^[0-9]\.[0-9]{2}")
				if [ -z "${real_ratio}" ]
				then
					real_ratio=0
				fi
				del_hash=$(curl "${qb_web_url}/api/v2/torrents/info?filter=completed" --cookie "${cookie}" | jq ".[$i] | .hash" | sed s/\"//g)
				if [ $(echo "${real_ratio} >= ${expect_ratio}"|bc) = 1 ]
				then
					del_hash=$(curl "${qb_web_url}/api/v2/torrents/info?filter=completed" --cookie "${cookie}" | jq ".[$i] | .hash" | sed s/\"//g)
					qb_del ${del_hash}
					echo "做种率${real_ratio}≥${expect_ratio}，自动删除种子，种子Hash:${del_hash}" >> ${log_dir}/autodel.log
				fi
			fi
		done
	elif [ ${qb_v} == "2" ]
	then
		completed_torrents_num=$(curl "${qb_web_url}/query/torrents?filter=completed" --cookie "${cookie}" | jq '.[] | length' | wc -l)
		for((i=0;i<${completed_torrents_num};i++));
		do
			del_flag=$(curl "${qb_web_url}/query/torrents?filter=completed" --cookie "${cookie}" | jq ".[$i] | .category" | sed s/\"//g)
			if [ -z "${del_flag}" ]
			then
				del_flag="null"
			fi
			if [ ${del_flag} == "${auto_del_flag}" ]
			then
				real_ratio=$(curl "${qb_web_url}/query/torrents?filter=completed" --cookie "${cookie}" | jq ".[$i] | .ratio" | grep -P -o "^[0-9]\.[0-9]{2}")
				if [ -z "${real_ratio}" ]
				then
					real_ratio=0
				fi
				del_hash=$(curl "${qb_web_url}/query/torrents?filter=completed" --cookie "${cookie}" | jq ".[$i] | .hash" | sed s/\"//g)
				if [ $(echo "${real_ratio} >= ${expect_ratio}"|bc) = 1 ]
				then
					del_hash=$(curl "${qb_web_url}/query/torrents?filter=completed" --cookie "${cookie}" | jq ".[$i] | .hash" | sed s/\"//g)
					qb_del ${del_hash}
					echo "做种率${real_ratio}≥${expect_ratio}，自动删除种子，种子Hash:${del_hash}" >> ${log_dir}/autodel.log
				fi
			fi
		done
	else
		echo "获取错误" >> ${log_dir}/autodel.log
		echo "qb_v=${qb_v}" >> ${log_dir}/autodel.log
	fi
}

qb_get_status
