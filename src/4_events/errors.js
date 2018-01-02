import { EventEmitter } from 'events'
// const events = require('events')
// const util = require('util')

// function MusicPlayer() {
//   events.EventEmitter.call(this)
// }

// util.inherits(MusicPlayer, events.EventEmitter)

class MusicPlayer extends EventEmitter {

}

const musicPlayer = new MusicPlayer()

musicPlayer.on('play', function play(track) {
  this.emit('error', 'unable to play!', track)
})

musicPlayer.on('error', (err) => {
  console.error('Error:', err)
})

setTimeout(() => {
  musicPlayer.emit('play', 'Little Comets - Jennifer')
}, 1000)
