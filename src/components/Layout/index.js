import React, { Component } from 'react'
import Header from '../Header'
import { LayoutStyle } from './index.style'

class Layout extends Component {
  render () {
    const { className, children } = this.props
    return (
      <LayoutStyle className={className}>
        <Header />
        <div className='children-container'>
          {children}
        </div>
      </LayoutStyle>
    )
  }
}

export default Layout
