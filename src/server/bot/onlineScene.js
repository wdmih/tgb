const Stage = require('telegraf/stage')
const Scene = require('telegraf/scenes/base')
const { leave } = Stage
const { setOnline, setOffline, showHelp, checkStatus } = require('./commands')

const online = new Scene('online')

online.enter((ctx) => setOnline(ctx))
online.leave((ctx) => setOffline(ctx))
online.hears('Offline', leave())
online.hears('Help', (ctx) => showHelp(ctx))
online.hears('Status', (ctx) => checkStatus(ctx))

online.on('message', (ctx) => global.io.emit('message to client', ctx.message.text))

module.exports = online
