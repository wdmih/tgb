const config = require('../../config.json')
const Telegraf = require('telegraf')

const bot = new Telegraf(config.apiKey)

let activeUsers = []

function findUser(arr, ctx) {
  return arr.find((i)=> {
    return i.id === ctx.chat.id
  })
}

bot.start((ctx) => ctx.reply('Welcome! Please send your status \n /online \n /offline'))
bot.command('online', (ctx) => {
  if (!findUser(activeUsers, ctx)) {
    activeUsers.push(ctx.chat)
    ctx.reply('OK! Now you will receive messages from site')
  } else {
    ctx.reply('You already online')
  }
})

bot.command('offline', (ctx) => {
  let userIndex = activeUsers.findIndex((i) => {
    return i.id === ctx.chat.id
  })
  if (userIndex > -1) {
    activeUsers.splice(userIndex, 1);
    ctx.reply('OK! Now you disconected from site')
  } else {
    ctx.reply('You already offline')
  }
})

bot.command('status', (ctx)=> {
  if(findUser(activeUsers, ctx)) {
    ctx.reply('Your status - ONLINE')
  } else {
    ctx.reply('Your status - OFFLINE')
  }
})

module.exports = bot
