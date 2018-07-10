
import { EventEmitter } from 'events'
// import util from 'util'

// function MusicPlayer() {
//   events.EventEmitter.call(this)
// }
// util.inherits(MusicPlayer, events.EventEmitter)

class MusicPlayer extends EventEmitter {
  constructor() {
    super()
    // this.playing = false
  }
}

