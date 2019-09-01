// TODO:
// 1) change logic that cleans user input
// 2) Add "from" info when receive message from server
// 3) Add scroll to last message in chat
// 4) Add notification when no active managers at this time
// 5) Add simple user registration to get user name before start chat

import React, { Component } from 'react'
import socket from './socket-client/socket-client'

import Message from './Message'

export default class Chat extends Component {
  constructor (props) {
    super(props)

    this.state = {
      input: '',
      message: {},
      chatMessages: [],
      client: socket()
    }

    this.sendMessage = this.sendMessage.bind(this)
    this.inputHandler = this.inputHandler.bind(this)
    this.keydownHandler = this.keydownHandler.bind(this)
  }

  componentDidMount () {
    document.addEventListener('keydown', this.keydownHandler)
    this.state.client.socket.on('message to client', (msg) => {
      this.addMsgToChat({
        timeStamp: new Date(),
        from: 'server',
        message: msg
      })
    })
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.keydownHandler)
  }

  inputHandler (e) {
    this.setState({ input: e.target.value })
  }

  keydownHandler (e) {
    if (e.keyCode === 13 && e.ctrlKey) this.sendMessage(e)
  }

  sendMessage (e) {
    e.preventDefault()
    this.setState({
      message: {
        timeStamp: new Date(),
        from: 'client',
        message: this.state.input
      }
    }, () => {
      this.state.client.sendMessage(this.state.message)
      this.addMsgToChat(this.state.message)
    })
  }

  addMsgToChat (msg) {
    this.setState(state => {
      const chatMessages = [...state.chatMessages, msg]
      return {
        chatMessages,
        input: ''
      }
    })
  }

  render () {
    const { chatMessages, input } = this.state
    return (
      <div className="chat-container">
        <div className="chat-messages">
          {chatMessages.length ? chatMessages.map((message, index) => (
            <Message key={index} message={message}/>
          )) : 'Have no messages yet'}
        </div>
        <div className="chat-active-zone">
          <textarea className="chat-input" type="text" value={input} onChange={(e) => this.inputHandler(e)} placeholder="type your question here..."/>
          <button className="chat-send" onClick={(e) => this.sendMessage(e)}>Send</button>
        </div>
      </div>
    )
  }
}
