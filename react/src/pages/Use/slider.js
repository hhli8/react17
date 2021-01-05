import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
// import { Button } from 'antd-mobile'
import { Button, Toast } from 'rsnake'
import styles from './style/use.scss'
import Slider from '@/components/slider'
// import Toast from '@/components/toast'
// <Slider onChange={(res) => change(res)}></Slider>

let use = function Example () {
  let change = (res) => {
    Toast('this is ' + res)
  }
  return (
    <div className={styles['container-pad-40']}>
      <div className="parter">基础用法</div>
      <div className="item">
        <Slider onChange={(res) => change(res)}></Slider>
      </div>
      <div className="parter">指定步长</div>
      <div className="item normal">
        <Slider
          onChange={(res) => change(res)}
          value='0'
          min='0'
          max='60'
          step='10'
        ></Slider>
      </div>
    </div>
  )
}

export default use
