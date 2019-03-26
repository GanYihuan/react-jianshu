import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreators'
import axios from 'axios'

function* getInitList() {
  try {
    const res = yield axios.get('/api/todolist')
    const action = initListAction(res.data)
    yield put(action) // return to Store
  } catch (e) {
    console.log('异步错误了！')
  }
}

function* mySaga() { // generator func
  yield takeEvery(GET_INIT_LIST, getInitList) // when accept 'GET_INIT_LIST', run getInitList
}

export default mySaga
