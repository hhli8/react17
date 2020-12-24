import React, { useState, useEffect } from 'react'
import './style/index.css'
function Mnormal (props) {
  return (
    <div className="r-layout">
      <div className="r-lt-header">
        <span className="iconfont left">&#xe68d;</span>
        <div className="name">Toast</div>
      </div>
      <div className="r-lt-container">
        {props.children}
      </div>
    </div>
  )
}
export default Mnormal
