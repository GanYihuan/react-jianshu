import React, { Component } from 'react'
// import axios from 'axios'
import store from './store/index'
// import {
// 	CHANGE_INPUT_VALUE,
// 	ADD_TODO_ITEM,
// 	DELETE_TodoList_ITEM
// } from './store/actionTypes'
import {
	getInputChangeAction,
  getAddItemAction,
  // initListAction,
  // getTodoList,
  getInitList,
	getDeleteItemAction
} from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
    /* Store data change, func invoked */
    store.subscribe(this.handleStoreChange)
  }

	render() {
		return (
			<TodoListUI
				list={this.state.list}
				inputValue={this.state.inputValue}
				handleInputChange={this.handleInputChange}
				handleBtnClick={this.handleBtnClick}
				handleItemClick={this.handleItemClick}
			/>
		)
  }

  /* 组件被挂载到页面之后执行, get ajax data */
  componentDidMount() {
    // axios
    // 	.get('/api/todolist')
    // 	.then(res => {
    //     const data = res.data
    //     const action = initListAction(data)
    //     store.dispatch(action)
    // 		  this.setState(() => {
    // 		   	return {
    // 		   		list: [...res.data]
    // 		   	}
    // 		 })
    // 	})
    // 	.catch(() => {
    // 		alert('err')
    // 	})

    /* redux-thunk */
    // const action = getTodoList()
    // store.dispatch(action)

    /* redux-saga */
    const action = getInitList()
    store.dispatch(action)
  }

	handleStoreChange() {
		this.setState(store.getState())
	}

	handleInputChange(e) {
		// const action = {
		// 	type: CHANGE_INPUT_VALUE,
		// 	value: e.target.value
		// }
		const action = getInputChangeAction(e.target.value)
		store.dispatch(action)
	}

	handleBtnClick() {
		// const action = {
		// 	type: ADD_TODO_ITEM
		// }
		const action = getAddItemAction()
		store.dispatch(action)
	}

	handleItemClick(index) {
		// const action = {
		// 	type: DELETE_TODO_ITEM,
		// 	index
		// }
		const action = getDeleteItemAction(index)
		store.dispatch(action)
	}
}

export default TodoList
