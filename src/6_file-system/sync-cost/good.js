
// babel-node ./sync-cost/good.js

import fs from 'fs'
import http from 'http'
import path from 'path'
// import resolve from '../utils/resolve'

function resolve(file) {
  return path.resolve(__dirname, file)
}

const data = fs.readFileSync(resolve('./output.dat'))

http.createServer((req, res) => {
  res.end(data)
}).listen(3000)

console.log('listen on http://localhost:3000')
