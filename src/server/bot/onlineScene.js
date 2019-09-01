const Stage = require('telegraf/stage')
const Scene = require('telegraf/scenes/base')
const { leave } = Stage
const { setOnline, setOffline } = require('./commands')
const io = global.io

const online = new Scene('online')

online.enter((ctx) => setOnline(ctx))
online.leave((ctx) => setOffline(ctx))
online.command('offline', leave())

online.on('message', (ctx) => io.emit('message to client', ctx.message.text))

module.exports = online
