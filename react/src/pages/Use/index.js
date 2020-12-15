import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

let use = function Example () {
  return (
    <div>
      <p>this is use</p>
    </div>
  )
}
const mapStateToProps = state => ({
  shopcar: state.shopcar
})
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(use)
