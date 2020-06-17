import React, { Component } from 'react'
import Layout from '../../components/Layout'
import { connect } from 'react-redux'
import movieActions from '../../redux/movies/actions'
import { SearhResultStyle } from './index.style'
import { getDataFromPropsState } from '../../utility/helper'
import MoviesDetailCard from '../../components/MoviesDetailCard'

const { getMovies } = movieActions

class SearhResultPage extends Component {
  constructor (props) {
    super(props)
    const moviesData = getDataFromPropsState.call(this, 'moviesData') || []
    this.state = {
      moviesData
    }
  }

  componentDidMount () {
    if (!this.state.moviesData) {
      this.props.getMovies()
    }
  }

  render () {
    const { moviesData } = this.state
    const { Search: searchData = [] } = moviesData
    console.log(searchData)
    return (
      <Layout>
        <SearhResultStyle>
          {
            searchData.map(item => (
              <MoviesDetailCard key={item.imdbID} movie={item} />
            ))
          }
        </SearhResultStyle>
      </Layout>
    )
  }
}

export default connect(
  state => ({
    movieStatus: state.Movie.movieStatus,
    moviesLoading: state.Loading.GET_MOVIE
  }),
  {
    getMovies
  }
)(SearhResultPage)
