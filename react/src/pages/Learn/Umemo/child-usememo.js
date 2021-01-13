import React, { useMemo } from 'react'

// let use = function Example (props) {
//   console.log('child', props)
//   return (
//     <>
//       <p>number is : {props.number}</p>
//     </>
//   )
// }
// export default use

export default (props = {}) => {
  console.log('useMemo', props)
  return useMemo(() => {
    console.log('this is in usememo')
    return (
      <p>number is : {props.number}</p>
    )
  }, [props.number])
}
// 记住，传入 useMemo 的函数会在渲染期间执行。请不要在这个函数内部执行与渲染无关的操作，诸如副作用这类的操作属于 useEffect 的适用范畴，而不是 useMemo。
