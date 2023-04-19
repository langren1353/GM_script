// ==UserScript==
// @name         广告加速器
// @version      0.1
// @description  超快的广告加速器；依赖于：https://greasyfork.org/zh-CN/scripts/381682
// @author       You
// @icon         https://favicon.yandex.net/favicon/youtube.com
// @run-at       document-end
// @include      *
// @grant        unsafeWindow
// ==/UserScript==
let autoPlaySpeed = 1 // 自动播放的时候才修改的播放速度，手动设置的时候，不修改这个值
async function checkIS_H5Page() {
  return unsafeWindow._h5Player
}

async function changeVideoSpeed(speed = 1) {
  const pageWindow = unsafeWindow
  if (pageWindow) {
    console.log('设置速度为：', speed)
    pageWindow._h5Player.setPlaybackRate(speed, true)
  }
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
      setTimeout(() => changeVideoSpeed(1), 200)
      break
    case '2':
      setTimeout(() => changeVideoSpeed(1), 200)
      break
    case '3':
      setTimeout(() => changeVideoSpeed(1), 200)
      break
    default:
      return
  }
  console.log('手动变更加速')
  event.stopPropagation()
  event.stopImmediatePropagation();
  event.preventDefault()
  event.handled = true
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
  let waitTime = 300

  function clickSkipAds() {
    // ytp-ad-text ytp-ad-skip-button-text
    const adUI = document.querySelector('.ytp-ad-text')
    const skipBtn = document.querySelector('.ytp-ad-skip-button-text')
    const bannerAdBtn = document.querySelector('.ytp-ad-overlay-close-container')
    if(skipBtn) {
      console.log('有跳过按钮出现，尝试点击跳过')
      skipBtn.click();
    }
    if(bannerAdBtn) {
      console.log('有横幅广告出现，尝试点击关闭')
      bannerAdBtn.click();
    }
    if(adUI && !adUI.innerText.includes('Ad in')) {
      console.log('出现可加速广告，尝试加速')
      autoPlaySpeed = 4
      changeVideoSpeed(autoPlaySpeed)
    } else if(autoPlaySpeed !== 1) {
      console.log('恢复默认速度1')
      autoPlaySpeed = 1
      changeVideoSpeed(autoPlaySpeed)
    }
  }

  if(location.host.includes('youtube')) {
    setInterval(clickSkipAds, waitTime)
  }
}

if(checkIS_H5Page) {
  console.log('是h5页面')
  document.addEventListener('keydown', bindEvent, true)
}
removeYoutubeAds()
