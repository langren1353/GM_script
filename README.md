如果有任何问题的话，可以直接联系我，我的邮件：1353464539@qq.com 或者是提交一个issue

If you have any problems on using the script, please mail me for 1353464539@qq.com or submit a issue
# AC-baidu:重定向优化百度搜狗谷歌搜索_去广告_favicon_双列
![TamperMonkey v4.5](https://img.shields.io/badge/TamperMonkey-v4.8-brightgreen.svg) ![Chrome x64 v60.4](https://img.shields.io/badge/Chrome%20x64-v73.0-brightgreen.svg) ![Safari v11.0.3](https://img.shields.io/badge/Safari%20-v12.0-brightgreen.svg)

### 使用必读

[脚本使用说明](https://github.com/langren1353/GM_script/blob/master/help.md)

### 安装地址
[安装地址1](https://greasyfork.org/zh-CN/scripts/14178)

[安装地址2](https://openuserjs.org/scripts/inDarkness/AC-baidu%E9%87%8D%E5%AE%9A%E5%90%91%E4%BC%98%E5%8C%96%E7%99%BE%E5%BA%A6%E6%90%9C%E7%8B%97%E8%B0%B7%E6%AD%8C%E6%90%9C%E7%B4%A2_%E5%8E%BB%E5%B9%BF%E5%91%8A_favicon_%E5%8F%8C%E5%88%97)

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

***2019.03.28*** : V23.13 更新-移除部分异常的百度白屏问题.新域名baidu.mx并不是百度旗下的地址，所以跳过。顺便刷一个版本，修复谷歌的recapture的问题，感谢老司机“breath365”

***2019.02.15*** : V23.11 修复和Google Search Extra Button的兼容问题。修复地址有时候不能访问的问题。修复旧ff上的forEach和innerText不能用的问题。删除部分旧日志

***2019.02.13*** : V23.09 提供选项-直接删除已屏蔽的内容，避免看到一些垃圾无用信息；修复残留bug在单列时相关搜索宽度异常；优化百度图标为透明图标

***2019.01.25*** : V23.05 假装大家没发现bug，赶紧更新搜狗页面的bug

***2019.01.25*** : ....隐藏掉一些....

***2015.11.25*** : V2.0 优化，已经是真实地址的不再尝试获取

***2015.11.25*** : V1.0 完成去掉百度重定向的功能

### 展示效果-运行成功后
- 旧版本的：

![刚开始](https://ae01.alicdn.com/kf/HTB1GouwX21G3KVjSZFkq6yK4XXaU.jpg)
- Baidu搜索结果

![Baidu搜索结果](https://ae01.alicdn.com/kf/HTB15FyzX8SD3KVjSZFqq6A4bpXat.jpg)
- google搜索结果

![google搜索结果](https://ae01.alicdn.com/kf/HTB1lOyxX.GF3KVjSZFoq6zmpFXaL.jpg)

### 如果在Opera下使用
如果脚本需要在Opera下使用的话，需要这样设置TamperMokey扩展
![Opera的特殊处理](https://ae01.alicdn.com/kf/HTB1erSwX21G3KVjSZFkq6yK4XXaT.jpg)


### 如果遇到![这种](https://ae01.alicdn.com/kf/HTB1BReGXW1s3KVjSZFtq6yLOpXat.jpg)
如果遇到了上图这种情况，下面这样设置就可以了
![Opera的特殊处理](https://ae01.alicdn.com/kf/HTB1YHCzX8WD3KVjSZKPq6yp7FXao.jpg)


### 关于捐赠
如果你觉得脚本还可以的，对您有那么些小帮助的，您可以通过支付宝或者微信扫一扫，捐助X元，1分不嫌少，5毛也是爱，谢谢众位大佬~![谢谢](https://ae01.alicdn.com/kf/H10467ba7961f4604a68454f95089bd54m.png)
如果嫌麻烦可以帮忙点一下右上角的Star小星星

微信：<img src="https://ae01.alicdn.com/kf/HTB1r1exX25G3KVjSZPxq6zI3XXa0.jpg" width=200 height=200/>支付宝：<img src="https://ae01.alicdn.com/kf/HTB15mWGXW1s3KVjSZFtq6yLOpXat.jpg" width=200 height=200/>


### 免责声明 
本脚本仅在浏览器端运行，源码公开可见，仅做研究使用，不得用于非法获利， 如产生法律纠纷与脚本作者无关!!!
其次本脚本禁止使用并修改用于制作脚本集合之类的聚合性脚本

### 脚本反馈
**QQ交流群: （[点击加群585532681](https://qm.qq.com/cgi-bin/qm/qr?k=fOg8ij6TuwOAfS8g16GRYNf5YYFu5Crw&jump_from=&auth=-l05paasrPe5zigt5ahdzn_dzXiB1jJ_)）**
### 脚本推荐
[TUJIDU-去广告-VIP视频解析助手](https://greasyfork.org/zh-CN/scripts/371262)
