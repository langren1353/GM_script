// ==UserScript==
// @name         AC-独家-淘宝天猫优惠券查询领取,大额优惠券,【100元购物神券】,省钱购物,领券购买更优惠,平均优惠20%
// @version      5.2
// @description  独家查询淘宝商品查询是否具有优惠券,各种大额优惠券,【3元|10元|20元|40元】优惠券领取,购物必备
// @author       AC
// @include      https://item.taobao.com/item.htm*
// @include      https://detail.tmall.com/item.htm*
// @include      https://s.taobao.com/search*
// @include      https://cart.taobao.com/*
// @note         2018.04.30-V5.2 新增优惠券面额查询结果
// @note         2018.03.18-V5.1 更新下标题
// @note         2018.03.18-V5.0 新增购物车页面设置数据
// @note         2018.03.10-V4.9 修正上个版本更新的问题
// @note         2018.03.08-V4.8 简单增加一个按钮选项
// @note         2018.01.23-V4.5 修正文字说明
// @note         2018.01.22-V4.4 修复上个版本更新导致的BUG。。。。。很尴尬
// @note         2018.01.18-V4.3 优化界面显示效果，显示搜索结果中被自动删除的项目
// @note         2018.01.07-V4.2 更换域名
// @note         2018.01.06-V4.1 移除不正常的推广模式2
// @note         2018.01.06-V4.0 移除不正常的推广模式
// @note         2018.01.02-V3.8 更新标题和文字说明,顺带调整代码结构
// @note         2017.12.25-V3.7 修复偶尔查找按钮失效的问题
// @note         2017.12.25-V3.6 修复更新导致的小问题2，不影响使用
// @note         2017.12.17-V3.5 修复更新导致的小问题，不影响使用
// @note         2017.12.05-V3.4 新增站内搜索模式
// @note         2017.11.22-V3.3 再试试以前的模式，修复BUG
// @note         2017.11.17-V3.2 绝望的搜索BUG修复
// @note         2017.11.17-V3.1 优化载入缓慢的问题
// @note         2017.11.17-V3.0 修复上一版过于流畅的bug，上一版更新导致的bug挺多的。。。
// @note         2017.11.17-V2.9 正常更新，尽量减少由于重定向带来的影响，同时修正规则避免出事
// @note         2017.11.17-V2.8 上个版本更新导致的bug  ...P_P...
// @note         2017.11.17-V2.7 修复优惠券获取不正确的问题，以及部分情况下无法显示优惠券的问题
// @note         2017.11.12-V2.6 简单更新
// @note         2017.11.11-V2.5 查询速度更快速，并且优化了载入情况，加入了个人数据
// @note         2017.11.10-V2.4 如果有优惠，可以展示出优惠信息了
// @note         2017.11.4-V2.3 暂时新增两种模式供选择
// @note         2017.11.2-V2.2 参照了一个大神的脚本之后拿到了一些css，于是又加了些东西，展示一些双十一相关的标签
// @note         2017.11.1-V2.1 切换为include规则，而非match规则，避免GreaseMonkey上无法使用的问题
// @note         2017.10.30-V2.0 修复在某些页面上，标题获取不正确的问题
// @note         2017.10.28-V1.0 第一版本，edit from https://greasyfork.org/zh-TW/scripts/34604
// @icon         https://coding.net/u/zb227/p/zbImg/git/raw/master/img0/icon.jpg
// @home-url     https://greasyfork.org/zh-TW/scripts/34606
// @run-at       document-start
// @namespace    1353464539@qq.com
// @connect      cent.ntaow.com
// @grant        GM_xmlhttpRequest
// ==/UserScript==
// .tb-detail-hd, .tb-main-title
if(location.href.indexOf("item.taobao.com") + location.href.indexOf("detail.tmall.com") >= 0) {
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
    var goodID = getQueryString("id");
    if (location.href.indexOf("ali_trackid") < 0) {
        queryData(goodID);
    }
    function AutoStart(time, cssSelector, dealFunc) {
        var timerNode = setInterval(function () {
            try {
                if (document.querySelector(cssSelector).style.display == "") {
                    clearInterval(timerNode);
                    dealFunc();
                }
            } catch (e) {
            }
        }, time);
    }
    function acBuyScript(result) {
        var tt = setInterval(function () {
            var node = document.querySelector(".acBuyScriptCoupon");
            if (node != null) {
                clearInterval(tt);
                if (result.count == 1) {
                    node.innerHTML = "!"+result.mod_json_details.priceDiscount+"元优惠券!";
                    var TitleNode = document.querySelector("div#J_Title h3, div.tb-detail-hd h1");
                    var goodTitle = TitleNode.firstChild.nodeValue.trim();
                    node.href = "https://cent.ntaow.com/coupon.jsp?mQuery=" + encodeURI(goodTitle);
                } else {
                    node.innerHTML = "无优惠或已领优惠";
                    node.setAttribute("style", "font-size: 11px;color:#6c6c6c");
                }
            }
        }, 50);
    }
    function queryData(goodID) {
        cgoodTitle = document.title;
        var ret = GM_xmlhttpRequest({
            method: "GET", responseType: 'jsonp', url: "https://cent.ntaow.com/getDetails_json.jsp?&auctionId=" + goodID + "&title=" + cgoodTitle,
            onload: function (res) {
                res = res.responseText.replace("acBuyScript", "").replace("(", "").replace(/\)$/, "");
                res = JSON.parse(res);
                acBuyScript(res);
            }
        });
    }
    AutoStart(100, ".tb-detail-hd, .tb-main-title", function () {
        var TitleNode = document.querySelector("div#J_Title h3, div.tb-detail-hd h1");
        var goodTitle = TitleNode.firstChild.nodeValue.trim();
        var querySimilar = "https://cent.ntaow.com/coupon.jsp?mQuery=" + encodeURI(goodTitle);
        var queryInSite = "https://s.taobao.com/search?q=" + encodeURI(goodTitle) + "&";
        var faNode = document.querySelector("div#J_Title p.tb-subtitle, div.tb-detail-hd h1");
        var insNode = document.createElement("div");
        insNode.style = "font-size: 32px;font-weight: bold;font-family:microsoft yahei;";
        var htmlText = "<a class='acBuyScriptCoupon' href='javascript:void(0);' target='_blank' style='color: red;'>=查找中=</a>";
        htmlText += "&nbsp;&nbsp;<a href=" + querySimilar + " target='_blank' style='color: red;'>[找相似]</a>";
        htmlText += "&nbsp;&nbsp;<a href=" + queryInSite + " target='_blank' style='color: red;'>[站内搜]</a>";
        insNode.innerHTML = htmlText;
        faNode.appendChild(insNode);
        var htmlTB = "<a style='padding: 6px 12px;ine-height:26px;text-align: center;display: inline-block;margin-bottom: 0;font-size: 14px;font-weight: normal;height:26px;lwhite-space: nowrap;vertical-align: middle;-ms-touch-action: manipulation;touch-action: manipulation;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;background-image: none;border: 1px solid transparent;border-radius:2px;color: #fff;background-color: #DF231C;#FF0036;margin-left:10px' href='https://cent.ntaow.com/coupon.jsp?mQuery="+encodeURI(goodTitle)+"'>获取优惠券</a>";
        var htmlTMALL = "<div class='tb-action' style='margin-top:0'><a style='display: inline-block;border-radius:2px;color: #fff;background-color: #DF231C;padding: 6px 12px;margin-bottom: 0;font-size: 14px;font-weight: normal;height:26px;line-height:26px;width:156px;text-align: center;white-space: nowrap;vertical-align: middle;-ms-touch-action: manipulation;touch-action: manipulation;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;background-image: none;border: 1px solid transparent;' href='https://cent.ntaow.com/coupon.jsp?mQuery="+encodeURI(goodTitle)+"'>获取优惠券</a></div>";
        var anoInsNode = document.createElement("div");
        if(location.host.indexOf('taobao') > 0){
            anoInsNode.innerHTML = htmlTB;
            document.querySelector('.tb-action').append(anoInsNode);
        }else{
            anoInsNode.innerHTML = htmlTMALL;
            document.querySelector('.tb-sku').append(anoInsNode);
        }
    });
}else if(location.href.indexOf("s.taobao.com/search") > 0){
    var counter = 0, max = 10;
    var tt = setInterval(function () {
        var nodes = document.querySelectorAll(".items .item-ad");
        if(nodes != null){
            clearInterval(tt);
            for(var i = 0; i<nodes.length; i++){
                nodes[i].className = "item J_MouserOnverReq  ";
            }
        }
        counter++;
        if(counter >= max){
            clearInterval(tt);
        }
    }, 100);
} else if(location.href.indexOf("cart.taobao.com") >= 0){
    setInterval(function(){
        if(document.querySelector("#J_OrderList .item-basic-info") != null){
            var htmlCart = "<a href='https://cent.ntaow.com/coupon.jsp?mQuery=AAAAAAAAAA' style='height:22px !important;color:red;font-size:16px;border-radius:1px;padding:2px;border-color:#fea356;border-style: dashed;'>查找优惠信息</a>";
            var nodes = document.querySelectorAll(".order-content .item-basic-info");
            for(i = 0; i < nodes.length; i++){
                var title = nodes[i].querySelector("a").getAttribute("title");
                if(title != null){
                    var addHTMLText = htmlCart.replace("AAAAAAAAAA", encodeURI(title));
                    var insNode = document.createElement("div");
                    insNode.className = "ac-tb-add";
                    insNode.style = "display: inline-block";
                    insNode.innerHTML = addHTMLText;
                    if(nodes[i].parentNode.querySelector(".item-icons") && nodes[i].parentNode.querySelector(".item-icons").querySelector(".ac-tb-add") == null){
                        nodes[i].parentNode.querySelector(".item-icons").appendChild(insNode);
                    }
                }
            }
        }
    }, 1000);
}