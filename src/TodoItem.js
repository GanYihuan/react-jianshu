import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    console.log('child render()') // father render(), child render()
    const { content, test } = this.props // get father pass func&data
    return (
      <div onClick={this.handleClick}>
        {test}-{content}
      </div>
    )
  }
  // Updation (life circle)
  // when accept param from father component
  // if component first exist in father component, not invoked
  // if component already in father component, invoked
  componentWillReceiveProps() {
    console.log('child componentWillReceiveProps')
  }
  shouldComponentUpdate(nextProps, nextState) { // Performance optimization, avoid father component render(), child component render()
    console.log('child shouldComponentUpdate')
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }
  componentWillUnmount() { // Unmounting (life circle) componet delete from page soon
    console.log('child componentWillUnmount')
  }
  handleClick() {
    const { deleteItem, index } = this.props // get father pass func & data
    deleteItem(index)
  }
}

TodoItem.propTypes = { // income parameter verify
  test: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  deleteItem: PropTypes.func,
  index: PropTypes.number
  // a: PropTypes.array
  // a: PropTypes.bool
  // a: PropTypes.string
  // a: PropTypes.symbol
  // a: PropTypes.element
  // a: PropTypes.node
}

TodoItem.defaultProps = {
  test: 'hello word'
}

export default TodoItem
