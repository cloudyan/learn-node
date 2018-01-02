import { EventEmitter } from 'events'

class MusicPlayer extends EventEmitter {
  constructor() {
    super()
    this.playing = false
  }
}

const musicPlayer = new MusicPlayer()

/* eslint func-names: 0 */
musicPlayer.on('play', function (track) {
  console.log(track)
  this.playing = true
})

musicPlayer.on('stop', function () {
  this.playing = false
})

musicPlayer.on('play', (track) => {
  console.log('Track now playing:', track)
})

musicPlayer.emit('play', 'The Roots - The Fire')

setTimeout(() => {
  musicPlayer.emit('stop')
}, 1000)
