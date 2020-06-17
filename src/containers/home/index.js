import React, { Component } from 'react'
import Layout from '../../components/Layout'
import { connect } from 'react-redux'
import movieActions from '../../redux/movies/actions'

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
        I am home
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
