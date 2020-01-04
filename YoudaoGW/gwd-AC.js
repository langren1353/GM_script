// ==UserScript==
// @name         AC-购物党比价工具【精简版】
// @namespace    none
// @version      1.0
// @description  AC-精简版购物党数据
// @author       淘宝老司机
// @include      http*://item.taobao.com/*
// @include      http*://s.taobao.com/*
// @include      http*://detail.tmall.com/item.htm*
// @include      http*://detail.liangxinyao.com/item.htm*
// @include      http*://chaoshi.detail.tmall.com/item.htm*
// @include      http*://item.jd.com/*
// @include      https://item.jd.hk/*
// @include      https://detail.tmall.hk/*
// @include      https://*.suning.com/*
// @grant        GM_xmlhttpRequest
// @connect      chenzelin.herokuapp.com
// ==/UserScript==
(function () {
    var goodId = "";
	// 提取url中的参数
	function getUrlAttribute(attribute, needDecode) {
		var searchValue = (window.location.search.substr(1) + "").split("&");
		for (var i = 0; i < searchValue.length; i++) {
			var key_value = searchValue[i].split("=");
			var reg = new RegExp("^" + attribute + "$");
			if (reg.test(key_value[0])) {
				var searchWords = key_value[1];
				return needDecode ? decodeURIComponent(searchWords) : searchWords;
			}
		}
	}
	function safeWaitFunc(selector, callbackFunc, time, notClear) {
		time = time || 200;
		notClear = notClear || false;
		var doClear = !notClear;
		var id = setInterval(function () {
		    var selectRes = document.querySelectorAll(selector);
			if ((typeof (selector) == "string" && selectRes.length > 0)) {
				if (doClear) clearInterval(id);
				if(selectRes.length == 1) selectRes = selectRes[0];
				callbackFunc(selectRes);
			} else if ((typeof (selector) == "function" && selector().length > 0)) {
				if (doClear) clearInterval(id);
				callbackFunc(selector()[0]);
			}
		}, time);
	}
	function addStyle(css) { //添加CSS的代码--copy的--注意里面必须是双引号
		var pi = document.createProcessingInstruction(
			'xml-stylesheet',
			'type="text/css" href="data:text/css;utf-8,' + encodeURIComponent(css) + '"'
		);
		return document.insertBefore(pi, document.documentElement);
	}
	function addScript(src) {
		let node = document.createElement("script");
		node.src = src;
		node.charset = "UTF-8";
		document.head.appendChild(node);
	}

	function n_item_load_sc(item, interval) {
		try {
			var _id = item.dataset['id'];
			var chs = item.children;
			for (var j = 0; j < chs.length; j++) {
				var a = chs[j];
				if (a.tagName == 'A') {
					var _coupon_span = a.querySelector('.coupon_span');
					if (_coupon_span) {
						var atp = document.querySelector('#img-' + interval + '-' + _id)
						atp._href = atp.href;
						atp.onclick = function () {
							n_item_click(_id, atp._href);
						};
						atp.href = 'javaScript:void(0)';
					}
				}
			}
		} catch (e) {
		}
	}

	function init() {
		let extName = "gwdv1.js";
		var hideStyle = "";
		if (location.host == "jd.com") {
			extName = "gwdv2.js";
			hideStyle = ".gwd-minibar-bg, #favor_box{display:none}" +
				"#gwdang_main > a.gwd-topbar-logo, #gwdang_main > div.gwd-topbar-right{display:none}";
		} else {
			hideStyle = "#gwdang-main>div.logo, #gwdang-feed-close, #gwdang-history, #coupon_box, #bjd_yifenqian_detail{display:none}" +
				"#favor_box{display:none}";
		}
		addScript("https://cdn.jsdelivr.net/gh/chenzelin01/wechatproxy/public/" + extName);
		addStyle(hideStyle);
        goodId = getUrlAttribute("id");
	}
	function reset(hostName) {
	    let itemListId = "#" + hostName + "-item-list";
		safeWaitFunc("#gwdang_main", function (node) {
			var items = node.querySelector(itemListId).children;
			for (i = 0; i < items.length; i++) {
				item = items[i];
				n_item_load_sc(item, hostName);
			}
		}, 1000);
		safeWaitFunc(".search_coupon_tip", function(nodeList){
            if(nodeList instanceof Array){
                for(var i = 0; i < nodeList.length; i++){
                    var cur = nodeList[i];
                    cur.href = cur.parentNode.parentNode.querySelector('.pic > a').dataset.href;
                }
            }
        }, 500, true)
	}

	init();
    // reset("taobao");
})()