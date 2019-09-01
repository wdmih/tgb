// TODO:
// 1) Need logic to store client id for private messaging
// 2) Need fix keyboard when manager didn`t stop session before quit from chat
// 3) Client notification of active managers

const express = require('express')
const app = express()
const server = require('http').Server(app)
const bot = require('./bot/bot')
global.io = require('socket.io')(server)

require('./io/handlers')

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 8080

app.set('port', port)
app.use(express.static('dist'))

bot.launch()
server.listen(port, host, () => console.log(`Listening on port ${port}!`))
