import React, { useState, useMemo } from 'react'
import Child from './child'
import ChildMemo from './child-memo'
import ChildUsememo from './child-usememo'
import styles from './index.scss'

let use = function Example () {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const handleSetStep = () => {
    setStep(step + 1);
  }

  const handleSetCount = () => {
    setCount(count + 1);
  }

  const handleCalNumber = () => {
    setNumber(count + step);
  }
  return (
    <div className={styles['memo-box']}>
      <div>React.memo的文档： https://zh-hans.reactjs.org/docs/react-api.html#reactmemo</div>
      <hr />
      <p>React.memo</p><br /><br />
      <button onClick={handleSetStep}>step is : {step} </button>
      <button onClick={handleSetCount}>count is : {count} </button>
      <button onClick={handleCalNumber}>numberis : {number} </button>
      <hr />

      <Child step={step} count={count} number={number} /> <br /><hr />
      <ChildMemo step={step} count={count} number={number}></ChildMemo><br /><br /><hr />
      <p>useMemo</p><br /><br />
      <ChildUsememo number={number}></ChildUsememo>
    </div>
  )
}

export default use
