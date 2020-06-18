import React, { Component } from 'react'
import Layout from '../../components/Layout'
import { isEmpty as lodashIsEmpty } from 'lodash/lang'
import { connect } from 'react-redux'
import { HomeStyle } from './index.style'
import Search from '../../components/Search'
import Loader from '../../components/Loader'
import movieActions from '../../redux/movies/actions'
import { getQueryString } from '../../utility/helper'
import AdvanceSearch from '../../components/AdvanceSearch'

const { getMovies, resetMoviesStore } = movieActions

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchText: 'Search By Year or Genre',
      advance: false
    }
    this.searchData = {}
  }

  componentWillReceiveProps (nextProps) {
    const { movieStatus, moviesData, resetMoviesStore } = nextProps
    if (movieStatus === 'success') {
      const queryString = getQueryString(this.searchData)
      this.props.history.push({
        pathname: `/search/?${queryString}`,
        state: {
          moviesData
        }
      })
      resetMoviesStore(['movieStatus'])
    }
  }

  handleSearchAction = (data) => {
    if (!lodashIsEmpty(data)) {
      this.searchData = data
      this.props.getMovies(data)
    }
  }

  handleToggleSearch = () => {
    this.setState(prevState => ({
      advance: !prevState.advance,
      searchText: !prevState.advance ? 'Search By Title' : 'Search By Year or Genre'
    }))
  }

  render () {
    const { moviesLoader } = this.props
    const { advance, searchText } = this.state
    return (
      <Layout>
        <Loader isLoader={moviesLoader}>
          <HomeStyle>
            <div className='home-title'>
              Welcome To Movie Night
            </div>
            {
              advance ? <AdvanceSearch onSearch={this.handleSearchAction} /> : 
              <Search onSearhAction={this.handleSearchAction} />
            }
            <div
              className='search-by'
              onClick={this.handleToggleSearch}
            >
              {searchText}
            </div>
          </HomeStyle>
        </Loader>
      </Layout>
    )
  }
}

export default connect(
  state => ({
    moviesLoader: state.Loading.GET_MOVIE,
    moviesData: state.Movie.moviesData,
    movieStatus: state.Movie.movieStatus
  }),
  {
    getMovies,
    resetMoviesStore
  }
)(Home)
