// ==UserScript==
// @name  AC-必应取词+翻译
// @description 一个可以在浏览器中自由使用的屏幕取词脚本-alt+鼠标翻译，或者选中按Q翻译；必应智能翻译，翻译精准
// @version 2.5
// @namespace youdao
// @license GPL-3.0-only
// @author  AC -modified from ：Liu Yuyang(sa@linuxer.me)
// @include *
// @icon    https://raw.githubusercontent.com/langren1353/zbImg/master/img0/icon.jpg
// @require https://greasyfork.org/scripts/10783-md5/code/md5.js?version=60242
// @run-at  document-end
// @note    V2.5 2019-12-05 修复由于之前没注意的点导致的部分网站运行异常的问题
// @note    V2.3 2019-09-06 搜狗翻译彻底失效，由于搜狗采用的方案越来越狗血，无法较好的获取到实际的sign，因此放弃使用搜狗，转为使用必应来进行翻译
// @note    V2.2 2019-08-28 更新搜狗翻译失效的问题，修改为搜狗的api翻译
// @note    V2.1 2019-05-25 继续修复翻译失效的问题，后来发现是Resouece无法即时的刷新，所以现在采用脚本自动的获取数据，同时也支持了其他脚本的运行
// @note    V2.0 2019-03-24 只支持Tampermonkey。由于GM_getResourceText在GM下的不支持的原因，所以暂时只支持Tampermonkey的运行
// @note    V1.9 2019-02-21 继续更新搜狗API更新导致的无法翻译的bug -- 变更为库文件更新模式，可以很方便的更新token
// @note    V1.8 2018-12-19 更新搜狗API的key，且修复了部分特殊关键词无法翻译的bug
// @note    V1.7 2018-12-04 修复搜狗搜索API更新的问题--已经更换为搜狗的翻译API；如果搜狗更新的话，那估计又要换回必应翻译了
// @note    V1.6 2018-05-23 修复部分英文单词翻译不出来的bug，同时修复特殊的BOLD标签
// @note    V1.5 2018-05-16 修复英文翻译单词的bug，同时修复语音的问题，暂时就这样了，最近不更新了，有需要的话提出来，以后再说
// @note    V1.4 2018-05-16 修复上一次更新导致的bug，同时修复多种语言翻译，结果却翻译成了英文的bug
// @note    V1.3 2018-05-16 修复word词组的时候翻译出错的问题
// @note    V1.2 2018-05-16 修复没有添加connect的错误问题
// @note    V1.1 2018-05-12 有道自己不更新~~HTTPS证书过期，现在使用搜狗翻译吧，老司机们说搜狗翻译还是很有优势的，至于百度翻译，再说吧
// @note    V1.0 2017-11-22 修复firefox57的翻译的BUG
// @note    V0.9 2017-11-15 修复了一大堆，优化了下界面的展示问题
// @note    V0.8 2017-2-21 修正了由于z-index过低导致的淘宝页面翻译过于底层而看不见
// @note    V0.7 2016-9-29 修正了部分格式错误，换行的时候稍微好了点
// @note    V0.6 2016-1-12 终于修正了，之前只改了句子翻译中的文字颜色，才发现单词翻译后的颜色简直看不清。。。
// @note    V0.5 2016-1-9 修改默认背景色
// @note    V0.4 2016-1-8 修正chrome的支持
// @note    V0.3 2016-1-8 修改窗体默认大小，尽可能的显示回车功能，避免了以前的全部显示在同一行--依旧有bug
// @note    V0.2 2015-11-26 修改部分地方适合自己使用，选中文字，按下Q翻译，或者alt+鼠标选中，自动翻译
// @grant   GM_xmlhttpRequest
// @connect fanyi.youdao.com
// @connect fanyi.sogou.com
// @connect xbaidu.ntaow.com
// @connect cn.bing.com
// @grant   GM_addStyle
// @grant   GM_getValue
// @grant   GM.getValue
// @grant   GM_setValue
// @grant   GM.setValue
// ==/UserScript==
(function(){

	var curX;
	var curY;
	var timeout;
	var transResult;
	var Config = {}; // 之前忘了加上参数的定义，导致了污染全局的变量

	if (typeof(GM) == "undefined") {
		// 这个是ViolentMonkey的支持选项
		GM = {};
		GM.setValue = GM_setValue;
		GM.getValue = GM_getValue;
	}

	Promise.all([GM.getValue("Config")]).then(function (data) {
		if (data[0] != null) {
			Config = data[0];
		}else{
			Config = {};
		}
		// 初始化完成之后才能调用正常函数
		callback();
	}).catch(function (except) {
		console.log(except);
	});

	function callback() {
		document.body.addEventListener("mousemove", function(e){curX = e.clientX; curY = e.clientY;}, false);
		document.body.addEventListener("keypress", callbackWrapper, false);
		document.body.addEventListener("mouseup", callbackWrapper, false);
		document.body.addEventListener("dblclick", callbackWrapper, false);
		GM_addStyle("bold{font-weight: bold;}");
	}

	function callbackWrapper(e) {
		if(e.type === 'dblclick' && isInACTransPop()){
			// console.log("双击操作：复制目标文本");
			// console.log(transResult);
			return;
		}
		if(e.charCode == 113  || e.type == "mouseup"){ //Q
			// remove previous .ACyoudaoPopup if exists
			var previous = document.querySelector(".ACyoudaoPopup");
			if(previous && isInACTransPop()){
				document.body.removeChild(previous);
				transResult = "";
			}
			// quick fix. with ctrl key held
			if (e.type == "mouseup" && !e.altKey) {
				return;
			}
			clearTimeout(timeout);
			timeout = setTimeout(function(){
				translate();
			}, 120);
		}
	}

	function isInACTransPop(){
		var checkNode = document.getSelection().anchorNode.parentNode;
		return checkNode && (""+checkNode.className).indexOf("ACyoudao") < 0;
	}
	function translate() {
		var selectObj = document.getSelection();
		if (selectObj.anchorNode.nodeType == 3) {
			var word = selectObj.toString();
			if (word == "") {
				return;
			}
			word = word.replace(new RegExp('(\r\n)+', 'g'), 'QWER');// 特殊标记便于替换
			var ts = new Date().getTime();
			var mx = curX;
			var my = curY;
			translate(word, ts);
		}

		function popup(mx, my, result) {
			var youdaoWindow = document.createElement('div');
			youdaoWindow.classList.toggle("ACyoudaoPopup");
			// parse
			var res = JSON.parse(result);
			var dictJSON = res[0]['translations'][0];

			var query = dictJSON['displayTarget'] || dictJSON['text'];
			// var errorCode = dictJSON['errorCode'];
			if (dictJSON['dictionary']) {
				word();
			} else {
				sentence();
			}
			// main window
			// first insert into dom then there is offsetHeight！IMPORTANT！

			document.body.appendChild(youdaoWindow);
			youdaoWindow.style = "color: #000; text-align: left; position: fixed; background: rgb(237, 246, 255); border-radius: 3px; box-shadow: 0px 0px 5px 0px; opacity: 1; min-width: 300px; max-width: 550px; overflow-wrap: break-word; font-size: 15px;padding: 3px; z-index: 2147483647;display:block !important;";
			youdaoWindow.style.left = mx + 10 + "px";
			if (mx + 200 + 30 >= window.innerWidth) {
				youdaoWindow.style.left = parseInt(youdaoWindow.style.left) - 200 + "px";
			}
			//alert(window.innerHeight);
			if (my + youdaoWindow.offsetHeight + 30 >= window.innerHeight) {
				youdaoWindow.style.bottom = "20px";
			} else {
				youdaoWindow.style.top = my + "px";
			}

			function word() {
				function play(soundURL) {
					if(soundURL.indexOf("http") != 0) soundURL = "https:" + soundURL;
					function playSound(buffer) {
						var source = context.createBufferSource();
						source.buffer = buffer;
						source.connect(context.destination);
						source.start(0);
					}
					var context = new AudioContext();
					// var soundUrl = 'https://dict.youdao.com/dictvoice?type=2&audio='+encodeURIComponent(word);
					console.log(soundURL);
					var soundUrl = soundURL;
					var p = new Promise(function(resolve, reject) {
						var ret = GM_xmlhttpRequest({
							method: "GET",
							url: soundUrl,
							responseType: 'arraybuffer',
							onload: function(res) {
								try {
									context.decodeAudioData(res.response, function(buffer) {
										resolve(buffer);
									});
								} catch(e) {
									reject(e);
								}
							}
						});
					});
					p.then(playSound, function(e) {
						console.log(e);
					});
				}
				// var basic = dictJSON['basic'] != null ? dictJSON['basic'] : dictJSON['dictionary']['content'][0];
				var basic = dictJSON;
				var header = document.createElement('div');
				var phoneticText = [];
				header.className = "ACyoudaoPopupDIV";
				// header
				var span = document.createElement('span');
				span.className = "ACyoudaoPopupSpan";
				span.innerHTML = query;
				header.appendChild(span);
				// phonetic if there is
				var phonetic = basic['phonetic'];
				var transWord;
				try{
					transWord = basic['category'][0]['sense'][0]['description'];
				}catch (e) {
					transWord =  basic['usual'][0]['values'];
				}
				if(typeof(phonetic) == "object"){
					var i = 0;
					phonetic.map(function(one){
						phoneticText[i] = one['text']+";";
						i++;
					});
				}else{
					phoneticText[0] = phonetic;
				}
				for(var i = 0; i < phoneticText.length; i++){
					var phoneticNode = document.createElement('span');
					if(i == phoneticText.length-1)
						phoneticNode.innerHTML = '[' + phoneticText[i] + ']：'+transWord;
					else
						phoneticNode.innerHTML = '[' + phoneticText[i] + ']';
					phoneticNode.style.cursor = "pointer";
					header.appendChild(phoneticNode);
					var playLogo = document.createElement('span');
					header.appendChild(phoneticNode);
					(function(index){
						phoneticNode.addEventListener('mouseup', function(e){
							if (e.target === phoneticNode) { }
							e.stopPropagation();
							play(phonetic[index]['filename']);
						}, false);
					})(i);
				}
				header.style.lineHeight = "1.8";
				header.style.color = "black";
				header.style.margin = "0";
				header.style.padding = "0";
				span.style.fontSize = "15px";
				span.style.color = "black";

				youdaoWindow.appendChild(header);
				var hr = document.createElement('hr');
				hr.className = "ACyoudaoPopupHR";
				hr.style.margin = "0";
				hr.style.padding = "0";
				hr.style.height = "1px";
				hr.style.borderTop = "dashed 1px black";
				youdaoWindow.appendChild(hr);
				var ul = document.createElement('ul');
				ul.className = "ACyoudaoPopupUL";
				// ul style
				ul.style.margin = "0";
				ul.style.padding = "0";
				var mapNode;
				try{
					mapNode = basic['category'][0]['sense'][0]['example'];
				}catch (e) {
					mapNode = basic['content'][0]['item']['core'];
				}
				mapNode.map(function(trans) {
					var li = document.createElement('li');
					li.className = "ACyoudaoPopupLi";
					li.style.listStyle = "none";
					li.style.margin = "0";
					li.style.padding = "0";
					li.style.background = "none";
					li.style.color = "#008CD8";
					var innerHTML = "";
					if(trans['source'] != undefined){
						innerHTML = trans['source']+":"+trans['target'];
					}else{
						innerHTML = trans['detail']['zh']+":" + trans['detail']['en']+":";
					}
					var divNode = document.createElement("div");
					divNode.innerHTML = innerHTML;
					li.appendChild(divNode);
					ul.appendChild(li);
				});
				youdaoWindow.appendChild(ul);
			}

			function sentence() {
				var ul = document.createElement('ul');
				ul.className = "ACyoudaoPopupUL";
				// ul style
				ul.style.margin = "0";
				ul.style.padding = "0";
				var trans = dictJSON['displayTarget'] || dictJSON['text']; // 翻译结果
				// var oriText = dictJSON['translate']['text']; // 原始文本-找不到
				var li = document.createElement('li');
				li.style.listStyle = "none";
				li.style.margin = "0";
				li.style.padding = "0";
				li.style.background = "none";
				li.style.color = "#008CD8";
				li.className = "ACyoudaoPopupLi";
				trans = trans.replaceAll('QWER', '\n').replaceAll(",", ", ");
				console.log(trans);
				// if(oriText.length < 70 && !/\n/.test(oriText)) // 如果长度比较短，并且没有回车符
				// 	trans = oriText+"\n"+trans;
				transResult += trans;
				var reg = new RegExp("\n","gm");
				while(reg.exec(trans) != null){// 如果找不到回车了，那么最后重复一次新建<p>
					//找到一个回车，那么添加一个新的<p>，内容为：trans.sub(0, ?); trans = trans.sub(?);
					var newNode = document.createElement("li");
					newNode.className = "ACyoudaoPopupLi";
					newNode.style.listStyle = "none";
					newNode.style.margin = "0";
					newNode.style.padding = "0";
					newNode.style.background = "none";
					newNode.style.color = "#008CD8";
					newNode.style.fontSize = "15px";
					newNode.innerHTML = trans.substring(0, reg.lastIndex-1);
					li.appendChild(newNode);
					trans = trans.substring(reg.lastIndex);
				}
				var newNode = document.createElement("div");
				newNode.className = "ACyoudaoPopupDiv";
				newNode.innerHTML = trans;
				newNode.style = "line-height: 1.8;color:#008CD8 !important;font-size:15px !important;margin-left:10px;margin-right:10px;";
				li.appendChild(newNode);
				ul.appendChild(li);
				youdaoWindow.appendChild(ul);
			}
		}
		function ToCDB(str) {
			var tmp = "";
			for(var i=0;i<str.length;i++)
			{
				if(str.charCodeAt(i)>65248&&str.charCodeAt(i)<65375)
				{
					tmp += String.fromCharCode(str.charCodeAt(i)-65248);
				}
				else
				{
					tmp += String.fromCharCode(str.charCodeAt(i));
				}
			}
			return tmp
		}
		function translate(word, ts) {
			var ToLANGUAGE = "en";
			if(!/[\u4E00-\u9FA5]/g.test(word)) // 如果没有中文，那么说明是外文--> to=中文
				ToLANGUAGE = "zh-Hans";
			// word = encodeURIComponent(word); // 搜狗的这个API，不需要中文的encode处理
			var data = `fromLang=auto-detect&to=${ToLANGUAGE}&text=${encodeURIComponent(word)}`;
			console.log(data);
			var ret = GM_xmlhttpRequest({
				url: "https://cn.bing.com/ttranslatev3",
				method: "POST",
				data: data,
				binary: true,
				headers: {"Accept": "application/json", "Content-Type": "application/x-www-form-urlencoded"},  // can be omitted...
				onload: function(res) {
					var retContent = res.response;
					console.log(retContent);
					retContent = ToCDB(retContent);
					//console.log(retContent)
					popup(mx, my, retContent);
				},
				onerror: function(res) {
					console.log("error");
				}
			});
		}
		String.prototype.replaceAll = function(s1,s2){
			return this.replace(new RegExp(s1,"gm"),s2);
		};
	}
})();