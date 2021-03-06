import { Provider } from 'react-redux'
import '@/assets/base.scss'
import '@/assets/common.scss'
// console.log('react-demo-mokuai1')
import React, { Component } from 'react'
import store from '@/redux'
import Routes from '@/router'
import { HashRouter } from 'react-router-dom'
// import { AppContainer } from 'react-hot-loader';
// import ReactDom from 'react-dom'
// var x = React
// console.log(React)
// ReactDOM.render(
// <h1>Hello, world!</h1>,
// document.getElementById('app')
// )
// ReactDOM.render(<div>Hello React!</div>,document.getElementById('app'));
// ReactDOM.render(
//   <Provider store={store}>
//     <Routes />
//   </Provider>,
//   document.getElementById('app')
// )
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Routes />
    </HashRouter>
  </Provider>,
  document.getElementById('app')
)
