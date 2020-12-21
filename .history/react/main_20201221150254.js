import { Provider } from 'react-redux'
import '@/assets/base.scss'
// console.log('react-demo-mokuai1')
import React, { Component } from 'react'
import store from '@/redux'
import Routes from '@/router'
import { AppContainer } from 'react-hot-loader';
// import ReactDom from 'react-dom'
// var x = React
// console.log(React)
// ReactDOM.render(
// <h1>Hello, world!</h1>,
// document.getElementById('app')
// )
// ReactDOM.render(<div>Hello React!</div>,document.getElementById('app'));
console.log(module.hot)
// ReactDOM.render(
//   <Provider store={store}>
//     <AppContainer>
//       <Routes />
//     </AppContainer>
//   </Provider>,
//   document.getElementById('app')
// )
const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Routes />
      </AppContainer>
    </Provider>,
    document.getElementById('app')
  )
}
render(Routes);
if (module.hot) {
  module.hot.accept('@/router', () => {
    // 因为在App里使用的是export default语法，这里使用的是require,默认不会加载default的，所以需要手动加上
    const NextApp = require('@/router').default;
    // 重新渲染到 document 里面
    render(NextApp);
  })
}
