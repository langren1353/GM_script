// ==UserScript==
// @name         AC-淘宝天猫商品优惠信息查询
// @version      2.3
// @description  淘宝天猫商品查询是否具有优惠券
// @author       AC
// @include      https://item.taobao.com/item.htm*
// @include      https://detail.tmall.com/item.htm*
// @include      https://s.taobao.com/search?q=*
// @note         2017.11.4-V2.3 暂时新增两种模式供选择
// @note         2017.11.2-V2.2 参照了一个大神的脚本之后拿到了一些css，于是又加了些东西，展示一些双十一相关的标签
// @note         2017.11.1-V2.1 切换为include规则，而非match规则，避免GreaseMonkey上无法使用的问题
// @note         2017.10.30-V2.0 修复在某些页面上，标题获取不正确的问题
// @note         2017.10.28-V1.0 第一版本，edit from https://greasyfork.org/zh-TW/scripts/34604
// @icon         https://coding.net/u/zb227/p/zbImg/git/raw/master/img0/icon.jpg
// @home-url     https://greasyfork.org/zh-TW/scripts/34606
// @run-at       document-start
// @namespace    1353464539@qq.com
// ==/UserScript==
// .tb-detail-hd, .tb-main-title
function AutoStart(time, cssSelector, dealFunc) {
    var timerNode = setInterval(function () {
        if (document.querySelector(cssSelector).style.display == "") {
            clearInterval(timerNode);
            dealFunc();
        }
    }, time);
}
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
function addStyle(css) { //添加CSS的代码--copy的
    var pi = document.createProcessingInstruction(
        'xml-stylesheet',
        'type="text/css" href="data:text/css;utf-8,' + encodeURIComponent(css) + '"'
    );
    return document.insertBefore(pi, document.documentElement);
}
if (location.host == "item.taobao.com" || location.host == "detail.tmall.com") {
    AutoStart(200, ".tb-detail-hd, .tb-main-title", function () {
        var TitleNode = document.querySelector("div#J_Title h3, div.tb-detail-hd h1");
        var goodTitle = TitleNode.lastChild.nodeValue.trim();
        var goodID = getQueryString("id");
        var queryCoupon = "https://www.ntaow.com/details.jsp?auctionId=" + goodID;
        var querySimilar = "https://www.ntaow.com/coupon.jsp?mQuery=" + encodeURI(goodTitle);
        var faNode = document.querySelector("div#J_Title p.tb-subtitle, div.tb-detail-hd h1");
        var insNode = document.createElement("div");
        insNode.style = "font-size: 32px;font-weight: bold;font-family:microsoft yahei;";
        var htmlText = "<a href=" + queryCoupon + " target='_blank' style='color: red;'>==找优惠==</a>";
        htmlText += "&nbsp;&nbsp;&nbsp;&nbsp;<a href=" + querySimilar + " target='_blank' style='color: red;'>==看相似==</a>";
        insNode.innerHTML = htmlText;
        faNode.appendChild(insNode);
    });
} else if (location.host == "s.taobao.com") {
    AutoStart(200, ".m-itemlist", function () {
        addStyle(".m-itemlist .grid .row-4 { margin-top: 1px !important; margin-bottom: 20px;}");
        addStyle('.m-itemlist .grid .row-4, .m-itemlist .icon-has-more { overflow: visible !important;}');
        addStyle(".m-itemlist .grid .item { height: 376px !important;}");
        addStyle(".m-itemlist .grid .icon { margin-top: 3px; !important;}");
        addStyle(".grid .item-ctx-hover .icons { margin-top: 7px !important;}");

        addStyle(".response-wider  .m-itemlist .grid .item { height: 406px !important}");
        addStyle(".response-narrow  .m-itemlist .grid .item { height: 336px !important}");
    });
}