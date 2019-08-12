import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Message extends Component {
  static propTypes = {
    messageType: PropTypes.string,
    operatorName: PropTypes.string,
    messageText: PropTypes.string
  }
  constructor (props) {
    super(props)
  }
  render () {
    let { messageType, operatorName, messageText } = this.props
    return (
      <div className={`chat-message-wrap ${messageType === 'client' ? 'chat-message-wrap--client' : 'chat-message-wrap--server'}`}>
        <div className="chat-message__author"><span>{messageType === 'client' ? 'You:' : `${operatorName}:` }</span></div>
        <div className="chat-message">{messageText}</div>
      </div>
    )
  }
}
