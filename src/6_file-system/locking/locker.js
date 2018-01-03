
// Node 本身不能实现直接锁住一个文件（无论是强制锁还是咨询锁）。
// 但咨询锁可以用个调用 syscalls，比如 [flock](https://linux.die.net/man/2/flock)实现，
// 它在第三方模块是可用的（https://github.com/baudehlo/node-fs-ext）
// 除了通过 flock 直接锁住一个文件，
// 你还可以通过使用锁文件。（使用独占标记创建一个锁文件 x标记）
// 当锁文件在网络磁盘上时独占模式可能不能正常工作，因为一些系统在网络磁盘上并不识别 O_EXCL 标记。
// 要绕开这个问题，另外一个策略是把锁文件创建成一个文件夹。mkdir 是一个原子性操作（没有并发），
// 很好的支持跨平台，并且在网络磁盘上也能很好的运行。
// 当目录已经存在时，mkdir 方法会失败。这个情况下，PID 可以写入这个目录中的一个文件。
// 要了解更多实现独占模式的方法，可以参看第三方模块 [lockfile](https://github.com/isaacs/lockfile)

import fs from 'fs'

let hasLock = false
const lockDir = 'config.lock'

function lock(cb) {
  if (hasLock) return cb()
  fs.mkdir(lockDir, (err) => {
    if (err) return cb(err)

    // 写入 PID，以便调试
    fs.writeFile(`${lockDir}/${process.pid}`, (error) => {
      // 无法写入 PID，并非世界末日：打印错误，继续运行
      if (error) console.error(error)
      hasLock = true
      return cb()
    })
  })
}

function unlock(cb) {
  if (!hasLock) return cb()
  fs.unlink(`${lockDir}/${process.pid}`, (err) => {
    if (err) return cb(err)

    fs.rmdir(lockDir, (error) => {
      if (error) return cb(error)
      hasLock = false
      cb()
    })
  })
}

process.on('exit', () => {
  if (hasLock) {
    fs.unlinkSync(`${lockDir}/${process.pid}`)
    fs.rmdirSync(lockDir)
    console.log('removed lock')
  }
})

export default {
  lock,
  unlock,
}
