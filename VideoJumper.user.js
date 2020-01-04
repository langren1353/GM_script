// ==UserScript==
// @name        AC-html5视频广告加速器
// @description 视频速度加速器，遇到html5的视频进度广告的时候，按下 alt+0 步进广告，最好预留几秒。必须配合“计时器掌控者”一起食用
// @namespace   K
// @include     *
// @version     1.3
// @note        2019-12-31-V1.3 尝试自动点击跳过youtube的广告
// @note        2019-11-29-V1.2 设置默认为30Hz的，
// @run-at      document-start
// @grant       GM_getValue
// @grant       GM.getValue
// @grant       GM_setValue
// @grant       GM.setValue
// @grant       GM_getResourceText
// @grant       GM_registerMenuCommand
// ==/UserScript==

var _NORMAL_HZ = 50;
var Config = {
	userHz: _NORMAL_HZ
};

function addStyle(css) { //添加CSS的代码--copy的
	let pi = document.createProcessingInstruction(
		'xml-stylesheet',
		'type="text/css" must="false" href="data:text/css;utf-8,' + encodeURIComponent(css) + '"'
	);
	return document.insertBefore(pi, document.documentElement);
}

/**
 * @param callback 回调函数，需要返回是否结束True、False、否则相当于定时器
 * return:
 *      true = 定时器
 *      false = 计时器
 *      none = 计时器
 * @param period 周期，如:200ms
 */
function RAFFunction(callback, period){
	// 一秒60次，对应1秒1000ms
	let needCount = period / 1000 * Config.userHz;
	let times = 0;
	let hasFinish = false;
	function step(){
		if(!hasFinish) requestAnimationFrame(step);
		if(times == 0){
			times = needCount;
			hasFinish = callback(); // 只有返回true才会终止，不返回也会继续
		}
		times--;
	}
	requestAnimationFrame(step);
}

function UserPromptInputHz(){
	var t = prompt("输入您想要的步进速度(推荐:50, 66, 88):(当前："+Config.userHz+")");
	if(/\d+/.test(t)){
		Config.userHz = t;
		/*保存配置项*/
		GM.setValue("Config", Config);
	}
}

function autoClickYoutubeAd(){
	if(location.host.indexOf("youtube.com") >= 0){
		addStyle(".video-ads .ad-container .adDisplay, #player-ads, .ytp-ad-module, .ytp-ad-image-overlay{ display: none!important; }");
		RAFFunction(function(){
			var adPassBtn = (document.querySelector(".ytp-ad-skip-button ") || document.querySelector(".videoAdUiSkipButton "));
			adPassBtn && adPassBtn.click();
		}, 1200);
	}
}

Promise.all([GM.getValue("Config")]).then(function(data){
	if(data[0] == null){
		Config.userHz = _NORMAL_HZ;
	}else{
		Config = data[0];
	}
	try{
		GM_registerMenuCommand('AC-计时器-显示器刷新率设置', function () {
			UserPromptInputHz();
		});
	}catch (e) {}
	console.log("当前刷新率：" + Config.userHz);
	document.addEventListener("keydown", function(env){
		// 如果按下的是 alt+'+' 那么直接前进10秒
		if(env.key == '0' && env.altKey == true){
			console.log("开始");
			changTime(0,100);
			// 100倍速度，那么需要：10秒 = 0.1秒 = 100 ms
			RAFFunction(function () {
				console.log("结束");
				afterTimerEndFunc();
				changTime(0,0,false,true);
				return true;
			}, 100);
		}
	});
});

autoClickYoutubeAd();