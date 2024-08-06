import { defineConfig } from "vitepress"
import { mdPlugin } from "./config/plugins"
export default defineConfig({
  title: "AC-重定向设置",
  description: "基于Element-plus基础组件封装使用",
  lang: "cn-ZH",
  base: "/",
  lastUpdated: true,
  themeConfig: {
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
            text: '反馈',
            items: [
              { text: 'GitHub Issues', link: 'https://github.com/langren1353/GM_script/issues', target: '_blank' },
              { text: 'Greasy Fork 反馈', link: 'https://greasyfork.org/zh-CN/scripts/14178/feedback', target: '_blank' },
            ]
          },
          {
            text: '油猴插件',
            items: [
              { text: 'Tampermonkey（推荐）', link: 'https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo', target: '_blank' },
              { text: 'Tampermonkey（edge商店）', link: 'https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd', target: '_blank' },
              { text: 'Tampermonkey（官网下载）', link: 'https://www.tampermonkey.net/index.php?browser=chrome&locale=zh', target: '_blank' },
              { text: 'Tampermonkey（国内站）', link: 'https://www.extfans.com/productivity/dhdgffkkebhmkfjojejmpbldmpobfkfo/', target: '_blank' },
            ]
          },
          {
            text: '其他',
            items: [
              { text: 'GitHub.Dev', link: 'https://github.com/langren1353/GM_script', target: '_blank' },
              { text: '赞赏码', link: 'https://pay.acdiao.com/', target: '_blank' },
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
            { text: '漫步白月光', link: 'https://www.at8.fun/' },
            { text: '不加速-上网加速', link: 'https://jiu.bujiasu.com/#/login?code=veG4L8Vo' },
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
