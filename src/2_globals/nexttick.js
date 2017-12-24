
// 通常，一个事件会在一个异步的操作中触发，但有时候也会提早触发事件，
// 比如在验证入参的时候发现有错误，那么 error 事件将被触发
// 要纠正这个小错误，可以把这段代码包裹进 process.nextTick 中

import { EventEmitter } from 'events'

function complexOperations() {
  const events = new EventEmitter()

  process.nextTick(() => {
    // 这个事件将会在监听器准备好后被触发
    events.emit('success')
  })

  return events
}

complexOperations().on('success', () => {
  console.log('success')
})
