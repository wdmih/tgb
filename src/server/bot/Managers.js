class Managers {
  constructor () {
    this.managers = []
  }

  getManagers () {
    return this.managers
  }

  getFreeManagers () {
    return this.managers.filter((man) => {
      return man.isFree === true
    })
  }

  setManagerToFree (ctx) {
    const manager = this.findUser(ctx)
    manager.isFree = true
  }

  setManagerToBusy (ctx) {
    const manager = this.findUser(ctx)
    manager.isFree = false
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

const activeManagers = new Managers()

module.exports = activeManagers
