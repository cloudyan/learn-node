
// 错误示例

import { EventEmitter } from 'events'

function complexOperations() {
  const events = new EventEmitter()

  events.emit('success') // 这个事件在监听器订阅之前就已经触发了

  return events
}

complexOperations().on('success', () => {
  console.log('success!')
})

