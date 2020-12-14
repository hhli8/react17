import React, { useState, useEffect } from 'react'

export default function Example() {
  const [count, setCount] = useState(0)
  // count = 0, setCount 方法修改count
  const [name, setName] = useState('Lee')
  
  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    console.log(1)
    document.title = `You clicked ${count} times`
  }, [count])

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>Your name is {name}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setName(name + 'm')}>
        Click me
      </button>
    </div>
  )
}