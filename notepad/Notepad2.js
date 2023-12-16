// ==UserScript==
// @name         N淘网，订单结果页面查看
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://shop.ntaow.com/index.php?m=admin&c=order&a=index&menuid=366
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ntaow.com
// @grant        none
// ==/UserScript==

const MyApi = (() => {
  function addStyle(css, className = '', isReload = false) { // 添加CSS代码，不考虑文本载入时间，带有className
    var tout = setInterval(function() {
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

  const safeWaitFunc = (selector, callbackFunc = node => {
  }, findTick = 200, clearAfterFind = true, timeout = 20000 * 1000) => {
    let count = timeout / findTick
    const t_id = setInterval(function() {
      if (count-- < 0) {
        clearInterval(t_id)
      }

      if ((typeof (selector) == "string")) {
        let selectRes = document.querySelectorAll(selector);
        if (selectRes.length <= 0) return
        if (selectRes.length === 1) selectRes = selectRes[0];
        if (clearAfterFind) clearInterval(t_id);
        callbackFunc(selectRes);
      } else if (typeof (selector) === "function") {
        const res = selector()
        if (res.length > 0) {
          if (clearAfterFind) clearInterval(t_id);
          callbackFunc(selector()[0]);
        } else if (res) {
          if (clearAfterFind) clearInterval(t_id);
          callbackFunc();
        }
      }
    }, findTick);
  }

  function getUrlAttribute(attribute, needDecode = true) {
    var searchValue = (window.location.search.substr(1) + "").split("&");
    for (var i = 0; i < searchValue.length; i++) {
      var key_value = searchValue[i].split("=");
      var reg = new RegExp("^" + attribute + "$");
      if (reg.test(key_value[0])) {
        var searchWords = key_value[1];
        return needDecode ? decodeURIComponent(searchWords) : searchWords;
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
})();

const tagAllFailedItem = () => {
  const colorList = [
    {
      className: 'invoce-failed',
      checkKey: '无效订单'
    },
    {
      className: 'invoce-processing',
      checkKey: '已付款'
    },
    {
      className: 'invoce-finishi',
      checkKey: '已结算'
    }
  ]

  document.querySelectorAll('.J_tablelist tbody tr').forEach(one => {
    const payRes = one.children[one.children.length - 2]
    if (payRes) {
      const trueColorItem = colorList.find(colorItem => {
        return payRes.innerText.includes(colorItem.checkKey)
      })
      one.classList.add(trueColorItem.className)
    }
  })
}


tagAllFailedItem()
MyApi.addStyle(`

.invoce-failed{
  color: white !important;
  background-color: #a5a5a5;
  opacity: 0.6;
}
.invoce-processing{
  color: black !important;
  background-color: #ffeab1;
}
.invoce-finishi{
  color: black !important;
  background-color: #faaa63;
}



`)
