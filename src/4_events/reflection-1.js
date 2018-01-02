import { EventEmitter } from 'events'
// const events = require('events')
// const util = require('util')

// function EventTracker() {
//   events.EventEmitter.call(this)
// }

// util.inherits(EventTracker, events.EventEmitter)

class EventTracker extends EventEmitter {

}

const eventTracker = new EventTracker()

eventTracker.on('newListener', (name, listener) => {
  console.log('Event name added:', name, listener)
})

eventTracker.on('a listener', () => {
  // This will cause 'newListener' to fire
})
