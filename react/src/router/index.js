import React, { Suspense, lazy } from 'react'
import { HashRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom'
// import asyncComponent from '@/utils/asyncComponent'
import Mnormal from '@/components/mnormal'
// import { Mnormal } from 'rsnake'

const Home = lazy(() => import('@/pages/Home'))
const Use = lazy(() => import('@/pages/Use'))
const Toast = lazy(() => import('@/pages/Use/toast'))
const Modal = lazy(() => import('@/pages/Use/modal'))

const hrefarr = location.href.split('/')
const pathname = hrefarr[hrefarr.length - 1]
const pathTitle = {
  '/toast': 'Toast',
  '/modal': 'Modal'
}
// console.log(pathname)

// export default () => (
//   <HashRouter>
//     <Suspense fallback={<div></div>}>
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/use" exact component={Use} />
//         <Mnormal title={pathTitle[pathname]}>
//           <Route path="/toast" exact component={Toast} />
//         </Mnormal>
//         <Redirect to="/" />
//       </Switch>
//     </Suspense>
//   </HashRouter>
// )

class App extends React.Component {
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
          <Mnormal title={pathTitle[location.pathname]}>
            <Route path="/toast" exact component={Toast} />
            <Route path="/modal" exact component={Modal} />
          </Mnormal>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    )
  }
}

export default withRouter(App)

// //fallback={<div>Loading...</div>}>
