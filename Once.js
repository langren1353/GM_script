// ==UserScript==
// @name        定时执行任务
// @description 定时执行任务函数，但是并不是绝对的精准执行，可能存在一定的时间误差
// @include     *
// @version     1.0
// @note        2021-01-18-V1.0 初始化第一版本
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==
var OnceScript = (function(){
    var _everyTTime = function(seconds, flag, callback) {
        seconds = seconds * 1000
        let lastRunAt = GM_getValue(flag, 0)
        let curTime = new Date().getTime()
        if(curTime - lastRunAt > seconds) {
            GM_setValue(flag, curTime)
            callback()
        } else {
            setTimeout(callback, curTime - lastRunAt)
        }
    }
    var everyTSeconds = function(seconds, flag, callback){
        _everyTTime(seconds, flag, callback)
    }
    var everyTMinutes = function(minutes, flag, callback){
        _everyTTime(minutes * 60, flag, callback)
    }
    var everyTHours = function(hours, flag, callback){
        _everyTTime(hours * 1440, flag, callback)
    }
    var everyTDay = function(days, flag, callback){
        _everyTTime(days * 86400 , flag, callback)
    }

    return {
        everyTSeconds,
        everyTMinutes,
        everyTHours,
        everyTDay
    }
})()