
// 批量文件操作（加载到内存或一次性写入）
// 整个文件内容转成 buffer，放在 buf 变量中

import fs from 'fs'

fs.readFile('/path/to/file', (err, buf) => {
  console.log(buf.toString())
})
