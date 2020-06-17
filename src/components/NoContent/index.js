import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NoContentStyle } from './index.style'

class NoContent extends Component {
  static propTypes = {
    title: PropTypes.string
  }

  render() {
    return (
      <NoContentStyle>
        {this.props.title}
      </NoContentStyle>
    )
  }
}

export default NoContent
