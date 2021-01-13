import React from 'react'
import styles from './index.scss'

export default (props) => {
  console.log(props)
  return (
    <div className={styles['text-container']}>
      <div>16.8添加Hook</div><br/>
      <div>17-启发式更新算法 https://www.w3cschool.cn/article/73903cd7e547af.html</div><br/>
      <div>17-无为开发者添加的更新，只有为下一个版本更新减轻负担的更新：<a href="https://www.cnblogs.com/webbest/p/14214017.html">https://www.cnblogs.com/webbest/p/14214017.html</a>，https://react.docschina.org/blog/2020/08/10/react-v17-rc.html</div><br/>
      <div>————渐进式升级-官方demo-https://github.com/reactjs/react-gradual-upgrade-demo/</div>
      <div>————事件委托方式修改：<br/>1不同版本的react tree/组件的嵌套更安全(it is now safer to embed a React tree managed by one version inside a tree managed by a different React version)<br/>2此更改还使得将React嵌入使用其他技术构建的应用程序更加容易</div>
      <div>其他，更加贴近浏览器原生事件，事件复用池被废弃(Pooling)，Effect Cleanup Timing()，render返回undefined报错，Native Component Stacks(原生组件栈-原生错误栈)，删除部分暴露的api</div>
    </div>
  )
}
