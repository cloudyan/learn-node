// 使用流

import CountStream from './countstream.js'
import https from 'https'

const countStream = new CountStream('baidu')
// const countStream = new CountStream('devnode')

// NOTE: 操作百度时，返回的数据不一致
// https.get('https://devnode.cn', (res) => {
https.get('https://www.baidu.com', (res) => {
  res.pipe(countStream)
})

countStream.on('total', (count) => {
  console.log('Total matches:', count)
})
