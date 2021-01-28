import React from 'react'
import styles from '@/pages/Learn/style/textcom.scss'
import { hot } from 'react-hot-loader'
import Code from '@/pages/Learn/code.js'

export default hot(module)(() => {
  const code1 = `
    reconcileChildFibers(returnFiber, currentFirstChild, newChild, lanes)
    // 根据newChild类型选择diff函数

    tree diff
    对树进行分层比较，只比较同一层次的节点
    componnet diff
    同类型，vdom比较，否则替换
    element diff
    插入 删除 移动 ——参考：https://zhuanlan.zhihu.com/p/20346379
  `
  return (
    <div className={styles['c-container']}>
      <div className="answer">虚拟 DOM 和 Diff 算法的出现是为了解决由命令式编程转变为声明式编程、数据驱动后所带来的性能问题的。换句话说，直接操作 DOM 的性能并不会低于虚拟 DOM 和 Diff 算法，甚至还会优于。</div>
      <br/>
      <div className="answer">框架的意义在于为你掩盖底层的 DOM 操作，让你用更声明式的方式来描述你的目的，从而让你的代码更容易维护。</div>
      <br/>
      <div className="answer">虚拟 DOM 最大的优势在于抽象了原本的渲染过程，实现了跨平台的能力，而不仅仅局限于浏览器的 DOM，可以是安卓和 IOS 的原生组件，可以是近期很火热的小程序，也可以是各种 GUI。</div>
      <br/>
      <p>react的diff算法了解多少？</p>
      {/* https://blog.csdn.net/qiwoo_weekly/article/details/106345767 */}
      {/* https://zhuanlan.zhihu.com/p/20346379 */}
      <Code code={code1}/><br/>
      {/* <div className="answer">123</div> */}
      {/* <div>深度优先遍历和广度优先遍历https://mp.weixin.qq.com/s?__biz=MzI1ODk2Mjk0Nw==&mid=2247484138&idx=1&sn=3c5d9af3c5ab684b697378503bc617af&scene=21#wechat_redirect</div> */}
      <br/>
      <p>虚拟dom优势？</p>
      <div className="answer">
        1 Virtual DOM 在牺牲部分性能的前提下，增加了可维护性，这也是很多框架的通性
        <br/>2 实现了对DOM的集中化操作，在数据改变时先对虚拟DOM进行修改，再反映到真实的DOM中，用最小的代价来更新DOM，提高效率
        <br/>3 打开了函数式UI编程的大门
        <br/>4 可以渲染到DOM以外的端，比如ReactNative</div>
      <div>参考文献：https://cloud.tencent.com/developer/article/1560877</div>
    </div>
  )
})
