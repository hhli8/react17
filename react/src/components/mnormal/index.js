import React, { useState, useEffect } from 'react'
import './style/index.css'
import { withRouter } from 'react-router-dom'
// function Mnormal (props) {
// }
// export default Mnormal
class Mnormal extends React.Component {
  constructor (props) {
    super(props)
    // console.log(props)
  }
  back () {
    this.props.history.goBack()
  }
  render () {
    return (
      <div className="r-layout">
        <div className="r-lt-header">
          <span className="iconfont left" onClick={() => this.back()}>&#xe68d;</span>
          <div className="name">{this.props.title}</div>
        </div>
        <div className="r-lt-container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default withRouter(Mnormal)
