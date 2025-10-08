---
head:
  - - meta
    - name: keywords
      content: AC-Baidu,常见问题汇总,AC-Baidu优化脚本,百度优化脚本,谷歌优化脚本,必应优化脚本,搜索优化脚本,搜索结果优化,搜索结果
---
<component is="script" src="/inject.js">
</component>

# 常见问题汇总

### 1. 脚本为什么没有生效

<script setup>
// 获取脚本版本号
import { reactive, ref, onMounted } from 'vue';
const version = ref('0.0');

onMounted(async () => {
  const baseItemKey = 'op_common';
  const scriptData = await safeFunc(() => window.AC_GM_Interface.get(baseItemKey, '{}'));
  const state = reactive(Object.assign({}, scriptData));
  
  function safeFunc(callback, failed_res = '') {
    try{
      return callback()
    }catch(e){}
    return failed_res
  }
  version.value = state.version
});
</script>

<el-alert
  v-if="+version < 27.09 "
  title="脚本版本不够新"
  type="error"
  description="当前版本太老了，可能存在显示效果异常，请及时保持更新，参考问题1"
  show-icon
/>

> 1. 检查是否安装顺利，安装失败的可能需要重新安装一下，注意最新的版本是27.17，`27.09`版本有百度显示不全的问题（这个版本刚好是greasyfork被墙时间的版本，打不开greayfork走代理，用梯子解决greasyfork打不开的问题：<a href='https://v.bujiasu.com/b/?code=CPTqfgRV' target='_blank'>不加速.COM</a>）
> 2. <span style='color:red'>检查油猴脚本的版本是否最新，目前TamperMonkey的最新版本应该在5.2.3以上，至少4.x的版本是肯定不对的（尤其是Chrome127以上），尝试使用尽量新的版本：<a href='/pages/home/start.html' target='_blank'>如何安装点这里</a> </span>
> 3. <span style='color:red'>检查是否开启**开发者模式**，Chrome Manifest V3对于现有油猴脚本影响挺大的，当前开启方式：<a href='https://www.tampermonkey.net/faq.php?locale=zh#Q209' target='_blank' rel='nofllow'>Chrome Manifest V3</a> </span>
> 4. <span style='color:red'>如果打开之后，油猴下拉发现是有脚本的，但是打开网页发现没有生效，这时候请及时反馈</span>
> 4. 检查浏览（`国产|双核浏览器`），确认浏览器为极速模式，不是兼容模式（兼容模式所有插件不生效）
> 5. 检查插件是否兼容，如果用的插件是ViolentMonkey或者是GreaseMonkey的话，可能存在不兼容现象，可以直接提issue，并指明插件名称和版本
> 6. 检查是否在目标网页上，本脚本只支持在`百度`、`谷歌`、`必应`、`鸭鸭`等搜索引擎的搜索结果页面中生效
> 7. 如果需要报告问题的话，请按照格式提交一下内容：
>    - 运行失败的`[完整]`截图，包含整个浏览器页面
>    - 注意顺便提交TamperMonkey的下拉列表状态，或者其他插件的打开下拉页面
>    - 附带信息：
>      - 浏览器版本，例如：Chrome 127
>      - 操作系统版本，例如：Windows 10
>      - TamperMonkey版本(这个很关键)例如：V5.1.1
>      - 脚本版本，例如：V27.02

### 2. 搜索中存在显示效果错位
> 1. 这个原因是因为搜索引擎更新，再好的脚本都可能面临搜索引擎更新的情况，甚至需要重新适配，这需要时间
> 2. 如果遇到明显问题的，存在明显错位，明显双列无效果的，可以提issue，或者联系我，我尽量在空闲时间修复

### 3. 搜索结果中存在广告
> 1. 这个问题是因为搜索引擎的搜索结果中存在广告，这个是搜索引擎的问题，不是脚本的问题
> 2. 原本搜索引擎的部分广告并不会完全删除掉，因为原本也有部分内容是正常的搜索结果

### 4. 为什么不支持搜狗
> 1. 搜狗在早期的版本中其实做过适配，但是因为一些历史原因，无法对搜狗进行适配
> 2. 未来也不会再考虑支持搜狗，如果有需要的话，可以试试别人的其他脚本
