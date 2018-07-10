// 从一个Node程序导入或导出数据

// Run with:
//   cat file.txt | node process.js

process.stdin.resume()
process.stdin.setEncoding('utf8')

process.stdin.on('data', (text) => {
  console.log(text)
  process.stdout.write(text.toUpperCase())
})
