// 非热门 非常用 排序放在最后

module.exports = function genSidebarConfig(lang) {
  // const t = require('../locales')(lang);
  return {
    '/api/': [
      {
        title: 'API 文档',
        collapsable: false,
        children: [
          // ['', '介绍'],
          '',
          // 'do-you-know/',
          'about/',
        ],
      },
    ],
    '/': [
      '',
    ],
  };
}
