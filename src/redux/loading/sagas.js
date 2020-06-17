import { all, takeEvery, fork, put } from 'redux-saga/effects'
import loadingActions from './actions'

export function * requestMonitor () {
  yield takeEvery('*', function * (payload) {
    const { type } = payload
    const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type)

    if (!matches) return

    const [, requestName, requestState] = matches
    yield put({
      type: loadingActions.UPDATE_LOADING_STATES,
      target: { [requestName]: requestState === 'REQUEST' }
    })
  })
}

export default function * rootSaga () {
  yield all([
    fork(requestMonitor)
  ])
}
