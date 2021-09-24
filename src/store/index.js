import { createStore, applyMiddleware } from 'redux'
import AsyncStorage from '@react-native-community/async-storage'
import { createLogger } from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import reducers from './ducks'

const persistConfig = {
  key: 'root',
  storage
}

const logger = createLogger({ collapsed: true })

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)

const rootReducer = (state, action) => reducers(state, action)

const persistedReducer = persistReducer(persistConfig, rootReducer)

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const store = createStoreWithMiddleware(persistedReducer)
  const persistor = persistStore(store)
  return { store, persistor }
}
