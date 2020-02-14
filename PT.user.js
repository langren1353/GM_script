// ==UserScript==
// @name PT自动处理 - 自动保活 自动签到
// @namespace ACPT
// @include *
// @run-at document-idle
// @version 2020.01.29
// @connect pthome.net
// @connect tjupt.org
// @grant   GM_getValue
// @grant   GM.getValue
// @grant   GM_setValue
// @grant   GM.setValue
// @grant   GM_notification
// @grant   GM_xmlhttpRequest
// @description PT站点自动签到，签到保活脚本 能不能用自测
// ==/UserScript==
(function () {
    'use strict';

    var ACConfig = {};
    var DefaultConfig = {
        signdate: dateFormat('yyyy-MM-dd', 1579800000000) // "2020-01-24"
    };

    if (typeof(GM) == "undefined") {
        // 这个是ViolentMonkey的支持选项
        GM = {};
        GM.setValue = GM_setValue;
        GM.getValue = GM_getValue;
    }



    /**
     * 日期格式化程序
     * @param fmt 格式化串
     * @param date 指定时间，或者不填
     * @returns {*|void|string}
     */
    function dateFormat(fmt, date) {
        date = date || new Date();
        (date instanceof Date) ? '' : (date = new Date(date));
        let ret;
        const opt = {
            "y+": date.getFullYear().toString(),        // 年
            "M+": (date.getMonth() + 1).toString(),     // 月
            "d+": date.getDate().toString(),            // 日
            "H+": date.getHours().toString(),           // 时
            "m+": date.getMinutes().toString(),         // 分
            "S+": date.getSeconds().toString()          // 秒
            // 有其他格式化字符需求可以继续添加，必须转化成字符串
        };
        for (let k in opt) {
            ret = new RegExp("(" + k + ")").exec(fmt);
            if (ret) {
                fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
            };
        };
        return fmt;
    }

    /**
     * 通过访问指定页面 + 检查是否存在指定用户
     * @param url
     * @param userName
     */
    function rebeAlive(siteName, url, userName) {
        siteName += " - ";
        return new Promise(function (resolve, reject) {
            GM_xmlhttpRequest({
                method: "GET",
                url: url,
                onload: function (response) {
                    if (response.status == 200) {
                        if (response.responseText.indexOf(userName) !== -1) {
                            resolve(siteName + "保活成功");
                        } else {
                            resolve(siteName + "需要登录");
                        }
                    } else {
                        reject(siteName + "页面无效");
                    }
                }
            });
        });
    }

    /**
     * pthome的签到程序
     * @param url 签到页面
     * @returns {Promise<any>}
     */
    function attend_PTHome(url) {
        return new Promise(function (resolve, reject) {
            GM_xmlhttpRequest({
                method: "GET",
                url: url,
                onload: function (response) {
                    var stateRes;
                    if (response.status == 200) {
                        if (response.responseText.indexOf("您今天已经签到过了") !== -1) {
                            stateRes = "今天已经签到过了";
                        } else if (response.responseText.indexOf("签到成功") !== -1) {
                            stateRes = "签到成功";
                        } else {
                            stateRes = "签到失败";
                            reject(stateRes);
                            return;
                        }
                        resolve(stateRes);
                    } else {
                        stateRes = "签到失败";
                        reject(stateRes);
                    }
                }
            });
        })
    }

    function emptyPromise(){
        return new Promise(function(){});
    }

    /**
     * positive 结果处理页
     * @param res 返回的结果
     */
    function dealOK(res) {
        console.log(res);
        return emptyPromise();
    }

    /**
     * negative 结果处理页
     * @param res 返回结果
     */
    function dealFailed(res) {
        console.error("失败警告："+res);
        GM_notification({
            'text':'网盘地址来源与上一次记录不同，记录已更新',
            'title':'网盘信息记录更新通知',
            'image':'https://eyun.baidu.com/box-static/page-common/images/favicon.ico',
            'timeout': 5
        });
        return emptyPromise();
    }

    function addStyle(css) { //添加CSS的代码--copy的--注意里面必须是双引号
        var pi = document.createProcessingInstruction(
            'xml-stylesheet',
            'type="text/css" href="data:text/css;utf-8,' + encodeURIComponent(css) + '"'
        );
        return document.insertBefore(pi, document.documentElement);
    }

    function init(){
        Promise.all([GM.getValue("Config")]).then(function (data) {
            if (data[0] != null) {
                try{
                    ACConfig = JSON.parse(data[0]);
                }catch (e) {
                    ACConfig = data[0];
                }
            } else {
                ACConfig = DefaultConfig;
            }
            for(var key in DefaultConfig){
                if(typeof(ACConfig[key]) == "undefined"){
                    ACConfig[key] = DefaultConfig[key];
                }
            }
            callback();
        }).catch(function (except) {
            console.log(except);
        });
        addStyle(
        "body .AC-Specil{background-color:#ef751e;}" +
            "body .AC-Hide{background-color:#424242;text-decoration: line-through;}" +
            "body .torrentname .sticky_top, body .torrentname .sticky_normal{background-color:unset;}" +
            "body .AC-Specil table{background-color:#ef751e !important;} " +
            "body .AC-Hide table{background-color:#424242;}");
        showSpecil("pthome.net");
    }

    function showSpecil(host){
        if(location.host.indexOf(host) >= 0){
            document.querySelectorAll(".torrents-table tr").forEach(function(pertr){
                if(pertr.innerHTML.indexOf("免费") > 0 || pertr.innerHTML.indexOf("alt=\"2X")){
                    var tds = pertr.querySelectorAll("td");
                    let hide = false;
                    let GB_UseNum = 15; // 文件最大15GB
                    for(var j = 0; j < tds.length; j++){
                        let pertdText = tds[j].innerText;
                        if(/^(\d{1,2}.\d+\s*GB|\d{1,3}.\d+\s*MB)$/.test(pertdText)){
                            let num = parseFloat(pertdText.replace(/\s*(G|M)B/, ""));
                            if(pertdText.indexOf("G") >= 0 && num < GB_UseNum || pertdText.indexOf("M") >= 0){
                                pertr.classList.add("AC-Specil");
                                console.log("添加了");
                                break;
                            }
                        }else{
                            // 3位的GB，以及TB级的都隐藏
                            if(/^\d+.\d+\s*(T|G)B$/.test(pertdText)){
                                hide = true;
                            }
                            // console.log("跳过");
                        }
                    }
                    if(hide === true){
                        pertr.classList.add("AC-Hide");
                    }
                }
            });
        }
    }

    function callback(){
        let curDate = dateFormat("yyyy-MM-dd");
        if(ACConfig.signdate != curDate){
            new Promise(function(){
                console.log("今日 PT保活 任务执行开始");

                // 进行pthome的签到
                attend_PTHome("https://pthome.net/attendance.php").then(dealOK, dealFailed);

                // 进行pthome的保活
                rebeAlive("PTHome", "https://pthome.net/subtitles.php", "RemixOS").then(dealOK, dealFailed);

                // 进行北洋的保活
                rebeAlive("北洋园PT", "https://www.tjupt.org/usercp.php", "RemixOS").then(dealOK, dealFailed);

                // TODO 执行时间顺序不对劲
                setTimeout(function(){
                    console.log("今日全部 PT保活 任务执行结束");
                    ACConfig.signdate = curDate;
                    GM.setValue("Config", ACConfig);
                }, 8000);
            });
        }else{
            console.log("今日已执行过任务，跳过");
            GM_notification({
                'text':'网盘地址来源与上一次记录不同，记录已更新',
                'title':'网盘信息记录更新通知',
                'image':'https://eyun.baidu.com/box-static/page-common/images/favicon.ico',
                'timeout': 5
            });
        }
    }

    init();
})();
