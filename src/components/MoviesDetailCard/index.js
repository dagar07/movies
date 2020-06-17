import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { findIndex as lodashfindIndex } from 'lodash/array'
import { DisplayFlex } from '../../styles/commonStyle'
import { MoviesCardStyle } from './index.style'
import { DUMMY_POSTER, SAVE_CONTENT, SAVED_CONTENT } from '../../images'
import { saveToCookie, getFromCookie } from '../../utility/cookies'
import { SAVE_MY_CONTENT } from '../../constants/cookies'

class MoviesDetailCard extends Component {
  static propTypes = {
    movie: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {
      savedFromCookies: getFromCookie(SAVE_MY_CONTENT)
    }
  }

  handleToSaveMyContent = (isSaved) => {
    let data = []
    const { movie } = this.props
    let { savedFromCookies = [] } = this.state
    if (isSaved) {
      const findIndex = lodashfindIndex(savedFromCookies, movie)
      savedFromCookies.splice(findIndex, 1)
      saveToCookie(SAVE_MY_CONTENT, savedFromCookies)
      this.setState({
        savedFromCookies
      })
      return 
    } else {
      data = [movie]
    }
    
    if (savedFromCookies) {
      data = data.concat(savedFromCookies)
    }
    saveToCookie(SAVE_MY_CONTENT, data)
    this.setState(prevState => ({
      savedFromCookies: [
        ...prevState.savedFromCookies,
        ...data
      ]
    }))
  }

  render() {
    const { movie = {} } = this.props
    const { savedFromCookies } = this.state
    const isSaved = lodashfindIndex(savedFromCookies, movie) < 0 ? false : true
    return (
      <MoviesCardStyle imgUrl={movie.Poster.includes('http') ? movie.Poster : DUMMY_POSTER} title={movie.Title}>
        <div className='bottom-strip'>
          <div className='movie-title'>{movie.Title}</div>
          <DisplayFlex align='center' justify='space-between'>
            <div>
              <span className='movie-subdetail'>{movie.Type}</span>
              &nbsp;&bull;&nbsp;
              <span className='movie-subdetail'>{movie.Year}</span>
            </div>
            <div onClick={() => this.handleToSaveMyContent(isSaved)}>
              <img src={isSaved ? SAVED_CONTENT : SAVE_CONTENT} alt='Save Content' width={isSaved ? '11px' : '22px'} />
            </div>
          </DisplayFlex>
        </div>
      </MoviesCardStyle>
    )
  }
}

export default MoviesDetailCard
