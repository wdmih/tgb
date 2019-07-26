const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const bot = require('./bot/index')
const bus = require('./events/index')

const newMessageEvent = 'new-message'

app.get('/', (req, res) => {
  res.sendFile('../client/index.html');
});

io.on('connection', ()=> {
  console.log('io connected')
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
app.listen(3000, ()=> {
  console.log(`Server is running on port 3000`)
})