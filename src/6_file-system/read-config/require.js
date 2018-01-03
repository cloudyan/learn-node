
// const config = require('config.json')
// require加载模块方式会被全局缓存，
// 如果另一个文件也加载了 config.json 并修改了它，
// 这会影响到整个系统中其他加载了这个文件的模块
// 想要修改配置对象的时候建议使用 readFileSync。
// 假如你选择使用 require，那么把对象看做是只读的，否则你会面临很难追踪的 bug。
// 你可以显示地通过 Object.freeze 来冻结一个对象。

import config from 'config.json'
// const config = require('config.json')

doThisThing(config)

function doThisThing(conf) {
  console.log(conf)
}
