import React from 'react'
import styles from '@/pages/Learn/style/textcom.scss'
// import marked from 'marked'
// import hljs from 'highlight.js'
// import 'highlight.js/styles/monokai-sublime.css'

import Code from '@/pages/Learn/code.js'
import { hot } from 'react-hot-loader'

const fun = () => {
  const code1 = `
    function deepCopy (obj) {
      let res = Array.isArray(obj) ? [] : {}
      if (obj && typeof obj === 'object') {
        for (let i in obj) {
          let prop = obj[i]
          if (prop === obj) {continue}
          if (Object.prototype.hasOwnProperty.call(obj, i)) {
            if (obj[i] && typeof obj[i] === 'object') {
              res[i] = deepCopy(obj[i])
            } else {
              res[i] = obj[i]
            }
          }
        }
      }
      return res
    }
    let obj1 = {
      a: 12,
      b: [{x: 'name'}]
    }
    let obj2 = deepCopy(obj1)
    obj1.b[0].x = 'age'
    console.log(JSON.stringify(obj1), JSON.stringify(obj2))
    // {"a":12,"b":[{"x":"age"}]} {"a":12,"b":[{"x":"name"}]}
  `
  const code2 = `
    只能是Number, String, Boolean, Array, 扁平对象，即那些能够被 JSON 直接表示的数据结构
    时间对象、正则、err、构造函数、NaN、undefined、Symbol等会不正确
  `
  function deepCopy (obj) {
    let res = Array.isArray(obj) ? [] : {}
    if (obj && typeof obj === 'object') {
      for (let i in obj) {
        let prop = obj[i]
        if (prop === obj) {continue}
        if (Object.prototype.hasOwnProperty.call(obj, i)) {
          if (obj[i] && typeof obj[i] === 'object') {
            res[i] = deepCopy(obj[i])
          } else {
            res[i] = obj[i]
          }
        }
        /* (function fn () {
          if (Object.prototype.hasOwnProperty.call(obj, i)) {
            if (obj[i] && typeof obj[i] === 'object') {
              res[i] = (prop.constructor === Array) ? [] : {}
              fn(prop, res[i])
            } else {
              res[i] = prop
            }
          }
        })() */
      }
    }
    return res
  }
  let obj1 = {
    a: 12,
    // c: obj1,
    b: [{x: 'name'}]
  }
  let obj2 = deepCopy(obj1)
  obj1.b[0].x = 'age'
  // console.log(JSON.stringify(obj1), JSON.stringify(obj2))
  // {"a":12,"b":[{"x":"age"}]} {"a":12,"b":[{"x":"name"}]}

  let ob1 = {
    a: null,
    b: undefined,
    c: function () {},
    d: Symbol(),
    e: 12
  }
  let ob2 = JSON.parse(JSON.stringify(ob1))
  // console.log(ob2)
  for (let i in ob1) {
    // console.log(i)
  }

  function DeepCopy (obj) {
    // hash表，记录所有的对象的引用关系
    let map = new WeakMap()
    function dp (obj) {
      let result = null;
      let keys = Object.keys(obj)
      console.log(keys)
      let key = null,
        temp = null,
        existobj = null;
      existobj = map.get(obj);
      // 如果这个对象已经被记录则直接返回
      if (existobj) {
        return existobj;
      }
      result = {}
      map.set(obj, result);
      console.log(map)
      for (let i = 0, len = keys.length; i < len; i++) {
        key = keys[i];
        temp = obj[key];
        if (temp && typeof temp === 'object') {
          result[key] = dp(temp);
        } else {
          result[key] = temp;
        }
      }
      return result;
    }
    return dp(obj);
  }
  let o1 = {
    x: 100
  }
  o1.y = o1
  let o2 = DeepCopy(o1)
  console.log(o2, o2 === o1)

  let b1 = {
    a: 100,
    b: {
      x: 200
    }
  }
  let b2 = {...b1}
  b2.b.x = [1, 2]
  console.log(b2, b2 === b1, b1) // 浅拷贝拷贝也只是对象的第一层，更深层次的只拷贝引用地址，深拷贝是对对象的属性进行递归复制
  // 深浅拷贝，原对象和新对象都是不等的，只是他们里的二级的对象引用地址是一样的而已

  return (
    <div className={styles['c-container']}>
      <p>深浅拷贝的本质区别？有哪些方法？优缺点？应用场景/解决什么问题？</p>
      <div className="answer">
      浅拷贝：栈存储拷贝<br/>
      深拷贝：栈堆存储拷贝
      </div>
      <div className="pad-30">基本数据类型不说，对于引用数据类型，浅拷贝只是复制对象的指针，而不是复制对象本身，新旧对象共享的同一个栈堆内存；深拷贝不同，拷贝的新对象和旧对象不共享内存，新对象的改变不会导致旧对象的改变。</div>
      <br/>
      <div className="pad-30">另外，浅拷贝拷贝也只是对象的第一层，更深层次的只拷贝引用地址，深拷贝是对对象的属性进行递归复制。</div>
      <hr/>
      <div className="pad-30">浅拷贝：Object.assign、slice/concat、...合并</div>
      <div className="pad-30">深拷贝：手写遍历、JSON(序列化详细https://www.jianshu.com/p/52db1d0c1780)、Object.create(https://www.cnblogs.com/zhilin/p/11402064.html)、lodash(https://blog.csdn.net/qq_35087256/article/details/105016164)</div>
      <Code code={code1}/><br/>
      <Code code={code2}/><br/>
      {/* https://zhuanlan.zhihu.com/p/33489557 结构化克隆算法 */}
      <p>深拷贝之循环引用的解决办法？</p>
      <div className="pad-30">
        {/* <Code code={code1}/><br/> */}
      </div>
      <div>lodash深拷贝原理，jq的extend原理</div>
      <a href="https://blog.csdn.net/qq_35087256/article/details/105016164?utm_medium=distribute.pc_relevant_t0.none-task-blog-searchFromBaidu-1.not_use_machine_learn_pai&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-searchFromBaidu-1.not_use_machine_learn_pai">https://blog.csdn.net/qq_35087256/article/details/105016164?utm_medium=distribute.pc_relevant_t0.none-task-blog-searchFromBaidu-1.not_use_machine_learn_pai&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-searchFromBaidu-1.not_use_machine_learn_pai</a>
    </div>
  )
}
export default hot(module)(fun)
