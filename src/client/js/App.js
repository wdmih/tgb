import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'

import ActivationButton from './ActivationButton'
import Chat from './Chat'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
    this.toggleChat = this.toggleChat.bind(this)
  }
  componentDidMount () {
    const socket = socketIOClient('http://localhost:8080')
  }
  toggleChat = () => {
    this.setState((state) => {
      return { active: !state.active }
    })
  }
  render () {
    let { active } = this.state
    return (
      <div className="chat-app">
        { active ? <Chat/> : ''}
        <ActivationButton toggleChat={this.toggleChat} chatState={this.state.active} />
      </div>
    )
  }
}
