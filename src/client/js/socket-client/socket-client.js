import socketIOClient from 'socket.io-client'

export default function () {
  const socket = socketIOClient('http://localhost:8080')

  function sendMessage (msg) {
    socket.emit('message from client', msg)
  }

  return {
    sendMessage,
    socket
  }
}
