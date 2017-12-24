
function monitor() {
  console.log(process.memoryUsage())
}

// 模拟复杂操作
const id = setInterval(monitor, 1000)

// 复杂操作结束之前，可以执行 timerRef.unref()，这意味着你可以和一些操作同时使用 setTimeout 或者 setInterval，
// 而不用在操作执行后通知 timer 他们结束了。这样一旦 timeout 到时间了，程序将自动退出，不用再去执行 clearTimeout
// 有时候没有合适的地方来调用 clearInterval，这将变得特别有用
id.unref()

setTimeout(() => {
  console.log('Done!')
}, 5000)
