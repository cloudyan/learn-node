import { Writable } from 'stream'
// import util from 'util'

// util.inherits(CountStream, Writable)
// function CountStream(matchText, options) {
//   Writable.call(this, options)
//   ...
// }

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

  end() {
    this.emit('total', this.count)
  }
}

export default CountStream

