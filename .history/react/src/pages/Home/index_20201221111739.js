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
      <div>1231399998887772227777666</div>
      <input type="text"/>
    </div>
  )
}