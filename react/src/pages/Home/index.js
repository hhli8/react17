import React, { useState, useEffect } from 'react'
import styles from './index.scss'

export default function Example (props) {
  console.log(props)
  const { history } = props
  const [count, setCount] = useState(0)
  // count = 0, setCount 方法修改count
  const [name, setName] = useState('Lee')
  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    console.log(1)
    document.title = `You clicked ${count} times`
  }, [count])
  let jump = () => {
    console.log(1111)
    history.push('use')
  }

  return (
    <div>
      <p className={styles['p']}>精选</p>
      <p>You clicked {count} times</p>
      <p>Your name is {name}</p>
      <button onClick={() => jump()}>
        Click me
      </button>
      <button onClick={() => setName(name + 'm')}>
        Click me
      </button>
    </div>
  )
}
