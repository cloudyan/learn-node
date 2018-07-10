// 操作、传递命令行参数 process.argv
// babel-node arguments.js -r arguments.js
// babel-node arguments.js -h

const args = {
  '-h': displayHelp,
  '-r': readFile,
}

function displayHelp() {
  console.log('Arguments processor:', args)
}

function readFile(file) {
  console.log('Reading:', file)
  require('fs').createReadStream(file).pipe(process.stdout)
}

if (process.argv.length > 0) {
  // 循环遍历 process.argv
  process.argv.forEach((arg, index) => {
    if (args[arg]) {
      args[arg].apply(this, process.argv.slice(index + 1))
    }
  })
}
