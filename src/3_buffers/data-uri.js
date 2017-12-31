
// babel-node data-uri.js

import fs from 'fs'
import zlib from 'zlib'

const base = fs.readFileSync('./monkey.png')
console.log('base', base.length)

const encoded = base.toString('base64')
console.log('pre', Buffer.byteLength(encoded))

zlib.deflate(encoded, (er, buf) => {
  console.log('zlib-post', buf.length)
})
zlib.gzip(encoded, (er, buf) => {
  console.log('gzip-post', buf.length)
})

// console.log('data:image/png;base64,' + encoded)

// Buffer() is deprecated. Use Buffer.from(), Buffer.alloc(),
// or Buffer.allocUnsafe() instead. (no-buffer-constructor)
// fs.writeFileSync('./secondmonkey.png', Buffer(encoded, 'base64'))

fs.writeFileSync('./secondmonkey.png', Buffer.from(encoded, 'base64'))
