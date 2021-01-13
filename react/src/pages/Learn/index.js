import React from 'react'
import styles from './style/index.scss'
import { list } from './data.js'
import { Link } from 'react-router-dom'

let use = function Example () {
  return (
    <div className={styles['p-home']}>
      <div className={styles['list']}>
        {
          list.map((fitem, index) => {
            return (
              <>
                <p>{fitem.fname}</p>
                <ul>
                  {
                    fitem.children.map((item) => {
                      return <li key="item.sname" >
                        <Link className="flex between" to={item.url}><span>{item.sname}</span><span className="iconfont">&#xe616;</span></Link>
                      </li>
                    })
                  }
                </ul>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default use
