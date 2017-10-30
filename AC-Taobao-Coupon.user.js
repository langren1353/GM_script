// ==UserScript==
// @name         AC-淘宝天猫商品优惠信息查询
// @version      2.0
// @description  淘宝天猫商品查询是否具有优惠券
// @author       AC
// @match        https://item.taobao.com/item.htm*
// @match        https://detail.tmall.com/item.htm*
// @note         2017.10.30-V2.0 修复在某些页面上，标题获取不正确的问题
// @note         2017.10.28-V1.0 第一版本，edit from https://greasyfork.org/zh-TW/scripts/34604
// @run-at       document-start
// ==/UserScript==
// .tb-detail-hd, .tb-main-title
var actaobaoT = setInterval(function(){
    if(document.querySelectorAll(".tb-detail-hd, .tb-main-title").length > 0){
        clearInterval(actaobaoT);
        var TitleNode = document.querySelector("div#J_Title h3, div.tb-detail-hd h1");
        var goodTitle = TitleNode.lastChild.nodeValue.trim();
        var queryUrl = "https://ntaow.com/coupon.jsp?mQuery=" +encodeURI(goodTitle);
        var faNode = document.querySelector("div#J_Title p.tb-subtitle, div.tb-detail-hd h1");
        var insNode = document.createElement("div");
        insNode.style = "font-size: xx-large;font-weight: bold;font-family:microsoft yahei;";
        insNode.innerHTML = "<a href="+queryUrl+" target='_blank' style='color: red;'>===查找优惠===</a><br/>";
        faNode.appendChild(insNode);
    }
}, 200);