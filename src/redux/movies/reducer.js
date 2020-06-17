import actions from './actions'

const initState = {
  moviesData: [],
  movieStatus: ''
}

export default function authReducer (state = initState, action) {
  switch (action.type) {
    case actions.GET_MOVIE_SUCCESS:
    case actions.GET_MOVIE_FAILURE:
      return {
        ...state,
        movieStatus: action.message,
        moviesData: action.data
      }
    case actions.LOGOUT_SUCCESS:
    case actions.LOGOUT_FAILURE:
      return initState
    default:
      return state
  }
}
