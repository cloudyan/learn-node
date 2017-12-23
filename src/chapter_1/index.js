import CountStream from './countstream.js'
import http from 'http'

const countStream = new CountStream('baidu')

http.get('http://www.baidu.com', (res) => {
  res.pipe(countStream)
})

countStream.on('total', (count) => {
  console.log('Total matches:', count)
})
