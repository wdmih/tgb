module.exports = class Managers {
  constructor () {
    this.managers = []
  }

  getManagers () {
    return this.managers
  }

  addManager (man) {
    this.managers.push(man)
  }

  removeManager (chatIndex) {
    this.managers.splice(chatIndex, 1)
  }

  findUser (ctx) {
    return this.managers.find((chat) => {
      return chat.id === ctx.chat.id
    })
  }

  findUserIndex (ctx) {
    return this.managers.findIndex((chat) => {
      return chat.id === ctx.chat.id
    })
  }
}
