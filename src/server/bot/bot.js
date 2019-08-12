const config = require('config')
const Telegraf = require('telegraf')
const Managers = require('./Mangers')

const activeManagers = new Managers()

const apiKey = config.get('Telegraf.apiKey')

const bot = new Telegraf(apiKey)

// Bot welcome command
bot.start((ctx) => ctx.reply('Welcome! Please send your status \n /online \n /offline'))

// Bot command to acive user. Activated user will receive messages from site
bot.command('online', (ctx) => {
  if (!activeManagers.findUser(ctx)) {
    activeManagers.addManager(ctx.chat)
    ctx.reply('OK! Now you will receive messages from site')
  } else {
    ctx.reply('You already online')
  }
})

// Bot command to deactivate user. Deactivated user can`t receice messages
bot.command('offline', (ctx) => {
  let index = activeManagers.findUserIndex(ctx)
  if (index > -1) {
    activeManagers.removeManager(index)
    ctx.reply('OK! Now you disconected from site')
  } else {
    ctx.reply('You already offline')
  }
})

// Check user status, active or not
bot.command('status', (ctx) => {
  if (activeManagers.findUser(ctx)) {
    ctx.reply('Your status - ONLINE')
  } else {
    ctx.reply('Your status - OFFLINE')
  }
})

// Show all active users
bot.command('showUsers', (ctx) => {
  if (activeManagers.getManagers().length) {
    activeManagers.getManagers().forEach((i) => ctx.reply(i.id))
  } else {
    ctx.reply('No active users')
  }
})

module.exports = bot
