import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SearchStyle } from './index.style'
import Input from '../Input'
import Button from '../Button'
import { connect } from 'react-redux'
import movieActions from '../../redux/movies/actions'

const { getMovies } = movieActions
class Search extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  state = {
    searchTitle: ''
  }

  componentDidMount () {

  }

  handleSearchInput = e => {
    this.setState({
      searchTitle: e.target.value
    })
  }

  handleSearchMovies = () => {
    const { searchTitle } = this.state
    if (searchTitle) {
      this.props.getMovies({
        s: searchTitle,
        type: 'movie'
      })
    }
  }

  render () {
    const { className } = this.props
    return (
      <SearchStyle classNme={className}>
        <Input
          onChange={this.handleSearchInput}
          placeholder='Movies, Episodes, and Series'
          className='search-input'
        />
        <Button className='search-btn' onClick={this.handleSearchMovies}>
          Search
        </Button>
      </SearchStyle>
    )
  }
}

export default connect(
  state => ({

  }),
  {
    getMovies
  }
)(Search)
