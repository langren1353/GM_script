// ==UserScript==
// @name         广告加速器
// @version      0.1
// @description  超快的广告加速器
// @author       You
// @icon    https://favicon.yandex.net/favicon/youtube.com
// @run-at       document-end
// @include      *
// @grant        unsafeWindow
// ==/UserScript==
function checkIS_H5Page() {
  return !!unsafeWindow._h5Player
}

function changeVideoSpeed(speed = 1) {
  unsafeWindow._h5Player.setPlaybackRate(speed, true)
}

function addStyle(css) { //添加CSS的代码--copy的--注意里面必须是双引号
  var pi = document.createProcessingInstruction(
    'xml-stylesheet',
    'type="text/css" href="data:text/css;utf-8,' + encodeURIComponent(css) + '"'
  );
  return document.insertBefore(pi, document.documentElement);
}

function bindEvent(event) {
  if (isEditableTarget(event.target)) return
  const keyCode = event.key.toLowerCase()
  switch (keyCode) {
    case '0':
    case '1':
      // 恢复默认速度
      changeVideoSpeed(1)
      break
    case '2':
      changeVideoSpeed(2)
      break
    case '3':
      changeVideoSpeed(4)
      break
    default:
      return
  }
  event.stopPropagation()
  event.preventDefault()
  return true
}

function isEditableTarget (htmlTarget) {
  const isEditable = htmlTarget.getAttribute && htmlTarget.getAttribute('contenteditable') === 'true';
  const isInputDom = /INPUT|TEXTAREA|SELECT/.test(htmlTarget.nodeName);
  return isEditable || isInputDom
}

function safeFunction(func) {
  try{
    func()
  }catch (e){}
}

function RAFInterval(callback, period = 50, runNow = false) {
  var shouldFinish = false
  var int_id = null
  if(runNow) {
    shouldFinish = callback()
    if (shouldFinish) return
  }
  int_id = setInterval(() => {
    shouldFinish = callback()
    shouldFinish && clearInterval(int_id)
  }, period)
}

function safeWaitFunc(selector, callbackFunc, time, notClear) {
  time = time || 60;
  notClear = notClear || false;
  let doClear = !notClear;
  RAFInterval(function () {
    if ((typeof (selector) === "string" && document.querySelector(selector) != null)) {
      callbackFunc(document.querySelector(selector));
      if (doClear) return true;
    } else if (typeof (selector) === "function" && (selector() != null || (selector() || []).length > 0)) {
      callbackFunc(selector()[0]);
      if (doClear) return true;
    }
  }, time, true);
}

function checkHasNode(selector) {
  return !!document.querySelector(selector)
}
async function timeout(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

function removeYoutubeAds() {
  let firstAdCount = 2
  let waitTime = 300

  function clickSkipAds() {
    const adUI = document.querySelector('.ytp-ad-text')
    if(adUI) {
      firstAdCount--
      if(firstAdCount >= 0) return // 跳过前几次的判定逻辑
      changeVideoSpeed(8)
      setTimeout(() => {
        changeVideoSpeed(1)
      }, 600)
    }
  }
  
  async function rapidDeal() {
    clickSkipAds()
    const hasAd = checkHasNode('.ytp-ad-text')
    if(!hasAd) {
      firstAdCount = 2
    }
    setTimeout(rapidDeal, waitTime)
  }
  
  setTimeout(rapidDeal, 300)
  // addStyle('.video-ads{display: none;}')
}

if(checkIS_H5Page) {
  document.addEventListener('keypress', bindEvent)
}
removeYoutubeAds()
