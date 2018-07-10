import { Writable } from 'stream'
// import util from 'util'

// util.inherits(CountStream, Writable)
// function CountStream(matchText, options) {
//   Writable.call(this, options)
//   ...
// }

/**
 * 一个用于计数的可写流
 *
 * @class CountStream
 * @extends {Writable}
 */
class CountStream extends Writable {
  constructor(matchText, options) {
    super(options)
    this.count = 0
    this.matcher = new RegExp(matchText, 'ig')
  }

  _write(chunk, encoding, cb) {
    const matches = chunk.toString().match(this.matcher)
    // console.log(chunk.toString())
    if (matches) {
      this.count += matches.length
    }
    cb()
  }

  // Node 的 Writable 基类会调用 end 方法
  end() {
    this.emit('total', this.count)
  }
}

export default CountStream

