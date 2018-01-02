import { EventEmitter } from 'events'

const e = {
  play: 'play',
  pause: 'pause',
  stop: 'stop',
  ff: 'ff',
  rw: 'rw',
  addTrack: 'add-track',
}

class MusicPlayer extends EventEmitter {
  constructor() {
    super()
    this.events = e
    this.on(this.events.play, this.play.bind(this))
  }

  play() {
    this.playing = true
  }
}

const musicPlayer = new MusicPlayer()

musicPlayer.on(e.play, () => {
  console.log('Now playing')
})

musicPlayer.emit(e.play)
