
// 要在当前文件夹下运行
// babel-node ./posix.js
// 可以结合__dirname使用 绝对/相对 路径
// babel-node ./posix/posix.js
// babel-node ./src/6_file-system/posix/posix.js

import fs from 'fs'
import path from 'path'
import assert from 'assert'

function resolve(file) {
  return path.resolve(__dirname, file)
}

const fd = fs.openSync(resolve('./file.txt'), 'w+')
const writeBuf = Buffer.from('some data to write 2')
fs.writeSync(fd, writeBuf, 0, writeBuf.length, 0)

// 创建空 buffer，大小和写入的 buffer 一样
const readBuf = Buffer.alloc(writeBuf.length)
// 使用存储在文件中的数据填充 buffer
fs.readSync(fd, readBuf, 0, writeBuf.length, 0)

// console.log(writeBuf.toString())
// console.log(readBuf.toString())
assert.equal(writeBuf.toString(), readBuf.toString(), () => {
  console.log('writeBuf not equal readBuf')
})

fs.closeSync(fd)
