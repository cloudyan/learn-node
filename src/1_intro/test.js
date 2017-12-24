import assert from 'assert'
import CountStream from './countstream'
import fs from 'fs'

const countStream = new CountStream('example')
let passed = 0

countStream.on('total', (count) => {
  assert.equal(count, 1)
  passed++
})

fs.createReadStream(__filename).pipe(countStream)

process.on('exit', () => {
  console.log('Assertions passed:', passed)
})
