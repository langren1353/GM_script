import DefaultTheme from "vitepress/theme"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"
import locale from "element-plus/es/locale/lang/zh-cn"
// 图标并进行全局注册
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
// import * as echarts from "echarts" // 引入echarts
import TVHtml from "./TVHtml.vue"
import TIcon from "./TIcon.vue"
import { VPDemo } from "../vitepress"
// 基于element-plus二次封装基础组件
import TuiPlus from "./../packages"
import "./index.css"


export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    // ctx.app.config.globalProperties.$echarts = echarts // 全局使用
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
        if(!window.tongjiScript) {
          window.tongjiScript = true

          const scriptTag = document.createElement('script');
          scriptTag.defer = true;
          scriptTag.dataset.domain = location.host;
          scriptTag.src = "https://tongji.90dao.com/js/vue.js";
          document.body.appendChild(scriptTag);

          // window.addEventListener('load', () => {
          //   fetch('/tongjiresult/getip')
          //     .then(async response => {
          //       if (response.ok) {
          //         const uip = await response.text();
          //         plausible('Loaded', { props: { uip } })
          //       }
          //     })
          // })

          setInterval(() => {
            const node = document.querySelector('.content-container');

            if(node) {
              const existInsert = node.querySelector('.bottom-href');
              if(existInsert) return;

              node.insertAdjacentHTML('beforeend', `
<div class="bottom-href" style="width: 76%; margin-top: -42px;">
    <div style="display: flex;justify-content: space-around; margin-bottom: 20px;">
        <div style="font-weight: bold; color: chocolate;">
            友情链接：
        </div>
        <a type="primary" href="https://v.xn--4gq62f52gdss.plus/b/?code=g4WEkq4j" target="_blank">一元机场.PLUS</a>、        
        <a type="primary" href="https://www.xn--4gq62f52gdss.wiki/3-link-sites/choose-price.html" target="_blank">一元机场汇总</a>、        
        <a type="primary" href="https://tools.acdiao.com/" target="_blank">老猫工具箱</a>、
        <a type="primary" href="https://www.at8.fun/" target="_blank">网站定做（不接脚本定制）</a>、
        <a type="primary" href="https://wallpaper.abcb.fun/" target="_blank">背景壁纸美图</a>
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
          }, 1000)
        }

      },
    });
  }
}
