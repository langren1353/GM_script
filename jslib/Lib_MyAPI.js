// ==UserScript==
// @name Lib_MyAPI
// @namespace AC-API
// @include *
// @run-at document-start
// @version 2024.03.07
// @grant   GM_xmlhttpRequest
// @description 封装了一些常用的API，用于方便调用
// ==/UserScript==

// 避免函数污染
const ACMO = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

// 不能用unsafeWindow来暴露MyApi，否则会有http的安全问题
const MyApi = (() => {
  /**
   * @param css CSS的正文内容
   * @param className 被添加的css节点的class，用于onlyOne检测
   * @param isReload 是否自动更新：移除后重新添加
   */
  function addStyle(css, className = '', isReload = false){ // 添加CSS代码，不考虑文本载入时间，带有className
    const tout = setInterval(function() {
      if (document.body != null) {
        clearInterval(tout);
        if (className) {
          // 节点不存在,或者是准备覆盖的时候
          if (isReload === false && document.querySelector("." + className) != null) {
            return;
          }

          // 节点已经存在,并且不准备覆盖
          try {
            document.querySelector("." + className).remove();
          } catch (e) {
          }
        }
        const cssNode = document.createElement("style");
        if (className) {
          cssNode.className = className;
        }
        cssNode.innerHTML = css;
        try {
          document.body.appendChild(cssNode);
        } catch (e) {
          console.log(e.message);
        }
      }
    }, 200);
  }

  function addScript(scriptInner) {
    const scriptNode = document.createElement('script')
    scriptNode.innerText = scriptInner
    document.head.appendChild(scriptNode)
  }

  const safeWaitFunc = function waitForElm(selector, callbackFunc = node => {}, findTick = 200, clearAfterFind = true, timeout = 20000 * 1000) {
    const handle = () => {
      if ((typeof (selector) === "string")) {
        let res = document.querySelectorAll(selector);
        if(res && res.length) {
          callbackFunc(res);
        }
      } else if (typeof (selector) === "function") {
        const res =  selector()
        if(res && res.length) {
          callbackFunc(res);
        }
      }
    }
    let lastRunAt = 0 // 最近一次运行的时间
    let onlyTimer;
    const firstRunAt = Date.now()
    
    // 其他时间增加监听即可
    const watcher = new ACMO(() => {
      // 超过节流时间间隔，立即执行事件处理函数
      if(Date.now() - lastRunAt > findTick) {
        handle()
        if(clearAfterFind) {
          watcher.disconnect();
        }
        lastRunAt = Date.now()
      } else {
        // 未超过节流时间间隔，设置定时器延迟执行事件处理函数
        clearTimeout(timer);
        onlyTimer = setTimeout(() => {
          handle();
          lastRunAt = Date.now()
        }, findTick);
      }
      
      // 超过最大时限，那么停止监听
      if(Date.now() - firstRunAt > timeout) {
        watcher.disconnect();
      }
    });

    watcher.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  function getUrlAttribute(attribute, needDecode = true){
    var searchValue = (window.location.search.substr(1) + "").split("&");
    for (var i = 0; i < searchValue.length; i++) {
      var key_value = searchValue[i].split("=");
      var reg = new RegExp("^"+attribute+"$");
      if (reg.test(key_value[0])) {
        var searchWords = key_value[1];
        return needDecode?decodeURIComponent(searchWords):searchWords;
      }
    }
  }

  const http = {
    async get(url) {
      return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
          url,
          method: 'GET',
          timeout: 10000,
          onload: resp => resolve([null, resp.responseText]),
          onerror: resp => reject([resp, {}])
        })
      })
    },
    async post(url, data) {
      return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
          url,
          data,
          method: 'POST',
          timeout: 10000,
          onload: resp => resolve([null, resp.responseText]),
          onerror: resp => reject([resp, {}])
        })
      })
    }
  }

  return {
    addStyle,
    addScript,
    safeWaitFunc,
    getUrlAttribute,
    http
  }
})()
