import { Provider } from 'react-redux'
import '@/assets/base.scss'
// console.log('react-demo-mokuai1')
import React, { Component } from 'react'
import store from '@/redux'
import Routes from '@/router'
import { AppContainer } from 'react-hot-loader'
// import ReactDom from 'react-dom'
// var x = React
// console.log(React)
// ReactDOM.render(
// <h1>Hello, world!</h1>,
// document.getElementById('app')
// )
// ReactDOM.render(<div>Hello React!</div>,document.getElementById('app'));
ReactDOM.render(
  <AppContainer key={Math.random()}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </AppContainer>,
  document.getElementById('app')
)
