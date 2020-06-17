import React, { Component } from 'react'
import Layout from '../../components/Layout'
import { connect } from 'react-redux'
import movieActions from '../../redux/movies/actions'
import { SearhResultStyle, PagenationContainer } from './index.style'
import { getDataFromPropsState, getQueryString, getObjFromQueryString } from '../../utility/helper'
import MoviesDetailCard from '../../components/MoviesDetailCard'
import Pagination from '../../components/Pagination'
import Loader from '../../components/Loader'

const { getMovies, resetMoviesStore } = movieActions

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

  componentWillReceiveProps (nextProps) {
    const { movieStatus, moviesData, resetMoviesStore } = nextProps
    if (movieStatus === 'success') {
      this.setState({
        moviesData
      })
      resetMoviesStore(['movieStatus'])
    }
  }

  handlePageChange = (e) => {
    this.setState({
      selectedPage: (e.selected + 1)
    }, () => {
      const obj = getObjFromQueryString(window.location.search)
      this.props.getMovies({
        ...obj,
        page: this.state.selectedPage
      })
    })
  }

  render () {
    const { moviesData } = this.state
    const { Search: searchData = [], totalResults = 0} = moviesData
    return (
      <Layout>
        <Loader isLoader={this.props.moviesLoading}>
          <SearhResultStyle>
            {
              searchData.map(item => (
                <MoviesDetailCard key={item.imdbID} movie={item} />
              ))
            }
          </SearhResultStyle>
          <PagenationContainer>
            <Pagination onPageChange={this.handlePageChange} totalPages={Math.ceil(totalResults/10)} />
          </PagenationContainer>
        </Loader>
      </Layout>
    )
  }
}

export default connect(
  state => ({
    movieStatus: state.Movie.movieStatus,
    moviesData: state.Movie.moviesData,
    moviesLoading: state.Loading.GET_MOVIE
  }),
  {
    getMovies,
    resetMoviesStore
  }
)(SearhResultPage)
