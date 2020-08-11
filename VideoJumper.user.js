// ==UserScript==
// @name        AC-html5视频广告加速器
// @description 视频速度加速器，遇到html5的视频进度广告的时候，按下 alt+0 步进广告，最好预留几秒。必须配合“计时器掌控者”一起食用
// @namespace   K
// @include     *
// @version     1.6
// @note        2020-07-12-V1.6 新增，youtube视频的自动加速
// @note        2020-01-04-V1.5 修复：谷歌的视频小广告没有自动点击掉
// @note        2020-01-04-V1.4 修复上次加上的代码导致的加速后没有自动恢复的问题 && 修复加速速度不正常的问题 && 修复youtube的广告没有正常跳过的问题
// @note        2019-12-31-V1.3 尝试自动点击跳过youtube的广告
// @note        2019-11-29-V1.2 设置默认为30Hz的，
// @run-at      document-start
// @require     https://greasyfork.org/scripts/372672-everything-hook/code/Everything-Hook.js?version=784972
// @grant       none
// ==/UserScript==

var _NORMAL_HZ = 50;
var Config = {
  userHz: _NORMAL_HZ
};


~function (global) {

  var workerURLs = [];
  var extraElements = [];

  var helper = function (eHookContext, timerContext, util) {
    return {
      applyGlobalAction: function (timer) {
        // 界面半圆按钮点击的方法
        timer.changeTime = function (anum, cnum, isa, isr) {
          if (isr) {
            global.timer.change(1);
            return;
          }
          if (!global.timer) {
            return;
          }
          var result;
          if (!anum && !cnum) {
            var t = prompt("输入欲改变计时器变化倍率（当前：" + 1 / timerContext._percentage + "）");
            if (t == null) {
              return;
            }
            if (isNaN(parseFloat(t))) {
              alert("请输入正确的数字");
              timer.changeTime();
              return;
            }
            if (parseFloat(t) <= 0) {
              alert("倍率不能小于等于0");
              timer.changeTime();
              return;
            }
            result = 1 / parseFloat(t);
          } else {
            if (isa && anum) {
              if (1 / timerContext._percentage <= 1 && anum < 0) {
                return;
              }
              result = 1 / (1 / timerContext._percentage + anum);
            } else {
              if (cnum < 0) {
                cnum = 1 / -cnum
              }
              result = 1 / ((1 / timerContext._percentage) * cnum);
            }
          }
          timer.change(result);
        };
        global.XchangeTime = timer.changeTime;
      },
      applyHooking: function () {
        // 劫持循环计时器
        eHookContext.hookReplace(window, 'setInterval', function (setInterval) {
          return function () {
            // 储存原始时间间隔
            arguments[2] = arguments[1];
            // 获取变速时间间隔
            arguments[1] *= timerContext._percentage;
            var resultId = setInterval.apply(window, arguments);
            // 保存每次使用计时器得到的id以及参数等
            timerContext._intervalIds[resultId] = {
              args: arguments,
              nowId: resultId
            };
            return resultId;
          };
        });
        // 劫持循环计时器的清除方法
        eHookContext.hookBefore(window, 'clearInterval', function (method, args) {
          var id = args[0];
          if (timerContext._intervalIds[id]) {
            args[0] = timerContext._intervalIds[id].nowId;
          }
          // 清除该记录id
          delete timerContext._intervalIds[id];
        });
        // 劫持循环计时器的清除方法
        eHookContext.hookBefore(window, 'clearTimeout', function (method, args) {
          var id = args[0];
          if (timerContext._intervalIds[id]) {
            args[0] = timerContext._intervalIds[id].nowId;
          }
          // 清除该记录id
          delete timerContext._intervalIds[id];
        });
        // 劫持单次计时器setTimeout
        eHookContext.hookBefore(window, 'setTimeout', function (method, args) {
          args[1] *= timerContext._percentage;
        });
        var newFunc = this.getHookedDateConstructor();
        eHookContext.hookClass(window, 'Date', newFunc, '_innerDate', ['now']);
        Date.now = function () {
          return new Date().getTime();
        };
        eHookContext.hookedToString(timerContext._Date.now, Date.now);
        var objToString = Object.prototype.toString;

        eHookContext.hookAfter(Object.prototype, 'toString', function (m, args, result) {
          if (this instanceof timerContext._mDate) {
            return '[object Date]';
          } else {
            return result;
          }
        }, false);

        eHookContext.hookedToString(objToString, Object.prototype.toString);
        eHookContext.hookedToString(timerContext._setInterval, setInterval);
        eHookContext.hookedToString(timerContext._setTimeout, setTimeout);
        eHookContext.hookedToString(timerContext._clearInterval, clearInterval);
        timerContext._mDate = window.Date;
        this.hookShadowRoot();
      },
      getHookedDateConstructor: function () {
        return function () {
          if (arguments.length === 1) {
            Object.defineProperty(this, '_innerDate', {
              configurable: false,
              enumerable: false,
              value: new timerContext._Date(arguments[0]),
              writable: false
            });
            return;
          } else if (arguments.length > 1) {
            var definedValue;
            switch (arguments.length) {
              case 2:
                definedValue = new timerContext._Date(
                  arguments[0],
                  arguments[1]
                );
                break;
              case 3:
                definedValue = new timerContext._Date(
                  arguments[0],
                  arguments[1],
                  arguments[2],
                );
                break;
              case 4:
                definedValue = new timerContext._Date(
                  arguments[0],
                  arguments[1],
                  arguments[2],
                  arguments[3],
                );
                break;
              case 5:
                definedValue = new timerContext._Date(
                  arguments[0],
                  arguments[1],
                  arguments[2],
                  arguments[3],
                  arguments[4]
                );
                break;
              case 6:
                definedValue = new timerContext._Date(
                  arguments[0],
                  arguments[1],
                  arguments[2],
                  arguments[3],
                  arguments[4],
                  arguments[5]
                );
                break;
              default:
              case 7:
                definedValue = new timerContext._Date(
                  arguments[0],
                  arguments[1],
                  arguments[2],
                  arguments[3],
                  arguments[4],
                  arguments[5],
                  arguments[6]
                );
                break;
            }

            Object.defineProperty(this, '_innerDate', {
              configurable: false,
              enumerable: false,
              value: definedValue,
              writable: false
            });
            return;
          }
          var now = timerContext._Date.now();
          var passTime = now - timerContext.__lastDatetime;
          var hookPassTime = passTime * (1 / timerContext._percentage);
          // console.log(__this.__lastDatetime + hookPassTime, now,__this.__lastDatetime + hookPassTime - now);
          Object.defineProperty(this, '_innerDate', {
            configurable: false,
            enumerable: false,
            value: new timerContext._Date(timerContext.__lastMDatetime + hookPassTime),
            writable: false
          });
        };
      },
      /**
       * 当计时器速率被改变时调用的回调方法
       * @param percentage
       * @private
       */
      percentageChangeHandler: function (percentage) {
        // 改变所有的循环计时
        util.ergodicObject(timerContext, timerContext._intervalIds, function (idObj, id) {
          idObj.args[1] = Math.floor(idObj.args[2] * percentage);
          // console.log(idObj.args[1]);
          // 结束原来的计时器
          this._clearInterval.call(window, idObj.nowId);
          // 新开一个计时器
          idObj.nowId = this._setInterval.apply(window, idObj.args);
        });
      },
      hookShadowRoot: function () {
        var origin = Element.prototype.attachShadow;
        eHookContext.hookAfter(Element.prototype, 'attachShadow',
          function (m, args, result) {
            extraElements.push(result);
            return result;
          }, false);
        eHookContext.hookedToString(origin, Element.prototype.attachShadow);
      }
    }
  };

  var normalUtil = {
    isInIframe: function () {
      let is = global.parent !== global;
      try {
        is = is && global.parent.document.body.tagName !== 'FRAMESET'
      } catch (e) {
        // ignore
      }
      return is;
    },
    listenParentEvent: function (handler) {
      global.addEventListener('message', function (e) {
        var data = e.data;
        var type = data.type || '';
        if (type === 'changePercentage') {
          handler(data.percentage || 0);
        }
      })
    },
    sentChangesToIframe: function (percentage) {
      var iframes = document.querySelectorAll('iframe') || [];
      var frames = document.querySelectorAll('frame');
      if (iframes.length) {
        for (var i = 0; i < iframes.length; i++) {
          iframes[i].contentWindow.postMessage(
            {type: 'changePercentage', percentage: percentage}, '*');
        }
      }
      if (frames.length) {
        for (var j = 0; j < frames.length; j++) {
          frames[j].contentWindow.postMessage(
            {type: 'changePercentage', percentage: percentage}, '*');
        }
      }
    }
  };

  var querySelectorAll = function (ele, selector, includeExtra) {
    var elements = ele.querySelectorAll(selector);
    elements = Array.prototype.slice.call(elements || []);
    if (includeExtra) {
      extraElements.forEach(function (element) {
        elements = elements.concat(querySelectorAll(element, selector, false));
      })
    }
    return elements;
  };

  var generate = function () {
    return function (util) {
      // disable worker
      workerURLs.forEach(function (url) {
        if (util.urlMatching(location.href, 'http.*://.*' + url + '.*')) {
          window['Worker'] = undefined;
          console.log('Worker disabled');
        }
      });
      var eHookContext = this;
      var timerHooker = {
        // 用于储存计时器的id和参数
        _intervalIds: {},
        // 计时器速率
        __percentage: 1.0,
        // 劫持前的原始的方法
        _setInterval: window['setInterval'],
        _clearInterval: window['clearInterval'],
        _clearTimeout: window['clearTimeout'],
        _setTimeout: window['setTimeout'],
        _Date: window['Date'],
        __lastDatetime: new Date().getTime(),
        __lastMDatetime: new Date().getTime(),
        videoSpeedInterval: 1000,
        /**
         * 初始化方法
         */
        init: function () {
          var timerContext = this;
          var h = helper(eHookContext, timerContext, util);

          h.applyHooking();

          // 设定百分比属性被修改的回调
          Object.defineProperty(timerContext, '_percentage', {
            get: function () {
              return timerContext.__percentage;
            },
            set: function (percentage) {
              if (percentage === timerContext.__percentage) {
                return percentage;
              }
              h.percentageChangeHandler(percentage);
              timerContext.__percentage = percentage;
              return percentage;
            }
          });

          if (!normalUtil.isInIframe()) {
            console.log('[TimeHooker]', 'loading outer window...');
            h.applyGlobalAction(timerContext);
          } else {
            console.log('[TimeHooker]', 'loading inner window...');
            normalUtil.listenParentEvent((function (percentage) {
              console.log('[TimeHooker]', 'Inner Changed', percentage)
              this.change(percentage);
            }).bind(this))
          }
        },
        /**
         * 调用该方法改变计时器速率
         * @param percentage
         */
        change: function (percentage) {
          var _this = this;
          this.__lastMDatetime = this._mDate.now();
          // console.log(this._mDate.toString());
          // console.log(new this._mDate());
          this.__lastDatetime = this._Date.now();
          // debugger;
          //---------------------------------//
          this._percentage = percentage;
          var oldNode = document.getElementsByClassName('_th-click-hover');
          var oldNode1 = document.getElementsByClassName('_th_times');
          (oldNode[0] || {}).innerHTML = 'x' + 1 / this._percentage;
          (oldNode1[0] || {}).innerHTML = 'x' + 1 / this._percentage;
          var a = document.getElementsByClassName('_th_cover-all-show-times')[0] || {};
          // console.log(a.className);
          a.className = '_th_cover-all-show-times';
          this._setTimeout.bind(window)(function () {
            a.className = '_th_cover-all-show-times _th_hidden';
          }, 100);
          this.changeVideoSpeed();
          this._clearInterval.bind(window)(this.videoSpeedIntervalId);
          this.videoSpeedIntervalId = this._setInterval.bind(window)(function () {
            _this.changeVideoSpeed();
            var rate = 1 / _this._percentage;
            if (rate === 1) {
              _this._clearInterval.bind(window)(_this.videoSpeedIntervalId);
            }
          }, this.videoSpeedInterval);
          normalUtil.sentChangesToIframe(percentage);
        },
        changeVideoSpeed: function () {
          var rate = 1 / this._percentage;
          rate > 16 && (rate = 16);
          rate < 0.065 && (rate = 0.065);
          // console.log(rate);
          var videos = querySelectorAll(document, 'video', true) || [];
          if (videos.length) {
            for (var i = 0; i < videos.length; i++) {
              videos[i].playbackRate = rate;
            }
          }
        }
      };
      // 默认初始化
      timerHooker.init();
      return timerHooker;
    }
  };

  function addStyle(css) { //添加CSS的代码--copy的
    let pi = document.createProcessingInstruction(
      'xml-stylesheet',
      'type="text/css" must="false" href="data:text/css;utf-8,' + encodeURIComponent(css) + '"'
    );
    return document.insertBefore(pi, document.documentElement);
  }

  /**
   * @param callback 回调函数，需要返回是否结束True、False、否则相当于定时器
   * callback return:
   *  true = 倒计时
   *  false = 计时器
   *  none = 计时器
   * @param period 周期，如:200ms
   */
  function RAFInterval(callback, period, runNow) {
    // 一秒60次，对应1秒1000ms
    const needCount = period / 1000 * 60;
    let times = 0; // 已经计数的数量

    if(runNow === true){ // 对于立即执行函数的立即判定，否则进行
      const shouldFinish = callback();
      if(shouldFinish) return;
    }

    function step() {
      if(times < needCount){
        // 计数未结束-继续计数
        times++;
        requestAnimationFrame(step)
      }else{
        // 计数结束-停止计数，判定结果
        const shouldFinish = callback() || false;
        if(!shouldFinish){
          // 返回值为false，重启计数器
          times = 0;
          requestAnimationFrame(step)
        }else{
          // 返回值为true，结束计数器
          return
        }
      }
    }
    requestAnimationFrame(step);
  }


  function autoClickYoutubeAd() {
    if (location.host.indexOf("youtube.com") >= 0) {
      // addStyle(".video-ads .ad-container .adDisplay, #player-ads, .ytp-ad-module, .ytp-ad-image-overlay{ display: none!important; }");
      setInterval(function () {
        var adPassBtn = (document.querySelector(".ytp-ad-skip-button ") || document.querySelector(".videoAdUiSkipButton ")) || document.querySelector(".ytp-ad-overlay-close-container");
        adPassBtn && adPassBtn.click();
        if (document.querySelector(".ytp-ad-preview-container") != null) {
          console.log("准备加速");
          XchangeTime(0, 100);
          // 100倍速度，那么需要：10秒 = 0.1秒 = 100 ms
          RAFInterval(function () {
            console.log("结束");
            XchangeTime(0, 0, false, true);
            return true;
          }, 600);
        }
      }, 1200)
    }
  }

  if (global.eHook) {
    global.eHook.plugins({
      name: 'timer',
      /**
       * 插件装载
       * @param util
       */
      mount: generate()
    });
  }


  /*********************************************************************************************
   * 这里的函数不能使用GM_setValue以及GM_getValue方法，因为他们似乎调用了原始的setTimeout导致hook失败
   *************************************************************************************************/
  document.addEventListener("keydown", function (env) {
    // 如果按下的是 alt+'+' 那么直接前进10秒
    if (env.key == '0' && env.altKey == true) {
      console.log("开始");
      XchangeTime(0, 50);
      // 100倍速度，那么需要：10秒 = 0.1秒 = 100 ms
      RAFInterval(function () {
        console.log("结束");
        XchangeTime(0, 0, false, true);
        return true;
      }, 200); // 目标 = 10秒
    }
  });

  autoClickYoutubeAd();
}(window);
