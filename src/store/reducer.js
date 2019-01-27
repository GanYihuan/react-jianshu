import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION
} from './actionTypes'

const defaultState = {
  inputValue: 'hello',
  list: [1, 2]
}

/* state: previous Store save data */
/* action: Store pass to Reducer `actionTypes` */
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    /* copy, because Reducer accept state, can't modify state */
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    /* return to Store */
    return newState
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  if (action.type === INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data
    return newState
  }
  return state
}
