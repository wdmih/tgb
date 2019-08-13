module.exports = {
  haveConnected: (client) => {
    console.log('io connected')
  },
  receiveMsg: (msg) => {
    console.log(msg)
  }
}
