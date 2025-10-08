// ==UserScript==
// @name    AC-baidu-重定向优化百度搜狗谷歌必应搜索_favicon_双列
// @name:en    AC-baidu-google_sogou_bing_RedirectRemove_favicon_adaway_TwoLine
// @name:zh    AC-baidu-重定向优化百度搜狗谷歌必应搜索_favicon_双列
// @name:ja    AC-baidu-重定向最適化Baiduの搜狗のGoogleのBing検索結果のリダイレクト除去+favicon
// @description  1.繞過百度、搜狗、谷歌、好搜搜索結果中的自己的跳轉鏈接，直接訪問原始網頁-反正都能看懂 2.新增自定义网站拦截功能 3添加Favicon显示 4.页面CSS 5.添加计数 6.开关选择以上功能 7.自动翻页功能
// @description:en  1.bypass the redirect link at baidu\sogou\google\haosou; 2.remove ads at baidu; 3.add Favicon for each website; 4.render your own style; 5.counter; 6.Switch to handle all 7.Auto Pager
// @description:ja  1.迂回Baidu、Sogou、Google、Haosou検索検索結果の中の自分の遷移リンク; 2.Baiduの余分な広告を取り除く; 3.コメントを追加; 4.ページのカスタムCSP; 5.カウントを追加; 6.スイッチは以上の機能を選択します; 7.自動ページめくり.
// @icon    https://ae01.alicdn.com/kf/Hac1a58055c5047cdb91349e91aa208d5k.jpg
// @author     AC
// @license    GPL-3.0-only
// @create     2015-11-25
// @run-at     document-body
// @version    26.99
// @connect    baidu.com
// @connect    google.com
// @connect    google.com.hk
// @connect    google.com.jp
// @connect    bing.com
// @connect    duckduckgo.com
// @connect    dogedoge.com
// @connect    so.com
// @include    *://ipv6.baidu.com/*
// @include    *://www.baidu.com/*
// @include    *://www1.baidu.com/*
// @include    *://m.baidu.com/*
// @include    *://xueshu.baidu.com/s*
// @include    *://www.so.com/s?*
// @include    *://*.bing.com/*
// @include    *://encrypted.google.*/search*
// @include    *://*.google*/search*
// @include    *://scholar.google.com/scholar*
// @include    *://*.google*/webhp*
// @include    *://*.zhihu.com/*
// @include    *://*duckduckgo.com/*
// @include    *://*.dogedoge.com/*
// @exclude    *://*.google*/sorry*
// @exclude    https://zhidao.baidu.com/*
// @exclude    https://*.zhidao.baidu.com/*
// @exclude    https://www.baidu.com/img/*
// @exclude    https://lens.google.com/*
// @supportURL  https://joinqq.90dao.com
// @home-url   https://greasyfork.org/zh-TW/scripts/14178
// @home-url2  https://github.com/langren1353/GM_script
// @homepageURL  https://greasyfork.org/zh-TW/scripts/14178
// @copyright  2015-2023, AC
// @lastmodified  2024-08-06
// @feedback-url  https://github.com/langren1353/GM_script
// @note    2024.08-06-V26.99 feature：增加样式表的缓存功能；修复谷歌等正常样式；本版本为自有面板的最后一版，后续将转移到外部面板设置
// @note    2024.03-05-V26.10 fix: 谷歌白屏的问题；再次支持鸭鸭搜索引擎，鸭鸭三列支持；baidu\Google双列功能
// @note    2023.12-16-V26.07 日常维护；优化各页面加载卡顿的问题，优化搜索引擎显示效果
// @note    2023.06-19-V26.06 修复谷歌显示效果的错位问题等，修复谷歌异常白屏问题
// @note    2022.12-07-V26.04 修复必应错位问题；优化谷歌双列动画问题
// @note    2022.08-23-V26.03 修复因背景图引起的看不清字的问题;修复百度单列错位问题;修复google自定义按钮不可见
// @note    2022.08-23-V26.02 加快代码执行速度；减少动画撕裂；替换CDN的md5库
// @note    2022.08-22-V26.01 因甲癌手术和公司事务停更了2个月，目前补上，推荐更新。 1.修复百度加载缓慢的问题；2.修复谷歌样式加载顺序异常的问题；3.整体优化样式加载时间，更流畅了
// @note    2022.06-18-V25.09 修复可能出现的脚本参数读取失败导致的脚本不执行的异常 & 修复 拦截规则特殊参数的问题 & 更换CDN地址
// @note    2022.06-16-V25.06 优化重定向逻辑，部分网站只需要稍作处理，不用做接口请求了，感谢众多搜索引擎的版本迭代更新
// @note    2022.04-08-V25.05 主要修复Block功能；其次优化样式加载速度-减少撕裂感
// @note    2022.03-07-V25.04 修复谷歌、必应样式问题；修复并优化拦截功能
// @note    2022.01-29-V25.02 修复谷歌、百度、必应的部分样式错位的问题
// @note    2021.12-06-V25.01 修复百度样式偏左 & 修复谷歌样式显示
// @note    2021.10-31-V24.29 fixed Less requirement for faster Load
// @note    2021.10-29-V24.27 移除必应能选择的广告；增加自定义样式less的支持
// @note    2021.09-02-V24.26 修复必应多favicon，修复百度百科问题；修复谷歌一个小问题
// @note    2021.07-16-V24.25 修复一个bug；兼容百度下搜索股票tag；
// @note    2021.06-15-V24.24 更换cdn地址
// @note    2017.05.12 -> 2021.06-15 && V8.6 -> V24.24 各种各样的历史更新记录，从一个版本迭代到另一个版本
// @note    2017.05.12-V8.4 新增：默认屏蔽谷歌的安全搜索功能
// @note    2017.05.05-V8.3 修复include范围太小导致的百度知道的屏蔽问题
// @note    2017.05.04-V8.2 终于修复了百度知道图片替换了文字的这个大BUG; 顺便处理了superapi.zhidao.baidu.com; 新增谷歌搜索结果重定向去除
// @note    2017.05.04-V8.1 终于修复了百度知道图片替换了文字的这个大BUG，顺便处理了superapi.zhidao.baidu.com
// @note    2017.05.04-V8.0 终于修复了百度知道图片替换了文字的这个大BUG，待测试
// @note    2017.03.28-V7.6 修复在ViolentMonkey上的不支持的问题
// @note    2017.03.28-V7.5 尝试修复chrome上的问题
// @note    2017.03.21-V7.4 尝试处理Edge上不支持的问题，结果发现是Edge本身的TamperMonkey支持有问题
// @note    2017.03.19-V7.3 修复打开百度之后再次点击“百度一下”导致的无法更新重定向问题
// @note    2017.03.19-V7.2 未知原因chrome的MutationObserver无法使用了，继续回归以前的DOMNodeInserted
// @note    2017.02.17-V7.0 修复搜狗的搜索结果重定向问题+改个名字
// @note    2017.02.17-V6.9 修复搜狗的搜索结果重定向问题
// @note    2016.10.27-V6.7 修复了以前的重复请求，现在的请求数应该小了很多，网络也就不卡了，感觉萌萌哒
// @note    2016.04.24-V6.6 恢复以前的版本，因为兼容性问题
// @note    2015.12.01-V5.0 加入搜狗的支持，但是支持不是很好
// @note    2015.11.25-V2.0 优化，已经是真实地址的不再尝试获取
// @note    2015.11.25-V1.0 完成去掉百度重定向的功能
// @resource  baiduCommonStyle   https://ibaidu.tujidu.com/newcss/baiduCommonStyle.less?t=26.09
// @resource  baiduOnePageStyle  https://ibaidu.tujidu.com/newcss/baiduOnePageStyle.less?t=26.09
// @resource  baiduTwoPageStyle  https://ibaidu.tujidu.com/newcss/baiduTwoPageStyle.less?t=26.09
// @resource  googleCommonStyle  https://ibaidu.tujidu.com/newcss/googleCommonStyle.less?t=26.09
// @resource  googleOnePageStyle https://ibaidu.tujidu.com/newcss/googleOnePageStyle.less?t=26.09
// @resource  googleTwoPageStyle https://ibaidu.tujidu.com/newcss/googleTwoPageStyle.less?t=26.09
// @resource  bingCommonStyle    https://ibaidu.tujidu.com/newcss/bingCommonStyle.less?t=26.09
// @resource  bingOnePageStyle   https://ibaidu.tujidu.com/newcss/bingOnePageStyle.less?t=26.09
// @resource  bingTwoPageStyle   https://ibaidu.tujidu.com/newcss/bingTwoPageStyle.less?t=26.09
// @resource  duckCommonStyle    https://ibaidu.tujidu.com/newcss/duckCommonStyle.less?t=26.09
// @resource  duckOnePageStyle   https://ibaidu.tujidu.com/newcss/duckOnePageStyle.less?t=26.09
// @resource  duckTwoPageStyle   https://ibaidu.tujidu.com/newcss/duckTwoPageStyle.less?t=26.09
// @resource  dogeCommonStyle    https://ibaidu.tujidu.com/newcss/dogeCommonStyle.less?t=26.09
// @resource  dogeOnePageStyle   https://ibaidu.tujidu.com/newcss/dogeOnePageStyle.less?t=26.09
// @resource  dogeTwoPageStyle   https://ibaidu.tujidu.com/newcss/dogeTwoPageStyle.less?t=26.09
// @resource  MainHuYanStyle     https://ibaidu.tujidu.com/newcss/HuYanStyle.less?t=26.09
// @resource  BgAutoFit          https://ibaidu.tujidu.com/newcss/BgAutoFit.less?t=26.09
// @resource  baiduLiteStyle     https://gitcode.net/-/snippets/1906/raw/master/LiteStyle.css?inline=false
// @require https://lib.baomitu.com/vue/2.6.14/vue.min.js
// @require https://lib.baomitu.com/less.js/4.1.2/less.min.js
// @require https://lib.baomitu.com/md5-wasm/1.2.0/md5-wasm.min.js
// @grant    GM_getValue
// @grant    GM.getValue
// @grant    GM_setValue
// @grant    GM.setValue
// @grant    GM_addStyle
// @grant    GM_getResourceURL
// @grant    GM_listValues
// @grant    GM.getResourceUrl
// @grant    GM_xmlhttpRequest
// @grant    GM_getResourceText
// @grant    GM_registerMenuCommand
// @grant    unsafeWindow
// ==/UserScript==
// calc(X1(vw) + X2(px)) -> B(px) 使用 http://www.yunsuan.info/matrixcomputations/solvelinearsystems.html 进行计算
!function () {
  let isdebug = false; // 调试日志用
  let isLocalDebug = false; // 加载本地资源用，调试的时候小心GM的缓存机制
  let debug = isdebug ? console.log.bind(console) : ()=>{}
  let acCssLoadFlag = false;

  let inExtMode = typeof (isExtension) !== "undefined";
  let inGMMode = typeof (GM_info.scriptHandler) !== "undefined"; // = "Greasemonkey" || "Tampermonkey" || "ViolentMonkey"
  // inExtMode & inGMMode
  // true    true =扩展下的GM代码 不执行
  // true    false=扩展下代码 执行
  // false  true =仅GM代码 执行
  // false  false=异常 但是还是要执行代码
  debug("程序开始");
  if (inExtMode === true && inGMMode === true || typeof(window.AC666Init) !== 'undefined') {
    console.log("扩展模式-脚本不启用");
    return;
  }
  window.AC666Init = true
  if (typeof (GM) === "undefined") {
    // 这个是ViolentMonkey的支持选项
    GM = {};
    GM.setValue = GM_setValue;
    GM.getValue = GM_getValue;
  }
  // 增加了一个css的缓冲层，保证多次CSS操作不导致页面卡顿，减少重排的次数
  class FlushDomFragment {
    constructor() {
      this.init()
    }

    init() {
      this.length = 0

      this.fragmentHead = document.createDocumentFragment();
      this.fragmentBody = document.createDocumentFragment();
      this.fragmentDOM = document.createDocumentFragment();

      this.reloadList = [] // 所有需要动态刷新的都在这里面
    }

    _removeReload() {
      this.reloadList.map(selector => {
        safeRemove(selector)
      })
    }

    _singleInsert(node, toDom, checkDom) {
      if(node) {
        const { dataset: { xclass: selector = '' } = {}, tagName = '' } = node
        if(tagName.toUpperCase() === 'STYLE') {
          if(selector) {
            if(checkDom.querySelector(selector)) return
          } else {
            console.error('出现没有样式的节点', node)
          }
        }

        toDom.appendChild(node)

        this.length += 1
        debug('增加节点', node)
        debug('长度变化', this.length)
      }
    }

    // 如果CSS已经存在了，那么就不再添加了
    _dropMultiCSS(fragment) {
      const newFrag = document.createDocumentFragment();
      [...fragment.childNodes].map(node => {
        this._singleInsert(node, newFrag, document)
      })
      return newFrag
    }

    flush() {
      if(this.length > 0) { // 有数据，才进行flush，否则没有必要
        this._removeReload()

        // MARK 保证线程安全，将现有数据暂存，然后生成新的节点，避免其他js插入后丢失
        const curBodyFrag = this.fragmentBody
        const curHeadFrag = this.fragmentHead
        const curDomFrag = this.fragmentDOM

        this.init()

        // 数据清除
        const newBodyFrag = this._dropMultiCSS(curBodyFrag)
        const newHeadFrag = this._dropMultiCSS(curHeadFrag)
        const newDomFrag = this._dropMultiCSS(curDomFrag)

        debug('数据flush1', newBodyFrag.children.length)
        debug('数据flush2', newHeadFrag.children.length)
        debug('数据flush3', newDomFrag.children.length)

        safeWaitFunc("body", body => {
          document.body.appendChild(newBodyFrag)
        })
        safeWaitFunc("head", body => {
          document.head.appendChild(newHeadFrag)
        })
        while (newDomFrag.firstChild) {
          document.head.insertBefore(newDomFrag, document.head.firstChild)
        }
      }
    }

    appendChild(node, to = 'head', config = {
      isReload: false
    }) {
      return this.insert(node, to, config)
    }

    insert(node, to = 'head', config= {
      isReload: false
    }) {

      if (to === 'body') {
        this._singleInsert(node, this.fragmentBody, this.fragmentBody)
      } else if(to === 'head') {
        this._singleInsert(node, this.fragmentHead, this.fragmentHead)
      } else if(to === 'DOM') {
        this._singleInsert(node, this.fragmentDOM, this.fragmentDOM)
      } else{
        console.error('不支持的节点操作')
        return
      }

      const { isReload } = config
      if(isReload) {
        const { classList = [] } = node
        if(classList.length) {
          this.reloadList.push('.' + [...(node.classList || [])].join('.'))
        } else {
          console.error('异常的reload参数，没有classList', node)
        }
      }
      return this
    }
  }

  function safeRemoveAd(cssSelectorOrNodeList) {
    safeRemove(cssSelectorOrNodeList, {
      withAni: false,
      isAd: true // 标志是广告
    })
  }

  function safeRemove(cssSelectorOrNodeList, option = {
    withAni: false, // 带动效的删除
    isAd: false // true = 有日志，false = 无日志
  }) {
    safeFunction(() => {
      const { withAni = false, isAd = false} = option

      let removeNodes = cssSelectorOrNodeList
      if(typeof cssSelectorOrNodeList === 'string') {
        removeNodes = document.querySelectorAll(cssSelectorOrNodeList);
      }
      if(removeNodes.length) {
        if(isAd) {
          console.log(`删除广告节点：${removeNodes.length}个`)
          console.table(removeNodes)
        }
        for (let i = 0; i < removeNodes.length; i++) {
          aniRemove(removeNodes[i], withAni)
        }
      }
    })
  }

  function aniRemove(node, withAni) {
    if(withAni) {
      node.classList.add('aniDelete')
      setTimeout(() => {
        node.remove();
      }, 200)
    } else {
      node.remove();
    }
  }

  function safeFunction(func, failCb) {
    try {
      func();
    } catch (e) {
      failCb && failCb()
    }
  }

  /**
   * 
   * @param callback interval执行的函数，【注意this指针】
   * @param timeout 时间周期
   * @param slowAfterTime 等待多少时间后，调整时间周期
   * @param newTimeout 新的时间周期
   * @returns {{cancel: intervalInstance.cancel, reNew: intervalInstance.reNew, clear: intervalInstance.clear}}
   */
  function setSlowInterval(callback = instance => {}, timeout = 50, slowAfterTime = 6000, newTimeout = 1500) {
    const runAt = new Date().getTime()
    let _timeout = timeout
    let shouldPause = false
    let shouldEnd = false
    let intervalInstance = {
      reNew: () => {
        shouldPause = false
        _timeout = new Date().getTime()
      },
      pause: () => {
        shouldPause = true
      },
      cancel: () => {
        shouldEnd = true
      }
    }
    
    function newCallBack() {
      const deltaT = new Date().getTime() - runAt
      if(deltaT > slowAfterTime) {
        _timeout = newTimeout
      }
      
      if(shouldEnd) {
        return
      }
      
      if(!shouldPause) {
        callback(intervalInstance)
        setTimeout(newCallBack, _timeout)
      } else {
        setTimeout(() => {}, 5000)
      }
    }
    
    newCallBack()
    return intervalInstance
  }

  /**
   * 每隔多少周期执行一次callback，减少调用周期
   * 会先执行一次callback，然后开始计数
   * 
   * @param callback 回调函数，【注意this指针】
   * @param countPeriod 每隔多少周期
   */
  function setCountFunction(callback, countPeriod) {
    let t = 0
    
    if(t % countPeriod === 0) {
      callback()
      t ++
    }
  }

  function safeWaitFunc(selector, callbackFunc, time, notClear) {
    time = time || 60;
    notClear = notClear || false;
    let doClear = !notClear;
    setSlowInterval(instance => {
      if ((typeof (selector) === "string" && document.querySelector(selector) != null)) {
        callbackFunc(document.querySelector(selector));
        if (doClear) instance.pause();
      } else if (typeof (selector) === "function" && (selector() != null || (selector() || []).length > 0)) {
        callbackFunc(selector()[0]);
        if (doClear) instance.pause();
      }
    }, time);
  }

  (function () {
    debug("程序执行");
    let needDisplayNewFun = true; // 本次更新是否有新功能需要展示
    if (window.NodeList && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (let i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
        }
      };
    }
    GM_registerMenuCommand('AC-重定向脚本设置', function() {
      document.querySelector("#sp-ac-content").style.display = 'block';
    });
    GM_registerMenuCommand('脚本重置 - 修复脚本', function() {
      GM_setValue('Config', '{}');
      localStorage.setItem('ACConfig', '{}');
      location.reload();
    });
    // let RedirectMap = new Map();
    let ACConfig = {};
    let DBConfig = {}; // 仅作为普通ACConfig的原始备份，在其他非关键位置时进行保存使用
    /*存在对未初始化变量的初始化赋值-无需担心迭代兼容问题*/
    let DefaultConfig = {
      isRedirectEnable: false, // 是否开启重定向功能
      isAdsEnable: false, // 是否开启去广告模式
      isAutopage: true, // 是否开启自动翻页功能
      isBlockEnable: false, // 是否开启去拦截模式
      isBlockDisplay: false, // 是否删除已拦截的条目
      isBlockBtnNotDisplay: false, // 是否显示block按钮
      AdsStyleEnable: true, // 是否开启自定义样式模式

      baidu: {
        name: 'baidu', // CSS load 的前缀标志
        AdsStyleMode: '1', // 0-不带css；1-单列靠左；2-单列居中；3-双列居中
        HuYanMode: false, // 护眼模式-百度
        defaultBgUrl: '', // 默认背景图
        BgFit: true,
      },
      google: {
        name: 'google',
        AdsStyleMode: '3', // 0-不带css；1-单列靠左；2-单列居中；3-双列居中
        HuYanMode: false, // 护眼模式-谷歌
        defaultBgUrl: '', // 默认背景图
        BgFit: true,
      },
      bing: {
        name: 'bing',
        AdsStyleMode: '3', // 0-不带css；1-单列靠左；2-单列居中；3-双列居中
        HuYanMode: false, // 护眼模式-必应
        defaultBgUrl: '', // 默认背景图
        BgFit: true,
      },
      duck: {
        name: 'duck',
        AdsStyleMode: '3', // 0-不带css；1-单列靠左；2-单列居中；3-双列居中
        HuYanMode: false, // 护眼模式-DuckGOGO
      },
      doge: {
        name: 'doge',
        AdsStyleMode: '3', // 0-不带css；1-单列靠左；2-单列居中；3-双列居中
        HuYanMode: false, // 护眼模式-DuckGOGO
      },
      sogou: {
        name: 'sogou',
        AdsStyleMode: '1', // 0-不带css；1-单列靠左；2-单列居中；3-双列居中
        HuYanMode: false, // 护眼模式-搜狗
      },
      zhihu: {
        name: 'zhihu',
        AdsStyleMode: '0', // 0-不带css；1-单列靠左；2-单列居中；3-双列居中
        HuYanMode: false, // 护眼模式-搜狗
      },
      other: {
        name: 'other',
        AdsStyleMode: '0', // 0-不带css；1-单列靠左；2-单列居中；3-双列居中
        HuYanMode: false, // 护眼模式-搜狗
      },

      Style_BaiduLite: false, // Baidu_Lite样式表

      defaultHuYanColor: "#DEF1EF",
      isUserColorEnable: true, // 是否开启favicon图标功能
      isFaviconEnable: true, // 是否开启favicon图标功能
      defaultFaviconUrl: "https://ae01.alicdn.com/kf/HTB1dRY0X8OD3KVjSZFFq6An9pXay.jpg", // 默认图标地址
      doDisableSug: true, // 是否禁止百度搜索预测
      isRightDisplayEnable: true, // 是否开启右侧边栏
      isCounterEnable: false, // 是否显示计数器
      isALineEnable: false, // 是否禁止下划线
      isUserStyleEnable: false, // 是否开启自定义样式
      normalizeDuck: true, // 是否按照常用习惯去配置DuckDuckGo
      acceptLicense: false,
      isEnLang: false,
      isGooleInBaiduModeEnable: false, // 是否开启谷歌搜索结果页的百度图标显示
      UserBlockList: [],
      UserStyleText:
`/**计数器的颜色样式*/
div .AC-CounterT {
  background: #FD9999;
}

/**百度样式区域**/
body[baidu] {
  position: relative;

  /**右侧栏的样式-其实不开启更好看一些*/
  #content_right {
    padding: 20px 15px 15px !important;
    border-radius: 5px;
    background-color: #FFFFFF66;
    box-sizing: border-box;
    box-shadow: 0 0 20px 2px rgba(0, 0, 0, .1);
    -webkit-box-shadow: 0 0 20px 2px rgba(0, 0, 0, .1);
    -moz-box-shadow: 0 0 20px 2px rgba(0, 0, 0, .1);
  }

  &:before {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    background-size: 100% auto;
    opacity: 0.6; /*背景图透明度=0.8，最大1*/
  }

  /**隐藏首页的大图标-修复可能导致外援样式异常**/
  #s_lg_img_new {
    display: none !important;
  }

  #wrapper #s_tab {
    background-color: rgba(248, 248, 248, 0.4);
  }

  #content_left>.c-container {
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.6) !important; /*百度搜索块体的颜色；透明度=0.1，最大1*/

    h3 {
      background-color: rgba(248, 248, 248, 0.6) !important; /*百度搜索块体 - 标题的颜色；透明度=0.1，最大1*/
    }
  }
}

body[google] {

  &:before {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    background-size: 100% auto;
    opacity: 0.4; /*背景图透明度=0.8，最大1*/
  }

  #rso .g, .sfbg, .f6F9Be, .k8XOCe {
    background-color: rgba(248, 248, 248, 0.6) !important;
  }

  .sfbg {
    margin-top: -10px;
  }

  .yg51vc {
    background-color: transparent !important;
  }
}`,
      oldVersion: "",
      lastSaveTime: new Date().getTime(),
    };
    let CONST = {
      hasNewFuncNeedDisplay: true,
      sortIndex: 1,
      isGoogleImageUrl: false,
      isGoogleSpecial: false, // 判断是否存在#rso>.g; true=存在
      useItem: {},
      fsBaidu: null,
      flushNode: new FlushDomFragment(),
      BG_List: {
        1: 'https://img.90dao.com/images/2023/10/02/651a347eef3f5.jpg',
        2: 'https://img.90dao.com/images/2023/12/17/657de42cb631e.webp',
        3: 'https://img.90dao.com/images/2023/12/16/657d34e933276.png',
        4: 'https://img.90dao.com/images/2023/10/26/653985cf1a46d.png',
      }
    };

    var curSite = {
      SiteTypeID: 1, // 当前站点的ID
      MainType: "", // 主体节点，很多个的父节点
      Stype_Normal: "", // 重定向选择器，只有百度-搜狗-好搜
      FaviconType: "", // favicon的域名检查器cite，用于获取host用
      FaviconAddTo: "", // favicon选择器，用于插入到title之前的
      CounterType: "", // 计数器添加的位置，一般和favicon位置一致
      BlockType: "", // 屏蔽按钮的位置，一般在title之后
      GMStyleList: {},
    };
    let DBSite = {
      baidu: {
        SiteTypeID: 1,
        MainType: "#content_left>.c-container",
        Stype_Normal: "h3.t>a, .c-container article a",
        FaviconType: "h3 a",
        FaviconAddTo: "h3",
        CounterType: "#content_left>#double>div[srcid] *[class~=t]>a:first-child,[class~=op_best_answer_question],#content_left>div[srcid] *[class~=t]>a:first-child,[class~=op_best_answer_question]",
        BlockType: "h3 a",
        pager: {
          nextLink: '//div[@id="page"]//a[contains(text(),"下一页")][@href]',
          pageElement: "css;div#content_left > *",
          HT_insert: ["css;div#content_left", 2], // 1 = beforebegin; 2 = beforeend
          replaceE: "css;#page",
          stylish: ".autopagerize_page_info, div.sp-separator {margin-bottom: 10px !important;}.c-img-border{display:none}",
        }
      },
      sogou: {
        SiteTypeID: 2,
        MainType: "#main .results>div",
        Stype_Normal: "h3.pt>a, h3.vrTitle>a",
        FaviconType: "cite[id*='cacheresult_info_']",
        FaviconAddTo: "h3",
        CounterType: ".results>div",
        BlockType: "h3 a",
        pager: {
          nextLink: "//div[@id=\"pagebar_container\"]//a[@id=\"sogou_next\"]",
          pageElement: "//div[@class=\"results\"]/div",
          HT_insert: ["//div[@class=\"results\"]", 2], // 1 = beforebegin; 2 = beforeend
          replaceE: "id(\"pagebar_container\")"
        }
      },
      haosou: {
        SiteTypeID: 3,
        MainType: ".res-list",
        Stype_Normal: "h3>a",
        FaviconType: "cite",
        FaviconAddTo: "h3",
        CounterType: ".results>div",
        BlockType: "h3 a",
        pager: {
          nextLink: "//div[@id='page']//a[text()='下一页>'] | id('snext')",
          pageElement: "//div[@id='container']/div",
          HT_insert: ["//div[@id='container']", 2], // 1 = beforebegin; 2 = beforeend
          replaceE: "id('page')"
        }
      },
      google: {
        SiteTypeID: 4,
        MainType: "#rso .g, div[data-micp-id='rso'] .g",
        FaviconType: ".iUh30",
        FaviconAddTo: "h3",
        CounterType: "#rso .g h3:not(table h3),._yE>div[class~=_kk] h3",
        BlockType: "a:not([href*='translate.google.com'])", // 修复block翻页的问题
        pager: {
          nextLink: "id('pnnext')|id('navbar navcnt nav')//td[span]/following-sibling::td[1]/a|id('nn')/parent::a",
          pageElement: "id('rso')|id('center_col')/style[contains(.,'relative')][id('rso')]",
          HT_insert: ["css;#res", 2], // 1 = beforebegin; 2 = beforeend
          replaceE: '//div[@id="navcnt"] | //div[@id="rcnt"]//div[@role="navigation"]',
        }
      },
      google_scholar: {
        SiteTypeID: 4.1,
        MainType: "#rso .g, div[data-micp-id='rso'] .g",
        FaviconType: ".iUh30",
        FaviconAddTo: "h3",
        CounterType: "#rso .g h3:not(table h3),._yE>div[class~=_kk] h3",
        BlockType: "a:not([href*='translate.google.com'])", // 修复block翻页的问题
        pager: {
          nextLink: '//a[./span[@class="gs_ico gs_ico_nav_next"]]',
          pageElement: '//div[@class="gs_r gs_or gs_scl"]',
          HT_insert: null, // 1 = beforebegin; 2 = beforeend
          replaceE: '//div[@id="navcnt"] | //div[@id="rcnt"]//div[@role="navigation"]',
        }
      },
      bing: {
        SiteTypeID: 5,
        MainType: "#b_results>li",
        FaviconType: ".b_attribution>cite",
        FaviconAddTo: "h2",
        CounterType: "#b_results>li[class~=b_ans] h2,#b_results>li[class~=b_algo] h2",
        BlockType: "h2 a",
        Stype_Normal: "h2>a",
        pager: {
          nextLink: "//a[contains(@class,\"sb_pagN\")]",
          pageElement: "id(\"b_results\")/li[not(contains(@class,\"b_pag\") or contains(@class,\"b_ans b_top\"))]",
          HT_insert: ["id(\"b_results\")/li[@class=\"b_pag\"]", 1], // 1 = beforebegin; 2 = beforeend
          replaceE: "id(\"b_results\")//nav[@role=\"navigation\"]",
        }
      },
      duck: {
        SiteTypeID: 10,
        MainType: "#react-layout li",
        FaviconType: ".nrn-react-div .result__url__domain",
        FaviconAddTo: "h2",
        CounterType: "#react-layout li h2",
        BlockType: "h2 a",
        pager: {
          nextLink: "//a[contains(@class,\"sb_pagN\")]",
          pageElement: "id(\"b_results\")/li[not(contains(@class,\"b_pag\") or contains(@class,\"b_ans b_top\"))]",
          HT_insert: ["id(\"b_results\")/li[@class=\"b_pag\"]", 1], // 1 = beforebegin; 2 = beforeend
          replaceE: "id(\"b_results\")//nav[@role=\"navigation\"]",
        }
      },
      doge: {
        SiteTypeID: 11,
        MainType: "#links_wrapper #links .results_links_deep",
        FaviconType: ".results_links_deep .result__url__domain",
        FaviconAddTo: "h2",
        CounterType: "#links_wrapper #links .results_links_deep h2",
        BlockType: "h2 a",
        pager: {
          nextLink: "//a[contains(@class,\"sb_pagN\")]",
          pageElement: "id(\"b_results\")/li[not(contains(@class,\"b_pag\") or contains(@class,\"b_ans b_top\"))]",
          HT_insert: ["id(\"b_results\")/li[@class=\"b_pag\"]", 1], // 1 = beforebegin; 2 = beforeend
          replaceE: "id(\"b_results\")//nav[@role=\"navigation\"]",
        }
      },
      mBaidu: {
        SiteTypeID: 6,
        MainType: "#b_results>li",
        FaviconType: ".b_attribution>cite",
        FaviconAddTo: "h2",
        CounterType: "#b_results>li[class~=b_ans]>h2,#b_results>li[class~=b_algo]>h2,#b_results>li[class~=b_algo]>h2",
        BlockType: "h2 a",
      },
      zhihu: {
        SiteTypeID: 7,
      },
      baidu_xueshu: {
        SiteTypeID: 8,
        MainType: "#content_left .result",
        Stype_Normal: "h3.t>a, #results .c-container>.c-blocka",
        FaviconType: "h3", // baidu 似乎要改版了？
        FaviconAddTo: "h3",
        CounterType: "#content_left>#double>div[srcid] *[class~=t]>a,[class~=op_best_answer_question],#content_left>div[srcid] *[class~=t]>a,[class~=op_best_answer_question]",
        BlockType: "h3 a",
      },
      other: {
        SiteTypeID: 9,
      }
    };

    let SiteType = {
      BAIDU: DBSite.baidu.SiteTypeID,
      MBAIDU: DBSite.mBaidu.SiteTypeID,
      SOGOU: DBSite.sogou.SiteTypeID,
      SO: DBSite.haosou.SiteTypeID,
      GOOGLE: DBSite.google.SiteTypeID,
      BING: DBSite.bing.SiteTypeID,
      DUCK: DBSite.duck.SiteTypeID,
      DOGE: DBSite.doge.SiteTypeID,
      ZHIHU: DBSite.zhihu.SiteTypeID,
      BAIDU_XUESHU: DBSite.baidu_xueshu.SiteTypeID,
      OTHERS: DBSite.other.SiteTypeID
    };
    let otherData = {
      other: {
        curTab: 1, // 展示第二panel
        showBlockListArea: false, // blockList展示位textarea
        addBlockItem: "", // 用户手动输入的拦截规则
        curHosts: [], // 存放已经访问的hosts数据内容
        faviconListMap: { }, // favicon的遍历表 -> .AC-faviconTStyle
        isBlockChecking: false, // 当前Block功能是否还在执行中，避免多次执行，导致页面卡顿
      }
    }; // 到时候挂载到other上
    const AllData = {
      ACConfig: {},
      other: otherData.other,
      CONST: CONST,
      lan: {
        use: {},
        zh_cn: {
          menu_text: "自定义",
          curLang: "zh_cn",
          fieldset_panel: {
            panel_title: "AC-重定向设置 " + GM_info.script.version + (inExtMode? 'Ext':''),
            setting_panel: {
              redirect_text: "主功能-处理重定向",
              redirect_title: "重定向功能的开启与否",
              useEn_text: "En-Language",
              useEn_title: "Using English language to display",
              ads_text: "附加1-去广告功能",
              ads_title: "去除部分页面的广告信息，还你一个干净整洁的页面",
              autopage_text: "自动翻页",
              autopage_title: "自动翻页",
              blockenable_text: "附加2-自主拦截域名",
              blockenable_title: "点击页面block按钮添加你想要隐藏的地址，脚本将自动隐藏部分结果为小横幅，DIY按钮中点击表格内容可以取消隐藏",
              blockDiyBtn_text: "DIY",
              blockDiyBtn_title: "自定义BLOCK",
              blockAutoRemove_text: "隐藏结果",
              blockAutoRemove_title: "自动隐藏已经屏蔽的域名",
              blockBtnShow_text: "隐藏'block'按钮",
              blockBtnShow_title: "隐藏掉block按钮的显示",

              userStyle_text: "附加3-自定义样式",
              userStyle_baidu_lable: "展开百度设置>>",
              userStyle_baidu_origin: "百度-原始模式",
              userStyle_baidu_huyan: "百度-护眼模式",
              userStyle_baidu_baiduLite: "百度Lite样式",
              userStyle_baidu_1line: "单列",
              userStyle_baidu_1line_enter: "单列居中",
              userStyle_baidu_2line: "双列",
              userStyle_baidu_3line: "三列",
              userStyle_baidu_4line: "四列",

              userStyle_google_lable: "展开谷歌设置>>",
              userStyle_google_origin: "谷歌-原始模式",
              userStyle_google_huyan: "谷歌-护眼模式",
              userStyle_google_googleLite: "谷歌-伪装百度",
              userStyle_google_1line: "单列",
              userStyle_google_1line_enter: "单列居中",
              userStyle_google_2line: "双列",
              userStyle_google_3line: "三列",
              userStyle_google_4line: "四列",

              userStyle_bing_lable: "展开必应设置>>",
              userStyle_bing_origin: "必应-原始模式",
              userStyle_bing_huyan: "必应-护眼模式",
              userStyle_bing_1line: "单列",
              userStyle_bing_1line_enter: "单列居中",
              userStyle_bing_2line: "双列",
              userStyle_bing_3line: "三列",
              userStyle_bing_4line: "四列",

              userStyle_sogou_lable: "展开搜狗设置>>",
              userStyle_sogou_origin: "搜狗-原始模式",
              userStyle_sogou_huyan: "搜狗-护眼模式",
              userStyle_sogou_1line: "单列",
              userStyle_sogou_1line_enter: "单列居中",
              userStyle_sogou_2line: "双列",
              userStyle_sogou_3line: "三列",
              userStyle_sogou_4line: "四列",

              userStyle_duck_lable: "展开鸭鸭搜设置>>",
              userStyle_duck_origin: "鸭鸭-原始模式",
              userStyle_duck_huyan: "鸭鸭-护眼模式",
              userStyle_duck_normal: "鸭鸭-常见配置",
              userStyle_duck_1line: "单列",
              userStyle_duck_1line_enter: "单列居中",
              userStyle_duck_2line: "双列",
              userStyle_duck_3line: "三列",
              userStyle_duck_4line: "四列",

              userStyle_doge_lable: "展开多吉设置>>",
              userStyle_doge_origin: "多吉-原始模式",
              userStyle_doge_huyan: "多吉-护眼模式",
              userStyle_doge_normal: "多吉-常见配置",
              userStyle_doge_1line: "单列",
              userStyle_doge_1line_enter: "单列居中",
              userStyle_doge_2line: "双列",
              userStyle_doge_3line: "三列",
              userStyle_doge_4line: "四列",

              backgroundImage_text: "背景图：",
              backgroundImage_text_hint: "图片需要允许跨域，建议使用图床",
              backgroundImageAutoFit_text: "自动优化",
              backgroundImageAutoFit_text_hint: "有背景图时，自动优化页面效果",

              huyanMode_text: "附加4-护眼颜色配置-自定义3中需对应开启",
              huyanMode_title: "！需要在自定义样式中启用护眼模式",
              huyanColor_text: "默认护眼颜色：",
              huyanColor_title: "自定义的护眼颜色：",
              huyanColorMore_text: "更多颜色选择",

              favicon_text: "附加5-Favicon功能",
              favicon_title: "AC-添加Favicon",
              favicon_defaultIcon_text: "Favicon默认图标：",

              searchOrigin_text: "附加6-移除百度搜索预测(文字自动搜索)",
              searchOrigin_title: "AC-移除搜索预测",

              showRight_text: "附加7-显示右侧栏",
              showCounter_text: "附加8-编号功能",
              hintShowCounter_text: "可能会导致图片加载异常",
              showALine_text: "附加9-文字下划线",
              showUserStyle_text: "附加10-自定义样式 支持Less.js",

              contactMe_text: "联系作者,提建议,寻求帮助,自定义样式,脚本定制点我",
              contactMe_url: "https://github.com/langren1353/GM_script",

              setting_panel_second: {
                backBtn_text: "<-返回",
                blockLabel_text: " 拦截列表  想要生效的话需要手动保存",
                blockEditBtn_text: "编辑列表",
                blockEditBtnEnd_text: "结束编辑",
                addBlockLabel_text: "全匹配拦截：",
                addBtnLabel_text: "添加",
              },
              cancelBtn_text: "取消",
              okBtn_text: "保存",
              resetBtn_text: "重置",
            }
          }
        },
        en: {
          menu_text: "CUSTOM",
          curLang: "en",
          fieldset_panel: {
            panel_title: "AC Redirect Settings " + GM_info.script.version + (inExtMode? 'Ext':''),
            setting_panel: {
              redirect_text: "Main-Deal Redirect",
              redirect_title: "Turn on or off redirect",
              useEn_text: "En-Language",
              useEn_title: "使用英文显示页面",
              ads_text: "Add1-Remove Ads",
              ads_title: "Remove the ads on the page, and return you a clean page",
              autopage_text: "Auto Pager",
              autopage_title: "Auto Pager",
              blockenable_text: "Add2-Block host",
              blockenable_title: "Click the Block button to add the address which you want to hide. The script will hide it with small banner automatically. DIY button for editting the hiding list",
              blockDiyBtn_text: "DIY",
              blockDiyBtn_title: "Edit BLOCK",
              blockAutoRemove_text: "Auto remove",
              blockAutoRemove_title: "remove the block results automatically",
              blockBtnShow_text: "Hide 'Block' button",
              blockBtnShow_title: "Hide 'Block' button",

              userStyle_text: "Add3-CustomStyle",
              userStyle_baidu_lable: "Expand Baidu Settings>>",
              userStyle_baidu_origin: "Baidu-Origin",
              userStyle_baidu_huyan: "Baidu-EyeSave",
              userStyle_baidu_baiduLite: "BaiduLiteStyle",
              userStyle_baidu_1line: "SingleRow",
              userStyle_baidu_1line_enter: "SingleCenter",
              userStyle_baidu_2line: "Two",
              userStyle_baidu_3line: "Three",
              userStyle_baidu_4line: "Four",

              userStyle_google_lable: "Expand Google Settings>>",
              userStyle_google_origin: "Google-Origin",
              userStyle_google_huyan: "Google-EyeSave",
              userStyle_google_googleLite: "Fake Baidu",
              userStyle_google_1line: "SingleRow",
              userStyle_google_1line_enter: "SingleCenter",
              userStyle_google_2line: "Two",
              userStyle_google_3line: "Three",
              userStyle_google_4line: "Four",

              userStyle_bing_lable: "Expand Bing Settings>>",
              userStyle_bing_origin: "Bing-Origin",
              userStyle_bing_huyan: "Bing-EyeSave",
              userStyle_bing_1line: "SingleRow",
              userStyle_bing_1line_enter: "SingleCenter",
              userStyle_bing_2line: "Two",
              userStyle_bing_3line: "Three",
              userStyle_bing_4line: "Four",

              userStyle_sogou_lable: "Expand SoGou Settings>>",
              userStyle_sogou_origin: "SoGou-Origin",
              userStyle_sogou_huyan: "SoGou-EyeSave",
              userStyle_sogou_1line: "SingleRow",
              userStyle_sogou_1line_enter: "SingleCenter",
              userStyle_sogou_2line: "Two",
              userStyle_sogou_3line: "Three",
              userStyle_sogou_4line: "Four",

              userStyle_duck_lable: "Expand DuckDuckGo Settings>>",
              userStyle_duck_origin: "DuckDuck-Origin",
              userStyle_duck_huyan: "DuckDuck-EyeSave",
              userStyle_duck_normal: "DuckDuck-Normal",
              userStyle_duck_1line: "SingleRow",
              userStyle_duck_1line_enter: "SingleCenter",
              userStyle_duck_2line: "Two",
              userStyle_duck_3line: "Three",
              userStyle_duck_4line: "Four",

              userStyle_doge_lable: "Expand DogeDoge Settings>>",
              userStyle_doge_origin: "DogeDoge-Origin",
              userStyle_doge_huyan: "DogeDoge-EyeSave",
              userStyle_doge_normal: "DogeDoge-Normal",
              userStyle_doge_1line: "SingleRow",
              userStyle_doge_1line_enter: "SingleCenter",
              userStyle_doge_2line: "Two",
              userStyle_doge_3line: "Three",
              userStyle_doge_4line: "Four",

              backgroundImage_text: "background Image：",
              backgroundImage_text_hint: "only CORS Image is allowed",
              backgroundImageAutoFit_text: "Auto Fit：",
              backgroundImageAutoFit_text_hint: "page auto fit when Bg is not null",

              huyanMode_text: "Add4-EyeSave Color Setting-Need opened in Add3",
              huyanMode_title: "！Open EyeSave Mode in CustomStyle is Must",
              huyanColor_text: "Default EyeSave Color：",
              huyanColor_title: "The color of EyeSave：",
              huyanColorMore_text: "More Color",

              favicon_text: "Add5-Favicon.Func",
              favicon_title: "AC-AddFavicon",
              favicon_defaultIcon_text: "FaviconFailedImg：：",

              searchOrigin_text: "AC-Remove Baidu AutoPredict in text search",
              searchOrigin_title: "Add6-Remove Baidu AutoPredict in text search",

              showRight_text: "Add7-Right Side Column",
              showCounter_text: "Add8-NumFunc",
              hintShowCounter_text: "May Cause image load problem",
              showALine_text: "Add9-TextUnderLine",
              showUserStyle_text: "Add10-Your own Style support Less.js",

              contactMe_text: "For contact the writter, suggests, ask for help then click me",
              contactMe_url: "https://github.com/langren1353/GM_script/",

              setting_panel_second: {
                backBtn_text: "<-Back",
                blockLabel_text: "&nbsp;Block List&nbsp;&nbsp;Click Save Button if you want wo save the list",
                blockEditBtn_text: "Edit List",
                blockEditBtnEnd_text: "End Edit",
                addBlockLabel_text: "Add Block item：",
                addBtnLabel_text: "Add",
              },
              cancelBtn_text: "Cancel",
              okBtn_text: "Save",
              resetBtn_text: "Reset",
            }
          }
        }
      }
    };
    let vueVM = null;
    /**初始化所有的设置**/
    Promise.all([GM.getValue("Config")]).then(function (data) {
      let res = data[0]
      if (res && (res !== 'undefined' && res !== 'null')) {
        try {
          ACConfig = JSON.parse(res);
        } catch (e) {
          ACConfig = res;
        }
      } else {
        ACConfig = DefaultConfig;
      }
      const localData = localStorage.ACConfig; // 小心隐私模式
      if(localData && localData.length > 10) { // 避免重置为 '{}' 导致的误判
        try{
          ACConfig = JSON.parse(localData);
        }catch (e){}
      }
      for (let key in DefaultConfig) {
        if (typeof (ACConfig[key]) === "undefined") {
          ACConfig[key] = DefaultConfig[key];
        }
      }
      if (ACConfig.isUserStyleEnable === false && (new Date().getTime() - ACConfig.lastSaveTime > 2592000000)) { // 大约30天时间
        // 如果用户取消了设置，并且长时间(30天)没有进行过处理，那么直接将数据置空 -> 用于刷新数据
        console.log("ac-baidu css reset for time");
        ACConfig.lastSaveTime = new Date().getTime();
        ACConfig.UserStyleText = DefaultConfig.UserStyleText;
        ACSetValue("Config", JSON.stringify(this.ACConfig))
      }
      AllData.ACConfig = ACConfig;
      DBConfig = JSON.parse(JSON.stringify(ACConfig)); // 暂时作为一个原始保存
      AllData.lan.use = ACConfig.isEnLang ? AllData.lan.en : AllData.lan.zh_cn;
      // 初始化完成之后才能调用正常函数
      callback();
    }).catch(function (except) {
      console.log(except);
    });

    function Reg_Get(HTML, reg) {
      let RegE = new RegExp(reg);
      try {
        return RegE.exec(HTML)[1];
      } catch (e) {
        return "";
      }
    }

    function ACSetValue(key, value) {
      GM_setValue(key, value);
      if(key === 'Config'){
        if (value) localStorage.ACConfig = value;
      }
    }

    function getElementByXpath(e, t, r) {
      r = r || document, t = t || r;
      try {
        return r.evaluate(e, t, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      } catch (t) {
        return void console.error("无效的xpath");
      }
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

    /**
     * Select multiple elements by css selector
     * @param {string} css css of dom
     * @param {ParentNode} contextNode dom contextNode
     * @returns {HTMLElement[]} an array of Nodes
     */

    function getAllElementsByCSS(css) {
      var contextNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
      return [].slice.call(contextNode.querySelectorAll(css));
    }

    /**
     * Get all elements matching the selector
     * @param {ISelectorFunction} selector css selector or xpath selector
     * @param {Element|Document|DocumentFragment} contextNode contextNode specifies the context node for the query (see the XPath specification). It's common to pass document as the context node.
     * @param {Document} doc the document to select from
     * @param {Window} win window of the browser
     * @param {string} _cplink current page link
     * @returns {HTMLElement[]} an array of nodes
     */

    function getAllElements(selector) {
      var contextNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var doc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
      var win = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : window;

      var _cplink = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;

      if (!selector) return []; //@ts-ignore

      contextNode = contextNode || doc;

      if (typeof selector === 'string') {
        if (selector.search(/^css;/i) === 0) {
          return getAllElementsByCSS(selector.slice(4), contextNode);
        } else {
          return getAllElementsByXpath(selector, contextNode, doc);
        }
      } else {
        var query = selector(doc, win, _cplink);

        if (!Array.isArray(query)) {
          throw new Error('Wrong type is returned by getAllElements');
        } else {
          return query;
        }
      }
    }

    const throttle = (callback, wait = 100) => {
      let it = 0
      let preT = 0
      return function(...args) {
        const nowT = + new Date()
        if(nowT - preT > wait) {
          preT = nowT
          clearTimeout(it)

          it = setTimeout(() => {
            callback.apply(this, args)
            clearTimeout(it)
          }, wait)
        }
      }
    }

    function callback() {
      if (ACConfig.oldVersion === GM_info.script.version) {
        CONST.hasNewFuncNeedDisplay = false;
      } else {
        CONST.hasNewFuncNeedDisplay = needDisplayNewFun;
      }

      !function() {
        /**
         * 进行不重复插入，插入后执行回调函数
         * @param data 待插入数据
         * @param callback 回调函数
         */
        function acpush(data, callback) {
          // 如果是垃圾数据，那么可以丢弃的
          if (!data) return;
          // 如果数据中有回车，那数据也是无效的正文而已
          if (data.replace(/({|}|,|\+|：|。|\n)/) !== data) return;
          if (this.findIndex(m => m === data) < 0) {
            this.push(data);
            callback && callback(this);
          }
        }
        function acremove(data, callback) {
          let delId = this.findIndex(m => m === data);
          if (delId >= 0) {
            this.splice(delId, 1);
            callback && callback(this);
          } // 删除delId的数据，删除一个
        }
        // 避免污染全局原型链
        Object.defineProperty(ACConfig.UserBlockList, 'acpush', {value: acpush})
        Object.defineProperty(ACConfig.UserBlockList, 'acremove', {value: acremove})
        Object.defineProperty(otherData.other.curHosts, 'acpush', {value: acpush})
        Object.defineProperty(otherData.other.curHosts, 'acremove', {value: acremove})
      }();

      !async function() {
        if (typeof GM_getResourceText === 'undefined') {
          GM.getResourceText = GM_getResourceText = async function(aResourceName) {
            let res = await (await fetch(await GM.getResourceUrl(aResourceName))).text();
            let saveRes = await GM.getValue(aResourceName);
            if (typeof (saveRes) === 'undefined') {
              GM.setValue(aResourceName, res);
            } else {
              return saveRes;
            }
            return res;
          }
        }
        if (location.host.includes("xueshu.baidu.com")) {
          curSite = DBSite.baidu_xueshu;
        } else if (location.host.includes(".baidu.com")) {
          if (navigator.userAgent.replace(/(android|mobile|iphone)/igm, "") !== navigator.userAgent) {
            curSite = DBSite.mBaidu;
          } else {
            curSite = DBSite.baidu;
          }
          CONST.useItem = ACConfig.baidu;
        } else if (location.host.includes("zhihu.com")) {
          curSite = DBSite.zhihu;
          CONST.useItem = ACConfig.zhihu;
        } else if (location.host.includes("sogou")) {
          curSite = DBSite.sogou;
          CONST.useItem = ACConfig.sogou;
        } else if (location.host.includes("so.com")) {
          curSite = DBSite.haosou;
          CONST.useItem = ACConfig.other;
        } else if (location.host.includes("google")) {
          curSite = DBSite.google;
          CONST.useItem = ACConfig.google;
          // 针对谷歌学术，特殊处理          
          if(location.host.includes('scholar.google.com')) {
            curSite = DBSite.google_scholar;
            CONST.useItem = ACConfig.other
          }
        } else if (location.host.includes("bing")) {
          curSite = DBSite.bing;
          CONST.useItem = ACConfig.bing;
        } else if (location.host.includes("duckduckgo")) {
          curSite = DBSite.duck;
          CONST.useItem = ACConfig.duck;
        } else if (location.host.includes("dogedoge")) {
          curSite = DBSite.doge;
          CONST.useItem = ACConfig.doge;
        } else {
          curSite = DBSite.other;
          CONST.useItem = ACConfig.other;
        }
        curSite.pageNum = 1; // 当前页数
        curSite.pageLoading = false;
        curSite.pageUrl = "";
        curSite.GMStyleList = {}
        if (
          (curSite.SiteTypeID === SiteType.GOOGLE && location.href.replace(/tbm=(isch|lcl|shop|flm)/, "") !== location.href) ||
          (curSite.SiteTypeID === SiteType.BING && location.href.replace(/images\/search/, "") !== location.href)
        ) {
          // 图片站 、地图站、购物站
          console.log("特殊站,不加载样式，不添加menu");
          CONST.isGoogleImageUrl = true;
        }

        if (curSite.SiteTypeID === SiteType.BAIDU_XUESHU) {
          CONST.useItem.AdsStyleMode = 2; // 单列居中即可
        }

        // 预加载GMResource的CSS等
        preLoadGMStyle()

        CONST.fsBaidu = FSBaidu();

        if (ACConfig.AdsStyleEnable) {
          CONST.fsBaidu.init() // 添加设置项-单双列显示
        }

        if(+CONST.useItem.AdsStyleMode > 0) { // 非原始模式，那么可以加载图片
          if(CONST.useItem.defaultBgUrl && CONST.useItem.defaultBgUrl.trim()) {
            changeSiteBackground(CONST.useItem.defaultBgUrl)
          }
        }
        console.log("%c[AC-Redirect] %cLet Me Introduce you a Very Good Search Engine：%c %s %cSearch Engine.", "font-weight:bold;color:cornflowerblue", "color:0", "font-weight:bold;color:darkorange", CONST.useItem.name.replace(CONST.useItem.name[0], CONST.useItem.name[0].toUpperCase()), "font-weight:normal;color:0");

        let SiteBlock = {
          /**
           * 初始化Block样式
           */
          initStyle: async function() {
            CONST.flushNode.insert(await create_CSS_Node("button.ghhider.ghhb[ac-user-alter='1']::before{content:'取消 - ';}#sp-ac-container .ac-block-item{color:#AAA;margin-left:48px;}#sp-ac-container .ac-block-itemdel{float:right;margin-left:0;padding:0 20px;cursor:pointer;}#sp-ac-container .ac-block-itemdel:hover{color:red;}#sp-ac-container .ac-block-high{color:#000;}.ac-blockList li:hover{background-color:#a3caff;color:white !important;cursor:pointer;} *[ac-needhide] *{display:none} *[ac-needhide] .blockShow{display:unset;cursor:pointer;} *[ac-needhide] .blockShow:hover{border:1px solid #DDD}button.ghhider{color:#555;background-color:#fcfcfc;font-family:sans-serif;margin:auto 2px;border:1px solid #ccc;border-radius:4px;padding:2px 3px}button.ghhider{font-size:12px}button.ghhider:hover{color:#006aff;background:#fff}",
              "AC-BlockStyle"))
          },
          /**
           * 初始化屏蔽按钮加载
           */
          init: function() {
            const needCheckClass = (curSite.MainType + ',').split(',').join(":not([bhandle]),")
            let checkNodes = document.querySelectorAll(needCheckClass.substring(0, needCheckClass.length - 1));
            for (let i = 0; i < checkNodes.length; i++) {
              let curNode = checkNodes[i];
              try {
                let faviconNode = curNode.querySelector(curSite.FaviconType);
                let host = getNodeHost(faviconNode).curHost;
                let faNode = curNode.querySelector(curSite.BlockType);
                let nodeStyle = "display:unset;";
                if (ACConfig.isBlockBtnNotDisplay) {
                  nodeStyle = "display:none;";
                }
                if(faNode) {
                  // 避免父节点出现两个block按钮
                  if (!faNode.hasAttribute('hasInsert')) {
                    faNode.parentNode.insertAdjacentHTML("beforeend", `<button style='${ nodeStyle }' class='ghhider ghhb' href="${ faviconNode?.href || faviconNode?.innerText }" meta="${ host }" data-host="${ host }" title='${ this.getBlockBtnTitle(host) }'>block</button>`);
                  }
                  faNode.setAttribute("hasInsert", "1");
                }
                
                curNode.setAttribute("bhandle", "1");
              } catch (e) {
                console.error(e)
                const failed_count = +(curNode.getAttribute('failed_count') || 1)
                curNode.setAttribute('failed_count', failed_count + 1)
                if (failed_count > 3) {
                  curNode.setAttribute("bhandle", "1");
                }
              }
            }
            this.initListener();
            setCountFunction(this.renderDisplay.bind(this), 3)
          },
          getBlockBtnTitle(host) {
            return `点击即可屏蔽 ${ host } 放开，需要在自定义中手动配置放开`;
          },
          initListener: function() {
            let checkNodes = document.querySelectorAll("button.ghhider:not([acEnv])");
            for (let i = 0; i < checkNodes.length; i++) {
              checkNodes[i].addEventListener("click", this.doHideEnv);
              checkNodes[i].setAttribute("acEnv", "0");
            }
          },
          doHideEnv: function(env) {
            // 先插入数据---记得还要写入存储
            let node = env.sourceTarget || env.target;
            let host = node.dataset.host;
            if (+node.getAttribute("ac-user-alter") === 1) {
              // 已经屏蔽之后，再次点击block应该是取消状态
              node.removeAttribute("ac-user-alter");
              ACConfig.UserBlockList.acremove(host);
            } else {
              // 正常屏蔽操作
              node.removeAttribute("ac-user-alter");
              ACConfig.UserBlockList.acpush(host);
            }
            DBConfig.UserBlockList = ACConfig.UserBlockList;
            ACSetValue("Config", JSON.stringify(DBConfig)); // 点击一次，保存一次
            env.stopPropagation();
          },
          // 刷新显示效果--耗时操作
          renderDisplay: throttle(function() {
            // 增加checking中的检查，避免多次重复调用，减少cpu消耗
            if (otherData.other.isBlockChecking) return
            otherData.other.isBlockChecking = true

            let checkNodes = document.querySelectorAll(curSite.MainType);
            let { md5: md5_tag = '', list: regList = [] } = (vueVM && vueVM.calc_block_data) || {}; // 使用Vue的computed属性计算的数据值，一般根本不更新
            let flag = "ac-needhide";
            for (let i = 0; i < checkNodes.length; i++) {
              try {
                let curNode = checkNodes[i];
                let { curHost = "", curUrl = "" } = getNodeHost(curNode.querySelector(curSite.FaviconType));
                if (!curHost) continue
                let BlockBtn = curNode.querySelector(".ghhider.ghhb");
                BlockBtn.dataset.host = BlockBtn.dataset.meta = curHost;
                BlockBtn.title = this.getBlockBtnTitle(curHost);
                if (curNode.querySelector("button[ac-user-alter]") != null) continue; // 用户手动点过显示的，那么跳过check

                // 减少数据计算
                if (curNode.dataset.md5 && curNode.dataset.md5 === md5_tag) continue
                if (curUrl && regList.findIndex(one => {
                  try {
                    return one.test(curHost) || one.test(curUrl); // 耗时操作
                  } catch (e) {
                    return one === curHost;
                  }
                }) >= 0) {
                  // 只检查在屏蔽表中的数据
                  if (!curNode.hasAttribute(flag)) {
                    if (ACConfig.isBlockDisplay) { // 对于不显示的数据可以进行移除操作
                      curNode.remove();
                      continue;
                    }
                    let curTitle = curNode.querySelector(curSite.BlockType);
                    curTitle = curTitle.innerText || curTitle.textContent;

                    if (curNode.hasAttribute(flag)) {
                      console.log("冲突了！！！");
                      continue;
                    }

                    curNode.setAttribute(flag, "1");
                    curNode.insertAdjacentHTML("afterBegin", `<span class="blockShow" title="如果需要一直显示，请在自定义中DIY目录移除本地址">${ curTitle }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -block by ${ curHost }</span>`);

                    (function(xcur) {
                      // 已经屏蔽之后的内容，点击一下显示原始内容
                      xcur.querySelector(".blockShow").addEventListener("click", function(env) {
                        this.parentNode.querySelector("button.ghhider").setAttribute("ac-user-alter", "1"); // 这个属性用于保持在DOM更新时，按钮不变
                        xcur.removeAttribute(flag);
                        safeFunction(function() {
                          xcur.querySelector(".blockShow").remove();
                        });
                        env.stopPropagation();
                      });
                    })(curNode);
                  }
                } else {
                  curNode.removeAttribute(flag);
                  safeFunction(function() {
                    curNode.querySelector(".blockShow").remove();
                  });
                }
                curNode.dataset.md5 = md5_tag
              } catch (e) {
              }
            }

            otherData.other.isBlockChecking = false
          }, 50)
        };

        function preLoadGMStyle() {
          function loadResource(resourceName) {
            const data = GM_getResourceText(resourceName)
            curSite.GMStyleList[resourceName] = data
          }
          loadResource(CONST.useItem.name + "CommonStyle")
          loadResource(CONST.useItem.name + "OnePageStyle")
          loadResource(CONST.useItem.name + "TwoPageStyle")
        }

        function addStyle(css) { //添加CSS的代码--copy的
          let pi = document.createProcessingInstruction(
            'xml-stylesheet',
            'type="text/css" must="false" href="data:text/css;utf-8,' + encodeURIComponent(css) + '"'
          );
          return document.insertBefore(pi, document.documentElement);
        }

        if (ACConfig.isAdsEnable) {
          // display已经无法隐藏他们了，需要用绝对的隐藏
          CONST.flushNode.insert(await create_CSS_Node("#bottomads{display:none;} #content_left>div:not([id])>div[cmatchid], #content_left>div[id*='300']:not([class*='result']),#content_right td>div:not([id]),#content_right>br{position:absolute;top:-6666px;}", 'AC-AdsStyle'))
        }
        if(ACConfig.isFaviconEnable) {
          CONST.flushNode.insert(await create_CSS_Node("h3::before, h2::before {content: ' ';display:inline-block}", "AC-Style-Favicon"))
        }
        if (ACConfig.isBlockEnable) {
          SiteBlock.initStyle() // 初始化拦截样式
        }
        if (curSite.SiteTypeID === SiteType.GOOGLE && ACConfig.isGooleInBaiduModeEnable) {
          safeWaitFunc("#logo img, #logocont img", function(node) {
            let faNode = node.parentNode.parentNode;
            faNode.classList.add("baidu");
            node.removeAttribute("src");
            node.src = "https://pic.rmb.bdstatic.com/c86255e8028696139d3e3e4bb44c047b.png";
            node.width = "125";
            node.removeAttribute("height");
          });
          safeWaitFunc("#main .logo img[alt='Google']", function(node) {
            node.removeAttribute("srcset");
            node.src = "https://pic.rmb.bdstatic.com/c86255e8028696139d3e3e4bb44c047b.png";
            node.setAttribute("height", "40");
          }, 300);
          safeWaitFunc("form[role='search'] .logo img", function(node) {
            node.removeAttribute("srcset");
            node.src = "https://pic.rmb.bdstatic.com/c86255e8028696139d3e3e4bb44c047b.png";
            node.setAttribute("height", "40");
          }, 300);
          document.title = document.title.replace(/^Google/, "百度一下，你就知道")
            .replace(/ - Google 搜索/, "_百度搜索")
            .replace(/ - Google Search/, "_百度搜索");
          safeWaitFunc("head", function() {
            let linkTarget = document.querySelector("link[type='image/x-icon']") || document.createElement('link');
            linkTarget.type = 'image/x-icon';
            linkTarget.rel = 'shortcut icon';
            linkTarget.href = 'https://www.baidu.com/favicon.ico';
            document.head.appendChild(linkTarget);
          })
        }
        if (curSite.SiteTypeID === SiteType.DUCK) {
          addStyle = AC_addStyle // 兼容Duck的CSP同源规则
          if (ACConfig.normalizeDuck) {
            setTimeout(function() {
              try {
                DDG.settings.set("kn", 1, { // 新窗口打开页面
                  saveToCloud: true,
                  forceTheme: true
                });
                DDG.settings.set("kav", 1, { // 连续显示搜索结果
                  saveToCloud: true,
                  forceTheme: true
                });
              } catch (e) {
              }
            }, 5000);
          }
        }
        try {
          if (curSite.SiteTypeID !== SiteType.OTHERS) {
            document.addEventListener('DOMNodeInserted', MainCallback, false);
            document.addEventListener('keyup', MainCallback, false);
            safeWaitFunc("body", () => {
              !document.body.hasAttribute(CONST.useItem.name) && document.body.setAttribute(CONST.useItem.name, "1");
              !document.body.classList.contains(CONST.useItem.name) && document.body.classList.add(CONST.useItem.name);
              if (ACConfig.AdsStyleEnable) { // 单独不需要定时器-頻繁触发-载入css
                CONST.fsBaidu.init();
                AddCustomStyle();
              }
              InsertSettingMenuCSS()
              rapidDeal() // 预先执行一次，保证该函数不延迟，避免样式插入有延迟
            })
            if (ACConfig.isAdsEnable) { // 先来移除多余的广告内容
              removeAD_baidu_sogou();
            }
            setSlowInterval(() => {
              CONST.flushNode.flush()
            }, 200)
            setSlowInterval(function() {
              if (document.body) {
                rapidDeal(); // 定期调用，避免有时候DOM插入没有执行导致的问题
              }
            }, 800);
            setTimeout(() => {
              InsertSettingMenu(); // 等待menu样式加载，延迟插入menu
              ShowSetting();
            }, 200)
          }
        } catch (e) {
          console.log(e);
        }
        safeWaitFunc("#sp-ac-content", function(checkNode) {
          var options = {
            el: checkNode,
            data: function() {
              return {
                ...AllData,
                LiveConfig: {
                  css_has_error: false
                },
                resetCSS_text: '重置CSS',
                calc_block_data: {}
              }
            },
            methods: {
              changeBgToIndex(idx) {
                ACConfig.baidu.defaultBgUrl = this.CONST.BG_List[idx]
                ACConfig.baidu.BgFit = true
              },
              async labelShowHideEnv(e) {
                let cur = e.srcElement || e.target;
                let className = cur.parentNode.className.replace("container-label ", "");
                CONST.flushNode.insert(await create_CSS_Node(".XX>label,.XX>br{display:unset !important;}.XX>.label_hide{display:none !important;}".replace(/XX/gm, className),
                  "AC-ShowHideItem-" + className), 'body')
                e.stopPropagation();
              },
              syncToBlockList(env) {
                this.ACConfig.UserBlockList = env.target.value.split("\n").filter(item => item !== '');
              },
              removeABlockListItem(e) {
                // 点击移除某个host数据时
                let target = e.srcElement || e.target;
                if (target.tagName.toLowerCase() === "label") {
                  let host = target.dataset.host;
                  ACConfig.UserBlockList.acremove(host);
                }
              },
              ckAddRule() {
                // 手动增加移除规则
                ACConfig.UserBlockList.acpush(this.other.addBlockItem);
                this.other.addBlockItem = "";
              },
              loadCustomStyle() {
                less.render(ACConfig.UserStyleText, async (e, css) => {
                  if (e) {
                    this.LiveConfig.css_has_error = true
                  } else {
                    this.LiveConfig.css_has_error = false
                    css = css.css || ''
                    CONST.flushNode.insert(await create_CSS_Node(css, "AC-userStyle", 'less'), 'head', {
                      isReload: true
                    })
                  }
                });
              },
              saveConfig() {
                if (this.other.curTab === 1 && !this.ACConfig.acceptLicense) {
                  this.other.curTab = 3
                  return
                }
                this.ACConfig.acceptLicense = true

                this.ACConfig.lastSaveTime = new Date().getTime();
                ACSetValue("Config", JSON.stringify(this.ACConfig));
                if (!this.ACConfig.doDisableSug) {
                  acSetCookie("ORIGIN", 1, "www.baidu.com", new Date().getTime() - 86400000);
                  acSetCookie("ISSW", 1, null, new Date().getTime() - 86400000);
                  acSetCookie("ISSW", 1, "www.baidu.com", new Date().getTime() - 86400000);
                }
                setTimeout(function() {
                  window.location.reload();
                }, 200);
              },
              changeResetText() {
                this.lan.zh_cn.fieldset_panel.setting_panel.resetBtn_text = '双击重置'
                this.lan.en.fieldset_panel.setting_panel.resetBtn_text = 'DBl click to Reset'
              },
              resetConfig() {
                // 显示为双击重置
                ACSetValue("Config", '{}');
                setTimeout(function() {
                  window.location.reload();
                }, 200);
              },
              closePanel() {
                document.querySelector("#sp-ac-content").style.display = 'none';
              },
              resetCSS() {
                if (this.resetCSS_text.includes('重置CSS')) {
                  this.resetCSS_text = '确认重置'
                  return
                }
                if (this.resetCSS_text.includes('确认重置')) {
                  this.ACConfig.UserStyleText = DefaultConfig.UserStyleText
                  this.resetCSS_text = '重置CSS'
                  this.loadCustomStyle()
                }
              },
              useThisHuyanColor(env) {
                this.ACConfig.defaultHuYanColor = env.target.value || env.target.dataset.value;
                console.log(this.ACConfig.defaultHuYanColor);
                CONST.fsBaidu.loadHuYanStyle(this.ACConfig.defaultHuYanColor);
              }
            },
            computed: {
              getBlockList() { // 会自动的render到html上去，不用手动去渲染一遍
                let insHTML = "";
                let { list: UserBlockRegList } = this.cal_UserBlockListRegex;
                for (let i = 0; i < this.ACConfig.UserBlockList.length; i++) {
                  let insClass = this.other.curHosts.findIndex(m => {
                    try {
                      let [curHost, curUrl] = m.split("###");
                      return UserBlockRegList[i].test(curHost) || UserBlockRegList[i].test(curUrl);
                    } catch (e) {
                      return (m || '').includes(this.ACConfig.UserBlockList[i])
                    }
                  }) >= 0 ? " ac-block-high" : ""; // 如果当前页面存在，则高亮
                  insHTML += `<li><label class="ac-block-item${ insClass }" data-host="${ this.ACConfig.UserBlockList[i] }">${ this.ACConfig.UserBlockList[i] }</label><label class="ac-block-item ac-block-itemdel" data-host="${ this.ACConfig.UserBlockList[i] }">x</label></li>\n`;
                }
                return insHTML;
              },
              cal_diyBlockListBtn() {
                if (this.other.showBlockListArea) {
                  return this.lan.use.fieldset_panel.setting_panel.setting_panel_second.blockEditBtnEnd_text;
                } else {
                  return this.lan.use.fieldset_panel.setting_panel.setting_panel_second.blockEditBtn_text;
                }
              },
              async cal_UserBlockListRegex() {
                var list = [];
                this.ACConfig.UserBlockList.forEach(one => {
                  safeFunction(() => {
                    one !== null && list.push(new RegExp(one.replace("*", ".*")));
                  }, () => {
                    list.push(one);
                  })
                })
                if (typeof (this.other.addBlockItem) !== "undefined" && this.other.addBlockItem !== "") {
                  safeFunction(() => {
                    list.push(new RegExp(this.other.addBlockItem.replace("*", ".*")));
                  }, () => {
                    list.push(this.other.addBlockItem);
                  })
                }
                this.calc_block_data = {
                  md5: await md5WASM(new TextEncoder().encode(list.join('=='))), // 编码虽然有问题，但是计算md5足够用了
                  list
                }
                return this.calc_block_data
              },
              AdsStyleModeChange() {
                return {
                  v1: CONST.useItem.AdsStyleMode,
                  v2: CONST.useItem.HuYanMode,
                  v3: ACConfig.Style_BaiduLite,
                  v4: ACConfig.isFaviconEnable,
                  v5: CONST.isGoogleSpecial,
                  v6: ACConfig.isRightDisplayEnable,
                  v7: CONST.useItem.BgFit,
                  v8: ACConfig.AdsStyleEnable,
                };
              },
              UserStyleEnableChange() {
                return {
                  v1: ACConfig.isUserStyleEnable
                }
              },
              lanChange() {
                return {
                  v1: ACConfig.isEnLang
                };
              },
              isSaveButtonCanBeSee() {
                return isElementVisible(this.$refs.bottomSaveButton)
              }
            },
            watch: {
              'other.faviconListMap': {
                immediate: true,
                deep: true,
                async handler(val) {
                  if(!ACConfig.isFaviconEnable) return
                  // 遍历所有的数据，然后生成新的数据内容
                  const baseCSS = '*[data-favicon-t]:before{width: 16px; height: 16px; margin-right: 4px; background-size: 100% 100%; vertical-align: text-top;}'
                  const css = Object.entries(val).reduce((preCSS, cur) => {
                    const [, { tagName = '', url = '' }] = cur
                    let nowCSS = ''
                    if (url) {
                      // https://www.xtwind.com/api/index.php?url=???? 挂了。。。
                      // https://statics.dnspod.cn/proxy_favicon/_/favicon?domain=sina.cn
                      // www.google.com/s2/favicons?domain=764350177.lofter.com
                      //如果地址不正确，那么丢弃
                      const imgUrl = "https://favicon.yandex.net/favicon/v2/" + url + "?size=32"
                      nowCSS = tagName + `[data-favicon-t='${ url }']:before{background-image: url('${ imgUrl }');}`
                    }
                    return preCSS + nowCSS
                  }, baseCSS)
                  CONST.flushNode.insert(await create_CSS_Node(css, 'AC-faviconTStyle'), 'head', {
                    isReload: true
                  })
                }
              },
              'ACConfig.isALineEnable': {
                immediate: true,
                async handler(isEnable) {
                  // 动态下划线
                  if (!isEnable) {
                    CONST.flushNode.insert(await create_CSS_Node("a,a em{text-decoration:none !important}", "AC-NoLine"))
                  } else {
                    safeRemove("style[class='AC-NoLine']")
                  }
                }
              },
              // 当前站点的护眼模式变更
              'CONST.useItem.HuYanMode': {
                immediate: true,
                handler(val) {
                  if (val) CONST.fsBaidu.loadHuYanStyle()
                }
              },
              // 当前站点的背景图片地址更换
              'CONST.useItem.defaultBgUrl': {
                handler(imageUrl) {
                  changeSiteBackground(imageUrl)
                }
              },
              calc_block_data: {
                handler() {
                  SiteBlock.renderDisplay()
                }
              },
              AdsStyleModeChange: {
                handler(curVal, preVal) {
                  // 如果数据真的变了，那么调用后续更新，如果没变，那么跳过
                  try{
                    const curStr = JSON.stringify(curVal)
                    const preStr = JSON.stringify(preVal)
                    if(curStr === preStr) return
                  }catch (e){}

                  // 需要先删除原有的节点数据
                  while (true) {
                    const { res, node } = checkDocmentHasNode("AC-")
                    if (res) node.remove();
                    else break;
                  }

                  safeRemove("style[class='AC-Style-expand'],style[class='AC-TwoPageExStyle'],style[class='AC-ThreePageExStyle'],style[class='AC-FourPageExStyle'],style[class='AC-style-logo'],style[class='AC-baiduLiteStyle'],style[class*='HuYanStyle-File']");
                  acCssLoadFlag = false;
                  if(ACConfig.AdsStyleEnable) {
                    CONST.fsBaidu.init()
                  }
                }
              },
              UserStyleEnableChange() {
                if (ACConfig.isUserStyleEnable) {
                  this.loadCustomStyle();
                } else {
                  safeRemove("style[class='AC-userStyle']")
                }
              },
              lanChange() {
                AllData.lan.use = ACConfig.isEnLang ? AllData.lan.en : AllData.lan.zh_cn;
                document.querySelector("#myuser").remove();
              }
            }
          };
          if (typeof (Vue) != "undefined") {
            if (+Vue.version.charAt(0) === 2) {
              vueVM = new Vue(options);
            } else {
              vueVM = Vue.createApp(options).mount(checkNode);
            }
          } else {
            console.error("Vue 未完成初始化--程序无法有效执行");
          }
        }, 250);

        function MainCallback(e) {
          if (e.target != null && typeof (e.target.className) === "string" && e.target.className.toUpperCase().indexOf("AC-") === 0) {
            return;
          } //屏蔽掉因为增加css导致的触发insert动作
        }

        /*以下代码大部分来源于SuprePreloader 感谢 swdyh && ywzhaiqi && NLF 以及 mach6 大佬*/

        /*
        Super_preloaderPlus_one_New: Preload and Autopager.
        Copyright (C) 2020 Mach6

        This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, version 3.

        This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

        You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
         */
        function ac_spfunc(e) {
          console.error("这里有问题")
          e.stopPropagation();
          var t, r = e.currentTarget;
          const Tween = {
            Linear: function Linear(e, t, r, n) {
              return r * e / n + t;
            },
            Quad: {
              easeIn: function easeIn(e, t, r, n) {
                return r * (e /= n) * e + t;
              },
              easeOut: function easeOut(e, t, r, n) {
                return -r * (e /= n) * (e - 2) + t;
              },
              easeInOut: function easeInOut(e, t, r, n) {
                return (e /= n / 2) < 1 ? r / 2 * e * e + t : -r / 2 * (--e * (e - 2) - 1) + t;
              }
            },
            Cubic: {
              easeIn: function easeIn(e, t, r, n) {
                return r * (e /= n) * e * e + t;
              },
              easeOut: function easeOut(e, t, r, n) {
                return r * ((e = e / n - 1) * e * e + 1) + t;
              },
              easeInOut: function easeInOut(e, t, r, n) {
                return (e /= n / 2) < 1 ? r / 2 * e * e * e + t : r / 2 * ((e -= 2) * e * e + 2) + t;
              }
            },
            Quart: {
              easeIn: function easeIn(e, t, r, n) {
                return r * (e /= n) * e * e * e + t;
              },
              easeOut: function easeOut(e, t, r, n) {
                return -r * ((e = e / n - 1) * e * e * e - 1) + t;
              },
              easeInOut: function easeInOut(e, t, r, n) {
                return (e /= n / 2) < 1 ? r / 2 * e * e * e * e + t : -r / 2 * ((e -= 2) * e * e * e - 2) + t;
              }
            },
            Quint: {
              easeIn: function easeIn(e, t, r, n) {
                return r * (e /= n) * e * e * e * e + t;
              },
              easeOut: function easeOut(e, t, r, n) {
                return r * ((e = e / n - 1) * e * e * e * e + 1) + t;
              },
              easeInOut: function easeInOut(e, t, r, n) {
                return (e /= n / 2) < 1 ? r / 2 * e * e * e * e * e + t : r / 2 * ((e -= 2) * e * e * e * e + 2) + t;
              }
            },
            Sine: {
              easeIn: function easeIn(e, t, r, n) {
                return -r * Math.cos(e / n * (Math.PI / 2)) + r + t;
              },
              easeOut: function easeOut(e, t, r, n) {
                return r * Math.sin(e / n * (Math.PI / 2)) + t;
              },
              easeInOut: function easeInOut(e, t, r, n) {
                return -r / 2 * (Math.cos(Math.PI * e / n) - 1) + t;
              }
            },
            Expo: {
              easeIn: function easeIn(e, t, r, n) {
                return 0 == e ? t : r * Math.pow(2, 10 * (e / n - 1)) + t;
              },
              easeOut: function easeOut(e, t, r, n) {
                return e == n ? t + r : r * (1 - Math.pow(2, -10 * e / n)) + t;
              },
              easeInOut: function easeInOut(e, t, r, n) {
                return 0 == e ? t : e == n ? t + r : (e /= n / 2) < 1 ? r / 2 * Math.pow(2, 10 * (e - 1)) + t : r / 2 * (2 - Math.pow(2, -10 * --e)) + t;
              }
            },
            Circ: {
              easeIn: function easeIn(e, t, r, n) {
                return -r * (Math.sqrt(1 - (e /= n) * e) - 1) + t;
              },
              easeOut: function easeOut(e, t, r, n) {
                return r * Math.sqrt(1 - (e = e / n - 1) * e) + t;
              },
              easeInOut: function easeInOut(e, t, r, n) {
                return (e /= n / 2) < 1 ? -r / 2 * (Math.sqrt(1 - e * e) - 1) + t : r / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
              }
            },
            Elastic: {
              easeIn: function easeIn(e, t, r, n, a, o) {
                return 0 == e ? t : 1 == (e /= n) ? t + r : (o || (o = .3 * n), !a || a < Math.abs(r) ? (a = r,
                  i = o / 4) : i = o / (2 * Math.PI) * Math.asin(r / a), -a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - i) * (2 * Math.PI) / o) + t);
                var i;
              },
              easeOut: function easeOut(e, t, r, n, a, o) {
                return 0 == e ? t : 1 == (e /= n) ? t + r : (o || (o = .3 * n), !a || a < Math.abs(r) ? (a = r,
                  i = o / 4) : i = o / (2 * Math.PI) * Math.asin(r / a), a * Math.pow(2, -10 * e) * Math.sin((e * n - i) * (2 * Math.PI) / o) + r + t);
                var i;
              },
              easeInOut: function easeInOut(e, t, r, n, a, o) {
                return 0 == e ? t : 2 == (e /= n / 2) ? t + r : (o || (o = n * (.3 * 1.5)), !a || a < Math.abs(r) ? (a = r,
                  i = o / 4) : i = o / (2 * Math.PI) * Math.asin(r / a), e < 1 ? a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - i) * (2 * Math.PI) / o) * -.5 + t : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * n - i) * (2 * Math.PI) / o) * .5 + r + t);
                var i;
              }
            },
            Back: {
              easeIn: function easeIn(e, t, r, n, a) {
                return null == a && (a = 1.70158), r * (e /= n) * e * ((a + 1) * e - a) + t;
              },
              easeOut: function easeOut(e, t, r, n, a) {
                return null == a && (a = 1.70158), r * ((e = e / n - 1) * e * ((a + 1) * e + a) + 1) + t;
              },
              easeInOut: function easeInOut(e, t, r, n, a) {
                return null == a && (a = 1.70158), (e /= n / 2) < 1 ? r / 2 * (e * e * ((1 + (a *= 1.525)) * e - a)) + t : r / 2 * ((e -= 2) * e * ((1 + (a *= 1.525)) * e + a) + 2) + t;
              }
            },
            Bounce: {
              easeIn: function easeIn(e, t, r, n) {
                return r - Tween.Bounce.easeOut(n - e, 0, r, n) + t;
              },
              easeOut: function easeOut(e, t, r, n) {
                return (e /= n) < 1 / 2.75 ? r * (7.5625 * e * e) + t : e < 2 / 2.75 ? r * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : e < 2.5 / 2.75 ? r * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : r * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t;
              },
              easeInOut: function easeInOut(e, t, r, n) {
                return e < n / 2 ? .5 * Tween.Bounce.easeIn(2 * e, 0, r, n) + t : .5 * Tween.Bounce.easeOut(2 * e - n, 0, r, n) + .5 * r + t;
              }
            }
          };
          const TweenM = ["Linear", "Quad", "Cubic", "Quart", "Quint", "Sine", "Expo", "Circ", "Elastic", "Back", "Bounce"];
          const TweenEase = ["easeIn", "easeOut", "easeInOut"];
          var prefs = {
            s_method: 3,
            s_ease: 2,
            s_FPS: 60,
            s_duration: 333,
          };

          function getRelativeDiv(e) {
            var t = r.id;
            return (t = t.replace(/(sp-separator-)(.+)/, (function(t, r, n) {
              return r + String(Number(n) + ("pre" == e ? -1 : 1));
            }))) ? document.getElementById(t) : null;
          }

          function sp_transition(e, t) {
            var r = sp_transition.TweenF;
            r || (r = (r = Tween[TweenM[prefs.s_method]])[TweenEase[prefs.s_ease]] || r, sp_transition.TweenF = r);
            var n = 1e3 / prefs.s_FPS, a = 0, o = e, i = t - e, s = Math.ceil(prefs.s_duration / n),
              c = window.scrollX;
            !function transition() {
              var e = Math.ceil(r(a, o, i, s));
              window.scroll(c, e), a < s && (a++, setTimeout(transition, n));
            }();
          }

          function scrollIt(e, t) {
            sp_transition(e, t);
          }

          switch (e.target.id) {
            case "sp-sp-gotop":
              scrollIt(window.scrollY, 0);
              break;

            case "sp-sp-gopre":
              var n = getRelativeDiv("pre");
              if (!n) return;
              t = window.scrollY;
              var a = n.getBoundingClientRect().top;
              a = t - (r.getBoundingClientRect().top - a);
              scrollIt(t, a);
              break;

            case "sp-sp-gonext":
              var o = getRelativeDiv("next");
              if (!o) return;
              t = window.scrollY;
              var i = o.getBoundingClientRect().top;
              i = t + (-r.getBoundingClientRect().top + i);
              scrollIt(t, i);
              break;

            case "sp-sp-gobottom":
              scrollIt(window.scrollY, Math.max(document.documentElement.scrollHeight, document.body.scrollHeight));
          }
        }

        function windowscroll(fn = () => {
        }) {
          safeWaitFunc(() => document.documentElement, () => {
            var beforeScrollTop = document.documentElement.scrollTop
            window.addEventListener("scroll", function(e) {
              var afterScrollTop = document.documentElement.scrollTop,
                delta = afterScrollTop - beforeScrollTop;
              if (delta === 0) return false;
              fn(delta > 0 ? "down" : "up", e);
              beforeScrollTop = afterScrollTop;
            }, false);
          })
        }

        // 2秒后才绑定滚动事件
        safeWaitFunc('body', () => {
          setTimeout(() => {
            windowscroll(async function(direction, e) {
              if (direction === "down") { // 下滑才准备翻页
                let spl = document.querySelector("#sp-fw-a_enable");
                // 开启后，且在非（suprepreloader启用）时均可
                if (ACConfig.isAutopage === true && !(spl && spl.checked === true)) {
                  var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                  let scrollDelta = 888;
                  if (document.documentElement.scrollHeight <= document.documentElement.clientHeight + scrollTop + scrollDelta && curSite.pageLoading === false) {
                    curSite.pageLoading = true;
                    if (curSite.SiteTypeID === SiteType.DUCK) { // 可以用已有的方法来实现了
                      if (!ACConfig.normalizeDuck || +ACConfig.duck.AdsStyleMode >= 3) { // 如果没有开启，那么手动翻页 || 如果是双列的时候，似乎并不会自动触发翻页效果
                        document.querySelector("#links .result--more a").click();
                        setTimeout(function() {
                          curSite.pageLoading = false;
                        }, 5000);
                      }
                    } else {
                      ShowPager.loadMorePage();
                      if (curSite.pager && curSite.pager.stylish) {
                        CONST.flushNode.insert(await create_CSS_Node(curSite.pager.stylish, "AC-pager-stylish"))
                      } else {
                        curSite.pageLoading = false;
                        console.info('当前站点没有配置pager')
                      }
                    }
                  }
                }
              }
            });
          }, 2000)
        })
        var ShowPager = {
          getFullHref: function(e) {
            if (e === null) return '';
            "string" != typeof e && (e = e.getAttribute("href"));
            var t = this.getFullHref.a;
            return t || (this.getFullHref.a = t = document.createElement("a")), t.href = e, t.href;
          },
          createDocumentByString: function(str) {
            // string转为DOM
            if (!str) {
              console.error("[AC-Script]", 'No string found to be converted to DOM');
              return;
            }

            if (document.documentElement.nodeName !== 'HTML') {
              return new DOMParser().parseFromString(str, 'application/xhtml+xml');
            }
            /**@type {HTMLDocument} */


            var doc;

            try {
              // firefox and chrome 30+，Opera 12 会报错
              doc = new DOMParser().parseFromString(str, 'text/html');
            } catch (ex) {}

            if (doc) {
              return doc;
            }

            if (document.implementation.createHTMLDocument) {
              doc = document.implementation.createHTMLDocument('superPreloader');
            } else {
              try {
                //@ts-ignore
                doc = document.cloneNode(false);
                doc.appendChild(doc.importNode(document.documentElement, false));
                doc.documentElement.appendChild(doc.createElement('head'));
                doc.documentElement.appendChild(doc.createElement('body'));
              } catch (e) {}
            }

            if (!doc) return;
            var range = document.createRange();
            range.selectNodeContents(document.body);
            var fragment = range.createContextualFragment(str);
            doc.body.appendChild(fragment);
            var headChildNames = {
              TITLE: true,
              META: true,
              LINK: true,
              STYLE: true,
              BASE: true
            };
            var child;
            var body = doc.body;
            var bchilds = body.childNodes;

            for (let i = bchilds.length - 1; i >= 0; i--) {
              // 移除head的子元素
              child = bchilds[i];
              if (headChildNames[child.nodeName]) body.removeChild(child);
            }

            return doc;
          },
          loadMorePage: async function() {
            if (curSite.pager) {
              let curPageEle = getElementByXpath(curSite.pager.nextLink);
              var url = this.getFullHref(curPageEle);
              if (curSite.SiteTypeID === SiteType.GOOGLE) {
                if (navigator.userAgent.toLowerCase().includes('macintosh')) {
                  // MARK 为了兼容百度在safari下的
                  url = url.replace('https://', 'http://');
                }
              }
              if (url === '') return;
              var sepImgs = {
                top: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWtJREFUeNrclE0rRGEUx8c1GUpRJIVIZGdhZCVr38GGhaI0ZXwCkliglChZEcvJxhdgYWOjLEUpm/EyiLzze+o8dTzdO3PljoVTv7rPc8/5d+6555xYrEhWop6boda5+6l9wjWcWpF+WIbqCJJ9hFRcDr3QAIkIhKugz5PDfkSixkphz5aiAnqgE8rgWRxGoSOPyBkswQuUwyscw4HrmFCZL8Kt/JAg7mEFPEmo4FdPwk0BUcsdzIap0TQ8qMAPuICcEjLnd+VjSjcfJNgIc/DkZGSymYGsnK9EZMrxe4MFaNGiZjC2fT5zQ3p7QDK1dR2GSljziclAvRUe8nHYVA4jjvC43NfAuk/smB2QNqcsWxKcLbAKTFnS0hWD6n27Fd6FLqiDI5iQmQ9jpiVT0sNJ6aYd7dAE3QHBbinSAX5JWWaxuLo8F35jh/bBK9Y+/r/Cl6pLcnna8NvuDGMnslpbZRpXZYT/3r4EGACZL3ZL2afNFAAAAABJRU5ErkJggg==",
                bottom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXFJREFUeNrM1c8rBGEcx/FdtCEkLqYtpdwkKSUHUhxwITdK+Z3yM2cOLnJ39Cc44SgHScmJwlFxsIdlCScO6/2t76Onp52dXTtbnno1M8+Pz84+zzMzkcg/KA3oRTzM0A4cI4VTdIUVPIM3pPGO5aABJTkGx1BqjYmFFZxW7nnBwXmXogWX6bEGc2jEIU7+kNWDUSSwZyqndSvJ3N1g2Bm0oLtB2j+w7rQP4MpqXzRT0YRaPW/BthMedYLs60HsoE2vq9BsPwAJa8XFLUa0fUrvROo/saT1Q9adGimdlt8yj6TT6Q6d2vaida9YRbtP6EqmBZC5fHA6X+AAz1bwEc6cfk9+oaZM4NoZJL70+J2hTaZtNpet041zK8yP/Mgl+rOF1emr0UM1xnAfEPyISd0Jno6vtx+QuM6PZ22lpO7dbEV2Siv6rPeIjNs1HdYC7ixfG+YBqdTVDqPIv6iIWvO7iXGUFxAqi72PraJ9IH8EGACQcYjYRd5GHwAAAABJRU5ErkJggg==",
                pre: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAASlJREFUeNpiYBjOoBiIrwJxFRAzUsvQViD+CMT/gfgTEPdRy9BPUENh+AsQ91JiaAuSS9HxZ3INb8Hi0v+UurwF6qL/ROBvQNxDrKFfkTT+A+JnQPwBKfJA/L9Ian7ic7kMEHcC8Q80F3UAcRsQv4by30INaUJT9weaWhSQDRUB4uVYvLkYiAWAOBopvEFBlArEPEA8G4ue9UAsATM4EYuCJUgKMtAMLoSKCwPxXCx6c1igClTQgmUZVPNrHMEGy3mgYCkCYiYgTkCSV4UZvA2IjYBYDIgvQbPvOyJTECid5wHxbyA2BuL3QLwRWYEsEJvg0IweFEU41IEMlgcxWJAEH0MxJeAsjMFEq6Jw+Br8BimVfMCTDEkG7EBcA8T3oWUJx4DVYwABBgCannnSzbgwIQAAAABJRU5ErkJggg==",
                next: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAT1JREFUeNrc1b1KA0EYheEl/iARFFEkKl6D0UK8CrEVrCwEexFCtBIlRWIjsfEiLL0FKzs7QUWxM2piFMUkvhPOwLAs2TGuCn7wkNll5jC7+w0Jgv9avdjAObbQn1TwCu7QwhWW4xakPIOHMKzxGCaSCm6ioXHLZ0Hqpz7KrwRPIvvNvBlM2zYyNY8cMjhDHo9fCBzErnIqKNjgRSxpvIABbOLes2MKWHfuXdhXcR2avKrJ4zGhI9gLhQbq9XaZgGO1kutIOzIHpKp7NawhjYOINSeY6lFwHacw17P6NTWHd4xqnNbcS83LObtsaCPbEW+gXUW8ODswC27xoOsn3ODDmfOGss9XLuE54jGjvPqGuuG1mFDzZIfdNHynnde7DbW1r5DwTstJHP2iE55YqD36ebXZDvr+7L/sU4ABAIpVZWnoA5GkAAAAAElFTkSuQmCC",
                next_gray: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtxJREFUeNrclc9L2mEcx7/6NbVZqRVj7pIOlIUuZ1HMgv0BDcqT7JrskH13ELPBF7eTvz10HznWQBlBRIfBXIfBLmqXscvYZWPKrMNIU9Apmrr34/w6i0ovMZjw+H0+z/N8Xt+Pn/fn80hR/+WHYRhBIpFwRKPRz/F4/KnD4RB28xH0Ah4cHHyoUCjsIpFIIZPJHkml0m9Yfn2ZD78XcL1eH6rValIMCmMUtqKbD7/HbNQxaq15oxcH/lXpcmXgtnh2u/2mXC6/DqE+sSxLlUqlniE0TVPBYJAqFot6+GV9Pt+PJthms80sLS2xEonkhlgs/jgwMOBcXV3N5fP5rlCcp9bX1yWLi4uecrk8U6lUshDY3wRbLJYFGKZsNksq4N78/LwY9hOn05k5Ojqi+PzTGePxeFwZUl6vd8hkMvkPDg6sZJ2M5eXlr1wqUu2kA5JOpy2IAO+oO9fW1n5mMpk2nDjmcjkKNU25XC652Wx2pVIp65mXJ2nyjUPpqakpNZxuA8Y5T87OzsobjcYHpVKpGhsbe1CtVkXYqxQKhTdqtfqL1Wr1JpPJxxyU5Lq/vz8aCoX8TTDatYiFhF6vxx5tAJwm8OPj48m5ubmKSqUaAWwSa9eQw6JGo/luNBoNh4eHbAe0JhAINsLh8LNAIJCiudhxB+Qh2ludTifDAQLvI3AIch+Rkl8jJlrhCbOqgfoLmDepOF/BfGNra2sFFZFtvqgzMbFYjAiyp9Vqh4VC4cTJyYmQ90epIQJtHRO1bA5aRhAvdnZ2GI/H87cEz5YPgeOS2RsfHx9B7u+gOi68yQAtYX9zd3eXgZCna/s8By5ypGUUzhOISHgO9BfWXwG6chZ6IbiVc6LwnsFgGIVAepLzjk4rYW1ze3ubcbvd53fjZV2FaqGQ63fT09PDMO9i9BEoon0J9Rm/339xm3dr2f39fVLX7wFvoMVvoYWfRyIRFndD/Z/8nf0WYAA8EC1Z/ZNm4gAAAABJRU5ErkJggg==",
                pre_gray: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAslJREFUeNrclTtMWmEUxz/uvTzlIUhpNMR0aGNjrNHSmHTqRJyadujQDbSGRwJUaYCmDizqUEw6ODVNGgbpYCfSpFINCQzFR9oyMXRsXFCsAXkIKNL/R7gGWxOsSdPEk5zc3O+e87vn+59zv0vIpbSJiQmyubn5LBKJpNbX11+4XC5Buxy2XYDNZiMOh2OW4ziPTCbTi8XikeHh4SsSieQTXnIxsN1uJ1ardVYgEDgPDw+V9Xqd1Go1Mcuyg7AuuVy+sra29ndgVEnGx8dnhEKhs1qtKgE/eXZ8fCzC+q3+/n6tSqVaSSQS5wM7nU5iMplmsF1XpVI5BeXt6OhIBFkGAe9SKpV/wNmzKjWbzRT6tFwuK86CUqPrkIVWPjQwMKBWKBSn4Ozv0LGxsRmRSDSFSjua0Do8TRWAS+B5+B68g/IhixCNvQPN1WjuieZsS/f1aNQ0wzBuaCqlUCQRtVr9Es1K4kVDWJNhrQjAIiqMlkqle804FnkjBoOhEzv4vrGxkW2ALRaLFrq+QoAV2nE8tLe3dzEYDE5vb2939vX1PcBkiKVSaQ1jForFYq+NRqMum83ebsYzmJq7sGu4xhkKxsDfB/AxnO860ev1oeXlZU8gEMgmk0kFqmw8o9dUKiWfn58vhMPh54h7S+OpQXNSLBYfejyeR1yzw9dbRon09PS8W11dnfL5fJl8Pk+0Wi3hk5vyCNBY4vV6f0Im9+joKJNOp818o8G70ah4aWnpIzSKYCa/dXd3B+PxuHNycjKzs7NzAms1+qFQy+VydDRz0WjUpdPp3tB8TFM0FAqFGxXPzc19plJrNJqraMoXt9tNt3Suc+Tg4ICeJfmFhQVLoVAwoKG7fr//B8cHAL6Fy9ZFDinaG/r5w77ya8y/OhEvKRhjtIup2YMTeBb3mXY53HnAmNkP+/v7NzHTTwAO4f79f/ud/RJgAOLcRNZqLojMAAAAAElFTkSuQmCC",
              };
              CONST.flushNode.insert(await create_CSS_Node(".sp-separator{line-height:1.8 !important;opacity:1 !important;position:relative !important;float:none !important;top:0 !important;left:0 !important;min-width:366px;width:auto;text-align:center !important;font-size:14px !important;display:block !important;padding:3px 0 !important;margin:5px 10px 8px;clear:both !important;border-style:solid !important;border-color:#cccccc !important;border-width:1px !important;-moz-border-radius:30px !important;border-radius:30px !important;background-color:#ffffff !important;}.sp-separator:hover{box-shadow:0 0 11px rgba(33,33,33,0.2);}#sp-separator-hover{display:none;}.sp-separator:hover #sp-separator-hover{display:block;}.sp-separator .sp-someinfo{position:absolute !important;right:10px !important;font-size:12px !important;font-style:italic !important;background:none !important;}.sp-separator span{vertical-align: middle;cursor: pointer;padding: 0;margin: 0 5px;display: inline-block; width:22px;height:22px;}.sp-separator a{margin:0 20px 0 -6px !important;display:inline !important;text-shadow:#fff 0 1px 0 !important;background:none !important;color:#595959 !important;}.sp-separator input{padding:0 !important;line-height:23px !important;}.sp-separator .sp-md-span{font-weight:bold !important;margin:0 20px !important;}#sp-sp-md-number{width:6ch !important;vertical-align:middle !important;display:inline-block !important;text-align:left !important;}" +
                `.ac_sp_top{background-image:url('${ sepImgs.top }')}` +
                `.ac_sp_pre{background-image:url('${ sepImgs.pre }')}` +
                `.ac_sp_next{background-image:url('${ sepImgs.next }')}` +
                `.ac_sp_bottom{background-image:url('${ sepImgs.bottom }')}` +
                `.ac_sp_next_gray{background-image:url('${ sepImgs.next_gray }')}` +
                `.ac_sp_pre_gray{background-image:url('${ sepImgs.pre_gray }')}`,
                "AC-Preload"))
              if (curSite.pageUrl === url) {
                console.error("[AC-Script]", "翻页到达底部了 - 或者异常 - 出现异常请直接反馈作者修改");
                return;
              }// 不会重复加载相同的页面
              console.log("加载翻页地址：" + url)
              curSite.pageUrl = url;
              // 对url的数据进行读取
              curSite.pager.startFilter && curSite.pager.startFilter();
              GM_xmlhttpRequest({
                url: url,
                method: "GET",
                timeout: 5000,
                onload: function(response) {
                  
                  try {
                    var newBody = ShowPager.createDocumentByString(response.responseText);

                    const [Rule_insertTo = '', Rule_insertMode = 1] = curSite.pager.HT_insert || []
                    let pageElems = getAllElements(curSite.pager.pageElement, newBody, newBody);
                    const scriptElems = getAllElements('//script', newBody, newBody);

                    let toElement;
                    
                    if (pageElems.length) {
                      const curPageElems = getAllElements(curSite.pager.pageElement, document, document)
                      const pELast = curPageElems[curPageElems.length - 1];
                      toElement = pELast.nextSibling ? pELast.nextSibling : pELast.parentNode.appendChild(document.createTextNode(' '));
                    }
                    if (Rule_insertTo) {
                      toElement = getAllElements(Rule_insertTo)[0];
                    }
                    if (pageElems.length >= 0) {
                      // 处理最后一个翻页按钮
                      let nextEs = document.querySelectorAll("#sp-sp-gonext");
                      if (nextEs.length > 0) {
                        let lastE = nextEs[nextEs.length - 1];
                        lastE.classList.replace("ac_sp_next_gray", "ac_sp_next");
                      }
                      // 插入翻页按钮元素
                      curSite.pageNum++;
                      let addTo = "beforeend";
                      if (Rule_insertMode === 1) addTo = "beforebegin";
                      
                      const insertPager = document.createElement('div')
                      insertPager.id = "sp-separator-ACX".replace(/ACX/gm, curSite.pageNum)
                      insertPager.className = "sp-separator AC"
                      insertPager.innerHTML = `
                          <a class='sp-sp-nextlink' target='_blank'><b>第 <span style='color:#595959!important;'>ACX</span> 页</b></a>
                          <span id="sp-sp-gotop" class='ac_sp_top' title='去到顶部'></span>
                          <span id="sp-sp-gopre" class='${ curSite.pageNum <= 2 ? "ac_sp_pre_gray" : "ac_sp_pre" }' title='上滚一页' ></span>
                          <span id="sp-sp-gonext" class='ac_sp_next_gray' title='下滚一页'></span>
                          <span id="sp-sp-gobottom" class='ac_sp_bottom' title='去到底部' ></span>`
                        .replace(/ACX/gm, curSite.pageNum);
                      
                      if(Rule_insertMode === 1) {
                        toElement.parentNode.insertBefore(insertPager, toElement)
                        
                        // 插入新页面元素
                        pageElems.forEach(function(one) {
                          toElement.parentNode.insertBefore(one, toElement)
                        });
                      } else {
                        toElement.appendChild(insertPager)

                        pageElems.forEach(function(one) {
                          toElement.appendChild(one)
                        });
                      }
                      
                      document.querySelectorAll(".sp-separator.AC:not([bind])").forEach(function(per) {
                        per.setAttribute("bind", 1);
                        per.addEventListener("click", ac_spfunc);
                      });

                      // 插入scripts & style - 保证js加载
                      if (curSite.SiteTypeID === SiteType.GOOGLE) {
                        var scriptText = "";
                        scriptElems.forEach((one) => {
                          scriptText += one.innerHTML;
                        });

                        const scriptNode = document.createElement("script");
                        scriptNode.innerHTML = scriptText;
                        toElement.appendChild(scriptNode)
                      }

                      // 替换待替换元素
                      try {
                        if (curSite.pager.replaceE) {
                          let oriE = getAllElements(curSite.pager.replaceE);
                          let repE = getAllElements(curSite.pager.replaceE, newBody, newBody);
                          if (oriE.length === repE.length) {
                            if (oriE.length === 0) {
                              throw "翻页-替换翻页元素 无 'replaceE' 待替换的";
                            }
                            for (let i = 0; i < oriE.length; i++) {
                              oriE[i].outerHTML = repE[i].outerHTML;
                            }
                          }
                        }
                      } catch (e) {
                        console.log(e);
                      }
                    }
                  } catch (e) {
                    console.log(e);
                  }
                  curSite.pageLoading = false;
                },
                onerror: function() {
                  curSite.pageLoading = false;
                }
              });
            }
          },
        };

        async function AddCustomStyle() {
          if (ACConfig.isUserStyleEnable) {
            less.render(ACConfig.UserStyleText, async(e, css) => {
              if (!e) {
                css = css.css || ''
                CONST.flushNode.insert(await create_CSS_Node(css, "AC-userStyle"), 'head', {
                  isReload: true
                })
              }
            });
          } else {
            // 为了方便调整样式和查看效果，暂时不移除
            // safeRemove("style[class='AC-userStyle']")
          }
          CONST.flushNode.insert(await create_CSS_Node(".opr-recommends-merge-imgtext{display:none!important;}" + // 移除百度浏览器推广
            ".res_top_banner{display:none!important;}" + // 移除可能的百度HTTPS劫持显示问题
            ".headBlock, body>div.result-op{display:none;}" // 移除百度的搜索结果顶部一条的建议文字 & 移除可能出现的白屏现象
            , "AC-special-BAIDU"))

          // 添加 自定义的动画
          const aniStyle =
`@keyframes ani_leftToright {
  0% {
    transform: translateX(-32px);
    opacity: 0.2;
  }
  20% {
    opacity: 0.5;
  }
  30% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}
/* ani */
@keyframes ani_bottomTotop {
  0% {
    transform: translateY(32px);
    opacity: 0.2;
  }
  20% {
    opacity: 0.5;
  }
  30% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes ani_topTobuttom {
  0% {
    transform: translateY(-32px);
    opacity: 0.2;
  }
  20% {
    opacity: 0.5;
  }
  30% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes ani_hideToShow {
  0% {
    display: none;
    opacity: 0.2;
  }
  20% {
    opacity: 0.5;
  }
  30% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes ani_showToHide {
  0% {
    display: none;
    opacity: 1;
  }
  20% {
    opacity: 0.8;
  }
  30% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.3;
  }
}
.aniDelete {
  transition: all 0.15s cubic-bezier(0.4, 0, 1, 1);
  opacity: 0.1
}`;
          CONST.flushNode.insert(await create_CSS_Node(aniStyle, "AC-AnimationStyle"))
        }

        /**这东西以后会用上**/
        function getSearchValue() {
          let kvl = location.search.substr(1).split("&");
          let searchV = "";
          for (let i = 0; i < kvl.length; i++) {
            let value = kvl[i].replace(/^(wd|query|q)=/, "");
            if (value !== kvl[i]) {
              searchV = value;
            }
          }
          //  '+' 百度、搜狗、必应、谷歌、好搜
          searchV = searchV.replace("+", " ");
          return searchV;
        }

        async function rapidDeal() {
          try {
            if (curSite.SiteTypeID !== SiteType.OTHERS) {
              try {
                if (ACConfig.isAdsEnable) { // 移除多余的广告内容
                  removeAD_baidu_sogou();
                }
                RedirectHandle(); // 处理主重定向
                if (ACConfig.isFaviconEnable && typeof (curSite.FaviconType) !== 'undefined') { // 显示favicon图标
                  // 延迟2秒加载，减少可能出现的问题
                  addFavicon(document.querySelectorAll(curSite.FaviconType)); // 添加Favicon显示
                } else {
                  safeRemove(".AC-faviconTStyle");
                  document.querySelectorAll(curSite.FaviconType).forEach((one) => {
                    one.removeAttribute("ac_faviconstatus");
                  })
                }
                if (ACConfig.isCounterEnable) {
                  // 延迟加载，避免页面出现js问题
                  setTimeout(() => {
                    addCounter(document.querySelectorAll(curSite.CounterType)); // 显示计数器
                  }, 800)
                } else {
                  document.querySelectorAll(".AC-CounterT").forEach(one => {
                    one.parentElement.removeAttribute('SortIndex');
                    one.remove()
                  })
                }
                if (ACConfig.doDisableSug) { // 不启用移动预测[默认]
                  acSetCookie("ORIGIN", 2, "www.baidu.com");
                  acSetCookie("ISSW", 1);
                  acSetCookie("ISSW", 1, "www.baidu.com");
                }
                // if(CONST.useItem.HuYanMode === false && document.querySelector("style[class*='darkreader']") != null) {
                //   CONST.useItem.HuYanMode = true;
                // }
                if (ACConfig.isBlockEnable && curSite.SiteTypeID !== SiteType.SOGOU) { // 启用屏蔽功能- 对每一个新增的地址都要处理
                  // 延迟执行，减少页面损耗
                  SiteBlock.init();
                }
                if (document.body) {
                  if (!ACConfig.isRightDisplayEnable) { // 右侧栏显示
                    document.body.classList.remove("showRight")
                  } else if (!document.body.classList.contains('showRight')) {
                    document.body.classList.add("showRight")
                  }
                  if (curSite.SiteTypeID === SiteType.BAIDU && location.href.includes("tn=news")) {
                    if(!document.body.hasAttribute('news')) document.body.setAttribute("news", "1");
                  } else {
                    document.body.removeAttribute("news");
                  }
                }

              } catch (e) {
                console.error(e)
              }
            }

          } catch (e) {
            console.log(e);
          }
        }

        function acSetCookie(cname, cvalue, domain, exdays) {
          try {
            exdays = exdays || 30;
            let d = new Date();
            domain = (domain ? "domain=" + domain : "") + ";";
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + "; " + domain + expires + ";path=/;SameSite=None;Secure";
          } catch (e) {
          }
        }

        /**
         * isBaiduLink = 是否为未处理之前的百度链接
         * */
        function getNodeHost(sitetpNode) {
          if (!sitetpNode) return {}
          if (curSite.SiteTypeID === SiteType.BAIDU) {
            const href = sitetpNode.getAttribute("href");
            if (href != null && !href.includes("baidu.com/link")) {
              // 已经解析出来了
              return { curHost: getTextHost(href), curUrl: href };
            } else {
              const host = getTextHost(sitetpNode.innerText || sitetpNode.textContent)
              return { curHost: host, curUrl: host, isBaiduLink: true }; // 未被解密
            }
          } else if (sitetpNode instanceof HTMLAnchorElement) {
            return { curHost: sitetpNode.host, curUrl: sitetpNode.href };
          } else {
            const host = getTextHost(sitetpNode.innerText || sitetpNode.textContent)
            return { curHost: host, curUrl: host };
          }
        }

        function RedirectHandle() {
          // 处理主重定向
          if (curSite.SiteTypeID === SiteType.OTHERS || curSite.SiteTypeID === SiteType.SOGOU) return;
          if (ACConfig.isRedirectEnable) {
            if (curSite.Stype_Normal) { // 如果定义了，那么就去处理重定向
              // 百度搜狗bing去重定向
              resetURLNormal();
              if (checkISBaiduMain()) {
                document.querySelectorAll(".s_form .index-logo-src[src*='gif'], .s_form .index-logo-srcnew[src*='gif']").forEach(function(per) {
                  per.src = "https://pic.rmb.bdstatic.com/c86255e8028696139d3e3e4bb44c047b.png";
                  // 神奇的百度百家号
                  // https://imgsa.baidu.com/fex/pic/item/8718367adab44aedcc91ab2bbe1c8701a08bfb26.jpg
                  // https://baidu.ntaow.com/newcss/baidu.png
                });
              }
            }
            if (curSite.SiteTypeID === SiteType.GOOGLE) removeOnMouseDownFunc(); // 移除onMouseDown事件，谷歌去重定向
            if (curSite.SiteTypeID === SiteType.MBAIDU) removeMobileBaiduDirectLink(); // 处理百度手机版本的重定向地址
            removeRedirectLinkTarget(); // 只移除知乎的重定向问题 & 百度学术重定向问题
            safeRemove(".res_top_banner"); // 移除百度可能显示的劫持
          }

          try { // 放入异常捕获，防止由于html插入过慢导致的js终止
            if (!ACConfig.AdsStyleEnable) {
              document.querySelectorAll("input[name*='sp-ac-a_force_style_']").forEach(per => {
                per.setAttribute("disabled", "disabled");
                per.parentNode.setAttribute("title", "请开启自定义样式")
              });
            } else {
              document.querySelectorAll("input[name*='sp-ac-a_force_style_']").forEach(per => {
                per.removeAttribute("disabled");
                per.parentNode.setAttribute("title", "AC-自定义样式内容")
              });
            }
            if (!ACConfig.isBlockEnable) {
              document.querySelectorAll("#sp-ac-removeBlock, #sp-ac-blockBtnDisplay").forEach(per => {
                per.setAttribute("disabled", "disabled");
                per.parentNode.setAttribute("title", "请开启拦截功能")
              });
            } else {
              document.querySelectorAll("#sp-ac-removeBlock, #sp-ac-blockBtnDisplay").forEach(per => {
                per.removeAttribute("disabled");
                per.parentNode.setAttribute("title", "AC-自主拦截功能")
              });
            }
          } catch (e) {
          }
        }

        function ACtoggleSettingDisplay(e) {
          e.stopPropagation();
          // 显示？隐藏设置界面
          if (document.querySelector(".iframe-father iframe") === null) {
            document.querySelector(".iframe-father").insertAdjacentHTML("beforeend", "<iframe src='https://ghbtns.com/github-btn.html?user=langren1353&repo=GM_script&type=star&count=true' frameborder='0' scrolling='0' style='height: 20px;max-width: 108px;padding-left:5px;box-sizing: border-box;margin-bottom: -5px;display:unset !important;'></iframe>");
          }
          setTimeout(function() {
            if (document.querySelector("#sp-ac-content").style.display === 'block') {
              document.querySelector("#sp-ac-content").style.display = 'none';
            } else {
              DBConfig.oldVersion = ACConfig.oldVersion = GM_info.script.version; // 只需要写出一部分的关键数据即可
              ACSetValue("Config", JSON.stringify(DBConfig));
              document.querySelector(".ac-newversionDisplay").style.display = 'none';
              document.querySelector("#sp-ac-content").style.display = 'block';
            }
          }, 100);
          return false;
        }

        function ShowSetting() {
          if (curSite.SiteTypeID === SiteType.OTHERS) return;
          // 如果不存在的话，那么自己创建一个-copy from superPreload
          if (document.body !== null && document.querySelector("#sp-ac-container") === null) {
            let Container = document.createElement('div');
            Container.id = "sp-ac-container";
            Container.innerHTML =
`<aside id="sp-ac-content" style="display: none;" xmlns="http://www.w3.org/1999/html">
  <form id="sp-ac-main">
    <fieldset id="sp-ac-autopager-field">
      <legend class="iframe-father">
        <a class="linkhref" href="https://www.ntaow.com/aboutscript.html" target="_blank"
          v-text="lan.use.fieldset_panel.panel_title"></a>
      </legend>
      <ul class="setting-main" v-show="other.curTab === 1" style="max-width: 400px">
        <li>
          <input name="nothing" type="radio" style="display: none">
          <label :title="lan.use.fieldset_panel.setting_panel.redirect_title">
            <input id="sp-ac-redirect" name="sp-ac-a_separator" type="checkbox"
              v-model="ACConfig.isRedirectEnable">
            {{ lan.use.fieldset_panel.setting_panel.redirect_text }}
          </label>
          <label>
            <input id="sp-ac-isEnLang" name="sp-ac-a_force" type="checkbox" v-model="ACConfig.isEnLang">
            {{ lan.use.fieldset_panel.setting_panel.useEn_text }}
          </label>
          <span id="sp-ac-savebutton" @click="saveConfig" class="sp-ac-spanbutton endbutton"
            :title="lan.use.fieldset_panel.setting_panel.okBtn_text"
            style="position: relative;float: right;margin-top: -6px;"
            v-text="lan.use.fieldset_panel.setting_panel.okBtn_text"></span>
          <span id="sp-ac-resetbutton" @click="changeResetText" @dblclick="resetConfig"
            class="sp-ac-spanbutton endbutton" :title="lan.use.fieldset_panel.setting_panel.resetBtn_text"
            style="position: relative;float: right;margin-top: -6px;"
            v-text="lan.use.fieldset_panel.setting_panel.resetBtn_text"></span>
        </li>
        <li>
          <label :title="lan.use.fieldset_panel.setting_panel.ads_title">
            <input id="sp-ac-ads" name="sp-ac-a_force" type="checkbox" v-model="ACConfig.isAdsEnable">
            {{ lan.use.fieldset_panel.setting_panel.ads_text }}
          </label>
          <label :title="lan.use.fieldset_panel.setting_panel.autopage_title" class="">
            <input id="sp-ac-isAutopage" name="sp-ac-a_force" type="checkbox" v-model="ACConfig.isAutopage">
            {{ lan.use.fieldset_panel.setting_panel.autopage_text }}
          </label>
        </li>
        <li>
          <label title="lan.use.fieldset_panel.setting_panel.blockenable_title">
            <input id="sp-ac-block" name="sp-ac-a_force" type="checkbox" v-model="ACConfig.isBlockEnable">
            {{ lan.use.fieldset_panel.setting_panel.blockenable_text }}
          </label>
          <span id="sp-ac-blockdiybutton" class="sp-ac-spanbutton" @click="other.curTab = 2"
            :title="lan.use.fieldset_panel.setting_panel.blockDiyBtn_title"
            style="margin-left: 5px;color: #888888;"
            v-text="lan.use.fieldset_panel.setting_panel.blockDiyBtn_text"></span>
          <label :title="lan.use.fieldset_panel.setting_panel.blockenable_text">
            <input :title="lan.use.fieldset_panel.setting_panel.blockAutoRemove_title"
              v-model="ACConfig.isBlockDisplay" id="sp-ac-removeBlock" type="checkbox">
            {{ lan.use.fieldset_panel.setting_panel.blockAutoRemove_text }}
          </label>
          <label :title="lan.use.fieldset_panel.setting_panel.blockBtnShow_title">
            <input :title="lan.use.fieldset_panel.setting_panel.blockBtnShow_title"
              v-model="ACConfig.isBlockBtnNotDisplay" id="sp-ac-blockBtnDisplay" type="checkbox">
            {{ lan.use.fieldset_panel.setting_panel.blockBtnShow_text }}
          </label>
        </li>
        <li>
          <label :title="lan.use.fieldset_panel.setting_panel.userStyle_text">
            <input id="sp-ac-style" name="sp-ac-a_force" type="checkbox" v-model="ACConfig.AdsStyleEnable">
            {{ lan.use.fieldset_panel.setting_panel.userStyle_text }}
          </label>
        </li>
        <li>
          <!------------百度样式-------------->
          <label for="nothing" class="container-label baidu">
            <label class="label_hide" v-text="lan.use.fieldset_panel.setting_panel.userStyle_baidu_lable"
              @click="labelShowHideEnv"></label>
            <label style="margin-left:20px"><input name="sp-ac-a_force_style_baidu" value="0"
                v-model="ACConfig.baidu.AdsStyleMode" type="radio">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_baidu_origin }}
            </label>
            <label>
              <input name='sp-ac-huyan_style_baidu' type='checkbox' v-model="ACConfig.baidu.HuYanMode">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_baidu_huyan }}
            </label>
            <label class=""><input name="sp-ac-a_force_style_baidulite" type="checkbox"
                v-model="ACConfig.Style_BaiduLite">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_baidu_baiduLite }}
            </label>
            <br>
            <label style="margin-left:20px"><input name="sp-ac-a_force_style_baidu" value="1"
                v-model="ACConfig.baidu.AdsStyleMode" type="radio">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_baidu_1line }}
            </label>
            <label><input name="sp-ac-a_force_style_baidu" value="2" type="radio"
                v-model="ACConfig.baidu.AdsStyleMode">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_baidu_1line_enter }}
            </label>
            <label><input name="sp-ac-a_force_style_baidu" value="3" type="radio"
                v-model="ACConfig.baidu.AdsStyleMode">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_baidu_2line }}
            </label>
            <label><input name="sp-ac-a_force_style_baidu" value="4" type="radio"
                v-model="ACConfig.baidu.AdsStyleMode">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_baidu_3line }}
            </label>
            <label><input name="sp-ac-a_force_style_baidu" value="5" type="radio"
                v-model="ACConfig.baidu.AdsStyleMode">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_baidu_4line }}
            </label>
            <br>
            <label class="display-block" style="margin: 3px 0 3px 25px;">
              {{ lan.use.fieldset_panel.setting_panel.backgroundImage_text }}
              <input :placeholder="lan.use.fieldset_panel.setting_panel.backgroundImage_text_hint"
                :title="lan.use.fieldset_panel.setting_panel.backgroundImage_text_hint"
                id="sp-ac-backgroundImage" name="sp-ac-a_force_style_bgImg"
                v-model="ACConfig.baidu.defaultBgUrl" style="width:55%;margin-top:-0.3em;" type="input">
              <label :title="lan.use.fieldset_panel.setting_panel.backgroundImageAutoFit_text_hint">
                <input type="checkbox" name="sp-ac-a_autoFitSStyle" v-model="ACConfig.baidu.BgFit"
                  :disabled="!ACConfig.baidu.defaultBgUrl || !ACConfig.AdsStyleEnable">
                {{ lan.use.fieldset_panel.setting_panel.backgroundImageAutoFit_text }}
              </label>
            </label>
            <label for="nothing" style="margin: 0px 0px 2px 80px">
              <label><input name="sp-ac-radio-bg-baidu" value="1" type="radio" @click="changeBgToIndex(1)">图片1</label>
              <label><input name="sp-ac-radio-bg-baidu" value="2" type="radio" @click="changeBgToIndex(2)">图片2</label>
              <label><input name="sp-ac-radio-bg-baidu" value="3" type="radio" @click="changeBgToIndex(3)">图片3</label>
              <label><input name="sp-ac-radio-bg-baidu" value="4" type="radio" @click="changeBgToIndex(4)">图片4</label>
            </label>
          </label>
          <!------------百度样式-------------->
          <div style="height: 1px;width:267px;margin-left:25px;background-color:#d8d8d8;margin-top:1px;">
          </div>
          <!------------谷歌样式-------------->
          <label for="nothing" class="container-label google">
            <label class="label_hide" v-text="lan.use.fieldset_panel.setting_panel.userStyle_google_lable"
              @click="labelShowHideEnv"></label>
            <label style="margin-left:20px">
              <input name="sp-ac-a_force_style_google" value="0" type="radio"
                v-model="ACConfig.google.AdsStyleMode">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_google_origin }}
            </label>
            <label :title="lan.use.fieldset_panel.setting_panel.userStyle_google_huyan"><input
                name="sp-ac-huyan_style_google" v-model="ACConfig.google.HuYanMode" type="checkbox">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_google_huyan }}
            </label>
            <label :title="lan.use.fieldset_panel.setting_panel.userStyle_google_googleLite"><input
                name="sp-ac-google_in_baidumode" v-model="ACConfig.isGooleInBaiduModeEnable"
                type="checkbox">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_google_googleLite }}
            </label>
            <br>
            <label style="margin-left:20px"><input name="sp-ac-a_force_style_google" value="1"
                v-model="ACConfig.google.AdsStyleMode" type="radio">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_google_1line }}
            </label>
            <label><input name="sp-ac-a_force_style_google" value="2" v-model="ACConfig.google.AdsStyleMode"
                type="radio" checked="">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_google_1line_enter }}
            </label>
            <label><input name="sp-ac-a_force_style_google" value="3" v-model="ACConfig.google.AdsStyleMode"
                type="radio">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_google_2line }}
            </label>
            <label><input name="sp-ac-a_force_style_google" value="4" v-model="ACConfig.google.AdsStyleMode"
                type="radio">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_google_3line }}
            </label>
            <label><input name="sp-ac-a_force_style_google" value="5" v-model="ACConfig.google.AdsStyleMode"
                type="radio">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_google_4line }}
            </label>
            <br>
            <label class="display-block" style="margin: 3px 0 3px 25px;">
              {{ lan.use.fieldset_panel.setting_panel.backgroundImage_text }}
              <input :placeholder="lan.use.fieldset_panel.setting_panel.backgroundImage_text_hint"
                id="sp-ac-backgroundImage" name="sp-ac-a_force_style_bgImg"
                v-model="ACConfig.google.defaultBgUrl" style="width:55%;margin-top:-0.3em;"
                type="input">
              <label :title="lan.use.fieldset_panel.setting_panel.backgroundImageAutoFit_text_hint">
                <input type="checkbox" name="sp-ac-a_autoFitSStyle" v-model="ACConfig.google.BgFit"
                  :disabled="!ACConfig.google.defaultBgUrl || !ACConfig.AdsStyleEnable">
                {{ lan.use.fieldset_panel.setting_panel.backgroundImageAutoFit_text }}
              </label>
            </label>
            <label for="nothing" style="margin: 0px 0px 2px 80px">
              <label><input name="sp-ac-radio-bg-baidu" value="1" type="radio" @click="changeBgToIndex(1)">图片1</label>
              <label><input name="sp-ac-radio-bg-baidu" value="2" type="radio" @click="changeBgToIndex(2)">图片2</label>
              <label><input name="sp-ac-radio-bg-baidu" value="3" type="radio" @click="changeBgToIndex(3)">图片3</label>
              <label><input name="sp-ac-radio-bg-baidu" value="4" type="radio" @click="changeBgToIndex(4)">图片4</label>
            </label>
          </label>
          <!------------谷歌样式-------------->
          <div style="height: 1px;width:267px;margin-left:25px;background-color:#d8d8d8;margin-top:1px;">
          </div>
          <!------------必应样式-------------->
          <label for="nothing" class="container-label bing">
            <label class="label_hide" v-text="lan.use.fieldset_panel.setting_panel.userStyle_bing_lable"
              @click="labelShowHideEnv"></label>
            <label style="margin-left:20px"><input name="sp-ac-a_force_style_bing"
                v-model="ACConfig.bing.AdsStyleMode" value="0" type="radio">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_bing_origin }}
            </label>
            <label :title="lan.use.fieldset_panel.setting_panel.userStyle_bing_huyan"><input
                name="sp-ac-huyan_style_bing" v-model="ACConfig.bing.HuYanMode" type="checkbox">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_bing_huyan }}
            </label>
            <br>
            <label style="margin-left:20px"><input name="sp-ac-a_force_style_bing"
                v-model="ACConfig.bing.AdsStyleMode" value="1" type="radio">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_bing_1line }}
            </label>
            <label><input name="sp-ac-a_force_style_bing" value="2" v-model="ACConfig.bing.AdsStyleMode"
                type="radio">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_bing_1line_enter }}
            </label>
            <label><input name="sp-ac-a_force_style_bing" value="3" v-model="ACConfig.bing.AdsStyleMode"
                type="radio" checked="">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_bing_2line }}
            </label>
            <label><input name="sp-ac-a_force_style_bing" value="4" v-model="ACConfig.bing.AdsStyleMode"
                type="radio">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_bing_3line }}
            </label>
            <label><input name="sp-ac-a_force_style_bing" value="5" v-model="ACConfig.bing.AdsStyleMode"
                type="radio">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_bing_4line }}
            </label>
            <br>
            <label class="display-block" style="margin: 3px 0 3px 25px;">
              {{ lan.use.fieldset_panel.setting_panel.backgroundImage_text }}
              <input :placeholder="lan.use.fieldset_panel.setting_panel.backgroundImage_text_hint"
                id="sp-ac-backgroundImage" name="sp-ac-a_force_style_bgImg"
                v-model="ACConfig.bing.defaultBgUrl" style="width:55%;margin-top:-0.3em;" type="input">
              <label :title="lan.use.fieldset_panel.setting_panel.backgroundImageAutoFit_text_hint">
                <input type="checkbox" name="sp-ac-a_autoFitSStyle" v-model="ACConfig.bing.BgFit"
                  :disabled="!ACConfig.bing.defaultBgUrl || !ACConfig.AdsStyleEnable">
                {{ lan.use.fieldset_panel.setting_panel.backgroundImageAutoFit_text }}
              </label>
            </label>
            <label for="nothing" style="margin: 0px 0px 2px 80px">
              <label><input name="sp-ac-radio-bg-baidu" value="1" type="radio" @click="changeBgToIndex(1)">图片1</label>
              <label><input name="sp-ac-radio-bg-baidu" value="2" type="radio" @click="changeBgToIndex(2)">图片2</label>
              <label><input name="sp-ac-radio-bg-baidu" value="3" type="radio" @click="changeBgToIndex(3)">图片3</label>
              <label><input name="sp-ac-radio-bg-baidu" value="4" type="radio" @click="changeBgToIndex(4)">图片4</label>
            </label>
          </label>
          <!------------必应样式-------------->
          <!--                        <div style="height: 1px;width:267px;margin-left:25px;background-color:#d8d8d8;margin-top:1px;"></div>-->
          <!--                        &lt;!&ndash;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;搜狗样式&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&ndash;&gt;-->
          <!--                        <label for="nothing" class="container-label sogou">-->
          <!--                          <label class="label_hide" v-text="lan.use.fieldset_panel.setting_panel.userStyle_sogou_lable" @click="labelShowHideEnv"></label>-->
          <!--                          <label style="margin-left:20px"><input name="sp-ac-a_force_style_sogou" v-model="ACConfig.sogou.AdsStyleMode" value="0" type="radio">-->
          <!--                          {{ lan.use.fieldset_panel.setting_panel.userStyle_sogou_origin }}-->
          <!--                          </label>-->
          <!--                          <label :title="lan.use.fieldset_panel.setting_panel.userStyle_sogou_huyan"><input name="sp-ac-huyan_style_sogou" v-model="ACConfig.sogou.HuYanMode" type="checkbox">-->
          <!--                          {{ lan.use.fieldset_panel.setting_panel.userStyle_sogou_huyan }}-->
          <!--                          </label>-->
          <!--                          <br>-->
          <!--                          <label style="margin-left:20px">-->
          <!--                          <input name="sp-ac-a_force_style_sogou" value="1" v-model="ACConfig.sogou.AdsStyleMode" type="radio">-->
          <!--                          {{ lan.use.fieldset_panel.setting_panel.userStyle_sogou_1line }}-->
          <!--                          </label>-->
          <!--                          <label><input name="sp-ac-a_force_style_sogou" value="2" v-model="ACConfig.sogou.AdsStyleMode" type="radio">-->
          <!--                          {{ lan.use.fieldset_panel.setting_panel.userStyle_sogou_1line_enter }}-->
          <!--                          </label>-->
          <!--                          <label><input name="sp-ac-a_force_style_sogou" value="3" v-model="ACConfig.sogou.AdsStyleMode" type="radio" checked="">-->
          <!--                          {{ lan.use.fieldset_panel.setting_panel.userStyle_sogou_2line }}-->
          <!--                          </label>-->
          <!--                          <label><input name="sp-ac-a_force_style_sogou" value="4" v-model="ACConfig.sogou.AdsStyleMode" type="radio">-->
          <!--                          {{ lan.use.fieldset_panel.setting_panel.userStyle_sogou_3line }}-->
          <!--                          </label>-->
          <!--                          <label><input name="sp-ac-a_force_style_sogou" value="5" v-model="ACConfig.sogou.AdsStyleMode" type="radio">-->
          <!--                          {{ lan.use.fieldset_panel.setting_panel.userStyle_sogou_4line }}-->
          <!--                          </label>-->
          <!--                        </label>-->
          <!-- &lt;!&ndash;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;搜狗样式&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&ndash;&gt;-->
          <div style="height: 1px;width:267px;margin-left:25px;background-color:#d8d8d8;margin-top:1px;">
          </div>
          <!------------鸭鸭搜样式-------------->
          <label for="nothing" class="container-label duck">
            <label class="label_hide" v-text="lan.use.fieldset_panel.setting_panel.userStyle_duck_lable"
              @click="labelShowHideEnv"></label>
            <label style="margin-left:20px"><input name="sp-ac-a_force_style_duck"
                v-model="ACConfig.duck.AdsStyleMode" value="0" type="radio">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_duck_origin }}
            </label>
            <label :title="lan.use.fieldset_panel.setting_panel.userStyle_duck_huyan"><input
                name="sp-ac-huyan_style_duck" v-model="ACConfig.duck.HuYanMode" type="checkbox">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_duck_huyan }}
            </label>
            <label :title="lan.use.fieldset_panel.setting_panel.userStyle_duck_normal"><input
                v-model="ACConfig.normalizeDuck" type="checkbox">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_duck_normal }}
            </label>
            <br>
            <label style="margin-left:20px">
              <input name="sp-ac-a_force_style_duck" value="1" v-model="ACConfig.duck.AdsStyleMode"
                type="radio">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_duck_1line }}
            </label>
            <label><input name="sp-ac-a_force_style_duck" value="2" v-model="ACConfig.duck.AdsStyleMode"
                type="radio">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_duck_1line_enter }}
            </label>
            <label><input name="sp-ac-a_force_style_duck" value="3" v-model="ACConfig.duck.AdsStyleMode"
                type="radio" checked="">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_duck_2line }}
            </label>
            <label><input name="sp-ac-a_force_style_duck" value="4" v-model="ACConfig.duck.AdsStyleMode"
                type="radio">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_duck_3line }}
            </label>
            <label><input name="sp-ac-a_force_style_duck" value="5" v-model="ACConfig.duck.AdsStyleMode"
                type="radio">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_duck_4line }}
            </label>
            <br>
          </label>
          <!------------鸭鸭搜样式-------------->
          <div style="height: 1px;width:267px;margin-left:25px;background-color:#d8d8d8;margin-top:1px;">
          </div>
          <!------------多吉样式-------------->
          <label for="nothing" class="container-label doge">
            <label class="label_hide" v-text="lan.use.fieldset_panel.setting_panel.userStyle_doge_lable"
              @click="labelShowHideEnv"></label>
            <label style="margin-left:20px"><input name="sp-ac-a_force_style_doge"
                v-model="ACConfig.doge.AdsStyleMode" value="0" type="radio">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_doge_origin }}
            </label>
            <label :title="lan.use.fieldset_panel.setting_panel.userStyle_doge_huyan"><input
                name="sp-ac-huyan_style_doge" v-model="ACConfig.doge.HuYanMode" type="checkbox">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_doge_huyan }}
            </label>
            <label :title="lan.use.fieldset_panel.setting_panel.userStyle_doge_normal"><input
                v-model="ACConfig.normalizeDoge" type="checkbox">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_doge_normal }}
            </label>
            <br>
            <label style="margin-left:20px">
              <input name="sp-ac-a_force_style_doge" value="1" v-model="ACConfig.doge.AdsStyleMode"
                type="radio">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_doge_1line }}
            </label>
            <label><input name="sp-ac-a_force_style_doge" value="2" v-model="ACConfig.doge.AdsStyleMode"
                type="radio">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_doge_1line_enter }}
            </label>
            <label><input name="sp-ac-a_force_style_doge" value="3" v-model="ACConfig.doge.AdsStyleMode"
                type="radio" checked="">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_doge_2line }}
            </label>
            <label><input name="sp-ac-a_force_style_doge" value="4" v-model="ACConfig.doge.AdsStyleMode"
                type="radio">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_doge_3line }}
            </label>
            <label><input name="sp-ac-a_force_style_doge" value="5" v-model="ACConfig.doge.AdsStyleMode"
                type="radio">
              {{ lan.use.fieldset_panel.setting_panel.userStyle_doge_4line }}
            </label>
            <br>
          </label>
          <!------------多吉样式-------------->
        </li>
        <!------------护眼模式设置-------------->
        <li>
          <label :title="lan.use.fieldset_panel.setting_panel.huyanMode_title">
            <input id="sp-ac-usercolor" v-model="ACConfig.isUserColorEnable" name="sp-ac-a_force"
              type="checkbox" checked="">
            {{ lan.use.fieldset_panel.setting_panel.huyanMode_text }}
          </label>
        </li>
        <li>
          <label class="menu-box-container" :title="lan.use.fieldset_panel.setting_panel.huyanMode_title">
            <label style="margin-left:20px;"
              v-text="lan.use.fieldset_panel.setting_panel.huyanColor_text"></label>
            <input class="sp-ac-menuhuyanColor" @input.stop="useThisHuyanColor"
              v-model="ACConfig.defaultHuYanColor" type="color"
              :title="lan.use.fieldset_panel.setting_panel.huyanColor_title"
              style="cursor: pointer;margin-top:-0.05rem;height:23px;">
            <label class="menu-box-small" data-value="#DEF1EF" @click.stop="useThisHuyanColor"
              style="background-color:#DEF1EF;">&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <label class="menu-box-small" data-value="#F3F2EE" @click.stop="useThisHuyanColor"
              style="background-color:#F3F2EE;">&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <label class="menu-box-small" data-value="#E5E5E5" @click.stop="useThisHuyanColor"
              style="background-color:#E5E5E5;">&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <label class="linkhref" data-href="https://www.ntaow.com/colorpicker.html"
              style="cursor:pointer;margin-right: 10px;" onclick="window.open(this.dataset.href)"
              v-text="lan.use.fieldset_panel.setting_panel.huyanColorMore_text"></label>
          </label>
        </li>
        <!------------Favicon图标设置-------------->
        <li>
          <label>
            <input :title="lan.use.fieldset_panel.setting_panel.favicon_title"
              v-model="ACConfig.isFaviconEnable" id="sp-ac-favicon" name="sp-ac-a_force" type="checkbox"
              checked="">
            {{ lan.use.fieldset_panel.setting_panel.favicon_text }}
          </label>
        </li>
        <li>
          <label>
            <label style="margin-left:20px;"
              v-text="lan.use.fieldset_panel.setting_panel.favicon_defaultIcon_text"></label>
            <input id="sp-ac-faviconUrl" name="sp-ac-a_force" v-model="ACConfig.defaultFaviconUrl"
              value="https://ae01.alicdn.com/kf/HTB1dRY0X8OD3KVjSZFFq6An9pXay.jpg"
              style="width:55%;margin-top:-0.3em;" type="input">
          </label>
        </li>
        <!------------移除百度搜索预测-------------->
        <li>
          <label>
            <input :title="lan.use.fieldset_panel.setting_panel.searchOrigin_title"
              v-model="ACConfig.doDisableSug" id="sp-ac-sug_origin" name="sp-ac-a_force" type="checkbox"
              checked="">
            {{ lan.use.fieldset_panel.setting_panel.searchOrigin_text }}
          </label>
        </li>
        <!------------附加7、8、9-------------->
        <li>
          <label>
            <input id="sp-ac-right" v-model="ACConfig.isRightDisplayEnable" type="checkbox">
            {{ lan.use.fieldset_panel.setting_panel.showRight_text }}
          </label>
          <label>
            <input id="sp-ac-counter" v-model="ACConfig.isCounterEnable" name="sp-ac-a_force"
              type="checkbox">
            <span :title="lan.use.fieldset_panel.setting_panel.hintShowCounter_text">{{
              lan.use.fieldset_panel.setting_panel.showCounter_text }}</span>
          </label>
          <label>
            <input id="sp-ac-aline" v-model="ACConfig.isALineEnable" name="sp-ac-a_force" type="checkbox">
            {{ lan.use.fieldset_panel.setting_panel.showALine_text }}
          </label>
        </li>
        <!------------自定义样式内容-------------->
        <li>
          <label>
            <input id="sp-ac-userstyle" v-model="ACConfig.isUserStyleEnable" name="sp-ac-a_force"
              type="checkbox">
            {{ lan.use.fieldset_panel.setting_panel.showUserStyle_text }}
          </label>
          <label v-if="LiveConfig.css_has_error" style="color: red; font-weight: bold;">error</label>
          <span class="sp-ac-spanbutton" @click="resetCSS" title="Reset CSS" v-text="resetCSS_text"></span>
        </li>
        <li>
          <textarea id="sp-ac-userstyleTEXT" v-model="ACConfig.UserStyleText" @keyup="loadCustomStyle"
            @change="loadCustomStyle" @paste="loadCustomStyle" name="sp-ac-a_force"
            style="width:85%;height: 66px;margin-left:30px;" type="input"></textarea>
        </li>
        <li>
          <a class="linkhref" target="_blank" :href="lan.use.fieldset_panel.setting_panel.contactMe_url"
            v-text="lan.use.fieldset_panel.setting_panel.contactMe_text"></a>
        </li>
      </ul>
      <!------------拦截域名设置panel-------------->
      <ul class="setting-second" v-show="other.curTab === 2">
        <li style='margin-bottom: 8px !important;'>
          <label>
            <span id='sp-ac-blockdiybutton-back' @click="other.curTab=1,other.showBlockListArea = false"
              class='sp-ac-spanbutton'>{{
              lan.use.fieldset_panel.setting_panel.setting_panel_second.backBtn_text }}</span>
          </label>
          {{ lan.use.fieldset_panel.setting_panel.setting_panel_second.blockLabel_text }}}
        </li>
        <li style='margin-bottom: 8px !important;'>
          <span id='sp-ac-blockdiybutton-diylist' class='sp-ac-spanbutton'
            @click="other.showBlockListArea = !other.showBlockListArea" v-text="cal_diyBlockListBtn"></span>
        </li>
        <li class='ac-blockList' @click="removeABlockListItem" style='max-height:60vh;overflow-y: scroll;'>
          <ul v-show="!other.showBlockListArea" v-html="getBlockList"></ul>
        </li>
        <li class='ac-blockBoxCon' style='max-height: 60vh;text-align: center;margin-left: 26px;'>
          <textarea v-show="other.showBlockListArea" @keyup="syncToBlockList" @change="syncToBlockList"
            @paste="syncToBlockList" rows="20" v-text="ACConfig.UserBlockList.join('\\n')"></textarea>
        </li>
        <li>
          {{ lan.use.fieldset_panel.setting_panel.setting_panel_second.addBlockLabel_text }}<input
            class="sp-ac-addRuleOne" @keyup.enter="ckAddRule" v-model="other.addBlockItem"
            style='width:55%;'>
          <span id='sp-ac-addRulebutton' class='sp-ac-spanbutton endbutton' @click="ckAddRule"
            style='position: relative !important;line-height: 17px;'
            v-text="lan.use.fieldset_panel.setting_panel.setting_panel_second.addBtnLabel_text">新增</span>
        </li>
      </ul>
      <ul v-show="other.curTab === 3" style="width: 300px">
        <li>
          <div class="dialog-body">
            <label>
              <span id='sp-ac-blockdiybutton-back' @click="other.curTab=1"
                class='sp-ac-spanbutton'>返回</span>
            </label>
            <div>
              <div>使用说明：</div>
              <div>-</div>
              <p>1. 本脚本不包含任何广告内容，也无意于破坏网站现有功能的完整性，仅希望通过一些显示效果的变更能更好的留存对应网站现有的用户，一定程度上更好地保证了目标网站的日活。</p>
              <p>
                2.
                同时本脚本中所有功能均为学习和研究web前端技术的发展而开发，希望为学习前端技术的研究人员提供一个更好的参考代码，促进web前端技术的发展，便于技术的学习和交流，仅用于学习研究使用，无意于损害任何网站利益，不使用任何盈利方案或参与任何盈利组织。
              </p>
              <p>
                3.
                因使用本脚本引起的或与本脚本有关的任何争议，各方应友好协商解决，本脚本对使用本脚本所提供的软件时可能对用户自己或他人造成的任何形式的损失和伤害不承担任何责任。如用户下载、安装和使用本产品中所提供的软件，即表明用户信任本作者及其相关协议和免责声明。
              </p>
            </div>
          </div>
        </li>
      </ul>
      <!------------保存、取消按钮-------------->
      <span id="sp-ac-cancelbutton" class="sp-ac-spanbutton endbutton" @click="closePanel"
        :title="lan.use.fieldset_panel.setting_panel.cancelBtn_text" style="position: relative;float: left;"
        v-text="lan.use.fieldset_panel.setting_panel.cancelBtn_text"></span>
      <span id="sp-ac-savebutton" ref="bottomSaveButton" @click="saveConfig" class="sp-ac-spanbutton endbutton"
        :title="lan.use.fieldset_panel.setting_panel.okBtn_text" style="position: relative;float: right;"
        v-text="lan.use.fieldset_panel.setting_panel.okBtn_text"></span>
    </fieldset>
  </form>
</aside>`;
            try {
              document.body.appendChild(Container);
            } catch (e) {
              console.log(e);
            }
          }
          try {
            document.querySelector("body #sp-ac-container").addEventListener('click', function(e) {
              e.stopPropagation(); // 阻止点击自身的时候关闭
            }, false);
            document.querySelector("body").addEventListener('click', function(e) {
              safeFunction(() => {
                document.querySelector("#sp-ac-content").style.display = 'none';
              })
            }, false);
          } catch (e) {
          }
        }

        function isElementVisible(dom) {
          const scrTop = document.documentElement.scrollTop || document.body.scrollTop;
          return !(scrTop > (dom.offsetTop + dom.offsetHeight) || (scrTop + window.innerHeight) < dom.offsetTop);
        }

        function removeMobileBaiduDirectLink() {
          let nodes = document.querySelectorAll("#page #page-bd #results .result:not([ac_redirectStatus])");
          for (let i = 0; i < nodes.length; i++) {
            let curNode = nodes[i];
            safeFunction(function() {
              let curData = JSON.parse(curNode.dataset.log.replace(/'/gm, "\""));
              let trueLink = curData.mu;
              curNode.querySelector("article").setAttribute("rl-link-href", trueLink);
              curNode.querySelectorAll("a").forEach(function(per) {
                per.setAttribute("href", trueLink);
              });
            });
            curNode.setAttribute("ac_redirectStatus", "1");
          }
        }

        function removeOnMouseDownFunc() {
          try {
            let resultNodes = document.querySelectorAll(".g .rc a, #rs, #rso .g a");
            for (let i = 0; i < resultNodes.length; i++) {
              let one = resultNodes[i];
              one.setAttribute("onmousedown", ""); // 谷歌去重定向干扰
              one.setAttribute("target", "_blank"); // 谷歌链接新标签打开
              one.setAttribute("data-jsarwt", "0"); // Firefox谷歌去重定向干扰
            }
          } catch (e) {
            console.log(e);
          }
        }

        function removeRedirectLinkTarget() {
          if (curSite.SiteTypeID === SiteType.ZHIHU) {
            let nodes = document.querySelectorAll(".RichText a[href*='//link.zhihu.com/?target']");
            for (let i = 0; i < nodes.length; i++) {
              let url = decodeURIComponent(nodes[i].href.replace(/https?:\/\/link\.zhihu\.com\/\?target=/, ""));
              nodes[i].href = url;
            }
          } else if (curSite.SiteTypeID === SiteType.BAIDU_XUESHU) {
            let xnodes = document.querySelectorAll("a[href*='sc_vurl=http']");
            for (let j = 0; j < xnodes.length; j++) {
              let xurl = getUrlAttribute(xnodes[j].href, "sc_vurl", true);
              xnodes[j].href = xurl;
            }
          }
        }

        // 提取url元素的参数值
        function getUrlAttribute(url, attribute, needDecode) {
          let searchValueS = (url.substr(1) + "").split("&");
          for (let i = 0; i < searchValueS.length; i++) {
            let key_value = searchValueS[i].split("=");
            let reg = new RegExp("^" + attribute + "$");
            if (reg.test(key_value[0])) {
              let searchWords = key_value[1];
              return needDecode ? decodeURIComponent(searchWords) : searchWords;
            }
          }
        }

        function resetURLNormal() {
          const mainList = document.querySelectorAll(curSite.MainType)

          // 注意有重复的地址，尽量对重复地址进行去重
          var hasDealHrefSet = new Set();
          for (let i = 0; i < mainList.length; i++) {
            // 此方法是异步，故在结束的时候使用i会出问题-严重!
            // 采用闭包的方法来进行数据的传递
            const curNode = mainList[i];

            if (curNode !== null && curNode.getAttribute("ac_redirectStatus") === null) {
              curNode.setAttribute("ac_redirectStatus", "0");

              const linkNode = curNode.querySelector(curSite.Stype_Normal);
              if(linkNode === null) {
                continue
              }

              // 跳过特殊链接的处理
              if(linkNode.href && (linkNode.href.startsWith('javascript') || linkNode.href.startsWith('#'))) {
                continue
              }

              let linkHref = linkNode.href;
              let len1 = hasDealHrefSet.size;
              hasDealHrefSet.add(linkHref);
              let len2 = hasDealHrefSet.size;
              if (len1 === len2) continue; // 说明数据已经处理过，存在相同的记录
              const isLinkNeedDeal = () => {
                // 如果当前节点存在mu参数，或者link节点存在data-mdurl，那么就算直接成功，不用重新请求一遍了
                let trueLink = curNode.getAttribute('mu') || linkNode.getAttribute('data-mdurl')
                if(trueLink && !trueLink.includes('nourl')) {
                  trueLink = getBaiduEncodingHandle(trueLink)
                  DealRedirect(null, linkHref, trueLink);
                  return true
                }
                // MARK bing国际版 & 国内版 数据解析 这里目前有严重bug，暂时无法复现重定向流程，先停止重定向
                // if(curSite.SiteTypeID === SiteType.BING) {
                //   // 链接数据
                //   const realLinkNode = curNode.querySelector(".b_attribution cite");
                //   if (!realLinkNode || !realLinkNode.textContent) return false;
                //   let realLink = realLinkNode.textContent;
                //   console.log(realLink)
                //   return
                //   if (!(realLink.startsWith("http://") || realLink.startsWith("https://"))) {
                //     realLink = "https://" + realLink;
                //   }
                //   DealRedirect(null, linkHref, realLink, null);
                //   // 文章结构分析界面
                //   if (curNode.classList.contains("b_algoBorder")) {
                //     // 对于章节, 后置拼接
                //     const chapterTitles = curNode.querySelectorAll(".b_rc_gb_sub_title>a");
                //     for (const chapterTitle of chapterTitles) {
                //       const link = chapterTitle.getAttribute("href");
                //       const title = chapterTitle.textContent;
                //       if (!link || !title) continue;
                //       const chapterLink = realLink + "#" + title;
                //       DealRedirect(null, link, chapterLink, null, 'subtitle');
                //     }
                //     // 对于图片, 使用原始链接
                //     const chapterImages = curNode.querySelectorAll(".b_rc_gb_img_wrapper>a");
                //     for (const img of chapterImages) {
                //       const link = img.getAttribute("href");
                //       if (!link) continue;
                //       DealRedirect(null, link, realLink, null, 'subtitle');
                //     }
                //   }
                //   return true;
                // }
              }
              const getBaiduEncodingHandle = (linkUrl) => {
                let resLink = linkUrl
                if(curSite.SiteTypeID === SiteType.BAIDU && linkUrl.includes('baidu.com')) {
                  const [, first = ''] = /(ie=[^&]+)/.exec(location.search) || []
                  resLink = linkUrl.replace(/(ie=[^&]+)/, first)
                }
                return resLink
              }
              if(!isLinkNeedDeal()) {
                continue
              }
              // 走接口重定向处理
              if (linkHref.includes("www.baidu.com/link") ||
                linkHref.includes("m.baidu.com/from") ||
                linkHref.includes("www.sogou.com/link") ||
                linkHref.includes("so.com/link")) {
                (function(c_curnode, c_curhref) {
                  let url = c_curhref.replace(/^http:/, "https:");
                  if (curSite.SiteTypeID === SiteType.BAIDU && !url.includes("eqid")) {
                    // 如果是百度，并且没有带有解析参数，那么手动带上
                    url = url + "&wd=&eqid=";
                  }
                  let gmRequestNode = GM_xmlhttpRequest({
                    // from: "acxhr",
                    extData: c_curhref, // 用于扩展
                    url: url,
                    headers: { "Accept": "*/*", "Referer": c_curhref.replace(/^http:/, "https:") },
                    method: "GET",
                    timeout: 8000,
                    onreadystatechange: function(response) { // MARK 有时候这个函数根本不进来 - 调试的问题 - timeout
                      if (response.responseText || response.responseHeaders) {
                        // 由于是特殊返回-并且好搜-搜狗-百度都是这个格式，故提出
                        DealRedirect(gmRequestNode, c_curhref, response.responseText, "URL='([^']+)'")
                        // 这个是在上面无法处理的情况下，备用的 tm-finalurldhdg  tm-finalurlmfdh

                        if (response.responseHeaders.includes("tm-finalurl")) {
                          let relURL = Reg_Get(response.responseHeaders, "tm-finalurl\\w+: ([^\\s]+)");
                          if (relURL === null || relURL === "" || relURL.includes("www.baidu.com/search/error")) return;
                          DealRedirect(gmRequestNode, c_curhref, relURL);
                        }
                      }
                    }
                  });
                })(curNode, linkHref); //传递旧的网址过去，读作c_curhref
              }
            }
          }
          if (hasDealHrefSet.size > 0 && mainList.length - hasDealHrefSet.size > 0) console.log("丢弃掉", mainList.length - hasDealHrefSet.size, "个重复链接");
        }

        function DealRedirect(request, curNodeHref, respText, RegText, hrefType) {
          if (respText === null || typeof (respText) === "undefined") return;
          let resultResponseUrl = "";
          if (RegText != null) {
            resultResponseUrl = Reg_Get(respText, RegText);
          } else {
            resultResponseUrl = respText;
          }
          if (resultResponseUrl !== null && resultResponseUrl !== "" && !resultResponseUrl.includes("www.baidu.com/link")) {
            try {
              if (curSite.SiteTypeID === SiteType.SOGOU) curNodeHref = curNodeHref.replace(/^https:\/\/www.sogou.com/, "");
              let host = getTextHost(resultResponseUrl);
              // RedirectMap.set(curNodeHref, resultResponseUrl); // 进行一个数据关联
              // RedirectMap.set(resultResponseUrl, curNodeHref); // 进行一个数据关联
              document.querySelectorAll("*[href*='" + curNodeHref + "']").forEach(per => {
                let changeNode = per;

                changeNode.setAttribute("ac_redirectStatus", "2");
                changeNode.href = resultResponseUrl;
                // changeNode.setAttribute("data-orihref", changeNode.href);
                if (changeNode.hasAttribute("meta")) {
                  changeNode.setAttribute("meta", host);
                  changeNode.dataset.host = host;
                }

                if (hrefType === null || hrefType === undefined || hrefType === "title") {
                  if (changeNode.text && changeNode.text.length < 10 && !changeNode.text.includes(host)
                    // 不能是redirect url 不能是h2\h3下直属链接
                    && !changeNode.parentElement.tagName.toLowerCase().includes("h")) {
                    changeNode.insertAdjacentHTML("beforeEnd", "&nbsp;-&nbsp;" + host);
                  }
                }
              })

              otherData.other.curHosts.acpush(host + "###" + resultResponseUrl);
              request && request.abort();
            } catch (e) {
              // console.log(e);
            }
          }
        }

        function removeAD_baidu_sogou() { // 移除网站自有广告
          if (curSite.SiteTypeID === SiteType.BAIDU || curSite.SiteTypeID === SiteType.MBAIDU) {
            /****移除PC模式上的部分广告****/
            // 移除shadowDOM广告；搜索关键字：淘宝；然后点击搜索框，广告会多次重现shadowdom
            safeFunction(function() {
              $('.c-container >>> .c-container').has('.f13>span:starts-with("广告")').remove();
            });

            // 移除右侧栏广告
            safeRemove_xpath("id('content_right')/div[.//a[starts-with(text(), '广告')]]");
            // 移除标准广告
            safeRemove_xpath("id('content_left')/div[.//span[contains(@class, 'tuiguang') or contains(@class, 'brand')][contains(text(), '广告')]]");
            // 移除标准广告 - 新
            safeRemove_xpath("id('content_left')/div[.//a[text()='广告']]");
            // 移除右侧栏顶部-底部无用广告
            safeRemove_xpath("id('content_right')/br");
            safeRemove_xpath("id('content_right')/div[not(@id)]");
            // 移除顶部可能出现的 "为您推荐"
            safeRemove_xpath("id('content_left')//div[contains(@class, '_rs')]");

            /****移除Mobile模式上的部分广告****/
            safeRemove_xpath("id('page-bd')/div[not(contains(@class, 'result'))]");
            safeRemove_xpath("id('page-bd')/div[not(@class)]");
            safeRemove_xpath("//div[@class='na-like-container']");
            // safeFunction(function () {
            //   $('#page-bd #results>div:not([class*="result"])').remove();
            // });
            // safeFunction(function () {
            //   $('#page-bd #results>div:not([class])').remove();
            // });
          } else if (curSite.SiteTypeID === SiteType.SO) {
            safeRemoveAd("#so_kw-ad");
            safeRemoveAd("#m-spread-left");
            // 移除搜索中底部广告
            safeRemoveAd("#m-spread-bottom");
            // 移除右侧栏顶部广告
            safeRemove_xpath("id('righttop_box')//li[.//span[contains(text(), '广告')]]");
          } else if (curSite.SiteTypeID === SiteType.BING) {
            safeRemoveAd(".b_ad");
            safeRemove_xpath("id('b_results')/li[./div[@class='ad_fls']]");


            // 移除特殊tag，带url标记的广告类
            const resList = [...document.querySelectorAll("ol>li")].filter(one => one.querySelector('p')) // 定位到所有包含p标签的li
            const adList = resList.filter(one => window.getComputedStyle(one.querySelector('p'), '::before').getPropertyValue('content').includes('url')) // 检查每一个p标签，里面存在before伪元素，且伪元素中是链接的，均为广告
            safeRemoveAd(adList);

          } else if (curSite.SiteTypeID === SiteType.GOOGLE) {
            safeRemoveAd("#bottomads");
            safeRemoveAd('div[aria-label="广告"]');
            safeRemoveAd('div[aria-label="Ads"]');
          }
        }

        function addCounter(citeList) {
          const cssText = "font-style:normal;position:relative;z-index:1;margin-right:4px;display:inline-block;color:white;font-family:'微软雅黑';font-size:16px;text-align:center;width:22px;line-height:22px;border-radius:50%;";
          for (let i = 0; i < citeList.length; i++) {
            let cur = citeList[i];
            const index = cur.getAttribute('SortIndex');
            if (index === null || typeof (index) === "undefined") {
              cur.setAttribute('SortIndex', CONST.sortIndex);
              let ele = document.createElement('em');
              ele.className = 'AC-CounterT';
              ele.style = cssText;
              ele.innerText = CONST.sortIndex;
              let child = cur.firstElementChild;
              if (child && child.nodeName == 'DIV') {
                let emNode = child.querySelector('em');
                if (emNode) emNode.parentNode.insertAdjacentElement('afterBegin', ele)
              } else {
                cur.insertAdjacentElement('afterBegin', ele);
              }
              CONST.sortIndex++;
            } else {
              const curCounter = cur.querySelector(".AC-CounterT")
              if (!curCounter) continue
              const oriIndex = curCounter.innerText
              const checkValue = (i + 1) % 100;
              // 数据值不同
              // 数据没有被翻译
              if (+index !== checkValue && !/^\d+$/.test(oriIndex)) { // 按需更新
                curCounter.innerText = checkValue;
                cur.setAttribute('SortIndex', checkValue);
              }
            }
          }
        }

        function getTextHost(sbefore) {
          sbefore = (sbefore && sbefore.trim()).replace(/\s-\s\d{4}-\d{1,2}-\d{1,2}/, "") || "";
          let send;
          let result = sbefore.split('-');
          // --搜狗百度专用；如果第一个是中文的话，地址就是第二个
          if ((result.length > 1 && new RegExp("[\\u4E00-\\u9FFF]+", "g").test(sbefore)) && (curSite.SiteTypeID === SiteType.BAIDU || curSite.SiteTypeID === SiteType.SOGOU)) {
            sbefore = result[1];
          } else {
            result = sbefore.split('\n');
            if (result.length > 1 && curSite.SiteTypeID === SiteType.GOOGLE) {
              sbefore = result[1];
            }
          }
          // 此时sbefore几乎是等于网址了，但是有时候会有多的空格，多的内容，多的前缀http，多余的路径
          let res = new RegExp(/(https?:\/\/)?([^/\s]+)/i).exec(sbefore);
          send = (res && res[2].trim()) || "";
          // send = sbefore.replace(/(\/[^/]*|\s*)/, "").replace(/<[^>]*>/g, "").replace(/https?:\/\//g, "").replace(/<\/?strong>/g, "").replace(/<\/?b>/g, "").replace(/<?>?/g, "").replace(/( |\/).*/g, "").replace(/\.\..*/, "");
          if (send === "") return null;
          if (send.indexOf(".") < 0) return null;
          if (send.indexOf("↵") >= 0) return null;
          return send.trim();
        }

        function addFavicon(citeList) {
          const insertList = []
          if (curSite.SiteTypeID !== SiteType.DOGE) {
            for (let index = 0; index < citeList.length; index++) {
              if (null === citeList[index].getAttribute("ac_faviconStatus")) {
                let curNode = citeList[index];
                let targetNode = curNode;
                let { curHost, curUrl } = getNodeHost(targetNode);
                if (!curHost) { // 跳过解不出来的地址
                  continue;
                } else {
                  otherData.other.curHosts.acpush(curHost + "###" + curUrl);
                }
                let faviconUrl = curHost;
                let II = 0;
                for (; II <= 5; II++) {
                  targetNode = targetNode.parentNode;
                  if (targetNode != null && targetNode.querySelector(curSite.FaviconAddTo) != null) {
                    break;
                  }
                }
                if (targetNode.parentNode.hasAttribute('tpl') && targetNode.parentNode.getAttribute('tpl').includes('stock')) {
                  curNode.setAttribute("ac_faviconStatus", "-3");
                  continue
                }
                //console.log(index+"."+faviconUrl+"--"+II);
                if (II <= 5) {
                  // 先用父节点判断一下是否存在img
                  let tmpHTML = targetNode.innerHTML;
                  let pos = tmpHTML.indexOf("fav-url")
                    & tmpHTML.indexOf("wr_fav")
                    & tmpHTML.indexOf("favurl")
                    & tmpHTML.indexOf("tit-ico")
                    & tmpHTML.indexOf("img_fav rms_img")
                    & tmpHTML.indexOf("c-tool-")
                    & tmpHTML.indexOf("span class=\"c-icon c-icon-")
                    & tmpHTML.indexOf("img class=\"xA33Gc")
                    & tmpHTML.indexOf("img class=\"XNo5Ab\""); // 谷歌图标
                  //他自己已经做了favicon了
                  if (pos > -1) {
                    // console.log("已有图片：");
                    curNode.setAttribute("ac_faviconStatus", "-2");
                    continue;
                  }
                  targetNode = targetNode.querySelector(curSite.FaviconAddTo);
                  let host = faviconUrl.replace(/[^.]+\.([^.]+)\.([^.]+)/, "$1.$2");

                  if (!targetNode.hasAttribute("data-favicon-t") && host.length >= 3) {
                    let faviconUrl = curNode.href || host
                    if (curSite.SiteTypeID === SiteType.BAIDU && faviconUrl.includes("baidu.com/link")) {
                      faviconUrl = host
                    }

                    targetNode.setAttribute('data-favicon-t', faviconUrl)
                    insertList.push({
                      tagName: targetNode.tagName.toLowerCase(),
                      url: faviconUrl
                    })
                  }
                }
              }
            }
          } else {
            var checkNodes = document.querySelectorAll("#links_wrapper #links .nrn-react-div");
            for (let faNode of checkNodes) {
              let faviconNode = faNode.querySelector(".result__icon img");
              let beforeNode = faNode.querySelector(".result__title a");
              if (faviconNode && beforeNode) {
                faviconNode.style = "vertical-align:middle;margin-right:5px;";
                beforeNode.parentNode.insertBefore(faviconNode, beforeNode);
              }
            }
          }
          if (insertList.length) {
            insertList.map(one => {
              if (vueVM) {
                vueVM.$set(vueVM.other.faviconListMap, one.url, one) // 之后的更新用这个 - 用于触发watch
              } else {
                // 此时还没有vueVM
                otherData.other.faviconListMap[one.url] = one // 初始化的更新用这个
              }
            })
          }
        }

        async function InsertSettingMenuCSS() {
          /*"自定义"按钮效果*/
          CONST.flushNode.insert(await create_CSS_Node(".achide{display:none;} .newFuncHighLight{color:red;font-weight: 100;background-color: yellow;font-weight: 600;}#sp-ac-container label{display:inline;}#u{width:319px}#u #myuser{display:inline-block;margin: 13px -10px 0 24px;}.site-wrapper #myuser,.sogou-set-box #myuser,#gbw #myuser{margin-right:15px;} #myuser,#myuser .myuserconfig{padding:0;margin:0}#myuser{display:inline-block;}#myuser .myuserconfig{display:inline-block;line-height:1.5;background:#4e6ef2;color:#fff;font-weight:700;text-align:center;padding:6px;border:2px solid #E5E5E5;}#myuser .myuserconfig{box-shadow:0 0 10px 3px rgba(0,0,0,.1);border-radius: 6px}#myuser .myuserconfig:hover{background:#4662d9 !important;color:#fff;cursor:pointer;border:2px solid #73A6F8;}body[doge] #header{max-width: unset;}body[doge] #myuser{position: absolute;right: 40px;}",
            "AC-MENU_Btn"))
          /*自定义页面内容效果*/
          CONST.flushNode.insert(await create_CSS_Node('body[baidu] #sp-ac-container .container-label:not([class*="baidu"])>label:not([class="label_hide"]),\n' +
            '  body[google] #sp-ac-container .container-label:not([class*="google"])>label:not([class="label_hide"]),\n' +
            '  body[bing] #sp-ac-container .container-label:not([class*="bing"])>label:not([class="label_hide"]),\n' +
            '  body[sogou] #sp-ac-container .container-label:not([class*="sogou"])>label:not([class="label_hide"]),\n' +
            '  body[duck] #sp-ac-container .container-label:not([class*="duck"])>label:not([class="label_hide"]),\n' +
            '  body[doge] #sp-ac-container .container-label:not([class*="doge"])>label:not([class="label_hide"]),\n' +
            '  body[baidu] #sp-ac-container .container-label:not([class*="baidu"])>br,\n' +
            '  body[google] #sp-ac-container .container-label:not([class*="google"])>br,\n' +
            '  body[bing] #sp-ac-container .container-label:not([class*="bing"])>br,\n' +
            '  body[duck] #sp-ac-container .container-label:not([class*="duck"])>br,\n' +
            '  body[doge] #sp-ac-container .container-label:not([class*="doge"])>br,\n' +
            '  body[sogou] #sp-ac-container .container-label:not([class*="sogou"])>br,\n' +
            '  body[baidu] #sp-ac-container .container-label[class*="baidu"]>.label_hide,\n' +
            '  body[google] #sp-ac-container .container-label[class*="google"]>.label_hide,\n' +
            '  body[bing] #sp-ac-container .container-label[class*="bing"]>.label_hide,\n' +
            '  body[sogou] #sp-ac-container .container-label[class*="sogou"]>.label_hide,\n' +
            '  body[duck] #sp-ac-container .container-label[class*="duck"]>.label_hide,\n' +
            '  body[doge] #sp-ac-container .container-label[class*="doge"]>.label_hide\n' + // 注意尾部逗号
            '{' +
            'display:none;\n' +
            '}#sp-ac-container .display-block{display:block;}#sp-ac-container .label_hide{cursor:pointer;margin-left:8%;color:blue}#sp-ac-container .linkhref,#sp-ac-container .label_hide:hover{color:red}#sp-ac-container .linkhref:hover{font-weight:bold}#sp-ac-container label.menu-box-small{max-width:16px;max-height:16px;cursor:pointer;display:inline-block}.AC-CounterT{background:#FD9999}body  #sp-ac-container{position:fixed;top:3.9vw;right:8.8vw}#sp-ac-container{z-index:999999;text-align:left;background-color:white}#sp-ac-container *{font-size:13px;color:black;float:none}#sp-ac-main-head{position:relative;top:0;left:0}#sp-ac-span-info{position:absolute;right:1px;top:0;font-size:10px;line-height:10px;background:none;font-style:italic;color:#5a5a5a;text-shadow:white 0px 1px 1px}#sp-ac-container input{vertical-align:middle;display:inline-block;outline:none;height:auto;padding:0px;margin-bottom:0px;margin-top:0px}#sp-ac-container input[type="number"]{width:50px;text-align:left}#sp-ac-container input[type="checkbox"]{border:1px solid #B4B4B4;padding:1px;margin:3px;width:13px;height:13px;background:none;cursor:pointer;visibility:visible;position:static}#sp-ac-container input[type="button"]{border:1px solid #ccc;cursor:pointer;background:none;width:auto;height:auto}#sp-ac-container li{list-style:none;margin:3px 0;border:none;float:none;cursor:default;}#sp-ac-container fieldset{border:2px groove #ccc;-moz-border-radius:3px;border-radius:3px;padding:4px 9px 6px 9px;margin:2px;display:block;width:auto;height:auto}#sp-ac-container legend{line-height:20px;margin-bottom:0px}#sp-ac-container fieldset > ul{padding:0;margin:0}#sp-ac-container ul#sp-ac-a_useiframe-extend{padding-left:40px}#sp-ac-rect{position:relative;top:0;left:0;float:right;height:10px;width:10px;padding:0;margin:0;-moz-border-radius:3px;border-radius:3px;border:1px solid white;-webkit-box-shadow:inset 0 5px 0 rgba(255,255,255,0.3),0 0 3px rgba(0,0,0,0.8);-moz-box-shadow:inset 0 5px 0 rgba(255,255,255,0.3),0 0 3px rgba(0,0,0,0.8);box-shadow:inset 0 5px 0 rgba(255,255,255,0.3),0 0 3px rgba(0,0,0,0.8);opacity:0.8}#sp-ac-dot,#sp-ac-cur-mode{position:absolute;z-index:9999;width:5px;height:5px;padding:0;-moz-border-radius:3px;border-radius:3px;border:1px solid white;opacity:1;-webkit-box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3),inset 0 2px 1px rgba(255,255,255,0.3),0px 1px 2px rgba(0,0,0,0.9);-moz-box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3),inset 0 2px 1px rgba(255,255,255,0.3),0px 1px 2px rgba(0,0,0,0.9);box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3),inset 0 2px 1px rgba(255,255,255,0.3),0px 1px 2px rgba(0,0,0,0.9)}#sp-ac-dot{right:-3px;top:-3px}#sp-ac-cur-mode{left:-3px;top:-3px;width:6px;height:6px}#sp-ac-content{padding:0;margin:0px;-moz-border-radius:3px;border-radius:3px;border:1px solid #A0A0A0;-webkit-box-shadow:-2px 2px 5px rgba(0,0,0,0.3);-moz-box-shadow:-2px 2px 5px rgba(0,0,0,0.3);box-shadow:-2px 2px 5px rgba(0,0,0,0.3)}#sp-ac-main{padding:5px;border:1px solid white;-moz-border-radius:3px;border-radius:3px;background-color:#F2F2F7;background:-moz-linear-gradient(top,#FCFCFC,#F2F2F7 100%);background:-webkit-gradient(linear,0 0,0 100%,from(#FCFCFC),to(#F2F2F7))}#sp-ac-foot{position:relative;left:0;right:0;min-height:20px}#sp-ac-savebutton{position:absolute;top:0;right:2px}#sp-ac-container .endbutton{margin-top:8px}#sp-ac-container .sp-ac-spanbutton{user-select: none;border:1px solid #ccc;-moz-border-radius:3px;border-radius:3px;padding:2px 3px;cursor:pointer;background-color:#F9F9F9;-webkit-box-shadow:inset 0 10px 5px white;-moz-box-shadow:inset 0 10px 5px white;box-shadow:inset 0 10px 5px white}#sp-ac-container .sp-ac-spanbutton:hover{background-color:#DDD}label[class="newFunc"]{color:blue}',
            "AC-MENU_Page"))
        }

        function InsertSettingMenu() {
          if ((curSite.SiteTypeID !== SiteType.OTHERS) && document.querySelector("#myuser") === null) {
            //baidu; google; bing; 搜狗
            safeWaitFunc("#u, #gb>div>div>div, #b_header>#id_h, .top-bar .sogou-set-box, #header_wrapper .js-hl-button, body[doge] #header_wrapper #header", parent => {
              parent.style = "width: auto;";
              let userAdiv = document.createElement("div");
              userAdiv.id = "myuser";
              userAdiv.innerHTML = `<input type='submit' class='myuserconfig' value='${ AllData.lan.use.menu_text }'/><span class='ac-newversionDisplay' style='background-color: red;float: left;height: 8px;width: 8px;border-radius: 4px;display:${ (CONST.hasNewFuncNeedDisplay ? "unset" : "none") }'>&nbsp;</span>`;
              parent.insertBefore(userAdiv, parent.childNodes[0]);
              document.querySelector("#myuser .myuserconfig").addEventListener("click", function(e) {
                return ACtoggleSettingDisplay(e);
              }, true);
            }, 300)
          }
        }
      }(); // 读取个人设置信息

      async function create_CSS_Node(css, className = '', initType = "text/css") {
        let cssNode = document.createElement("style");
        if (className) {
          cssNode.className = className
          const xclass = '.' + className.split(' ').join('.')
          cssNode.dataset.xclass = xclass
        }

        // 针对less进行单独处理
        if(initType.includes('less')) {
          // parseHTML 耗时 没必要
          // const { css: renderCSS = '' } = await less.render(css);
          // css = renderCSS
          css = await cacheStyle(className, () => Promise.resolve(css))
          initType = "text/css"
        }

        cssNode.setAttribute("type", initType);
        cssNode.appendChild(document.createTextNode(css))

        return cssNode
      }

      async function cacheStyle(styleName, getLessDataFunc) {
        const renderCSSKeyName = '__AC.RenderCSS__' + styleName
        const localData = localStorage.getItem(renderCSSKeyName)
        if (localData) {
          setTimeout(() => {
            console.log('*****有缓存了，但是在刷新了：' + styleName)
            setLocalLessData(renderCSSKeyName, getLessDataFunc)
          }, 2000)
          return localData
        } else {
          console.log('*****没有缓存' + styleName)
          return await setLocalLessData(renderCSSKeyName, getLessDataFunc)
        }
      }

      async function setLocalLessData(renderCSSKeyName, getLessDataFunc) {
        const { css = '' } = await less.render(await getLessDataFunc());
        localStorage.setItem(renderCSSKeyName, css)
        return css
      }

      function AC_addStyle(css, className, addToTarget, isReload = false, initType = "text/css") { // 添加CSS代码，不考虑文本载入时间，只执行一次-无论成功与否，带有className
        setSlowInterval(async instance => {
          /**
           * addToTarget这里不要使用head标签,head标签的css会在html载入时加载，
           * html加载后似乎不会再次加载，body会自动加载
           * **/
          let addTo = document.querySelector(addToTarget);
          if (typeof (addToTarget) === "undefined")
            addTo = (document.head || document.body || document.documentElement);
          // 如果没有目标节点(则直接加) || 有目标节点且找到了节点(进行新增)
          if (typeof (addToTarget) === "undefined" || (typeof (addToTarget) != "undefined" && document.querySelector(addToTarget) != null)) {
            // clearInterval(tout);
            // 如果true 强行覆盖，不管有没有--先删除
            // 如果false，不覆盖，但是如果有的话，要退出，不存在则新增--无需删除
            if (isReload === true) {
              safeRemove("." + className);
            } else if (isReload === false && document.querySelector("." + className) != null) {
              // 节点存在 && 不准备覆盖
              instance.pause()
            }

            let cssNode = document.createElement("style");
            if (className != null) cssNode.className = className;

            // 针对less进行单独处理
            if (initType.includes('less')) {
              // parseHTML 耗时 没必要
              const { css: renderCSS = '' } = await less.render(css);
              css = renderCSS
              initType = "text/css"
            }

            cssNode.setAttribute("type", initType);
            cssNode.appendChild(document.createTextNode(css))

            try {
              debug('执行添加样式：', className)
              addTo.appendChild(cssNode);
            } catch (e) {
              console.log(e.message);
            }
            instance.pause()
          }
        }, 20);
      }

      function hideNode(node) {
        if(node.hasAttribute('ac-ad-hide')) return
        node.setAttribute('ac-ad-hide', '1')
        node.style = 'display: none !important;'
      }

      function safeRemove_xpath(xpathSelector, option = {
        isHide : false, // 隐藏模式
        withAni : true // 带动画效果
      }) {
        const { isHide = false, withAni = false } = option
        safeFunction(() => {
          let removeNodes = getAllElements(xpathSelector);
          if(isHide) {
            for (let i = 0; i < removeNodes.length; i++){
              hideNode(removeNodes[i])
            }
          } else {
            for (let i = 0; i < removeNodes.length; i++){
              removeNodes[i].remove() // 避免卡顿现象
            }
          }
        })
      }

      function checkISBaiduMain() { // 首页=true;非首页=false
        // 如果是百度 &&  没有(百度搜索结果的标志-[存在]百度的内容) return;
        return !(curSite.SiteTypeID === SiteType.BAIDU && !(location.href.replace(/(&|\?)(wd|word)=/, "") !== location.href || document.querySelector("#content_left") ||
            ((document.querySelector("#kw") && document.querySelector("#kw").getAttribute("value")) || "") !== "")
        )
      }

      /**
       * 检查document的子节点是否含有元素
       * @param nodeClass 待检查元素
       * @returns {boolean} T|F
       */
      function checkDocmentHasNode(nodeClass) {
        for (let i = 0; i < document.childNodes.length; i++) {
          if (document.childNodes[i].data && document.childNodes[i].data.indexOf(nodeClass) > 0)
            return { res: true, node: document.childNodes[i], index: i };
        }
        return { res: false, node: null, index: -1 };
      }

      async function changeSiteBackground(imageUrl) { // 这个图片地址可能为：动态图片返回、静态跨域图片
        const css = `body:before{pointer-events: none;position: fixed;width: 100%;height: 100%;top: 0;left: 0;content: '';background-image: url('${imageUrl}');background-size: 100% auto;opacity: 0.6;`
        CONST.flushNode.insert(await create_CSS_Node(css, 'AC-BackGroundImage'), 'head', {
          isReload: true
        })
      }

      async function asyncGMHttpRequestGet(url) {
        return new Promise((resolve, reject) => {
          GM_xmlhttpRequest({
            url: url,
            method: "GET",
            timeout: 5000,
            onload: function(response) {
              const { responseText = '' } = response
              resolve(responseText)
            },
            onerror: function(err) {
              reject(err)
            }
          })
        })
      }

      function FSBaidu() { // thanks for code from 浮生@未歇 @page https://greasyfork.org/zh-TW/scripts/31642
        // debug("初始化FSBAIDU");

        const StyleManger = {
          /**
           * 导入css内容为【文本格式】！！！
           * @param data css内容
           * @param toClassName 预期的类名
           */
          importStyle: async (data, toClassName, useNormalCSS = false, mustLoad = false) => {
            if (typeof (data) === "undefined" || data === null) {
              // 这个居然在VM上出问题了，很奇怪
              console.error("GM_getResourceText获取内容数据异常：", toClassName);
              return
            }
            if(data.startsWith('http')) {
              // 网址开头的，那么尝试去加载数据去
              data = await asyncGMHttpRequestGet(data)
            }
            // 普通浏览器模式--但是似乎样式加载的优先级低于head中的style优先级
            if (!useNormalCSS) {
              /* **********多重样式-兼容edge && 黑夜脚本************ */
              return await create_CSS_Node(data, toClassName, 'less')
              // AC_addStyle(data, toClassName, "head", false, "less");
              /* **********多重样式-兼容edge && 黑夜脚本************ */
            }
          },
          loadStyle: async function (styleName, insClassName, setUrl, useNormalCSS = false, mustLoad = false) {
            // 全部采用text/css的内容来载入
            // 如果是debug模式。或者是gm模式
            if (isLocalDebug) {
              debug("本地-加载样式：" + insClassName);
              setUrl = setUrl || "http://debug.baidu.com/" + styleName + ".less?t=" + Math.random() * new Date().getTime();
              return await this.importStyle(setUrl, "AC-" + insClassName, useNormalCSS, mustLoad);
            } else {
              debug("加载样式：" + insClassName);
              // TamperMonkey + GreaseMonkey < 4.0 + ViolentMonkey (4.0GreaseMonkey不支持GetResource方法)
              const style = curSite.GMStyleList[styleName] || await GM_getResourceText(styleName)
              return await this.importStyle(style, "AC-" + insClassName, useNormalCSS, mustLoad);
            }
          },
          //加载护眼模式样式
          loadHuYanStyle: async function (color) {
            if (ACConfig.isUserColorEnable) {
              color = color || ACConfig.defaultHuYanColor || "#FFFFFF";
            } else {
              color = color || "#FFFFFF";
            }
            if (color.indexOf("#") !== 0 || color.length < 7) return;
            const style = GM_getResourceText("MainHuYanStyle")
              .replace(/#aaa(a*)/igm, color)
              .replace(/#bbb(b*)/igm, this.Lighter(color, -40))
              .replace(/#ccc(c*)/igm, this.Lighter(color, 45));
            CONST.flushNode.insert(await create_CSS_Node(style, "AC-" + CONST.useItem.name + "HuYanStyle-File", 'less'), 'head', {
              isReload: true
            })
          },
          clip255: function (value) {
            if (value > 255) return 255;
            if (value < 0) return 0;
            return value;
          },
          Lighter: function (oriRGB, deltaY) {
            // 按比例缩放 + 1/deltaY
            // HEX 2 RGB
            let rgb = oriRGB.replace("#", "");
            let R = parseInt("0x" + rgb.substr(0, 2));
            let G = parseInt("0x" + rgb.substr(2, 2));
            let B = parseInt("0x" + rgb.substr(4, 2));
            // RGB 2 YUV
            let Y = ((66 * R + 129 * G + 25 * B + 128) >> 8) + 16;
            let U = ((-38 * R - 74 * G + 112 * B + 128) >> 8) + 128;
            let V = ((112 * R - 94 * G - 18 * B + 128) >> 8) + 128;
            Y = Y * (1 + 1.0 / deltaY);// 提高亮度
            // YUV 2 RGB
            R = this.clip255((298 * (Y - 16) + 409 * (V - 128) + 128) >> 8);
            G = this.clip255((298 * (Y - 16) - 100 * (U - 128) - 208 * (V - 128) + 128) >> 8);
            B = this.clip255((298 * (Y - 16) + 516 * (U - 128) + 128) >> 8);
            return "#" + ((R << 16) + (G << 8) + B).toString(16);
          },
          loadBaiduLiteStyle: async function () {
            const node = await this.loadStyle("baiduLiteStyle", "baiduLiteStyle");
            this.flushDom.insert(node, 'DOM')
          },
          loadBgImage: async function() {
            if(CONST.useItem.defaultBgUrl && CONST.useItem.defaultBgUrl.trim()) {
              changeSiteBackground(CONST.useItem.defaultBgUrl)
            }
          },
          loadBgAutoFit: async function() {
            const node = await this.loadStyle("BgAutoFit", "BgAutoFit");
            this.flushDom.insert(node, 'DOM')
          },
          //加载普通样式
          loadCommonStyle: async function () {
            const node = await this.loadStyle(CONST.useItem.name + "CommonStyle", CONST.useItem.name + "CommonStyle");
            this.flushDom.insert(node, 'DOM')
          },
          //加载单页样式
          loadOnePageStyle: async function () {
            const node2 = await create_CSS_Node("#main #cnt, #cnt #center_col, #cnt #foot{\n" +
              "    transition: all 0.1s ease-in-out;\n" +
              "    animation-duration: 0s !important;\n" +
              "}\n" +
              "div[two-father]{\n" +
              "    animation-duration: 0s !important;\n" +
              "}", 'AC-PageNoAni');
            this.flushDom.insert(node2, 'head')

            const node = await this.loadStyle(CONST.useItem.name + "OnePageStyle", CONST.useItem.name + "OnePageStyle");
            this.flushDom.insert(node, 'DOM')
          },
          //加载双页样式
          loadTwoPageStyle: async function () {
            const node = await this.loadStyle(CONST.useItem.name + "TwoPageStyle", CONST.useItem.name + "TwoPageStyle");
            this.flushDom.insert(node, 'DOM')
            let cssHead = "";
            if (curSite.SiteTypeID === SiteType.BAIDU || curSite.SiteTypeID === SiteType.MBAIDU) cssHead = "#container #content_left, body[news] #container #content_left>div:not([class]):not([id])";
            if (curSite.SiteTypeID === SiteType.GOOGLE) cssHead = ".srg, #rso, div[two-father], #rso>div:not(.g), #kp-wp-tab-overview";
            if (curSite.SiteTypeID === SiteType.BING) cssHead = "#b_content #b_results";
            if (curSite.SiteTypeID === SiteType.SOGOU) cssHead = "#main .results";
            if (curSite.SiteTypeID === SiteType.DUCK) cssHead = "#react-layout .react-results--main";
            if (curSite.SiteTypeID === SiteType.DOGE) cssHead = "#links_wrapper .results--main #links";
            const node2 = await create_CSS_Node(cssHead + "{grid-template-columns: repeat(2, minmax(50%,1fr));grid-template-areas:'xmain xmain';}.AC.sp-separator{grid-column-start: 1;grid-column-end: xmain-end;}",
              "AC-TwoPageExStyle");
            this.flushDom.insert(node2, 'head')
          },
          // 加载三列样式
          loadThreePageStyle: async function () {
            let cssHead = "";
            if (curSite.SiteTypeID === SiteType.BAIDU || curSite.SiteTypeID === SiteType.MBAIDU) cssHead = "#container #content_left, body[news] #container #content_left>div:not([class]):not([id])";
            if (curSite.SiteTypeID === SiteType.GOOGLE) cssHead = ".srg, #rso, div[two-father], #rso>div:not(.g), #kp-wp-tab-overview";
            if (curSite.SiteTypeID === SiteType.BING) cssHead = "#b_content #b_results";
            if (curSite.SiteTypeID === SiteType.SOGOU) cssHead = "#main .results";
            if (curSite.SiteTypeID === SiteType.DUCK) cssHead = "#react-layout .react-results--main";
            if (curSite.SiteTypeID === SiteType.DOGE) cssHead = "#links_wrapper .results--main #links";
            const node2 = await create_CSS_Node(cssHead + "{grid-template-columns: repeat(3, minmax(33.3%,1fr));grid-template-areas:'xmain xmain xmain';}",
              "AC-ThreePageExStyle");
            this.flushDom.insert(node2, 'head')
          },
          // 加载四列样式
          loadFourPageStyle: async function () {
            let cssHead = "";
            if (curSite.SiteTypeID === SiteType.BAIDU || curSite.SiteTypeID === SiteType.MBAIDU) cssHead = "#container #content_left, body[news] #container #content_left>div:not([class]):not([id])";
            if (curSite.SiteTypeID === SiteType.GOOGLE) cssHead = ".srg, #rso, div[two-father], #rso>div:not(.g), #kp-wp-tab-overview";
            if (curSite.SiteTypeID === SiteType.BING) cssHead = "#b_content #b_results";
            if (curSite.SiteTypeID === SiteType.SOGOU) cssHead = "#main .results";
            if (curSite.SiteTypeID === SiteType.DOGE) cssHead = "#react-layout .react-results--main";
            if (curSite.SiteTypeID === SiteType.DOGE) cssHead = "#links_wrapper .results--main #links";
            const node2 = await create_CSS_Node(cssHead + "{grid-template-columns: repeat(4, minmax(25%,1fr));grid-template-areas:'xmain xmain xmain xmain';}",
              "AC-FourPageExStyle");
            this.flushDom.insert(node2, 'head')
          },
          findPossibleTwoLines() {
            // 通过.g来往上查找
            // 如果其拥有的子节点的className具有两个以上的相同项，那么认为是grid布局，需要遍历，增加标记位
            function checkOne(element) {
              const res = {
                exist: false,
                skipFind: false
              }

              if(element.children.length <= 2) return res

              // 如果已经有这个参数了，或者当前节点是右侧栏，那么跳过
              if(element.hasAttribute('two-checked') || element.id.includes("rhs")) {
                res.skipFind = true
                return res
              }

              element.setAttribute('two-checked', 'true')
              const childNodeClassNameList = [...element.children].map(one => one.className).filter(one => one && one !== '')
              const childNodeClassNameSet = new Set(childNodeClassNameList)
              const tf = childNodeClassNameSet.size !== childNodeClassNameList.length
              if(tf) {
                // debugger
                res.exist = true
              }
              return res
            }

            const gList = document.querySelectorAll(".g")
            const possibleList = []
            for (const perG of gList) {
              let curIndex = 10 // 最多查10层
              let curNode = perG.parentNode

              while(curIndex-- > 0) {
                const { exist = false, skipFind = false } = checkOne(curNode)
                if(skipFind) {
                  break
                }
                if(exist) {
                  possibleList.push(curNode)
                  break
                }
                curNode = curNode.parentNode
              }
            }
            // console.log(possibleList)
            return possibleList
          },
          googleFatherChildTag: async function() {
            if (curSite.SiteTypeID === SiteType.GOOGLE) {
              let nodeList = this.findPossibleTwoLines()
              // console.log(nodeList)

              // 对于这些块，都判定一下结构，如果子节点中div数量不足2个的，那么丢弃grid布局
              if (nodeList.length > 0) {
                nodeList.forEach((node) => {
                  const divChildren = [...node.children].filter(one => one.tagName.toUpperCase() === 'DIV')
                  const script_styleChildren = [...node.children].filter(one => /(SCRIPT|STYLE)/.test(one.tagName.toUpperCase()))
                  if (divChildren.length >= 2 && script_styleChildren.length < 3) {
                    node.setAttribute('two-father', 1)
                    divChildren.forEach(one => {
                      // 不显示那些应该隐藏的元素
                      if(one.innerText.length > 0 || one.children.length > 0) {
                        one.setAttribute('two-child', 1)
                      } else {
                        one.style = 'display:none'
                      }
                    })
                  } else {
                    node.removeAttribute('two-father')
                  }

                  // 两列的时候，增加对应的grid布局
                  if(CONST.useItem.AdsStyleMode >= 3) {
                    if (divChildren.length >= 2) {
                      node.style.display !== 'grid' ? node.style.display = 'grid' : ''
                    } else {
                      node.style.display !== 'unset' ? node.style.display = 'unset' : ''
                    }
                  }
                })
              }
              // 特殊元素一行处理
              document.querySelectorAll("#rso>div:not(.g)>div[jsmodel]").forEach(one => {
                one.parentNode.style.display = "unset"
              })
            }
          },
          loadPlainToCSS: function () {
            for (let i = 0; i < document.childNodes.length; i++) {
              let curNode = document.childNodes[i];
              if (curNode.del) curNode.remove();
            }
            safeRemove("style[class*='AC'][del='1']");
          },
          // 禁止独立的样式加载
          loadCSSToPlain: function () {
            for (let i = 0; i < document.childNodes.length; i++) {
              let curNode = document.childNodes[i];
              // 如果是存在css， 且非必须数据
              if (curNode.target === "xml-stylesheet" && curNode.data.indexOf("must=\"true") < 0) {
                curNode.data = "";
                curNode.del = true;

                // 对于edge和safari都特殊处理一下吧
                if (navigator.userAgent.toLowerCase().indexOf("edge") > 0 || navigator.userAgent.toLowerCase().indexOf("safari") > 0) {
                  curNode.remove();
                }
              }
            }
          }
        };
        const ControlManager = {
          ...StyleManger,
          //居中显示 --- 必须是百度和谷歌的搜索结果页面，其他页面不能加载的--已经通过脚本include标签限制了一部分
          centerDisplay: async function () {
            // flush完成之后，等一等变更，渲染差不多之后再刷新
            this.googleFatherChildTag() // 先初始化，减少抖动问题
            setSlowInterval(() => {
              this.googleFatherChildTag()
            }, 600)
            // 如果是百度 && ((地址替换->包含wd关键词[替换之后不等-是百度结果页面]) || 有右边栏-肯定是百度搜索结果页 || value中存在搜索内容) return;
            if (!checkISBaiduMain()) {
              console.log('not good At Baidu')
              this.loadCSSToPlain();
              return;
            }
            this.flushDom.insert(await create_CSS_Node(".minidiv #logo img{width: 100px;height: unset;margin-top: 0.3rem;} body.purecss-mode:before{display: none;}", "AC-style-logo"))
            let result = parseInt(CONST.useItem.AdsStyleMode || -1);
            if (acCssLoadFlag === false && document.querySelector(".ACExtension") === null) {
              debug("in样式即将加载:" + result);
              let expandStyle = "#wrapper #rs, #wrapper #content_left .result, #wrapper #content_left > .c-container{min-width:670px;}.c-span18{width:78%!important;min-width:550px;}.c-span24{width: auto!important;}";
              if (result === 1) { // 单列模式
                this.flushDom.insert(await create_CSS_Node(expandStyle, "AC-Style-expand"))
                await this.loadCommonStyle();
              } else if (result === 2) {//单页居中
                this.flushDom.insert(await create_CSS_Node(expandStyle, "AC-Style-expand"))
                await this.loadCommonStyle();
                await this.loadOnePageStyle();
              } else if (result === 3) { //双页居中
                await this.loadCommonStyle();
                await this.loadTwoPageStyle();
              } else if (result === 4) { // 三列
                await this.loadCommonStyle();
                await this.loadTwoPageStyle();
                await this.loadThreePageStyle();
              } else if (result === 5) { // 四列
                await this.loadCommonStyle();
                await this.loadTwoPageStyle();
                await this.loadFourPageStyle();
              }
              acCssLoadFlag = true;
              debug("in样式运行结束");
              if (curSite.SiteTypeID === SiteType.BAIDU && ACConfig.Style_BaiduLite === true) {
                // AC_addStyle(GM_getResourceText("baiduLiteStyle"), "AC-baiduLiteStyle", "head")
                await this.loadBaiduLiteStyle();
              }

              safeWaitFunc('body', async () => {
                if(result > 0) { // 非原始模式下
                  await this.loadBgImage()
                  CONST.useItem.defaultBgUrl && CONST.useItem.BgFit && await this.loadBgAutoFit()
                  document.body.classList.remove('purecss-mode')
                } else {
                  document.body.classList.add('purecss-mode')
                }
              })
              this.flushDom.flush()
            }
            this.loadPlainToCSS();
            if (curSite.SiteTypeID !== SiteType.BAIDU && curSite.SiteTypeID !== SiteType.BAIDU_XUESHU && curSite.SiteTypeID !== SiteType.GOOGLE && curSite.SiteTypeID !== SiteType.BING && curSite.SiteTypeID !== SiteType.SOGOU && curSite.SiteTypeID !== SiteType.DUCK && curSite.SiteTypeID !== SiteType.DOGE) return;

            // 如果是谷歌 && (地址替换->是谷歌图像页面 || 是地图页面)[替换要变] return;
            if (curSite.SiteTypeID === SiteType.GOOGLE && location.href.replace(/tbm=(isch|lcl|shop|flm)/, "") !== location.href) {
              this.loadCSSToPlain();
              return;
            }
            this.huyanCheckAndLoad()
            this.flushCheckAndLoad()
          },
          flushDom: new FlushDomFragment(),
          huyanTimer: null,
          flushTimer: null,
          huyanCheckAndLoad: function() {
            /**护眼Style最后载入**/
            if (CONST.useItem.HuYanMode === true){
              this.loadHuYanStyle()
            }
            if(!this.huyanTimer) {
              this.huyanTimer = setSlowInterval(() => {
                if (document.querySelector("style[class*='darkreader']") != null) {
                  this.loadHuYanStyle()
                  this.huyanTimer.cancel()
                }
              }, 100)
            }
          },
          flushCheckAndLoad: function() {
            if(!this.flushTimer) {
              this.flushTimer = setSlowInterval(() => {
                this.flushDom.flush()
              }, 600)
            }
          },
          init: function () {
            if (CONST.isGoogleImageUrl) return;
            this.centerDisplay();
          }
        };
        return ControlManager
      }
    }
  })();
}();
