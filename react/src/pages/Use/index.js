import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
// import { Button } from 'antd-mobile'
import { Button } from 'rsnake'

let use = function Example () {
  return (
    <div>
      <p className="p"><span>精选</span>this is use</p>
      <Button>defaultaaaaaaaaaaa</Button>
    </div>
  )
}

/* const mapStateToProps = state => ({
  shopcar: state.shopcar
})
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(use) */
export default use
