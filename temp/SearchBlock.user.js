// ==UserScript==
// @name  AC-有道取词+翻译-库文件
// @description 库文件，不能直接调用的
// @version 1.8
// @namespace youdao
// @author  AC
// @include *
// @icon    https://coding.net/u/zb227/p/zbImg/git/raw/master/img0/icon.jpg
// @run-at  document-end
// @connect xbaidu.ntaow.com
// @grant GM_xmlhttpRequest
// @note    V1.0 2019-02-21 用于跟随搜狗的API更新
// ==/UserScript==
var SoGouKey = "b33bf8c58706155663d1ad5dba4192dc";
GM_xmlhttpRequest({
	method: "GET",
	url: "http://xbaidu.ntaow.com/newcss/sogoukey.php",
	onload: function(res) {
		SoGouKey = res.responseText;
		console.log(SoGouKey);
	}
});
