
// babel-node ./stream/stream.js

import fs from 'fs'
import path from 'path'
// import resolve from '../utils/resolve'

function resolve(file) {
  return path.resolve(__dirname, file)
}

const readable = fs.createReadStream(resolve('./original.txt'))
const writeable = fs.createWriteStream(resolve('./copy.txt'))

readable.pipe(writeable)
