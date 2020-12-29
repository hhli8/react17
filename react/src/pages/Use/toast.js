import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
// import { Button } from 'antd-mobile'
import { Button, Toast } from 'rsnake'
import styles from './style/use.scss'
// import Toast from '@/components/toast'

let use = function Example () {
  return (
    <div className={styles['container']}>
      <div className="parter">基本用法</div>
      <ul>
        <li onClick={() => Toast('this is info', 3000, 200)}>文字提示</li>
        <li onClick={() => Toast({ text: 'had sucess', icon: 'https://img.yzcdn.cn/vant/logo.png', trans: false })}>自定义图片</li>
        {/* <li onClick={() => Toast({ text: '正在加载中', icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', trans: true })}>自定义loading(图片旋转)</li> */}
        {/* <li onClick={() => Toast([1, 2])}>自</li>
        <li onClick={() => Toast('asdas asdasd asdas asda 阿斯达 asda aaaaaaaaaaaaaaaa sssssssssssss')}>自</li> */}
      </ul>
    </div>
  )
}

export default use
