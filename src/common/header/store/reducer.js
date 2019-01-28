import { fromJS } from 'immutable'
import * as constants from './constants'

/* imutable obj can't modify */
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  /* imutable array */
  list: [],
  page: 1,
  totalPage: 1
})

/* reduxer can't change origin state, immutable.js help you */
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      /* set(): immutable func */
      return state.set('focused', true)
    case constants.SEARCH_BLUR:
      return state.set('focused', false)
    case constants.CHANGE_LIST:
      /* merge(): imutable func, at the same time change multi content */
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case constants.CHANGE_PAGE:
      /* action.page: actionCreator data */
      return state.set('page', action.page)
    default:
      return state
  }
}
