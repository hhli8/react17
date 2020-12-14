import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

var use = function Example() {
  return (
    <div>
      <p>this is use</p>
    </div>
  )
}
const mapStateToProps = state => ({
  shopcar: state.shopcar
})

const actionCreators = { setList }
export default connect(mapStateToProps, actionCreators)(use)