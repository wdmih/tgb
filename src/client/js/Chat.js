import React, { Component } from 'react'

import Message from './Message'

export default class Chat extends Component {
  render () {
    return (
      <div className="chat-container">
        <div className="chat-messages">
          <Message messageType="client" messageText="lorem ipsum sit dolor amet"/>
          <Message operatorName="Charlie Goo" messageText="lorem ipsum sit dolor amet"/>
        </div>
        <div className="chat-active-zone">
          <textarea className="chat-input" type="text" placeholder="type your question here..."/>
          <button className="chat-send">Send</button>
        </div>
      </div>
    )
  }
}
