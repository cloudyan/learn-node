
// 文件描述
// Stream | File descriptor | Descriptor
// -------|-----------------|-----------
// stdin  | 0               | 标准输入
// stdout | 1               | 标准输出
// stderr | 2               | 标准错误


import fs from 'fs'

// stdout 打印日志时，我们习惯使用 console.log 语法糖
console.log('Logging to stdout')

// 假如使用全局的 process 对象，可以更明确的达到同样目的
process.stdout.write('Logging to stdout')

// 还有一种方式，fs 模块中有些方法将文件描述作为第一个参数。
// 我们就能通过 fs.writeSync 写入文件描述 1 或者 stdout
fs.writeSync(1, 'Logging to stdout')

// 同步日志
// console.log 与 process.stdout.write 实际上是同步的方法，所提供的 TTY 是一个文件流

// 文件描述 返回一个数字
const fd = fs.openSync('myfile', 'a')
console.log(typeof fd === 'number')
