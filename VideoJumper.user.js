// ==UserScript==
// @name        AC-html5视频广告加速器
// @description 视频速度加速器，遇到html5的视频进度广告的时候，按下 alt+0 步进广告，最好预留几秒。必须配合“计时器掌控者”一起食用
// @namespace   K
// @include     *
// @version     1.2
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

/**
 * @param callback 回调函数，需要返回是否结束True、False、否则相当于定时器
 * @param period 周期，如:200ms
 */
function RAFFunctionEnd(callback, period) {
	let needCount = period / 1000 * Config.userHz;
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
			RAFFunctionEnd(function () {
				console.log("结束");
				changTime(0,0,false,true);
			}, 100);
		}
	});
});

