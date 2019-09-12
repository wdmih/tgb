const Markup = require('telegraf/markup')

module.exports = {
  mainKeyboard: () => {
    return Markup.keyboard([
      Markup.button('Online'),
      Markup.button('Offline'),
      Markup.button('Status'),
      Markup.button('Help')
    ]).resize().extra()
  },
  // offlineKeyboard: () => {
  //   return Markup.keyboard([Markup.button('/offline')]).oneTime().resize().extra()
  // }
}
