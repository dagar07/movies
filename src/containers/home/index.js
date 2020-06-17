import React, { Component } from 'react'
import Layout from '../../components/Layout'
import { connect } from 'react-redux'
import { HomeStyle } from './index.style'
import Search from '../../components/Search'
import Loader from '../../components/Loader'

class Home extends Component {

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
    moviesLoader: state.Loading.GET_MOVIE
  }),
  {}
)(Home)
