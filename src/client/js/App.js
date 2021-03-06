import React, { Component } from 'react'

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

  toggleChat = () => {
    this.setState((state) => {
      return { active: !state.active }
    })
  }

  render () {
    const { active } = this.state
    return (
      <div className="chat-app">
        { active ? <Chat/> : ''}
        <ActivationButton toggleChat={this.toggleChat} chatState={this.state.active} />
      </div>
    )
  }
}
