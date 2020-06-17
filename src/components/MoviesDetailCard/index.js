import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DisplayFlex } from '../../styles/commonStyle'
import { MoviesCardStyle } from './index.style'
import { DUMMY_POSTER } from '../../images'

class MoviesDetailCard extends Component {
  static propTypes = {
    movie: PropTypes.object
  }

  render() {
    const { movie = {} } = this.props
    
    return (
      <MoviesCardStyle imgUrl={movie.Poster.includes('http') ? movie.Poster : DUMMY_POSTER} title={movie.Title}>
        <div className='bottom-strip'>
          <div className='movie-title'>{movie.Title}</div>
          <DisplayFlex align='center'>
            <span className='movie-subdetail'>{movie.Type}</span>
            &nbsp;&bull;&nbsp;
            <span className='movie-subdetail'>{movie.Year}</span>
          </DisplayFlex>
        </div>
      </MoviesCardStyle>
    )
  }
}

export default MoviesDetailCard
