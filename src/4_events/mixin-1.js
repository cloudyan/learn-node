import { EventEmitter } from 'events'

function MusicPlayer(track) {
  this.track = track
  this.playing = false

  /* eslint guard-for-in: 0 */
  for (const methodName in EventEmitter.prototype) {
    this[methodName] = EventEmitter.prototype[methodName]
  }
}

MusicPlayer.prototype = {
  toString() {
    if (this.playing) {
      return 'Now playing: ' + this.track
    } else {
      return 'Stopped'
    }
  },
}

const musicPlayer = new MusicPlayer('Girl Talk - Still Here')

musicPlayer.on('play', function play() {
  this.playing = true
  console.log(this.toString())
})

musicPlayer.emit('play')
