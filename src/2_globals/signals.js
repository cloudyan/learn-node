
// 对 POSIX 信号添加一个监听器
// UNIX 系统通过 man sigaction 查看所有的信号

// 从标准输入流中读取，这样程序会一直执行，直到按下 CTRL+C或进程被杀死。
// 使用 resume 来防止 Node 直接退出
process.stdin.resume()

process.on('SIGHUP', () => {
  console.log('Reloading configuration...')
})

// kill [-HUP] pid 可以杀死进程
// Node 进程可以通过 process.kill(pid, [signal]) 向另一个进程发送信号，这里的 kill 不是意味着进程将被杀死，
// 而是发送了一个信号。这个方法名是根据在 signal.h 中的C 语言标准函数定义的
console.log('PID:', process.pid)
