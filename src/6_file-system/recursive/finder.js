
// 递归文件操作

import fs from 'fs'
import { join } from 'path'

function findSync(nameRe, startPath) {
  const results = []

  function finder (path) {
    const files = fs.readdirSync(path)

    for (let i = 0; i < files.length; i++) {
      const fpath = join(path, files[i])
      const stats = fs.statSync(fpath)

      if (stats.isDirectory()) finder(fpath)
      if (stats.isFile() && nameRe.test(files[i])) results.push(fpath)
    }
  }

  finder(startPath)
  return results
}

// asyncOps 计数器并不是唯一可以跟踪一组异步操作是否完成的方案。
// 取决于应用的需求，还可以递归地传入原来的回调。
// 可以参照第三方模块 [mkdirp](https://github.com/substack/node-mkdirp)
function find(nameRe, startPath, cb) {
  const results = []
  let asyncOps = 0

  function finder (path) {
    asyncOps++
    fs.readdir(path, (err, files) => {
      if (err) return cb(err)

      files.forEach((file) => {
        const fpath = join(path, file)

        asyncOps++
        fs.stat(fpath, (er, stats) => {
          if (er) return cb(er)

          if (stats.isDirectory()) finder(fpath)
          if (stats.isFile() && nameRe.test(file)) results.push(fpath)

          asyncOps--
          if (asyncOps === 0) cb(null, results)
        })
      })

      asyncOps--
      if (asyncOps === 0) cb(null, results)
    })
  }

  finder(startPath)
}

export default {
  find,
  findSync,
}
