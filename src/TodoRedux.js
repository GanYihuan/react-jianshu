import React from 'react'
import { connect } from 'react-redux'
import {
  getInputChangeAction,
  getAddItemAction,
	getDeleteItemAction
} from './store/actionCreators'
import store from './store'

const TodoRedux = props => { // 无状态组件
	const {
		inputValue,
		changeInputValue,
		handleClick,
		handleDelete,
		list
	} = props
	return (
		<div>
			<div>
				<input value={inputValue} onChange={changeInputValue} />
				<button onClick={handleClick}>submit</button>
			</div>
			<ul>
				{
          list.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  handleDelete(index)
                }}
              >
                {item}
              </li>
            )
          })
        }
			</ul>
		</div>
	)
}

const mapStateToProps = state => { // Store data Mapping to props
	return {
		inputValue: state.inputValue,
		list: state.list
	}
}

const mapDispatchToProps = dispatch => { // Store.dispatch Mapping to props
	return {
		changeInputValue(e) {
			// const action = {
			// 	type: CHANGE_INPUT_VALUE,
			// 	value: e.target.value
			// }
			// return to Store
			// dispatch(action)
			const action = getInputChangeAction(e.target.value)
			store.dispatch(action)
		},
		handleClick() {
			// const action = {
			// 	type: ADD_TODO_ITEM
			// }
			// dispatch(action)
			const action = getAddItemAction()
			store.dispatch(action)
		},
		handleDelete(index) {
			// const action = {
			// 	type: DELETE_TODO_ITEM,
			// 	index: index
			// }
			// dispatch(action)
			const action = getDeleteItemAction(index)
			store.dispatch(action)
		}
	}
}

export default connect( // connect: TodoRedux and Store connect, return container component(connect() return result)
	mapStateToProps,
	mapDispatchToProps
)(TodoRedux)
