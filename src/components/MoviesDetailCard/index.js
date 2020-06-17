import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DisplayFlex } from '../../styles/commonStyle'
import { MoviesCardStyle } from './index.style'

class MoviesDetailCard extends Component {
  static propTypes = {
    movie: PropTypes.object
  }

  render() {
    const { movie = {} } = this.props
    return (
      <MoviesCardStyle imgUrl={movie.Poster}>
        <div className='bottom-strip'>
          <div className='movie-title'>{movie.Title}</div>
          <DisplayFlex>
            <span className='movie-subdetail'>{movie.Year}</span>
            <span className='movie-subdetail'>{movie.type}</span>
          </DisplayFlex>
        </div>
      </MoviesCardStyle>
    )
  }
}

export default MoviesDetailCard
