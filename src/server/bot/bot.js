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
bot.command('online', (ctx) => ctx.scene.enter('online'))
// Show bot help
bot.command('help', (ctx) => showHelp(ctx))

module.exports = bot
