// ==UserScript==
// @name            AC-自动转存百度网盘分享
// @namespace       moe.jixun.baidu.auto.save
// @version         0.5
// @description     自動轉存當前文件至上次轉存路徑。Modified from Jixun:https://greasyfork.org/zh-CN/scripts/19864
// @author          Jixun & modified by AC
// @include         /https\:\/\/(pan|yun)\.baidu\.com\/s\/[\w\d]{6}/
// @include         /http?://(pan|yun).baidu.com/share/link*/
// @note            V0.5 新增部分百度云分享链接yun.baidu.com的分享地址的支持
// @note            V0.4 modified from Jixun: 添加现在常见的百度分享地址，修改“保存到网盘”文字为“设置保存路径”
// @grant           none
// @run-at          document-end
// @license         MIT
// ==/UserScript==

(function() {
    'use strict';
    var errors = {
        0: '成功',
        5: '自己的文件',
        12: '已经保存过了',
        111: '另一保存任务进行中',
        '-33': '需要会员 (?)',
        120: '需要会员 (?)',
        130: '需要超级会员 (?)'
    };

    (function (tip, c) {
        var key = yunData.MYNAME.replace(/@/g, "") + "_transfer_save_path";
        var _recent_path = localStorage.getItem(key);
        if (!_recent_path) _recent_path = '/';
        else _recent_path = _recent_path.replace(/\?\d+/, '');

        var $ = require("base:widget/libs/jquery-1.12.4.js");
        $(".g-button[title='保存到网盘'] .text").html("设置保存路径")
        $.ajax({
            type: 'POST',
            url: '/share/transfer?shareid=' + yunData.SHARE_ID + '&from=' + yunData.SHARE_UK,
            data: {
                filelist: JSON.stringify(yunData.FILEINFO.map(function(f){ return f.path; })),
                path: _recent_path
            },
            dataType: 'json',
            success: function (data) {
                var raw = typeof data == 'string' ? $.parseJSON(data) : data;
                var err = data.errno;

                var errMsg = '';
                if (err in errors) {
                    errMsg += errors[err] + ' (' + err + ')';
                } else {
                    errMsg += '未知状态 (' + err + ')';
                }

                var msg = '保存至: ' + _recent_path + ', 状态: ' + errMsg;
                document.title = errMsg + ' - ' + document.title;

                tip.hide();
                tip.show({
                    mode: err === 0 ? 'success' : 'caution',
                    msg: msg,
                    hasClose: true,
                    autoClose: false,
                    vipType: 'svip'
                });
            }
        });

        tip.show({
            mode: 'loading',
            msg: "正在转存文件，请稍后...",
            hasClose: false,
            autoClose: false
        });
    })(
        /*tip: */require("system-core:system/uiService/tip/tip.js")
    );
})();