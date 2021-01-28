import React from 'react'
import styles from '@/pages/Learn/style/textcom.scss'
import { hot } from 'react-hot-loader'
import Code from '@/pages/Learn/code.js'

export default hot(module)(() => {
  return (
    <div className={styles['c-container']}>
      <p>https原理，用了之后就安全了吗？</p>
      <div>流程==原理，不安全，原因：用户主动授权了代理就不安全？</div>
      <br/>
      <div>证书验证非对称加密，传输数据为对称加密。</div>
      <br/>
      <p>涉及到的安全问题有哪些/解决什么问题？</p>
      <div>中间人攻击</div>
      <br/>
      <div>参考文献：https://mp.weixin.qq.com/s/L0cl5frZ92GuLJIqV1O4ag</div>
    </div>
  )
})
