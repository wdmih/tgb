const config = require('config')
const Telegraf = require('telegraf')
const Stage = require('telegraf/stage')
const session = require('telegraf/session')
const onlineStage = require('./onlineScene')
const { welcome, checkStatus, showHelp } = require('./commands')

const apiKey = config.get('Telegraf.apiKey')

const bot = new Telegraf(apiKey)
const stage = new Stage([onlineStage])
bot.use(session())
bot.use(stage.middleware())

// Bot welcome command
bot.start((ctx) => welcome(ctx))
// Bot command to acive user. Activated user will receive messages from site
bot.hears('Online', (ctx) => ctx.scene.enter('online'))
// Show bot help
bot.hears('Help', (ctx) => showHelp(ctx))
bot.hears('Status', (ctx) => checkStatus(ctx))
bot.on('message', (ctx) => {
  if (!checkStatus(ctx)) {
    ctx.reply('Now you can`t send messages to clients')
  }
})

module.exports = bot
