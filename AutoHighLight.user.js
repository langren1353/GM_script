// ==UserScript==
// @name AC-baidu： 优化百度、搜狗、谷歌搜索结果之关键词自动高亮
// @description     1.自动提取搜索页面的搜索关键词 2.对关键词自动进行高亮处理 W键可以取消高亮 3.动态获取动态的搜索关键词，重新高亮显示
// @icon            https://gitee.com/remixAC/GM_script/raw/master/images/head.jpg
// @author          AC
// @create          2018-05-25
// @version         26.13
// @include         *
// @exclude         *://www.bilibili.com/*
// @home-url        https://greasyfork.org/zh-TW/scripts/368418
// @home-url2       https://github.com/langren1353/GM_script
// @namespace       1353464539@qq.com
// @copyright       2017, AC
// @lastmodified    2024-03-06
// @feedback-url    https://greasyfork.org/zh-TW/scripts/368418
// @note            2024.03.06-V26.13 增加搜索引擎：DuckDuckGo；增加自动翻页的适配，优化性能问题；function fix
// @note            2022.04.24-V2.3 增加搜索引擎：fsou的支持
// @note            2019.08.09-V2.2 排除bilibili的地址，避免导致bilibili无法播放
// @note            2019.06.05-V2.1 修复样式加载刚开始的时候还是黑色的，颜色没有及时更新的问题 其次优化脚本的处理速速，减少不必要的查询和处理
// @note            2018.10.08-V2.0 修复多次触发导致的卡顿现象；修复搜索时高亮的问题
// @note            2018.10.03-V1.9 修复由于<span>标签导致的：1.样式被界面污染 2.特定关键词被百度重定向脚本删除；修复在部分代码界面导致的高亮失效问题；修复高亮导致的标题栏被格式化
// @note            2018.07.21-V1.8 修复由于很快的高亮导致的高亮代码被个格式化为普通文本
// @note            2018.07.06-V1.7 修复csdn的问题和w3cschool页面的代码问题
// @note            2018.06.20-V1.6 修复上次更新导致的严重bug，页面卡死问题
// @note            2018.06.18-V1.5 修复在部分csdn网页代码上，高亮不起作用
// @note            2018.06.15-V1.4 修复在CSDN代码中，高亮处理之后导致的多了一部分文字的问题；减少了多次调用可能出现的冲突问题；依旧添加G键也是高亮效果
// @note            2018.06.04-V1.3 1.修复百度翻页之后偶尔不自动高亮的问题；2.新增一定的页面高亮效果的调整；优化关键词的数量，数量到达一定程度，之后的关键词不做高亮处理
// @note            2018.05.31-V1.2 修复由于分词不准的问题导致的丢词问题；修复停止高亮然后又自动启动的问题；修复下划线分割问题；修复左右尖括号转换问题；新增W高亮时复制文字内容
// @note            2018.05.26-V1.1 修复垃圾代码，上个版本真的是垃圾代码，运行又慢，占用又高，还特么定时运行，但就是数据出现很慢，现在应该没有这个问题了
// @note            2018.05.25-V1.0 从百度重定向脚本中拆分出来
// @run-at          document-body
// @grant           GM_getValue
// @grant           GM_setValue
// @grant           GM_setClipboard
// ==/UserScript==

const isDebug = true; // 本次更新是否有新功能需要展示
const debugX = isDebug ? console.log.bind(console) : function() {
};

function sayLength(){
	debugX(document.querySelectorAll(".c-container").length);
}

(function () {
	'use strict';
	const startTime = new Date().getTime();
	const renderStartTime = 5000; // 5秒钟 & 强制刷新应该优先于定时操作
	const HightLightColorList = ["#FFFF80", "#90EE90", "#33FFFF", "#FF6600", "#FF69B4", "#20B2AA", "#8470FF"];
	let isSearchWindowActive = true;    // 搜索窗口是否激活
	let OnlyDBCheck = false;            // 是否为双击事件
	let enableDBSelectText = false;
	const oldTextSelectInterval = -1;
	let hasInitBtnBind = false;
	let hasInitBtnBind_DOM = false;
	let dataRapidLock = false;
	let dataConflictLock = false;
	let disableHighLight = false;       // 是否禁用highLight
	let SiteTypeID; // 标记当前是哪个站点[百度=1;搜狗=2;3=好搜;谷歌=4;必应=5;知乎=6;其他=7]
	const SiteType = {
		BAIDU: 1,
		SOGOU: 2,
		SO: 3,
		GOOGLE: 4,
		BING: 5,
		ZHIHU: 6,
		OTHERS: 7,
		FSOU: 8,
		DUCK: 9,
	};
	/*在搜索引擎上面会刷新当前搜索关键词内容*/
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
	}  else if (location.host.indexOf("fsoufsou") > -1) {
		SiteTypeID = SiteType.FSOU;
	} else if (location.host.indexOf("zhihu.com") > -1) {
		SiteTypeID = SiteType.ZHIHU;
	} else if (location.host.indexOf("duckduckgo.com") > -1) {
		SiteTypeID = SiteType.DUCK;
	} else {
		SiteTypeID = SiteType.OTHERS; // 非OTHER的都会被设置关键词，并准备高亮
	}
	setTimeout(function(){
		DoHighLightWithSearchText(GM_getValue("searchKeyWords", ""));
	}, renderStartTime);
	
	function DoHighLightWithSearchText(searchValue){
		WordAutoHighLight(searchValue);
	}
	function AC_addStyle(css, className, addToTarget, isReload){ // 添加CSS代码，不考虑文本载入时间，带有className
		const tout = setInterval(function() {
			if (addToTarget == null) addToTarget = "head";
			if (isReload == null) isReload = false;
			if (document.querySelector(addToTarget) != null) {
				clearInterval(tout);
				const checkNode = document.querySelector("." + className) || null;
				if (isReload === false && checkNode != null) {
					// 节点存在,并且不准备覆盖
					return;
				}
				if (checkNode != null && css === checkNode.innerHTML) {
					// checkNode可访问 & 内容相同 == > else 没有节点 || 内容不同
					return;
				}
				safeRemove("." + className);
				const cssNode = document.createElement("style");
				if (className != null)
					cssNode.className = className;
				cssNode.innerHTML = css;
				try {
					document.querySelector(addToTarget).appendChild(cssNode);
				} catch (e) {
					debugX(e.message);
				}
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
				document.addEventListener('keydown', DoHighLight, true);
			}, 800);
		}
		const keySets = {};
		let counter = 0;
		let highLight_timer = null
		doHighLightTextS(searchText);
		function DoHighLight(e) { // 手动W触发
			const target = e.target;
			const selectedText = getSelectedText(target);
			const s_keyup = (e.type === 'keydown') && (['G', 'W'].find(one => one.charCodeAt(0) === e.keyCode)); // 是按下特殊按键
			if (s_keyup) {
				if(typeof(selectedText) == "undefined" || selectedText == null || selectedText === ""){
					try{clearInterval(oldTextSelectInterval);}catch (e){debugX(e);}
					debugX("不准亮");
					GM_setValue("searchKeyWords", ""); // 置空
					hasInitBtnBind_DOM = false;
					disableHighLight = true;
					safeRemove(".AC-highLightRule");
					document.removeEventListener('DOMSubtreeModified', DOMRapidHighLightFunc, false);
					unHighLightAll_Text();
				} else {
					// 不需要复制到剪切板，避免污染剪切板
					// GM_setClipboard(selectedText); 
					enableDBSelectText = true;
					disableHighLight = false;
					OnlyDBCheck = true;
					doHighLightTextS(selectedText, true);
				}
			}
		}
		function doHighLightTextS(selectedText, dbclick) {
			if (typeof(selectedText) == "undefined" || selectedText == null || selectedText === "") return;
			unHighLightAll_Text();
			if(dbclick){
				GM_setValue("searchKeyWords", selectedText);
				debugX("双击:" + selectedText + keySets.keywords);
			}
			initKeySets(selectedText);
			doHighLightAll_CSS();
			doHighLightAll_Text();
			highLight_timer && clearInterval(highLight_timer)
			// 增加一个定时刷新关键词的函数，保证页面翻页的时候也有效
			highLight_timer = setInterval(function(){
				if(!document.hidden) doHighLightAll_Text();
			}, 5000);
			if(hasInitBtnBind_DOM === false){
				hasInitBtnBind_DOM = true;
				document.addEventListener('DOMSubtreeModified', DOMRapidHighLightFunc, false);
			}
		}
		// bug-卡顿严重
		function DOMRapidHighLightFunc(e) {
			if(dataRapidLock === false){
				dataRapidLock = true;
				doHighLightAll_CSS();
				doHighLightAll_Text();
				setTimeout(function(){dataRapidLock = false;}, 1000); // 每两秒的时候可以触发一次
			}
		}
		function getSelectedText(target) {
			function getTextSelection() {
				let selectedText = '';
				if (target.getAttribute("type")) {
					if (target.getAttribute("type").toLowerCase() === "checkbox") return '';
				}
				const value = target.value;
				if (value) {
					const startPos = target.selectionStart;
					const endPos = target.selectionEnd;
					if (!isNaN(startPos) && !isNaN(endPos)) selectedText = value.substring(startPos, endPos);
					return selectedText;
				} else return '';
			}
			let selectedText = window.getSelection().toString();
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
		function reSplitKeySet(keySet){
			const data = keySet
				.split(/\b |[\u0000-\u002F\u003A-\u0040\u005B-\u005e\u007B-\u00FF\uFF00-\uFFFF\u3000-\u303F]/g)
				.join('ACsCA')
				.replace(/[^\u4E00-\u9FA5|0-9a-zA-Z_]+/g, "")
				.replace(/(ACsCA){2}/g, "ACsCA")
				.replace(/(^ACsCA|ACsCA$)/g, "")
				.split("ACsCA");
			const newData = [];
			for(let i = 0, j = 0; i < data.length; i++){
				if(data[i].length > 1){
					newData[j++] = data[i];
				}
			}
			return newData;
		}
		// 初始化点击的文字信息
		function initKeySets(selection){
			// 1.split通过特殊字符和字符边界分割串[非[0-9A-Za-z]特殊字符]
			// 2.通过特定字符连接原始串，
			// 3.1移除多次重复的特定串，非常用串移除，避免空串
			// 3.2移除开头或者结尾的特定串，避免分割后出现空白数据，
			// 4.按特定串分割
			keySets.keywords = reSplitKeySet(selection);
			keySets.length = keySets.keywords.length;
			keySets.textcolor = [];
			keySets.visible = [];
			for(let i=0; i < keySets.keywords.length; i++){
				keySets.textcolor[i] = "rgb(0,0,0)";
				keySets.visible[i] = "true";
			}
		}
		function doHighLightAll_CSS(){
			const selection = GM_getValue("searchKeyWords", "");
			// debugX("执行高亮"+selection);
			keySets.keywords = reSplitKeySet(selection);
			// 这个要后处理，这样的话keywords才会有数据，否则的话由于没有数据，初始的颜色就不会显示
			if (keySets.visible[0] === "true"){
				let rule = ".acWHSet{display:inline!important;box-shadow: -3px 0px 3px 0.15px rgba(0, 0, 0, 0.15);";
				if (keySets.textcolor.length > 0) rule += "color:"+keySets.textcolor[0]+";";
				rule += "font-weight:inherit;}";
				for(let i = 0; i < keySets.keywords.length; i++){
					rule += ".acWHSet[data='"+keySets.keywords[i].toLocaleLowerCase()+"']{background-color:"+HightLightColorList[i % HightLightColorList.length]+";}";
				}
				// debugX("触发重置CSS");
				AC_addStyle(rule, "AC-highLightRule", "body", true);
			}
		}
		function doHighLightAll_Text(){
			if(dataConflictLock === true) return;
			dataConflictLock = true;
			doHighLightAll_Text_Inner();
			dataConflictLock = false;
		}
		// BUG- 卡顿严重，注意时间消耗
		function doHighLightAll_Text_Inner(){
			if(keySets.keywords.length === 0) {
				return; // 退出1
			}
			let patExp = "";
			let index = 0
			for(let sizeCount = 0; index<keySets.keywords.length-1 && index < 8 && sizeCount < 50; index++) {
				patExp += keySets.keywords[index]+"|";
				sizeCount += keySets.keywords[index].length;
			}
			patExp += keySets.keywords[index];
			const pat = new RegExp("(" + patExp + ")", "gi");
			const XhighLight = document.createElement('XhighLight');
			const evalRule = './/text()[normalize-space() != "" ' +
				'and not(parent::XhighLight[@txhidy15]) ' +
				'and not(parent::title)' +
				'and not(ancestor::style) ' +
				'and not(ancestor::script) ' +
				'and not(ancestor::textarea) ' +
				'and not(ancestor::div[@id="thdtopbar"]) ' +
				'and not(ancestor::div[@id="kwhiedit"]) ' +
				'and not(parent::XhighLight[@txhidy15]) ' +
				'and not(ancestor::pre) ' + // CSDN的代码文字，未初始化之前的1--->不作处理
				((new Date().getTime() - startTime > renderStartTime || OnlyDBCheck === true) ?
					('or ((ancestor::pre) and not(parent::XhighLight[@txhidy15]) and (' + // EG.http://www.w3school.com.cn/xpath/xpath_syntax.asp
						'(ancestor::code[@class]) ' + // EG.http://lib.csdn.net/article/android/8894
						'or (ancestor::div[contains(@class, "cnblogs_code")] ) ' + // EG.https://blog.csdn.net/freeape/article/details/50485067
						"))") : "") +
				']';
			const snapElements = document.evaluate(evalRule, document.body, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
			if (!snapElements.snapshotItem(0)) {
				return;
			} // 退出2
			try{
				for (let i = 0, len = snapElements.snapshotLength; i < len; i++) {
					const node = snapElements.snapshotItem(i);
					if (node.nodeValue.length > 1 && pat.test(node.nodeValue)) {
						if(node.className!= null && node.className.indexOf("acWHSet") > 0) return;
						// if (node.parentNode.outerHTML != null && node.parentNode.outerHTML.indexOf("THmo acWHSet") >= 0) return;
						// debugX("start");
						// debugX(node.children);
						// debugX(node.className);
						// debugX(node.parentNode);
						const sp = XhighLight.cloneNode(true);
						const findResult = node.nodeValue.replace(/[<>"&]/g, function(match) {
							switch (match) {
								case "<":
									return "&lt;";
								case ">":
									return "&gt;";
								case "&":
									return "&amp;";
								case "\"":
									return "&quot;";
							}
						});
						// debugX("1."+findResult);
						// var repNodeHTML = findResult.replace(pat, '<XhighLight class="THmo acWHSet" data="$1" txhidy15="acWHSet">$1</XhighLight>');
						const repNodeHTML = findResult.replace(pat, function(matchT, _$1) {
							const lowerData = _$1.toLocaleLowerCase();
							return '<XhighLight class="THmo acWHSet" data="' + lowerData + '" txhidy15="acWHSet">' + _$1 + '</XhighLight>';
						});
						// debugX("2."+repNodeHTML);
						sp.innerHTML = repNodeHTML;
						if(node.parentNode == null) continue;
						node.parentNode.replaceChild(sp, node);
						sp.outerHTML = sp.innerHTML;
					}
				}
				// var attributeDataResetList = document.querySelectorAll(".acWHSet");
				// for(var i = 0; i < attributeDataResetList.length; i++){
				// 	attributeDataResetList[i].setAttribute("data", attributeDataResetList[i].innerHTML.toLocaleLowerCase());
				// }
			}catch (e) {
				debugX(e);
			}
			return;
		}
		function unHighLightAll_Text(){
			try{
				const tgts = document.querySelectorAll('XhighLight[txhidy15="acWHSet"]');
				for (let i = 0; i<tgts.length; i++){
					let parnode = tgts[i].parentNode, parpar = parnode.parentNode, tgtspan;
					if (parnode.hasAttribute("thdcontain") && parnode.innerHTML === tgts[i].outerHTML){
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
							if (parnode.hasAttribute("thdcontain") && parnode.innerHTML === tgtspan.outerHTML && tgtspan.querySelectorAll('XhighLight[txhidy15]').length === 0){
								parnode.outerHTML = tgtspan.innerHTML;
							} else if (parnode.innerHTML === tgtspan.outerHTML && tgtspan.querySelectorAll('XhighLight[txhidy15]').length === 0) {
								parnode.innerHTML = tgtspan.innerHTML;
							}
						}
					}
				}
				const oldTgs = document.querySelectorAll("XhighLight[thdcontain='true']");
				counter = 0;
				for(let i = 0; i < oldTgs.length; i++){
					const curTg = oldTgs[i];
					markChildandRemove(curTg);
				}
			}catch (e){}
		}
		function markChildandRemove(node){
			try{
				if(node.tagName.toLowerCase() === "xhighlight"){
					node.outerHTML = node.innerHTML;
				}
				const childList = node.childNodes;
				for(let i=0; i < childList.length; i++){
					counter++;
					markChildandRemove(childList[i]);
					if(node.tagName.toLowerCase() === "xhighlight"){
						node.outerHTML = node.innerHTML;
					}
				}
			}catch (e){}
		}
	}

	// 如果是搜索引擎的话
	if(SiteTypeID !== SiteType.OTHERS){ // 启用自动高亮
		// 持续拿到搜索关键词，存入GM中，避免切换页面导致的关键词丢失
		DoHighLightWithSearchText(GM_getValue("searchKeyWords", ""));
		setInterval(() => {
			if(document.hidden === true){ // 只要是搜索窗口不激活，那么flag=false
				isSearchWindowActive = false;
				enableDBSelectText = false;
			}
			// （窗口激活状态；或者是窗口之前是不激活，现在激活了） && 必须要非 禁用高亮状态
			if((isSearchWindowActive === true || (isSearchWindowActive === false && document.hidden === false)) && !disableHighLight) {
				const searchValue = (window.location.search.substr(1) + "").split("&");
				for (let i = 0; i < searchValue.length; i++) {
					const key_value = searchValue[i].split("=");
					if (/^(wd|q|query)$/.test(key_value[0])) {
						const searchWords = decodeURI(key_value[1]).toLocaleLowerCase().replace(/\+/g, " ");
						if(GM_getValue("searchKeyWords", "") !== searchWords && enableDBSelectText === false){ // 避免重复掉用，一直刷新关键词
							GM_setValue("searchKeyWords", searchWords);
							DoHighLightWithSearchText(GM_getValue("searchKeyWords", ""));
						}
						break;
					}
				}
			}
		}, 200);
	}else{
		DoHighLightWithSearchText(GM_getValue("searchKeyWords", ""));
	}
})();
