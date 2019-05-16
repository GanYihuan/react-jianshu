import {
  compose,
  applyMiddleware,
  createStore
} from 'redux'
import reducer from './reducer'

import thunk from 'redux-thunk' // redux-thunk
// import createSagaMiddleware from 'redux-saga'
// import todoSagas from './sagas' // redux-saga

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // redux Browser tool

const enhancer = composeEnhancers(applyMiddleware(thunk)) // redux-thunk
// const sagaMiddleware = createSagaMiddleware() // redux-saga
// const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware)) // redux-saga

const store = createStore(reducer, enhancer) // redux-thunk & redux-saga
// const store = createStore(reducer) // react-redux

// sagaMiddleware.run(todoSagas) // redux-saga

export default store
