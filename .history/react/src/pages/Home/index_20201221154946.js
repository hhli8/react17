import React, { useState, useEffect } from 'react'
import styles from './index.scss'
import { hot } from 'react-hot-loader'

let home =  function Home (props) {
  return (
    <div className={styles['p-home']}>
      <div className={[styles['head'], 'flex'].join(' ')}>
        <img src={require('@/assets/imgs/snake.png')}/>
        <span>rsnake</span>
      </div>
    </div>
  )
}

export default hot(module)(home)
