// ==UserScript==
// @name AC-从谷歌 百度 必应搜索结果中屏蔽自定义关键字
// @namespace BlockAnyThingYouWant
// @match http://www.baidu.com/*
// @match https://www.baidu.com/*
// @match https://www.google.com/*
// @match https://encrypted.google.[^\/]+/
// @match https://www.google.[^\/]+/
// @match https://www.haosou.com/
// @match https://www.youdao.com/
// @require http://code.jquery.com/jquery-1.8.0.min.js
// @icon  https://gitee.com/remixAC/GM_script/raw/master/images/head.jpg
// @author       AC
// @version 1.4
// @run-at document-start
// @description 从谷歌 百度 必应搜索结果中屏蔽自定义关键字，关键字自己确定吧
// @note 2023.07.31 V1.4 被催更了，更新一下拦截词，屏蔽一个视频规则  
// @note 2017.12.17 V1.3 修复在百度上的关键字屏蔽
// @note 2015.11.26 第一版，规则自己写吧，觉得要反馈的关键字可以在卡饭回个帖，我合适的加入
// @grant none
// ==/UserScript==

(function() {
  const ACMO = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  /*
  变量x用于                                           百度=谷歌=必应=好搜=有道
  就是黑名单,自己加入自己想要屏蔽的关键字
  */
  let blankList = "小学生作文||快播||出轨||男友||绯闻||婚恋交友||戒色||返利||百合网||算命||解梦||韩剧||八卦||房产||房地产||电子商务平台||棋牌||成人电影||加QQ||聚乙烯||合彩||机械厂||在线聊天室||聊天室||世纪佳缘||伦理片||115os||人体艺术||床戏||不雅照片||政府网站||农业信息网||特产网||网站流量||旅游信息||- 高清在线观看"; // 基本拦截规则
  blankList += "||- 百家号||- 百度文库||_百度移动应用||- 开发者搜索||·脉络||的最新相关信息||搜索智能聚合||大家还在搜"; //自己看着格式差不多加入就好

  const x = blankList.split("||");
  const $ = window.$;

//===================================================主入口=======================================================
  const mo = new ACMO(function(allmutations) {
    const hostURL = window.location.host;
    if (hostURL.includes("www.baidu")) {
      $(".c-container").each(checkRemove); // 百度
    } else if (hostURL.includes("www.google")) {
      $(".g").each(checkRemove);     // 谷歌
    } else if (hostURL.includes("haosou.com")) {
      $(".res-list").each(checkRemove); // 好搜
      $(".spread ").each(checkRemove); // 好搜
      $(".brand").each(checkRemove); // 好搜
    } else if (hostURL.includes("bing.com")) {
      $(".b_algo").each(checkRemove);    // 必应1
      $(".b_ans").each(checkRemove);    // 必应2
    } else if (hostURL.includes("youdao.com")) {
      $(".res-list").each(checkRemove);        // 有道
    }
  });
  mo.observe(document.body, { 'childList': true, 'characterData': true, 'subtree': true });

// ================================================通用处理函数==========================================================
  function checkRemove() {
    const curText = $(this).text();
    if (checkHasBlockText(curText)) {
      $(this).remove();
    }
  }
  /*遍历查表，如果在表中则返回true*/
  function checkHasBlockText(checkText) {
    for(let i = 0; i < x.length; i++) {
      const curBlockText = x[i];
      const res = checkText.includes(curBlockText);

      if(res) {
        console.log("屏蔽自定义关键字:" + x[i]);
        return true;
      }
    }
    return false;
  }
})()

