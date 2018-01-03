
// 异步读取配置文件

import fs from 'fs'

fs.readFile('./config.json', (err, buf) => {
  if (err) throw err

  const config = JSON.parse(buf.toString())

  doThisThing(config)
})

function doThisThing(conf) {
  console.log(conf)
}
