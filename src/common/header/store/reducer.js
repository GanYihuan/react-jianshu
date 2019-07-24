import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({ // imutable obj can't modify
  focused: false,
  mouseIn: false,
  list: [], // imutable array
  page: 1,
  totalPage: 1
})

export default (state = defaultState, action) => { // reduxer can't change origin state, immutable.js help you
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set('focused', true) // set(): immutable func
    case constants.SEARCH_BLUR:
      return state.set('focused', false)
    case constants.CHANGE_LIST:
      return state.merge({ // merge(): imutable func, at the same time change multi content
        list: action.data,
        totalPage: action.totalPage
      })
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case constants.CHANGE_PAGE:
      return state.set('page', action.page) // action.page: actionCreator pass data
    default:
      return state
  }
}
