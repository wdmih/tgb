const bot = require('../bot/bot')
const activeManagers = require('../bot/Managers')

const io = global.io

io.on('connection', (client) => {
  console.log('io connected')
  client.on('message from client', (msg) => {
    const managers = activeManagers.getManagers()
    managers.forEach((chat, i) => {
      bot.telegram.sendMessage(chat.id, `Client ${client.id}:\n${msg.message}`)
    })
  })
})
