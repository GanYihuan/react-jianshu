import { 
  // compose,
  // applyMiddleware,
  createStore
} from 'redux'
import reducer from './reducer'
/* redux-thunk */
// import thunk from 'redux-thunk'
/* redux-saga */
// import createSagaMiddleware from 'redux-saga'
// import todoSagas from './sagas'
/* react-redux */
// import { createStore } from 'redux'
// import reducer from './reducer'

/* redux Browser tool configuration */
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

/* redux-thunk */
// const enhancer = composeEnhancers(applyMiddleware(thunk))
/* redux-saga */
// const sagaMiddleware = createSagaMiddleware()
// const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

// const store = createStore(reducer, enhancer)

/* redux-saga */
// sagaMiddleware.run(todoSagas)

/* react-redux */
const store = createStore(reducer)

export default store
