import { all } from 'redux-saga/effects'
import appSagas from './app/sagas'
import MovieSaga from './movies/sagas'
// import userSagas from './users/saga'

export default function * rootSaga () {
  yield all([
    appSagas(),
    MovieSaga()
    // userSagas()
  ])
}
