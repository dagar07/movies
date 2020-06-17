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
    case actions.RESET_MOVIE_STORE: {
      const modifyState = JSON.parse(JSON.stringify(state))
      action.payload.forEach(key => {
        modifyState[key] = ''
      })
      return {
        ...state,
        ...modifyState
      }
    }
    default:
      return state
  }
}
