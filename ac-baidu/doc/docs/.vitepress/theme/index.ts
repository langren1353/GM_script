import DefaultTheme from "vitepress/theme"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"
import locale from "element-plus/es/locale/lang/zh-cn"
// 图标并进行全局注册
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import * as echarts from "echarts" // 引入echarts
import TVHtml from "./TVHtml.vue"
import TIcon from "./TIcon.vue"
import { VPDemo } from "../vitepress"
// 基于element-plus二次封装基础组件
import TuiPlus from "../../../packages"
import "./index.css"


export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.config.globalProperties.$echarts = echarts // 全局使用
    // 注册ElementPlus
    ctx.app.use(ElementPlus, {
      locale // 语言设置
    })
    // 注册所有图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      ctx.app.component(key, component)
    }
    // 全局注册基础组件
    ctx.app.use(TuiPlus)

    ctx.app.component("Demo", VPDemo)
    ctx.app.component("TVHtml", TVHtml)
    ctx.app.component("TIcon", TIcon)

    ctx.app.mixin({
      mounted() {
        if(location.host.includes('tujidu')) {
          document.body.classList.add('tujidu')
        }
        if(!window.hasInit) {
          window.hasInit = true

          const scriptTag = document.createElement('script');
          scriptTag.defer = true;
          scriptTag.dataset.domain = location.host;
          scriptTag.src = "https://tongji.tujidu.com/js/vue.js";
          document.body.appendChild(scriptTag);
          
          document.querySelector('.content-container').insertAdjacentHTML('beforeend', `
<div class="bottom-href" style="width: 65%; margin-top: -42px;">
    <div style="display: flex;justify-content: space-around; margin-bottom: 15px;">
        <div>
            友情链接：
        </div>
        <a type="primary" href="https://www.ntaow.com/" target="_blank">N淘网-购物折扣、</a>
        <a type="primary" href="https://www.at8.fun/" target="_blank">网站定做（不支持脚本定制）、</a>
        <a type="primary" href="https://wallpaper.abcb.fun/" target="_blank">背景壁纸美图、</a>
        <a type="primary" href="https://jiu.bujiasu.com/#/login?q=registe&code=veG4L8Vo" target="_blank">不加速-上网加速！</a>
    </div>
    <div style="display: flex;justify-content: space-around;">
        Copyright © 搜索引擎优化小组
    </div>
</div>
<style>
.bottom-href a{
    color: #3476d2;
    text-decoration: none;
}
.bottom-href a:hover{
    color: #409EFF;
    text-decoration: underline;
}
</style>
`)
        }
        
      },
    });
  }
}
