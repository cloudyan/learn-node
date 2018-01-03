
// 同步读取配置文件
// 同步方法的一个特点是，一旦有错误发生，它将会抛出异常
// 同步的错误可以使用标准的 try/catch 块来捕获

import fs from 'fs'

// const config = JSON.parse(fs.readFileSync('./config.json').toString())
// doThisThing(config)

try {
  const buf = fs.readFileSync('./config.json')
  doThisThing(buf.toString())
} catch (error) {
  console.error(error)
}


function doThisThing(conf) {
  console.log(conf)
}
