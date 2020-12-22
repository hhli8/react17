import React, { Suspense, lazy } from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
// import asyncComponent from '@/utils/asyncComponent'
import Mnormal from '@/components/layout/mnormal'

const Home = lazy(() => import('@/pages/Home'))
const Use = lazy(() => import('@/pages/Use'))

export default () => (
  <HashRouter>
    <Suspense fallback={<div></div>}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/use" exact component={Use} />
        <Mnormal>
          <Route path="/use2" exact component={Use} />
        </Mnormal>
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </HashRouter>
)

// //fallback={<div>Loading...</div>}>
