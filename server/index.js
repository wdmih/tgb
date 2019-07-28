const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const {bot, activeUsers} = require('./bot/index')
const bus = require('./events/index')

app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html');
})

const newMessageEvent = 'new-message'


io.on('connection', (socket)=> {
  console.log('io connected')
  socket.on('site message', (msg)=> {
    activeUsers.forEach((i)=> {
      bot.telegram.sendMessage(i.id, msg)
    })
  })
})
// bot.hears('log', (ctx) => {
//   console.log(ctx.chat)
//   ctx.reply('ok, look to console')
// })

// bot.on('message', (ctx) => {
//   bus.emit(newMessageEvent, ctx)
// })

// bus.on(newMessageEvent, (ctx) => {
//   bot.telegram.sendMessage(ctx.chat.id, ctx.chat.id)
// })

// setTimeout(() => {
//   bus.emit(newMessageEvent, {chat: {
//     id: 220774382
//   }})
// }, 10000);


bot.launch()
// server.listen(80);
server.listen(3000, ()=> {
  console.log(`Server is running on port 3000`)
})