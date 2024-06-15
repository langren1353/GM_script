# AC-baidu:重定向优化百度搜狗谷歌搜索_去广告_favicon_双列
![TamperMonkey v4.5](https://img.shields.io/badge/TamperMonkey-v4.18-brightgreen.svg) ![Chrome x64 v60.4](https://img.shields.io/badge/Chrome%20x64-v73.0-brightgreen.svg) ![Safari v11.0.3](https://img.shields.io/badge/Safari%20-v12.0-brightgreen.svg)

QQ群-加群链接：[AC脚本交流群](https://ac.tujidu.com)

## 当前版本

> V26.05 推荐更新，优化百度、谷歌等页面样式效果；优化页面载入速度减少卡顿

### 使用必读

[脚本使用说明](https://github.com/langren1353/GM_script/blob/master/help.md)

### 安装地址
[安装地址1](https://greasyfork.org/zh-CN/scripts/14178)

[安装地址2](https://openuserjs.org/scripts/inDarkness/AC-baidu-%E9%87%8D%E5%AE%9A%E5%90%91%E4%BC%98%E5%8C%96%E7%99%BE%E5%BA%A6%E6%90%9C%E7%8B%97%E8%B0%B7%E6%AD%8C%E5%BF%85%E5%BA%94%E6%90%9C%E7%B4%A2_favicon_%E5%8F%8C%E5%88%97)

### 插件功能

- 去掉百度、搜狗、谷歌搜索结果的重定向，回归为网站的原始网址---附带有去除百度的广告 包括百度顶部和底部的垃圾广告-百家号
- 默认移除百度百家号的内容--应广大群众的需求
- 提供护眼模式，颜色自定义，夜晚不伤眼
- 支持自定义页面效果，如果你会css样式表的话，你可以自己优化整体的页面效果
- 添加百度、搜狗、谷歌搜索结果中Favicon显示效果，页面效果更加美观和实用
- 添加标记数量，标记当前的id，界面更好看
- 百度和谷歌、必应和搜狗搜索页面都可以设置为单列、双列模式以及多列模式，视野更大
- 请求是异步请求，并不会出现一个链接没有反馈回来，其余等待的情况，每个链接的请求都是独立的，互不影响，对于网络的影响几乎没有

### 更新日志

***2023.12-16*** : V26.07 日常维护~

***2023.06-19*** : V26.06 修复谷歌显示效果的错位问题等，修复谷歌异常白屏问题

***2022.12-07*** : V26.04 修复必应错位问题；优化谷歌双列动画问题

***2022.08-23*** : V26.03 修复因背景图引起的看不清字的问题;修复百度单列错位问题;修复google自定义按钮不可见

***2022.08-23*** : V26.02 加快代码执行速度；减少动画撕裂；替换CDN的md5库

***2022.08-22*** : V26.01 因甲癌手术和公司事务停更了2个月，目前补上，推荐更新。 1.修复百度加载缓慢的问题；2.修复谷歌样式加载顺序异常的问题；3.整体优化样式加载时间，更流畅了

***2022.06.18*** : V25.09 更新使用less方案来对样式表进行精简

*

***2019.02.15*** : V23.11 修复和Google Search Extra Button的兼容问题。修复地址有时候不能访问的问题。修复旧ff上的forEach和innerText不能用的问题。删除部分旧日志

***2019.02.13*** : V23.09 提供选项-直接删除已屏蔽的内容，避免看到一些垃圾无用信息；修复残留bug在单列时相关搜索宽度异常；优化百度图标为透明图标

***2019.01.25*** : V23.05 假装大家没发现bug，赶紧更新搜狗页面的bug

***2019.01.25*** : ....隐藏掉一些....

***2015.11.25*** : V2.0 优化，已经是真实地址的不再尝试获取

***2015.11.25*** : V1.0 完成去掉百度重定向的功能

### 展示效果-运行成功后
- 旧版本的：

![刚开始](https://img.90dao.com/images/2023/12/16/657d869b5fe80.jpg)
- Baidu搜索结果

![Baidu搜索结果](https://img.90dao.com/images/2023/12/16/657d863bcbb50.jpg)
- google搜索结果

![google搜索结果](https://img.90dao.com/images/2023/12/16/657d863c17920.jpg)

自定义设置效果
![google搜索结果](https://img.90dao.com/images/2023/12/16/657d863b31ad1.jpg)

### 如果在Opera下使用
如果脚本需要在Opera下使用的话，需要这样设置TamperMokey扩展
![Opera的特殊处理](https://img.90dao.com/images/2023/12/16/657d86ffcba3f.png)

### 关于捐赠
由于脚本属于非盈利内容，全靠用爱发电，什么时候没有这份精力继续了，可能就再也不会更新了，如果有兴趣捐赠的话，可以点击一下捐赠，捐赠地址：https://pay.acdiao.com

因此觉得脚本还行的话，不嫌麻烦可以帮忙点一下右上角的Star小星星

捐赠地址：支付宝、微信
![捐赠-淘宝-微信](https://img.90dao.com/images/2024/06/15/666d3f045b34c.png)

如果有任何问题的话，请提交一个issue，同时欢迎大家PR

If you have any problems on using the script, please submit an issue

### 使用声明

- 1.本脚本中提供的所有功能均免费使用，有关本软件的最新消息请前往[github](https://github.com/langren1353/GM_script/)查看
- 2.本脚本禁止使用并修改用于制作脚本集合之类的聚合性脚本

### 免责声明 

本脚本中提供的所有功能均仅在浏览器中运行，所使用的源代码公开透明可见，且本脚本仅学习研究使用，不使用任何盈利方案或参与任何盈利组织，因使用本脚本引起的或与本脚本有关的任何争议，各方应友好协商解决，本脚本对使用本脚本所提供的软件时可能对用户自己或他人造成的任何形式的损失和伤害不承担任何责任。如用户下载、安装和使用本产品中所提供的软件，即表明用户信任本作者及其相关协议和免责声明。

### License

[The MIT License (MIT)](https://github.com/langren1353/GM_script/edit/master/LICENSE)

### 脚本推荐
[TUJIDU-VIP视频解析助手](https://greasyfork.org/zh-CN/scripts/371262)
