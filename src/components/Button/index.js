import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ButtonStyleWrapper } from './index.style'

class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
  }

  render() {
    const { children, onClick, disabled, className } = this.props
    return (
      <ButtonStyleWrapper
        className={className}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </ButtonStyleWrapper>
    )
  }
}

export default Button
