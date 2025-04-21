// ==UserScript==
// @name         PVE 隐藏订阅的弹窗提示信息
// @namespace    PVE
// @version      2025-04-16
// @description  隐藏PVE/PBS弹窗信息
// @author       You
// @match        *
// @icon         https://www.proxmox.com/apple-touch-icon.png
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    const isPVEorPBS = document.title.includes('Proxmox Backup Server') || document.title.includes('Proxmox Virtual Environment');
    if (isPVEorPBS) {
        safeWaitFunc(() => {
            const res = getAllElementsByXpath("//div[contains(@class, 'x-window-closable') and (.//*[text()='无有效订阅' or text()='No valid subscription'])]")
            if (res.length > 0) {
                return res[0];
            }
            return false
        }, node => {
            if(node) {
                debugger
                node.remove();
                document.querySelectorAll('.x-css-shadow, .x-mask.x-border-box').forEach(node => node.remove());
            }
        })
    }

    function getAllElementsByXpath(xpath, contextNode) {
        var doc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
        contextNode = contextNode || doc;
        var result = [];

        try {
            var query = doc.evaluate(xpath, contextNode, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

            for (let i = 0; i < query.snapshotLength; i++) {
                var node = query.snapshotItem(i); //if node is an element node

                if (node.nodeType === 1) result.push(node);
            }
        } catch (err) {
            throw new Error(`Invalid xpath: ${xpath}`);
        } //@ts-ignore
        return result;
    }
    async function safeWaitFunc(selector, callbackFunc = node => {
    }, findTick = 200, clearAfterFind = true, timeout = 20000 * 1000, errCallback) {
        if (findTick < 20) findTick = 20
        let count = timeout / findTick
        let t_id = null
        const firstSuccess = await mainRunFunc()
        if (!clearAfterFind || !firstSuccess) {
            t_id = setInterval(mainRunFunc, findTick);
        }

        async function strRun() {
            let hasFind = false
            let selectRes = document.querySelectorAll(selector);
            if (selectRes.length <= 0) {
                hasFind = false
            }
            if (selectRes.length >= 1) {
                selectRes = selectRes[0];
                hasFind = true
            }

            if (clearAfterFind && hasFind) {
                clearId();
                await callbackFunc(selectRes)
            }
            return hasFind
        }

        async function funcRun() {
            let hasFind = false
            const res = selector()
            if (res && res.length > 0) {
                hasFind = true
                if (clearAfterFind && hasFind) clearId();
                await callbackFunc(selector()[0]);
            } else if (res) {
                hasFind = true
                if (clearAfterFind && hasFind) clearId();
                await callbackFunc(res);
            }
            return hasFind
        }

        async function mainRunFunc() {
            if (count-- < 0) {
                clearId()
                errCallback && errCallback()
            }

            if ((typeof (selector) == "string")) {
                return await strRun()
            } else if (typeof (selector) === "function") {
                return await funcRun()
            }
        }

        function clearId() {
            if (t_id) clearInterval(t_id)
        }
    }

})();
