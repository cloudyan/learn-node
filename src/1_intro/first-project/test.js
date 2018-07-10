import assert from 'assert'
import fs from 'fs'
import CountStream from './countstream'

const countStream = new CountStream('example')
let passed = 0

countStream.on('total', (count) => {
  assert.equal(count, 1)
  passed++
})

fs.createReadStream(__filename).pipe(countStream)

process.on('exit', () => {
  // console.log('Assertions passed:', passed)
  console.log('断言通过:', passed)
})
