// ==UserScript==
// @name AC-baidu： 优化百度、搜狗、谷歌搜索结果之重定向去除+去广告+favicon
// @icon            https://coding.net/u/zb227/p/zbImg/git/raw/master/img0/icon.jpg
// @grant		    GM_xmlhttpRequest
// @author          AC
// @create          2015-11-25
// @run-at          document-start
// @version         11.7
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
// @include         *.zhihu.com/*
// @home-url        https://greasyfork.org/zh-TW/scripts/14178
// @namespace       1353464539@qq.com
// @copyright       2017, AC
// @description     1.繞過百度、搜狗搜索結果中的自己的跳轉鏈接，直接訪問原始網頁-反正都能看懂 2.去除百度的多余广告 3.添加Favicon显示 4.添加计数 5.开关选择以上功能
// @lastmodified    2017-08-29
// @feedback-url    https://greasyfork.org/zh-TW/scripts/14178
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
// @note            2015.12.01-V5.0 加入搜狗的支持，但是支出不是很好
// @note            2015.11.25-V2.0 优化，已经是真实地址的不再尝试获取
// @note            2015.11.25-V1.0 完成去掉百度重定向的功能
// @grant           GM_getValue
// @grant           GM_setValue
// @grant           GM_addStyle
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
    var isRedirectEnable = true;
    var isAdsEnable = true;
    var isFaviconEnable = true;
    var isCounterEnable = false;
    LoadSetting(); // 读取个人设置信息
    var Stype; // 去重定向的选择
    var Ftype; // favicon的选择
    var Ctype; // Counter的选择
    var maxOneHtmlHeight=2500;
    var isZhiHuHandled = false;
    var ACMO = window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;
    var option = {'childList':true,'subtree':true};
    var observer = new ACMO(function(records){
        try{
            if(records.length<100){
                if(records.length > 5 || document.body.scrollHeight > 4000){
                    setTimeout(function(){
                        // 如果没有SuperPreload的话那么就会自动调用这个
                        ShowSetting();
                    }, 3000);
                    ACHandle();
                }
                if(isAdsEnable){
                    removeAD_baidu_sogou(); // 移除百度广告
                }
            }
        }catch(e){}
    });
    document.addEventListener('DOMContentLoaded', function(e) {
        setTimeout(function(){
            // 如果没有SuperPreload的话那么就会自动调用这个
            ShowSetting();
        }, 3000);
    }, false);
    if (location.host.indexOf("www.baidu.com") > -1) {
        Stype = "h3.t>a";
        Ftype = ".result-op, .c-showurl";
        Ctype = "#content_left>div[srcid] *[class~=t],[class~=op_best_answer_question]";
        startBaidu();
    } else if (location.host.indexOf("sogou") > -1) {
        Stype = "h3.pt>a, h3.vrTitle>a";
        Ftype = "cite[id*='cacheresult_info_']";
        Ctype = ".results>div";
        srartOthers();
    } else if (location.host.indexOf("google") > -1){
        Stype = "";
        Ftype = "._Rm";
        Ctype = ".srg>div[class~=g] *[class~=r],._yE>div[class~=_kk]";
        srartOthers();
    } else if (location.host.indexOf("bing") > -1){
        Stype = "";
        Ftype = ".b_attribution>cite";
        Ctype = "#b_results>li[class~=b_ans],#b_results>li[class~=b_algo],#b_results>li[class~=b_algo]";
        srartOthers();
        maxOneHtmlHeight = 4000;
    } else if(location.host.indexOf("zhihu.com") > -1){
        // code from https://greasyfork.org/zh-TW/scripts/20431 thanks fo 胡中元
        if(location.host==='link.zhihu.com') {
            let regRet = location.search.match(/target=(.+?)(&|$)/);
            if(regRet && regRet.length==3)
                location.href = decodeURIComponent(regRet[1]);
        } else{
            window.addEventListener('click', function(e){
                let dom = e.target, max_times = 3;
                while(dom && max_times--) {
                    if(dom.nodeName.toUpperCase()==='A') {
                        let regRet = dom.search.match(/target=(.+?)(&|$)/);
                        if(regRet && regRet.length==3)
                            dom.href = decodeURIComponent(regRet[1]);
                        return;
                    } else{
                        dom = dom.parentNode;
                    } 
                }
            });
        } 
    }else {
        addStyle(".word-replace{display: none  !important;}");
        return;
    }
    addStyle("a{text-decoration:none}"); // 移除这些个下划线
    function ShowSetting(){
        // 如果不存在的话，那么自己创建一个-copy from superPreload
        if(document.querySelector("#sp-ac-container") == null){
            GM_addStyle('#sp-ac-container{z-index:999999!important;text-align:left!important;}#sp-ac-container *{font-size:13px!important;color:black!important;float:none!important;}#sp-ac-main-head{position:relative!important;top:0!important;left:0!important;}#sp-ac-span-info{position:absolute!important;right:1px!important;top:0!important;font-size:10px!important;line-height:10px!important;background:none!important;font-style:italic!important;color:#5a5a5a!important;text-shadow:white 0px 1px 1px!important;}#sp-ac-container input{vertical-align:middle!important;display:inline-block!important;outline:none!important;height:auto !important;padding:0px !important;margin-bottom:0px !important;}#sp-ac-container input[type="number"]{width:50px!important;text-align:left!important;}#sp-ac-container input[type="checkbox"]{border:1px solid #B4B4B4!important;padding:1px!important;margin:3px!important;width:13px!important;height:13px!important;background:none!important;cursor:pointer!important;visibility:visible !important;position:static !important;}#sp-ac-container input[type="button"]{border:1px solid #ccc!important;cursor:pointer!important;background:none!important;width:auto!important;height:auto!important;}#sp-ac-container li{list-style:none!important;margin:3px 0!important;border:none!important;float:none!important;}#sp-ac-container fieldset{border:2px groove #ccc!important;-moz-border-radius:3px!important;border-radius:3px!important;padding:4px 9px 6px 9px!important;margin:2px!important;display:block!important;width:auto!important;height:auto!important;}#sp-ac-container legend{line-height:20px !important;margin-bottom:0px !important;}#sp-ac-container fieldset>ul{padding:0!important;margin:0!important;}#sp-ac-container ul#sp-ac-a_useiframe-extend{padding-left:40px!important;}#sp-ac-rect{position:relative!important;top:0!important;left:0!important;float:right!important;height:10px!important;width:10px!important;padding:0!important;margin:0!important;-moz-border-radius:3px!important;border-radius:3px!important;border:1px solid white!important;-webkit-box-shadow:inset 0 5px 0 rgba(255,255,255,0.3),0 0 3px rgba(0,0,0,0.8)!important;-moz-box-shadow:inset 0 5px 0 rgba(255,255,255,0.3),0 0 3px rgba(0,0,0,0.8)!important;box-shadow:inset 0 5px 0 rgba(255,255,255,0.3),0 0 3px rgba(0,0,0,0.8)!important;opacity:0.8!important;}#sp-ac-dot,#sp-ac-cur-mode{position:absolute!important;z-index:9999!important;width:5px!important;height:5px!important;padding:0!important;-moz-border-radius:3px!important;border-radius:3px!important;border:1px solid white!important;opacity:1!important;-webkit-box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3),inset 0 2px 1px rgba(255,255,255,0.3),0px 1px 2px rgba(0,0,0,0.9)!important;-moz-box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3),inset 0 2px 1px rgba(255,255,255,0.3),0px 1px 2px rgba(0,0,0,0.9)!important;box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3),inset 0 2px 1px rgba(255,255,255,0.3),0px 1px 2px rgba(0,0,0,0.9)!important;}#sp-ac-dot{right:-3px!important;top:-3px!important;}#sp-ac-cur-mode{left:-3px!important;top:-3px!important;width:6px!important;height:6px!important;}#sp-ac-content{padding:0!important;margin:5px 5px 0 0!important;-moz-border-radius:3px!important;border-radius:3px!important;border:1px solid #A0A0A0!important;-webkit-box-shadow:-2px 2px 5px rgba(0,0,0,0.3)!important;-moz-box-shadow:-2px 2px 5px rgba(0,0,0,0.3)!important;box-shadow:-2px 2px 5px rgba(0,0,0,0.3)!important;}#sp-ac-main{padding:5px!important;border:1px solid white!important;-moz-border-radius:3px!important;border-radius:3px!important;background-color:#F2F2F7!important;background:-moz-linear-gradient(top,#FCFCFC,#F2F2F7 100%)!important;background:-webkit-gradient(linear,0 0,0 100%,from(#FCFCFC),to(#F2F2F7))!important;}#sp-ac-foot{position:relative!important;left:0!important;right:0!important;min-height:20px!important;}#sp-ac-savebutton{position:absolute!important;top:0!important;right:2px!important;}#sp-ac-container .sp-ac-spanbutton{border:1px solid #ccc!important;-moz-border-radius:3px!important;border-radius:3px!important;padding:2px 3px!important;cursor:pointer!important;background-color:#F9F9F9!important;-webkit-box-shadow:inset 0 10px 5px white!important;-moz-box-shadow:inset 0 10px 5px white!important;box-shadow:inset 0 10px 5px white!important;}');
            var Container = document.createElement('div');
            Container.id = "sp-ac-container";
            Container.style = "position: fixed; top: 40%; left: 45%;";
            Container.innerHTML =
                    "    <div id='sp-ac-content' style='display: none;'>\n" +
                    "        <div id='sp-ac-main'>\n" +
                    "        <fieldset id='sp-ac-autopager-field' style='display:block;'>\n" +
                    "            <legend title='自动翻页模式的相关设置' style='color: red !important;'>AC-重定向设置</legend>\n" +
                    "            <ul>\n" +
                    "                <li><label><input title='AC-重定向' id='sp-ac-redirect' name='sp-ac-a_separator' title='AC-重定向' type='checkbox' "+(isRedirectEnable?'checked':'')+">主功能-重定向功能</label>\n" +
                    "                </li>\n" +
                    "                <li><label><input title='AC-去广告' id='sp-ac-ads' name='sp-ac-a_force' type='checkbox' "+(isAdsEnable?'checked':'')+">附加1-去广告功能</label>\n" +
                    "                </li>\n" +
                    "                <li><label><input title='AC-添加Favicon' id='sp-ac-favicon' name='sp-ac-a_force' type='checkbox' "+(isFaviconEnable?'checked':'')+">附加2-Favicon功能</label>\n" +
                    "                </li>\n" +
                    "                <li><label><input title='AC-添加编号' id='sp-ac-counter' name='sp-ac-a_force' type='checkbox' "+(isCounterEnable?'checked':'')+">附加3-编号功能</label></li>\n" +
                    "                <li><a href='https://shang.qq.com/wpa/qunwpa?idkey=5bbfe9de1e81a0930bd053f3157aad2dbb3fa7b991ac9f22ea9f2e2f53efde80' style='color:red !important;'>联系作者,提建议,寻求帮助,脚本定制点我</a></li>"+
                    "            </ul>\n" +
                    "            <span id='sp-ac-cancelbutton' class='sp-ac-spanbutton' title='取消' style='position: relative !important;float: left !important;'>取消</span>\n" +
                    "            <span id='sp-ac-savebutton' class='sp-ac-spanbutton' title='保存设置' style='position: relative !important;float: right !important;'>保存</span>\n" +
                    "        </fieldset>\n" +
                    "        </div>\n" +
                    "    </div>";
            document.body.appendChild(Container);
        }
        var allNodes = document.querySelectorAll(".faviconT, .CounterT");
        for(var i=0; i<allNodes.length; i++){
            if(allNodes[i].getAttribute('acClick')==null){
                allNodes[i].setAttribute('acClick', '1')
                allNodes[i].addEventListener('click', function(e) {
                    setTimeout(function(){
                        if(document.querySelector("#sp-ac-content").style.display == 'block')
                            document.querySelector("#sp-ac-content").style.display = 'none';
                        else
                            document.querySelector("#sp-ac-content").style.display = 'block';
                    }, 100);
                    return false;
                }, true);
            }
        }
        document.querySelector("#sp-ac-savebutton").addEventListener('click', function(e) {
            // 保存功能
            GM_setValue("isRedirectEnable", document.querySelector("#sp-ac-redirect").checked);
            GM_setValue("isAdsEnable", document.querySelector("#sp-ac-ads").checked);
            GM_setValue("isFaviconEnable", document.querySelector("#sp-ac-favicon").checked);
            GM_setValue("isCounterEnable", document.querySelector("#sp-ac-counter").checked);
            window.location.reload();
        }, false);
        document.querySelector("#sp-ac-cancelbutton").addEventListener('click', function(e) {
            document.querySelector("#sp-ac-content").style.display = 'none';
        }, false);
    }
    function LoadSetting(){
        isRedirectEnable = GM_getValue("isRedirectEnable",  true);
        isAdsEnable      = GM_getValue("isAdsEnable",  true);
        isFaviconEnable  = GM_getValue("isFaviconEnable",  true);
        isCounterEnable  = GM_getValue("isCounterEnable",  false);
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
        if(isRedirectEnable){
            if(Stype != null && Stype != "")
                resetURL(document.querySelectorAll(Stype)); // 百度去重定向
            removeOnMouseDownFunc(); // 移除onMouseDown事件，谷歌去重定向
        }
        if(isFaviconEnable){
            addFavicon(document.querySelectorAll(Ftype)); // 添加Favicon显示
        }
        if(isCounterEnable){
            addCounter(document.querySelectorAll(Ctype));
        }
    };
    function removeOnMouseDownFunc(){
        try{
            document.querySelectorAll(".g .rc .r a").forEach(function(one){
               one.setAttribute("onmousedown", ""); // 谷歌去重定向干扰
               one.setAttribute("target", "_blank"); // 谷歌链接新标签打开
            });
        }catch(e){}
    }
    function addStyle(css) { //添加CSS的代码--copy的
        var pi = document.createProcessingInstruction(
            'xml-stylesheet',
            'type="text/css" href="data:text/css;utf-8,' + encodeURIComponent(css) + '"'
        );
        return document.insertBefore(pi, document.documentElement);
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
                            method: "GET",
                            onreadystatechange:function(response) {
                                if(response.status==200){
                                    DealResult(response, c_curhref);
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
            //console.log("该链接已经被其他脚本干掉了哦"+resultURL);
        }
    }
    function Reg_Get(HTML, reg){
        var RegE = new RegExp(reg);
        try{return RegE.exec(HTML)[1];}catch(e){return"";}
    }
    function removeAD_baidu_sogou(){ // 移除百度自有广告
        if(location.host == "www.baidu.com"){
            if(document.querySelectorAll("#content_left")[0] != null){
                var fathers = document.querySelectorAll("#content_left")[0].childNodes;
                var lastId = 0;
                for(var i = 0; i < fathers.length; i++){
                    var currentNode = fathers[i];
                    if(fathers[i].tagName=="DIV" && fathers[i].getAttribute("dealAD") == null){
                        if(null == currentNode.id || "" == currentNode.id){
                            // 米有ID的貌似都是广告
                            console.log("移除广告 CLASS="+currentNode.className);
                            currentNode.remove();
                        } else if(currentNode.id == "clone"){
                            // ID 显示为CLONE的也是广告
                            console.log("移除广告 ID="+currentNode.id);
                            currentNode.remove();
                        } else if(currentNode.className.indexOf("result") != 0 && /^\d+$/.test(currentNode.id)){
                            // class不是result...的，并且id是纯粹数字的(很大)
                            console.log("移除广告 ID="+currentNode.id);
                            currentNode.remove();
                        } else{
                            var node = currentNode.querySelectorAll(".f13>span")[0];
                            if(node != null && node.innerHTML == "广告"){
                                console.log("移除广告 ID="+currentNode.id);
                                currentNode.remove();
                            }
                        }
                        currentNode.setAttribute("dealAD", 1);
                    }
                }
            }
        }else if(location.host == "www.sogou.com"){
            try{document.querySelector("#promotion_adv_container").remove();}catch(e){}
            try{document.querySelector("#kmap_business_title").remove();}catch(e){}
            try{document.querySelector("#kmap_business_ul").remove();}catch(e){}
            try{document.querySelector(".rvr-model[style='width:250px;']").style="display:none";}catch(e){}
        }
    }
    function addCounter(citeList){
        var cssText="display:inline-block;background:#FD9999;color:#D7D7D7;font-family:'微软雅黑';font-size:16px;text-align:center;width:20px;line-height:20px;border-radius:50%;float:left;";
        var div = document.createElement('div');
        for(var i=0;i<citeList.length;i++){
            if(citeList[i].getAttribute('sortIndex')){
                continue;
            }else{
                citeList[i].setAttribute('sortIndex',i);
                citeList[i].inner=citeList[i].innerHTML;
                div.innerHTML="<div class='CounterT' style=" + cssText + ">" + (i+1) + "</div>";
                citeList[i].innerHTML=div.innerHTML+citeList[i].inner;
            };
        };
    }
    function addFavicon(citeList){
        for (var index = 0; index < citeList.length; index++) {
            var url = replaceAll(citeList[index].innerHTML);
            //console.log(index+"."+url);
            if(null == citeList[index].getAttribute("ac_faviconStatus")){
                if(url == ""){
                    console.log("无效地址："+citeList[index].innerHTML);
                    citeList[index].setAttribute("ac_faviconStatus", "-1");
                    continue;
                }
                var curNode = citeList[index];
                var faviconUrl = url;
                for(II = 0; II <= 5; II++){
                    curNode = curNode.parentNode;
                    if(isInUrlList(curNode.className)){
                        break;
                    }
                }
                //console.log(index+"."+faviconUrl+"--"+II);
                if(II <= 5){
                    var tmpHTML = curNode.innerHTML;
                    var pos = tmpHTML.indexOf("fav-url")
                        &tmpHTML.indexOf("favurl")
                        &tmpHTML.indexOf("tit-ico")
                        &tmpHTML.indexOf("img_fav rms_img")
                        &tmpHTML.indexOf("c-tool-")
                        &tmpHTML.indexOf("span class=\"c-icon c-icon-");
                    //他自己已经做了favicon了
                    if(pos > -1){
                        console.log("已有图片："+faviconUrl);
                        citeList[index].setAttribute("ac_faviconStatus", "-2");
                        continue;
                    }
                    //https://api.byi.pw/favicon/?url=???? 不稳定
                    //http://"+faviconUrl+"/cdn.ico?defaulticon=http://soz.im/favicon.ico 不稳定
                    //https://www.xtwind.com/api/index.php?url=???? 挂了。。。
                    //https://statics.dnspod.cn/proxy_favicon/_/favicon?domain=sina.cn
                    //如果地址不正确，那么丢弃
                    var host = faviconUrl.replace(/[^.]+\.([^.]+)\.([^.]+)/, "$1.$2");
                    if(curNode.querySelector(".faviconT") == null && host.length>3){
                        var insNode = document.createElement("img");
                        curNode = curNode.children[0]; //firstChild容易遇到text对象
                        citeList[index].setAttribute("ac_faviconStatus", "1");
                        curNode.insertBefore(insNode, curNode.firstChild);
                        insNode.className = "faviconT";
                        insNode.style = "vertical-align:sub;height:16px;width:16px;margin-right:5px";
                        insNode.src = "https://favicon.yandex.net/favicon/"+host;
                        insNode.setAttribute("faviconID", "0");
                        insNode.onload = function(){
                            if(insNode.naturalWidth < 16){
                                //console.log("失败2："+faviconUrl+"暂时无解");
                                insNode.src = "http://code.taobao.org/svn/zb227IMG/favicon.ico";
                            }
                        };
                    }
                }
            }
        }
        function replaceAll(sbefore){
            var send;
            var result = sbefore.split('-');
            if(location.hostname.indexOf("sogou") > -1 && location.href.indexOf("sogou") < 20){
                // --搜狗专用；如果第一个是中文的话，地址就是第二个
                sbefore = result[1];
            }
            send = sbefore.replace(/(\/[^/]*|\s*)/ ,"").replace(/<[^>]*>/g, "").replace(/https?:\/\//g,"").replace(/<\/?strong>/g,"").replace(/<\/?b>/g,"").replace(/<?>?/g,"").replace(/( |\/).*/g,"");
            return send;
        }
        function isInUrlList(url){
            var leng = fatherName.length;
            for(var i = 0; i < leng; i++){
                if(url.indexOf(fatherName[i]) >= 0){
                    return true;
                }
            }
            return false;
        }
    }
})();