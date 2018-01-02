import { EventEmitter } from 'events'

class MusicPlayer extends EventEmitter {
  constructor() {
    super()
    this.playing = false
  }
}

const musicPlayer = new MusicPlayer()

function play(track) {
  console.log(track)
  this.playing = true
}

musicPlayer.on('play', play)

musicPlayer.emit('play', 'The Roots - The Fire')

musicPlayer.removeListener('play', play)
