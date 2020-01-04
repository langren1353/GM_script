// ==UserScript==
// @name         淘宝、天猫抢购助手v2
// @namespace    Aice.Fu_gwTools
// @version      0.1.8
// @description  淘宝、天猫自动抢购工具，支持淘宝、天猫的商品页面抢购、购物车抢购（后续补充京东），在非抢购页面支持淘宝、天猫、京东隐藏优惠券领取及历史价格查看。
// @include     /http(?:s|)://(?:detail|item)\.(?:taobao|tmall)\.(?:[^./]+)/item.htm/
// @include     https://chaoshi.tmall.com/*
// @include     https://chaoshi.detail.tmall.com/*
// @include     https://buy.tmall.com/order/*
// @include     https://cart.tmall.com/*
// @include     https://cart.taobao.com/*
// @include     */item.jd.com/*
// @require     https://code.jquery.com/jquery-latest.js
// @grant       GM_xmlhttpRequest
// @grant       unsafeWindow
// @connect     gwdang.com
// @connect     ubja.vip
// @connect     alicdn.com
// @author      Aice.Fu

// ==/UserScript==

(function () {
	'use strict';
	var myCon = '<dl><dt>&nbsp;</dt></dl><dd><a style="padding:5px 28px;background:blue;color:#fff;cursor:pointer;font-size:1.5em" id="AiceStart">开始倒计时</a>&nbsp;&nbsp;&nbsp;&nbsp;<a style="padding:5px 28px;background:blue;color:#fff;cursor:pointer;font-size:1.5em" id="AicePrice">历史价格</a><dd></dl><dl id="AicePm"><dd>开始时间&nbsp;&nbsp;<input id="AiceStartTime" style="width:180px;"/>&nbsp;&nbsp;提前&nbsp;&nbsp;<input type="number" id="AiceBeforeTime" style="width:35px;" value="100"/>ms</dd><dd> &nbsp;&nbsp;</dd><dd> <input id="AiceOsm" type="checkbox" checked="checked">自动提交订单</dd></dl><dl><dt>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;更多优惠，请关注微信小程序</dl></dt><dl><dt><image src="http://www.ubja.vip/app/barcode.jpg"></dt></dl><dd></dl>';
	var myConJD = '<dl><dt>&nbsp;</dt></dl>><dl><dd>&nbsp;</dt></dd></dl><dd><a style="padding:5px 28px;background:blue;color:#fff;cursor:pointer;font-size:1.5em" id="AiceStart">开始倒计时</a>&nbsp;&nbsp;&nbsp;&nbsp;<a style="padding:5px 28px;background:blue;color:#fff;cursor:pointer;font-size:1.5em" id="AicePrice">历史价格</a><dd></dl><dl id="AicePm"><dd>开始时间&nbsp;&nbsp;<input id="AiceStartTime" style="width:180px;"/>&nbsp;&nbsp;提前&nbsp;&nbsp;<input type="number" id="AiceBeforeTime" style="width:35px;" value="100"/>ms</dd><dd> &nbsp;&nbsp;</dd><dd> <input id="AiceOsm" type="checkbox" checked="checked">自动提交订单</dd></dl><dl><dt>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;更多优惠，请关注微信小程序</dl></dt><dl><dt><image src="http://www.ubja.vip/app/barcode.jpg"></dt></dl><dd></dl>';
	var myConCart = '<dd><span><a target="_blank" style="color: #2272c8;font-size: 1em;font-weight: bold;">购物助手 By Aice.Fu</a></span>&nbsp;&nbsp;&nbsp;&nbsp;<a style="padding:3px 28px;background:blue;color:#fff;cursor:pointer;font-size:1em" id="AiceStart">开始倒计时</a><dd>开始时间&nbsp;&nbsp;&nbsp;&nbsp;<input id="AiceStartTime" style="width:140px;"/>&nbsp;&nbsp;&nbsp;&nbsp;提前<input type="number" id="AiceBeforeTime" style="width:35px;" value="100"/>ms  &nbsp;&nbsp;&nbsp;&nbsp;<input id="AiceOsm" type="checkbox" checked="checked">自动提交订单</dd></dl>';
	var ifLj = null;
	var frmId = 0;
	var btnBuy = null;
	var realTime;
	var starttime;
	var endtime;
	var initsdtime_int = 0;//第一次获得的服务器时间
	var thissdtime_int;
	var d8;//抢购时间
	var cyce = 100; // 多少毫秒点击一次
	var bwtime = 100;//前置时间
	var gostart = 0;
	var btnCart = null;
	var ifYhq = 0;
	var chk = 1;
	var goodsId = null;
	//历史价格提交参数
	var pdata = null;
	var pbeginTime = null;
	var picdata = null;
	//Loading
	var _PageHeight = document.documentElement.clientHeight,
		_PageWidth = document.documentElement.clientWidth;
	var _LoadingTop = _PageHeight > 61 ? (_PageHeight - 61) / 2 : 0,
		_LoadingLeft = _PageWidth > 215 ? (_PageWidth - 215) / 2 : 0;
	var _LoadingHtml = '<div id="loadingDiv" style="position:absolute;left:0;width:100%;height:' + _PageHeight + 'px;top:0;background:#f3f8ff;opacity:1;filter:alpha(opacity=80);z-index:10000;"><div style="position: absolute; cursor1: wait; left: ' + _LoadingLeft + 'px; top:' + _LoadingTop + 'px; width: auto; height: 57px; line-height: 57px; padding-left: 50px; padding-right: 5px; background: #fff url(Image/loading.gif) no-repeat scroll 5px 10px; border: 2px solid #95B8E7; color: #696969; font-family:\'Microsoft YaHei\';">页面加载中，请等待...</div></div>';


	if (window.location.origin == "https://detail.tmall.com" || window.location.origin == "https://chaoshi.detail.tmall.com") {
		var fdiv = getTargetByTAV('div', 'class', 'tb-sku');//'tb-action tm-clear');
		fdiv.id = 'J_Dtl';
		$('#J_Dtl').append(myCon);
		ifLj = getTargetByTAV('div', 'class', 'tb-btn-wait');
		btnBuy = getTargetById('J_LinkBuy');
		goodsId = /(?:&|\?)id=(\d+)/.exec(window.location.href)[1];
		frmId = 1;
	}
	if (window.location.origin == "https://item.taobao.com") {
		$('#J_isku').append(myCon);
		ifLj = getTargetByTAV('div', 'class', 'tb-btn-wait');
		btnBuy = getTargetByTAV('a', 'class', 'J_LinkBuy');
		goodsId = /(?:&|\?)id=(\d+)/.exec(window.location.href)[1];
		frmId = 2;
	}

	if (window.location.origin == "https://cart.taobao.com") {
		$('#J_Search').append(myConCart);
		frmId = 3;
	}

	if (window.location.origin == "https://cart.tmall.com") {
		$('#mallSearch').append(myConCart);
		frmId = 4;
	}
	if (window.location.origin == "https://item.jd.com") {
		$('#choose-btns').append(myConJD);
		goodsId = /(\d+)\.html/.exec(window.location.href)[1];
		frmId = 5;
	}

	var gtime = "2019-10-25 21:22:10.0";//抢拍时间
	gtime = gtime.substring(0, 19);
	gtime = gtime.replace(/-/g, '/');
	var timestamp = new Date(gtime).getTime();
	var tp = getCookie("ft_qgd");
	var cDt = new Date();
	if (tp == null) {
		setCookie("ft_qgd", timestamp);
		cDt.setTime(timestamp);
	} else {
		cDt.setTime(tp);
	}

	chk = getCookie("ft_qgdAOsm");

	if (frmId != 0) {

		if (chk != null) {
			if (chk == 0) {
				document.getElementById('AiceOsm').checked = false;
			} else {
				document.getElementById('AiceOsm').checked = true;
			}
		}

		bwtime = document.getElementById('AiceBeforeTime');

		var js = document.getElementById('AiceStartTime');
		js.value = dateFormat("YYYY-mm-dd HH:MM:SS", cDt);

		var tj = document.getElementById('AiceStart');
		tj.addEventListener('click', function () {
			gtime = document.getElementById('AiceStartTime').value;
			gtime = gtime.substring(0, 19);
			gtime = gtime.replace(/-/g, '/');
			var timestamp1 = new Date(gtime).getTime();
			setCookie("ft_qgd", timestamp1);
			//location.replace(location.href);
			if (ifYhq == 1) {
				//优惠券点击事件
				//alert("暂时无法使用该功能！");
				var frId = 0;
				if (frmId == 1 || frmId == 2) {
					frId = 3;
				}
				if (frmId == 5) {
					frId = 2;
				}
				var exUrl = "http://www.ubja.vip/app/LKT/index.php?module=api&software_name=3&edition=1.0&action=exUrl&m=GMurl&goodsid=" + goodsId + "&fromid=" + frId;
				console.log(exUrl);
				GM_xmlhttpRequest({
					url: exUrl,
					method: 'GET',
					timeout: 10000,
					headers: {
						'Content-Type': 'application/json',
						'Accept': 'application/json',
						'Cache-Control': 'public'
					},
					onload: function (res) {
						try {
							const json = JSON.parse(res.responseText)
							if (json.code == 100) {
								var exurl = json.msg.exurl;
								window.location.href = exurl;
							} else {
								alert("该商品暂无优惠券！");
							}
						} catch (e) {
							alert("该商品暂无优惠券！");
						}

					}
				});


			} else {
				if (gostart == 0) {
					gostart = 1;
					$('#AiceStart').prop('lastChild').nodeValue = "正在倒计时";
				} else {
					gostart = 0;
					$('#AiceStart').prop('lastChild').nodeValue = "开始倒计时";
				}
				syncTime();
			}

		});

		var AutoOsm = document.getElementById('AiceOsm');
		AutoOsm.addEventListener('click', function () {
			setCookie("ft_qgdAOsm", AutoOsm.checked ? 1 : 0);
		});

		var btnPrice = document.getElementById('AicePrice');
		btnPrice.addEventListener('click', function () {
			//历史价格点击事件
			pdata = null;
			pbeginTime = null;
			picdata = null;
			var url = location.href;
			var gwdUrl = "https://browser.gwdang.com/extension/price_towards?url=" + encodeURIComponent(url)
			GM_xmlhttpRequest({
				url: gwdUrl,
				method: 'GET',
				timeout: 10000,
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
					'Cache-Control': 'public'
				},
				onload: function (res) {
					//loadingMask.parentNode.removeChild(mask);
					const json = JSON.parse(res.responseText)
					if (json.is_ban == null) {
						console.log(json);
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

						pdata = json.store[0].all_line;
						pbeginTime = json.store[0].all_line_begin_time;
						picdata = ddata;

						var hml = "<div   style='margin-left:50px;margin-top:20px;display: block;'><a class='active-plot type-plot' " + allHide + " id='plotAll'>全部</a><a class='type-plot' " + yearHide + " id='plotYear'>年线</a><a class='type-plot' " + monthHide + " id='plotMonth'>月线</a>";
						hml = hml + "<div id='hisprice' style='width: 720px;height:350px;margin: 0;padding: 0'></div>";
						opWind('', '0', '历史价格', hisPriceShow(hml));
					} else {
						console.log(json.action.to);
						opWind(json.action.to, '1', '请验证后刷新页面！', '');
					}
				}
			});

		});

	}

	function hisPriceShow(sBody) {
	    var priceHtml =
			`
<html>
<head>
<meta charset="gbk" />
<meta name="renderer" content="webkit"/>
<meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
</head>
<TITLE>历史价格</TITLE>
<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/4.3.0/echarts.min.js"></script>
<BODY BGCOLOR=#ffffff>
${sBody}
</BODY>
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
</html>
`
		return priceHtml;
	};


	if (chk == 1) { //自动提交订单
		var t1 = setInterval(function () {
			var gXd = getTargetByTAV("a", "class", "go-btn");
			if (gXd !== null && typeof (gXd) === 'object') {
				gXd.click();
				clearInterval(t1);
			} else {
			}
		}, cyce)
	}

	window.onload = function () {
		if ((frmId == 1) | (frmId == 2)) {
			if (frmId == 1) {
				ifLj = getTargetByTAV('div', 'class', 'tb-btn-wait');
			} else if (frmId == 2) {
				ifLj = getTargetByTAV('div', 'class', 'tb-tqg');
			}
			if (ifLj == null) {
				//var nuLj = getTargetByTAV('div','class','tb-btn-buy tb-btn-sku tb-hidden');
				//if (nuLj!=null){}else{
				$('#AiceStart').prop('lastChild').nodeValue = "优惠券";
				$('#AicePm').hide();
				ifYhq = 1;
				//}
			}
		}
		if ((frmId == 3) | (frmId == 4)) {
			btnCart = getTargetById("J_Go");
			if (btnCart !== null && typeof (btnCart) === 'object') {
				btnBuy = btnCart;
			}
		}
		if (frmId == 5) {
			$('#AiceStart').prop('lastChild').nodeValue = "优惠券";
			$('#AicePm').hide();
			ifYhq = 1;
		}


	}

	function getStyle(element, attr) {
		if (element.currentStyle) {
			return element.currentStyle[attr];
		} else {
			return window.getComputedStyle(element, null)[attr];
		}
	}

	function dateFormat(fmt, date) {
		let ret;
		let opt = {
			"Y+": date.getFullYear().toString(), // 年
			"m+": (date.getMonth() + 1).toString(), // 月
			"d+": date.getDate().toString(), // 日
			"H+": date.getHours().toString(), // 时
			"M+": date.getMinutes().toString(), // 分
			"S+": date.getSeconds().toString() // 秒
			// 有其他格式化字符需求可以继续添加，必须转化成字符串
		};
		for (let k in opt) {
			ret = new RegExp("(" + k + ")").exec(fmt);
			if (ret) {
				fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
			}
			;
		}
		;
		return fmt;
	}


	function getTargetById(t_id) {
		var target = document.getElementById(t_id);
		return target;
	}

	function getTargetByTAV(t_tag, t_attr, t_value) {
		var target = document.getElementsByTagName(t_tag);
		for (var i = 0; i < target.length; i++) {
			if (target[i].getAttribute(t_attr) == t_value) {
				return target[i];
			}
		}
	}

	function trim(str) {
		str = str.replace(/(^\s*)|(\s*$)/g, "");
		return str;
	}

	//写cookies
	function setCookie(name, value) {
		var Days = 30;
		var exp = new Date();
		exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
		document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
	}

	function getCookie(name) {
		var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
		if (arr = document.cookie.match(reg)) {
			return unescape(arr[2]);
		} else {
			return null;
		}
	}

	function opWind(purl, pisweb, pname, phml) {
		var url = purl;
		var name = pname;
		var iWidth = 800;
		var iHeight = 450;
		var iTop = (window.screen.height - 30 - iHeight) / 2;
		var iLeft = (window.screen.width - 10 - iWidth) / 2;
		var OpenWindow = window.open(url, name, 'height=' + iHeight + ',,innerHeight=' + iHeight + ',width=' + iWidth + ',innerWidth=' + iWidth + ',top=' + iTop + ',left=' + iLeft + ',toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no');
		if (pisweb == 0) {
			OpenWindow.document.write(phml);
			OpenWindow.document.close();
			OpenWindow.focus();
		}
	}


	var strJosn = null;
	unsafeWindow.fff = (d) => {
		strJosn = d;
	};

	function syncTime() {
		if (gostart == 0) return;
		var timestamp = getCookie("ft_qgd");
		d8 = new Date();
		d8.setTime(timestamp);//读取抢拍时间

		starttime = new Date().getTime();
		GM_xmlhttpRequest({
			url: "https://t.alicdn.com/t/gettime?callback=fff",
			method: 'GET',
			timeout: 10000,
			headers: {
				'Content-Type': 'application/jsonp',
				'Accept': 'application/jsonp',
				'Cache-Control': 'public'
			},
			onload: function (responseDetails) {
				if (responseDetails.status == 200) {
					console.log(responseDetails.responseText);
					//eval( responseDetails.responseText);
					var strJosn = JSON.parse(responseDetails.responseText.replace('fff(', '').replace(')', ''));
					console.log(strJosn);
					var result = strJosn;
					endtime = new Date().getTime();
					//服务器时间
					var sd = new Date();
					sd.setTime(result.time * 1000);
					var ttx = d8 - sd;
					if (ttx < 0)//已过1
					{
						alert("时间已过");
						if (ttx > -2000) //避免重复刷页面
						{
							location.replace(location.href);
						}
					} else if (ttx > 60 * 1000 * 1)//1分钟才同步
					{
						console.log("距离抢购还有一段时间");
						setTimeout(() => {
							//location.replace(location.href);
							syncTime();
						}, 60 * 1000);
					} else if (ttx > 0) {
						$('#AiceStart').prop('lastChild').nodeValue = "正在倒计时（" + ttx / 1000 + "S）";
						if (initsdtime_int == 0) {
							initsdtime_int = parseInt(result.time);
						}
						if ((d8 - sd) <= 1000) {
							console.log("等待抢购");
							$('#AiceStart').prop('lastChild').nodeValue = "等待抢购";
							window.setTimeout(function () {
								if (btnBuy !== null && typeof (btnBuy) === 'object') {
									btnBuy.click();
								} else {
								}

							}, d8 - sd - bwtime);

							window.setTimeout(function () {
								if (btnBuy !== null && typeof (btnBuy) === 'object') {
									btnBuy.click();
								} else {
								}
							}, d8 - sd - bwtime + 100); //重复提交一次确保提交到
						} else {
							setTimeout(() => {
								syncTime();
							}, 20);
						}
					}
				}
			}
		});
	}
})();