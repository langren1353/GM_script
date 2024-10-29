import { defineConfig } from "vitepress"
import { mdPlugin } from "./config/plugins"
export default defineConfig({
  title: "AC-重定向设置",
  description: "基于Element-plus基础组件封装使用",
  lang: "cn-ZH",
  base: "/",
  lastUpdated: true,
  head: [
    ['meta', { name: 'preconnect', content: 'https://www.ntaow.com/index.php/jiu' }],
    ['meta', { name: 'preconnect', content: 'https://jiu.bujiasu.com/' }],
  ],
  themeConfig: {
    lastUpdatedText: '更新',
    logo: "/favicon.ico",
    siteTitle: "AC-重定向设置",
    outline: {
      level: 2,
      label: '页面导航',
    },
    socialLinks: [{ icon: "github", link: "https://github.com/langren1353/GM_script" }],
    nav: [
      {
        text: "文档中心",
        link: "/pages/home/"
      },
      { text: "支持作者", link: "/pages/articles/support.md" },
      {
        text: "相关链接",
        items: [
          {
            text: '安装地址',
            items: [
              { text: 'Greasy Fork', link: 'https://greasyfork.org/zh-CN/scripts/14178', target: '_blank' },
            ]
          },
          {
            text: '问题反馈',
            items: [
              { text: 'GitHub Issues', link: 'https://github.com/langren1353/GM_script/issues', target: '_blank' },
              { text: 'Greasy Fork 反馈', link: 'https://greasyfork.org/zh-CN/scripts/14178/feedback', target: '_blank' },
            ]
          },
          {
            text: '推荐链接',
            items: [
              { text: 'N淘网-购物折扣', link: 'https://www.ntaow.com/index.php/jiu', target: '_blank' },
              { text: '网站定做', link: 'https://www.at8.fun/', target: '_blank' },
              { text: '背景壁纸美图', link: 'https://wallpaper.abcb.fun/', target: '_blank' },
              { text: '不加速-上网加速！', link: 'https://jiu.bujiasu.com/#/login?q=registe&code=veG4L8Vo', target: '_blank' },
            ]
          },
        ]
      }
    ],
    sidebar: {
      "/pages": [
        {
          text: "文档中心",
          items: [
            { text: "快速开始", link: "/pages/home/index.md" },
            { text: "安装详解", link: "/pages/home/start.md" },
            { text: "用户手册", link: "/pages/home/use.md" },
          ]
        },
        {
          text: "自定义配置",
          items: [
            { text: "基础配置", link: "/pages/custom/index.md#main" },
            { text: "百度-配置", link: "/pages/custom/index.md#baidu" },
            { text: "谷歌-配置", link: "/pages/custom/index.md#google" },
            { text: "必应-配置", link: "/pages/custom/index.md#bing" },
            { text: "鸭鸭-配置", link: "/pages/custom/index.md#duckduckgo" },
          ]
        },
        {
          text: "更多",
          items: [
            { text: "常见问题", link: "/pages/articles/problems.md" },
            { text: "支持作者", link: "/pages/articles/support.md" },
            { text: "更新日志", link: "/pages/articles/history.md" },
          ]
        },
        {
          text: "其它推荐",
          items: [
            { text: 'N淘网-购物折扣', link: 'https://www.ntaow.com/index.php/jiu', target: '_blank' },
            { text: '网站定做', link: 'https://www.at8.fun/' },
            { text: '背景壁纸美图', link: 'https://wallpaper.abcb.fun/' },
            { text: '不加速-上网加速！', link: 'https://jiu.bujiasu.com/#/login?q=registe&code=veG4L8Vo' },
          ]
        },
      ]
    }
  },
  markdown: {
    headers: {
      level: [0, 0]
    },
    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: "github-light", dark: "github-dark" },
    config: md => mdPlugin(md)
  }
})
