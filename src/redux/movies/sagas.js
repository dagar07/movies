import { all, takeEvery, put, fork, call } from 'redux-saga/effects'
import actions from './actions'
import { getRequest } from '../../service'
import { MOVIE_API } from '../../constants/apiUrls'

export function * getMovieSaga () {
  // send query params to get the details on basis of query like pagenation, search strings
  yield takeEvery(actions.GET_MOVIE_REQUEST, function * ({ payload }) {
    try {
      const res = yield call(getRequest, { params: payload, url: MOVIE_API })
      if (res) {
        yield put({
          type: actions.GET_MOVIE_SUCCESS,
          data: res.data,
          message: 'success'
        })
      } else {
        yield put({
          type: actions.GET_MOVIE_FAILURE,
          data: res.messge
        })
      }
    } catch (res) {
      yield put({
        type: actions.GET_MOVIE_FAILURE,
        data: res.status
      })
    }
  })
}

export default function * rootSaga () {
  yield all([
    fork(getMovieSaga)
  ])
}
