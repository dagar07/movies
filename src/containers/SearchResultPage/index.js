import React, { Component } from 'react'
import Layout from '../../components/Layout'
import { connect } from 'react-redux'
import movieActions from '../../redux/movies/actions'
import { SearhResultStyle, PagenationContainer } from './index.style'
import { getDataFromPropsState } from '../../utility/helper'
import MoviesDetailCard from '../../components/MoviesDetailCard'
import Pagination from '../../components/Pagination'

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

  handlePageChange = (e) => {
    this.setState({
      selected: e.selected
    })
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
        <PagenationContainer>
          <Pagination onPageChange={this.handlePageChange} totalPages={10} />
        </PagenationContainer>
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
