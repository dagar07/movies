import React, { Component } from 'react'
import { LoaderStyle } from './index.style'

class Loader extends Component {
  render () {
    const { isLoader, children, size, className } = this.props
    // size = small | medium
    return (
      <LoaderStyle size={size || 'medium'} className={className}>
        {
          isLoader && (
            <div className='loader-container'>
              <div className='loader' />
            </div>
          )
        }
        {children}
      </LoaderStyle>
    )
  }
}

export default Loader
