const loadingActions = {
  UPDATE_LOADING_STATES: 'UPDATE_LOADING_STATES',
  RESET_LOADING_STATES: 'RESET_LOADING_STATES',
  resetLoadingRedux: payload => ({
    type: loadingActions.RESET_LOADING_STATES,
    payload
  })
}

export default loadingActions
