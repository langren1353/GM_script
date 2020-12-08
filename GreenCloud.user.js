// ==UserScript==
// @name         黑五检查器
// @namespace    Run at AC
// @version      0.1
// @description  尝试在变更时进行通知
// @author       You
// @match        https://greencloudvps.com/billing/cart.php?gid=57
// @grant        GM.notification
// @grant        GM_notification
// @grant        GM.setValue
// @grant        GM.getValue
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict'

    addStyle("li[id*='feature4'], li[id*='feature6'], li[id*='feature7'], li[id*='feature8']{display: none}")

    timerDoOnce(".products", async res => {
        let shouldReload = true
        if (location.href === 'https://greencloudvps.com/billing/cart.php?gid=57') {
            setTimeout(() => {
                shouldReload && location.reload()
            }, 5000)
        }
        const array = await GM.getValue('hashSet', [])
        let newArray = []
        // 拉取网页内容
        document.querySelectorAll('.product').forEach((one, index) => {

            const fromText = array[index]
            const toText = one.innerText
            let hasChange = fromText != toText
            let link = one.querySelector("a")
            const price = one.querySelector(".price").innerText
            const title = one.querySelector("span[id*='-name']").innerText
            link.setAttribute('target', '_blank') // 目标是新窗口
            newArray.push(toText)

            if ((toText.includes('可用') || toText.includes('Available')) && hasChange) {
                // shouldReload = false
                // 尝试去拉取内容
                GM.notification({
                    'text': textChange(fromText, toText),
                    'title': title + '  ' + price,

                    'image': 'https://eyun.baidu.com/box-static/page-common/images/favicon.ico',
                    'onclick': () => {
                        window.open(link.href)
                        // shouldReload = true
                        // link.click()
                    }
                })
            }
        })
        GM.setValue('hashSet', newArray)
    }, 100)


    function textChange(value1, value2) {
        const lines1 = (value1 || '').split("\n")
        const lines2 = (value2 || '').split("\n")
        let res = ''
        for(var i = 0; i < lines1.length || i < lines2.length; i++) {
            const line1 = lines1[i] || ''
            const line2 = lines2[i] || ''

            const reg = /RAM|(?<!BF)SSD|CPU|Location/
            if(reg.test(line1) || reg.test(line2)){
                if(line1 == line2) {
                    res += line2 + '\n'
                }else{
                    res += line1 + ' ->  ' + line2 + '\n'
                }
            }
        }
        return res
    }
    function addStyle(css) { //添加CSS的代码--copy的--注意里面必须是双引号
        var pi = document.createProcessingInstruction(
          'xml-stylesheet',
          'type="text/css" href="data:text/css;utf-8,' + encodeURIComponent(css) + '"'
        );
        return document.insertBefore(pi, document.documentElement);
    }
    function timerDoOnce(node, functionName, checkTime){ // 定时执行，查找到节点后结束，只执行一次
        var tt = setInterval(function(){
            if(document.querySelector(node) != null) {
                clearInterval(tt);
                functionName();
            }
        }, checkTime)
    }
})()
