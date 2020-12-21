import React, { useState, useEffect } from 'react'
import styles from './index.scss'
import { hot } from 'react-hot-loader'

let home =  function Home (props) {
  return (
    <div className={styles['p-home']}>
      <div className={[styles['head'], 'flex', 'hcenter'].join(' ')}>
        {/* <img src={require('@/assets/imgs/snake.png')}/> */}
        <span className="iconfont">&#xe735;</span>
        <span className="logo-name">Rsnake</span>
      </div>
    </div>
  )
}

export default hot(module)(home)
// export default home