// ==UserScript==
// @name 自动签到 - 又拍云
// @namespace ACPT
// @include *
// @run-at document-idle
// @version 2020.01.29
// MARK 这个列表是要根据具体情况更改的
// @connect console.upyun.com
// @grant   GM_getValue
// @grant   GM.getValue
// @grant   GM_setValue
// @grant   GM.setValue
// @grant   GM_notification
// @grant   GM.notification
// @grant   GM_xmlhttpRequest
// @description 又拍云自动活动签到程序
// ==/UserScript==
(function () {
  'use strict';

  var ACConfig = {};
  var DefaultConfig = {
    signdate: dateFormat('yyyy-MM-dd HH', 1579800000000), // "2020-01-24"
    signTime: 1579800000000
  };
  const SET_TIME_INT = 3 * 3600 * 1000; // 3小时

  if (typeof (GM) == "undefined") {
    // 这个是ViolentMonkey的支持选项
    GM = {};
    GM.setValue = GM_setValue;
    GM.getValue = GM_getValue;
    GM.notification = GM_notification;
  }


  /**
   * 指定日期格式化程序
   * @param fmt 格式化串
   * @param date 指定时间，或者不填
   * @returns {*|void|string}
   */
  function dateFormat(fmt, date) {
    date = date || new Date();
    (date instanceof Date) ? '' : (date = new Date(date));
    let ret;
    const opt = {
      "y+": date.getFullYear().toString(),        // 年
      "M+": (date.getMonth() + 1).toString(),     // 月
      "d+": date.getDate().toString(),            // 日
      "H+": date.getHours().toString(),           // 时
      "m+": date.getMinutes().toString(),         // 分
      "S+": date.getSeconds().toString()          // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
        fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
      }
    }
    return fmt;
  }

  function emptyPromise() {
    return new Promise(function () {});
  }

  function DealUpySign() {
    return new Promise(function (resolve, reject) {
      GM_xmlhttpRequest({
        method: "POST",
        url: "https://console.upyun.com/api/activity/signin202009",
        headers:{
          Host: 'console.upyun.com',
          Origin: 'https://www.upyun.com',
          Referer: 'https://www.upyun.com/autumnActivities',
        },
        onload: function (response) {
          let res = JSON.parse(response.responseText);
          console.log(res);
          resolve(res);
        }
      });
    })
  }

  /**
   * positive 结果处理页
   * @param res 返回的结果
   */
  function dealOK(res) {
    console.log(res);
    return emptyPromise();
  }

  /**
   * negative 结果处理页
   * @param res 返回结果
   */
  function dealFailed(res) {
    console.error("失败警告：" + res);
    GM_notification({
      'text': '网盘地址来源与上一次记录不同，记录已更新',
      'title': '网盘信息记录更新通知',
      'image': 'https://eyun.baidu.com/box-static/page-common/images/favicon.ico',
      'timeout': 5
    });
    return emptyPromise();
  }

  function addStyle(css) { //添加CSS的代码--copy的--注意里面必须是双引号
    var pi = document.createProcessingInstruction(
      'xml-stylesheet',
      'type="text/css" href="data:text/css;utf-8,' + encodeURIComponent(css) + '"'
    );
    return document.insertBefore(pi, document.documentElement);
  }

  function init() {
    Promise.all([GM.getValue("Config")]).then(function (data) {
      if (data[0] != null) {
        if(typeof(data[0]) == 'object'){
          ACConfig = data[0];
        }else{
          ACConfig = JSON.parse(data[0]);
        }
      } else {
        ACConfig = DefaultConfig;
      }
      for (var key in DefaultConfig) {
        if (typeof (ACConfig[key]) == "undefined") {
          ACConfig[key] = DefaultConfig[key];
        }
      }
      callback();
    }).catch(function (except) {
      console.log(except);
    });
    addStyle(
      "body .AC-Specil{background-color:#ef751e;}" +
      "body .AC-Hide{background-color:#424242;text-decoration: line-through;}" +
      "body .torrentname .sticky_top, body .torrentname .sticky_normal{background-color:unset;}" +
      "body .AC-Specil table{background-color:#ef751e !important;} " +
      "body .AC-Hide table{background-color:#424242;}");
    showSpecil("pthome.net");
  }

  function showSpecil(host) {
    if (location.host.indexOf(host) >= 0) {
      document.querySelectorAll(".torrents-table tr").forEach(function (pertr) {
        if (pertr.innerHTML.indexOf("免费") > 0 || pertr.innerHTML.indexOf("alt=\"2X")) {
          var tds = pertr.querySelectorAll("td");
          let hide = false;
          let GB_UseNum = 15; // 文件最大15GB
          for (var j = 0; j < tds.length; j++) {
            let pertdText = tds[j].innerText;
            if (/^(\d{1,2}.\d+\s*GB|\d{1,3}.\d+\s*MB)$/.test(pertdText)) {
              let num = parseFloat(pertdText.replace(/\s*(G|M)B/, ""));
              if (pertdText.indexOf("G") >= 0 && num < GB_UseNum || pertdText.indexOf("M") >= 0) {
                pertr.classList.add("AC-Specil");
                console.log("添加了");
                break;
              }
            } else {
              // 3位的GB，以及TB级的都隐藏
              if (/^\d+.\d+\s*(T|G)B$/.test(pertdText)) {
                hide = true;
              }
              // console.log("跳过");
            }
          }
          if (hide === true) {
            pertr.classList.add("AC-Hide");
          }
        }
      });
    }
  }

  function FuncHandle() {
    DealUpySign().then(function (res){
      // TODO 这个要修改
      let dayLeft =  30 - parseInt(dateFormat("dd")) + 1;

      let { data } = res;
      GM.notification({
        'text': '签到结果：' + JSON.stringify(data),
        'title': '又拍云签到成功 - 还有 ' + dayLeft + ' 天结束',
        'image': 'https://eyun.baidu.com/box-static/page-common/images/favicon.ico',
        'onclick': function onclick() {
          window.open("https://www.upyun.com/autumnActivities");
        },
      });
    }, dealFailed);
  }

  function callback() {
    let curTime = new Date().getTime();
    let curDate = dateFormat("yyyy-MM-dd HH", curTime);

    if (curTime - ACConfig.signTime > SET_TIME_INT) {
      new Promise(function () {
        console.log("今日 定时任务 任务执行开始");

        FuncHandle();

        // TODO 执行时间顺序不对劲
        setTimeout(function () {
          console.log("今日全部 定时任务 任务执行结束");
          ACConfig.signTime = curTime;
          ACConfig.signdate = curDate;
          GM.setValue("Config", ACConfig);
        }, 8000);
      });
    } else {
      console.log("今日已执行过任务，跳过");
    }
  }

  init();
})();
