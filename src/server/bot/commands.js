const keyboard = require('./keyboards')
const activeManagers = require('./Managers')

module.exports = {
  welcome: (ctx) => {
    ctx.reply('To start receive messages from your site press "/online" button, if you need help press send me /help command at any time',
      keyboard.onlineKeyboard())
  },
  setOnline: (ctx) => {
    if (!activeManagers.findUser(ctx)) {
      activeManagers.addManager(ctx.chat)
      ctx.reply('OK! Now you will receive messages from site, to stop session please press button "/offline" below or send me command /offline at any time you want',
        keyboard.offlineKeyboard())
    } else {
      ctx.reply('You already online')
    }
  },
  setOffline: (ctx) => {
    const index = activeManagers.findUserIndex(ctx)
    if (index > -1) {
      activeManagers.removeManager(index)
      ctx.reply('OK! Now you disconected from site',
        keyboard.onlineKeyboard())
    } else {
      ctx.reply('You already offline')
    }
  },
  showHelp: (ctx) => {
    ctx.reply('help will be soon')
  }
}
