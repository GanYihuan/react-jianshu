import {
	CHANGE_INPUT_VALUE,
	ADD_TODO_ITEM,
	GET_INIT_LIST,
	INIT_LIST_ACTION,
	DELETE_TODO_ITEM
} from './actionTypes'
// import axios from 'axios'

export const getInputChangeAction = value => ({
	type: CHANGE_INPUT_VALUE,
	value
})

export const getAddItemAction = () => ({
	type: ADD_TODO_ITEM
})

export const getDeleteItemAction = index => ({
	type: DELETE_TODO_ITEM,
	index
})

export const initListAction = data => ({
	type: INIT_LIST_ACTION,
	data
})

// export const getTodoList = () => { // redux-thunk 中间件使 action 能返回函数, async
// 	return dispatch => {
// 		axios
// 			.get('/todolist.json')
// 			.then(res => {
// 				const data = res.data
// 				const action = initListAction(data)
// 				dispatch(action)
// 			})
// 			.catch(() => {
// 				alert('err')
// 			})
// 	}
// }

export const getInitList = () => ({ // redux-saga
	type: GET_INIT_LIST
})
