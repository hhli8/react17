import React, { useState, useEffect } from 'react'
import styles from './index.scss'
import { hot } from 'react-hot-loader'

let home =  function Home (props) {
  console.log(123555)
  return (
    <div>
      <div className={[styles['head'], 'flex'].join(' ')}>
        <img src={require('@/assets/imgs/snake.png')}/>
        <span>rsnake</span>
      </div>
      <div>12313999988811112225554444</div>
      <input type="text"/>
    </div>
  )
}

export default hot(module)(home)
