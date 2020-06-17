const actions = {
  GET_MOVIE_REQUEST: 'GET_MOVIE_REQUEST',
  GET_MOVIE_SUCCESS: 'GET_MOVIE_SUCCESS',
  GET_MOVIE_FAILURE: 'GET_MOVIE_FAILURE',

  RESET_MOVIE_STORE: 'RESET_MOVIE_STORE',

  getMovies: payload => ({
    type: actions.GET_MOVIE_REQUEST,
    payload
  }),
  resetMoviesStore: payload => ({
    type: actions.RESET_MOVIE_STORE,
    payload
  })
}

export default actions
