import React, { Component, Fragment } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './style.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      list: []
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
  }

  render() {
    return (
      <Fragment>
        {/* add .fade-enter .fade-enter-active .fade-enter-done to `<div>hello</div>` */}
        <CSSTransition
          // condition
          in={this.state.show}
          timeout={1000}
          // Prefix
          classNames='fade'
          // css hide, dom will remove
          unmountOnExit
          // Execute after the end of the animation
          onEntered={el => {
            el.style.color = '#f00'
          }}
          // first show has animation, create .fade-appear to `<div>hello</div>`
          appear={true}
        >
          <div>hello</div>
        </CSSTransition>
        <TransitionGroup>
          {this.state.list.map((item, index) => {
            return (
              <CSSTransition
                key={index}
                timeout={1000}
                classNames='fade'
                unmountOnExit
                onEntered={el => {
                  el.style.color = '#f00'
                }}
                appear={true}
              >
                <div>item</div>
              </CSSTransition>
            )
          })}
        </TransitionGroup>
        <button onClick={this.handleToggle}>toggle</button>
        <button onClick={this.handleAddItem}>handleAddItem</button>
      </Fragment>
    )
  }

  handleToggle() {
    this.setState(() => {
      return {
        show: this.state.show ? false : true
      }
    })
  }

  handleAddItem() {
    this.setState(prevState => {
      return {
        list: [...prevState.list, 'item']
      }
    })
  }
}

export default App
