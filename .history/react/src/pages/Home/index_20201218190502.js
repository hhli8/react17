import React, { useState, useEffect } from 'react'
import styles from './index.scss'

export default function Home (props) {
  return (
    <div>
      <div className={styles['head']}>
        <img src={require('@/assets/imgs/snake.png')}/>
        <span>rsnake</span>
      </div>
      <div>12313</div>
    </div>
  )
}
