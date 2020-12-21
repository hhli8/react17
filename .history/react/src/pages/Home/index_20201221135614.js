import React, { useState, useEffect } from 'react'
import styles from './index.scss'

export default function Home (props) {
  console.log(123555)
  return (
    <div>
      <div className={[styles['head'], 'flex'].join(' ')}>
        <img src={require('@/assets/imgs/snake.png')}/>
        <span>rsnake</span>
      </div>
      <div>12313999988899999663333333333</div>
      <input type="text"/>
    </div>
  )
}
