import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SearchStyle } from './index.style'
import Input from '../Input'
import Button from '../Button'

class Search extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const { className } = this.props
    return (
      <SearchStyle classNme={className}>
        <Input placeholder='Movies, Episodes, and Series' className='search-input' />
        <Button className='search-btn'>
          Search
        </Button>
      </SearchStyle>
    )
  }
}

export default Search
