
// console inspect 变量注入

const name = 'alex'
const user = { name }

console.log('Hello')
console.log('Hello %s', name)
console.log('Hello:', name)
console.log('Hello:', user) // user 对象被 util.inspect 格式化

console.error('Error, bad user:', user)
