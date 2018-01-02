import rabbitHub from 'rabbitmq-nodejs-client'

const subHub = rabbitHub.create({ task: 'sub', channel: 'myChannel' })
const pubHub = rabbitHub.create({ task: 'pub', channel: 'myChannel' })

subHub.on('connection', (hub) => {
  hub.on('message', (msg) => {
    console.log(msg)
  })
})
subHub.connect()

pubHub.on('connection', (hub) => {
  hub.send('Hello World!')
})
pubHub.connect()
