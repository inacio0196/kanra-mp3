import React from 'react'
import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/'

import Routes from './routes'
import configureStore from './store'

const { store, persistor } = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
        <Routes />
      {/* </PersistGate> */}
    </Provider>
  )
}

export default App
