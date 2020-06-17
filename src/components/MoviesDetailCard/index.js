import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { findIndex as lodashfindIndex } from 'lodash/array'
import { DisplayFlex } from '../../styles/commonStyle'
import { MoviesCardStyle } from './index.style'
import { DUMMY_POSTER, SAVE_CONTENT, SAVED_CONTENT } from '../../images'
import { saveToCookie, getFromCookie } from '../../utility/cookies'
import { SAVE_MY_CONTENT, SAVE_MY_WATCHED } from '../../constants/cookies'

class MoviesDetailCard extends Component {
  static propTypes = {
    movie: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {
      savedFromCookies: getFromCookie(SAVE_MY_CONTENT) || []
    }
  }

  handleToSaveMyContent = (isSaved) => {
    let data = []
    const { movie } = this.props
    let { savedFromCookies = [] } = this.state
    if (isSaved) {
      this.removeMovieFromData(savedFromCookies, movie)
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

  handleToWatched = () => {
    const { movie } = this.props
    saveToCookie(SAVE_MY_WATCHED, movie)
    this.removeMovieFromData(this.state.savedFromCookies, movie)
  }

  removeMovieFromData = (savedFromCookies, movie) => {
    const findIndex = lodashfindIndex(savedFromCookies, movie)
    savedFromCookies.splice(findIndex, 1)
    saveToCookie(SAVE_MY_CONTENT, savedFromCookies)
    this.setState({
      savedFromCookies
    })
  }

  render() {
    const { movie = {}, showWatched = false } = this.props
    const { savedFromCookies } = this.state
    const isSaved = lodashfindIndex(savedFromCookies, movie) < 0 ? false : true
    return (
      <MoviesCardStyle imgUrl={movie.Poster.includes('http') ? movie.Poster : DUMMY_POSTER} title={movie.Title}>
        <div className='bottom-strip'>
          <DisplayFlex justify='space-between' align='center'>
            <div className='movie-title'>{movie.Title}</div>
          </DisplayFlex>          
          <DisplayFlex align='center' justify='space-between'>
            <DisplayFlex align='center'>
              <span className='movie-subdetail'>{movie.Type}</span>
              &nbsp;&bull;&nbsp;
              <span className='movie-subdetail'>{movie.Year}</span>
              {
                showWatched && (
                  <>
                  &nbsp;&bull;&nbsp;
                    <span onClick={this.handleToWatched} className='add-to-watched' title='Add To Watched'>+</span>
                  </>
                )
              }
            </DisplayFlex>
            <div onClick={() => this.handleToSaveMyContent(isSaved)}>
              <img src={isSaved ? SAVED_CONTENT : SAVE_CONTENT} alt='Save Content' width={isSaved ? '11px' : '20px'} />
            </div>
          </DisplayFlex>
        </div>
      </MoviesCardStyle>
    )
  }
}

export default MoviesDetailCard
