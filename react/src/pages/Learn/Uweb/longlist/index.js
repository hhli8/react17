import React, { useState, createRef, useEffect } from 'react'
import styles from '@/pages/Learn/style/textcom.scss'
import pstyle from './index.scss'
import Code from '@/pages/Learn/code.js'
import { hot } from 'react-hot-loader'
import Longlist from './longlistWithoutH.js'
import { useLocation } from 'react-router-dom'

export default hot(module)(() => {
  const { pathname } = useLocation()
  console.log(pathname)
  let listdata = []
  for (let i = 0; i < 10000; i++) {
    listdata.push({ id: i, value: i });
  }
  const [totalHeight, setTHeight] = useState(0)
  const [items, setItem] = useState(listdata.slice(0, 5)) // 显示的items
  const [itemH, setItemH] = useState(0)
  let start = 0
  let end = 0
  // let count = 0
  const [count, setCount] = useState(0)
  // setItem(listdata.slice(0, 5))
  const size = 10000 // 总个数
  const scrollTarget = createRef()
  const [offset, setOffset] = useState(0)
  const scrollList = () => {
    let st = scrollTarget.current.scrollTop
    // this.startOffset = scrollTop - (scrollTop % this.itemSize);
    start = Math.floor(st / itemH);
    end = start + count
    setItem(listdata.slice(start, end))
    setOffset(st - (st % itemH))
  }

  useEffect(() => {
    let containerH = document.querySelector('.infinite-list-container').clientHeight
    // setTHeight(containerH * 2)
    let h = document.querySelectorAll('.infinite-list-item')[0].clientHeight
    setItemH(h)
    // count = parseInt(containerH / h) + 1
    setCount(parseInt(containerH / h) + 1)
    setTHeight(h * size)
  }, [itemH])
  useEffect(() => {
    console.log('改变了')
  }, [pathname])

  return (
    // <div className={styles['c-container']}>
    <div className={[styles['c-container'], 'dd'].join(' ')}>
      <div className="answer">几个开源库的对比：https://blog.csdn.net/u011644423/article/details/103454426</div>
      <br/>
      <div className="answer">
        1-时间分片<br/>
        2-虚拟列表******
      </div>
      <div className="infinite-list-container" onScroll={scrollList} ref={scrollTarget}>
        <div className="infinite-list-phantom" style={{height: `${totalHeight}px`}}></div>
        <div className="infinite-list" style={{transform: `translate3d(0, ${offset}px, 0)`}}>
          {
            items.map((item, index) => {
              return (
                <div className="infinite-list-item" key={item.id}>asdas+{item.id}</div>
              )
            })
          }
        </div>
      </div>
      <Longlist></Longlist>
      <p>参考：https://juejin.cn/post/6844903982742110216</p>
      {/* 参考：https://juejin.cn/post/6844903982742110216 */}
    </div>
  )
})
