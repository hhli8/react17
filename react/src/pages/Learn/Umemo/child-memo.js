import React, { memo } from 'react'

let use = function Example (props) {
  console.log('child-memo', props)
  return (
    <>
      <p>count is : {props.count}</p>
      <p>number is : {props.number}</p>
    </>
  )
}
const isEqual = (prevProps, nextProps) => {
  console.log(prevProps, nextProps)
  if (prevProps.number !== nextProps.number) {
    return false; // 更新，与shouldComponentUpdate相反
  }
  return true;
}

export default memo(use, isEqual) // 如果第二个参数不传递，则默认只会进行 props 的浅比较
