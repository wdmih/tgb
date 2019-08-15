const config = require('config')
const Telegraf = require('telegraf')
const { welcome, setOnline, setOffline, checkStatus } = require('./commands')

const apiKey = config.get('Telegraf.apiKey')

const bot = new Telegraf(apiKey)

// Bot welcome command
bot.start((ctx) => welcome(ctx))

// Bot command to acive user. Activated user will receive messages from site
bot.command('online', (ctx) => setOnline(ctx))

// Bot command to deactivate user. Deactivated user can`t receice messages
bot.command('offline', (ctx) => setOffline(ctx))

// Check user status, active or not
bot.command('status', (ctx) => checkStatus(ctx))

module.exports = bot
