import React, { Component } from 'react'
import socket from './socket-client/socket-client'

import Message from './Message'

export default class Chat extends Component {
  constructor (props) {
    super(props)

    this.state = {
      client: socket()
    }

    this.sendMessage = this.sendMessage.bind(this)
  }
  sendMessage (e) {
    e.preventDefault()
    this.state.client.sendMessage('message sample')
  }
  render () {
    return (
      <div className="chat-container">
        <div className="chat-messages">
          <Message messageType="client" messageText="lorem ipsum sit dolor amet"/>
          <Message operatorName="Charlie Goo" messageText="lorem ipsum sit dolor amet"/>
        </div>
        <div className="chat-active-zone">
          <textarea className="chat-input" type="text" placeholder="type your question here..."/>
          <button className="chat-send" onClick={(e) => this.sendMessage(e)}>Send</button>
        </div>
      </div>
    )
  }
}
