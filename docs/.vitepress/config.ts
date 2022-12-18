/*
 * @Date: 2022-12-17 00:31:03
 * @Author: liting luz.liting@gmail.com
 * @LastEditors: liting luz.liting@gmail.com
 * @LastEditTime: 2022-12-18 08:45:09
 * @FilePath: /vitepress-theme-liting/docs/.vitepress/config.ts
 */
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Liting',
  description: '一个基于 VitePress 的多样化主题',
  appearance: true,
  base: '/',
  ignoreDeadLinks: true,
  lastUpdated: true,
  markdown: {
    theme: {
      light: 'solarized-light',
      dark: 'solarized-dark',
    },
    lineNumbers: true,
  },
  titleTemplate: false,

  themeConfig: {
    nav: [
      {
        text: '教程',
        link: '/tutorial/base/edit',
        activeMatch: '/tutorial/',
      },
      {
        text: '标签',
        link: '/tag/index',
        activeMatch: '/tag/',
      },
    ],
    sidebar: {
      '/tutorial/': [
        {
          text: '基础',
          items: [
            {
              text: '文本编辑',
              link: '/tutorial/base/edit',
            },
            {
              text: '网站部署',
              link: '/tutorial/base/deploy',
            },
          ],
        },
        {
          text: '主题',
          items: [
            {
              text: '初始化',
              link: '/tutorial/theme/init',
            },
            {
              text: '布局',
              link: '/tutorial/theme/layout',
            },
            {
              text: '组件',
              link: '/tutorial/theme/comment',
            },
            {
              text: '特点',
              link: '/tutorial/theme/feature',
            },
          ],
        },
      ],
    },
    outline: 2,
    outlineTitle: '目录',
    socialLinks: [{ icon: 'github', link: 'https://github.com/liting-yes/vitepress-theme-liting.git' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present liting-yes',
    },
    lastUpdatedText: '最近更新时间',
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
  },
})
