import React, { Suspense, lazy } from 'react'
import { HashRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom'
// import asyncComponent from '@/utils/asyncComponent'
import Mnormal from '@/components/mnormal'
// import { Mnormal } from 'rsnake'

const Home = lazy(() => import('@/pages/Home'))
const Use = lazy(() => import('@/pages/Use'))
const Toast = lazy(() => import('@/pages/Use/toast'))
const Modal = lazy(() => import('@/pages/Use/modal'))
const Slider = lazy(() => import('@/pages/Use/slider'))
const MnormalUse = lazy(() => import('@/pages/Use/mnormal'))

const Ulearn = lazy(() => import('@/pages/Learn'))
const Umemo = lazy(() => import('@/pages/Learn/Umemo/umemo'))
const Uversion = lazy(() => import('@/pages/Learn/Uversion'))
const Uhook = lazy(() => import('@/pages/Learn/Uhook'))
const Ucallback = lazy(() => import('@/pages/Learn/Ucallback'))
const Uuseref = lazy(() => import('@/pages/Learn/Uref'))
const Ujscopy = lazy(() => import('@/pages/Learn/Ujs/copy'))
const Uwebper = lazy(() => import('@/pages/Learn/Uweb/performance'))
const Uvdom = lazy(() => import('@/pages/Learn/Uvdom'))
const Uhttps = lazy(() => import('@/pages/Learn/Unet/https'))
const Uweblonglist = lazy(() => import('@/pages/Learn/Uweb/longlist'))

const hrefarr = location.href.split('/')
const pathname = hrefarr[hrefarr.length - 1]
const pathTitle = {
  '/toast': 'Toast',
  '/modal': 'Modal',
  '/slider': 'Slider',
  '/umemo': 'React.memo和useMemo',
  '/uversion': 'React版本更新相关',
  '/uhook': 'Hook的理解',
  '/ucallback': 'useCallback和useMemo的使用和区别',
  '/uref': 'useRef',
  '/ujs_copy': '深拷贝和浅拷贝',
  '/uweb_per': '页面性能监控',
  '/uvdom': 'react虚拟dom比直接操作好？更快？',
  '/unet_https': 'https了解吗？',
  '/uweb_longlist': '长列表渲染优化方案？'
}
// console.log(pathname)

// export default () => (
//   <Suspense fallback={<div></div>}>
//     <Switch>
//       <Route path="/" exact component={Home} />
//       <Route path="/use" exact component={Use} />
//       <Route path="/mnormal" exact component={MnormalUse} />
//       <Mnormal title={pathTitle['/' + pathname]}>
//         <Route path="/toast" exact component={Toast} />
//         <Route path="/modal" exact component={Modal} />
//         <Route path="/slider" exact component={Slider} />
//       </Mnormal>
//       <Redirect to="/" />
//     </Switch>
//   </Suspense>
// )
function equal (pre, next) {
  console.log(pre, next)
}
function Router (props) {
  const { match, location, history } = props
  history.listen((e) => {
    // console.log(e) // 执行次数会叠加？
  })
  return (
    <Suspense fallback={<div></div>}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/use" exact component={Use} />
        <Route path="/mnormal" exact component={MnormalUse} />
        <Route path="/ulearn" exact component={Ulearn}/>
        <Mnormal title={pathTitle[location.pathname]}>
          <Route path="/toast" exact component={Toast} />
          <Route path="/modal" exact component={Modal} />
          <Route path="/slider" exact component={Slider} />
          <Route path="/umemo" exact component={Umemo} />
          <Route path="/uversion" exact component={Uversion} />
          <Route path="/uhook" exact component={Uhook} />
          <Route path="/ucallback" exact component={Ucallback} />
          <Route path="/uref" exact component={Uuseref} />
          <Route path="/ujs_copy" exact component={Ujscopy} />
          <Route path="/uweb_per" exact component={Uwebper} />
          <Route path="/uvdom" exact component={Uvdom} />
          <Route path="/unet_https" exact component={Uhttps} />
          <Route path="/uweb_longlist" exact component={Uweblonglist} />
        </Mnormal>
        <Redirect to="/" />
      </Switch>
    </Suspense>
  )
}
export default withRouter(Router)

/* class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { match, location, history } = this.props
    return (
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/use" exact component={Use} />
          <Route path="/mnormal" exact component={MnormalUse} />
          <Mnormal title={pathTitle[location.pathname]}>
            <Route path="/toast" exact component={Toast} />
            <Route path="/modal" exact component={Modal} />
            <Route path="/slider" exact component={Slider} />
          </Mnormal>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    )
  }
}

export default withRouter(App) */

// //fallback={<div>Loading...</div>}>
