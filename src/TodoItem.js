import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    /* father component render(), child component render() */
    console.log('child render()')
    // get father pass func&data
    const { content, test } = this.props
    return (
      <div onClick={this.handleClick}>
        {test}-{content}
      </div>
    )
  }

  /* Updation (life circle) */
  /*
  when accept param from father component
  if component first exist in father component, not invoked
  if component already in father component, invoked
  */
  componentWillReceiveProps() {
    console.log('child componentWillReceiveProps')
  }

  /* Performance optimization, avoid father component render(), child component render() */
  shouldComponentUpdate(nextProps, nextState) {
    console.log('child shouldComponentUpdate')
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }

  /* Unmounting (life circle) */
  /* componet delete from page soon */
  componentWillUnmount() {
    console.log('child componentWillUnmount')
  }

  handleClick() {
    // get father pass func&data
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
}

/* income parameter verify */
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
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
