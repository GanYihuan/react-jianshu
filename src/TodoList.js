import React, { Component, Fragment } from 'react'
import axios from 'axios'
import TodoItem from './TodoItem'

class TodoList extends Component {
  /*
  Initialization (life circle)
  setup props and state
  */
  /* constuctor() simular life circle, component init will run */
  constructor(props) {
    /* invoked father constructor */
    super(props)
    /* when state and props change render() re-render */
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  render() {
    console.log('render()')
    return (
      /* <Fragment>: package component, placeholder */
      <Fragment>
        <div>
          {/* htmlFor: like 'for', focus cursor */}
          <label htmlFor="insert">input value:</label>
          <input
            id="insert"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            // this.input -> input dom element, input -> accept params
            ref={input => {
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

  /* Mounting (life circle) */
  /* component soon mount in page */
  componentWillMount() {
    console.log('componentWillMount')
  }
  // render()
  /* component mount in page after, get sync data */
  componentDidMount() {
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

  /* Updation (life circle) */
  /* component update before, your component need to update ? */
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }
  /* component update before, shouldComponentUpdate return true will carried out */
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  // render()
  /* component update after */
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        /* `<div></div>` prevent return two element */
        /* dangerouslySetInnerHTML: can write `<h1>hello</h1>` */
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
    /* e.target: <input> dom element */
    // const value = e.target.value
    /* this.input -> 'ref=input' dom element */
    const value = this.input.value
    // this.setState({
    // 	inputValue: e.target.value
    // })
    /* Can omitted 'return', async Performance optimization */
    this.setState(() => {
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
    /* prevState: before modify data */
    this.setState(
      prevState => {
        return {
          list: [...prevState.list, prevState.inputValue],
          inputValue: ''
        }
      },
      () => {
        /* ensure async setState() has been invoked */
        console.log(this.ul.querySelectorAll('div').length)
      }
    )
  }

  handleItemDelete(index) {
    /* copy origin list, because 'immutable': state not allow to change */
    // const list = [...this.state.list]
    // list.splice(index, 1)
    // this.setState({
    // 	list: list
    // })
    this.setState(prevState => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {
        list
      }
    })
  }
}

export default TodoList
