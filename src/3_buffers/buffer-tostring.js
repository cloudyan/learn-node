
// 如果没提供编码格式，那么文件操作以及很多网络操作就回将数据作为Buffer类型返回
// babel-node buffer-tostring.js

import fs from 'fs'

fs.readFile('./names.txt', (err, buf) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(Buffer.isBuffer(buf)) // true
  console.log(buf)  // 结果是一串八位字节组（16进制编码）

  // Buffer 类型提供了 toString方法，来把数据转为UTF-8编码的字符串
  console.log(buf.toString()) // 默认转为UTF-8
  console.log(buf.toString('ascii')) // utf16le base64 hex
})
