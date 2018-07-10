// 有时集成 EventEmitter 不是最好的方式，这时可以通过混合 EventEmitter
// 这时从 EventEmitter 继承的方法的替代方案
// 这种情况适用于当你有一个现成的类，并且不能简单的将 EventEmitter 继承时
// 通过 for-in 循环就足以将属性从一个原型对象copy到另一个上

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
