const activeManagers = require('./Mangers')

module.exports = {
  welcome: (ctx) => {
    ctx.reply('Welcome! Please send your status \n /online \n /offline')
  },
  setOnline: (ctx) => {
    if (!activeManagers.findUser(ctx)) {
      activeManagers.addManager(ctx.chat)
      ctx.reply('OK! Now you will receive messages from site')
    } else {
      ctx.reply('You already online')
    }
  },
  setOffline: (ctx) => {
    let index = activeManagers.findUserIndex(ctx)
    if (index > -1) {
      activeManagers.removeManager(index)
      ctx.reply('OK! Now you disconected from site')
    } else {
      ctx.reply('You already offline')
    }
  },
  checkStatus: (ctx) => {
    if (activeManagers.findUser(ctx)) {
      ctx.reply('Your status - ONLINE')
    } else {
      ctx.reply('Your status - OFFLINE')
    }
  }
}
