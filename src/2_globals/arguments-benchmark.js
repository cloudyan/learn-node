// 基准测试一个函数
// babel-node arguments-benchmark.js -r
// babel-node arguments-benchmark.js -h

// 这个测试基于 Date.now() 精确到毫秒。
// 要获取更佳准确的基准，可以使用如下第三方模块，可组合使用
// - [benchmark](https://npmjs.org/package/benchmark)
// - [microtime](https://npmjs.org/package/microtime)

import fs from 'fs'

const args = {
  '-h': displayHelp,
  '-r': readFile,
}

function displayHelp() {
  console.log('Argument processor:', args)
}

function readFile(file) {
  if (file && file.length) {
    console.log('Reading:', file)
    console.time('read')
    // const stream = require('fs').createReadStream(file)
    const stream = fs.createReadStream(file)
    stream.on('end', () => {
      console.timeEnd('read')
    })
    stream.pipe(process.stdout)
  } else {
    console.error('A file must be provided with the -r option')
    process.exit(1)
  }
}

if (process.argv.length > 0) {
  process.argv.forEach((arg, index) => {
    // if (args[arg]) {
    //   args[arg].apply(this, process.argv.slice(index + 1))
    // }
    if (index > 1) {
      args[arg].call(this, process.argv[1])
    }
  })
}
