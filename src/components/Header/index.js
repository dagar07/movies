import React, { Component } from 'react'
import { HeaderStyle } from './index.style'
import Profile from '../Profile'
import { withRouter } from 'react-router'



class Header extends Component {

  handleTitleClick = () => {
    this.props.history.push('/')
  }

  render () {
    return (
      <HeaderStyle>
        <div className='header-title' onClick={this.handleTitleClick}>Movies</div>
        <Profile />
      </HeaderStyle>
    )
  }
}

export default withRouter(Header)
