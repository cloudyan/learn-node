
// signals 该模块是一个消息系统
// 不使用字符创作为信号名称、派遣或监听那些尚不存在的事件，会引发错误

import signals from 'signals'
// const signals = require('signals')

const myObject = {
  started: new signals.Signal(),
}

function onStarted(param1, param2) {
  console.log(param1, param2)
}

myObject.started.add(onStarted)
myObject.started.dispatch('hello', 'world')
