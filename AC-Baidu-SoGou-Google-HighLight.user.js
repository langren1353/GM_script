// ==UserScript==
// @name AC-baidu： 优化百度、搜狗、谷歌搜索结果之关键词自动高亮
// @description     1.自动提取搜索页面的搜索关键词 2.对关键词自动进行高亮处理 W键可以取消高亮 3.动态获取动态的搜索关键词，重新高亮显示
// @icon            https://coding.net/u/zb227/p/zbImg/git/raw/master/img0/icon.jpg
// @author          AC
// @create          2018-05-25
// @version         1.1
// @include         *
// @home-url        https://greasyfork.org/zh-TW/scripts/368418
// @home-url2       https://github.com/langren1353/GM_script
// @namespace       1353464539@qq.com
// @copyright       2017, AC
// @lastmodified    2018-05-26
// @feedback-url    https://greasyfork.org/zh-TW/scripts/368418
// @note            2018.05.26-V1.1 修复垃圾代码，上个版本真的是垃圾代码，运行又慢，占用又高，还特么定时运行，但就是数据出现很慢，现在应该没有这个问题了
// @note            2018.05.25-V1.0 从百度重定向脚本中拆分出来
// @run-at          document-body
// @grant           GM_getValue
// @grant           GM_setValue
// ==/UserScript==

var needDisplayNewFun = true; // 本次更新是否有新功能需要展示
// 初次：还是采用了setInterval来处理，感觉这样的话速度应该比Dom快，也比MO适用，因为MO需要在最后才能调用，实用性还不如timer
// 之后：还是采用MO的方式来处理
(function () {
    'use strict';
    var isInDebug = false;
    var HightLightColorList = ["#FFFF80", "#90EE90", "#33FFFF", "#FF6600", "#FF69B4", "#20B2AA", "#8470FF"];
    var isSearchWindowActive = true;
    var enableDBSelectText = false;
    var oldTextSelectInterval = -1;
    var hasInitBtnBind = false;
    var hasInitBtnBind_DOM = false;
    var dataRapidLock = false;
    var SiteTypeID; // 标记当前是哪个站点[百度=1;搜狗=2;3=好搜;谷歌=4;必应=5;知乎=6;其他=7]
    var SiteType={
        BAIDU:1,
        SOGOU:2,
        SO:3,
        GOOGLE:4,
        BING:5,
        ZHIHU:6,
        OTHERS:7
    };
    if (location.host.indexOf("www.baidu.com") > -1) {
        SiteTypeID = SiteType.BAIDU;
    } else if (location.host.indexOf("sogou") > -1) {
        SiteTypeID = SiteType.SOGOU;
    }  else if (location.host.indexOf("so.com") > -1) {
        SiteTypeID = SiteType.SO;
    } else if (location.host.indexOf("google") > -1) {
        SiteTypeID = SiteType.GOOGLE;
    } else if (location.host.indexOf("bing") > -1) {
        SiteTypeID = SiteType.BING;
    } else if (location.host.indexOf("zhihu.com") > -1) {
        SiteTypeID = SiteType.ZHIHU;
    } else {
        SiteTypeID = SiteType.OTHERS;
    }
    function DoHighLightWithSearchText(searchValue){
        WordAutoHighLight(searchValue);
    }
    function AC_addStyle(css, className, addToTarget, isReload){ // 添加CSS代码，不考虑文本载入时间，带有className
        var tout = setInterval(function(){
            if(addToTarget == null) addToTarget = "head";
            if(isReload == null) isReload = false;
            if(document.querySelector(addToTarget) != null){
                clearInterval(tout);
                if(isReload == false && document.querySelector("."+className) != null){
                    // 节点存在,并且不准备覆盖
                    return;
                }
                safeRemove("."+className);
                var cssNode = document.createElement("style");
                if(className != null)
                    cssNode.className = className;
                cssNode.innerHTML = css;
                try{
                    document.querySelector(addToTarget).appendChild(cssNode);
                }catch (e){console.log(e.message);}
            }
        }, 50);
    }
    function safeRemove(cssSelector){
        try {
            document.querySelector(cssSelector).remove();
        }catch (e){}
    }
    function WordAutoHighLight(searchText){
        if(!hasInitBtnBind){
            hasInitBtnBind = true;
            setTimeout(function(){
                // 似乎过早的绑定可能出现问题，例如www.huomao.com中h5视频的LOGO一直在
                document.addEventListener('keyup', DoHighLight, true);
            }, 500);
        }
        var enableCharCode = 'W';
        var keySets = new Object();
        var counter = 0;
        doHighLightTextS(searchText);
        function DoHighLight(e) {
            var target = e.target;
            var selectedText = getSelectedText(target);
            var s_keyup = (e.type === 'keyup') && (enableCharCode.charCodeAt(0)==e.keyCode);// 是按下特殊按键
            if (s_keyup) {
                if(typeof(selectedText) == "undefined" || selectedText == null || selectedText == ""){
                    try{clearInterval(oldTextSelectInterval);}catch (e){console.log(e);}
                    console.log("不准亮");
                    unHighLightAll_Text();
                }else{
                    enableDBSelectText = true;
                    doHighLightTextS(selectedText, true);
                }
            }
        }
        function myConsoleLog(text){
            if(isInDebug){
                console.log(text);
            }
        }
        function doHighLightTextS(selectedText, dbclick) {
            if(typeof(selectedText) == "undefined" || selectedText == null || selectedText == "") return;
            unHighLightAll_Text();
            if(dbclick){
                GM_setValue("searchKeyWords", keySets.keywords);
                myConsoleLog("双击:" + selectedText + keySets.keywords);
            }
            console.log("设定文字为："+selectedText);
            initKeySets(selectedText);
            doHighLightAll_CSS();
            doHighLightAll_Text();
            if(hasInitBtnBind_DOM == false){
                hasInitBtnBind_DOM = true;
                document.addEventListener('DOMSubtreeModified', function (e) {
                    if(dataRapidLock == false){
                        dataRapidLock = true;
                        doHighLightAll_Text();
                        setTimeout(function(){dataRapidLock = false;}, 500);
                    }
                }, false);
            }
        }
        function getSelectedText(target) {
            function getTextSelection() {
                var selectedText = '';
                if (target.getAttribute("type")) {
                    if (target.getAttribute("type").toLowerCase() === "checkbox") return '';
                }
                var value = target.value;
                if (value) {
                    var startPos = target.selectionStart;
                    var endPos = target.selectionEnd;
                    if (!isNaN(startPos) && !isNaN(endPos)) selectedText = value.substring(startPos, endPos);
                    return selectedText;
                } else return '';
            }
            var selectedText = window.getSelection().toString();
            if (!selectedText) selectedText = getTextSelection();
            myConsoleLog(selectedText);
            return selectedText;
        }
        function getBLen(str) {
            if (str == null) return 0;
            if (typeof str != "string"){
                str += "";
            }
            return str.replace(/[^\x00-\xff]/g,"01").length;
        }
        // 初始化点击的文字信息
        function initKeySets(selection){
            // 1.split通过特殊字符和字符边界分割串[非[0-9A-Za-z]特殊字符]
            // 2.通过特定字符连接原始串，
            // 3.1移除多次重复的特定串，非常用串移除，避免空串
            // 3.2移除开头或者结尾的特定串，避免分割后出现空白数据，
            // 4.按特定串分割
            keySets.keywords = selection
                .split(/\b |[\u0000-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u00FF\uFF00-\uFFFF\u3000-\u303F]/g)
                .join('ACsCA')
                .replace(/[^\u4E00-\u9FA5|0-9|a-z|A-Z_]+/g, "")
                .replace(/(ACsCA){2}/g, "ACsCA")
                .replace(/(^ACsCA|ACsCA$)/g, "")
                .split("ACsCA");
            keySets.length = keySets.keywords.length;
            keySets.textcolor = new Array();
            // keySets.backcolor = new Array();
            keySets.visible = new Array();
            for(var i=0; i < keySets.keywords.length; i++){
                keySets.textcolor[i] = "rgb(0,0,0)";
                keySets.visible[i] = "true";
            }
        }
        function doHighLightAll_CSS(){ // 顶部的那一堆数组
            if (keySets.visible[0] == "true"){
                var rule = ".acWHSet{display:inline!important;";
                if (keySets.textcolor.length > 0) rule += "color:"+keySets.textcolor[0]+";";
                rule += "font-weight:inherit;}";
                for(var i = 0; i < keySets.keywords.length; i++){
                    rule += ".acWHSet[data='"+keySets.keywords[i].toLocaleLowerCase()+"']{background-color:"+HightLightColorList[i % HightLightColorList.length]+";}";
                }
                AC_addStyle(rule, "AC-highLightRule", "body", true);
            }
        }
        function doHighLightAll_Text(){
            if(keySets.keywords.length == 0) return;
            var patExp = "";
            for(var index=0; index<keySets.keywords.length-1; index++) {
                patExp += keySets.keywords[index]+"|";
            }
            patExp += keySets.keywords[index];
            var pat = new RegExp("("+patExp+")", "gi");
            var span = document.createElement('span');
            var snapElements = document.evaluate(
                './/text()[normalize-space() != "" ' +
                'and not(ancestor::style) ' +
                'and not(ancestor::script) ' +
                'and not(ancestor::textarea) ' +
                'and not(ancestor::div[@id="thdtopbar"]) ' +
                'and not(ancestor::div[@id="kwhiedit"])' +
                'and not(parent::span[@txhidy15])]',
                document.body, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            if (!snapElements.snapshotItem(0)) { return; }
            try{
                for (var i = 0, len = snapElements.snapshotLength; i < len; i++) {
                    var node = snapElements.snapshotItem(i);
                    if (node.nodeValue.length > 1 && pat.test(node.nodeValue)) {
                        if(node.className!= null && node.className.indexOf("acWHSet") > 0) return;
                        var sp = span.cloneNode(true);
                        var findResult = node.nodeValue.replace(/</g, '&lt;').replace(/>/g, '&gt;');
                        var repNodeHTML = findResult.replace(pat, '<span class="THmo acWHSet" txhidy15="acWHSet">$1</span>');
                        sp.innerHTML = repNodeHTML;
                        if(node.parentNode == null) continue;
                        node.parentNode.replaceChild(sp, node);
                        sp.outerHTML = sp.innerHTML;
                    }
                }
                var attributeDataResetList = document.querySelectorAll(".acWHSet");
                for(var i = 0; i < attributeDataResetList.length; i++){
                    attributeDataResetList[i].setAttribute("data", attributeDataResetList[i].innerHTML.toLocaleLowerCase());
                }
            }catch (e) {
                console.log(e);
            }
        }
        function unHighLightAll_Text(){
            try{
                var tgts = document.querySelectorAll('span[txhidy15="acWHSet"]');
                for (var i=0; i<tgts.length; i++){
                    var parnode = tgts[i].parentNode, parpar = parnode.parentNode, tgtspan;
                    if (parnode.hasAttribute("thdcontain") && parnode.innerHTML == tgts[i].outerHTML){
                        parnode.outerHTML = tgts[i].textContent.replace(/</g, '&lt;').replace(/>/g, '&gt;');
                        tgtspan = parpar;
                    } else {
                        tgts[i].outerHTML = tgts[i].textContent.replace(/</g, '&lt;').replace(/>/g, '&gt;');
                        tgtspan = parnode;
                    }
                    tgtspan.normalize();
                    if (tgtspan.hasAttribute("thdcontain")){
                        parnode = tgtspan.parentNode;
                        if (parnode){
                            if (parnode.hasAttribute("thdcontain") && parnode.innerHTML == tgtspan.outerHTML && tgtspan.querySelectorAll('span[txhidy15]').length == 0){
                                parnode.outerHTML = tgtspan.innerHTML;
                            } else if (parnode.innerHTML == tgtspan.outerHTML && tgtspan.querySelectorAll('span[txhidy15]').length == 0) {
                                parnode.innerHTML = tgtspan.innerHTML;
                            }
                        }
                    }
                }
                var oldTgs = document.querySelectorAll("span[thdcontain='true']");
                counter = 0;
                for(var i=0; i < oldTgs.length; i++){
                    var curTg = oldTgs[i];
                    markChildandRemove(curTg);
                }
            }catch (e){}
        }
        function markChildandRemove(node){
            try{
                if(node.tagName.toLowerCase() == "span"){
                    node.outerHTML = node.innerHTML;
                }
                var childList = node.childNodes;
                for(var i=0; i < childList.length; i++){
                    counter++;
                    var node = childList[i];
                    markChildandRemove(node);
                    if(node.tagName.toLowerCase() == "span"){
                        node.outerHTML = node.innerHTML;
                    }
                }
            }catch (e){}
        }
    }

    // 如果是搜索引擎的话
    if(SiteTypeID != SiteType.OTHERS){ // 启用自动高亮
        // 持续拿到搜索关键词，存入GM中，避免切换页面导致的关键词丢失
        DoHighLightWithSearchText(GM_getValue("searchKeyWords", ""));
        setInterval(function(){
            if(document.hidden == true){ // 只要是搜索窗口不激活，那么flag=false
                isSearchWindowActive = false;
                enableDBSelectText = false;
            }
            // 窗口激活状态；或者是窗口之前是不激活，现在激活了
            if(isSearchWindowActive == true || (isSearchWindowActive == false && document.hidden == false)) {
                var searchValue = (window.location.search.substr(1) + "").split("&");
                for (var i = 0; i < searchValue.length; i++) {
                    var key_value = searchValue[i].split("=");
                    if (/^(wd|q|query)$/.test(key_value[0])) {
                        var searchWords = decodeURI(key_value[1]).toLocaleLowerCase().replace(/\+/g, " ");
                        if(GM_getValue("searchKeyWords", "") != searchWords && enableDBSelectText == false){ // 避免重复掉用，一直刷新关键词
                            GM_setValue("searchKeyWords", searchWords);
                            DoHighLightWithSearchText(GM_getValue("searchKeyWords", ""));
                        }
                        break;
                    }
                }
            }
        }, 1000);
    }else{
        DoHighLightWithSearchText(GM_getValue("searchKeyWords", ""));
    }
})();