import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreators'
import axios from 'axios'

function* getInitList() {
  try {
    const res = yield axios.get('/api/todolist')
    const action = initListAction(res.data)
    /* return to Store */
    yield put(action)
  } catch (e) {
    console.log('异步错误了！')
  }
}

/* generator func */
function* mySaga() {
  /* when accept 'GET_INIT_LIST', run getInitList */
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySaga
