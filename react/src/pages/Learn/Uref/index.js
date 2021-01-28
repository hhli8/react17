import React, { useRef, createRef, useState, useEffect } from 'react'
import styles from './index.scss'

export default (props = {}) => {
  // const inputEl = useRef(null)
  const inputEl = createRef()
  // 效果相同
  // 区别：？用了闭包的方式来保持旧引用, 1.useRef 在 react hook 中的作用, 正如官网说的, 它像一个变量, 类似于 this , 它就像一个盒子, 你可以存放任何东西.2.createRef 每次渲染都会返回一个新的引用，而 useRef 每次都会返回相同的引用(persist)。
  const clickTest = () => {
    inputEl.current.focus()
  }
  //
  const [index, setIndex] = useState(1)
  const ref = useRef(null)
  useEffect(() => {
    // console.log(index)
    ref.current = index
  }, [index])
  const showIndex = () => {
    setTimeout(() => {
      alert(index)
    }, 1000)
  }
  return (
    <div className={styles['c-container']}>
      {/* <input ref={inputEl} type="text" /><br/> */}
      <input ref={inputEl} type="text" /><br/>
      <br/>
      <button onClick={() => clickTest()}>点击测试</button>
      <hr/>
      <div>the index is : {index}, ref-index is : {ref.current}</div>
      <button onClick={() => setIndex(pre => pre + 1)}>增加index</button>
    </div>
  )
}
