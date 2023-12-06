// ==UserScript==
// @name         AC-独家-淘宝天猫优惠券查询领取,大额优惠券,【100元购物神券】,省钱购物,领券购买更优惠,平均优惠20%
// @version      8.0
// @description  独家查询淘宝商品查询是否具有优惠券,各种大额优惠券,【3元|10元|20元|40元】优惠券领取,购物必备,特大优惠
// @author       AC
// @include      https://item.taobao.com/item.htm*
// @include      https://detail.tmall.com/item.htm*
// @include      https://s.taobao.com/search*
// @include      https://cart.taobao.com/*
// @include      *://uland.taobao.com/coupon/*
// @note         2021.11.13-V8.0 重写架构，简单页面效果即可
// @note         2017.11.17-V3.0 修复上一版过于流畅的bug，上一版更新导致的bug挺多的。。。
// @note         2017.11.17-V2.9 正常更新，尽量减少由于重定向带来的影响，同时修正规则避免出事
// @note         2017.11.17-V2.8 上个版本更新导致的bug  ...P_P...
// @note         2017.11.17-V2.7 修复优惠券获取不正确的问题，以及部分情况下无法显示优惠券的问题
// @note         2017.11.12-V2.6 简单更新
// @note         2017.11.11-V2.5 查询速度更快速，并且优化了载入情况，加入了个人数据
// @note         2017.11.10-V2.4 如果有优惠，可以展示出优惠信息了
// @note         2017.11.4-V2.3 暂时新增两种模式供选择
// @note         2017.11.2-V2.2 参照了一个大神的脚本之后拿到了一些css，于是又加了些东西，展示一些双十一相关的标签
// @note         2017.11.1-V2.1 切换为include规则，而非match规则，避免GreaseMonkey上无法使用的问题
// @note         2017.10.30-V2.0 修复在某些页面上，标题获取不正确的问题
// @note         2017.10.28-V1.0 第一版本，edit from https://greasyfork.org/zh-TW/scripts/34604
// @icon         https://gitee.com/remixAC/GM_script/raw/master/images/head.jpg
// @home-url     https://greasyfork.org/zh-TW/scripts/34606
// @run-at       document-end
// @namespace    1353464539@qq.com
// @antifeature  referral-link 含有优惠券信息以及其对应的返利链接
// @connect      api.ntaow.com
// @grant        GM_xmlhttpRequest
// @license      GPL-3.0-only
// ==/UserScript==

// 在详情页面查询优惠券，如果明显有优惠券，那么增加页面地址，并且可以跳转


const MyConfig = {
  name: '',
  id: '',
  couponPrice: 0,
  
  isValid: () => {
    return /\d+/.test(MyConfig.id)
  }
}

function init() {
  const insertCSS = `
.ac-btn-father{
  font-size: 32px;
  font-weight: bold;
  font-family: "microsoft yahei";
}
.ac-btn{
  opacity: 0.85;
  color: #f95f52;
  cursor: pointer;
}
.ac-btn:hover{
  color: #FFC800D8 !important;
  text-shadow: 0 0 rgba(242,33,49,30),0 0 0 rgba(242,33,49,30),0 1px 1px rgba(242,33,49,30),1px 0 1px rgba(242,33,49,30),-1px 0 1px rgba(242,33,49,30),0 0 1px rgba(242,33,49,30) !important;
}
`;
  const insertJS = `
const openUrl = function(node){
    if(node.dataset.url.indexOf("javascript:void") < 0) window.open(node.dataset.url);
};
`;
  const insertHTML = `
<div class="ac-btn-father">
    <span class="ac-btn ac-btn-click" data-url="javascript:void(0);" onclick="openUrl(this)">
        查找中
    </span>
    <span class="ac-btn ac-btn-click" data-url="" onclick="openUrl(this)">
        [站内搜]
    </span>
    <span class="ac-btn ac-btn-click" data-url="" onclick="openUrl(this)">
        [找相似]
    </span>
</div>

`
  MyApi.addStyle(insertCSS)
  MyApi.addScript(insertJS)
  MyApi.safeWaitFunc('div[class*="ItemHeader--root"]', node => {
    node.insertAdjacentHTML('afterend', insertHTML);
    initSite()
  })
  MyApi.safeWaitFunc('h3[class*="tb-main-title"]', node => {
    node.insertAdjacentHTML('afterend', insertHTML);
    initSite()
  })
}
function initSite() {
  MyConfig.id = MyApi.getUrlAttribute('id')
  MyConfig.name = document.querySelector('.tb-main-title, h1[class*="ItemHeader--mainTitle"]').innerText.trim()
  
  resetUrls(getUrls())
  checkCoupon()



  function getUrls() {
    const findUrl = 'https://www.ntaow.com/coupon.html?mQuery=' + encodeURIComponent(MyConfig.name)
    const innerUrl = 'https://s.taobao.com/search?q=' + encodeURIComponent(MyConfig.name)
    const similarUrl = 'https://www.ntaow.com/coupon.html?mQuery=' + encodeURIComponent(MyConfig.name)
    return [
      findUrl,
      innerUrl,
      similarUrl
    ]
  }

  function resetUrls(urls = []) {
    try{
      document.querySelectorAll('.ac-btn-click').forEach((one, index) => {
        one.setAttribute('data-url', urls[index])
      })
    }catch (e){}
  }

  function resetFindTitle(newTitle) {
    document.querySelectorAll('.ac-btn-click')[0].innerText = newTitle
  }

  async function checkCoupon() {
    if (MyConfig.isValid()) {
      const [err, res] = await MyApi.http.get('https://api.ntaow.com/api/coupon/tran?id=' + MyConfig.id)
      if (!err) {
        const { title = '', couponPrice = 0 } = JSON.parse(res)

        MyConfig.name = title
        MyConfig.couponPrice = couponPrice
        if(couponPrice > 0) {
          resetFindTitle(`${couponPrice}元优惠券！`)
        }
        resetUrls(getUrls())
      }
    }
  }
}

const MyApi = (() => {
  function addStyle(css, className = '', isReload = false){ // 添加CSS代码，不考虑文本载入时间，带有className
    var tout = setInterval(function(){
      if(document.body != null){
        clearInterval(tout);
        if(className) {
          // 节点不存在,或者是准备覆盖的时候
          if(isReload === false && document.querySelector("."+className) != null){return;}
          
          // 节点已经存在,并且不准备覆盖
          try {document.querySelector("."+className).remove();}catch (e){}
        }
        const cssNode = document.createElement("style");
        if(className) {
          cssNode.className = className;
        }
        cssNode.innerHTML = css;
        try{document.body.appendChild(cssNode);}catch (e){console.log(e.message);}
      }
    }, 200);
  }
  
  function addScript(scriptInner) {
    const scriptNode = document.createElement('script')
    scriptNode.innerText = scriptInner
    document.head.appendChild(scriptNode)
  }

  const safeWaitFunc = (selector, callbackFunc = node => {}, findTick = 200, clearAfterFind = true, timeout = 20000 * 1000) => {
    let count = timeout / findTick
    const t_id = setInterval(function() {
      if(count-- < 0) {
        clearInterval(t_id)
      }
      
      if ((typeof (selector) == "string")) {
        let selectRes = document.querySelectorAll(selector);
        if (selectRes.length <= 0) return
        if (selectRes.length === 1) selectRes = selectRes[0];
        if (clearAfterFind) clearInterval(t_id);
        callbackFunc(selectRes);
      } else if (typeof (selector) === "function") {
        const res =  selector()
        if(res.length > 0) {
          if (clearAfterFind) clearInterval(t_id);
          callbackFunc(selector()[0]);
        } else if(res) {
          if (clearAfterFind) clearInterval(t_id);
          callbackFunc();
        }
      }
    }, findTick);
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

if(typeof(acTB) == "undefined"){
  acTB = 1;
  init()
}


