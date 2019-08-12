const express = require('express')
const bot = require('./bot/bot')
const io = require('./io')

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 8080

app.set('port', port)
app.use(express.static('dist'))

io.listen(port)
bot.launch()
app.listen(port, host, () => console.log(`Listening on port ${port}!`))
