
// babel-node ./locking/index.js

import locker from './locker'

locker.lock((err) => {
  if (err) throw err
  console.log('locked')

  // 这里是修改操作 ...
  console.log('do samething...')

  // locker.unlock(() => {
  //   console.log('unlocked')
  // })
})
