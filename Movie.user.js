// ==UserScript==
// @name            TU-破解视频VIP集合-去广告-音乐直接解析播放-VIP视频解析，接口每日更新，一键免广告免费观看各大视频网站
// @description     VIP视频破解集合；支持【爱奇艺，优酷视频，乐视TV，腾讯视频，土豆视频，搜狐视频，哔哩哔哩，音悦台，PPTV，华数TV】；移除部分干扰广告。【女王节】新增精选接口，解析速度飞快，支持更多网站，可供选择的更多。各种VIP节点播放，并且自动解析使用对应的播放节点，更快的播放速度，更稳定的播放效果。支持[Tampermonkey | Violentmonkey | Greasymonkey]。购物优惠信息获取
// @icon            http://ww1.sinaimg.cn/large/6a155794ly1fubb8dy4pzj205k05kdg3.jpg
// @author          AC
// @create          2018-08-16
// @run-at          document-start
// @version         3.32
// @include         *//www.iqiyi.com/v_*
// @include         *//www.iqiyi.com/w_*
// @include         *//v.youku.com/v_show/*
// @include         *//*.le.com/ptv/vplay/*
// @include         *//v.qq.com/x/page/*
// @include         *//v.qq.com/x/cover/*
// @include         *//video.tudou.com/v/*
// @include         *//*.mgtv.com/b/*
// @include         *//tv.sohu.com/v/*
// @include         *//film.sohu.com/album/*
// @include         *//*.bilibili.com/bangumi/play/*
// @include         *//*.pptv.com/show/*
// @include         *//v.yinyuetai.com/video/*
// @include         *//*.wasu.cn/Play/show/*
// @include         *//vip.1905.com/play/*
// @include         *//51lol.feixiong.tv/*
// @include         *//www.lolfun.cn/*
// @include         *//www.lolshipin.com/*
// @include         *//lol.qq.com/v/detail*
// @include         *//lol.qq.com/v/v2/detail*
// @namespace       TUJIDU
// @include         *//item.taobao.com/item.htm*
// @include         *//detail.tmall.com/item.htm*
// @include         *//s.taobao.com/search*
// @include         *//cart.taobao.com/*
// @include         *//uland.taobao.com/coupon/*
// @connect         open.lesiclub.cn
// @license         GPL-3.0-only
// @grant           GM_xmlhttpRequest
// @supportURL      https://qm.qq.com/cgi-bin/qm/qr?k=fOg8ij6TuwOAfS8g16GRYNf5YYFu5Crw&jump_from=&auth=-l05paasrPe5zigt5ahdzn_dzXiB1jJ_
// @feedback-url    https://qm.qq.com/cgi-bin/qm/qr?k=fOg8ij6TuwOAfS8g16GRYNf5YYFu5Crw&jump_from=&auth=-l05paasrPe5zigt5ahdzn_dzXiB1jJ_
// @copyright       2018, AC
// @lastmodified    2019.05.15
// @note            2019.05.15-3.32 修改跳转地址
// @note            2018.08.22-2.1 新增好几个节点，并且暴露出url地址，方便在手机上观看视频
// @note            2018.08.16-1.1 第一版新增支持爱奇艺，优酷视频，乐视TV，腾讯视频，土豆视频，搜狐视频，哔哩哔哩，音悦台，PPTV，华数TV
// @require         https://greasyfork.org/scripts/34606-ac-%E7%8B%AC%E5%AE%B6-%E6%B7%98%E5%AE%9D%E5%A4%A9%E7%8C%AB%E4%BC%98%E6%83%A0%E5%88%B8%E6%9F%A5%E8%AF%A2%E9%A2%86%E5%8F%96-%E5%A4%A7%E9%A2%9D%E4%BC%98%E6%83%A0%E5%88%B8-100%E5%85%83%E8%B4%AD%E7%89%A9%E7%A5%9E%E5%88%B8-%E7%9C%81%E9%92%B1%E8%B4%AD%E7%89%A9-%E9%A2%86%E5%88%B8%E8%B4%AD%E4%B9%B0%E6%9B%B4%E4%BC%98%E6%83%A0-%E5%B9%B3%E5%9D%87%E4%BC%98%E6%83%A020/code/AC-%E7%8B%AC%E5%AE%B6-%E6%B7%98%E5%AE%9D%E5%A4%A9%E7%8C%AB%E4%BC%98%E6%83%A0%E5%88%B8%E6%9F%A5%E8%AF%A2%E9%A2%86%E5%8F%96,%E5%A4%A7%E9%A2%9D%E4%BC%98%E6%83%A0%E5%88%B8,%E3%80%90100%E5%85%83%E8%B4%AD%E7%89%A9%E7%A5%9E%E5%88%B8%E3%80%91,%E7%9C%81%E9%92%B1%E8%B4%AD%E7%89%A9,%E9%A2%86%E5%88%B8%E8%B4%AD%E4%B9%B0%E6%9B%B4%E4%BC%98%E6%83%A0,%E5%B9%B3%E5%9D%87%E4%BC%98%E6%83%A020%25.user.js
// ==/UserScript==
(function(){
	var mCurSite = null;
	var isDebug = false;
	var debugX = isDebug?console.log.bind(console):function(){};
	var Config = {
		iqiyi:{
			// 爱奇艺视频 https://www.iqiyi.com/v_19rrfq5ajk.html
			// insertTo = 插入在xx节点
			// adStyle 自定义完整样式-用于移除广告
			// sStyle 按钮样式定义
			// title 标题文字内容获取
			insertTo:".mod-play-tit, .title-score, .side-content>.qy-play-list .main-title, .public-vip .public-vip-text,.qy-player-detail .qy-player-title",
			adStyle:".pw-video>div[data-cupid]>div[style*='position']{display:none !important}",
			sStyle:"width: 4rem;",
			title:".detail-left #widget-videotitle",
		},
		youku:{
			// 优酷视频 https://v.youku.com/v_show/id_XMzc2ODA1OTQwNA==.html?spm=a2hww.11359951.m_26665_c_32069.5~5!3~5!2~5~5~A
			// 可用     https://v.youku.com/v_show/id_XMzc4MjEzMjg0NA==.html
			insertTo:".title-wrap>h1, .tvinfo>h2, .vip_info .vip_limit_title",
			adStyle:"",
			sStyle:"",
			title:".player-title .title-wrap>h1>span:nth-child(1)",
		},
		le:{
			// 乐视TV http://www.le.com/ptv/vplay/28636951.html
			insertTo:".briefIntro_tit, .column_body>.vip_tit, #le_playbox .playbox_vip_tip>h3",
			adStyle:".layout_play iframe{display:none;}",
			sStyle:"vertical-align: bottom;",
			title:".briefIntro_box .briefIntro_tit>a",
		},
		v_qq:{
			// 腾讯视频 https://v.qq.com/x/cover/au757x4acdk6jea.html
			// https://v.qq.com/x/page/q0390tz0d2o.html
			insertTo:".mod_intro>.video_base, .scroll_top .player_title, .tvip_open_wrap .tvip_open_lf>.tvip_open_btn",
			adStyle:"",
			sStyle:"height: 36px;line-height: 36px;margin: 0px 5px;font-size: 24px;width: 6rem;",
			title:".player_headline ._video_title",
		},
		tudou:{ //---地址match也有待检查
			// 土豆视频 http://video.tudou.com/v/XMzYxMzMyMDIzMg==.html
			// TODO 限制参数请求必须是：http://yun.baiyug.cn/vip/index.php?url=http://video.tudou.com/v/XMzYxMzMyMDIzMg== 不能带别的参数
			insertTo:".left-side .td-playbase .td-playbase__title, .td-listbox__b .td-listbox__list:nth-child(1) .td-video__meta__title",
			adStyle:"",
			sStyle:"width:unset;color: red !important;font-size:unset;",
			title:".td-playbase #subtitle",
		},
		mgtv:{
			// 芒果TV https://www.mgtv.com/b/318945/4470636.html
			insertTo:".v-panel-title, .c-player-aside-filmdl .txt .tilname",
			adStyle:"",
			sStyle:"width: unset;font-size:unset;height:unset;line-height:unset;",
			title:".v-panel-info .route-til",
		},
		sohu:{
			// 搜狐视频 https://tv.sohu.com/v/MjAxODA4MDIvbjYwMDU3NzU0NS5zaHRtbA==.html
			// https://film.sohu.com/album/9337002.html?channeled=1200030002 ---- 新增支持
			insertTo:".videoBox .vBox-desktop, .playerBox .juji_tips>h4, #player_vipTips .vipTipsIn>.p1, .player_wrap .player-top-info .player-top-info-name, .detailInfo_box>p:nth-child(1)",
			adStyle:"#crumbsBar .ad{display:none}.area>.left>.adv{display:none}",
			sStyle:"",
			title:"#crumbsBar .crumbs a:last",
		},
		bilibili:{
			// 哔哩哔哩 可能还有其他的视频地址
			// https://www.bilibili.com/bangumi/play/ep232412
			insertTo:".header-info .count-wrapper, #bangumi_player .limit-vip-wrap .pwe-popup-pay",
			adStyle:"",
			sStyle:"width: 6rem;margin-top: -0.5rem;margin-left: 2rem;",
			title:"#bangumi_detail .info-title h2",
		},
		pptv:{
			// PPTV http://v.pptv.com/show/d2A9uiaKIibDaZF38.html?spm=vip_index_web.vip_d58855eb506e6c89f7eeb434e0955c41.0.0.0
			insertTo:".player-sidebar .tithide li:nth-child(1)>a, #mainContent .cf ul.fl",
			adStyle:"",
			sStyle:"margin-top: 0.5rem;",
			title:".mobilelook-pop-wrap .tv-name",
		},
		yinyuetai:{
			// 音悦台 http://v.yinyuetai.com/video/3271056
			// http://v.yinyuetai.com/playlist/265520        ---- 不支持这个地址
			insertTo:".videoBox .video_info .videoName",
			adStyle:"",
			sStyle:"",
			title:".videoName:first", // split("    ")
		},
		wasu:{
			// 华数TV https://www.wasu.cn/Play/show/id/9567710
			insertTo:".container .play_site h3, .play_video_b #play_vod_hits",
			adStyle:".container div[class*='play_ads']{display:none}#MZAD_POP_PLACEHOLDER,.ad_list{display:none !important}",
			sStyle:"",
			title:".play_movie .play_video_t .player_info_m:first p a",
		},
		1905:{
			// 1905 https://www.wasu.cn/Play/show/id/9567710
			insertTo:".sc-pay-wrapper>.sc-pay-button-wrapper, .page_play>.player-nav, #pSidebar .movie-title, #pSidebar .pay-mod-notlogin .vip-logloglog",
			adStyle:"",
			sStyle:"width: 5.1rem;",
			title:".player-nav .nav-title",
		},
		feixiong:{
			// 飞熊视频 http://51lol.feixiong.tv/Video/play/id/3427
			insertTo:".breadcrumb .active a, #g_newsInfoLeft #m_videoInfo p",
			adStyle:"",
			sStyle:"width: 6.2rem;position: unset;",
			title:".breadcrumb .active a span",
			source:"qq",
		},
		lolfun:{
			// 暴龙电竞 http://www.lolfun.cn/video/video.html?id=3287
			insertTo:".player_txt .video_top_con .video_top_con_title",
			adStyle:".video_top_con_title{overflow:unset !important;}",
			sStyle:"",
			title:".player_txt .video_top_con .video_top_con_title",
			source:"qq",
		},
		lolshipin:{
			// 木木不哭 http://www.lolshipin.com/201809/59089.html
			insertTo:".article .article__main .article__info h1",
			adStyle:".article__aside .mod div[align='center']{display:none;}",
			sStyle:"",
			title:".article .article__main .article__info h1",
			source:"qq",
		},
		lol_qq:{
			// 腾讯的lol视频 http://lol.qq.com/v/detail.shtml?id=96877&e_code=lolweb.videobpromo.r2
			insertTo: ".video-detail #jVideoTitle, .video-detail-box #video-title, .video-detail .v-side-info .v-side-name",
			adStyle:".video-title-box h6{overflow: unset!important;}",
			sStyle:"",
			title:".video-detail #jVideoTitle, .video-detail-box #video-title",
			source:"qq",
		}
	};
	function initSite(){
		for(var key in Config){
			if(location.host.replace(/\./ig, "_").indexOf(key) >= 0){
				debugX("当前站点："+key);
				mCurSite = Config[key];
				mCurSite.name = key;
				break;
			}
		}
	}
	function safeRemove(node){
		try{
			faNodes[i].querySelector(".acInG").remove();
		}catch (e) {}
	}
	function TU_addStyle(css, className, addToTarget, isReload){ // 添加CSS代码，不考虑文本载入时间，带有className
		var tout = setInterval(function(){
			addToTarget = addToTarget || "body";
			isReload = isReload || false;
			if(document.querySelector(addToTarget) != null){
				clearInterval(tout);
				if(isReload == true){
					safeRemove(document.querySelector("."+className));
				}else if(isReload == false && document.querySelector("."+className) != null){
					// 节点存在 && 不准备覆盖
					return;
				}
				var cssNode = document.createElement("style");
				if(className != null) cssNode.className = className;
				cssNode.id = "AC-"+className;
				cssNode.setAttribute("type", "text/css")
				cssNode.innerHTML = css;
				try{
					document.querySelector(addToTarget).appendChild(cssNode);
				}catch (e){console.log(e.message);}
			}
		}, 50);
	}
	function getTrueUrl(){
		var oriUrl = location.href;
		try{
			var oriText = $(".player>embed").attr("src")
				|| $(".article__video iframe").attr("src") // lolshipin
				|| $("input[id='fe_text']").attr("value")	//飞熊视频
				|| "vid="+$(".txp_value[data-role='txp-ui-console-vid']").text()
			;
			if(typeof(mCurSite.source) != "undefined" && mCurSite.source == "qq"){
				oriUrl = /vid=([^&]+)/.exec(oriText)[1];
				oriUrl = "https://v.qq.com/x/page/"+oriUrl+".html"
			}
		}catch (e) {
			debugX(e);
		}
		return encodeURIComponent(oriUrl.replace(/\?[\S]*|#[\S]*/, ""))
	}

	/**
	 * 执行站点VIP解析插入操作
	 */
	function doInsert(){
		if(mCurSite == null) return;
		TU_addStyle(mCurSite.adStyle, "tu-ad-style-remove"); // 添加部分拦截广告的规则
		var insertNode = document.createElement("span");
		insertNode.style = ";background-color:#fff700;width: 4.5rem;cursor: pointer; text-decoration: none; color: red; padding: 0px 5px; border: 1px solid red; font-size: 17px; display: inline-flex; height: 24px; line-height: 24px; margin: 0px 5px;" + mCurSite.sStyle;
		insertNode.innerHTML = "VIP解析";
		insertNode.target = "_balnk";
		insertNode.className = "acInG";
		var title = "";
		try{
			title = document.querySelector(mCurSite.title).innerText.split("   ")[0].trim();
			title = encodeURIComponent(title);
		}catch (e) {
			debugX(document.location.href);
			debugX("找不到节点：" + mCurSite.name);
			debugX(e);
		}
		title = title.replace(/VIP解析$/, "");
		var url = "https://vip.tujidu.com/vip/?url=" + getTrueUrl() + "&title=" + title;
		insertNode.dataset.url = url;
		insertNode.setAttribute("onclick", "window.open(this.dataset.url);");
		var faNodes = document.querySelectorAll(mCurSite.insertTo);

		for(var i = 0; i < faNodes.length; i++){
			if(faNodes[i].querySelector(".acInG:not([title])") == null){
				debugX("新增按钮");
				safeRemove(faNodes[i].querySelector(".acInG"));
				faNodes[i].appendChild(insertNode.cloneNode(true));
				faNodes[i].setAttribute("acIns", "");
				if(title != "") {
					faNodes[i].setAttribute("title", title);
				}
			}else{
				faNodes[i].querySelector(".acInG:not([title])").dataset.url = url;
			}
		}
	}
	debugX("数据初始化");
	initSite();
	(function(){
		TU_addStyle(".acInG:hover{color: rgba(255,200,0,30) !important;border: 1px dashed rgba(255,200,100,10) !important;text-shadow: 0 0px rgba(242,33,49,30),0 0px 0px rgba(242,33,49,30),0 1px 1px rgba(242,33,49,30),1px 0 1px rgba(242,33,49,30),-1px 0 1px rgba(242,33,49,30),0 0 1px rgba(242,33,49,30) !important;}");
		document.addEventListener('DOMNodeInserted', function (e) {
			debugX("html文档载入完成");
			if(e.target != null && e.target.className != null && e.target.id.indexOf("AC-") == 0){ return; } //屏蔽掉因为增加css导致的触发insert动作
			doInsert();
		}, false);
	})();
})();