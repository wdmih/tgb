import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Message extends Component {
  static propTypes = {
    message: PropTypes.object
  }
  constructor (props) {
    super(props)
  }
  render () {
    let { message } = this.props
    return (
      <div className={`chat-message-wrap ${message.from === 'client' ? 'chat-message-wrap--client' : 'chat-message-wrap--server'}`}>
        <div className="chat-message__author"><span>{message.from === 'client' ? 'You:' : `${message.from}:` }</span></div>
        <div className="chat-message">{message.message}</div>
      </div>
    )
  }
}
