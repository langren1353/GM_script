// ==UserScript==
// @name            AC-baidu:重定向优化百度搜狗谷歌搜索_去广告_favicon_双列
// @name:en         AC-baidu:google_sogou_RedirectRemove_favicon_adaway_TwoLine
// @name:zh         AC-baidu:重定向优化百度搜狗谷歌搜索_去广告_favicon_双列
// @name:zh-CN      AC-baidu:重定向优化百度搜狗谷歌搜索_去广告_favicon_双列
// @name:ja         AC-baidu:重定向最適化Baiduの搜狗Google検索結果のリダイレクト除去+に広告_favicon
// @description     1.繞過百度、搜狗、谷歌、好搜搜索結果中的自己的跳轉鏈接，直接訪問原始網頁-反正都能看懂 2.新增拦截百度百家号的无用推广数据-支持其他站点 3.去除百度的多余广告 4添加Favicon显示 5.页面CSS 6.添加计数 7.开关选择以上功能
// @description:en  1.bypass the redirect link at baidu\sogou\google\haosou; 2.remove ads at baidu; 3.add Favicon for each website; 4.render your own style; 5.counter; Switch to handle all
// @description:ja  1.迂回Baidu、Sogou、Google、Haosou検索検索結果の中の自分の遷移リンク; 2.Baiduの余分な広告を取り除く; 3.コメントを追加; 4.ページのカスタムCSP; 5.カウントを追加; 6.スイッチは以上の機能を選択します。
// @icon https://raw.githubusercontent.com/langren1353/zbImg/master/img0/icon.jpg
// @author          AC
// @license         GPL-3.0-only
// @create          2015-11-25
// @run-at          document-start
// @version         23.12
// @connect         www.baidu.com
// @include         *://ipv6.baidu.com/*
// @include         *://www.baidu.com/*
// @include         *://m.baidu.com/*
// @include         *://xueshu.baidu.com/*
// @include         *://www.sogou.com/web*
// @include         *://www.sogou.com/sie*
// @include         *://www.so.com/s?*
// @include         *://*.bing.com/*
// @include         *://encrypted.google.*/search*
// @include         *://*.google*/search*
// @include         *://*.zhihu.com/*
// @namespace       1353464539@qq.com
// @supportURL      https://qm.qq.com/cgi-bin/qm/qr?k=fOg8ij6TuwOAfS8g16GRYNf5YYFu5Crw&jump_from=&auth=-l05paasrPe5zigt5ahdzn_dzXiB1jJ_
// @home-url        https://greasyfork.org/zh-TW/scripts/14178
// @home-url2       https://github.com/langren1353/GM_script
// @copyright       2017, AC
// @lastmodified    2019-02-16
// @feedback-url    https://qm.qq.com/cgi-bin/qm/qr?k=fOg8ij6TuwOAfS8g16GRYNf5YYFu5Crw&jump_from=&auth=-l05paasrPe5zigt5ahdzn_dzXiB1jJ_
// @note            2019.02.16-V23.12 修复上次更新导致的一堆bug & 更换资源。。。腾讯CDN真的不够你们用，还是用百度的免费cdn吧
// @note            2019.02.15-V23.11 修复和Google Search Extra Button的兼容问题。修复地址有时候不能访问的问题。修复旧ff上的forEach和innerText不能用的问题。删除部分旧日志
// @note            2019.02.14-V23.10 安静点，我有女朋了i_i。& 修复百度图片失效的问题
// @note            2019.02.13-V23.09 提供选项-直接删除已屏蔽的内容，避免看到一些垃圾无用信息；修复残留bug在单列时相关搜索宽度异常；优化百度图标为透明图标
// @note            2019.01.29-V23.08 修复从首页进入的导致的block功能失效的问题；修复移动预测按钮失效的问题；新增并修复百度手机版的兼容问题-支持手机版重定向；新增原始地址展示，减少百度更新导致的看不到地址的问题；优化拦截列表的展示和刷新的问题
// @note            2019.01.25-V23.07 修复Favion加载失败的问题-这下就可以自定义favicon了，以前遗留了很久的bug了 && 移除部分LOG减小代码
// @note            2019.01.25-V23.06 修复由于代码优化，导致的Huyan功能开启后脚本失效的问题
// @note            2019.01.25-V23.05 假装大家没发现bug，赶紧更新搜狗页面的bug
// @note            2019.01.25-V23.03 优化提示效果; 修复有时候自定义按钮无法显示的情况；新增搜狗页面的多列效果
// @note            2019.01.23-V23.02 修复初始化的时候数据异常导致的block拦截无效的问题
// @note            2019.01.23-V23.01 新增说明-感谢大神Jefferson Scher的拦截脚本https://greasyfork.org/zh-CN/scripts/1682. Thanks for the script of Jefferson Scher Without his help I can't Implement this Function.
// @note            2019.01.23-V23.00 新增拦截模式，可以自定义的选择拦截某个域名，拦截掉你不想看的内容
// @note            2018.12.25-V22.06 移除谷歌底部广告
// @note            2018.12.22-V22.05 修复小细节问题
// @note            2018.12.22-V22.04 修复百度搜索“咨询”栏目下没有搜索结果的问题 && 同时修改部分样式 && 修复输入框右侧无法点击输入的问题
// @note            2018.12.22-V22.03 修复edge的样式错乱问题 && 修复谷歌双列样式问题 && 修复百度顶部大空白的问题 && 修复支持DarkReader
// @note            2018.12.20-V22.02 修复样式加载 && 修复护眼模式效果
// @note            2018.12.20-V22.01 更换样式表插入模式，尽量避免闪烁问题; 修复edge上该模式的兼容问题
// @note            2018.12.19-V21.15 修复上次更新导致的护眼模式失效的问题
// @note            2018.12.19-V21.14 修复在edge上样式没有生效的问题
// @note            2018.12.19-V21.13 修复上次更新代码忘记修改导致的bug，修复百度移动预测的遗留bug
// @note            2018.12.18-V21.12 继续加快移除广告的内容，尽量减少闪烁的情况；吐槽一下，百度的广告是越来越烦了
// @note            2018.12.18-V21.11 修复在特殊情况下的样式表没有生效的问题，同时能够更快速的移除广告内容
// @note            2018.12.18-V21.10 修复特殊关键内容搜索下，由于移除广告导致的页面顶部特殊标记显示不正确的问题。
// @note            2018.12.18-V21.9 再次优化样式表加载速度，能更好的更快速的加载样式而不影响代码运行
// @note            2018.12.08-V21.8 修复srcElement在firefox旧版本上不支持的问题
// @note            2018.12.07-V21.7 修复护眼色的引入；修复GM小于4.0版本的兼容问题；优化选项的位置，避免过长
// @note            2018.12.06-V21.6 感谢Mooncan对谷歌样式调整的建议，已经采用了该样式，效果特别好; 同时修复了谷歌右侧栏的位置问题
// @note            2018.12.06-V21.5 P_P修复上一版没有测试导致的支持ViolentMonkey但是有不支持GreaseMonkey的问题；更换css地址；修复护眼色在百度上的部分样式问题
// @note            2018.12.06-V21.4 修复ViolentMonkey的支持；至此已经完全支持三只猴子(TamperMonkey、ViolentMonkey、GreaseMonkey)了；如果还有BUG-直接加群反馈
// @note            2018.12.06-V21.3 修复在edge上样式错乱的问题 && 修复宽度过宽的问题
// @note            2018.12.05-V21.2 移除默认的护眼模式。。。
// @note            2018.12.05-V21.1 修复GreaseMonkey不支持GM_getResourceText导致的样式无法引入的问题，使用自己的服务器中转
// @note            2018.12.05-V21.0 新增必应单列、双列、多列展示；新增护眼模式，各种颜色自定义设置；修复谷歌已浏览的网址未变色问题；优化一定的资源占用
// @note            2018.10.18-V20.5 修复由于谷歌更新导致的样式问题
// @note            2018.10.08-V20.4 修复由于去广告导致的卡顿问题 & 重写favicon添加的位置元素-减少错位产生
// @note            2018.10.03-V20.3 国庆无事,刷版本; 修复在侧边栏开启需要在1920的分辨率下的问题，默认关闭侧边栏的样式操作，如果需要开启的话，在自定义样式中设置开启即可，增加三列|四列模式
// @note            2018.10.01-V20.2 修复拦截广告过多导致的页面显示问题-有些正常地址也被拦截了->似乎发现不是这个脚本的bug;那就刷个版本吧，正好处理下样式缓存问题 & 大家国庆节快乐
// @note            2018.09.21-V20.1 修复在ViolentMonkey的兼容问题 && 样式加载缓慢的问题
// @note            2018.09.21-V20.0 修复闪烁频繁的问题；修复由于扩展和脚本模式两个CSS同时加载导致的问题；新增点击任意位置关闭设置按钮；修复在bing上的计数器位置错误；调整页面单页的样式，这次是真的居中了
// @note            2018.09.19-V19.8 修复TamperMonkey和扩展模式下的兼容问题
// @note            2018.09.19-V19.7 分离去广告功能和自定义样式功能
// @note            2018.09.18-V19.6 修复由于infinity扩展的地址导致的百度样式没有载入的问题；修复万年bug之搜索预测无效的问题
// @note            2018.09.18-V19.5 新增支持扩展模式-推荐使用扩展；修复谷歌地图页面的载入问题；配置脚本GPL协议；支持旧版本的chrome上的自定义显示结果却在最底部的问题-无法解决旧版本chrome上双列的问题
// @note            2018.08.31-V19.4 修复1.google页面中计数器Counter在账号登录后的显示错位问题； 2.排除掉百度可能存在的error情况的地址； 3.更换css样式地址，我的CDN流量撑不住了
// @note            2018.08.24-V19.3 修复谷歌图片在单列模式下的错位问题
// @note            2018.08.17-V19.2 修复谷歌和百度的部分样式问题
// @note            2018.08.16-V19.1 继续修复谷歌和百度双列的问题，这次尽量采用css样式表来调整，感觉效果还可以
// @note            2018.08.14-V18.9 修复谷歌双列的翻页错位的问题; 百度搜索结果的阴影模式; 高分屏等我找到一台高分的显示器再说吧
// @note            2018.08.11-V18.8 紧急-修复更新规则导致的谷歌失效的问题
// @note            2018.08.10-V18.7 推荐升级：修改生效规则，尽量避免弹出提示更新窗口；修复-chrome4x版本的bug；预计下次更新处理高分屏显示界面问题
// @note            2018.08.08-V18.6 更新脚本命名; 尝试解决http没有自动https的问题--------刷版本号
// @note            2018.08.04-V18.5 修复在chrome上脚本偶尔没有生效的问题；修复百度搜索顶部侧移的情况；一定情况下修复双页的分列
// @note            2018.07.25-V18.4 仅做文本说明修改-en-jp; 下次预计修改百度首页的广告问题
// @note            2018.07.25-V18.3 减少了偶尔从首页加载进来的时候样式表没有载入的问题~能遇到部分样式表加载失效的情况很少;优化广告移除
// @note            2018.07.24-V18.2 修复从百度首页加载进入页面时样式表没有载入的问题
// @note            2018.07.24-V18.1 整体优化样式表加载速度-百度和谷歌的界面美化一下就载入了特别快；修复百度搜索的小链接的重定向没有改；修复下划线移除选项的下划线移除模式
// @note            2018.07.21-V18.0 修复搜狗搜索没有获取到真实链接的问题；处理百度重定向速度又快又好；这次更新就支持edge了，同时理论上支持safari，希望测试；其次优化谷歌的界面样式
// @note            2018.07.12-V17.9 修改检测参数，兼容支持Opera浏览器；暂时还是不支持EDGE的链接重定向功能
// @note            2018.07.07-V17.8 修复由于上次更新世界杯界面时导致的shadowDOM关闭，然后广告出现的问题；优化整体去广告规则---有工具何必自己造轮子-本次用了百度自带jquery的查询函数has()
// @note            2018.06.29-V17.7 修复右边栏导致的右侧过高，左侧看不见，以及自定义页面样式丢失的问题
// @note            2018.06.27-V17.6 暂时关闭ShadowDOM的移除功能-尽量保留搜索世界杯功能完善。修复在某些页面上脚本无法运行的情况。新增自定义样式的输入框
// @note            2018.06.26-V17.5 默认关闭右边栏-昨天忘了关闭了
// @note            2018.06.25-V17.4 1.修复谷歌双列问题；2.修复右边栏展示-好些人说去掉之后不好看；3.似乎上个版本又有多次插入导致的页面卡顿情况-再次修复。。。其他的似乎没有了，想起再说
// @note            2018.06.14-V17.3 由于edge中还是不支持返回真实链接，于是暂时屏蔽掉edge浏览器总的请求，等猴子更新了再开启这个功能；connect元素中添加baidu.com避免抽风
// @note            2018.06.13-V17.2 加快查询速度-同时不再弹窗说新连接，无需设置特殊参数；缺点：LOG中会有许多Refused to connect to "xxx": Request was redirected to a not whitelisted URL
// @note            2018.05.25-V17.1 新增支持百度学术的重定向功能
// @note            2018.05.25-V17.0 拆分关键词高亮这个功能，保证功能尽量不交叉，如果需要这个功能的，请安装搜索关键词自动高亮脚本
// @note            2018.05.22-V16.5 尝试缓解内存的问题，避免对其他的进行干扰，同时减少了head标签触发
// @note            2018.05.22-V16.4 彻底拆分双击高亮和自动高亮功能，同时保持两个功能都是关闭状态
// @note            2018.05.22-V16.3 设置添加双击高亮按钮
// @note            2018.05.22-V16.2 不再使用MO方式，百度的原因导致MO彻底无法使用，于是全都用DOM操作来判断吧
// @note            2018.05.21-V16.1 优化ac_redirectstatus高亮的问题; 同时修复了一个高亮关键词的bug；在一个老司机的指点下，添加了referer参数
// @note            2018.05.21-V16.0 谢谢朋友们关心5.20我还是一个人过的很好；大版本：修正计数器的计数问题，修正MO失效之后脚本的触发问题；新增搜索关键词高亮选项，默认关闭
// @note            2018.05.06-V15.3 简单移除好搜的广告
// @note            2018.04.20-V15.2 修复bing的Favicon效果，避免显示在不同行上
// @note            2018.04.04-V15.1 继续尝试修复bug,优化整体页面效果以及谷歌其余页面的效果展示;同时将百度样式写入到#wrapper>#head中去,刷新或者更换页面时就不会异常闪烁并且很平滑了
// @note            2018.04.02-V14.9 更新谷歌整体效果,并尝试修复图片新闻等显示问题的bug
// @note            2018.04.01-V14.8 --日狗问题，忘了改代码，只是更新了说明。。
// @note            2018.04.01-V14.7 经过老司机(没ID)提供的反馈，发现上一版更新的依旧有bug，修复调小触发参数导致的触发没有生效的问题--偶尔双列失效的问题
// @note            2018.04.01-V14.6 经过老司机(没ID)提供的反馈，排查发现chrome上脚本首次载入失效的问题，已经修复
// @note            2018.04.01-V14.5 更新并添加谷歌双列、待测试，如果有问题，可以直接反馈
// @note            2018.03.28-V14.4 移除jquery的require，疑似jquery引起冲突问题，于是彻底弃用jquery来处理页面数据，改用原声JS处理页面
// @note            2018.03.27-V14.3 刷一个版本号，同时优化CSS载入过多的问题，但是载入过慢的问题又出现了，下次处理
// @note            2018.03.26-V14.2 修复由于上次更新过于流畅的bug，同时修正首页的样式显示
// @note            2018.03.25-V14.1 再次抄点代码，借鉴老司机:浮生@未歇的部分优化代码完善已有的（@resource、GM_getResourceText、GM_addStyle），避免页面闪烁一下，同时解决部分css载入重复的问题
// @note            2018.03.23-V14.0 1.尝试修复在百度贴吧和百度知道的文字显示异常的问题; 2.修复编号奇怪的异常问题
// @note            2018.03.18-V13.9 更新谷歌的favicon丢失的问题
// @note            2018.03.04-V13.8 更新图库为https模式，避免那啥显示不安全
// @note            2018.02.16-V13.7 1.新增关闭百度搜索预测；2.新增未知图标时切换； 3.移除百度搜索建议的顶部一条
// @note            2018.01.12-V13.6 1.新增移除右边栏的按钮；2.新增版本显示文字；3.修正favicon位置；4.修复favicon的图片错误时候的值，万年BUG
// @note            2017.12.27-V13.5 修复由于上个版本更新处理白屏，导致的默认标准模式的右侧栏不见了
// @note            2017.12.20-V13.4 感谢ID：磁悬浮青蛙的反馈，已经修复小概率搜索之后点击结果白屏的问题-貌似之前处理过，但是没有彻底处理掉，这次彻底了，改用CSS隐藏
// @note            2017.12.04-V13.3 新增设置，针对百度系列的重定向问题，不常用百度系列的朋友可以开启这个功能
// @note            2017.11.23-V13.2 感谢卡饭坛友@Apollo8511提供反馈，已经修复部分知乎的重定向问题，更多问题可以直接反馈我
// @note            2017.11.22-V13.1 移除百度系的重定向，虽然处理了，但是百度系直连会导致文字无法直接显示，其他直连不影响
// @note            2017.11.17-V12.13 进一步移除百度的广告，右边部分广告的处理和移除
// @note            2017.11.15-V12.12 搜狗的搜索地址又变了，加一个
// @note            2017.11.02-V12.11 新增在手机mobile模式下百度的重定向处理，其余网站以后再说吧，估计没有需求
// @note            2017.10.27-V12.10 1.修复逼死强迫症的问题；2.移除完整模式-避免出现各种拦截；3.修复www.so.com的重定向问题
// @note            2017.09.18-V12.9 更新原因：1.勿忘国耻918；2.更新百度偶尔重定向没成功的问题；3.修复页面的小问题；4.新增文字下划线开关
// @note            2017.09.15-V12.8 紧急修复谷歌上页面卡顿的问题，排查得知为百度规则的扩展出了问题，非常感谢众多朋友的支持，没有你们的反馈就没有这个脚本。修复并移除了百度官方采用的新方式广告模式，貌似只在chrome上出现
// @note            2017.09.13-V12.7 1.修复N年前更新导致的部分网址重定向无效，继续使用GET方法，因为好些网站不支持HEAD方法，获取成功之后就断开，尽量减少了网络开支; 2.修复搜狗的部分搜索异常; 3.修复百度在chrome61上的链接异常问题
// @note            2017.09.13-V12.6 开学之后的第二个版本，修复上次更新导致的百度首页错乱，修复firefox上的触发，修复SuperPreloader的翻页展示
// @note            2017.09.12-V12.5 开学之后的第一个版本，修复在百度上偶尔不触发的问题【从首页搜索的时候触发】，其次在兄弟XXX(我也忘了哪个P_P)的帮助下，修复了偶尔会全屏特殊推广模式的问题
// @note            2017.09.06-V12.4 修复上个版本更新导致的百度知道再次异常问题;更新知乎上的重定向问题-自己的脚本
// @note            2017.09.06-V12.3 修复双列的模式的显示问题，如果有问题希望反馈一下，顺便切换css来源
// @note            2017.09.04-V12.2 特意修复在ViolentMonkey上的设置无效的问题以及在360浏览器上的设置不显示问题
// @note            2017.09.04-V12.1 百度页面直接添加设置入口；360浏览器设置可能在底部页面；支持单列和双列模式，界面更美观from浮生@未歇；可能是最近一段时间的最后版本了，要开学了~~
// @note            2017.09.02-V11.10 添加两个选项，可以选择性移除部分设置
// @note            2017.09.01-V11.9 修复上次更新导致的百度去广告不灵的问题
// @note            2017.08.30-V11.8 新增：1.GM设置栏目中加入设置 2.baidu-使用HEAD方式获取，减少数据传输，搜狗特殊，继续GET方式
// @note            2017.08.29-V11.7 方便朋友们-移除知乎重定向
// @note            2017.08.07-V11.6 调整：移除小绿点，换为点击Favicon或者是计数器弹出窗口，更换为加群链接
// @note            2017.08.06-V11.5 修复，保存异常；预期之后会添加百度搜索页面的大调整
// @note            2017.08.05-V11.4 新增：反馈和建议地址增加
// @note            2017.08.04-V11.3 修复：由于英语不好导致的拼写错误，感谢shj兄弟指出
// @note            2017.08.03-V11.2 新增：谷歌链接新标签打开; 移除搜索结果链接的下划线
// @note            2017.07.22-V11.1 新增了开关模式，可以开启或者关闭某些自己不喜欢的功能，开关在右上角，和SuperPreload共用
// @note            2017.06.25-V10.1 修复上次更新导致的百度去广告的问题
// @note            2017.06.25-V10.0 修复上次更新导致的百度知道再次出现老问题
// @note            2017.06.24-V9.9 更新了翻页的问题，经过多次的尝试应该没有太大问题了
// @note            2017.06.24-V9.8 更新了bing上的图片favicon地址;并且尽量减少了MO触发次数，避免页面卡顿;修复搜狗的重定向问题
// @note            2017.06.23-V9.7 上传错了~重新来，顺带处理了谷歌favicon问题
// @note            2017.06.23-V9.6 修复了谷歌重定向的问题~~我的锅
// @note            2017.06.11-V9.5 不再使用DOM方式来监听页面了，使用timer+MO来处理，极大减少了cpu占用时间和瞬时网速占用
// @note            2017.05.26-V9.4 恢复favicon模式，现在这个脚本基本上全了，有需要以后再说
// @note            2017.05.15-V9.3 暂时移除百度右边侧栏的广告移除模式，准备下次优化好了再继续
// @note            2017.05.12-V9.2 暂时移除谷歌的安全搜索模式，因为很复杂的原因
// @note            2017.05.12-V9.1 暂时移除Favicon的显示，因为这样就杂了，有需要的人自己去装这个脚本吧，保留百度去广告
// @note            2017.05.12-V9.0 集合了去重定向+去广告+Favicon显示
// @note            2017.05.12-V8.7 集合了去广告的脚本，以前的那个去广告的脚本就不用了
// @note            2017.05.12-V8.6 修复谷歌安全搜索的BUG V2
// @note            2017.05.12-V8.4 新增：默认屏蔽谷歌的安全搜索功能
// @note            2017.05.05-V8.3 修复include范围太小导致的百度知道的屏蔽问题
// @note            2017.05.04-V8.2 终于修复了百度知道图片替换了文字的这个大BUG; 顺便处理了superapi.zhidao.baidu.com; 新增谷歌搜索结果重定向去除
// @note            2017.05.04-V8.1 终于修复了百度知道图片替换了文字的这个大BUG，顺便处理了superapi.zhidao.baidu.com
// @note            2017.05.04-V8.0 终于修复了百度知道图片替换了文字的这个大BUG，待测试
// @note            2017.03.28-V7.6 修复在ViolentMonkey上的不支持的问题
// @note            2017.03.28-V7.5 尝试修复chrome上的问题
// @note            2017.03.21-V7.4 尝试处理Edge上不支持的问题，结果发现是Edge本身的TamperMonkey支持有问题
// @note            2017.03.19-V7.3 修复打开百度之后再次点击“百度一下”导致的无法更新重定向问题
// @note            2017.03.19-V7.2 未知原因chrome的MutationObserver无法使用了，继续回归以前的DOMNodeInserted
// @note            2017.02.17-V7.0 修复搜狗的搜索结果重定向问题+改个名字
// @note            2017.02.17-V6.9 修复搜狗的搜索结果重定向问题
// @note            2016.12.10-V6.8 ***
// @note            2016.10.27-V6.7 修复了以前的重复请求，现在的请求数应该小了很多，网络也就不卡了，感觉萌萌哒
// @note            2016.04.24-V6.6 恢复以前的版本，因为兼容性问题
// @note            2015.12.01-V5.0 加入搜狗的支持，但是支持不是很好
// @note            2015.11.25-V2.0 优化，已经是真实地址的不再尝试获取
// @note            2015.11.25-V1.0 完成去掉百度重定向的功能
// @resource        baiduCommonStyle     http://xbaidu.ntaow.com/newcss/baiduCommonStyle.css?t=23.11
// @resource        baiduOnePageStyle    http://xbaidu.ntaow.com/newcss/baiduOnePageStyle.css?t=23.11
// @resource        baiduTwoPageStyle    http://xbaidu.ntaow.com/newcss/baiduTwoPageStyle.css?t=23.11
// @resource        googleCommonStyle    http://xbaidu.ntaow.com/newcss/googleCommonStyle.css?t=23.11
// @resource        googleOnePageStyle   http://xbaidu.ntaow.com/newcss/googleOnePageStyle.css?t=23.11
// @resource        googleTwoPageStyle   http://xbaidu.ntaow.com/newcss/googleTwoPageStyle.css?t=23.11
// @resource        bingCommonStyle      http://xbaidu.ntaow.com/newcss/bingCommonStyle.css?t=23.11
// @resource        bingOnePageStyle     http://xbaidu.ntaow.com/newcss/bingOnePageStyle.css?t=23.11
// @resource        bingTwoPageStyle     http://xbaidu.ntaow.com/newcss/bingTwoPageStyle.css?t=23.11
// @resource        sogouCommonStyle     http://xbaidu.ntaow.com/newcss/sogouCommonStyle.css?t=23.11
// @resource        sogouOnePageStyle    http://xbaidu.ntaow.com/newcss/sogouOnePageStyle.css?t=23.11
// @resource        sogouTwoPageStyle    http://xbaidu.ntaow.com/newcss/sogouTwoPageStyle.css?t=23.11
// @resource        MainHuYanStyle       http://xbaidu.ntaow.com/newcss/HuYanStyle.css?t=23.11
// @grant           GM_getValue
// @grant           GM.getValue
// @grant           GM_setValue
// @grant           GM.setValue
// @grant			GM_addStyle
// @grant           GM_xmlhttpRequest
// @grant           GM_getResourceText
// @grant           GM_registerMenuCommand
// ==/UserScript==
!function () {
	var isdebug = false;
	var isLocalDebug = isdebug || false;
	var debug = isdebug ? console.log.bind(console) : function () {
	};
	var inExtMode = typeof(isExtension) != "undefined";
	var inGMMode = typeof(GM_info.scriptHandler) != "undefined"; // = "Greasemonkey" || "Tampermonkey" || "ViolentMonkey"
	// 新版本的GreaseMonkey是带有scriptHandler，但是没有GM_getResourceText；旧版本不带scriptHandler，但是有GM_getResourceText
	var isNewGM = typeof(GM_info.scriptHandler) != "undefined" && GM_info.scriptHandler.toLowerCase() == "greasemonkey";
	// inExtMode & inGMMode
	// true        true =扩展下的GM代码 不执行
	// true        false=扩展下代码 执行
	// false       true =仅GM代码 执行
	// false       false=异常 但是还是要执行代码
	debug("程序开始");
	if (inExtMode == true && inGMMode == true) {
		console.log("扩展模式-脚本不启用");
		return;
	}
	if (typeof(GM) == "undefined") {
		// 这个是ViolentMonkey的支持选项
		GM = {};
		GM.setValue = GM_setValue;
		GM.getValue = GM_getValue;
	}
	(function () {
		debug("程序执行");
		var needDisplayNewFun = true; // 本次更新是否有新功能需要展示
		if (window.NodeList && !NodeList.prototype.forEach) {
			NodeList.prototype.forEach = function (callback, thisArg) {
				thisArg = thisArg || window;
				for (var i = 0; i < this.length; i++) {
					callback.call(thisArg, this[i], i, this);
				}
			};
		}
		var ACConfig = {};
		var DefaultConfig = {
			isRedirectEnable: true,  // 是否开启重定向功能
			isAdsEnable: true, // 是否开启去广告模式
			isBlockEnable: true, // 是否开启去拦截模式
			isBlockDisplay: false, // 是否删除已拦截的条目
			AdsStyleEnable: true, // 是否开启自定义样式模式
			AdsStyleMode_Baidu: 2, // 0-不带css；1-单列靠左；2-单列居中；3-双列居中
			AdsStyleMode_Google: 2, // 0-不带css；1-单列靠左；2-单列居中；3-双列居中
			AdsStyleMode_Bing: 3, // 0-不带css；1-单列靠左；2-单列居中；3-双列居中
			AdsStyleMode_SoGou: 3, // 0-不带css；1-单列靠左；2-单列居中；3-双列居中

			HuYan_Baidu: false, // 护眼模式-百度
			HuYan_Google: false, // 护眼模式-谷歌
			HuYan_Bing: false, // 护眼模式-必应
			HuYan_SoGou: false, // 护眼模式-必应

			defaultHuYanColor: "#DEF1EF",
			isUserColorEnable: true, // 是否开启favicon图标功能
			isFaviconEnable: true, // 是否开启favicon图标功能
			defaultFaviconUrl: "https://ws1.sinaimg.cn/large/6a155794ly1foijtdzhxhj200w00wjr5.jpg", // 默认图标地址
			doDisableSug: true, // 是否禁止百度搜索预测
			isRightDisplayEnable: false, // 是否开启右侧边栏
			isCounterEnable: false, // 是否显示计数器
			isALineEnable: false, // 是否禁止下划线
			isUserStyleEnable: false, // 是否开启自定义样式
			UserBlockList: ["baijiahao.baidu.com"],
			UserStyleText: "/**计数器的颜色样式*/\n" +    // 自定义样式数据
			".AC-CounterT{\n" +
			"    background: #FD9999;\n" +
			"}\n" +
			"/**右侧栏的样式-其实不开启更好看一些*/\n" +
			"#content_right{\n" +
			"    padding: 20px 15px 15px;\n" +
			"    border-radius: 5px;\n" +
			"    background-color: #fff;\n" +
			"    box-sizing: border-box;\n" +
			"    box-shadow: 0 0 20px 2px rgba(0, 0, 0, .1);\n" +
			"    -webkit-box-shadow: 0 0 20px 2px rgba(0, 0, 0, .1);\n" +
			"    -moz-box-shadow: 0 0 20px 2px rgba(0, 0, 0, .1);\n" +
			"}",
			oldVersion: "",
		};
		var CONST = {
			hasNewFuncNeedDisplay: true,
			sortIndex: 1,
			isGoogleImageUrl: false,
			AdsStyleMode: ACConfig.AdsStyleMode_Baidu,
			HuYanMode: ACConfig.HuYan_Baidu,
			keySite: "baidu",
			StyleManger: function () {},
			curHosts: [],
		};
		var curSite = {
			SiteTypeID: 1,    // 当前站点的ID
			MainType:"",      // 主体节点，很多个的父节点
			Stype_Normal: "", // 重定向选择器，只有百度-搜狗-好搜
			FaviconType: "",  // favicon的域名检查器cite，用于获取host用
			FaviconAddTo: "", // favicon选择器，用于插入到title之前的
			CounterType: "",  // 计数器添加的位置，一般和favicon位置一致
			BlockType: "",    // 屏蔽按钮的位置，一般在title之后
		};
		var DBSite = {
			baidu: {
				SiteTypeID: 1,
				MainType: "#content_left .result",
				Stype_Normal: "h3.t>a, #results .c-container>.c-blocka",
				FaviconType: ".result-op, .c-showurl", // baidu 似乎要改版了？
				FaviconAddTo: "h3",
				CounterType: "#content_left>#double>div[srcid] *[class~=t],[class~=op_best_answer_question],#content_left>div[srcid] *[class~=t],[class~=op_best_answer_question]",
				BlockType: "h3 a",
			},
			sogou: {
				SiteTypeID: 2,
				MainType: "#main .results>div",
				Stype_Normal: "h3.pt>a, h3.vrTitle>a",
				FaviconType: "cite[id*='cacheresult_info_']",
				FaviconAddTo: "h3",
				CounterType: ".results>div",
				BlockType: "h3 a",
			},
			haosou: {
				SiteTypeID: 3,
				MainType: ".res-list",
				Stype_Normal: ".res-list h3>a",
				FaviconType: ".res-linkinfo cite",
				FaviconAddTo: "h3",
				CounterType: ".results>div",
				BlockType: "h3 a",
			},
			google: {
				SiteTypeID: 4,
				MainType: ".srg>div[class~=g] *[class~=rc]",
				FaviconType: ".iUh30",
				FaviconAddTo: "h3",
				CounterType: ".srg>div[class~=g] *[class~=r] h3,._yE>div[class~=_kk] h3",
				BlockType: ".rc a",
			},
			bing: {
				SiteTypeID: 5,
				MainType: "#b_results>li",
				FaviconType: ".b_attribution>cite",
				FaviconAddTo: "h2",
				CounterType: "#b_results>li[class~=b_ans]>h2,#b_results>li[class~=b_algo]>h2,#b_results>li[class~=b_algo]>h2",
				BlockType: "h2 a",
			},
			mBaidu:{
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
			baidu_xueshu:{
				SiteTypeID: 8,
			},
			other: {
				SiteTypeID: 9,
			}
		};
		var SiteType = {
			BAIDU: DBSite.baidu.SiteTypeID,
			MBAIDU: DBSite.mBaidu.SiteTypeID,
			SOGOU: DBSite.sogou.SiteTypeID,
			SO: DBSite.haosou.SiteTypeID,
			GOOGLE: DBSite.google.SiteTypeID,
			BING: DBSite.bing.SiteTypeID,
			ZHIHU: DBSite.zhihu.SiteTypeID,
			BAIDU_XUESHU: DBSite.baidu_xueshu.SiteTypeID,
			OTHERS: 8
		};
		/**初始化所有的设置**/
		Promise.all([GM.getValue("Config")]).then(function (data) {
			if (data[0] != null) {
				ACConfig = data[0];
			} else {
				ACConfig = DefaultConfig;
			}
			for(var key in DefaultConfig){
				if(typeof(ACConfig[key]) == "undefined"){
					ACConfig[key] = DefaultConfig[key];
				}
			}
			// 初始化完成之后才能调用正常函数
			callback();
		}).catch(function (except) {
			console.log(except);
		});
		function callback() {
			if (ACConfig.oldVersion == GM_info.script.version) {
				CONST.hasNewFuncNeedDisplay = false;
			} else {
				CONST.hasNewFuncNeedDisplay = needDisplayNewFun;
			}

			!function () {
				var BaiduVersion = " V" + GM_info.script.version;
				var insertLocked = false;
				if (location.host.indexOf(".baidu.com") > -1) {
					if(navigator.userAgent.replace(/(android|mobile|iphone)/igm, "") != navigator.userAgent){
						curSite = DBSite.mBaidu;
					}else{
						curSite = DBSite.baidu;
					}
				} else if (location.host.indexOf("sogou") > -1) {
					curSite = DBSite.sogou;
				} else if (location.host.indexOf("so.com") > -1) {
					curSite = DBSite.haosou;
				} else if (location.host.indexOf("google") > -1) {
					curSite = DBSite.google;
				} else if (location.host.indexOf("bing") > -1) {
					curSite = DBSite.bing;
				} else if (location.host.indexOf("zhihu.com") > -1) {
					curSite = DBSite.zhihu;
				} else if (location.host.indexOf("xueshu.baidu.com") > -1) {
					curSite = DBSite.baidu_xueshu;
				} else {
					curSite = DBSite.other;
				}
				if (curSite.SiteTypeID == SiteType.GOOGLE && location.href.replace(/tbm=(isch|lcl|shop|flm)/, "") != location.href) {
					// 图片站 、地图站、购物站
					console.log("特殊站,不加载样式");
					CONST.isGoogleImageUrl = true;
				}
				if (ACConfig.AdsStyleEnable) {
					if (curSite.SiteTypeID == SiteType.BAIDU) {
						CONST.AdsStyleMode = ACConfig.AdsStyleMode_Baidu;
						CONST.HuYanMode = ACConfig.HuYan_Baidu;
						CONST.keySite = "baidu";
					} else if (curSite.SiteTypeID == SiteType.GOOGLE) {
						CONST.AdsStyleMode = ACConfig.AdsStyleMode_Google;
						CONST.HuYanMode = ACConfig.HuYan_Google;
						CONST.keySite = "google";
					} else if (curSite.SiteTypeID == SiteType.BING) {
						CONST.AdsStyleMode = ACConfig.AdsStyleMode_Bing;
						CONST.HuYanMode = ACConfig.HuYan_Bing;
						CONST.keySite = "bing";
					} else if (curSite.SiteTypeID == SiteType.SOGOU){
						CONST.AdsStyleMode = ACConfig.AdsStyleMode_SoGou;
						CONST.HuYanMode = ACConfig.HuYan_SoGou;
						CONST.keySite = "sogou";
					}
					CONST.StyleManger = FSBaidu(); // 添加设置项-单双列显示
				}
				var bodyNameresetTimer = setInterval(function () {
					if (document.body != null) {
						document.body.setAttribute(CONST.keySite, "1");
						if (curSite.SiteTypeID == SiteType.BAIDU && location.href.indexOf("tn=news")) {
							document.body.setAttribute("news", "1");
						}
						clearInterval(bodyNameresetTimer);
					}
				}, 300);
				var BlockBaidu = {
					/**
					 * 初始化Block样式
					 */
					initStyle: function(){
						AC_addStyle("#sp-ac-container .ac-block-item{color:#AAA;margin-left:48px;}#sp-ac-container .ac-block-high{color:#000;}.ac-block-item:hover{background-color:#1679fd;color:white !important;cursor:pointer;} *[ac-needhide] *{display:none} *[ac-needhide] .blockShow{display:unset;cursor:pointer;} *[ac-needhide] .blockShow:hover{border:1px solid #DDD}button.ghhider{color:#555;background-color:#fcfcfc;font-family:sans-serif;font-size:.85em;margin:auto 2px;border:1px solid #ccc;border-radius:4px;padding:2px 3px}h3>button.ghhider{font-size:.75em}button.ghhider:hover{color:#006aff;background:#fff}", "AC-BlockStyle");
					},
					/**
					 * 初始化按钮加载
					 */
					init: function () {
						var checkNodes = document.querySelectorAll(curSite.MainType+":not([acblock])");
						for (var i = 0; i < checkNodes.length; i++) {
							try{
								var curNode = checkNodes[i];
								// if(curNode.hasAttribute("acblock")) continue;
								var host = getBaiduHost(curNode.querySelector(curSite.FaviconType));
								if(host == null) continue;
								var faNode = curNode.querySelector(curSite.BlockType);
								faNode.insertAdjacentHTML("afterend", `<button class='ghhider ghhb' meta="${host}" data-host="${host}" title='点击即可屏蔽 ${host} 放开，需要在自定义中手动配置放开'>block</button>`);
								curNode.setAttribute("acblock", "0");
							}catch (e) {
							}
						}
						this.initListener();
						this.renderDisplay();
					},
					initListener: function(){
						var checkNodes = document.querySelectorAll("button.ghhider:not([acEnv])");
						for(var i = 0; i < checkNodes.length; i++){
							checkNodes[i].addEventListener("click", this.doHideEnv);
							checkNodes[i].setAttribute("acEnv", "0");
						}
					},
					doHideEnv: function(env){
						// 先插入数据---记得还要写入存储
						var node = env.sourceTarget || env.target;
						var host = node.dataset.host;
						node.removeAttribute("ac-user-alter");
						ACConfig.UserBlockList.push(host);
						ACConfig.UserBlockList = acFuncdistinct(ACConfig.UserBlockList);
						GM.setValue("Config", ACConfig); // 点击一次，保存一次
						reloadBlockList();
						BlockBaidu.renderDisplay();
						env.stopPropagation();
					},
					// 刷新显示效果--耗时操作
					renderDisplay: function(){
						var checkNodes = document.querySelectorAll(curSite.MainType);
						var flag = "ac-needhide";
						for (var i = 0; i < checkNodes.length; i++) {
							try{
								var curNode = checkNodes[i];
								var curHost = getBaiduHost(curNode.querySelector(curSite.FaviconType));
								if(curHost == null) continue;
								var curTitle = curNode.querySelector(curSite.BlockType);
								curTitle = curTitle.innerText || curTitle.textContent;
								// CONST.curHosts.push(curHost);
								if(curNode.querySelector("button[ac-user-alter]") != null) continue; // 用户手动点过显示的，那么跳过check
								if(acFuncHasValue(ACConfig.UserBlockList, curHost)){
									if(! curNode.hasAttribute(flag)){
										if(ACConfig.isBlockDisplay){
											curNode.remove();
											continue;
										}
										curNode.insertAdjacentHTML("afterBegin", `<span class="blockShow" title="如果需要一直显示，请在自定义中DIY目录移除本地址">${curTitle}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -block by ${curHost}</span>`);
										curNode.setAttribute(flag, "1");
										(function(xcur){
											xcur.querySelector(".blockShow").addEventListener("click", function (env) {
												this.parentNode.querySelector("button.ghhider").setAttribute("ac-user-alter", "1"); // 这个属性用于保持在DOM更新时，按钮不变
												xcur.removeAttribute(flag);
												safeFunction(function(){
													xcur.querySelector(".blockShow").remove();
												});
												env.stopPropagation();
											});
										})(curNode);
									}
								}else{
									curNode.removeAttribute(flag);
									safeFunction(function(){
										curNode.querySelector(".blockShow").remove();
									});
								}
							}catch (e) {
							}
						}
					}
				};
				function addStyle(css) { //添加CSS的代码--copy的
					var pi = document.createProcessingInstruction(
						'xml-stylesheet',
						'type="text/css" href="data:text/css;utf-8,' + encodeURIComponent(css) + '"'
					);
					return document.insertBefore(pi, document.documentElement);
				}
				var acFuncdistinct = function(array) {
					var x = [], r = [];
					for(var i = 0; i < array.length; i++) {
						x['_' + array[i]] = array[i];
					}
					for(var b in x) {
						if(typeof x[b] != 'function') {
							r.push(x[b]);
						}
					}
					return r;
				};
				var acFuncHasValue = function (array, obj) {
					for (var i = 0; i < array.length; i++) {
						if (array[i] == obj) {
							return true;
						}
					}
					return false;
				};
				/**
				 * 返回移除某个节点之后的值
				 * @param obj 待移除的值
				 * @returns {Array} return Array - obj
				 */
				var acFuncafterRemove = function (array, obj) {
					var ano = [];
					for(var i = 0; i < array.length; i++){
						if(array[i] != obj){
							ano.push(array[i]);
						}
					}
					return ano;
				};

				if (ACConfig.isAdsEnable) {
					// display已经无法隐藏他们了，需要用绝对的隐藏
					addStyle("#bottomads{display:none;} #content_left>div:not([id])>div[cmatchid], #content_left>div[id*='300']:not([class*='result']),#content_right td>div:not([id]),#content_right>br{position:absolute;top:-6666px;}");
				}
				try {
					if (curSite.SiteTypeID != SiteType.OTHERS) {
						document.addEventListener('DOMNodeInserted', MainCallback, false);
						document.addEventListener('keyup', MainCallback, false);
						setInterval(function(){
							rapidDeal(); // 定期调用，避免有时候DOM插入没有执行导致的问题
						}, 800);
					}
				} catch (e) {
					console.log(e);
				}

				function MainCallback(e) {
					if (e.target != null && e.target.className != null && e.target.className.toUpperCase().indexOf("AC-") == 0) {
						return;
					} //屏蔽掉因为增加css导致的触发insert动作
					rapidDeal();
				}

				function AutoRefresh() {
					if (!ACConfig.isRightDisplayEnable) {
						// 移除右边栏 -注意在#wrapper>#con-at>#result-op xpath-log有时候很重要，不能隐藏
						AC_addStyle("#content_right{display:none !important;}#content_right td>div:not([id]){display:none;}#content_right .result-op:not([id]){display:none!important;}#rhs{display:none;}", "AC-RightRemove");
					} else {
						if (CONST.AdsStyleMode == 2) {
							// 非双列模式下尽可能的显示右侧栏
							AC_addStyle("@media screen and (min-width: 1250px) {#container{width: 80% !important;}.container_l #content_right{margin-right: calc(18% - 210px);position: absolute;right: -200px;display:block !important;overflow:hidden;width: 22vw !important;}", "AC-RightRemove");
						}
					}
					if (!ACConfig.isALineEnable) {
						AC_addStyle("a,a em{text-decoration:none}", "AC-NoLine");// 移除这些个下划线
					}
					if (ACConfig.isUserStyleEnable) {
						AC_addStyle(ACConfig.UserStyleText, "AC-userStyle");// 用户自定义的样式表
					}
					AC_addStyle(
						".opr-recommends-merge-imgtext{display:none!important;}" + // 移除百度浏览器推广
						".res_top_banner{display:none!important;}" + // 移除可能的百度HTTPS劫持显示问题
						".headBlock{display:none;}" // 移除百度的搜索结果顶部一条的建议文字
						, "AC-special-BAIDU"
					);
					/*"自定义"按钮效果*/
					AC_addStyle("#sp-ac-container label{display:inline;}#u{width:319px}#u #myuser{display:inline}#myuser,#myuser .myuserconfig{padding:0;margin:0}#myuser{display:inline-block;}#myuser .myuserconfig{display:inline-block;line-height:1.5;background:#2866bd;color:#fff;font-weight:700;text-align:center;padding:6px;border:2px solid #E5E5E5;}#myuser .myuserconfig{box-shadow:0 0 10px 3px rgba(0,0,0,.1)}#myuser .myuserconfig:hover{background:#2970d4 !important;color:#fff;cursor:pointer;border:2px solid #73A6F8;}", "AC-MENU_Btn");
					/*自定义页面内容效果*/
					AC_addStyle('body[baidu]  #sp-ac-container .container-label:not([class*="baidu"])>label,\n' +
						'   body[google] #sp-ac-container .container-label:not([class*="google"])>label,\n' +
						'   body[bing]   #sp-ac-container .container-label:not([class*="bing"])>label,\n' +
						'   body[sogou]   #sp-ac-container .container-label:not([class*="sogou"])>label,\n' +
						'   body[baidu]  #sp-ac-container .container-label:not([class*="baidu"])>br,\n' +
						'   body[google] #sp-ac-container .container-label:not([class*="google"])>br,\n' +
						'   body[bing]   #sp-ac-container .container-label:not([class*="bing"])>br,\n' +
						'   body[sogou]   #sp-ac-container .container-label:not([class*="sogou"])>br,\n' +
						'   body[baidu]  #sp-ac-container .container-label[class*="baidu"]>labelhide,\n' +
						'   body[google] #sp-ac-container .container-label[class*="google"]>labelhide,\n' +
						'   body[sogou]   #sp-ac-container .container-label[class*="sogou"]>labelhide\n' +
						'{' +
						'display:none;\n' +
						'}#sp-ac-container labelHide{cursor:pointer;margin-left: 8%;color:blue;}#sp-ac-container .linkhref,#sp-ac-container labelHide:hover{color:red;} #sp-ac-container .linkhref:hover{font-weight: bold;}#sp-ac-container label.menu-box-small{max-width:16px;max-height:16px;cursor:pointer;display: inline-block;}.AC-CounterT{background: #FD9999;}body>#sp-ac-container{position: fixed !important; top: 3.9vw;right: 8.8vw;} #sp-ac-container{z-index:999999!important;text-align:left!important;background-color:white;}#sp-ac-container *{font-size:13px!important;color:black;float:none!important;}#sp-ac-main-head{position:relative!important;top:0!important;left:0!important;}#sp-ac-span-info{position:absolute!important;right:1px!important;top:0!important;font-size:10px!important;line-height:10px!important;background:none!important;font-style:italic!important;color:#5a5a5a!important;text-shadow:white 0px 1px 1px!important;}#sp-ac-container input{vertical-align:middle!important;display:inline-block!important;outline:none!important;height:auto !important;padding:0px !important;margin-bottom:0px !important;margin-top: 0px !important;}#sp-ac-container input[type="number"]{width:50px!important;text-align:left!important;}#sp-ac-container input[type="checkbox"]{border:1px solid #B4B4B4!important;padding:1px!important;margin:3px!important;width:13px!important;height:13px!important;background:none!important;cursor:pointer!important;visibility:visible !important;position:static !important;}#sp-ac-container input[type="button"]{border:1px solid #ccc!important;cursor:pointer!important;background:none!important;width:auto!important;height:auto!important;}#sp-ac-container li{list-style:none!important;margin:3px 0!important;border:none!important;float:none!important;}#sp-ac-container fieldset{border:2px groove #ccc!important;-moz-border-radius:3px!important;border-radius:3px!important;padding:4px 9px 6px 9px!important;margin:2px!important;display:block!important;width:auto!important;height:auto!important;}#sp-ac-container legend{line-height:20px !important;margin-bottom:0px !important;}#sp-ac-container fieldset>ul{padding:0!important;margin:0!important;}#sp-ac-container ul#sp-ac-a_useiframe-extend{padding-left:40px!important;}#sp-ac-rect{position:relative!important;top:0!important;left:0!important;float:right!important;height:10px!important;width:10px!important;padding:0!important;margin:0!important;-moz-border-radius:3px!important;border-radius:3px!important;border:1px solid white!important;-webkit-box-shadow:inset 0 5px 0 rgba(255,255,255,0.3),0 0 3px rgba(0,0,0,0.8)!important;-moz-box-shadow:inset 0 5px 0 rgba(255,255,255,0.3),0 0 3px rgba(0,0,0,0.8)!important;box-shadow:inset 0 5px 0 rgba(255,255,255,0.3),0 0 3px rgba(0,0,0,0.8)!important;opacity:0.8!important;}#sp-ac-dot,#sp-ac-cur-mode{position:absolute!important;z-index:9999!important;width:5px!important;height:5px!important;padding:0!important;-moz-border-radius:3px!important;border-radius:3px!important;border:1px solid white!important;opacity:1!important;-webkit-box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3),inset 0 2px 1px rgba(255,255,255,0.3),0px 1px 2px rgba(0,0,0,0.9)!important;-moz-box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3),inset 0 2px 1px rgba(255,255,255,0.3),0px 1px 2px rgba(0,0,0,0.9)!important;box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3),inset 0 2px 1px rgba(255,255,255,0.3),0px 1px 2px rgba(0,0,0,0.9)!important;}#sp-ac-dot{right:-3px!important;top:-3px!important;}#sp-ac-cur-mode{left:-3px!important;top:-3px!important;width:6px!important;height:6px!important;}#sp-ac-content{padding:0!important;margin:0px !important;-moz-border-radius:3px!important;border-radius:3px!important;border:1px solid #A0A0A0!important;-webkit-box-shadow:-2px 2px 5px rgba(0,0,0,0.3)!important;-moz-box-shadow:-2px 2px 5px rgba(0,0,0,0.3)!important;box-shadow:-2px 2px 5px rgba(0,0,0,0.3)!important;}#sp-ac-main{padding:5px!important;border:1px solid white!important;-moz-border-radius:3px!important;border-radius:3px!important;background-color:#F2F2F7!important;background:-moz-linear-gradient(top,#FCFCFC,#F2F2F7 100%)!important;background:-webkit-gradient(linear,0 0,0 100%,from(#FCFCFC),to(#F2F2F7))!important;}#sp-ac-foot{position:relative!important;left:0!important;right:0!important;min-height:20px!important;}#sp-ac-savebutton{position:absolute!important;top:0!important;right:2px!important;}#sp-ac-container .endbutton{margin-top:8px;}#sp-ac-container .sp-ac-spanbutton{border:1px solid #ccc!important;-moz-border-radius:3px!important;border-radius:3px!important;padding:2px 3px!important;cursor:pointer!important;background-color:#F9F9F9;-webkit-box-shadow:inset 0 10px 5px white!important;-moz-box-shadow:inset 0 10px 5px white!important;box-shadow:inset 0 10px 5px white!important;}#sp-ac-container .sp-ac-spanbutton:hover{background-color:#DDD;}label[class="newFunc"]{color:blue !important;}', "AC-MENU_Page");
				}
				AutoRefresh();
				try {
					GM_registerMenuCommand('AC-重定向脚本设置', function () {
						document.querySelector("#sp-ac-content").style.display = 'block';
					});
				} catch (e) {
				}

				function rapidDeal() {
					try {
						if (insertLocked == false && curSite.SiteTypeID != SiteType.OTHERS) {
							insertLocked = true;
							ShowSetting();
							ACHandle();
							AutoRefresh();
							if (ACConfig.isAdsEnable) { // 放进来，减少卡顿
								removeAD_baidu_sogou();
							}
							if (ACConfig.isBlockEnable) {
								// 设置BLOCK模式的引入style
								BlockBaidu.initStyle();
							}
							if (ACConfig.AdsStyleEnable) {
								FSBaidu(); // 单独不需要定时器-頻繁触发-载入css
							}
							if(ACConfig.isBlockEnable){
								BlockBaidu.init();
							}
							setTimeout(function () {
								insertLocked = false;
							}, 200);
						}
					} catch (e) {
						console.log(e);
					}
				}

				function acSetCookie(cname, cvalue, domain, exdays) {
					exdays = exdays || 30;
					var d = new Date();
					domain = (domain ? "domain=" + domain : "") + ";";
					d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
					var expires = "expires=" + d.toUTCString();
					document.cookie = cname + "=" + cvalue + "; " + domain + expires + ";path=/";
				}

				function getBaiduHost(sitetpNode){
					if(curSite.SiteTypeID == SiteType.BAIDU){
						var href = sitetpNode.getAttribute("href");
						if(href!= null && href.indexOf("baidu.com/link") < 0){
							// 已经解析出来了
							return getHost(href);
						}
					}
					return getHost(sitetpNode.innerText || sitetpNode.textContent);
				}

				function ACHandle() {
					if (curSite.SiteTypeID == SiteType.OTHERS) return;
					InsertSettingMenu();
					if (ACConfig.isRedirectEnable) {
						if (curSite.Stype_Normal != null && curSite.Stype_Normal != ""){
							// 百度搜狗去重定向-普通模式【注意不能为document.query..】
							resetURLNormal(document.querySelectorAll(curSite.Stype_Normal));
							document.querySelectorAll(".s_form .index-logo-src[src*='gif'], .s_form .index-logo-srcnew[src*='gif']").forEach(function (per) {
								per.src = "https://pic.rmb.bdstatic.com/c86255e8028696139d3e3e4bb44c047b.png";
								// 神奇的百度百家号
								// https://imgsa.baidu.com/fex/pic/item/8718367adab44aedcc91ab2bbe1c8701a08bfb26.jpg
								// https://baidu.ntaow.com/newcss/baidu.png
							});
						}
						if (curSite.SiteTypeID == SiteType.GOOGLE) removeOnMouseDownFunc(); // 移除onMouseDown事件，谷歌去重定向
						if (curSite.SiteTypeID == SiteType.MBAIDU) removeMobileBaiduDirectLink(); // 处理百度手机版本的重定向地址
						removeRedirectLinkTarget(); // 只移除知乎的重定向问题 & 百度学术重定向问题
						safeRemove(".res_top_banner"); // 移除百度可能显示的劫持
					}
					if (ACConfig.isFaviconEnable) {
						addFavicon(document.querySelectorAll(curSite.FaviconType)); // 添加Favicon显示
					}
					if (ACConfig.doDisableSug) { // 按钮勾上
						// 不启用移动预测[默认]
						acSetCookie("ORIGIN", 2, "www.baidu.com");
						acSetCookie("ISSW", 1);
						acSetCookie("ISSW", 1, "www.baidu.com");
					} else {
						// 启用移动预测-不知道为什么要设置两个-百度自己会变？，反正有效果
						acSetCookie("ORIGIN", 1, "www.baidu.com");
						acSetCookie("ISSW", 1);
						acSetCookie("ISSW", 1, "www.baidu.com");
					}
					if (ACConfig.isAdsEnable) {
						removeAD_baidu_sogou(); // 移除百度广告
					} else {
						document.querySelector("input[name='sp-ac-a_force_style_baidu']").setAttribute("disabled", "disabled");
						document.querySelector("input[name='sp-ac-a_force_style_google']").setAttribute("disabled", "disabled");
					}
					if (ACConfig.isCounterEnable) {
						addCounter(document.querySelectorAll(curSite.CounterType));
					}
				}

				function ACtoggleSettingDisplay(e) {
					e.stopPropagation();
					// 显示？隐藏设置界面
					setTimeout(function () {
						if (document.querySelector("#sp-ac-content").style.display == 'block') {
							document.querySelector("#sp-ac-content").style.display = 'none';
						} else {
							ACConfig.oldVersion = GM_info.script.version;
							GM.setValue("Config", ACConfig);
							document.querySelector(".ac-newversionDisplay").style.display = 'none';
							document.querySelector("#sp-ac-content").style.display = 'block';
						}
					}, 100);
					return false;
				}

				function getBlockList(){ // 同时处理高亮
					var insHTML = "";
					for(var i = 0; i < ACConfig.UserBlockList.length; i++){
						var insClass = acFuncHasValue(CONST.curHosts, ACConfig.UserBlockList[i]) ? " ac-block-high":""; // 如果当前页面存在，则高亮
						insHTML += `<li><label class="ac-block-item${insClass}" data-host="${ACConfig.UserBlockList[i]}">${ACConfig.UserBlockList[i]}</label></li>\n`;
					}
					return insHTML;
				}

				function reloadBlockList(){
					// 初始化内容并绑定按钮事件
					document.querySelector(".ac-blockList ul").innerHTML = getBlockList();
				}

				function initBlockPage(){
					try{
						document.querySelector(".setting-second").innerHTML = `<li style='margin-bottom: 8px !important;'><label><span id='sp-ac-blockdiybutton-back' class='sp-ac-spanbutton' title='返回'><-返回</span></label>&nbsp;拦截列表&nbsp;&nbsp;想要生效的话需要手动保存</li><li class='ac-blockList' style='max-height:60vh;overflow-y: scroll;'><ul>${getBlockList()}</ul></li><li>全拦截域名：<input class="sp-ac-addRuleOne" style='width:55%;'><span id='sp-ac-addRulebutton' class='sp-ac-spanbutton endbutton' title='新增' style='position: relative !important;line-height: 17px;'>新增</span></li>`;
						document.querySelector("#sp-ac-blockdiybutton-back").addEventListener("click", function () {
							document.querySelector(".setting-main").style = "";
							document.querySelector(".setting-second").style = "display:none;";
						});
						document.querySelector(".ac-blockList").addEventListener("click", function (e) {
							var target = e.srcElement || e.target;
							if(target.tagName.toLowerCase() == "label"){
								var host = target.dataset.host;
								ACConfig.UserBlockList = acFuncafterRemove(ACConfig.UserBlockList, host);
								document.querySelectorAll("button[ac-user-alter]").forEach(function (perNode) {
									// 移除用户diy之后的属性
									perNode.removeAttribute("ac-user-alter");
								});
								BlockBaidu.renderDisplay();
								reloadBlockList();
							}
						});
						function ckAddRule(){
							var inputN = document.querySelector(".sp-ac-addRuleOne");
							ACConfig.UserBlockList.push(getHost(inputN.value));
							ACConfig.UserBlockList = acFuncdistinct(ACConfig.UserBlockList);
							inputN.value = "";
							reloadBlockList();
						}
						document.querySelector("#sp-ac-addRulebutton").addEventListener("click", ckAddRule);
						document.querySelector(".sp-ac-addRuleOne").addEventListener("keypress", function(evt){
							var e = evt || window.event;
							if(e.keyCode == 13) ckAddRule();
						});
					}catch (e) {
					}
				}

				function ShowSetting() {
					if (curSite.SiteTypeID == SiteType.OTHERS) return;
					// 如果不存在的话，那么自己创建一个-copy from superPreload
					if (document.body != null && document.querySelector("#sp-ac-container") == null) {
						var Container = document.createElement('div');
						Container.id = "sp-ac-container";
						Container.innerHTML =
							"    <div id='sp-ac-content' style='display: none;'>\n" +
							"        <div id='sp-ac-main'>\n" +
							"        <fieldset id='sp-ac-autopager-field' style='display:block;'>\n" +

							"            <legend title='AC重定向功能相关设置'><a class='linkhref' href='https://www.ntaow.com/aboutscript.html' target='_blank'>AC-重定向设置" + BaiduVersion + "</a></legend>\n" +
							"            <ul class='setting-main'>\n" +
							"                <li><label title='重定向功能的开启与否'><input id='sp-ac-redirect' name='sp-ac-a_separator' type='checkbox' " + (ACConfig.isRedirectEnable ? 'checked' : '') + ">主功能-重定向功能</label></li>\n" +
							"                <li><label title='AC-去广告' ><input id='sp-ac-ads' name='sp-ac-a_force' type='checkbox' " + (ACConfig.isAdsEnable ? 'checked' : '') + ">附加1-去广告功能</label></li>\n" +
							"                <li><label title='AC-自主拦截域名' style='"+(CONST.hasNewFuncNeedDisplay ? "color:red !important;font-weight: 100;background-color: yellow;font-weight: 600 !important;" : "")+"' ><input id='sp-ac-block' name='sp-ac-a_force' type='checkbox' " + (ACConfig.isBlockEnable ? 'checked' : '') + ">附加2-自主拦截域名</label> <span id='sp-ac-blockdiybutton' class='sp-ac-spanbutton' title='自定义BLOCK' style='margin-left: 5px;color: #888888;'>DIY</span>" +
							"                    <label><input title='不再显示' id='sp-ac-removeBlock' type='checkbox' " + (ACConfig.isBlockDisplay ? 'checked' : '') + ">移除已拦截内容</label>" +
							"                </li>\n" +
							"                <li><label title='AC-自定义样式'><input id='sp-ac-style' name='sp-ac-a_force' type='checkbox' " + (ACConfig.AdsStyleEnable ? 'checked' : '') + ">附加3-自定义样式</label>\n" +
							"                <label></label></li>\n" +
							"                <li>" +
							/****-百度样式-*****/
							"                   <labelMain class='container-label baidu'>" +
							"                       <labelHide>展开百度设置&gt;&gt;</labelHide>" +
							"                       <label title='百度-原始模式' style='margin-left:20px'><input name='sp-ac-a_force_style_baidu' value='0' type='radio' " + (ACConfig.AdsStyleMode_Baidu == 0 ? 'checked' : '') + ">百度-原始模式</label>" +
							"                       <label title='百度-护眼模式'><input  name='sp-ac-huyan_style_baidu' type='checkbox' " + (ACConfig.HuYan_Baidu == true ? 'checked' : '') + ">百度-护眼模式</label>" +
							"                       <BR/><label title='百度-单列普通模式' style='margin-left:20px'><input title='百度-单列普通模式' name='sp-ac-a_force_style_baidu' value='1'  type='radio' " + (ACConfig.AdsStyleMode_Baidu == 1 ? 'checked' : '') + ">单列</label>" +
							"                       <label title='百度-单列居中'><input  name='sp-ac-a_force_style_baidu' value='2'  type='radio' " + (ACConfig.AdsStyleMode_Baidu == 2 ? 'checked' : '') + ">单列居中</label>" +
							"                       <label title='双列'><input  name='sp-ac-a_force_style_baidu' value='3'  type='radio' " + (ACConfig.AdsStyleMode_Baidu == 3 ? 'checked' : '') + ">双列</label>" +
							"                       <label title='三列'><input  name='sp-ac-a_force_style_baidu' value='4'  type='radio' " + (ACConfig.AdsStyleMode_Baidu == 4 ? 'checked' : '') + ">三列</label>" +
							"                       <label title='四列'><input  name='sp-ac-a_force_style_baidu' value='5'  type='radio' " + (ACConfig.AdsStyleMode_Baidu == 5 ? 'checked' : '') + ">四列</label>" +
							"                   <BR/></labelMain>" +
							/****-百度样式-*****/
							"                    <div style='height: 1px;width:267px;margin-left:25px;background-color:#d8d8d8;margin-top:1px;'></div>" +
							/****-谷歌样式-*****/
							"                   <labelMain class='container-label google'>" +
							"                       <labelHide>展开谷歌设置&gt;&gt;</labelHide>" +
							"                       <label title='谷歌-原始模式' style='margin-left:20px'><input name='sp-ac-a_force_style_google' value='0' type='radio' " + (ACConfig.AdsStyleMode_Google == 0 ? 'checked' : '') + ">谷歌-原始模式</label>" +
							"                       <label title='谷歌-护眼模式'><input  name='sp-ac-huyan_style_google' type='checkbox' " + (ACConfig.HuYan_Google == true ? 'checked' : '') + ">谷歌-护眼模式</label>" +
							"                       <BR/><label title='单列普通模式' style='margin-left:20px'><input title='谷歌-单列普通模式' name='sp-ac-a_force_style_google' value='1'  type='radio' " + (ACConfig.AdsStyleMode_Google == 1 ? 'checked' : '') + ">单列</label>" +
							"                       <label title='谷歌-单列居中'><input  name='sp-ac-a_force_style_google' value='2'  type='radio' " + (ACConfig.AdsStyleMode_Google == 2 ? 'checked' : '') + ">单列居中</label>" +
							"                       <label title='双列'><input  name='sp-ac-a_force_style_google' value='3'  type='radio' " + (ACConfig.AdsStyleMode_Google == 3 ? 'checked' : '') + ">双列</label>" +
							"                       <label title='三列'><input  name='sp-ac-a_force_style_google' value='4'  type='radio' " + (ACConfig.AdsStyleMode_Google == 4 ? 'checked' : '') + ">三列</label>" +
							"                       <label title='四列'><input  name='sp-ac-a_force_style_google' value='5'  type='radio' " + (ACConfig.AdsStyleMode_Google == 5 ? 'checked' : '') + ">四列</label>" +
							"                   <BR/></labelMain>" +
							/****-谷歌样式-*****/
							"                   <div style='height: 1px;width:267px;margin-left:25px;background-color:#d8d8d8;margin-top:1px;'></div>" +
							/****-必应样式-*****/
							"                   <labelMain class='container-label bing'>" +
							"                       <labelHide>展开必应设置&gt;&gt;</labelHide>" +
							"                       <label title='必应-原始模式' style='margin-left:20px'><input name='sp-ac-a_force_style_bing' value='0' type='radio' " + (ACConfig.AdsStyleMode_Bing == 0 ? 'checked' : '') + ">必应-原始模式</label>" +
							"                       <label title='必应-护眼模式'><input name='sp-ac-huyan_style_bing' type='checkbox' " + (ACConfig.HuYan_Bing == true ? 'checked' : '') + ">必应-护眼模式</label>" +
							"                       <BR/><label title='单列普通模式' style='margin-left:20px'><input title='必应-单列普通模式' name='sp-ac-a_force_style_bing' value='1'  type='radio' " + (ACConfig.AdsStyleMode_Bing == 1 ? 'checked' : '') + ">单列</label>" +
							"                       <label title='必应-单列居中'><input  name='sp-ac-a_force_style_bing' value='2'  type='radio' " + (ACConfig.AdsStyleMode_Bing == 2 ? 'checked' : '') + ">单列居中</label>" +
							"                       <label title='双列'><input name='sp-ac-a_force_style_bing' value='3'  type='radio' " + (ACConfig.AdsStyleMode_Bing == 3 ? 'checked' : '') + ">双列</label>" +
							"                       <label title='三列'><input name='sp-ac-a_force_style_bing' value='4'  type='radio' " + (ACConfig.AdsStyleMode_Bing == 4 ? 'checked' : '') + ">三列</label>" +
							"                       <label title='四列'><input name='sp-ac-a_force_style_bing' value='5'  type='radio' " + (ACConfig.AdsStyleMode_Bing == 5 ? 'checked' : '') + ">四列</label>" +
							"                   </labelMain>" +
							/****-必应样式-*****/
							"                   <div style='height: 1px;width:267px;margin-left:25px;background-color:#d8d8d8;margin-top:1px;'></div>" +
							/****-搜狗样式-*****/
							"                   <labelMain class='container-label sogou'>" +
							"                       <labelHide>展开搜狗设置&gt;&gt;</labelHide>" +
							"                       <label title='搜狗-原始模式' style='margin-left:20px'><input name='sp-ac-a_force_style_sogou' value='0' type='radio' " + (ACConfig.AdsStyleMode_SoGou == 0 ? 'checked' : '') + ">搜狗-原始模式</label>" +
							"                       <label title='搜狗-护眼模式'><input name='sp-ac-huyan_style_sogou' type='checkbox' " + (ACConfig.HuYan_SoGou == true ? 'checked' : '') + ">搜狗-护眼模式</label>" +
							"                       <BR/><label title='单列普通模式' style='margin-left:20px'><input title='搜狗-单列普通模式' name='sp-ac-a_force_style_sogou' value='1'  type='radio' " + (ACConfig.AdsStyleMode_SoGou == 1 ? 'checked' : '') + ">单列</label>" +
							"                       <label title='搜狗-单列居中'><input  name='sp-ac-a_force_style_sogou' value='2'  type='radio' " + (ACConfig.AdsStyleMode_SoGou == 2 ? 'checked' : '') + ">单列居中</label>" +
							"                       <label title='双列'><input name='sp-ac-a_force_style_sogou' value='3'  type='radio' " + (ACConfig.AdsStyleMode_SoGou == 3 ? 'checked' : '') + ">双列</label>" +
							"                       <label title='三列'><input name='sp-ac-a_force_style_sogou' value='4'  type='radio' " + (ACConfig.AdsStyleMode_SoGou == 4 ? 'checked' : '') + ">三列</label>" +
							"                       <label title='四列'><input name='sp-ac-a_force_style_sogou' value='5'  type='radio' " + (ACConfig.AdsStyleMode_SoGou == 5 ? 'checked' : '') + ">四列</label>" +
							"                   </labelMain>" +
							/****-搜狗样式-*****/

							"                </li>\n" +
							"                <li><label><input title='AC-自定义护眼' id='sp-ac-usercolor' name='sp-ac-a_force' type='checkbox' " + (ACConfig.isUserColorEnable ? 'checked' : '') + ">附加4-护眼颜色配置</label></li>\n" +
							"                <li><label class='menu-box-container'><label style='margin-left:20px;'>默认护眼颜色：</label>" +
							"                       <input class='sp-ac-menuhuyanColor' title='自定义的护眼颜色' style='width:70px;margin-top:-0.05rem !important;' value='" + ACConfig.defaultHuYanColor + "'>" +
							"                       <label class='menu-box-small' data-color='#DEF1EF' style='background-color:#DEF1EF;'>&nbsp;&nbsp;&nbsp;&nbsp;</label>" +
							"                       <label class='menu-box-small' data-color='#f3f2ee' style='background-color:#f3f2ee;'>&nbsp;&nbsp;&nbsp;&nbsp;</label>" +
							"                       <label class='menu-box-small' data-color='#e5e5e5' style='background-color:#e5e5e5;'>&nbsp;&nbsp;&nbsp;&nbsp;</label>" +
							"                       <label class='linkhref' data-href='https://html-color-codes.info/'  style='cursor:pointer;margin-right: 10px;' onclick='window.open(this.dataset.href)'>更多颜色选择</label>" +
							"                </label></li>\n" +
							"                <li><label><input title='AC-添加Favicon' id='sp-ac-favicon' name='sp-ac-a_force' type='checkbox' " + (ACConfig.isFaviconEnable ? 'checked' : '') + ">附加5-Favicon功能</label></li>\n" +
							"                <li><label><label style='margin-left:20px;'>Favicon默认图标：</label><input id='sp-ac-faviconUrl' name='sp-ac-a_force' value='" + ACConfig.defaultFaviconUrl + "' style='width:55%;margin-top:-0.3rem !important;' type='input' " + (ACConfig.isFaviconEnable ? '' : 'disabled=true') + "></label></li>\n" +
							"                <li><label><input title='AC-移除搜索预测' id='sp-ac-sug_origin' name='sp-ac-a_force' type='checkbox' " + (ACConfig.doDisableSug ? 'checked' : '') + ">附加6-移除百度搜索预测(文字自动搜索)</label></li>\n" +
							// 有更新-高亮 <label style=''> ||  style='"+(CONST.hasNewFuncNeedDisplay?"color:red !important;font-weight: 100;background-color: yellow;font-weight: 600 !important;":"")+"'
							"                <li><label><input title='AC-显示右侧栏' id='sp-ac-right' type='checkbox' " + (ACConfig.isRightDisplayEnable ? 'checked' : '') + ">附加7-显示右侧栏</label><label><input title='AC-添加编号' id='sp-ac-counter' name='sp-ac-a_force' type='checkbox' " + (ACConfig.isCounterEnable ? 'checked' : '') + ">附加8-编号功能</label><label><input title='AC-文字下划线' id='sp-ac-aline' name='sp-ac-a_force' type='checkbox' " + (ACConfig.isALineEnable ? 'checked' : '') + ">附加9-文字下划线</label></li>\n" +
							"                <li><label><input title='AC-自定义样式' id='sp-ac-userstyle' name='sp-ac-a_force' type='checkbox' " + (ACConfig.isUserStyleEnable ? 'checked' : '') + ">附加10-自定义样式</label></li>\n" +
							"                <li><textarea  id='sp-ac-userstyleTEXT' name='sp-ac-a_force' value='这个是用户自定义样式' style='width:85%;height: 66px;margin-left:30px!important;' type='input'>" + ACConfig.UserStyleText + "</textarea></label></li>\n" +
							"                <li><a class='linkhref' target='_blank' href='https://qm.qq.com/cgi-bin/qm/qr?k=fOg8ij6TuwOAfS8g16GRYNf5YYFu5Crw&jump_from=&auth=-l05paasrPe5zigt5ahdzn_dzXiB1jJ_' >联系作者,提建议,寻求帮助,自定义样式,脚本定制点我</a></li>" +
							"            </ul>" +

							"            <ul class='setting-second' style='display:none'>" +
							"            </ul>"+

							"            <span id='sp-ac-cancelbutton' class='sp-ac-spanbutton endbutton' title='取消' style='position: relative !important;float: left !important;'>取消</span>\n" +
							"            <span id='sp-ac-savebutton' class='sp-ac-spanbutton endbutton' title='保存设置' style='position: relative !important;float: right !important;'>保存</span>\n" +

							"        </fieldset>\n" +
							"        </div>\n" +
							"    </div>";
						try {
							document.body.appendChild(Container);
						} catch (e) {
							console.log(e);
						}
						try {
							document.querySelector("#sp-ac-savebutton").addEventListener("click", function () {
								// 点击之后的保存功能
								ACConfig.isRedirectEnable = document.querySelector("#sp-ac-redirect").checked;
								ACConfig.isAdsEnable = document.querySelector("#sp-ac-ads").checked;
								ACConfig.isBlockEnable = document.querySelector("#sp-ac-block").checked;
								ACConfig.isBlockDisplay = document.querySelector("#sp-ac-removeBlock").checked;
								ACConfig.AdsStyleEnable = document.querySelector("#sp-ac-style").checked;
								ACConfig.AdsStyleMode_Baidu = document.querySelector('input[name="sp-ac-a_force_style_baidu"]:checked').value;
								ACConfig.AdsStyleMode_Google = document.querySelector('input[name="sp-ac-a_force_style_google"]:checked').value;
								ACConfig.AdsStyleMode_Bing = document.querySelector('input[name="sp-ac-a_force_style_bing"]:checked').value;
								ACConfig.AdsStyleMode_SoGou = document.querySelector('input[name="sp-ac-a_force_style_sogou"]:checked').value;
								ACConfig.HuYan_Baidu = document.querySelector('input[name="sp-ac-huyan_style_baidu"]').checked;
								ACConfig.HuYan_Google = document.querySelector('input[name="sp-ac-huyan_style_google"]').checked;
								ACConfig.HuYan_Bing = document.querySelector('input[name="sp-ac-huyan_style_bing"]').checked;
								ACConfig.HuYan_SoGou = document.querySelector('input[name="sp-ac-huyan_style_sogou"]').checked;
								var imgurl = document.querySelector("#sp-ac-faviconUrl").value.trim();
								imgurl = (imgurl == "" || imgurl == null) ? "https://ws1.sinaimg.cn/large/6a155794ly1foijtdzhxhj200w00wjr5.jpg" : imgurl;
								ACConfig.isUserColorEnable = document.querySelector("#sp-ac-usercolor").checked;
								ACConfig.defaultHuYanColor = document.querySelector(".sp-ac-menuhuyanColor").value;
								ACConfig.isFaviconEnable = document.querySelector("#sp-ac-favicon").checked;
								ACConfig.defaultFaviconUrl = imgurl;
								ACConfig.doDisableSug = document.querySelector("#sp-ac-sug_origin").checked;
								ACConfig.isRightDisplayEnable = document.querySelector("#sp-ac-right").checked;
								ACConfig.isCounterEnable = document.querySelector("#sp-ac-counter").checked;
								ACConfig.isALineEnable = document.querySelector("#sp-ac-aline").checked;
								ACConfig.isUserStyleEnable = document.querySelector("#sp-ac-userstyle").checked;
								ACConfig.UserStyleText = document.querySelector("#sp-ac-userstyleTEXT").value.trim();
								GM.setValue("Config", ACConfig);
								setTimeout(function () {
									window.location.reload();
								}, 400);
							}, false);
							initBlockPage();
							document.querySelector("#sp-ac-blockdiybutton").addEventListener("click", function () {
								document.querySelector(".setting-main").style = "display:none;";
								document.querySelector(".setting-second").style = "";
							});

							document.querySelector(".menu-box-container").addEventListener("click", function (e) {
								var cur = e.srcElement || e.target;
								if (typeof(cur.dataset.color) != "undefined") {
									document.querySelector(".sp-ac-menuhuyanColor").value = cur.dataset.color;
									CONST.StyleManger.loadHuYanStyle(cur.dataset.color);
								}
								e.stopPropagation();
							});
							document.querySelector(".sp-ac-menuhuyanColor").addEventListener("keyup", function (e) {
								CONST.StyleManger.loadHuYanStyle(document.querySelector(".sp-ac-menuhuyanColor").value);
								e.stopPropagation();
							});
							document.querySelectorAll("labelHide").forEach(function (per) {
								per.addEventListener("click", function (e) {
									var cur = e.srcElement || e.target;
									var className = cur.parentNode.className.replace("container-label ", "");
									AC_addStyle(".XX>label,.XX>br{display:unset !important;}.XX>labelhide{display:none !important;}".replace(/XX/gm, className), "AC-ShowHideItem-" + className, "body");
									e.stopPropagation();
								});
							});
						} catch (e) {
						}
					}
					var allNodes = document.querySelectorAll(".AC-faviconT, .AC-CounterT");
					for (var i = 0; i < allNodes.length; i++) {
						if (allNodes[i].getAttribute('acClick') == null) {
							allNodes[i].setAttribute('acClick', '1');
							try {
								allNodes[i].addEventListener('click', function (e) {
									return ACtoggleSettingDisplay(e);
								}, true);
							} catch (e) {
								console.log(e);
							}
						}
					}
					try {
						document.querySelector("body>#sp-ac-container").addEventListener('click', function (e) {
							e.stopPropagation(); // 阻止点击自身的时候关闭
						}, false);
						document.querySelector("body").addEventListener('click', function (e) {
							safeRemove(function(){
								document.querySelector("#sp-ac-content").style.display = 'none';
							});
						}, false);
						document.querySelector("#sp-ac-cancelbutton").addEventListener('click', function (e) {
							safeRemove(function(){
								document.querySelector("#sp-ac-content").style.display = 'none';
								e.stopPropagation();
							});
						}, false);
					} catch (e) {
					}
				}

				function removeMobileBaiduDirectLink(){
					var nodes = document.querySelectorAll("#page #page-bd #results .result:not([ac_redirectStatus])");
					for(var i = 0; i < nodes.length; i++){
						var curNode = nodes[i];
						safeFunction(function(){
							var curData = JSON.parse(curNode.dataset.log.replace(/'/gm, "\""));
							var trueLink = curData.mu;
							curNode.querySelector("article").setAttribute("rl-link-href", trueLink);
							curNode.querySelectorAll("a").forEach(function (per) {
								per.setAttribute("href", trueLink);
							});
						});
						curNode.setAttribute("ac_redirectStatus", "1");
					}
				}

				function removeOnMouseDownFunc() {
					try {
						var resultNodes = document.querySelectorAll(".g .rc .r a");
						for (var i = 0; i < resultNodes.length; i++) {
							var one = resultNodes[i];
							one.setAttribute("onmousedown", ""); // 谷歌去重定向干扰
							one.setAttribute("target", "_blank"); // 谷歌链接新标签打开
						}
					} catch (e) {
						console.log(e);
					}
				}

				function removeRedirectLinkTarget() {
					if (curSite.SiteTypeID == SiteType.ZHIHU) {
						var nodes = document.querySelectorAll(".RichText a[href*='//link.zhihu.com/?target']");
						for (var i = 0; i < nodes.length; i++) {
							var url = decodeURIComponent(nodes[i].href.replace(/https?:\/\/link\.zhihu\.com\/\?target=/, ""));
							nodes[i].href = url;
						}
					} else if (curSite.SiteTypeID == SiteType.BAIDU_XUESHU) {
						var xnodes = document.querySelectorAll("a[href*='sc_vurl=http']");
						for (var j = 0; i < xnodes.length; j++) {
							var xurl = getUrlAttribute(xnodes[j].href, "sc_vurl", true);
							xnodes[j].href = xurl;
						}
					}
				}

				// 提取url元素的参数值
				function getUrlAttribute(url, attribute, needDecode) {
					var searchValueS = (url.substr(1) + "").split("&");
					for (var i = 0; i < searchValueS.length; i++) {
						var key_value = searchValueS[i].split("=");
						var reg = new RegExp("^" + attribute + "$");
						if (reg.test(key_value[0])) {
							var searchWords = key_value[1];
							return needDecode ? decodeURIComponent(searchWords) : searchWords;
						}
					}
				}

				function resetURLNormal(list) {
					for (var i = 0; i < list.length; i++) {
						// 此方法是异步，故在结束的时候使用i会出问题-严重!
						// 采用闭包的方法来进行数据的传递
						var curNode = list[i];
						var curhref = curNode.href;
						if (list[i] != null && list[i].getAttribute("ac_redirectStatus") == null) {
							list[i].setAttribute("ac_redirectStatus", "0");
							if (curhref.indexOf("www.baidu.com/link") > -1 ||
								curhref.indexOf("m.baidu.com/from") > -1 ||
								curhref.indexOf("www.sogou.com/link") > -1 ||
								curhref.indexOf("so.com/link") > -1) {
								(function (c_curnode, c_curhref) {
									var url = c_curhref.replace(/^http:/, "https:");
									if (curSite.SiteTypeID == SiteType.BAIDU && url.indexOf("eqid") < 0) {
										// 如果是百度，并且没有带有解析参数，那么手动带上
										url = url + "&wd=&eqid=";
									}
									var gmRequestNode = GM_xmlhttpRequest({
										// from: "acxhr",
										extData: c_curhref, // 用于扩展
										url: url,
										headers: {"Accept": "*/*", "Referer": c_curhref.replace(/^http:/, "https:")},
										method: "GET",
										timeout: 5000,
										onreadystatechange: function (response) {
											// 由于是特殊返回-并且好搜-搜狗-百度都是这个格式，故提出
											DealRedirect(gmRequestNode, c_curhref, response.responseText, "URL='([^']+)'")
											// 这个是在上面无法处理的情况下，备用的 tm-finalurldhdg  tm-finalurlmfdh
											if (response.responseHeaders.indexOf("tm-finalurl") >= 0) {
												var relURL = Reg_Get(response.responseHeaders, "tm-finalurl\\w+: ([^\\s]+)");
												if (relURL == null || relURL == "" || relURL.indexOf("www.baidu.com/search/error") > 0) return;
												DealRedirect(gmRequestNode, c_curhref, relURL);
											}
										}
									});
								})(curNode, curhref); //传递旧的网址过去，读作c_curhref
							}
						}
					}
				}

				var DealRedirect = function (request, curNodeHref, respText, RegText) {
					if (respText == null || typeof(respText) == "undefined") return;
					var resultResponseUrl = "";
					if (RegText != null) {
						resultResponseUrl = Reg_Get(respText, RegText);
					} else {
						resultResponseUrl = respText;
					}
					if (resultResponseUrl != null && resultResponseUrl != "" && resultResponseUrl.indexOf("www.baidu.com/link") < 0) {
						try {
							if (curSite.SiteTypeID == SiteType.SOGOU) curNodeHref = curNodeHref.replace(/^https:\/\/www.sogou.com/, "");
							var host = getHost(resultResponseUrl);
							document.querySelectorAll("a[href*='" + curNodeHref + "']").forEach(function (per) {
								if(per.querySelector("span") != null){
									per.lastChild.insertAdjacentHTML("beforeEnd", "&nbsp;-&nbsp;" + host);
								}
								per.setAttribute("ac_redirectStatus", "2");
								per.setAttribute("href", resultResponseUrl);
							});
							CONST.curHosts.push(host);
							CONST.curHosts = acFuncdistinct(CONST.curHosts);
							reloadBlockList();
							request.abort();
						} catch (e) {
						}
					}
				};

				function Reg_Get(HTML, reg) {
					var RegE = new RegExp(reg);
					try {
						return RegE.exec(HTML)[1];
					} catch (e) {
						return "";
					}
				}

				function removeAD_baidu_sogou() { // 移除百度自有广告
					if (curSite.SiteTypeID == SiteType.BAIDU) {
						// safeRemove(".c-container /deep/ .c-container");
						// 移除shadowDOM广告；搜索关键字：淘宝；然后点击搜索框，广告会多次重现shadowdom
						safeRemove(function () {
							$('.c-container /deep/ .c-container').has('.f13>span:contains("广告")').remove();
						});
						safeRemove(function () {
							$('#content_right>div').has('a:contains("广告")').remove();
						});
						// 移除标准广告
						safeRemove(function () {
							$('#content_left>div').has('span:contains("广告")').remove();
						});
						// 移除右侧栏顶部-底部无用广告
						safeRemove(function () {
							$("#content_right td>div:not([id]),#content_right>br").remove();
						});
					} else if (curSite.SiteTypeID == SiteType.SOGOU) {
						safeRemove("#promotion_adv_container");
						safeRemove("#kmap_business_title");
						safeRemove("#kmap_business_ul");
						safeRemove(".sponsored");
						try {
							document.querySelector(".rvr-model[style='width:250px;']").style = "display:none";
						} catch (e) {
						}
					} else if (curSite.SiteTypeID == SiteType.SO) {
						safeRemove("#so_kw-ad");
						safeRemove("#m-spread-left");
						safeRemove("#m-spread-bottom");
					} else if (curSite.SiteTypeID == SiteType.BING) {
						safeRemove(".b_ad");
					} else if (curSite.SiteTypeID == SiteType.GOOGLE) {
						safeRemove("#bottomads");
					}
				}

				function IsNumber(val) {
					if (val === "" || val == null) {
						return false;
					}
					if (!isNaN(val)) {
						return true;
					} else {
						return false;
					}
				}

				function addCounter(citeList) {
					var cssText = "position:relative;z-index:1;margin-right:4px;display:inline-block;color:white;font-family:'微软雅黑';font-size:16px;text-align:center;width:22px;line-height:22px;border-radius:50%;";
					var div = document.createElement('div');
					for (var i = 0; i < citeList.length; i++) {
						if (citeList[i].getAttribute('SortIndex')) {
							continue;
						} else {
							citeList[i].setAttribute('SortIndex', CONST.sortIndex);
							citeList[i].inner = citeList[i].innerHTML;
							if (IsNumber(citeList[i].parentNode.id)) {
								// 如果是百度的数据
								div.innerHTML = "<div class='AC-CounterT' style=" + cssText + ">" + (citeList[i].parentNode.id % 100) + "</div>";
								citeList[i].innerHTML = div.innerHTML + citeList[i].inner;
							} else {
								div.innerHTML = "<div class='AC-CounterT' style=" + cssText + ">" + CONST.sortIndex + "</div>";
								citeList[i].innerHTML = div.innerHTML + citeList[i].inner;
							}
							CONST.sortIndex++;
						}
					}
				}

				function getHost(sbefore) {
					var send;
					var result = sbefore.split('-');
					if (curSite.SiteTypeID == SiteType.SOGOU && location.href.indexOf("sogou") < 20) {
						// --搜狗专用；如果第一个是中文的话，地址就是第二个
						sbefore = result[1];
					}
					send = sbefore.replace(/(\/[^/]*|\s*)/, "").replace(/<[^>]*>/g, "").replace(/https?:\/\//g, "").replace(/<\/?strong>/g, "").replace(/<\/?b>/g, "").replace(/<?>?/g, "").replace(/( |\/).*/g, "").replace(/\.\..*/, "");
					if(send.indexOf(".") < 0) return null;
					return send.trim();
				}

				function addFavicon(citeList) {
					for (var index = 0; index < citeList.length; index++) {
						if (null == citeList[index].getAttribute("ac_faviconStatus")) {
							var url = getBaiduHost(citeList[index]);
							if(url == null){ // 跳过baidu.click
								continue;
							}
							var curNode = citeList[index];
							var faviconUrl = url;
							var II = 0;
							for (; II <= 5; II++) {
								curNode = curNode.parentNode;
								if (curNode != null && curNode.querySelector(curSite.FaviconAddTo) != null) {
									break;
								}
							}
							//console.log(index+"."+faviconUrl+"--"+II);
							if (II <= 5) {
								// 先用父节点判断一下是否存在img
								var tmpHTML = curNode.innerHTML;
								var pos = tmpHTML.indexOf("fav-url")
									& tmpHTML.indexOf("favurl")
									& tmpHTML.indexOf("tit-ico")
									& tmpHTML.indexOf("img_fav rms_img")
									& tmpHTML.indexOf("c-tool-")
									& tmpHTML.indexOf("span class=\"c-icon c-icon-");
								//他自己已经做了favicon了
								if (pos > -1) {
									// console.log("已有图片：");
									citeList[index].setAttribute("ac_faviconStatus", "-2");
									continue;
								}
								curNode = curNode.querySelector(curSite.FaviconAddTo);
								// 特殊处理BING
								// if (curSite.SiteTypeID == SiteType.BING) curNode = curNode.querySelector("h2");
								//https://api.byi.pw/favicon/?url=???? 不稳定
								//http://"+faviconUrl+"/cdn.ico?defaulticon=http://soz.im/favicon.ico 不稳定
								//https://www.xtwind.com/api/index.php?url=???? 挂了。。。
								//https://statics.dnspod.cn/proxy_favicon/_/favicon?domain=sina.cn
								//www.google.com/s2/favicons?domain=764350177.lofter.com
								//如果地址不正确，那么丢弃
								var host = faviconUrl.replace(/[^.]+\.([^.]+)\.([^.]+)/, "$1.$2");
								if (curNode.querySelector(".AC-faviconT") == null && host.length > 3) {
									var insNode = document.createElement("img");
									// curNode = curNode.children[0] || curNode.firstChild ; // firstChild容易遇到text对象
									citeList[index].setAttribute("ac_faviconStatus", "1");
									// curNode.insertBefore(insNode, curNode.firstChild);
									insNode.className = "AC-faviconT";
									insNode.style = "position:relative;z-index:1;vertical-align:sub;height:16px;width:16px;margin-right:5px;margin-bottom: 2px;";

									insNode.src = "https://favicon.yandex.net/favicon/" + host;
									insNode.setAttribute("faviconID", "0");
									// curNode.innerHTML = insNode.outerHTML + curNode.innerHTML;
									// curNode.insertAdjacentHTML("afterEnd", insNode.innerHTML);
									var beforeIndex = 0;
									if(curNode.childNodes[beforeIndex].className == "AC-CounterT"){beforeIndex = 1;}
									curNode.insertBefore(insNode, curNode.childNodes[beforeIndex]);
									(function(xcur){
										insNode.onload = function(env){
											var imgNode = xcur.querySelector(".AC-faviconT");
											if(imgNode.naturalWidth < 10){
												imgNode.setAttribute("old-src", imgNode.src);
												imgNode.src = ACConfig.defaultFaviconUrl;
											}
											imgNode.onload = "javascript:void(0);";
										};
									})(curNode);
								}
							}
						}
					}
				}

				function InsertSettingMenu() {
					if (document.querySelector("#myuser") == null) {
						try {
							var parent = document.querySelector("#u, #gbw>div>div, #b_header>#id_h, .top-bar .sogou-set-box"); //baidu; google; bing
							parent.style = "width: auto;";
							var userAdiv = document.createElement("div");
							userAdiv.id = "myuser";
							userAdiv.innerHTML = "<input type='submit' class='myuserconfig' value='自定义'/><span class='ac-newversionDisplay' style='background-color: red;float: left;height: 8px;width: 8px;border-radius: 4px;display:" + (CONST.hasNewFuncNeedDisplay ? "unset" : "none") + "'>&nbsp;</span>";
							parent.insertBefore(userAdiv, parent.childNodes[0]);
							document.querySelector("#myuser .myuserconfig").addEventListener("click", function (e) {
								return ACtoggleSettingDisplay(e);
							}, true);
						} catch (e) {
						}
					}
				}
			}(); // 读取个人设置信息
			function safeFunction(func){
				safeRemove(func);
			}
			function AC_addStyle(css, className, addToTarget, isReload, initType) { // 添加CSS代码，不考虑文本载入时间，带有className
				var tout = setInterval(function () {
					/**
					 * addToTarget这里不要使用head标签,head标签的css会在html载入时加载，
					 * html加载后似乎不会再次加载，body会自动加载
					 * **/
					var addTo = document.querySelector(addToTarget);
					if (typeof(addToTarget) == "undefined")
						addTo = (document.head || document.body || document.documentElement || document);
					isReload = isReload || false; // 默认是非加载型
					initType = initType || "text/css";
					// 如果没有目标节点(则直接加) || 有目标节点且找到了节点(进行新增)
					if (typeof(addToTarget) == "undefined" || (typeof(addToTarget) != "undefined" && document.querySelector(addToTarget) != null)) {
						clearInterval(tout);
						// 如果true 强行覆盖，不管有没有--先删除
						// 如果false，不覆盖，但是如果有的话，要退出，不存在则新增--无需删除
						if (isReload == true) {
							safeRemove("." + className);
						} else if (isReload == false && document.querySelector("." + className) != null) {
							// 节点存在 && 不准备覆盖
							return;
						}
						var cssNode = document.createElement("style");
						if (className != null) cssNode.className = className;
						cssNode.setAttribute("type", initType);
						cssNode.innerHTML = css;
						try {
							addTo.appendChild(cssNode);
						} catch (e) {
							console.log(e.message);
						}
					}
				}, 20);
			}
			function safeRemove(cssSelector_OR_NEWfunction) {
				if (typeof(cssSelector_OR_NEWfunction) == "string") {
					try {
						var removeNodes = document.querySelectorAll(cssSelector_OR_NEWfunction);
						for (var i = 0; i < removeNodes.length; i++)
							removeNodes[i].remove();
					} catch (e) {
					}
				} else if (typeof(cssSelector_OR_NEWfunction) == "function") {
					try {
						cssSelector_OR_NEWfunction();
					} catch (e) {
					}
				} else {
					console.log("未知命令：" + cssSelector);
				}
			}


			function FSBaidu() { // thanks for code from 浮生@未歇 @page https://greasyfork.org/zh-TW/scripts/31642
				debug("初始化FSBAIDU");
				/**
				 * 检查document的子节点是否含有元素
				 * @param nodeClass 待检查元素
				 * @returns {boolean} T|F
				 */
				function checkDocmentHasNode(nodeClass) {
					for (var i = 0; i < document.childNodes.length; i++) {
						if (document.childNodes[i].data && document.childNodes[i].data.indexOf(nodeClass) > 0)
							return true;
					}
					return false;
				}
				CONST.StyleManger = {
					importStyle: function (data, toClassName) {
						if (navigator.userAgent.toLowerCase().indexOf("edge") < 0) {
							if (data.indexOf("http") != 0) data = "data:text/css;utf-8," + encodeURIComponent(data);
							if (!checkDocmentHasNode(toClassName)) {
								var pi = document.createProcessingInstruction(
									"xml-stylesheet",
									`type="text/plain" class="${toClassName}" href="${data}"`
								); // 注意必须要双引号
								document.insertBefore(pi, document.documentElement);
							}
						} else {
							/* **********多重样式-兼容edge && 黑夜脚本************ */
							AC_addStyle(data, toClassName, "head", false, "text/plain");
							/* **********多重样式-兼容edge && 黑夜脚本************ */
						}
					},
					//加载普通样式
					loadCommonStyle: function () {
						this.loadStyle(CONST.keySite + "CommonStyle", CONST.keySite + "CommonStyle");
					},
					loadStyle: function (styleName, insClassName) {
						// 全部采用text/plain的内容来载入
						// 如果是debug模式。或者是gm模式
						if (isLocalDebug) {
							debug("本地-加载样式：" + insClassName);
							this.importStyle("http://127.0.0.1/" + styleName + ".css", "AC-" + insClassName);
						} else if (isNewGM == true) {
							// 仅用于GreaseMonkey4.0+
							debug("特殊模式-加载样式：" + insClassName);
							this.importStyle("https://baidu.ntaow.com/baiducss/" + styleName + ".css", "AC-" + insClassName);
						} else {
							debug("加载样式：" + insClassName);
							// TamperMonkey + GreaseMonkey < 4.0 + ViolentMonkey (4.0GreaseMonkey不支持GetResource方法)
							this.importStyle(GM_getResourceText(styleName), "AC-" + insClassName);
						}
					},
					//加载护眼模式样式
					loadHuYanStyle: function (color) {
						var style = "body[baidu],#wrapper #head,#wrapper #s_tab,form.fm .s_ipt_wr.bg{background-color:#fff}#container #content_left .result-op,#container #content_left .result,#container #rs,#container #content_right{background-color:#aaa;border:1px double #a2d7d4;border-radius:0}#container #content_left .result-op:hover,#container #content_left .result:hover{background-color:#ccc!important}#container #content_left .result-op h3,#container #content_left .c-container h3,#container #rs .tt{background-color:#bbb}.na_cnt .nws_itm,.nws_itmb,#b_content #b_results li,body #b_header{background-color:#aaa;border:1px double #a2d7d4;border-radius:0}#b_content #b_results li:hover{background-color:#ccc!important}#b_content #b_results li h2{background-color:#bbb}.srg .g,.bkWMgd>.g,.bkWMgd g-inner-card,#rhscol #rhs,#rhscol #rhs .g>div,.c2xzTb .g,.ruTcId .g,.fm06If .g,.cUnQKe .g,.HanQmf .g{background-color:#aaa;border:1px double #a2d7d4;border-radius:0}.srg .g:hover,.bkWMgd>.g:hover{background-color:#ccc!important}.bkWMgd .g div.r,.srg .g h3{background-color:#bbb}";
						if (ACConfig.isUserColorEnable) {
							color = color || ACConfig.defaultHuYanColor || "#FFFFFF";
						} else {
							color = color || "#FFFFFF";
						}
						if (color.indexOf("#") != 0 || color.length < 7) return;
						if (isNewGM == false) {
							style = GM_getResourceText("MainHuYanStyle");
						}
						style = style
							.replace(/#aaa(a*)/igm, color)
							.replace(/#bbb(b*)/igm, this.Lighter(color, -40))
							.replace(/#ccc(c*)/igm, this.Lighter(color, 45));
						AC_addStyle(style, "AC-" + CONST.keySite + "HuYanStyle" + (isNewGM ? "" : "-File"), "head", false, "text/css");
					},
					clip255: function (value) {
						if (value > 255) return 255;
						if (value < 0) return 0;
						return value;
					},
					Lighter:function (oriRGB, deltaY) {
						// 按比例缩放 + 1/deltaY
						// HEX 2 RGB
						var rgb = oriRGB.replace("#", "");
						var R = parseInt("0x" + rgb.substr(0, 2));
						var G = parseInt("0x" + rgb.substr(2, 2));
						var B = parseInt("0x" + rgb.substr(4, 2));
						// RGB 2 YUV
						var Y = ((66 * R + 129 * G + 25 * B + 128) >> 8) + 16;
						var U = ((-38 * R - 74 * G + 112 * B + 128) >> 8) + 128;
						var V = ((112 * R - 94 * G - 18 * B + 128) >> 8) + 128;
						Y = Y * (1 + 1.0 / deltaY);// 提高亮度
						// YUV 2 RGB
						R = this.clip255((298 * (Y - 16) + 409 * (V - 128) + 128) >> 8);
						G = this.clip255((298 * (Y - 16) - 100 * (U - 128) - 208 * (V - 128) + 128) >> 8);
						B = this.clip255((298 * (Y - 16) + 516 * (U - 128) + 128) >> 8);
						return "#" + ((R << 16) + (G << 8) + B).toString(16);
					},
					//加载单页样式
					loadOnePageStyle: function () {
						this.loadStyle(CONST.keySite + "OnePageStyle", CONST.keySite + "OnePageStyle");
					},
					//加载双页样式
					loadTwoPageStyle: function () {
						this.loadStyle(CONST.keySite + "TwoPageStyle", CONST.keySite + "TwoPageStyle");
					},
					// 加载三列样式
					loadThreePageStyle: function () {
						var cssHead = "";
						if (curSite.SiteTypeID == SiteType.BAIDU) cssHead = "#container #content_left, body[news] #container #content_left>div:not([class]):not([id])";
						if (curSite.SiteTypeID == SiteType.GOOGLE) cssHead = ".srg,#acid_src";
						if (curSite.SiteTypeID == SiteType.BING) cssHead = "#b_content #b_results";
						if (curSite.SiteTypeID == SiteType.SOGOU) cssHead = "#main .results";
						AC_addStyle(cssHead + "{grid-template-columns: repeat(auto-fit,minmax(33%,1fr));} #container #content_left>*:not([class*='result']),#acid_src div:last-child{grid-column-end: 4;}", "AC-ThreePageStyle", "head");
					},
					// 加载四列样式
					loadFourPageStyle: function () {
						var cssHead = "";
						if (curSite.SiteTypeID == SiteType.BAIDU) cssHead = "#container #content_left, body[news] #container #content_left>div:not([class]):not([id])";
						if (curSite.SiteTypeID == SiteType.GOOGLE) cssHead = ".srg,#acid_src";
						if (curSite.SiteTypeID == SiteType.BING) cssHead = "#b_content #b_results";
						if (curSite.SiteTypeID == SiteType.SOGOU) cssHead = "#main .results";
						AC_addStyle(cssHead + "{grid-template-columns: repeat(auto-fit,minmax(25%,1fr));} #container #content_left>*:not([class*='result']),#acid_src div:last-child{grid-column-end: 5;}", "AC-FourPageStyle", "head");
					},
					loadExpandOneStyle: function () {
						AC_addStyle("#content_left .result-op:hover,#content_left .result:hover{box-shadow:0 0 2px gray;background:rgba(230,230,230,0.1)!important;}#wrapper #rs, #wrapper #content_left .result, #wrapper #content_left .c-container{width:100%; min-width:670px;margin-bottom:14px!important;}.c-span18{width:78%!important;min-width:550px;}.c-span24{width: auto!important;}", "AC-Style-expand", "head");
					},
					loadPlainToCSS: function () {
						for (var i = 0; i < document.childNodes.length; i++) {
							var curNode = document.childNodes[i];
							if (curNode.target == "xml-stylesheet" && curNode.data.indexOf("text/plain") > 0) {
								curNode.data = curNode.data.replace("type=\"text/plain\"", "type=\"text/css\"");
							}
						}
						if (navigator.userAgent.toLowerCase().indexOf("edge") > 0) {
							document.querySelectorAll("style[class*='AC'][type='text/plain']").forEach(function (per) {
								per.setAttribute("type", "text/css");
								var insCSS = document.createElement("style");
								insCSS.innerHTML = per.innerHTML;
								insCSS.className = per.className + "-new";
								per.setAttribute("used", "不生效，无用");
								document.head.appendChild(insCSS)
							});
						}
					},
					loadCSSToPlain: function () {
						for (var i = 0; i < document.childNodes.length; i++) {
							var curNode = document.childNodes[i];
							if (curNode.target == "xml-stylesheet" && curNode.data.indexOf("text/css") > 0) {
								curNode.data = curNode.data.replace("type=\"text/css\"", "type=\"text/plain\"");
							}
						}
					}
				};
				var ControlManager = {
					twoPageDisplay: function () {
						// 定时查询
						if (curSite.SiteTypeID == SiteType.GOOGLE) {
							try {
								var tI = setInterval(function () {

									if (document.querySelector("#center_col #extrares") != null) {
										clearInterval(tI);
										var insSrc = document.createElement("div");
										insSrc.id = "acid_src";
										insSrc.className = "bkWMgd";
										// 把#acid_src移入#ires>#rso>.bkWMgd的父节点末尾
										if (!document.querySelector("#acid_src")) {
											var child = document.querySelector("#ires>#rso>.bkWMgd");
											child.parentNode.insertBefore(insSrc, child);
										}
										// 把.bkWMgd:not([id])>div:not([class='srg'])中的特殊(图片等)节点以倒序加入#acid_src中去
										var moveNodes = document.querySelectorAll(".bkWMgd:not([id])>div:not([class='srg'])");
										for (var i = 0; i < moveNodes.length; i++) {
											insSrc.insertBefore(moveNodes[i], insSrc.children[0]);
										}
									}

								}, 50);
							} catch (e) {
								console.log(e);
							}
						}
					},
					//居中显示 --- 必须是百度和谷歌的搜索结果页面，其他页面不能加载的--已经通过脚本include标签限制了一部分
					centerDisplay: function () {
						var result = CONST.AdsStyleMode || null;
						if (document.querySelector(".acCssLoadFlag") == null && document.querySelector(".ACExtension") == null) {
							debug("in样式即将加载:"+result);
							var expandStyle = "#content_left .result-op:hover,#content_left .result:hover{box-shadow:0 0 2px gray;background:rgba(230,230,230,0.1)!important;}#wrapper #rs, #wrapper #content_left .result, #wrapper #content_left .c-container{min-width:670px;margin-bottom:14px!important;}.c-span18{width:78%!important;min-width:550px;}.c-span24{width: auto!important;}";
							if (result == 1) {
								AC_addStyle(expandStyle, "AC-Style-expand", "head");
								CONST.StyleManger.loadStyle(CONST.keySite + "CommonStyle", CONST.keySite + "CommonStyle");
							} else if (result == 2) {//单页居中
								AC_addStyle(expandStyle, "AC-Style-expand", "head");
								CONST.StyleManger.loadStyle(CONST.keySite + "CommonStyle", CONST.keySite + "CommonStyle");
								CONST.StyleManger.loadStyle(CONST.keySite + "OnePageStyle", CONST.keySite + "OnePageStyle");
							} else if (result == 3) { //双页居中
								CONST.StyleManger.loadStyle(CONST.keySite + "CommonStyle", CONST.keySite + "CommonStyle");
								CONST.StyleManger.loadStyle(CONST.keySite + "TwoPageStyle", CONST.keySite + "TwoPageStyle");
								this.twoPageDisplay();
							} else if (result == 4) { // 三列
								CONST.StyleManger.loadStyle(CONST.keySite + "CommonStyle", CONST.keySite + "CommonStyle");
								CONST.StyleManger.loadStyle(CONST.keySite + "TwoPageStyle", CONST.keySite + "TwoPageStyle");
								CONST.StyleManger.loadThreePageStyle();
								this.twoPageDisplay();
							} else if (result == 5) { // 四列
								CONST.StyleManger.loadStyle(CONST.keySite + "CommonStyle", CONST.keySite + "CommonStyle");
								CONST.StyleManger.loadStyle(CONST.keySite + "TwoPageStyle", CONST.keySite + "TwoPageStyle");
								CONST.StyleManger.loadFourPageStyle();
								this.twoPageDisplay();
							}
							var xflag = document.createElement("div");
							xflag.className = "acCssLoadFlag";
							document.head.appendChild(xflag);
							debug("in样式运行结束");
						}
						if (curSite.SiteTypeID != SiteType.BAIDU && curSite.SiteTypeID != SiteType.GOOGLE && curSite.SiteTypeID != SiteType.BING && curSite.SiteTypeID != SiteType.SOGOU) return;
						// 如果是百度 &&  ((地址替换->包含wd关键词[替换之后不等-是百度结果页面]) || 有右边栏-肯定是百度搜索结果页 || value中存在搜索内容) return;
						// 如果是百度 &&  没有(百度搜索结果的标志-[存在]百度的内容) return;
						if (curSite.SiteTypeID == SiteType.BAIDU && !(location.href.replace(/(&|\?)(wd|word)=/, "") != location.href || document.querySelector("#content_left") ||
							((document.querySelector("#kw") && document.querySelector("#kw").getAttribute("value")) || "") != ""
						)) {
							CONST.StyleManger.loadCSSToPlain();
							return;
						}
						// 如果是谷歌 && (地址替换->是谷歌图像页面 || 是地图页面)[替换要变] return;
						if (curSite.SiteTypeID == SiteType.GOOGLE && location.href.replace(/tbm=(isch|lcl|shop|flm)/, "") != location.href) {
							CONST.StyleManger.loadCSSToPlain();
							return;
						}
						/**护眼Style最后载入**/
						if (CONST.HuYanMode == true || document.querySelector("style[class*='darkreader']") != null) CONST.StyleManger.loadHuYanStyle();
						// 启用所有样式表
						CONST.StyleManger.loadPlainToCSS();
					},
					init: function () {
						if (CONST.isGoogleImageUrl) return;
						this.centerDisplay();
					}
				};
				debug("调用加载自定义css");
				ControlManager.init();
				return CONST.StyleManger;
			}
		}
	})();
}();