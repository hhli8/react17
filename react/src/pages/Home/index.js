import React, { useState, useEffect } from 'react'
import styles from './index.scss'
import './index.css'
// import { Button } from 'antd-mobile'
// import Sbutton from '@/components/button'
import { Button } from 'rsnake'

export default function Home (props) {
  /* console.log(props)
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
  } */
  return (
    <div>
      <h1 className="p">Hello from My Component</h1>
      11
      <Button />
    </div>
  )
}
