import React, { useState, useEffect } from 'react'
import styles from './index.scss'
// import './index.css'
import { hot } from 'react-hot-loader'
import { list } from './data.js'
// import { createHashHistory } from 'history';  // hash路由
// import { createBrowserHistory } from 'history';  // history路由

// const history = createHashHistory()
import { HashRouter } from 'react-router-dom'

function Item (props) {
  function jump (item) {
    console.log(item, HashRouter)
    // history.push({
    //   name: 'use2'
    // })
  }
  return (
    <>
      <p>{props.data.fname}</p>
      <ul>
        {
          props.data.children.map((item) => {
            return <li onClick={() => jump(item)} key="item.sname" className="flex between"><span>{item.sname}</span><span className="iconfont">&#xe616;</span></li>
          })
        }
      </ul>
    </>
  )
}

let home =  function Home (props) {
  return (
    <div className={styles['p-home']}>
      <div className={[styles['head'], 'flex', 'hcenter'].join(' ')}>
        <span className="iconfont logo">&#xe735;</span>
        <span className="logo-name">Rsnake</span>
      </div>
      <p className={styles['des']}>轻量、丰富、准可靠移动端React组件库</p>
      <div className={styles['list']}>
        {
          list.map((item, index) => {
            return <Item key={item.fname} data={item}></Item>
          })
        }
      </div>
    </div>
  )
}

export default hot(module)(home)
// export default home
