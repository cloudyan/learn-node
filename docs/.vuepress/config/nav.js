
module.exports = function genNavConfig(lang) {
  const t = require('../locales')(lang);
  return [
    {
      text: 'API 文档',
      link: '/api/',
    },
    {
      text: '实战练习',
      link: '/action/',
    },
  ];
};
