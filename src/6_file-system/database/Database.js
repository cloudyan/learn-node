
// 编写文件数据库

import fs from 'fs'
import { EventEmitter } from 'events'

/* eslint no-underscore-dangle: 0 */
class Database extends EventEmitter {
  constructor(path) {
    super()
    this._path = path
    this._records = Object.create(null)
    this._writeStream = fs.createWriteStream(this.path, {
      encoding: 'utf8',
      flags: 'a',
    })
    this._load()
  }

  get path() {
    return this._path
  }

  get records() {
    return this._records
  }

  get writeStream() {
    return this._writeStream
  }

  _load() {
    const stream = fs.createReadStream(this.path, { encoding: 'utf8' })
    const database = this

    let data = ''
    stream.on('readable', () => {
      data += stream.read()
      const records = data.split('\n')
      data = records.pop()

      for (let i = 0; i < records.length; i++) {
        try {
          const record = JSON.parse(records[i])
          if (record.value == null) {
            delete database._records[record.key]
          } else {
            database._records[record.key] = record.value
          }
        } catch (e) {
          database.emit('error', 'found invalid record:', records[i])
        }
      }
    })

    stream.on('end', () => {
      database.emit('load')
    })
  }

  get(key) {
    return this._records[key] || null
  }

  set(key, value, cb) {
    const toWrite = JSON.stringify({ key, value }) + '\n'
    if (value == null) {
      delete this._records[key]
    } else {
      this._records[key] = value
    }
    this._writeStream.write(toWrite, cb)
  }

  del(key, cb) {
    return this.set(key, null, cb)
  }
}


export default Database
