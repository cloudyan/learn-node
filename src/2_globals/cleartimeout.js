function Bomb() {
  this.message = 'Boom!'
}

Bomb.prototype.explode = () => {
  console.log(this.message)
}

const bomb = new Bomb()

const timeoutId = setTimeout(bomb.explode.bind(bomb), 1000)

clearTimeout(timeoutId)

