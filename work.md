- [ ] 待修复手机页面上的兼容问题
- [x] 增加屏蔽数据的导出功能-->大编辑框
- [x] 对于“资讯”和“视频”两个模块：无编号功能、未居中
- [?] 自动翻页下：google搜索结果“足球 知乎”网页错乱 ? 似乎没有图片这个内容，待排查

- [x] 修复在扩展下的问题--
- [x] 更换QQ群的地址为新的地址

- [x] 二狗的 favicon的图标地址似乎不对

- [x] 根据grid的特性，对行占用进行优化，但是如果配置不好可能出现三个横行的问题
- [x] 二狗中 切换双列没有 && 护眼色效果无效
- [x] 为什么百度首页又开始闪烁了 = 修改了不加载的问题，但是可能出现自动出结果时的异常

- [x] 为什么已经访问的连接颜色没有发生变化  
      ==> 原因是因为hover的时候网址才发生变化
      
- [x] 扩展上：为什么翻页的功能失效了  
      ==> 之前移除了翻页功能，现在已经恢复
      
- [x] 为什么Edge上的保存功能似乎失效了  
      ==> 目前旧版edge的TamperMonkey支持不是很好，保存有时候不生效
      
- [x] 似乎扩展上的数据是localhost?  
      ==> 已修复
      
- [ ] 似乎百度学术的搜索结果都看不见了
- [ ] 似乎谷歌在搜索特定关键字时具有左侧栏：

- [x] 2026-08-17 11:26:20 用户要求：Google 一旦开始 `loadMore` 自动翻页，就保持当前双列、三列状态，不再根据父节点高度重新计算。处理：增加永久翻页启动锁；首次有效翻页请求后停止 `findAndMarkP2Line()` 高度判定，并让后续 Google 翻页结果继承已确认的 `two-father`、`two-child` 标记。项目：AC-Baidu-SoGou-Google-NoRedirect。
- [x] 2026-08-17 11:35:00 用户纠正：不应在 `loadMorePage()` 内修改 HTML，布局逻辑应集中在 `findAndMarkP2Line()` 附近。处理：移除翻页函数中的布局 DOM 修改和独立锁；使用已有 `pageUrl` 判断有效翻页已开始，在 `findAndMarkP2Line()` 中按首次确认的 `two-child → two-father` 层级继承标记，不再读取父节点高度。项目：AC-Baidu-SoGou-Google-NoRedirect。
- [x] 2026-08-17 11:38:30 用户要求简化：恢复单一翻页锁，不需要层级继承逻辑。处理：首次有效 `loadMorePage()` 启动后设置 `hasStartedLoadMore`，`findAndMarkP2Line()` 检测锁后直接结束，不再计算高度或修改布局标记。项目：AC-Baidu-SoGou-Google-NoRedirect。
- [x] 2026-08-17 11:42:18 用户指出：`two-child/two-father` 均由脚本生成，原始翻页节点没有这些属性，不能直接停止 `findAndMarkP2Line()`。处理：将锁判断下沉到 `getTrueFatherChild()`；翻页后继续遍历新节点并调用 `markFatherChild()` 补充属性，只跳过父节点高度计算。项目：AC-Baidu-SoGou-Google-NoRedirect。
