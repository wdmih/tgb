const io = require('socket.io')()

io.on('connection', (client) => {
  console.log('io connected')
})

module.exports = io
