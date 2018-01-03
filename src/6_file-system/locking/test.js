
// 使用独占标记创建锁文件

import fs from 'fs'

// 独占模式打开（ O_EXCL ）
fs.open('config.lock', 'wx', (err) => {
  if (err) return console.error(err)
})

// 把当前进程的进程号PID写入锁文件，当有异常发生时，可以知道最后拥有这个锁的进程
fs.writeFile('config.lock', process.pid, { flags: 'wx' }, (err) => {
  if (err) return console.error(err)
})
