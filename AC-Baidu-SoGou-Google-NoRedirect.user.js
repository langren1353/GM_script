// ==UserScript==
// @name AC-baidu： 优化百度、搜狗、谷歌搜索结果之重定向去除+去广告+favicon
// @icon            https://coding.net/u/zb227/p/zbImg/git/raw/master/img0/icon.jpg
// @grant		    GM_xmlhttpRequest
// @author          AC
// @create          2015-11-25
// @run-at          document-start
// @version         14.0
// @connect         *
// @include         https://www.baidu.com/*
// @include         http://www.baidu.com/*
// @include         http://www.sogou.com/web*
// @include         https://www.sogou.com/web*
// @include         http://www.sogou.com/sie*
// @include         https://www.sogou.com/sie*
// @include         https://www.so.com/s?*
// @include         https://www.so.com/s?*
// @include         /^https?://\w+.bing.com/.*/
// @include         /^https?\:\/\/encrypted.google.[^\/]+/
// @include         /^https?\:\/\/www.google.[^\/]+/
// @include         https://*.zhidao.baidu.com/*
// @include         https://zhidao.baidu.com/*
// @include         *.zhihu.com/*
// @home-url        https://greasyfork.org/zh-TW/scripts/14178
// @home-url2       https://github.com/langren1353/GM_script
// @namespace       1353464539@qq.com
// @copyright       2017, AC
// @description     1.繞過百度、搜狗、谷歌、好搜搜索結果中的自己的跳轉鏈接，直接訪問原始網頁-反正都能看懂 2.去除百度的多余广告 3.添加Favicon显示 4.页面CSS 5.添加计数 6.开关选择以上功能
// @lastmodified    2018-03-23
// @feedback-url    https://greasyfork.org/zh-TW/scripts/14178
// @note            2018.03.23-V14.0 1.尝试修复在百度贴吧和百度知道的文字显示异常的问题; 2.修复编号奇怪的异常问题
// @note            2018.03.18-V13.9 更新谷歌的favicon丢失的问题
// @note            2018.03.04-V13.8 更新图库为https模式，避免那啥显示不安全
// @note            2018.02.16-V13.7 1.新增关闭百度搜索预测；2.新增未知图标时切换； 3.移除百度搜索建议的顶部一条
// @note            2018.01.12-V13.6 1.新增移除右边栏的按钮；2.新增版本显示文字；3.修正favicon位置；4.修复favicon的图片错误时候的值，万年BUG
// @note            2017.12.27-V13.5 修复由于上个版本更新处理白屏，导致的默认标准模式的右侧栏不见了
// @note            2017.12.20-V13.4 感谢ID：磁悬浮青蛙的反馈，已经修复小概率搜索之后点击结果白屏的问题-貌似之前处理过，但是没有彻底处理掉，这次彻底了，改用CSS隐藏
// @note            2017.12.04-V13.3 新增设置，针对百度系列的重定向问题，不常用百度系列的朋友可以开启这个功能
// @note            2017.11.23-V13.2 感谢卡饭坛友@Apollo8511提供反馈，已经修复部分知乎的重定向问题，更多问题可以直接反馈我
// @note            2017.11.22-V13.1 移除百度系的重定向，虽然处理了，但是百度系直连会导致文字无法直接显示，其他直连不影响
// @note            2017.11.17-V12.13 进一步移除百度的广告，右边部分广告的处理和移除
// @note            2017.11.15-V12.12 搜狗的搜索地址又变了，加一个
// @note            2017.11.02-V12.11 新增在手机mobile模式下百度的重定向处理，其余网站以后再说吧，估计没有需求
// @note            2017.10.27-V12.10 1.修复逼死强迫症的问题；2.移除完整模式-避免出现各种拦截；3.修复www.so.com的重定向问题
// @note            2017.09.18-V12.9 更新原因：1.勿忘国耻918；2.更新百度偶尔重定向没成功的问题；3.修复页面的小问题；4.新增文字下划线开关
// @note            2017.09.15-V12.8 紧急修复谷歌上页面卡顿的问题，排查得知为百度规则的扩展出了问题，非常感谢众多朋友的支持，没有你们的反馈就没有这个脚本。修复并移除了百度官方采用的新方式广告模式，貌似只在chrome上出现
// @note            2017.09.13-V12.7 1.修复N年前更新导致的部分网址重定向无效，继续使用GET方法，因为好些网站不支持HEAD方法，获取成功之后就断开，尽量减少了网络开支; 2.修复搜狗的部分搜索异常; 3.修复百度在chrome61上的链接异常问题
// @note            2017.09.13-V12.6 开学之后的第二个版本，修复上次更新导致的百度首页错乱，修复firefox上的触发，修复SuperPreloader的翻页展示
// @note            2017.09.12-V12.5 开学之后的第一个版本，修复在百度上偶尔不触发的问题【从首页搜索的时候触发】，其次在兄弟XXX(我也忘了哪个P_P)的帮助下，修复了偶尔会全屏特殊推广模式的问题
// @note            2017.09.06-V12.4 修复上个版本更新导致的百度知道再次异常问题;更新知乎上的重定向问题-自己的脚本
// @note            2017.09.06-V12.3 修复双列的模式的显示问题，如果有问题希望反馈一下，顺便切换css来源
// @note            2017.09.04-V12.2 特意修复在ViolentMonkey上的设置无效的问题以及在360浏览器上的设置不显示问题
// @note            2017.09.04-V12.1 百度页面直接添加设置入口；360浏览器设置可能在底部页面；支持单列和双列模式，界面更美观from浮生@未歇；可能是最近一段时间的最后版本了，要开学了~~
// @note            2017.09.02-V11.10 添加两个选项，可以选择性移除部分设置
// @note            2017.09.01-V11.9 修复上次更新导致的百度去广告不灵的问题
// @note            2017.08.30-V11.8 新增：1.GM设置栏目中加入设置 2.baidu-使用HEAD方式获取，减少数据传输，搜狗特殊，继续GET方式
// @note            2017.08.29-V11.7 方便朋友们-移除知乎重定向
// @note            2017.08.07-V11.6 调整：移除小绿点，换为点击Favicon或者是计数器弹出窗口，更换为加群链接
// @note            2017.08.06-V11.5 修复，保存异常；预期之后会添加百度搜索页面的大调整
// @note            2017.08.05-V11.4 新增：反馈和建议地址增加
// @note            2017.08.04-V11.3 修复：由于英语不好导致的拼写错误，感谢shj兄弟指出
// @note            2017.08.03-V11.2 新增：谷歌链接新标签打开; 移除搜索结果链接的下划线
// @note            2017.07.22-V11.1 新增了开关模式，可以开启或者关闭某些自己不喜欢的功能，开关在右上角，和SuperPreload共用
// @note            2017.06.25-V10.1 修复上次更新导致的百度去广告的问题
// @note            2017.06.25-V10.0 修复上次更新导致的百度知道再次出现老问题
// @note            2017.06.24-V9.9 更新了翻页的问题，经过多次的尝试应该没有太大问题了
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
// @note            2015.12.01-V5.0 加入搜狗的支持，但是支持不是很好
// @note            2015.11.25-V2.0 优化，已经是真实地址的不再尝试获取
// @note            2015.11.25-V1.0 完成去掉百度重定向的功能
// @grant           GM_getValue
// @grant           GM_setValue
// @grant           GM_registerMenuCommand
// @require         https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js
// ==/UserScript==

// 初次：还是采用了setInterval来处理，感觉这样的话速度应该比Dom快，也比MO适用，因为MO需要在最后才能调用，实用性还不如timer
// 之后：还是采用MO的方式来处理
(function () {
    var fatherName = new Array(
        "c-container", //baidu1
        "rc", //google
        "b_algo", //bing1
        "b_ans", //bing2
        "vrwrap", //sogou1
        "rb",//sogou2
        "res-list"//so-360
    );// Favicon放在xx位置
    var isRedirectEnable = true;
    var isAdsEnable = true;
    var AdsStyleMode = 1;// 0-不带css；1-单列靠左；2-单列居中；3-双列居中
    var isFaviconEnable = true;
    var defaultFaviconUrl = "https://ws1.sinaimg.cn/large/6a155794ly1foijtdzhxhj200w00wjr5.jpg";
    var isRightDisplayEnable = true;
    var doDisableSug = true;
    var isCounterEnable = false;
    var isALineEnable = false;
    LoadSetting(); // 读取个人设置信息
    var Stype_Normal; // 去重定向的选择
    var Ftype; // favicon的选择-取得实际地址-得到host
    var Ctype; // Counter的选择
    var SiteTypeID; // 标记当前是哪个站点[百度=1;搜狗=2;谷歌=3;必应=4;知乎=5;其他=6]
    var SiteType={
        BAIDU:1,
        SOGOU:2,
        SO:3,
        GOOGLE:4,
        BING:5,
        ZHIHU:6,
        OTHERS:7,
    };
    var BaiduVersion = " V" + GM_info.script.version;
    var ACMO = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    var option = {'childList': true, 'subtree': true};
    var observer = new ACMO(function (records) {
        try {
            ShowSetting();
            ACHandle();
        } catch (e) {
            console.log(e);
        }
    });
    try{
        document.addEventListener('DOMContentLoaded', function (e) {
            setTimeout(function () {
                // 如果没有SuperPreload的话那么就会自动调用这个
                ShowSetting();
            }, 1000);
        }, false);
    }catch (e){}
    if (location.host.indexOf("www.baidu.com") > -1) {
        SiteTypeID = SiteType.BAIDU;
        Stype_Normal = "h3.t>a, #results .c-container>.c-blocka"; //PC,mobile
        Ftype = ".result-op, .c-showurl";
        Ctype = "#content_left>#double>div[srcid] *[class~=t],[class~=op_best_answer_question],#content_left>div[srcid] *[class~=t],[class~=op_best_answer_question]";
        startSelect("#wrapper,#page-bd", "#wrapper,#page-bd", option);
    } else if (location.host.indexOf("sogou") > -1) {
        SiteTypeID = SiteType.SOGOU;
        Stype_Normal = "h3.pt>a, h3.vrTitle>a";
        Ftype = "cite[id*='cacheresult_info_']";
        Ctype = ".results>div";
        startSelect("body", "body", option);
    }  else if (location.host.indexOf("so.com") > -1) {
        SiteTypeID = SiteType.SO;
        Stype_Normal = ".res-list h3>a";
        Ftype = ".res-linkinfo cite";
        Ctype = ".results>div";
        startSelect("body", "body", option);
    } else if (location.host.indexOf("google") > -1) {
        SiteTypeID = SiteType.GOOGLE;
        // Ftype = "._Rm";
        Ftype = ".iUh30";
        Ctype = ".srg>div[class~=g] *[class~=r],._yE>div[class~=_kk]";
        startSelect("body", "body", option);
    } else if (location.host.indexOf("bing") > -1) {
        SiteTypeID = SiteType.BING;
        Ftype = ".b_attribution>cite";
        Ctype = "#b_results>li[class~=b_ans],#b_results>li[class~=b_algo],#b_results>li[class~=b_algo]";
        startSelect("body", "body", option);
    } else if (location.host.indexOf("zhihu.com") > -1) {
        SiteTypeID = SiteType.ZHIHU;
        startSelect("body", "body", option);
    } else {
        SiteTypeID = SiteType.OTHERS;
        // AC_addStyle(".word-replace{display: none !important;}"); // 由于百度自身的防盗链检测有问题，所以关闭这个选项，避免出问题
    }
    GM_registerMenuCommand('AC-重定向脚本设置', function () {
        document.querySelector("#sp-ac-content").style.display = 'block';
    });
    AC_addStyle(
        ".opr-recommends-merge-imgtext{display:none!important;}" + // 移除百度浏览器推广
        ".res_top_banner{display:none!important;}",  // 移除可能的百度HTTPS劫持显示问题
        ".headBlock{display:none;}" // 移除百度的搜索结果顶部一条的建议文字
    );
    function AC_addStyle(css, className){
        var tout = setInterval(function(){
            if(document.body != null){
                clearInterval(tout);
                try{document.querySelector("."+className).remove();}catch (e){}
                var cssNode = document.createElement("style");
                if(className != null)
                    cssNode.className = className;
                cssNode.innerHTML = css;
                try{document.body.appendChild(cssNode);}catch (e){console.log(e.message);}
            }
        }, 200);
    }
    function startSelect(checkNode, selector, option) {
        var tt = setInterval(function () {
            if (document.querySelector(checkNode)) {
                clearInterval(tt);
                /***最后必须要设置好MO继续监听页面数据--自动加载下一页的问题***/
                try{
                    observer.observe(document.querySelector(selector), option);
                }catch (e){
                    observer.observe(document.body, option);
                }
            }
        }, 200);
    }
    function ACHandle() {
        InsertSettingMenu();
        if (isRedirectEnable) {
            if(Stype_Normal != null && Stype_Normal != "")
                resetURLNormal($(Stype_Normal)); // 百度搜狗去重定向-普通模式【注意不能为document.query..】
            if(SiteTypeID == SiteType.GOOGLE)
                removeOnMouseDownFunc(); // 移除onMouseDown事件，谷歌去重定向
            if(SiteTypeID == SiteType.ZHIHU)
                removeLinkTarget(); // 移除知乎的重定向问题
            try{$(".res_top_banner").remove();}catch (e){} // 移除百度可能显示的劫持
            // try{$("body>.result-op").remove();}catch (e){} // 移除可能出现的莫名找不到位置的全屏推荐--更换为CSS隐藏规则，直接删除可能删不掉
            try{$(".c-container /deep/ .c-container").remove();}catch (e){} // 移除百度的恶心Shadow DOM（Shadown Root）
        }
        if (isFaviconEnable) {
            addFavicon(document.querySelectorAll(Ftype)); // 添加Favicon显示
        }
        if(doDisableSug){
            acSetCookie("ORIGIN", 2);
        }else{
            acSetCookie("ORIGIN", "", -1);
        }
        if (isCounterEnable) {
            addCounter(document.querySelectorAll(Ctype));
        }
        if (isAdsEnable) {
            FSBaidu();
            removeAD_baidu_sogou(); // 移除百度广告
        }else{
            $("input[name='sp-ac-a_force_style']").attr("disabled", "disabled");
        }
    }
    if (isAdsEnable){
        FSBaidu(); // 添加设置项-单双列显示
        AC_addStyle("#content_right td>div:not([id]){display:none;}", "");
    }
    if(!isRightDisplayEnable){
        // 移除右边栏
        AC_addStyle("#content_right{display:none !important;}.result-op:not([id]){display:none!important;}");
    }
    if(!isALineEnable){
        AC_addStyle("a{text-decoration:none}");// 移除这些个下划线
    }
    function acSetCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires+";domain=.www.baidu.com";
    }
    function ACtoggleSettingDisplay() {
        // 显示？隐藏设置界面
        setTimeout(function () {
            if (document.querySelector("#sp-ac-content").style.display == 'block'){
                document.querySelector("#sp-ac-content").style.display = 'none';
            }else{
                document.querySelector("#sp-ac-content").style.display = 'block';
            }
        }, 100);
        return false;
    }
    function ShowSetting() {
        // 如果不存在的话，那么自己创建一个-copy from superPreload
        if (document.querySelector("#sp-ac-container") == null) {
            AC_addStyle('#sp-ac-container{z-index:999999!important;text-align:left!important;background-color:white;}#sp-ac-container *{font-size:13px!important;color:black!important;float:none!important;}#sp-ac-main-head{position:relative!important;top:0!important;left:0!important;}#sp-ac-span-info{position:absolute!important;right:1px!important;top:0!important;font-size:10px!important;line-height:10px!important;background:none!important;font-style:italic!important;color:#5a5a5a!important;text-shadow:white 0px 1px 1px!important;}#sp-ac-container input{vertical-align:middle!important;display:inline-block!important;outline:none!important;height:auto !important;padding:0px !important;margin-bottom:0px !important;margin-top: 0px !important;}#sp-ac-container input[type="number"]{width:50px!important;text-align:left!important;}#sp-ac-container input[type="checkbox"]{border:1px solid #B4B4B4!important;padding:1px!important;margin:3px!important;width:13px!important;height:13px!important;background:none!important;cursor:pointer!important;visibility:visible !important;position:static !important;}#sp-ac-container input[type="button"]{border:1px solid #ccc!important;cursor:pointer!important;background:none!important;width:auto!important;height:auto!important;}#sp-ac-container li{list-style:none!important;margin:3px 0!important;border:none!important;float:none!important;}#sp-ac-container fieldset{border:2px groove #ccc!important;-moz-border-radius:3px!important;border-radius:3px!important;padding:4px 9px 6px 9px!important;margin:2px!important;display:block!important;width:auto!important;height:auto!important;}#sp-ac-container legend{line-height:20px !important;margin-bottom:0px !important;}#sp-ac-container fieldset>ul{padding:0!important;margin:0!important;}#sp-ac-container ul#sp-ac-a_useiframe-extend{padding-left:40px!important;}#sp-ac-rect{position:relative!important;top:0!important;left:0!important;float:right!important;height:10px!important;width:10px!important;padding:0!important;margin:0!important;-moz-border-radius:3px!important;border-radius:3px!important;border:1px solid white!important;-webkit-box-shadow:inset 0 5px 0 rgba(255,255,255,0.3),0 0 3px rgba(0,0,0,0.8)!important;-moz-box-shadow:inset 0 5px 0 rgba(255,255,255,0.3),0 0 3px rgba(0,0,0,0.8)!important;box-shadow:inset 0 5px 0 rgba(255,255,255,0.3),0 0 3px rgba(0,0,0,0.8)!important;opacity:0.8!important;}#sp-ac-dot,#sp-ac-cur-mode{position:absolute!important;z-index:9999!important;width:5px!important;height:5px!important;padding:0!important;-moz-border-radius:3px!important;border-radius:3px!important;border:1px solid white!important;opacity:1!important;-webkit-box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3),inset 0 2px 1px rgba(255,255,255,0.3),0px 1px 2px rgba(0,0,0,0.9)!important;-moz-box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3),inset 0 2px 1px rgba(255,255,255,0.3),0px 1px 2px rgba(0,0,0,0.9)!important;box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3),inset 0 2px 1px rgba(255,255,255,0.3),0px 1px 2px rgba(0,0,0,0.9)!important;}#sp-ac-dot{right:-3px!important;top:-3px!important;}#sp-ac-cur-mode{left:-3px!important;top:-3px!important;width:6px!important;height:6px!important;}#sp-ac-content{padding:0!important;margin:5px 5px 0 0!important;-moz-border-radius:3px!important;border-radius:3px!important;border:1px solid #A0A0A0!important;-webkit-box-shadow:-2px 2px 5px rgba(0,0,0,0.3)!important;-moz-box-shadow:-2px 2px 5px rgba(0,0,0,0.3)!important;box-shadow:-2px 2px 5px rgba(0,0,0,0.3)!important;}#sp-ac-main{padding:5px!important;border:1px solid white!important;-moz-border-radius:3px!important;border-radius:3px!important;background-color:#F2F2F7!important;background:-moz-linear-gradient(top,#FCFCFC,#F2F2F7 100%)!important;background:-webkit-gradient(linear,0 0,0 100%,from(#FCFCFC),to(#F2F2F7))!important;}#sp-ac-foot{position:relative!important;left:0!important;right:0!important;min-height:20px!important;}#sp-ac-savebutton{position:absolute!important;top:0!important;right:2px!important;}#sp-ac-container .sp-ac-spanbutton{border:1px solid #ccc!important;-moz-border-radius:3px!important;border-radius:3px!important;padding:2px 3px!important;cursor:pointer!important;background-color:#F9F9F9!important;-webkit-box-shadow:inset 0 10px 5px white!important;-moz-box-shadow:inset 0 10px 5px white!important;box-shadow:inset 0 10px 5px white!important;}');
            var Container = document.createElement('div');
            Container.id = "sp-ac-container";
            Container.style = "position: fixed !important; top: 10%;right: 7%;";
            Container.innerHTML =
                "    <div id='sp-ac-content' style='display: none;'>\n" +
                "        <div id='sp-ac-main'>\n" +
                "        <fieldset id='sp-ac-autopager-field' style='display:block;'>\n" +
                "            <legend title='自动翻页模式的相关设置' style='color: red !important;'>AC-重定向设置"+BaiduVersion+"</legend>\n" +
                "            <ul>\n" +
                "                <li><label title='重定向功能的开启与否'><input id='sp-ac-redirect' name='sp-ac-a_separator' type='checkbox' " + (isRedirectEnable ? 'checked' : '') + ">主功能-重定向功能</label>\n" +
                "                </li>\n" +
                "                <li><label title='AC-去广告' ><input id='sp-ac-ads' name='sp-ac-a_force' type='checkbox' " + (isAdsEnable ? 'checked' : '') + ">附加1-去广告功能</label>\n" +
                "                </li>\n" +
                "                <li>" +
                "                    <label title='去广告-原始模式' style='margin-left:20px'><input name='sp-ac-a_force_style' value='0' type='radio' " + (AdsStyleMode==0 ? 'checked' : '') + ">去广告-原始模式</label>" +
                "                    <label><input title='去广告-单列普通' name='sp-ac-a_force_style' value='1'  type='radio' " + (AdsStyleMode==1 ? 'checked' : '') + ">去广告-单列普通</label>" +
                "                    <BR/><label title='去广告-单列居中' style='margin-left:20px'><input  name='sp-ac-a_force_style' value='2'  type='radio' " + (AdsStyleMode==2 ? 'checked' : '') + ">去广告-单列居中</label>" +
                "                    <label title='去广告-双列居中'><input  name='sp-ac-a_force_style' value='3'  type='radio' " + (AdsStyleMode==3 ? 'checked' : '') + ">去广告-双列居中</label>" +
                "                </li>\n" +
                "                <li><label><input title='AC-添加Favicon' id='sp-ac-favicon' name='sp-ac-a_force' type='checkbox' " + (isFaviconEnable ? 'checked' : '') + ">附加2-Favicon功能</label></li>\n" +
                "                <li><label><label style='margin-left:20px;'>Favicon默认图标：</label><input id='sp-ac-faviconUrl' name='sp-ac-a_force' value='"+defaultFaviconUrl+"' style='width:200px;margin-top:-0.3rem !important;' type='input' " + (isFaviconEnable ? '' : 'disabled=true') + "></label></li>\n" +
                "                <li><label><input title='AC-移除搜索预测' id='sp-ac-sug_origin' name='sp-ac-a_force' type='checkbox' " + (doDisableSug ? 'checked' : '') + ">附加3-移除百度搜索预测(文字自动搜索)</label></li>\n" +
                "                <li><label><input title='AC-显示右侧栏' id='sp-ac-right' name='sp-ac-a_force' type='checkbox' " + (isRightDisplayEnable ? 'checked' : '') + ">附加3-显示右侧栏</label></li>\n" +
                "                <li><label><input title='AC-添加编号' id='sp-ac-counter' name='sp-ac-a_force' type='checkbox' " + (isCounterEnable ? 'checked' : '') + ">附加4-编号功能</label></li>\n" +
                "                <li><label><input title='AC-文字下划线' id='sp-ac-aline' name='sp-ac-a_force' type='checkbox' " + (isALineEnable ? 'checked' : '') + ">附加5-下划线</label></li>\n" +
                "                <li><a target='_blank' href='https://shang.qq.com/wpa/qunwpa?idkey=5bbfe9de1e81a0930bd053f3157aad2dbb3fa7b991ac9f22ea9f2e2f53efde80' style='color:red !important;'>联系作者,提建议,寻求帮助,脚本定制点我</a></li>" +
                "            </ul>\n" +
                "            <span id='sp-ac-cancelbutton' class='sp-ac-spanbutton' title='取消' style='position: relative !important;float: left !important;'>取消</span>\n" +
                "            <span id='sp-ac-savebutton' class='sp-ac-spanbutton' title='保存设置' style='position: relative !important;float: right !important;'>保存</span>\n" +
                "        </fieldset>\n" +
                "        </div>\n" +
                "    </div>";
            try{document.body.appendChild(Container);}catch (e){}
        }
        var allNodes = document.querySelectorAll(".faviconT, .CounterT");
        for (var i = 0; i < allNodes.length; i++) {
            if (allNodes[i].getAttribute('acClick') == null) {
                allNodes[i].setAttribute('acClick', '1');
                try{
                    allNodes[i].addEventListener('click', function (e) {
                        return ACtoggleSettingDisplay();
                    }, true);
                }catch (e){}
            }
        }
        try{
            document.querySelector("#sp-ac-savebutton").addEventListener('click', function (e) {
                // 保存功能
                GM_setValue("isRedirectEnable", document.querySelector("#sp-ac-redirect").checked);
                GM_setValue("isAdsEnable", document.querySelector("#sp-ac-ads").checked);
                GM_setValue("AdsStyleMode", document.querySelector('input[name="sp-ac-a_force_style"]:checked').value);
                GM_setValue("isFaviconEnable", document.querySelector("#sp-ac-favicon").checked);
                var imgurl = document.querySelector("#sp-ac-faviconUrl").value.trim();
                GM_setValue("defaultFaviconUrl", (imgurl==""||imgurl==null) ? "https://ws1.sinaimg.cn/large/6a155794ly1foijtdzhxhj200w00wjr5.jpg":imgurl);
                GM_setValue("doDisableSug", document.querySelector("#sp-ac-sug_origin").checked);
                GM_setValue("isRightDisplayEnable", document.querySelector("#sp-ac-right").checked);
                GM_setValue("isCounterEnable", document.querySelector("#sp-ac-counter").checked);
                GM_setValue("isALineEnable", document.querySelector("#sp-ac-aline").checked);
                setTimeout(function () {
                    window.location.reload();
                }, 400);
            }, false);
        }catch (e){}
        try{
            document.querySelector("#sp-ac-cancelbutton").addEventListener('click', function (e) {
                document.querySelector("#sp-ac-content").style.display = 'none';
            }, false);
        }catch (e){}
    }
    function LoadSetting() {
        isRedirectEnable = GM_getValue("isRedirectEnable", true);
        isAdsEnable = GM_getValue("isAdsEnable", true);
        AdsStyleMode = GM_getValue("AdsStyleMode", 0);
        isFaviconEnable = GM_getValue("isFaviconEnable", true);
        defaultFaviconUrl = GM_getValue("defaultFaviconUrl", "https://ws1.sinaimg.cn/large/6a155794ly1foijtdzhxhj200w00wjr5.jpg");
        doDisableSug = GM_getValue("doDisableSug", true);
        isRightDisplayEnable = GM_getValue("isRightDisplayEnable", true);
        isCounterEnable = GM_getValue("isCounterEnable", false);
        isALineEnable = GM_getValue("isALineEnable", false);
    }
    function removeOnMouseDownFunc() {
        try {
            document.querySelectorAll(".g .rc .r a").forEach(function (one) {
                one.setAttribute("onmousedown", ""); // 谷歌去重定向干扰
                one.setAttribute("target", "_blank"); // 谷歌链接新标签打开
            });
        } catch (e) {
        }
    }
    function removeLinkTarget() {
        // console.log("移除知乎重定向问题");
        var nodes = document.querySelectorAll(".RichText a[href*='//link.zhihu.com/?target']");
        for(var i=0; i<nodes.length; i++){
            var url = decodeURIComponent(nodes[i].href.replace(/https?:\/\/link\.zhihu\.com\/\?target=/, ""));
            nodes[i].href = url;
        }
    }
    function resetURLNormal(list) {
        for (var i = 0; i < list.length; i++) {
            // 此方法是异步，故在结束的时候使用i会出问题-严重!
            // 采用闭包的方法来进行数据的传递
            var curNode = list[i];
            var curhref = curNode.href;
            var trueUrlNoBaidu = "";
            try{
                var node = curNode.parentNode.parentNode;
                if(node.className.indexOf("result") >= 0){
                    trueUrlNoBaidu = node.querySelector(Ftype).innerHTML;
                    trueUrlNoBaidu = replaceAll(trueUrlNoBaidu);
                }
            }catch (e){
            }
            if(IsinBaiduBlockLists(trueUrlNoBaidu)){
                $("a[href*='"+curhref+"']").attr("ac_redirectStatus", "-2"); // 丢弃特殊的百度自身的地址【百度知道、百度贴吧】
                continue;
            }
            if (list[i] != null && list[i].getAttribute("ac_redirectStatus") == null) {
                list[i].setAttribute("ac_redirectStatus", "0");
                if (curhref.indexOf("www.baidu.com/link") > -1 ||
                    curhref.indexOf("m.baidu.com/from") > -1 ||
                    curhref.indexOf("www.sogou.com/link") > -1 ||
                    curhref.indexOf("so.com/link") > -1) {
                    (function (c_curnode,c_curhref) {
                        setTimeout(function () {
                            var gmRequestNode = GM_xmlhttpRequest({
                                url: c_curhref,
                                headers: {"Accept": "text/html"},
                                method: "GET",
                                onreadystatechange: function (response) {
                                    if (SiteTypeID == SiteType.BAIDU) {
                                        if(response.finalUrl != c_curhref && response.finalUrl!="" && response.finalUrl != null){
                                            DealRedirect(gmRequestNode, c_curhref, response.finalUrl);
                                        }else{
                                            DealRedirect(gmRequestNode, c_curhref, response.responseText, "location.replace\\(\"([^\"]+)\"");
                                        }
                                    }else if (SiteTypeID == SiteType.SOGOU) { //如果是搜狗的结果
                                        DealRedirect(gmRequestNode, c_curhref, response.responseText, "URL='([^']+)'");
                                    } else if(SiteTypeID == SiteType.SO){
                                        DealRedirect(gmRequestNode, c_curhref, response.responseText, "URL='([^']+)'");
                                    }
                                }
                            });
                        }, 100);
                    })(curNode, curhref); //传递旧的网址过去，读作c_curhref
                }
            }
        }
    }
    function DealRedirect(request, curNodeHref, respText, RegText){
        if(respText == null || typeof(respText)=="undefined") return;
        var resultResponseUrl = "";
        if(RegText != null){
            resultResponseUrl = Reg_Get(respText, RegText);
        } else{
            resultResponseUrl = respText;
        }
        if(resultResponseUrl != null && resultResponseUrl != ""){
            $("a[href*='"+curNodeHref+"']").attr("href", resultResponseUrl);
            $("a[href*='"+curNodeHref+"']").attr("ac_redirectStatus", "2");
            request.abort();
        }
    }
    function Reg_Get(HTML, reg) {
        var RegE = new RegExp(reg);
        try {
            return RegE.exec(HTML)[1];
        } catch (e) {
            return "";
        }
    }
    function removeAD_baidu_sogou() { // 移除百度自有广告
        if (SiteTypeID == SiteType.BAIDU) {
            if (document.querySelectorAll("#content_left")[0] != null) {
                var fathers = document.querySelectorAll("#content_left")[0].childNodes;
                var lastId = 0;
                for (var i = 0; i < fathers.length; i++) {
                    var currentNode = fathers[i];
                    if (currentNode.tagName == "DIV" && currentNode.getAttribute("dealAD") == null) {
                        if (null == currentNode.id || "" == currentNode.id) {
                            // 米有ID的貌似都是广告
                            console.log("移除广告1 CLASS=" + currentNode.className);
                            currentNode.remove();
                            i--; // 动态移除导致的i必须下降
                        } else if (currentNode.id == "clone") {
                            // ID 显示为CLONE的也是广告
                            console.log("移除广告2 ID=" + currentNode.id);
                            currentNode.remove();
                            i--; // 动态移除导致的i必须下降
                        } else if (currentNode.className.indexOf("result") != 0 && /^\d+$/.test(currentNode.id)) {
                            // class不是result...的，并且id是纯粹数字的(很大)
                            console.log("移除广告3 ID=" + currentNode.id);
                            currentNode.remove();
                            i--; // 动态移除导致的i必须下降
                        } else {
                            var node = currentNode.querySelectorAll(".f13>span")[0];
                            if (node != null && node.innerHTML == "广告") {
                                console.log("移除广告4 ID=" + currentNode.id);
                                currentNode.remove();
                                i--; // 动态移除导致的i必须下降
                            }
                        }
                        currentNode.setAttribute("dealAD", 1);
                    }
                }
            }
        } else if (SiteTypeID == SiteType.SOGOU) {
            try {
                document.querySelector("#promotion_adv_container").remove();
            } catch (e) {
            }
            try {
                document.querySelector("#kmap_business_title").remove();
            } catch (e) {
            }
            try {
                document.querySelector("#kmap_business_ul").remove();
            } catch (e) {
            }
            try {
                document.querySelector(".rvr-model[style='width:250px;']").style = "display:none";
            } catch (e) {
            }
        }
    }
    function IsNumber(val){
        if(val === "" || val ==null){
            return false;
        }
        if(!isNaN(val)){
            return true;
        }else{
            return false;
        }
    }
    function addCounter(citeList) {
        var cssText = "display:inline-block;background:#FD9999;color:#D7D7D7;font-family:'微软雅黑';font-size:16px;text-align:center;width:20px;line-height:20px;border-radius:50%;float:left;";
        var div = document.createElement('div');
        for (var i = 0; i < citeList.length; i++) {
            if (citeList[i].getAttribute('sortIndex')) {
                continue;
            } else {
                citeList[i].setAttribute('sortIndex', i);
                citeList[i].inner = citeList[i].innerHTML;
                if(IsNumber(citeList[i].parentNode.id)){
                    div.innerHTML = "<div class='CounterT' style=" + cssText + ">" + citeList[i].parentNode.id + "</div>";
                    citeList[i].innerHTML = div.innerHTML + citeList[i].inner;
                }
            }
        }
    }
    function replaceAll(sbefore) {
        var send;
        var result = sbefore.split('-');
        if (SiteTypeID == SiteType.SOGOU && location.href.indexOf("sogou") < 20) {
            // --搜狗专用；如果第一个是中文的话，地址就是第二个
            sbefore = result[1];
        }
        send = sbefore.replace(/(\/[^/]*|\s*)/, "").replace(/<[^>]*>/g, "").replace(/https?:\/\//g, "").replace(/<\/?strong>/g, "").replace(/<\/?b>/g, "").replace(/<?>?/g, "").replace(/( |\/).*/g, "");
        return send;
    }
    function IsinBaiduBlockLists(url){
        if(url == null) return false;
        if(url.indexOf("zhidao.baidu.com") >= 0) return true;
        if(url.indexOf("teiba.baidu.com") >= 0) return true;
        return false;
    }
    function addFavicon(citeList) {
        for (var index = 0; index < citeList.length; index++) {
            var url = replaceAll(citeList[index].innerHTML);
            //console.log(index+"."+url);
            if (null == citeList[index].getAttribute("ac_faviconStatus")) {
                if (url == "") {
                    console.log("无效地址：" + citeList[index].innerHTML);
                    citeList[index].setAttribute("ac_faviconStatus", "-1");
                    continue;
                }
                var curNode = citeList[index];
                var faviconUrl = url;
                for (II = 0; II <= 5; II++) {
                    curNode = curNode.parentNode;
                    if (isInUrlList(curNode.className)) {
                        break;
                    }
                }
                //console.log(index+"."+faviconUrl+"--"+II);
                if (II <= 5) {
                    var tmpHTML = curNode.innerHTML;
                    var pos = tmpHTML.indexOf("fav-url")
                        & tmpHTML.indexOf("favurl")
                        & tmpHTML.indexOf("tit-ico")
                        & tmpHTML.indexOf("img_fav rms_img")
                        & tmpHTML.indexOf("c-tool-")
                        & tmpHTML.indexOf("span class=\"c-icon c-icon-");
                    //他自己已经做了favicon了
                    if (pos > -1) {
                        console.log("已有图片：" + faviconUrl);
                        citeList[index].setAttribute("ac_faviconStatus", "-2");
                        continue;
                    }
                    //https://api.byi.pw/favicon/?url=???? 不稳定
                    //http://"+faviconUrl+"/cdn.ico?defaulticon=http://soz.im/favicon.ico 不稳定
                    //https://www.xtwind.com/api/index.php?url=???? 挂了。。。
                    //https://statics.dnspod.cn/proxy_favicon/_/favicon?domain=sina.cn
                    //www.google.com/s2/favicons?domain=764350177.lofter.com
                    //如果地址不正确，那么丢弃
                    var host = faviconUrl.replace(/[^.]+\.([^.]+)\.([^.]+)/, "$1.$2");
                    if (curNode.querySelector(".faviconT") == null && host.length > 3) {
                        var insNode = document.createElement("img");
                        curNode = curNode.children[0]; //firstChild容易遇到text对象
                        citeList[index].setAttribute("ac_faviconStatus", "1");
                        curNode.insertBefore(insNode, curNode.firstChild);
                        insNode.className = "faviconT";
                        insNode.style = "vertical-align:sub;height:16px;width:16px;margin-right:5px;margin-bottom: 2px;";
                        insNode.src = "https://favicon.yandex.net/favicon/" + host;
                        insNode.setAttribute("faviconID", "0");
                        insNode.onload = function (eveNode) {
                            if (eveNode.target.naturalWidth < 16) {
                                eveNode.target.src = defaultFaviconUrl;
                                eveNode.target.onload = null;
                            }
                        };
                    }
                }
            }
        }
        function isInUrlList(url) {
            var leng = fatherName.length;
            for (var i = 0; i < leng; i++) {
                if (url.indexOf(fatherName[i]) >= 0) {
                    return true;
                }
            }
            return false;
        }
    }
    function InsertSettingMenu(){
        if ($("#myuser").length < 1) {
            var $parent = $("#u");
            $parent.style="width: 319px;";
            var $div = $("<a style='text-decoration: none;'><ol id='myuser' style='display: inline-block;'>" +
                "<li class='myuserconfig' style='display: inline-block;height: 18px;line-height: 1.5;background: #2866bd;color: #fff;font-weight: bold;text-align: center;padding: 6px;border-radius: 5px;'>自定义</li></ol></a>");
            $div.prependTo($parent);
            try{
                document.querySelector("#myuser .myuserconfig").addEventListener('click', function (e) {
                    return ACtoggleSettingDisplay();
                }, true);
            }catch (e){}
        }
    }
    function FSBaidu() { // thanks for code from 浮生@未歇 @page https://greasyfork.org/zh-TW/scripts/31642
        var StyleManger = {
            importStyle: function (fileUrl, toClassName) {
                if($("."+toClassName).length > 0) return;
                if($("#content_left").length <= 0) return;
                var ssNode = document.createElement("link");
                ssNode.rel = "stylesheet";
                ssNode.type = "text/css";
                ssNode.className = toClassName;
                ssNode.media = "screen";
                ssNode.href = fileUrl;
                try{document.body.appendChild(ssNode);}catch (e){}
            },
            //加载普通样式
            loadCommonStyle: function () {
                this.importStyle("https://remix.ac.cn/ACFile/CSS/AC_Baidu/baiduCommonStyle.css", "baiduCommonStyle");
            },
            //加载自定义菜单样式
            loadMyMenuStyle: function () {
                this.importStyle("https://remix.ac.cn/ACFile/CSS/AC_Baidu/baiduMyMenuStyle.css", "baiduMyMenuStyle");
            },
            //加载单页样式
            loadOnePageStyle: function () {
                this.importStyle("https://remix.ac.cn/ACFile/CSS/AC_Baidu/baiduOnePageStyle.css", "baiduOnePageStyle");
                $("#result_logo img").attr("src", "https://ws1.sinaimg.cn/large/6a155794ly1fkx1uhxfz6j2039012wen.jpg");
                AC_addStyle(".result-op:not([id]){display:none!important;}");
            },
            //加载双页样式
            loadTwoPageStyle: function () {
                this.importStyle("https://remix.ac.cn/ACFile/CSS/AC_Baidu/baiduTwoPageStyle.css", "baiduTwoPageStyle");
                $("#result_logo img").attr("src", "https://ws1.sinaimg.cn/large/6a155794ly1fkx1uhxfz6j2039012wen.jpg");
                AC_addStyle(".result-op:not([id]){display:none!important;}");
            },
            loadExpandOneStyle:function () {
                AC_addStyle(
                    ".result-op:not([id]){display:none!important;}" +
                    "#content_left .result-op:hover,#content_left .result:hover{box-shadow:0 0 2px gray;background:rgba(230,230,230,0.1)!important;}" +
                    "#content_left .result,#content_left .result-op{width:100%; min-width:670px;margin-bottom:14px!important;}" +
                    ".c-span18{width:78%!important;min-width:550px;}" +
                    ".c-span24{width: auto!important;}", "loadExpandOneStyle");
            },
            init: function () {
                this.loadMyMenuStyle();
            },
            importOnceCSS: function () {
                this.init();
            }
        };
        var ControlManager = {
            twoPageDisplay: function () {
                var $div = $("<div id='double'></div>");
                var $double = null;
                var $parent = null;
                var $selector = null;
                //文档加载完成再运行
                $(document).ready(function () {
                    if ($("#content_left>#double").length < 1) {
                        $parent = $("#content_left");
                        $selector = $("#content_left>.c-container:odd");
                        $div.prependTo($parent);
                        $selector.prependTo($("#double"));
                    }
                    //兼容自动翻页脚本
                    if ($("#content_left>.sp-separator").length > 0) {
                        // AC_addStyle("#content_left>.sp-separator{opacity: 0;}");
                        $parent = $("#content_left>.sp-separator[isHandled!='1']");
                        $selector = $("#content_left>.sp-separator[isHandled!='1']~.c-container:odd");
                        // $div.after($parent);
                        // $parent.remove();
                        $parent.attr("isHandled", "1");
                        $selector.appendTo($("#double"));
                    }
                });
            },
            //居中显示
            centerDisplay: function () {
                var $result = AdsStyleMode || null;
                if($result == 1){
                    StyleManger.loadExpandOneStyle();
                    StyleManger.loadCommonStyle();
                } else if ($result == 2) {//单页居中
                    StyleManger.loadExpandOneStyle();
                    StyleManger.loadCommonStyle();
                    StyleManger.loadOnePageStyle();
                } else if ($result == 3) { //双页居中
                    StyleManger.loadCommonStyle();
                    StyleManger.loadTwoPageStyle();
                    this.twoPageDisplay();
                }
            },
            init: function () {
                this.centerDisplay();
            }
        };
        function mutationfunc() {
            if($("#lg:visible").length > 0){ // 大图模式--->百度首页
                $("#wrapper .s_form #form").attr("style", "left:unset !important;");
            }else{
                $("#wrapper .s_form #form").attr("style", "");
            }
            if(SiteTypeID == SiteType.BAIDU){
                StyleManger.init();
                ControlManager.init();
            }
            if($("#double").length > 0){
                setTimeout(function(){ // 动态设置底部推荐关键字的marginTop属性
                    document.querySelector("#container #rs div").parentNode.style.marginTop = Math.max($("#double").height(), $("#content_left").height())-$("#content_left").height()+"px";
                }, 400);
            }
        }
        if(SiteTypeID == SiteType.BAIDU){
            StyleManger.init();
            ControlManager.init();
            try{
                mutationfunc();
            }catch (e){}
            try {
                var observer = new ACMO(mutationfunc);
                var wrapper = document.querySelector("#wrapper");
                observer.observe(wrapper, {
                    "attributes": false,
                    "characterData": false,
                    "subtree": true,
                    "attributesFilter": ["class"],
                });
                mutationfunc();
            } catch (e) {
            }
        }else{
            return;
        }
    }
})();