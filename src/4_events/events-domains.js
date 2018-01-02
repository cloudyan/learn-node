import { EventEmitter } from 'events'
import domain from 'domain'

// const util = require('util')
// const domain = require('domain')
// const events = require('events')

const audioDomain = domain.create()


// function AudioDevice() {
//   events.EventEmitter.call(this)
//   this.on('play', this.play.bind(this))
// }

// util.inherits(AudioDevice, events.EventEmitter)

// AudioDevice.prototype.play = function play() {
//   this.emit('error', 'not implemented yet')
// }

class AudioDevice extends EventEmitter {
  constructor() {
    super()
    this.on('play', this.play.bind(this))
  }

  play() {
    this.emit('error', 'not implemented yet')
  }
}


// function MusicPlayer() {
//   events.EventEmitter.call(this)

//   this.audioDevice = new AudioDevice()
//   this.on('play', this.play.bind(this))

//   this.emit('error', 'No audio tracks are available')
// }

// util.inherits(MusicPlayer, events.EventEmitter)

// MusicPlayer.prototype.play = () => {
//   this.audioDevice.emit('play')
//   console.log('Now playing')
// }

class MusicPlayer extends EventEmitter {
  constructor() {
    super()
    this.audioDevice = new AudioDevice()
    this.on('play', this.play.bind(this))

    this.emit('error', 'No audio tracks are available')
  }

  play() {
    this.audioDevice.emit('play')
    console.log('Now playing')
  }
}

audioDomain.on('error', (err) => {
  console.log('audioDomain error:', err)
})

audioDomain.run(() => {
  const musicPlayer = new MusicPlayer()
  musicPlayer.play()
})
