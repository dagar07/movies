import actions, { getView } from './actions'

const initState = {
  view: getView(window.innerWidth),
  height: window.innerHeight,
  openDrawer: false
}

export default function appReducer (state = initState, action) {
  switch (action.type) {
    case actions.TOGGLE_ALL:
      if (state.view !== action.view || action.height !== state.height) {
        const height = action.height ? action.height : state.height
        return {
          ...state,
          collapsed: action.collapsed,
          view: action.view,
          height: height
        }
      }
      break
    default:
      return state
  }
}
