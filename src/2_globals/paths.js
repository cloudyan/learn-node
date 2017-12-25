
// __dirname：    总是返回被执行的 js 所在文件夹的绝对路径
// __filename：   总是返回被执行的 js 文件的绝对路径
// process.cwd()：总是返回运行 node 命令所在的文件夹的绝对路径
// ./：            跟 process.cwd() 一样，返回 node 命令所在的文件夹的绝对路径

import path from 'path'

console.log('__dirname:', __dirname)
console.log('__filename:', __filename)
console.log('process.cwd():', process.cwd())
console.log('./:', path.resolve('./'))

// CodeRunner
// "code-runner.cwd": "/usr/local/lib/",
// "code-runner.executorMap": {
//   "vue": "babel-node --presets stage-2",
//   "javascript": "babel-node --presets=stage-2"
// },
//
// __dirname: /Users/jack/github/jskit/kit-node/src/2_globals
// __filename: /Users/jack/github/jskit/kit-node/src/2_globals/tempCodeRunnerFile.js
// process.cwd(): /usr/local/lib
// ./: /usr/local/lib
