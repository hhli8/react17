import React from 'react'

let use = function Example (props) {
  console.log('child', props)
  return (
    <>
      <p>number is : {props.number}</p>
    </>
  )
}

export default use
