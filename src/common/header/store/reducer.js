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
      /* set(): immutable func, according to before immutable obj value and set value, return new data */
      return state.set('focused', true)
    case constants.SEARCH_BLUR:
      return state.set('focused', false)
    case constants.CHANGE_LIST:
      /* list is imutable array, action.data is normal array, set() func list change to action.data got wrong */
      // return state.set('list', action.data)
      /* merge(): immutable func, at the same time change multi content */
      return state.merge({
        /* **actionCreator.js** transform imutable array, data: fromJS(data) */
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
