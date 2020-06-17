import React, { Component } from 'react'
import Layout from '../../components/Layout'
import { connect } from 'react-redux'
import movieActions from '../../redux/movies/actions'
import { HomeStyle } from './index.style'
import Search from '../../components/Search'
import Loader from '../../components/Loader'

const { getMovies } = movieActions

class Home extends Component {
  componentDidMount () {
    this.props.getMovies({
      t: 'race'
    })
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
            <Search />
          </HomeStyle>
        </Loader>
      </Layout>
    )
  }
}

export default connect(
  state => ({
    moviesList: state.Movie.moviesData,
    moviesLoader: state.Loading.GET_MOVIE
  }),
  {
    getMovies
  }
)(Home)
