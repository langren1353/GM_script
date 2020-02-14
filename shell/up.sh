#!/bin/sh
torrent_name=$1
content_dir=$2
root_dir=$3
save_dir=$4
files_num=$5
torrent_size=$6
file_hash=$7

qb_version="4.1.9.1" #如4.0.4、4.1.9.1、4.2.0等，不支持3.1.X
qb_username="admin" #qb用户名
qb_password="tujidu" #qb密码
qb_web_url="http://127.0.0.1:2017" #QB web路径，可以填写本地http://localhost:8080
leeching_mode="true" #吸血模式 设为true 上传完后自动删除种子及数据 否则不删除，继续做种
log_dir="/home/tujidu/data/qbauto" #日志目录
rclone_dest="AC" #rclone destination关键字 运行rclone config查看name字段即可
#########这个参数小心一点-小心硬盘速度慢##########
rclone_parallel="32" #rclone上传线程 默认4
auto_del_flag="rclone" #添加标签或者分类来标识已上传的种子 v4.0.4+版本添加标签“rclone”，低版本通过添加分类“rclone”标识
from_dc_tag="SJC" # 来源服务器标记

if [ ! -d ${log_dir} ]
then
        mkdir -p ${log_dir}
fi

version=$(echo $qb_version | grep -P -o "([0-9]\.){2}[0-9]" | sed s/\\.//g)
startPat=`date +'%Y-%m-%d %H:%M:%S'`  # 时间计算方案
start_seconds=$(date --date="$startPat" +%s);

function qb_login(){
        if [ ${version} -gt 404 ]
        then
                qb_v="1"
                cookie=$(curl -i --header "Referer: ${qb_web_url}" --data "username=${qb_username}&password=${qb_password}" "${qb_web_url}/api/v2/auth/login" | grep -P -o 'SID=\S{32}')
                if [ -n ${cookie} ]
                then
                        echo "[$(date '+%Y-%m-%d %H:%M:%S')] 登录成功！cookie:${cookie}"

                else
                        echo "[$(date '+%Y-%m-%d %H:%M:%S')] 登录失败！"
                fi
        elif [[ ${version} -le 404 && ${version} -ge 320 ]]
        then
                qb_v="2"
                cookie=$(curl -i --header "Referer: ${qb_web_url}" --data "username=${qb_username}&password=${qb_password}" "${qb_web_url}/login" | grep -P -o 'SID=\S{32}')
                if [ -n ${cookie} ]
                then
                        echo "[$(date '+%Y-%m-%d %H:%M:%S')] 登录成功！cookie:${cookie}"
                else
                        echo "[$(date '+%Y-%m-%d %H:%M:%S')] 登录失败"
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
        if [ ${leeching_mode} == "true" ]
        then
                if [ ${qb_v} == "1" ]
                then
                        curl "${qb_web_url}/api/v2/torrents/delete?hashes=${file_hash}&deleteFiles=true" --cookie ${cookie}
                        echo "[$(date '+%Y-%m-%d %H:%M:%S')] 删除成功！种子名称:${torrent_name}" >> ${log_dir}/qb.log
                elif [ ${qb_v} == "2" ]
                then
                        curl -X POST -d "hashes=${file_hash}" "${qb_web_url}/command/deletePerm" --cookie ${cookie}
                else
                        echo "[$(date '+%Y-%m-%d %H:%M:%S')] 删除成功！种子文件:${torrent_name}" >> ${log_dir}/qb.log
                        echo "qb_v=${qb_v}" >> ${log_dir}/qb.log
                fi
        else
                echo "[$(date '+%Y-%m-%d %H:%M:%S')] 不自动删除已上传种子" >> ${log_dir}/qb.log
        fi
}

function rclone_copy(){
        if [ ${type} == "file" ]
        then # 这里是rclone上传的方法
                rclone_copy_cmd=$(rclone -v copy --transfers ${rclone_parallel} --log-file  ${log_dir}/qbauto_copy.log "${content_dir}" ${rclone_dest}:/qbauto/${from_dc_tag})
        elif [ ${type} == "dir" ]
        then
                rclone_copy_cmd=$(rclone -v copy --transfers ${rclone_parallel} --log-file ${log_dir}/qbauto_copy.log "${content_dir}"/ ${rclone_dest}:/qbauto/${from_dc_tag}/"${torrent_name}")
        fi
}

function qb_add_auto_del_tags(){
        if [ ${qb_v} == "1" ]
        then # 这里是添加某些tag的方法
                curl -X POST -d "hashes=${file_hash}&tags=${auto_del_flag}" "${qb_web_url}/api/v2/torrents/addTags" --cookie "${cookie}"
        elif [ ${qb_v} == "2" ]
        then
                curl -X POST -d "hashes=${file_hash}&category=${auto_del_flag}" "${qb_web_url}/command/setCategory" --cookie ${cookie}
        else
                echo "qb_v=${qb_v}" >> ${log_dir}/qb.log
        fi
}

if [ -f "${content_dir}" ]
then
   echo "[$(date '+%Y-%m-%d %H:%M:%S')] 类型：文件" >> ${log_dir}/qb.log
   type="file"
   rclone_copy
   qb_login
   qb_add_auto_del_tags
   qb_del
elif [ -d "${content_dir}" ]
then
   echo "[$(date '+%Y-%m-%d %H:%M:%S')] 类型：目录" >> ${log_dir}/qb.log
   type="dir"
   rclone_copy
   qb_login
   qb_add_auto_del_tags
   qb_del
else
   echo "[$(date '+%Y-%m-%d %H:%M:%S')] 未知类型，取消上传" >> ${log_dir}/qb.log
fi
endPat=`date +'%Y-%m-%d %H:%M:%S'`
end_seconds=$(date --date="$endPat" +%s);
use_seconds=$((end_seconds-start_seconds));
use_min=$((use_seconds/60));
use_sec=$((use_seconds%60));

echo "种子名称：${torrent_name}" >> ${log_dir}/qb.log
echo "内容路径：${content_dir}" >> ${log_dir}/qb.log
echo "根目录：${root_dir}" >> ${log_dir}/qb.log
echo "保存路径：${save_dir}" >> ${log_dir}/qb.log
echo "文件数：${files_num}" >> ${log_dir}/qb.log
echo "文件大小：${torrent_size}Bytes" >> ${log_dir}/qb.log
echo "HASH:${file_hash}" >> ${log_dir}/qb.log
echo "Cookie:${cookie}" >> ${log_dir}/qb.log
curl "http://212.64.10.203:5700/send_private_msg?user_id=1353464539&message=上传完成-耗时:${use_min}分${use_sec}秒"
echo -e "-------------------------------------------------------------\n" >> ${log_dir}/qb.log
