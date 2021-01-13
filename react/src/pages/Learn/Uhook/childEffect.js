import React, { useState, useEffect} from 'react'

let use = function Example (props) {
  console.log('child', props)
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(0)
  useEffect(() => {
    console.log(123, count)
    setNum(10)
  }, [count])
  return (
    <>
      <p>number is : {count}</p>
      <div onClick={() => setCount(count + 1)}>{count}点我+1</div>
      <div onClick={() => setNum(num + 1)}>{num}点我+1</div>
    </>
  )
}

export default use
