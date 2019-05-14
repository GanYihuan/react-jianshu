import React, { Component, Fragment } from 'react'
import axios from 'axios'
import TodoItem from './TodoItem'

class TodoList extends Component {
  /*
  Initialization (life circle)
  setup props and state
  */
  constructor(props) { // constuctor() simular life circle, component init will run
    super(props) // invoked father constructor
    this.state = { // when state and props change render() re-render
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }
  render() { // state change, render invoked
    console.log('render()')
    return (
      // <Fragment>: package component, placeholder
      <Fragment>
        <div>
          <label htmlFor='insert'>input value:</label> {/* htmlFor: like 'for', focus cursor */}
          <input
            id='insert'
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            ref={input => { // this.input -> input dom element
              this.input = input
            }}
          />
          <button onClick={this.handleBtnClick}>submit</button>
        </div>
        <ul
          ref={ul => {
            this.ul = ul
          }}
        >
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }
  componentWillMount() { // Mounting (life circle) component soon mount in page
    console.log('componentWillMount')
  }
  // render()
  componentDidMount() { // component mount in page after, get sync data
    console.log('componentDidMount')
    axios
      .get('/api/todolist')
      .then(res => {
        console.log(res.data)
        this.setState(() => {
          return {
            list: [...res.data]
          }
        })
      })
      .catch(() => {
        console.log('err')
      })
  }
  shouldComponentUpdate() { // Updation (life circle) component update before, your component need to update ?
    console.log('shouldComponentUpdate')
    return true
  }
  componentWillUpdate() { // component update before, shouldComponentUpdate return true will carried out
    console.log('componentWillUpdate')
  }
  // render()
  componentDidUpdate() { // component update after
    console.log('componentDidUpdate')
  }
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        // `<div></div>` prevent return two element, dangerouslySetInnerHTML: can write `<h1>hello</h1>`
        <div key={item}>
          {/*
          <li
            key={index}
            onClick={this.handleItemDelete.bind(this, index)}
            dangerouslySetInnerHTML={{__html: item}}
          >
            {item}
          </li>
          */}
          <TodoItem
            content={item}
            index={index}
            deleteItem={this.handleItemDelete}
          />
        </div>
      )
    })
  }
  handleInputChange(e) {
    // const value = e.target.value // e.target: <input> dom element
    const value = this.input.value // this.input -> 'ref=input' dom element
    // this.setState({
    // 	inputValue: e.target.value
    // })
    this.setState(() => { // Can omitted 'return', async Performance optimization
      return {
        inputValue: value
      }
    })
  }
  handleBtnClick() {
    // this.setState({
    // 	list: [...this.state.list, this.state.inputValue],
    // 	inputValue: ''
    // })
    this.setState(
      prevState => { // prevState: before modify data
        return {
          list: [...prevState.list, prevState.inputValue],
          inputValue: ''
        }
      },
      () => {
        console.log(this.ul.querySelectorAll('div').length) // this.ul -> 'ref=ul' dom element
      }
    )
  }
  handleItemDelete(index) {
    // copy origin list, because 'immutable': state not allow to change
    // const list = [...this.state.list]
    // list.splice(index, 1)
    // this.setState({
    // 	list: list
    // })
    this.setState(
      prevState => {
        const list = [...prevState.list]
        list.splice(index, 1)
        return {
          list
        }
      }
    )
  }
}

export default TodoList
