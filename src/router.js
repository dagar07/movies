import React, { lazy, Suspense } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Route, Redirect, Switch, Router } from 'react-router-dom'
import { COLOR } from './styles/colors'

const APP_ROUTES = {
  home: lazy(() => import('./containers/home'))
}

// const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => {
//   return (
//     <Route
//       exact
//       {...rest}
//       render={props => {
//         return isLoggedIn ? (<Component {...props} />)
//           : (
//             <Redirect
//               to={{
//                 pathname: '/login',
//                 state: {
//                   from: props.location.pathname
//                 }
//               }}
//             />
//           )
//       }}
//     />
//   )
// }

function AppRoutes ({ history, isLoggedIn }) {
  return (
    <Router history={history}>
      <ThemeProvider theme={COLOR}>
        <Suspense fallback='Loading...'>
          <Switch>
            <Route exact path='/' component={APP_ROUTES.home} />
            {/* <RestrictedRoute path='/user/list' component={APP_ROUTES.userList} isLoggedIn={isLoggedIn} /> */}
            <Redirect to='/' />
          </Switch>
        </Suspense>
      </ThemeProvider>
    </Router>
  )
}

export default connect(
  state => ({}),
  {}
)(AppRoutes)
