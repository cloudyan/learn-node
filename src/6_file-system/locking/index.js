import locker from './locker'

locker.lock((err) => {
  if (err) throw err
  console.log('locked')

  // 这里是修改操作 ...

  locker.unlock(() => {
    console.log('unlocked')
  })
})
