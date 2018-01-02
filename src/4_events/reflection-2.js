import { EventEmitter } from 'events'

class Pulsar extends EventEmitter {
  constructor(speed, times) {
    super(speed, times)

    const self = this
    this.speed = speed
    this.times = times

    this.on('newListener', (eventName, listener) => {
      /* eslint no-unused-vars: 0 */
      if (eventName === 'pulse') {
        self.start()
      }
    })
  }

  start() {
    const self = this
    const id = setInterval(() => {
      self.emit('pulse')
      self.times--
      if (self.times === 0) {
        clearInterval(id)
      }
    }, this.speed)
  }

  stop() {
    if (this.listeners('pulse').length === 0) {
      throw new Error('No listeners have been added!')
    } else {
      console.log('not stoped')
    }
  }
}

const pulsar = new Pulsar(500, 5)

pulsar.on('pulse', () => {
  console.log('.')
})

pulsar.stop()
