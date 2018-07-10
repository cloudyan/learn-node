// 创建自己的网络协议 my-proto
// 简单的键值数据库协议

import zlib from 'zlib'

const database = [[], [], [], [], [], [], [], []];
// 掩码列表
const bitMasks = [1, 2, 4, 8, 16, 32, 64, 128];

function store (buf) {
  const db = buf[0]
  const key = buf.readUInt8(1)

  if (buf[2] === 0x78) {
    // inflate 解压缩
    zlib.inflate(buf.slice(2), (er, inflatedBuf) => {
      if (er) return console.error(er)
      const data = inflatedBuf.toString()

      bitMasks.forEach((bitMask, index) => {
        if ((db & bitMask) === bitMask) {
          // 当匹配到 database[index] 时
          database[index][key] = data
        }
      })

      console.log('updated db', database)
    })
  }
}

// deflate 压缩
zlib.deflate('my message', (err, deflateBuf) => {
  if (err) return console.error(err);
  // const header = new Buffer(2)
  const header = Buffer.alloc(2);

  // 存放在8，第四个数据库
  header[0] = 8; // which databases to store
  header[1] = 0; // key

  const message = Buffer.concat([header, deflateBuf])
  // console.log([header, deflateBuf]);
  store(message)
})
