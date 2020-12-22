import React, { useState, useEffect } from 'react'
function Mnormal (props) {
  return (
    <div>
      <div>header</div>
      <div>
        {props.children}
      </div>
    </div>
  )
}
export default Mnormal
