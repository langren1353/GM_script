// ==UserScript==
// @name AC-美化百度-谷歌-必应-搜狗搜索结果之Favicon的显示
// @namespace BlockKafanTopicinGoogle
// @include        /^https?://www.baidu.com/.*/
// @include        /^https?://www.sogou.com/.*/
// @include        /^https?://\w+.bing.com/.*/
// @include        /^https?://encrypted.google.[^\/]+/
// @include        /^https?://www.google.[^\/]+/
// @icon    https://coding.net/u/zb227/p/zbImg/git/raw/master/img0/icon.jpg
// @author       AC
// @version 0.5.6
// @connect https?://[\S]+
// @description 美化百度、谷歌、必应、搜狗的搜索结果，显示网站的favicon图标，看着更好看
// @note 0.5.6 修复favicon的地址失效的问题
// @note 0.5.5 修复在baidu下的部分小程序启用不正常的问题
// @note 0.5.4 继续在以前的服务器中徘徊
// @note 0.5.3 修复必应的部分 BUG 以及显示部分搜索为两个图标的问题
// @note 0.5.1 由于谷歌的问题，赶紧换成 DOMNodeInserted 算了
// @note 0.5.0 改个名字~
// @note 0.4.9 顺带处理了搜狗搜索结果的favicon
// @note 0.4.8 根据建议，扩大bing的正则匹配范围
// @note 0.4.7 修复部分百度贴吧地址问题
// @note 0.4.6 修复之前因为小程序而遗留的BUG
// @note 0.4.5 切换错误的显示图标为另一个源的，避免taobaosvn显示错误
// @note 0.4.4 修复部分百度搜索结果中小程序的显示异常问题
// @note 0.4.3 修复部分谷歌地址搜索的结果问题，以及百度的小程序图标显示
// @note 0.4.2 修复百度文库的图标显示两个的问题
// @note 0.4.1 修复谷歌图标显示不出的问题，同时加了一个bing的搜索结果显示
// @note 0.4.0 修复百度的各种图标丢失问题
// @note http://bbs.kafan.cn/thread-2074740-1-1.html
// @grant none
// @license MIT

// ==/UserScript==

//===================================================普通规则变量定义=======================================================

//===================================================主入口=======================================================
var fatherName = [
	"c-container", //baidu1
	"rc", //google
	"b_algo", //bing1
	"b_ans", //bing2
	"vrwrap", //sogou1
	"rb"//sogou2
];
document.addEventListener('DOMNodeInserted', blockKafanBaidu, false);

function blockKafanBaidu() {
	var citeList;
	if(location.hostname.indexOf("baidu") > -1 && location.hostname.indexOf("baidu") < 20){
		citeList = document.querySelectorAll(".c-showurl");
	}else if(location.hostname.indexOf("google") > -1  && location.hostname.indexOf("google") < 20){
		citeList = document.querySelectorAll("._Rm");
	}else if(location.hostname.indexOf("bing.com") > -1 && location.hostname.indexOf("bing") < 20){
		citeList = document.querySelectorAll(".b_attribution>cite");
	}else if(location.hostname.indexOf("sogou") > -1 && location.hostname.indexOf("sogou") < 20){
		citeList = document.querySelectorAll("cite[id*='cacheresult_info_']");
	}
	deal(citeList);
}

// 传入nodelist，然后查找两个列，查看是否一致，一致则删除
function deal(citeList){
	for (var index = 0; index < citeList.length; index++) {
		var url = replaceAll(citeList[index].innerHTML); // 只能通过这个来判定，因为url无法得知
		if(null == citeList[index].getAttribute("deal")){
			if(url === "") continue;
			deal_fatherNode(citeList[index], getFaviconUrl(url));
		}
	}
}

function deal_fatherNode(node, faviconUrl){
	//https://api.byi.pw/favicon/?url=???? 不稳定
	//http://"+faviconUrl+"/cdn.ico?defaulticon=http://soz.im/favicon.ico 不稳定
	//https://www.xtwind.com/api/index.php?url=???? 挂了。。。
	//https://statics.dnspod.cn/proxy_favicon/_/favicon?domain=sina.cn
	// 如果地址不正确，那么丢弃

	var curNode = node;
	for(II = 0; II <= 5; II++){
		curNode = curNode.parentNode;
		if(isInUrlList(curNode.className)){
			break;
		}
	}
	if(II <= 5){
		var pos = curNode.innerHTML.indexOf("fav-url");
		pos = (pos===-1) ? curNode.innerHTML.indexOf("favurl"):pos;
		pos = (pos===-1) ? curNode.innerHTML.indexOf("tit-ico"):pos;
		pos = (pos===-1) ? curNode.innerHTML.indexOf("c-gap-icon-right-small\""):pos;
		pos = (pos===-1) ? curNode.innerHTML.indexOf("img_fav rms_img"):pos;
		pos = (pos===-1) ? curNode.innerHTML.indexOf("c-tool-"):pos;
		//他自己已经做了favicon了
		if(pos > 0)
			return;
		if(faviconUrl === "") return;

		var imgHTML = "<img class=\"faviconT\" style=\"vertical-align:sub;\" src='https://favicon.yandex.net/favicon/v2/"+faviconUrl+"?size=32' height=20 width=20>&nbsp;";

		//var errorUrl = "onerror=\"this.src='http://code.remix.ac.cn/favicon.ico'\"";
		//var imgHTML = "<img class=\"faviconT\" style=\"vertical-align:sub;\" src=\"http://www.google.cn/s2/favicons?domain="+faviconUrl+"\" height=20 width=20 " + errorUrl + "/>&nbsp;";
		var insNode = curNode.firstChild;
		if(insNode.length > 0){ //如果是false，那么就是正常节点，否则为文字节点
			insNode = curNode.childNodes[1];
		}
		if(insNode.innerHTML.indexOf("class=\"faviconT") > 0) {
			node.setAttribute("deal", "1"); return;
		}
		insNode.innerHTML = imgHTML + insNode.innerHTML;
		node.setAttribute("deal", "1");
	}
}
/*去掉网址中的<xxx>*/
function replaceAll(sbefore){
	return sbefore;
	// const result = sbefore.split('-');
	// if(location.hostname.indexOf("sogou") > -1 && location.href.indexOf("sogou") < 20){
	// 	// --搜狗专用；如果第一个是中文的话，地址就是第二个
	// 	sbefore = result[1];
	// }
	// cosnt send = sbefore.replace(/(\/[^/]*|\s*)/g ,"").replace(/<[^>]*>/g, ""); //.replace(/<?[^>]*?\s*>?/g ,"");
	// // console.log(send);
	// return send;
}
function getFaviconUrl(citeUrl){
	return citeUrl.replace(/[^.]+\.([^.]+)\.([^.]+)/, "$1.$2")
	// var result = citeUrl.split('- ');
	// if(location.hostname.indexOf("sogou") > -1 && location.href.indexOf("sogou") < 20){
	// 	// --搜狗专用；如果第一个是中文的话，地址就是第二个
	// 	citeUrl = result[1];
	// }
	// citeUrl = citeUrl.replace(/https?:\/\//g,"").replace(/<\/?strong>/g,"").replace(/<\/?b>/g,"")
	// 	.replace(/<?>?/g,"").replace(/( |\/).*/g,"");
	// //return citeUrl+"/favicon.ico";
	// return citeUrl;
}
function isInUrlList(url){
	for(let i = 0; i < fatherName.length; i++){
		if(url.indexOf(fatherName[i]) >= 0){
			return true;
		}
	}
	return false;
}
