// ==UserScript==
// @name        AC-html5视频广告加速器
// @description 视频速度加速器，遇到html5的视频进度广告的时候，按下 alt+0 步进广告，最好预留几秒。必须配合“计时器掌控者”一起食用
// @namespace   K
// @include     *
// @version     1.5
// @note        2020-01-04-V1.5 修复：谷歌的视频小广告没有自动点击掉
// @note        2020-01-04-V1.4 修复上次加上的代码导致的加速后没有自动恢复的问题 && 修复加速速度不正常的问题 && 修复youtube的广告没有正常跳过的问题
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
 * @param callback 回调函数
 * @param period 周期，如:200ms
 * 函数在RAF执行周期结束后执行，非定期
 */
function WaifRAFEndFunc(callback, period) {
	let needCount = period / 1000 * Config.userHz / 2;  // 似乎时间计算不对劲，需要除以2
	let times = needCount;
	let hasFinish = false;

	function step() {
		if (!hasFinish) requestAnimationFrame(step);
		if (times == 0) {
			hasFinish = true;
			callback(); // 只有返回true才会终止，不返回也会继续
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
		// addStyle(".video-ads .ad-container .adDisplay, #player-ads, .ytp-ad-module, .ytp-ad-image-overlay{ display: none!important; }");
		setInterval(function(){
			var adPassBtn = (document.querySelector(".ytp-ad-skip-button ") || document.querySelector(".videoAdUiSkipButton ")) || document.querySelector(".ytp-ad-overlay-close-container");
			adPassBtn && adPassBtn.click();
		}, 1200)
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
			if(typeof(changTime) == "undefined") return; // 如果没有初始化函数，跳过
			changTime(0, 100);
			// 100倍速度，那么需要：10秒 = 0.1秒 = 100 ms
			WaifRAFEndFunc(function () {
				console.log("结束");
				changTime(0,0,false,true);
			}, 1500); // 目标 = 10秒
		}
	});
});

autoClickYoutubeAd();