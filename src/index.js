import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import TodoRedux from './TodoRedux'
// import store from './store'
import TodoList from './TodoList'
// import App from './App'
import './style.js'

// const App = (
//   // Provider pass store Provided to subcomponents
//   <Provider store={store}>
//     <TodoRedux />
//   </Provider>
// )

ReactDOM.render(<TodoList />, document.getElementById('root'))
// ReactDOM.render(<App />, document.getElementById('root'))
// ReactDOM.render(App, document.getElementById('root'))
