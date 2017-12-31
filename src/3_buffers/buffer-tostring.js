
// babel-node buffer-tostring.js

import fs from 'fs'

fs.readFile('./names.txt', (err, buf) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(Buffer.isBuffer(buf))
  console.log(buf)
  console.log(buf.toString())
})
