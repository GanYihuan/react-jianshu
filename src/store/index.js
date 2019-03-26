import {
  compose,
  applyMiddleware,
  createStore
} from 'redux'
import reducer from './reducer'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import todoSagas from './sagas'
// import { createStore } from 'redux' // react-redux

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // redux Browser tool configuration
// const enhancer = composeEnhancers(applyMiddleware(thunk)) // redux-thunk
const sagaMiddleware = createSagaMiddleware() // redux-saga
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
const store = createStore(reducer, enhancer)
sagaMiddleware.run(todoSagas)

// const store = createStore(reducer) // react-redux

export default store
