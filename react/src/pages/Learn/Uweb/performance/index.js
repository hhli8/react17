import React, { useState } from 'react'
import styles from '@/pages/Learn/style/textcom.scss'
import Code from '@/pages/Learn/code.js'
import { hot } from 'react-hot-loader'

export default hot(module)(() => {
  const [time, setTime] = useState('')
  const deal = () => {
    const t = window.performance.timing
    setTime(t.domLoading - t.fetchStart)
    // import wpkReporter from 'wpk-reporter' // 导入基础sdk
    // npm i wpk-reporter
    // const __wpk = new wpkReporter({
    //   bid: 'a8qx9ahl-06y595jw', // 新建应用时确定
    //   spa: true,  // 单页应用开启后，可更准确地采集PV
    //   plugins: []
    // })
    // __wpk.installAll() // 初始化sdk 必须调用
  }
  return (
    <div className={styles['c-container']}>
      <p>navigationStart:在同一个浏览器上下文中，前一个网页（与当前页面不一定同域）unload 的时间戳，如果无前一个网页 unload ，则与 fetchStart 值相等</p>
      <p>fetchStart:浏览器准备好使用 HTTP 请求抓取文档的时间，这发生在检查本地缓存之前</p>
      <p>domInteractive:完成解析 DOM 树的时间，Document.readyState 变为 interactive，并将抛出 readystatechange 相关事件</p>
      <p>domLoading:开始解析渲染 DOM 树的时间，此时 Document.readyState 变为 loading，并将抛出 readystatechange 相关事件</p>
      <p>白屏时间：</p>
      <div className="answer">从输入网址，到页面开始显示内容的时间/用户看到页面展示出现一个元素的时间, domInteractive-fetchStart/navigationStart、domLoading-fetchStart/navigationStart</div>
      <div></div>
      <button onClick={() => deal()}>获取白屏时间：</button>
      <div>{time}ms</div>
      <button >获取首屏时间：domContentLoadedEventEnd-fetchStart</button>
      <div>参考：https://zhuanlan.zhihu.com/p/82981365，https://mp.weixin.qq.com/s/LinpAmhE5VB1yLkm_SpTpw</div>
    </div>
  )
})
