
// 创建一个始终异步的 API

import fs from 'fs'
// import { EventEmitter } from 'events'

let content

function readFileIfRequired(cb) {
  if (!content) {
    fs.readFile(__filename, 'utf8', (err, data) => {
      content = data
      console.log('readFileIfRequired: readFile')
      cb(err, content)
    })
  } else {
    // 直接 cb(null, content) 有什么问题
    // 时序有可能受影响，但是只要逻辑按顺序写，就不会有影响了
    // console.log('readFileIfRequired: cached')
    // cb(null, content)

    process.nextTick(() => {
      console.log('readFileIfRequired: cached')
      cb(null, content)
    })
  }
}

readFileIfRequired((err, data) => {
  console.log('1. Length:', data.length)

  readFileIfRequired((error, data2) => {
    console.log('2. Length:', data2.length)
  })

  console.log('Reading file again...') // 这个收到影响
})

console.log('Reading file...')
