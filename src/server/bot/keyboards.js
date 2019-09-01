const Markup = require('telegraf/markup')

module.exports = {
  onlineKeyboard: () => {
    return Markup.keyboard([Markup.button('/online')]).oneTime().resize().extra()
  },
  offlineKeyboard: () => {
    return Markup.keyboard([Markup.button('/offline')]).oneTime().resize().extra()
  }
}
