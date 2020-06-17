import React, { Component } from 'react'
import Layout from '../../components/Layout'
import { connect } from 'react-redux'
import { HomeStyle } from './index.style'
import Search from '../../components/Search'
import Loader from '../../components/Loader'
import movieActions from '../../redux/movies/actions'
import { getQueryString } from '../../utility/helper'

const { getMovies, resetMoviesStore } = movieActions

class Home extends Component {

  constructor(props) {
    super(props)
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
    this.searchData = data
    this.props.getMovies(data)
  }

  render () {
    const { moviesLoader } = this.props
    return (
      <Layout>
        <Loader isLoader={moviesLoader}>
          <HomeStyle>
            <div className='home-title'>
              Welcome To Movie Night
            </div>
            <Search onSearhAction={this.handleSearchAction} />
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
