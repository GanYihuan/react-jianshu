import {
  createStore,
  compose,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // chrome devTool redux
const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore(reducer, enhancer)

export default store
