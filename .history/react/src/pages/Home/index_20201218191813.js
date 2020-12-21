import React, { useState, useEffect } from 'react'
import styles from './index.scss'

export default function Home (props) {
  console.log(123)
  return (
    <div>
      <div className={[styles['head'], 'flex'].join(' ')}>
        <img src={require('@/assets/imgs/snake.png')}/>
        <span>rsnake</span>
      </div>
      <div>123139999888777222</div>
    </div>
  )
}
