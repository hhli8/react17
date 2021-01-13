import React, { useState } from 'react'
import styles from './index.scss'
import ChildEffect from './childEffect'

export default (props) => {
  // console.log(props, useState)
  const [count, setCount] = useState(0)
  console.log(String(useState)) // function(a){return n().useState(a)}
  const testClick = function () {
    setCount(x => x + 1)
    setCount(x => x + 1)
  }
  return (
    <div className={styles['text-container']}>
      <p>1.hook解决了哪些问题？</p>
      <div>1.1 提供了将可复用性行为“附加”到组件的途径，解决了在组件之间复用状态逻辑难的问题</div>
      <div>1.2 可将组件拆分为更小粒度，让复杂组件变得易于理解</div>
      <div>1.3 提供了一个使代码更易于优化的 API，class难以理解且会让一些优化措施无效</div>
      <div>其他：(多个状态不会产生嵌套，写法还是平铺的：如 async/await 之于 callback hell 一样，hooks 也解决了高阶组件的嵌套地狱问题。虽然 renderProps 也可以通过 compose 解决这个问题，但使用略为繁琐，而且因为强制封装一个新对象而增加了实体数量。
Hooks 可以引用其他 Hooks，自定义 Hooks 更加灵活。
更容易将组件的 UI 与状态分离。)</div>
      <p onClick={() => setCount(2)}>2.useState原理</p>
      <div>
      react.development.js
      resolveDispatcher().useState(initialState)
      ReactCurrentDispatcher.current——https://www.jianshu.com/p/63711e9c0f84参考
      https://github.com/facebook/react/blob/17.0.1/packages/react-reconciler/src/ReactFiberHooks.new.js<br/>
      1
      *************
      手动实现：https://zhuanlan.zhihu.com/p/91074256
      https://juejin.cn/post/6844903990958784526
      </div>
      <br/><hr/>
      <p>3.函数组件每次渲染都会重新进行调用把函数体重新走一次, 但是useState的值却没有一直被赋予初值, 这是为什么呢？</p>
      <div>有一个que里面对应着每一个state，修改的时候不是第一次就不会取默认值，而是根据cur取最新的值https://blog.csdn.net/weixin_44238796/article/details/104264577</div>
      <br/><hr/>
      <p>4.自定义hooks:https://usehooks.com/</p>
      hooks实现？
      虚拟dom和真实dom如何转化
      111
      <br/><hr/>
      <p>5. useEffect 取代了什么？</p>
      <div>取代的生命周期，注意点是哪些</div>
      <ChildEffect></ChildEffect>
      <br/><hr/>
      <p>6. 有什么是hook能做，而class做不到的</p>
      <div>https://zhuanlan.zhihu.com/p/138408745</div>
      <br/><hr/>
      <p>7. 体系：umi, dva，react-</p>
      <br/><hr/>
      <p>8. useState和setState联系和区别</p>
      <div>useState是异步的：https://segmentfault.com/a/1190000013040438</div>
      <button onClick={(pre) => testClick()}>点击我测试+1</button>
      <button>显示count: {count}</button>
      <br/><hr/>
      <p>9. 混入的进化</p>
      <div>https://cloud.tencent.com/developer/article/1431090</div>
      <br/><hr/>
    </div>
  )
}
