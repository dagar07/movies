import React from 'react'
import { Provider } from 'react-redux'
import { store, history } from './redux/store'
import AppRoutes from './router'
import AppContainer from './index.style'

const App = () => (
  <AppContainer>
    <Provider store={store}>
      <AppRoutes history={history} />
    </Provider>
  </AppContainer>
)

export default App
