import React, { Component } from 'react'
import Layout from '../../components/Layout'
import { connect } from 'react-redux'
import movieActions from '../../redux/movies/actions'
import { HomeStyle } from './index.style'
import Search from '../../components/Search'

const { getMovies } = movieActions

class Home extends Component {
  componentDidMount () {
    this.props.getMovies({
      t: 'race'
    })
  }

  render () {
    return (
      <Layout>
        <HomeStyle>
          <div className='home-title'>
            Welcome To Movie World
          </div>
          <Search />
        </HomeStyle>
      </Layout>
    )
  }
}

export default connect(
  state => ({
    moviesList: state.Movie.moviesData
  }),
  {
    getMovies
  }
)(Home)
