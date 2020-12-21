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
      <div>1231399998889999966</div>
      <input type="text"/>
    </div>
  )
}
