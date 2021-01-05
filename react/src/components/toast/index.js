import React, { Component } from 'react';
// import Portal from '../portal'
import './style/index.css'
import ReactDom from 'react-dom'

/* function Container (props) {
  function pushToast (data) {
    console.log(data)
  }
  return (
    <div>123123{props.children}</div>
  )
} */

class Container extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      type: '', // base-普通提示 img-有图片的 trans-旋转的图片(loading)
      hide: false, // 显示
      hasMask: false, // 是否允许在消失前点击其他
      stack: false, // 是否允许多个
      text: '',
      opacity: 0
    }
  }
  pushToast (data, time = 2000, trans = 300) {
    let tag = false
    if (isRightParams(data) === 'base') {
      tag = true
      this.setState({
        type: 'base',
        text: data,
        // opacity: 1,
        // hide: false
      })
    } else if (isRightParams(data) === 'img') {
      tag = true
      this.setState({
        type: 'img',
        text: data.text,
        icon: data.icon
      })
    } else {
      // console.log(1111)
    }
    if (tag) {
      setTimeout(() => {
        this.setState({ opacity: 1 })
        setTimeout(() => {
          this.setState({ opacity: 0 })
          setTimeout(() => {
            document.body.removeChild(toastContainerDiv)
            toastContainerDiv = null
          }, trans)
        }, time + trans)
      }, 0)
    }
  }
  render () {
    const { text, icon, type } = this.state
    return (
      <div className={['r-toast-content', type].join(' ')} style={{display: this.state.hide ? 'none' : '', opacity: this.state.opacity }}>
        {type === 'img' && <div className="img"><img src={icon}></img></div>}
        <span>{text}</span>
      </div>
    )
  }
}

// export default function Toast (info) {
//   // alert(info)
//   if (typeof (info) === 'string') {
//     let n = document.createElement('div')
//     n.className = 'r-toast'
//     let html = `<div class="r-toast-container"><span>${info}</span></div>`
//     n.innerHTML = html
//     document.body.append(n)
//   } else {
//     //
//   }
// }
function isRightParams (params) {
  // console.log(params)
  // 非typeof (data) === 'string' 且非 对象(且对象有参数)
  if (typeof (params) === 'string' || typeof (params) === 'number') {
    return 'base'
  } else if (Object.prototype.toString.call(params) === '[object Object]' && params.icon) {
    return 'img'
  } else {
    return false
  }
}
let toastContainerDiv = null
function Toast (...arg) {
  if (toastContainerDiv || !isRightParams([...arg][0])) {return false}
  toastContainerDiv = document.createElement('div');
  document.body.appendChild(toastContainerDiv);
  const getToastContainerRef = () => {
    // 将 <ToastContainer /> React 组件，渲染到 toastContainerDiv 中，并且返回了 <ToastContainer /> 的引用
    return ReactDom.render(<Container />, toastContainerDiv);
  }
  // 这里是 <ToastContainer /> 的引用
  let toastContainer = getToastContainerRef();

  // this.destroy = () => {
  //   // 将 <ToastContainer /> 组件 unMount，销毁组件
  //   ReactDom.unmountComponentAtNode(toastContainerDiv);
  //   // 再次创建新的 <ToastContainer /> 引用，以便再次触发 Toast
  //   toastContainer = getToastContainerRef();
  // }

  // ReactDom.render(<Container />, toastContainerDiv)
  toastContainer.pushToast(...arg)
}
Toast.info = function () {
  console.log(122222)
}
export default Toast
