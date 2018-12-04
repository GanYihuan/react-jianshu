import { fromJS } from 'immutable'
import axios from 'axios'
import * as constants from './constants'

const changeList = data => ({
  type: constants.CHANGE_LIST,
  // changeform imutable array
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
})

export const changePage = page => ({
  type: constants.CHANGE_PAGE,
  page
})

// redux-thunk may actionCreator write func
export const getList = () => {
  return dispatch => {
    axios
      .get('/api/headerList.json')
      .then(res => {
        const data = res.data
        dispatch(changeList(data.data))
      })
      .catch(() => {
        console.log('error')
      })
  }
}
