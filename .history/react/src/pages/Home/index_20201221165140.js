import React, { useState, useEffect } from 'react'
import styles from './index.scss'
// import './index.css'
import { hot } from 'react-hot-loader'

let home =  function Home (props) {
  return (
    <div className={styles['p-home']}>
      <div className={[styles['head'], 'flex', 'hcenter'].join(' ')}>
        <span className="iconfont logo">&#xe735;</span>
        <span className="logo-name">Rsnake</span>
      </div>
      <p className={styles['des']}>轻量、丰富、准可靠移动端React组件库</p>
    </div>
  )
}

export default hot(module)(home)
// export default home
