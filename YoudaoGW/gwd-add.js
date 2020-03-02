// ==UserScript==
// @name         购物党比价工具【精简优化版】
// @namespace    none
// @version      1.1
// @description  【精简版】购物党，优化了页面的部分元素，减少页面弹窗和显示，保留菜单栏。购物党提供淘宝/京东/亚马逊/当当/苏宁/等百家商城的比价系统，能让你以较优惠的方式购买到你称心如意的商品，提供商品的历史价格情况，多种相似商品推荐，同款购买，降价提醒。
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
// @connect      gwdang.com
// @connect      alicdn.com
// @license      GPL-3.0-only
// ==/UserScript==
(function () {
	var goodId = getUrlAttribute("id");;
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

	function initGWD() {
		let extName = "gwdv1.js";
		var hideStyle = "";
		if (location.host == "jd.com") {
			extName = "gwdv2.js";
			hideStyle = ".gwd-minibar-bg, #favor_box{display:none !important;}" +
				"#gwdang_main > a.gwd-topbar-logo, #gwdang_main > div.gwd-topbar-right{display:none !important;}";
		} else {
			hideStyle = "#gwdang-main>div.logo, #gwdang-feed-close, #gwdang-history, #coupon_box, #bjd_yifenqian_detail{display:none}" +
				"#favor_box{display:none !important;}";
		}
		// addScript("https://cdn.jsdelivr.net/gh/chenzelin01/wechatproxy/public/" + extName);
		addScript("https://browser.gwdang.com/get.js?f=/js/gwdang_extension.js");
		addStyle(hideStyle);
	}

	function init() {
		function dealRes(json){
			var allHide = "";
			var yearHide = "";
			var monthHide = "";
			if (json.store[0].all_line == null) {
				allHide = "style='display: none;'";
			}
			if (json.store[0].year_line == null) {
				yearHide = "style='display: none;'";
			}
			if (json.store[0].month_line == null) {
				monthHide = "style='display: none;'";
			}
			var ddata;
			if (json.store.length > 1) {
				ddata = json.store[1].all_line;
			}

			var ddata;
			if (json.store.length > 1) {
				ddata = json.store[1].all_line;
			}

			let pdata = json.store[0].all_line;
			let pbeginTime = json.store[0].all_line_begin_time;
			let picdata = ddata;

			var hml = "<div   style='margin-left:50px;margin-top:20px;display: block;'><a class='active-plot type-plot' " + allHide + " id='plotAll'>全部</a><a class='type-plot' " + yearHide + " id='plotYear'>年线</a><a class='type-plot' " + monthHide + " id='plotMonth'>月线</a>";
			hml = hml + "<div id='hisprice' style='width: 720px;height:350px;margin: 0;padding: 0'></div>";

			return `
<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/4.3.0/echarts.min.js"></script>
${hml}
<script>
var pChart = echarts.init(document.getElementById('hisprice'));
showPrice();
function showPrice() {
var data =[${pdata}];
var beginTime =${pbeginTime};
var picdata =[${picdata}];
var dt = [];
for (var i = 0; i < data.length; i++) {
var d = new Date(beginTime);
d.setDate(d.getDate() + i);
dt.push(d.toLocaleDateString());
}

// 指定图表的配置项和数据
var option = {

tooltip: {
enterable: true,
trigger: 'axis',
formatter: function (params) {

return params[0].axisValue + "<br/>" + params[0].data;
},
axisPointer: {
animation: false
}
},
legend: {
data: ['页面价', '到手价'],
selected: {
'页面价': true,
'到手价': true

}

},
xAxis: {
data: dt,
splitArea: { show: false },
boundaryGap: false,
splitLine: {
show: true,

},
axisLabel: {

interval: parseInt((data.length) / 10),
formatter: function (value) {

return value.substring(5);
}
},
},
yAxis: {
splitArea: { show: false },
splitLine: {
show: true,

}
},
series: [{
name: '页面价',
type: 'line',
data: data,
showSymbol: false,
hoverAnimation: false,
markPoint: {
symbol: 'pin',

data: [
{ type: 'max', name: '最大值' },
{ type: 'min', name: '最小值' }
]
},
markLine: {
data: [
{ type: 'average', name: '平均值' }
]
}
},
{
name: '到手价',
type: 'line',
data: picdata,
showSymbol: false,
hoverAnimation: false,
markPoint: {
symbol: 'pin',

data: [
{ type: 'max', name: '最大值' },
{ type: 'min', name: '最小值' }
]
},
markLine: {
data: [
{ type: 'average', name: '平均值' }
]
}
}
]
};


pChart.setOption(option);
};
</script>
`
		}
		function opWind(purl, pisweb, pname, phml) {
			var url = purl;
			var name = pname;
			var iWidth = 800;
			var iHeight = 450;
			var iTop = (window.screen.height - 30 - iHeight) / 2;
			var iLeft = (window.screen.width - 10 - iWidth) / 2;
			// var OpenWindow = window.open(url, name, 'height=' + iHeight + ',,innerHeight=' + iHeight + ',width=' + iWidth + ',innerWidth=' + iWidth + ',top=' + iTop + ',left=' + iLeft + ',toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no');
			// if (pisweb == 0) {
			// 	OpenWindow.document.write(phml);
			// 	OpenWindow.document.close();
			// 	OpenWindow.focus();
			// }
			console.log("这里");
			var insWind = document.createElement("iframe");
			// insWind.src = "javascript:(function(){document.write("+insWind+")})()";
			insWind.innerHTML = phml;
			document.body.appendChild(insWind);
		}
		// localStorage.getItem("gwdang-fp") == null
		if(true){
			// 首次加载数据
			initGWD();
		}else{
			// TODO 待完成，似乎这里不好处理
			let qdata = "fp="+localStorage.getItem("gwdang-fp")+"&dfp="+localStorage.getItem("gwdang-dfp");
			GM_xmlhttpRequest({
				url: "https://browser.gwdang.com/extension/price_towards?ver=1&format=jsonp&&url=" + encodeURIComponent(location.href),
				method: 'GET',
				timeout: 10000,
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
					'Cache-Control': 'public'
				},
				onload: function (res) {
					const json = JSON.parse(res.responseText)
					if (json.is_ban == null) {
						console.log(json);

						let data = dealRes(json);
						opWind('', 0, '比价', data);
					} else {
						console.log(json.action.to);
						opWind(json.action.to, '1', '请验证后刷新页面！', '');
					}
				}
			});
		}
	}
	init();
})()
