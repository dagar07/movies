import actions from './actions'
const initState = {}

export default function loadingReducer (state = initState, action) {
  const { payload } = action
  switch (action.type) {
    case actions.UPDATE_LOADING_STATES:
      return {
        ...state,
        ...action.target
      }
    case actions.RESET_LOADING_STATES:
      if (payload && Array.isArray(payload)) {
        const stateToBeReset = {}
        payload.forEach(key => {
          stateToBeReset[key] = initState[key]
        })
        return {
          ...state,
          ...stateToBeReset
        }
      } else {
        return {
          ...state
        }
      }
    default:
      return state
  }
}
