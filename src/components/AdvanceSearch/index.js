import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AdvanceSearchStyle }  from './index.style'
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'
import { generateYearRange } from '../../utility/helper'
import { DisplayRCC } from '../../styles/commonStyle'

class AdvanceSearch extends Component {
  static propTypes = {
    onSearch: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = {
      year: '',
      genre: '',
      title: ''
    }

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

  handleSelectChange = (e, type) => {
    // handle search change
    this.setState({
      [type]: e.target.value
    })
  }

  handleSearchInput = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleSearch = () => {
    // handle search function here
    const obj = {}
    if (this.state.title) {
      obj.s = this.state.title
    }

    if (this.state.genre) {
      obj.type = this.state.genre
    }

    if (this.state.year) {
      obj.y = this.state.year
    }
    this.props.onSearch(obj)
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
          onChange={(e) => this.handleSelectChange(e, 'year')}
          placeholder='Select Year'
          data={this.yearRange}
          className='advance-input'
        />
        <Select
          onChange={(e) => this.handleSelectChange(e, 'genre')}
          placeholder='Select Genre'
          data={this.genre}
          className='advance-input'
        />
        <DisplayRCC>
          <Button onClick={this.handleSearch} className='advance-search-btn'>
            Search
          </Button>
        </DisplayRCC>
      </AdvanceSearchStyle>
    )
  }
}

export default AdvanceSearch
