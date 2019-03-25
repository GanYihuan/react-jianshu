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
          in={this.state.show} // condition
          timeout={1000}
          classNames='fade' // Prefix
          unmountOnExit // css hide, dom will remove
          onEntered={el => { // execute after the end of the animation
            el.style.color = '#f00'
          }}
          appear={true} // first show, create .fade-appear to `<div>hello</div>`
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
