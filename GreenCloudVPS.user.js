// ==UserScript==
// @name         GreenCloudVPS
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://greencloudvps.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=greencloudvps.com
// @grant        none
// ==/UserScript==

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

if(location.href.includes('9th-birthday-sale')) {
    // 主体页面，啥事也不做
    setTimeout(() => {
        if(document.querySelector('.main-content .header-lined').innerText.includes('發生問題了')) {
            location.reload()
        }
    }, 3000 + Math.floor(Math.random() * 3000))
} else if(location.href.includes('cart.php?a=confproduct')) {
    // 购物车初始页面
    // 点击继续，提交到购物车页面
    safeWaitFunc('#btnCompleteProductConfig', node => {
        node.click()
    })
} else if(location.href.includes('cart.php?a=view')) {
    safeWaitFunc('.btn-checkout', node => {
        node.click()
    })
} else if(location.href.includes('')) {
    safeWaitFunc('.radio-inline', () => {
        const aliPayNode = document.querySelectorAll('#paymentGatewaysContainer .radio-inline')[3]
        aliPayNode.click()
        
        // 勾上条件
        const agreeNode = document.querySelector('.text-center .checkbox-inline')
        agreeNode.click()
        
        document.querySelector('#btnCompleteOrder').click()
    })
}
