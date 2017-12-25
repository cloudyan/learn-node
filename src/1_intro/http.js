

function Server(requestListener) {
  net.Server.call(this, { allowHalfOpen: true })

  this.addListener('connection', connectionListener)
  this.addListener('clientError', function (err, conn) {
    conn.destroy(err)
  })
}

util.inherits(Server, net.Server)
