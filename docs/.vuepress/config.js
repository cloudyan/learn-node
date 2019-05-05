
const lang = 'zh'
const locales = require('./locales')(lang);
const genNav = require('./config/nav');
const genSidebar = require('./config/sidebar');

module.exports = {
  dest: 'dist',
  locales: {
    '/': {
      lang: locales.lang,
      title: locales.title,
      description: locales.description,
    },
    // '/en': locales['en'].site,
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    displayAllHeaders: false,
    sidebarDepth: 3,
    // repo: 'kitdocs/kitdocs.org',
    editLinks: true,
    docsDir: 'docs',
    // #697 Provided by the official algolia team.
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: genNav(lang),
        // sidebar: {
        //   '/news/': getGuideSidebar('指南', '深入'),
        //   '/topic/': getPluginSidebar('插件', '介绍'),
        //   // '/theme/': getThemeSidebar('主题', '介绍'),
        // },
        sidebar: genSidebar(lang),
      },
    },
  },
  plugins: {
    // 自带4个
    // @vuepress/plugin-active-header-links @vuepress/plugin-last-updated @vuepress/plugin-register-components @vuepress/plugin-search
    // yarn add @vuepress/plugin-medium-zoom @vuepress/plugin-notification @vuepress/plugin-pwa @vuepress/plugin-i18n-ui @vuepress/plugin-pagination @vuepress/plugin-google-analytics @vuepress/plugin-back-to-top --dev
    '@vuepress/plugin-i18n-ui': true,
    '@vuepress/plugin-back-to-top': true,
    // '@vuepress/plugin-pwa': true,
    '@vuepress/plugin-pagination': true,
    '@vuepress/plugin-pwa': {
      serviceWorker: true,
      // popupComponent: 'SWUpdatePopup',
      // updatePopup: false,
      updatePopup: {
        '/': {
          message: "发现新内容可用",
          buttonText: "刷新"
        },
      },
    },
    '@vuepress/plugin-medium-zoom': true,
    '@vuepress/plugin-notification': true,
    // 'flowchart': true
  },
  configureWebpack: (config, isServer) => {
    if (!isServer) {
      // 修改客户端的 webpack 配置
    }
    // config.resolve.extensions.push('.css', '.styl', '.md');
  },
  // clientRootMixin: path.resolve(__dirname, 'mixin.js')
  chainWebpack: (config, isServer) => {
    if (!isServer) {
      // 修改客户端的 webpack 配置
    }

    config.module
      .rule('webp')
      .test(/\.webp$/)
      .use('file-loader')
        .loader('file-loader')
        .end()

    // config.module
    //   .rule('css')
    //   .test(/\.css$/)
    //   .use('css-loader')
    //     .loader('css-loader')
    //     .end()
  },
  markdown: {
    config: md => {
      md.set({ breaks: true })
      md.use(require('markdown-it-checkbox'))
      md.use(require('markdown-it-deflist'))
      md.use(require('remark'))
    }
  },
}

