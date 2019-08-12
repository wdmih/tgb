import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ActivationButton extends Component {
  static propTypes = {
    toggleChat: PropTypes.func,
    chatState: PropTypes.bool
  }
  constructor (props) {
    super(props)
  }
  render () {
    let { toggleChat, chatState } = this.props
    return (
      <div className="activation-button">
        <button
          onClick={() => toggleChat()}
          className={chatState ? 'active' : ''}
        >{chatState ? 'Close' : 'Contact us'}</button>
      </div>
    )
  }
}
