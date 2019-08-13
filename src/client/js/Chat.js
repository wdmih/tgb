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
  }
  inputHandler (e) {
    e.preventDefault()
    this.setState({ input: e.target.value })
  }
  sendMessage (e) {
    e.preventDefault()
    this.state.client.sendMessage(this.state.input)
    this.addMsgToChat()
  }
  addMsgToChat () {
    this.setState(state => {
      const chatMessages = [...state.chatMessages, {
        timeStamp: new Date(),
        from: 'client',
        msg: state.input
      }]
      return {
        chatMessages,
        input: ''
      }
    })
  }
  render () {
    let { chatMessages, input } = this.state
    return (
      <div className="chat-container">
        <div className="chat-messages">
          {chatMessages.length ? chatMessages.map((message, index) => (
            <Message key={index} message={message}/>
          )) : `Have no messages yet`}
        </div>
        <div className="chat-active-zone">
          <textarea className="chat-input" type="text" value={input} onChange={(e) => this.inputHandler(e)} placeholder="type your question here..."/>
          <button className="chat-send" onClick={(e) => this.sendMessage(e)}>Send</button>
        </div>
      </div>
    )
  }
}