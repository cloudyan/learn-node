function Bomb() {
  this.message = 'Boom!'
}

Bomb.prototype.explode = () => {
  console.log(this.message)
}

const bomb = new Bomb()

// bind 绑定方法比创建一个新的匿名函数更加具有可读性
// Function.prototype.bind
setTimeout(bomb.explode.bind(bomb), 1000)
