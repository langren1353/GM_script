// ==UserScript==
// @name AC-baidu： 优化百度、搜狗、谷歌搜索结果之关键词自动高亮
// @description     1.自动提取搜索页面的搜索关键词 2.对关键词自动进行高亮处理 W键可以取消高亮 3.动态获取动态的搜索关键词，重新高亮显示
// @icon            https://gitee.com/remixAC/GM_script/raw/master/images/head.jpg
// @author          AC
// @create          2018-05-25
// @version         26.14
// @include         *
// @exclude         *://www.bilibili.com/*
// @home-url        https://greasyfork.org/zh-TW/scripts/368418
// @home-url2       https://github.com/langren1353/GM_script
// @namespace       1353464539@qq.com
// @copyright       2017, AC
// @lastmodified    2024-03-07
// @feedback-url    https://greasyfork.org/zh-TW/scripts/368418
// @note            2024.03.07-V26.14 修复页面的严重卡顿问题，优化原始代码，基本不卡
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
const debugX = isDebug ? console.error.bind(console) : function() {};

(function () {
	'use strict';
	const startTime = new Date().getTime();
	const renderStartTime = 3000; // 5秒钟 & 强制刷新应该优先于定时操作
	const HightLightColorList = ["#FFFF80", "#90EE90", "#33FFFF", "#FF6600", "#FF69B4", "#20B2AA", "#8470FF"];
	let OnlyDBCheck = false;            // 是否为双击事件
	let dataConflictLock = false;
	let highLight_timer = null
	const keySets = {}
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
	function DoHighLightCheck(e) { // 手动W触发
		const target = e.target;
		const selectedText = getSelectedText(target);
		const s_keyup = (e.type === 'keydown') && (['G', 'W'].find(one => one.charCodeAt(0) === e.keyCode)); // 是按下特殊按键
		if (s_keyup) {
			if(typeof(selectedText) == "undefined" || selectedText == null || selectedText === ""){
				debugX("不准亮");
				GM_setValue("searchKeyWords", ""); // 置空
				safeRemove(".AC-highLightRule");
				unHighLightAll_Text();
			} else {
				OnlyDBCheck = true;
				doHighLightTextS(selectedText, true);
			}
		}
	}
	
	function doHighLightTextS(selectedText, dbclick = false) {
		if (!selectedText) return
		unHighLightAll_Text();
		if(dbclick){
			GM_setValue("searchKeyWords", selectedText);
			debugX('原始：', keySets.keywords, '激活：', selectedText);
		}
		initKeySets(selectedText);
		doHighLightAll_CSS();
		doHighLightAll_Text();
		highLight_timer && clearInterval(highLight_timer)
		// 增加一个定时刷新关键词的函数，保证页面翻页的时候也有效
		highLight_timer = setInterval(function(){
			if(!document.hidden) doHighLightAll_Text();
		}, 5000);
	}
	function getSelectedText(target) {
		function getTextSelection() {
			let selectedText = '';
			if (target.hasAttribute("type")) {
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
		return data.filter(one => one.length >= 2) // 长度太短的不要
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
	}
	function getTextColor(textIndex) {
		return HightLightColorList[textIndex % HightLightColorList.length]
	}
	
	function doHighLightAll_CSS(){
		const selection = GM_getValue("searchKeyWords", "");
		// debugX("执行高亮"+selection);
		keySets.keywords = reSplitKeySet(selection);
		if(keySets.length) {
			const baseRule = ".acWHSet{display:inline!important;box-shadow: -3px 0px 3px 0.15px rgba(0, 0, 0, 0.15); color: rgb(0,0,0); font-weight:inherit;}";
			const otherRule = keySets.keywords.map((keyword, index) => {
				return `.acWHSet[data='${keyword.toLocaleLowerCase()}']{background-color:${getTextColor(index)};}`;
			}).join('\n')
			AC_addStyle(baseRule + otherRule, "AC-highLightRule", "body", true);
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
		if(keySets.keywords.length === 0 || keySets.keywords > 20) {
			return;
		}
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
			const pat = new RegExp("(" + keySets.keywords.join("|") + ")", "gi")
			for (let i = 0, len = snapElements.snapshotLength; i < len; i++) {
				const node = snapElements.snapshotItem(i);
				if (node.nodeValue.length > 1 && pat.test(node.nodeValue)) {
					if(node.className!= null && node.className.indexOf("acWHSet") > 0) return;
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
					sp.innerHTML = findResult.replace(pat, function(matchT, _$1) {
						const lowerData = _$1.toLocaleLowerCase();
						return '<XhighLight class="THmo acWHSet" data="' + lowerData + '" txhidy15="acWHSet">' + _$1 + '</XhighLight>';
					});
					if(!node.parentNode) continue;
					node.parentNode.replaceChild(sp, node);
					sp.outerHTML = sp.innerHTML;
				}
			}
		}catch (e) {
			debugX(e);
		}
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
				markChildandRemove(childList[i]);
				if(node.tagName.toLowerCase() === "xhighlight"){
					node.outerHTML = node.innerHTML;
				}
			}
		}catch (e){}
	}

	let nowHighLightText = ''
	// 如果是搜索引擎的话
	if(SiteTypeID !== SiteType.OTHERS){ // 启用自动高亮
		// 持续拿到搜索关键词，存入GM中，避免切换页面导致的关键词丢失
		setInterval(() => {
			const searchKW = [...(window.location.search.substr(1) + "").split("&")].find(one => /^(wd|q|query)=.*$/.test(one))
			const searchValue = decodeURI(searchKW ? searchKW.split("=")[1] : "")
			if(nowHighLightText !== searchValue) {
				nowHighLightText = searchValue
				GM_setValue("searchKeyWords", searchValue)
				doHighLightTextS(searchValue)
			}
		}, 1000);
	} else {
		nowHighLightText = GM_getValue("searchKeyWords", "")
		doHighLightTextS(nowHighLightText)
	}
	
	setTimeout(function(){
		// 似乎过早的绑定可能出现问题，例如www.huomao.com中h5视频的LOGO一直在
		document.addEventListener('keydown', DoHighLightCheck, true);
	}, 800);
})();
