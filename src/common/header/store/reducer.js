import * as constants from './constants'
import { fromJS } from 'immutable'

// imutable obj
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  // imutable array
  list: [],
  page: 1,
  totalPage: 1
})

// reduxer can't change origin state, return new state
// immutable.js can achieve
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      // set(): immutable func, combine before immutable obj value and set value, return new data
      return state.set('focused', true)
    case constants.SEARCH_BLUR:
      return state.set('focused', false)
    case constants.CHANGE_LIST:
      // merge(): immutable func, Simultaneously change multi content
      return state.merge({
        // **actionCreator.js** transform imutable array, data: fromJS(data)
        list: action.data,
        totalPage: action.totalPage
      })
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case constants.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }
}
