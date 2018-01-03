import fs from 'fs'
import http from 'http'

http.createServer((req, res) => {
  const data = fs.readFileSync('./output.dat')
  res.end(data)
}).listen(3000)
