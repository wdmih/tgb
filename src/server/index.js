const express = require('express')
const app = express()
const server = require('http').Server(app)
const bot = require('./bot/bot')
const io = require('socket.io')(server)

const { haveConnected, receiveMsg } = require('./io/handlers')

io.on('connection', (client) => {
  haveConnected(client)
  client.on('message from client', (msg) => receiveMsg(msg))
})

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 8080

app.set('port', port)
app.use(express.static('dist'))

bot.launch()
server.listen(port, host, () => console.log(`Listening on port ${port}!`))
