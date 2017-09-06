// ==UserScript==
// @name            双击选中高亮
// @icon            https://coding.net/u/zb227/p/zbImg/git/raw/master/img0/icon.jpg
// @namespace       ntaow.com
// @version         1.1
// @include         *
// @copyright       2017, AC
// @description     双击选中高亮或者普通选中后按G高亮
// @note            2017.09.06-V1.1 修复上个版本更新导致的百度知道再次异常问题;更新知乎上的重定向问题-自己的脚本
// @grant           none
// ==/UserScript==
document.addEventListener('dblclick', DoHighLight, false);
document.addEventListener('mouseup', DoHighLight, false);
document.addEventListener('keyup', DoHighLight, false);
var isDBClickOn = true;
var enableCharCode = 'G';
var keySets = new Object();
function DoHighLight(e) {
    var target = e.target;
    var selectedText = getSelectedText(target);
    var s_dblclick = (e.type === 'dblclick')&&isDBClickOn; // 是双击选中
    var s_keyup = (e.type === 'keyup') && (enableCharCode.charCodeAt(0)==e.keyCode);// 是按下特殊按键
    if (selectedText && getBLen(selectedText) >= 3) {
        if (s_keyup){
            doHighLight(selectedText);
        }else if (s_dblclick) {
            doHighLight(selectedText);
        }
    }
}
function doHighLight(selectedText) {
    unHighLightAll_Text();
    console.log("双击:" + selectedText);
    initKeySets(selectedText);
    console.log(keySets.keywords);
    doHighLightAll_CSS();
    doHighLightAll_Text();
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
    // 1.split通过特殊字符和字符边界分割串，2.通过特定字符连接原始串，3.1移除多次重复的特定串，避免空串 3.2移除开头或者结尾的特定串，避免分割后出现空白数据，4.按特定串分割
    keySets.keywords = selection.split(/\b|[\uFF00-\uFFFF\u3000-\u303F]/g).join('ACsCA').replace(/[^\u4E00-\u9FA5|0-9|a-z|A-Z]+/g, "").replace(/(ACsCA){2}/g, "ACsCA").replace(/(^ACsCA|ACsCA$)/g, "").split("ACsCA");
    keySets.length = keySets.keywords.length;
    keySets.textcolor = new Array();
    keySets.backcolor = new Array();
    keySets.visible = new Array();
    for(var i=0; i < keySets.keywords.length; i++){
        keySets.textcolor[i] = "rgb(0,0,0)";
        keySets.backcolor[i] = "rgb(255,255,128)";
        keySets.visible[i] = "true";
    }
}
function doHighLightAll_CSS(){ // 顶部的那一堆数组
    if (keySets.visible[0] == "true"){
        var rule = ".acWHSet{display:inline!important;";
        if (keySets.textcolor.length > 0) rule += "color:"+keySets.textcolor[0]+";";
        if (keySets.backcolor.length > 0) rule += "background-color:"+keySets.backcolor[0]+";";
        rule += "font-weight:inherit;}";
        var setrule = document.querySelector('style[hlset="acWHSet"]');
        if (!setrule){
            var s = document.createElement("style");
            s.type = "text/css";
            s.setAttribute("hlset", "acWHSet");
            s.appendChild(document.createTextNode(rule));
            document.body.appendChild(s);
        } else {
            setrule.innerHTML = rule;
        }
    }
}
function doHighLightAll_Text(){
    if(keySets.keywords.length == 0) return;
    var patExp = "(";
    for(var index=0; index<keySets.keywords.length-1; index++) {
        // if(keySets.keywords)
        patExp += keySets.keywords[index]+"|";
    }
    patExp += keySets.keywords[index]+")";
    var pat = new RegExp(patExp, "gi");
    var span = document.createElement('thdfrag');
    span.setAttribute("thdcontain","true");
    var snapElements = document.evaluate(
        './/text()[normalize-space() != "" ' +
        'and not(ancestor::style) ' +
        'and not(ancestor::script) ' +
        'and not(ancestor::textarea) ' +
        'and not(ancestor::div[@id="thdtopbar"]) ' +
        'and not(ancestor::div[@id="kwhiedit"]) ' +
        'and not(parent::thdfrag[@txhidy15])]',
        document.body, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    if (!snapElements.snapshotItem(0)) { return; }
    for (var i = 0, len = snapElements.snapshotLength; i < len; i++) {
        var node = snapElements.snapshotItem(i);
        if (pat.test(node.nodeValue)) {
            var sp = span.cloneNode(true);
            sp.innerHTML = node.nodeValue.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(pat, '<thdfrag class="THmo acWHSet" txhidy15="acWHSet">$1</thdfrag>');
            node.parentNode.replaceChild(sp, node);
            // try to un-nest containers
            if (sp.parentNode.hasAttribute("thdcontain")) sp.outerHTML = sp.innerHTML;
        }
    }
}
function unHighLightAll_Text(){
    var tgts = document.querySelectorAll('thdfrag[txhidy15="acWHSet"]');
    for (var i=0; i<tgts.length; i++){
        var parnode = tgts[i].parentNode, parpar = parnode.parentNode, tgtspan;
        if (parnode.hasAttribute("thdcontain") && parnode.innerHTML == tgts[i].outerHTML){
            parnode.outerHTML = tgts[i].textContent.replace(/</g, '&lt;').replace(/>/g, '&gt;');
            tgtspan = parpar;
        } else {
            tgts[i].outerHTML = tgts[i].textContent.replace(/</g, '&lt;').replace(/>/g, '&gt;');
            tgtspan = parnode;
        }
        tgtspan.normalize(); // 不影响显示，但是影响html内部文字排版
        if (tgtspan.hasAttribute("thdcontain")){
            parnode = tgtspan.parentNode;
            if (parnode){
                if (parnode.hasAttribute("thdcontain") && parnode.innerHTML == tgtspan.outerHTML && tgtspan.querySelectorAll('thdfrag[txhidy15]').length == 0){
                    parnode.outerHTML = tgtspan.innerHTML;
                } else if (parnode.innerHTML == tgtspan.outerHTML && tgtspan.querySelectorAll('thdfrag[txhidy15]').length == 0) {
                    parnode.innerHTML = tgtspan.innerHTML;
                }
            }
        }
    }
}