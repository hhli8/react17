import React, { useState, useCallback } from 'react'
import styles from './index.scss'
import Child from './child.js'

export default (props) => {
  const [count, setCount] = useState(0)
  const [name, setNames] = useState('x')
  /* const changeName = (val) => {
    setNames(val)
  } */
  const changeName = useCallback((val) => {
    setNames(val)
  }, [])
  console.log('f 更新啦')
  return (
    <div className={styles['c-container']}>
      <button onClick={() => setCount(count + 1)}>增加count</button>
      <Child name={name} setName={changeName}></Child>
    </div>
  )
}
// 子组件传递方法的时候，使用memo子组件都会被刷新，即使子组件不依赖父组件，优化：useCallback，第二个参数为设置依赖的数据而更新的数据数组
// usecallback是对应函数，usememo对应的是函数返回的结果(数据、html等)
// 重点：useCallback和React.memo必须结合使用，否则白用！

