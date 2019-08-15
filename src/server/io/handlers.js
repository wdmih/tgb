const bot = require('../bot/bot')
const activeManagers = require('../bot/Mangers')

module.exports = {
  haveConnected: (client) => {
    console.log('io connected')
  },
  receiveMsg: (msg) => {
    let managers = activeManagers.getManagers()
    managers.forEach((chat, i) => {
      bot.telegram.sendMessage(chat.id, `<i>Client:</i>\n${msg.message}`)
    })
  }
}
