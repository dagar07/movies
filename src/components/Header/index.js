import React, { Component } from 'react'
import { HeaderStyle } from './index.style'
import Profile from '../Profile'

class Header extends Component {
  render () {
    return (
      <HeaderStyle>
        <div>Movies</div>
        <Profile />
      </HeaderStyle>
    )
  }
}

export default Header
