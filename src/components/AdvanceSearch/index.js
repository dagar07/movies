import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AdvanceSearchStyle }  from './index.style'
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'
import { generateYearRange } from '../../utility/helper'

class AdvanceSearch extends Component {
  static propTypes = {
    onSearch: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.genre = [
      {
        id: '',
        title: 'Select Genre'
      },
      {
        id: 'movie',
        title: 'Movie'
      },
      {
        id: 'series',
        title: 'Series'
      },
      {
        id: 'episode',
        title: 'Episodes'
      }
    ]
    this.yearRange = [
      {
        id: '',
        title: 'Select Year'
      },
      ...generateYearRange()
    ]
  }

  handleSelectChange = (e) => {
    // handle search change
    console.log(e)
  }

  handleSearch = () => {
    // handle search function here
    this.props.onSearch({})
  }

  render() {
    return (
      <AdvanceSearchStyle>
        <Input
          onChange={this.handleSearchInput}
          placeholder='Enter Title'
          className='advance-input'
        />
        <Select
          onChange={this.handleSelectChange}
          placeholder='Select Year'
          data={this.yearRange}
          className='advance-input'
        />
        <Select
          onChange={this.handleSelectChange}
          placeholder='Select Genre'
          data={this.genre}
          className='advance-input'
        />
        <Button onClic={this.handleSearch} className='advance-search-btn'>
          Search
        </Button>
      </AdvanceSearchStyle>
    )
  }
}

export default AdvanceSearch
