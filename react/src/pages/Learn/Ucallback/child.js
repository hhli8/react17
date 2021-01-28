import React, { useMemo, memo } from 'react'
import styles from './index.scss'
// export default ({name, setName}) => {
//   console.log('child 更新啦')
//   return useMemo(() => {
//     return (
//       <div>
//         <div>name is: {name}</div>
//         <button onClick={() => setName('lhh')}>设置名字(lhh)</button>
//       </div>
//     )
//   }, [name])
// }
export default memo(({name, setName}) => {
  console.log('child 更新啦')
  return (
    <div>
      <p>this is child</p>
      <div>name is: {name}</div>
      <button onClick={() => setName('lhh')}>设置名字(lhh)</button>
    </div>
  )
})
