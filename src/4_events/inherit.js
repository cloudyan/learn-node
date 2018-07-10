import { EventEmitter } from 'events'
// const events = require('events')
// const util = require('util')

// 音频设备
const AudioDevice = {
  play(track) {
    // Stub: Trigger playback through iTunes, mpg123, etc.
    console.log('play', track)
  },

  stop() {
    console.log('stop')
  },
}

// function MusicPlayer() {
//   this.playing = false
//   events.EventEmitter.call(this)
// }

// util.inherits(MusicPlayer, events.EventEmitter)

// 音乐播放器
class MusicPlayer extends EventEmitter {
  constructor() {
    super()
    this.playing = false
  }
}

const musicPlayer = new MusicPlayer()

/* eslint func-names: 0 */
musicPlayer.on('play', function (track) {
  this.playing = true
  AudioDevice.play(track)
})

musicPlayer.on('stop', function () {
  this.playing = false
  AudioDevice.stop()
})

musicPlayer.emit('play', 'The Roots - The Fire')

setTimeout(() => {
  musicPlayer.emit('stop')
}, 1000)
