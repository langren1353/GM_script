// ==UserScript==
// @name AC-baidu： 优化百度、搜狗、谷歌搜索结果之重定向 lite
// @icon            https://gitee.com/remixAC/GM_script/raw/master/images/head.jpg
// @grant		    GM_xmlhttpRequest
// @author          AC
// @create          2015-11-25
// @run-at          document-start
// @version         10.0
// @connect         *
// @include         http://www.baidu.com/*
// @include         https://www.baidu.com/*
// @include         http://www.sogou.com/*
// @include         https://www.sogou.com/*
// @include         /^https?://\w+.bing.com/.*/
// @include         /^https?\:\/\/encrypted.google.[^\/]+/
// @include         /^https?\:\/\/www.google.[^\/]+/
// @include         https://*.zhidao.baidu.com/*
// @include         https://zhidao.baidu.com/*
// @home-url        https://greasyfork.org/zh-TW/scripts/30504
// @namespace       1353464539@qq.com
// @copyright       2017, AC
// @description     1.繞過百度、搜狗搜索結果中的自己的跳轉鏈接，直接訪問原始網頁-反正都能看懂
// @lastmodified    2017-06-25
// @feedback-url    https://greasyfork.org/zh-TW/scripts/30504
// @note            2017.06.25-V10.0 修复上次更新导致的百度知道的老问题的出现
// @note            2017.06.24-V9.8 更新了bing上的图片favicon地址;并且尽量减少了MO触发次数，避免页面卡顿;修复搜狗的重定向问题
// @note            2017.06.23-V9.7 上传错了~重新来，顺带处理了谷歌favicon问题
// @note            2017.06.23-V9.6 修复了谷歌重定向的问题~~我的锅
// @note            2017.06.11-V9.5 不再使用DOM方式来监听页面了，使用timer+MO来处理，极大减少了cpu占用时间和瞬时网速占用
// @note            2017.05.26-V9.4 恢复favicon模式，现在这个脚本基本上全了，有需要以后再说
// @note            2017.05.15-V9.3 暂时移除百度右边侧栏的广告移除模式，准备下次优化好了再继续
// @note            2017.05.12-V9.2 暂时移除谷歌的安全搜索模式，因为很复杂的原因
// @note            2017.05.12-V9.1 暂时移除Favicon的显示，因为这样就杂了，有需要的人自己去装这个脚本吧，保留百度去广告
// @note            2017.05.12-V9.0 集合了去重定向+去广告+Favicon显示
// @note            2017.05.12-V8.7 集合了去广告的脚本，以前的那个去广告的脚本就不用了
// @note            2017.05.12-V8.6 修复谷歌安全搜索的BUG V2
// @note            2017.05.12-V8.4 新增：默认屏蔽谷歌的安全搜索功能
// @note            2017.05.05-V8.3 修复include范围太小导致的百度知道的屏蔽问题
// @note            2017.05.04-V8.2 终于修复了百度知道图片替换了文字的这个大BUG; 顺便处理了superapi.zhidao.baidu.com; 新增谷歌搜索结果重定向去除
// @note            2017.05.04-V8.1 终于修复了百度知道图片替换了文字的这个大BUG，顺便处理了superapi.zhidao.baidu.com
// @note            2017.05.04-V8.0 终于修复了百度知道图片替换了文字的这个大BUG，待测试
// @note            2017.03.28-V7.6 修复在ViolentMonkey上的不支持的问题
// @note            2017.03.28-V7.5 尝试修复chrome上的问题
// @note            2017.03.21-V7.4 尝试处理Edge上不支持的问题，结果发现是Edge本身的TamperMonkey支持有问题
// @note            2017.03.19-V7.3 修复打开百度之后再次点击“百度一下”导致的无法更新重定向问题
// @note            2017.03.19-V7.2 未知原因chrome的MutationObserver无法使用了，继续回归以前的DOMNodeInserted
// @note            2017.02.17-V7.0 修复搜狗的搜索结果重定向问题+改个名字
// @note            2017.02.17-V6.9 修复搜狗的搜索结果重定向问题
// @note            2016.12.10-V6.8 ***
// @note            2016.10.27-V6.7 修复了以前的重复请求，现在的请求数应该小了很多，网络也就不卡了，感觉萌萌哒
// @note            2016.04.24-V6.6 恢复以前的版本，因为兼容性问题
// @note            2015.12.01-V5.0 加入搜狗的支持，但是支出不是很好
// @note            2015.11.25-V2.0 优化，已经是真实地址的不再尝试获取
// @note            2015.11.25-V1.0 完成去掉百度重定向的功能
// ==/UserScript==

// 初次：还是采用了setInterval来处理，感觉这样的话速度应该比Dom快，也比MO适用，因为MO需要在最后才能调用，实用性还不如timer
// 之后：还是采用MO的方式来处理
(function(){
    var fatherName = new Array(
        "c-container", //baidu1
        "rc", //google
        "b_algo", //bing1
        "b_ans", //bing2
        "vrwrap", //sogou1
        "rb"//sogou2
    );
    var Stype; // 去重定向的选择
    var Ftype; // favicon的选择
    var maxOneHtmlHeight=2500;
    var SiteTypeID; // 标记当前是哪个站点[百度=1;搜狗=2;谷歌=3;必应=4;知乎=5;其他=6]
    var SiteType={
        BAIDU:1,
        SOGOU:2,
        GOOGLE:3,
        BING:4,
        // ZHIHU:5,
        OTHERS:6,
    };
    var ACMO = window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;
    var option = {'childList':true,'subtree':true};
    var observer = new ACMO(function(records){
        if(records.length<100){
            if(records.length > 5 || document.body.scrollHeight > 4000){
                //console.log("in"+records.length);
                ACHandle();
            }
        }
    });
    if (location.host.indexOf("www.baidu.com") > -1) {
        SiteTypeID = SiteType.BAIDU;
        Stype = "h3.t>a";
        Ftype = ".f13 .c-showurl[href],.c-container>div[class^='c-'] .c-showurl[href],.c-container>div[class^='c-'] .texttolink[href]";
        startBaidu();
    } else if (location.host.indexOf("sogou") > -1) {
        SiteTypeID = SiteType.SOGOU;
        Stype = "h3.pt>a, h3.vrTitle>a";
        Ftype = "cite[id*='cacheresult_info_']";
        srartOthers();
    } else if (location.host.indexOf("google") > -1){
        SiteTypeID = SiteType.GOOGLE;
        Stype = "";
        Ftype = "._Rm";
        srartOthers();
    } else if (location.host.indexOf("bing") > -1){
        SiteTypeID = SiteType.BING;
        Stype = "";
        Ftype = ".b_attribution>cite";
        srartOthers();
    } else {
        SiteTypeID = SiteType.OTHERS;
        AC_addStyle(".word-replace{display: none  !important;}");
        return;
    }
    function startBaidu(){
        var tt = setInterval(function(){
            if(document.querySelector("#content_left")){
                clearInterval(tt);
                /***最后必须要设置好MO继续监听页面数据--自动加载下一页的问题***/
                observer.observe(document.querySelector("#wrapper_wrapper"), option);
                // 处理当前-可以开始设置那个xxx了
                ACHandle();
            }
        }, 200);
    }
    function srartOthers(){
        observer.observe(document, option);
    }
    function ACHandle(){
        //console.log("deal");
        if(Stype != null && Stype != "")
            resetURL(document.querySelectorAll(Stype)); // 百度去重定向
        //addFavicon(document.querySelectorAll(Ftype)); // 添加Favicon显示
        removeOnMouseDownFunc(); // 移除onMouseDown事件，谷歌去重定向
        //removeAD_baidu(); // 移除百度广告
    };
    function removeOnMouseDownFunc(){
        try{
            document.querySelectorAll(".g .rc .r a").forEach(function(one){
                one.setAttribute("onmousedown", "");
            });
        }catch(e){}
    }
    function AC_addStyle(css, className){
        var tout = setInterval(function(){
            if(document.body != null){
                clearInterval(tout);
                try{document.querySelector("."+className).remove();}catch (e){};
                var cssNode = document.createElement("style");
                if(className != null)
                    cssNode.className = className;
                cssNode.innerHTML = css;
                try{document.body.appendChild(cssNode);}catch (e){console.log(e.message);}
            }
        }, 200);
    }
    function resetURL(list){
        for(var i = 0; i < list.length; i++){
            // 此方法是异步，故在结束的时候使用i会出问题-严重!
            // 采用闭包的方法来进行数据的传递
            var curhref = list[i].href;
            if(list[i]!= null && list[i].getAttribute("ac_redirectStatus") == null){
                list[i].setAttribute("ac_redirectStatus", "0");
                if(curhref.indexOf("baidu.com") > -1 || curhref.indexOf("sogou.com") > -1){
                    (function(c_curhref){
                        setTimeout(function(){
                            GM_xmlhttpRequest({
                                url: c_curhref,
                                headers: {
                                    "Accept": "text/html"
                                },
                                method: curhref.indexOf("baidu.com") > -1 ? "HEAD" : "GET",
                                onreadystatechange:function(response) {
                                    if (response.finalUrl != curhref) {
                                        var resultURL = response.finalUrl;
                                        if (SiteTypeID == SiteType.SOGOU) {
                                            //如果是搜狗的结果
                                            var resultResponseUrl = Reg_Get(response.responseText, "URL='([^']+)'");
                                            if (resultResponseUrl != null)
                                                resultURL = resultResponseUrl;
                                        }
                                        c_curnode.href = resultURL;
                                    }
                                }
                            });
                        },100);
                    })(curhref); //传递旧的网址过去，读作c_curhref
                }else if(curhref.indexOf("/interstitial") > -1){
                }else{
                }
            }
        }
    }
    function DealResult(response, c_curhref){ // 数据获取成功，替换页面地址为真实地址
        var resultURL = response.finalUrl;
        if(Stype.length > 10){
            //如果是搜狗的结果
            var resultResponseUrl = Reg_Get(response.responseText, "URL='([^']+)'");
            if(resultResponseUrl != null)
                resultURL = resultResponseUrl;
        }
        //console.log(resultURL);
        var indexhref = Reg_Get(c_curhref, "((?:http)[^&]+)");// 必须要提取部分数据，因为之后的莫名加了其他参数ck=0.0.0.0.....
        var ccnode = document.querySelectorAll("h3>[href*='"+indexhref+"']")[0];
        if(ccnode != null){
            ccnode.href = resultURL;
        }else{
            console.log("该链接已经被其他脚本干掉了哦"+resultURL);
        }
    }
    function Reg_Get(HTML, reg){
        var RegE = new RegExp(reg);
        return RegE.exec(HTML)[1];
    }
})();