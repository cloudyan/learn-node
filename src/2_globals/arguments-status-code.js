
// 使用 process.exit 返回正确的退出状态码
// 运行代码之后，执行 echo $?，在终端中将显示 1（0以外的数字都表示错误发生）
// babel-node arguments-status-code.js -r
// echo $?

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
    // require('fs').createReadStream(file).pipe(process.stdout)
    fs.createReadStream(file).pipe(process.stdout)
  } else {
    // 指示发生了错误的情况
    console.error('A file must be provided with the -r option')
    process.exit(1)
  }
}

if (process.argv.length > 0) {
  process.argv.forEach((arg, index) => {
    if (args[arg]) {
      args[arg].apply(this, process.argv.slice(index + 1))
    }
  })
}
