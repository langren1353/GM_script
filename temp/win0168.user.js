// ==UserScript==
// @name         XXXXXXXXXXXXXXXXXXXXXXXXXX
// @namespace    http://tampermonkey.net/
// @version      03.18
// @description  优化win0168页面的显示内容
// @author       AC
// @include       *://info.win0168.com/*
// @include       *://vip.win0168.com/*
// @include       *://www.win0168.com/*
// @require      https://code.jquery.com/jquery-1.9.0.min.js
// @icon         http://info.win0168.com/favicon.ico
// @note         2019-03-18 修复
// @grant        none
// @run-at       document-start
// ==/UserScript==
var xfind = document.querySelector.bind(document);
var xfindAll = document.querySelectorAll.bind(document);
var acjq = jQuery.noConflict(true);
var scoreLevel = {"平手":"0","平/半":"0.25","半球":"0.5","半/一":"0.75","一球":"1","一/球半":"1.25","球半":"1.5",
	"球半/两":"1.75","两球":"2","两/两球半":"2.25","两球半":"2.5","两球半/三":"2.75","三球":"3","三/三球半":"3.25",
	"三球半":"3.5","三球半/四球":"3.75","四球":"4","四/四球半":"4.25","四球半":"4.5","四球半/五":"4.75","五球":"5",
	"五/五球半":"5.25","五球半":"5.5","五球半/六":"5.75","六球":"6","六/六球半":"6.25","六球半":"6.5",
	"六球半/七":"6.75","七球":"7","七/七球半":"7.25","七球半":"7.5","七球半/八":"7.75","八球":"8","八/八球半":"8.25",
	"八球半":"8.5","八球半/九":"8.75","九球":"9","九/九球半":"9.25","九球半":"9.5","九球半/十":"9.75","十球":"10",

	"-平手":"-0","-平/半":"-0.25","-半球":"-0.5","-半/一":"-0.75","-一球":"-1","-一/球半":"-1.25","-球半":"-1.5",
	"-球半/两":"-1.75","-两球":"-2","-两/两球半":"-2.25","-两球半":"-2.5","-两球半/三":"-2.75","-三球":"-3",
	"-三/三球半":"-3.25","-三球半":"-3.5","-三球半/四球":"-3.75","-四球":"-4","-四/四球半":"-4.25","-四球半":"-4.5",
	"-四球半/五":"-4.75","-五球":"-5","-五/五球半":"-5.25","-五球半":"-5.5","-五球半/六":"-5.75","-六球":"-6",
	"-六/六球半":"-6.25","-六球半":"-6.5","-六球半/七":"-6.75","-七球":"-7","-七/七球半":"-7.25","-七球半":"-7.5",
	"-七球半/八":"-7.75","-八球":"-8","-八/八球半":"-8.25","-八球半":"-8.5","-八球半/九":"-8.75","-九球":"-9",
	"-九/九球半":"-9.25","-九球半":"-9.5","-九球半/十":"-9.75","-十球":"-10"
};
window.acjqbk = acjq;
var safeWaitFunc = function(selector, callbackFunc, time, notClear){
	time = time || 50;
	notClear = notClear || false;
	var doClear = !notClear;
	var id = setInterval(function(){
		if((typeof (selector) == "string" && xfind(selector) != null)) {
			if(doClear) clearInterval(id);
			callbackFunc(xfind(selector));
		}else if((typeof(selector) == "function" && selector().length > 0)){
			if(doClear) clearInterval(id);
			callbackFunc(selector()[0]);
		}
	}, time);
};
var addStyle = function (css) { //添加CSS的代码--copy的--注意里面必须是双引号
	var pi = document.createProcessingInstruction(
		'xml-stylesheet',
		'type="text/css" href="data:text/css;utf-8,' + encodeURIComponent(css) + '"'
	);
	return document.insertBefore(pi, document.documentElement);
};
function AC_addStyle(css, className, isReload){ // 添加CSS代码，不考虑文本载入时间，带有className
	if(isReload == null) isReload = false;
	var tout = setInterval(function(){
		if(document.body != null){
			clearInterval(tout);
			// 节点已经存在,并且不准备覆盖
			if(isReload == false && document.querySelector("."+className) != null){return;}
			// 节点不存在,或者是准备覆盖的时候
			try{document.querySelector("."+className).remove();}catch (e){};
			var cssNode = document.createElement("style");
			if(className != null)
				cssNode.className = className;
			cssNode.innerHTML = css;
			try{document.body.appendChild(cssNode);}catch (e){console.log(e.message);}
		}
	}, 200);
}
var handleTwoNumTdNode = function(node1, node2){
	var key1 = parseFloat(node1.innerText);
	var key2 = parseFloat(node2.innerText);
	// console.log(key1+'---'+key2);
	acjq(node2).attr("bgcolor", "");
	var cName = "acBlack";
	if(key1 < key2){
		cName = "acRed";
	}else if(key1 > key2) {
		cName = "acGreen";
	}
	acjq(node2).addClass(cName);
};
var handleTwoTextScoreTdNode = function(node1, node2){
	var key1 = node1.innerText.replace(/(\*|受|让)/igm, "-").replace(/-+/gm, '-');
	var key2 = node2.innerText.replace(/(\*|受|让)/igm, "-").replace(/-+/gm, '-');
	if(checkIsNum(scoreLevel[key1]) && checkIsNum(scoreLevel[key2])){
		acjq(node2).attr("bgcolor", "");
		var score1 = parseFloat(scoreLevel[key1]);
		var score2 = parseFloat(scoreLevel[key2]);
		var color = getColorWithRule(score1, score2);
		// console.log("文字1：" + key1 + "***" + key2 + "比分：" + score1 + "***" + score2 + " and 颜色是："+color);
		acjq(node2).addClass(color);
	}else{
		acjq(node2).attr("bgcolor", "");
		var tmp, score1, score2;
		tmp = key1.split("/");
		score1 = parseFloat(tmp[0]);
		if(tmp.length > 1) score1 = (parseFloat(tmp[0]) + parseFloat(tmp[1])) /2;
		tmp = key2.split("/");
		score2 = parseFloat(tmp[0]);
		if(tmp.length > 1) score2 = (parseFloat(tmp[0]) + parseFloat(tmp[1])) /2;
		var color = getColorWithRule(score1, score2);
		// console.log("文字2：" + key1 + "***" + key2 + "比分：" + score1 + "***" + score2 + " and 颜色是："+color);
		acjq(node2).addClass(color);
	}
};
var getColorWithRule = function(num1, num2){
	// 若 num1 = 0 则，返回红色
	// 若同号，则abs数字大小返回
	// 若异号，则返回绿色
	if(num1 * num2 >= 0) return getColorInNormalRule(Math.abs(num1), Math.abs(num2));
	else return "acGreen";
};
var getColorInNormalRule = function(abs1, abs2){
	if(abs1 < abs2) return "acRed";
	if(abs1 == abs2) return "acBlack";
	return "acGreen";
};
var handleTwoTextColumnSameColor = function(node1, node2){
	// node2 ---> node1
	node1.setAttribute("color", node2.getAttribute("color"));
};
var insNode = function(src, type){
	var ins = document.createElement(type);
	ins.src = src;
	document.head.appendChild(ins);
};
var checkIsNum = function(txt){
	try{
		return ! isNaN(parseFloat(txt));
	}catch (e) {
		return false;
	}
};
// 移除顶部的广告和浮动的导航
addStyle("#webmain .item[style*='float']{display:none;}#oddsDetail,#divDaohang{display:none;}");
addStyle(".acRed{color:red !important;}.acGreen{color:green !important;}.acBlack{color:#666666 !important;}.acBlue{color:blue !important;}.acBgFC{background-color: #F4F2B8 !important;}");
if((location.host == "www.win0168.com" && location.href.indexOf("index") > 0) || location.href == "http://www.win0168.com/"){
	safeWaitFunc("#live #table_live tbody", function (findeNode) {
		var tdNode = acjq(findeNode).find("#tr_0 td:contains('选')");
		tdNode.attr("style", "cursor:pointer;color: red;");
		tdNode.on("click", function () {
			acjq(findeNode).find(".inp").click();
		});
	});
}else if(location.href.indexOf("analysis") > 0){
	safeWaitFunc("head", function(){
		insNode("https://lib.baomitu.com/jquery/3.3.1/jquery.min.js", "script");
		setTimeout(function(){
			insNode("https://lib.baomitu.com/layer/3.1.1/theme/default/layer.css", "style");
			insNode("https://lib.baomitu.com/layer/3.1.1/layer.js", "script");
		}, 50);
	});
	// 先处理顶部置顶的问题
	safeWaitFunc("#webmain>.t1p1, #webmain>.header", function(findNode){
		var aNode = xfind("#odds_top2");
		findNode.parentNode.insertBefore(aNode, findNode.nextSibling);

		safeWaitFunc(function(){
			return acjq(".porletP div").has("span:contains('联赛积分排名')");
		}, function (newFindNode) {
			var all = acjq(newFindNode).find(".vander16").text().replace(/(.)\[/igm, "$1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[");
			try{
				findNode.querySelector("tbody").insertAdjacentHTML("beforeend", "<tr><td></td><td style='font-size: 14px;font-weight: bold;'>" + all + "</td><td></td></tr>");
			}catch (e) {
				findNode.querySelector(".vs").insertAdjacentHTML("beforeend", "<div class='row' style='font-size: 14px;font-weight: bold;'>" + all + "</div>");
			}
		});
	});
	//
	// 即时指数【比较】-窗口
	//
	var overFunc = function(evt){
		if(evt.target.tagName.toUpperCase() == "FONT" || evt.target.tagName.toUpperCase() == "TD" || evt.target.tagName.toUpperCase() == "SPAN"){
			var span = evt.target.parentNode.querySelector("span");
			if(span != null){
				var msg = span.title;
				layer.tips("<span style='max-width:100px;'>" + msg + "</span>", $(this), {
					tips: [2, '#1e9fff'],
					offset: 'r',
					time: 30000
				});
			}
		}
		evt.preventDefault();
		evt.stopPropagation();
	};
	safeWaitFunc(function(){
		return acjq(".porletP").has(".fx_title2:contains('即时指数比较')");
	}, function(findNode){
		var lines = findNode.querySelectorAll("tr");
		if(lines[0].hasAttribute("acHandle")) return;
		lines[0].setAttribute("acHandle", 1);
		for(var i = 0; i < lines.length; i++){
			var curLine = lines[i];
			var curTds = curLine.querySelectorAll("td");
			if(curTds.length > 0 && curTds[1].innerText == "初盘"){
				var nextLine = lines[i+1];
				var nextTds = nextLine.querySelectorAll("td");
				if(nextTds[0].innerText == "即时" || nextTds[0].innerText == "终盘"){
					acjq(nextLine).addClass("acBgFC");
					acjq(curLine).find("td").attr("bgcolor", "");
					// 注意，有个错位id，所以后面的id比前面的id小1
					handleTwoNumTdNode(curTds[2], nextTds[1]);
					handleTwoNumTdNode(curTds[3], nextTds[2]);
					handleTwoNumTdNode(curTds[4], nextTds[3]);

					handleTwoNumTdNode(curTds[5], nextTds[4]);
					handleTwoTextScoreTdNode(curTds[6], nextTds[5]);
					handleTwoNumTdNode(curTds[7], nextTds[6]);

					handleTwoNumTdNode(curTds[8], nextTds[7]);
					handleTwoTextScoreTdNode(curTds[9], nextTds[8]);
					handleTwoNumTdNode(curTds[10], nextTds[9]);

					handleTwoNumTdNode(curTds[11], nextTds[10]);
					handleTwoNumTdNode(curTds[12], nextTds[11]);
					handleTwoNumTdNode(curTds[13], nextTds[12]);
				}
				if(typeof(lines[i+2]) != "undefined"){
					var next_nextLine = lines[i+2];
					var xTds = next_nextLine.querySelectorAll("td");
					if(xTds[0].innerText == "滚球"){
						acjq(next_nextLine).attr("bgcolor", "#FFFFFF");
						acjq(next_nextLine).find("td").attr("bgcolor", "");
					}
				}
			}
		}
	}, 800, true);
	//
	//  处理颜色相同的模式
	//
	safeWaitFunc(function () {
		return acjq(".porletP").has(".fx_title2:contains('近期战绩')").has("table[bgcolor]");
	}, function (findNode) {
		var tables = findNode.querySelectorAll("table");
		var titleAll = acjq(".porletP div").has("span:contains('联赛积分排名')").find(".vander16").text();
		for(var i = 0; i < tables.length; i++){
			if(tables[i].hasAttribute("acHandle")) continue;
			tables[i].setAttribute("acHandle", 1);
			var lines = tables[i].querySelectorAll("table>tbody>tr");
			for(var j = 0; j < lines.length; j++){
				var tds = lines[j].childNodes;
				if(tds.length > 8 && /\d+-\d+-\d+/.test(tds[1].innerText)){
					var tf = tds[7].querySelectorAll("font font");
					var a = tds[2].querySelector("font");
					var b = tds[4].querySelector("font");
					var team = a;
					if(titleAll.indexOf(b.innerText.replace("1", "").trim()) >= 0) team = b;
					handleTwoTextColumnSameColor(team, tf[tf.length-1]);
					if(!a.hasAttribute("acHandle")){
						acjq(a).hover(overFunc, function () {
							// layer.closeAll();
						});
						a.setAttribute("acHandle", 1);
					}
					if(!b.hasAttribute("acHandle")){
						acjq(b).hover(overFunc, function () {
							// layer.closeAll();
						});
						b.setAttribute("acHandle", 1);
					}
				}
			}
		}
	}, 800, true);
	safeWaitFunc(function () {
		return acjq(".porletP").has(".fx_title2:contains('对赛往绩')").has("table[bgcolor]");
	}, function (findNode) {
		var lines = findNode.querySelectorAll("tr");
		var titleAll = acjq(".porletP div").has("span:contains('联赛积分排名')").find(".vander16").text().replace(/\[[^\]]+\]/igm, "-").split("-")[1];
		for(var j = 0; j < lines.length; j++){
			var tds = lines[j].childNodes;
			if(tds.length > 8 && /\d+-\d+-\d+/.test(tds[1].innerText)){
				var tf = tds[12].querySelectorAll("font");
				var a = tds[2].querySelector("font");
				var b = tds[5].querySelector("font");
				var team = a;
				if(titleAll.indexOf(b.innerText.replace("1", "").trim()) >= 0) team = b;
				handleTwoTextColumnSameColor(team, tf[tf.length-1]);
			}
		}
	}, 800, true);
}else if(location.href.indexOf("AsianOdds") > 0 || location.href.indexOf("OverDown") > 0){
	safeWaitFunc("head", function(){
		insNode("https://lib.baomitu.com/jquery/3.3.1/jquery.min.js", "script");
		setTimeout(function(){
			insNode("https://lib.baomitu.com/layer/3.1.1/theme/default/layer.css", "style");
			insNode("https://lib.baomitu.com/layer/3.1.1/layer.js", "script");
		}, 50);
	});
	safeWaitFunc("div", function(){
		if(location.href.indexOf("t=1") < 0){
			document.body.insertAdjacentHTML("beforeend", "<iframe src='"+(location.href+"&t=1")+"' style='width: 100vw;height: 100vh;border: none;'></iframe>");
		}
	});
	safeWaitFunc(function(){
		return acjq("#webmain #odds").has("td:contains('多盘口')");
	}, function(findNode){
		if(findNode.hasAttribute("acHandle")) return;
		findNode.setAttribute("acHandle", "1");
		var lines = findNode.querySelectorAll("tr");
		for(var i = 0; i < lines.length; i++){
			var curLine = lines[i];

			var curTds = curLine.querySelectorAll("td");
			var xNode = curLine.querySelector("td>a");
			if(checkIsNum(curTds[2].innerText) == true){
				// 即时盘
				handleTwoNumTdNode(curTds[2], curTds[5]);
				handleTwoTextScoreTdNode(curTds[3], curTds[6]);
				handleTwoNumTdNode(curTds[4], curTds[7]);
				// 终盘
				handleTwoNumTdNode(curTds[2], curTds[8]);
				handleTwoTextScoreTdNode(curTds[3], curTds[9]);
				handleTwoNumTdNode(curTds[4], curTds[10]);

				if(xNode != null){
					xNode.setAttribute("onclick", "return false");
					xNode.addEventListener("click", function (e) {
						// 处理详细按钮
						layer.open({
							type: 2,
							area: ['1000px', '850px'],
							fixed: false, //不固定
							maxmin: true,
							shadeClose: true,
							content: this.href
						});
					});
				}
			}
		}
		var tt = acjq(findNode).find("td:contains('多盘口')");
		tt.attr("style", "cursor:pointer;color:red");
		tt.on("click", function (ev) {
			if(acjq("span.jia").length > 0) acjq("span.jia").click();
			else acjq("span.jian").click();
		});
	}, 800, true);
}else if(location.href.indexOf("oddslist") > 0){
	safeWaitFunc("#dataList tbody", function(findNode) {
		if(xfind(".acins") == null){
		    // var insHeadHTML = `<tr class="o_tr acins" style="line-height:22px;">
		    //   <td width="162" height="28" class="lb"><div style="float:left; margin-right:20px; padding:5px 0 0 4px">
		    //   <input type="checkbox" name="chkall" id="chkall" onclick="CheckAll()"></div>
		    //   <a href="javascript:void(0)" onclick="companyFilter(0);return false;" class="sbtn3" style="float:left; text-align:left" id="a_companySelect" onmouseover="showSelect(1)" onmouseout="showSelect(2)">所有公司</a></td>
		    //   <td width="46" height="28" class="rb">&nbsp;</td>
		    //   <td width="54" class="sd_f"><a href="javascript:void(0)" onclick="oderlist(0,3);return false;" class="sd" id="order0">主胜</a></td>
		    //   <td width="55" class="sd_f"><a href="javascript:void(0)" onclick="oderlist(1,4);return false;" class="sd" id="order1">和</a></td>
		    //   <td width="56" class="rb sd_f"><a href="javascript:void(0)" onclick="oderlist(2,5);return false;" class="sd" id="order2">客胜</a></td>
		    //   <td width="57" class="rb sd_f"><a href="javascript:void(0)" onclick="oderlist(7,9);return false;" class="sd" id="order7">返还率</a></td>
		    //   <td width="115" class="rb">凯利指数</td>
		    //   <td width="67">变化时间</td>
		    //   <td width="67">初盘时间</td>
		    // </tr>`;
			// findNode.insertAdjacentHTML("afterbegin", insHeadHTML);
			// findNode.insertAdjacentHTML("afterbegin", insHeadHTML);
			xfind(".oddDivBox .tcenter tr").insertAdjacentHTML("beforeend", "<td width='67' class='o_tr acins'>初盘时间</td>");
			// AC_addStyle("#dataList tbody{display:grid;grid-template-columns: 1fr 1fr;}#divHeadFloat{display:none;} ", "AC-dbLineStyle");
			// 移除原始标题头。&& 移除oddslist页面的双列中无用列：主胜率、和率、客胜率、历史指数
			// AC_addStyle("#team, .oddDivBox{z-index:0 !important;}"+
			// 	"#dataList tr[id*='oddstr']>td[width='58']:not([onclick])," +
			// 	"#dataList tr[id*='oddstr']>td[width='48']:not([onclick])," +
			// 	"#dataList tr[id*='oddstr']>td[width='50']:not([onclick])," +
			// 	"#dataList tr[id*='oddstr']>td[width='82']:not([onclick])," +
			// 	".oddDivBox #highFObj>.lb, .oddDivBox .bl>.lb" +
			// 	"{display:none;}", "AC-hideStyle");
			AC_addStyle("#team, .oddDivBox, #divHeadFloat{z-index:0 !important;}"+
				".oddDivBox #highFObj>.lb, .oddDivBox .bl>.lb" +
				"{display:none;}", "AC-hideStyle");
			// 底部表格的左上角化
			addStyle("#dataList tr[id*='oddstr']>td[width='179']{min-width: 115px;} #divFooterFload{position: fixed;top: 0;width: 240px;overflow:hidden;}");
			var lines = findNode.querySelectorAll("tr[id]");
			for(var i = 0; i < lines.length; i ++){
				var curLine = lines[i];
				var datachangeList = hsDetail.items(game[i].split("|")[1]).split(";");
				if(curLine.querySelector(".actime") == null){
					// 插入时间节点
					var data = datachangeList[datachangeList.length - 2]; // 因为这个最后还有个空串
					data = data.split("|")[3];
					curLine.insertAdjacentHTML("beforeend", `<td width='67' rowspan='2' class='rb time actime'>${data}</td>`);
				}
			}
			// if(document.querySelector("#sel_showType").value == 1) {
			// 	// 是“所有指数”页面
			// 	lines = findNode.querySelectorAll("tr:not([class*='acins'])");
			// 	for (var i = 0; i < lines.length; i++) {
			// 		var cur = lines[i];
			// 		if(cur.id == ""){
			// 			acjq(cur).find("td:not([class]):not([onclick])").remove();
			// 			lines[i-1].appendChild(cur);
			// 		}
			// 	}
			// }
		}
	}, 200, true);
}else if(location.href.indexOf("overunder") > 0 || location.href.indexOf("handicap") > 0){
	addStyle("iframe[src*='chartFlash'], #hg_nav{display:none !important;}");
	safeWaitFunc("table", function(){
		acjq("table").has("tr[title*='下盘水位']").attr("style", "display:none;");
		acjq("table").has("td font:contains('盘口')").parent().attr("style", "");
		acjq("table tr").has("td:contains('滚')").attr("style", "display:none;");
	}, 200, true);
}else if(location.href.indexOf("detail") > 0){
	// 最后的需求隐藏三个特殊的内容
	safeWaitFunc(function () {
		return acjq("table").has("th:contains('进失球概率')");
	}, function(findNode){
		findNode.remove();
	});
	safeWaitFunc(function () {
		return acjq("table").has("th:contains('半场/全场胜负统计')");
	}, function(findNode){
		findNode.remove();
	});
	safeWaitFunc(function () {
		return acjq("table").has("th:contains('联赛事件数据统计')");
	}, function(findNode){
		findNode.remove();
	});
}
