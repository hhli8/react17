import React, { useRef, useState } from 'react'
import './style/index.css'
let curWidth = null
let totalWidth = null
let startX = 0
let endvalue = 0
function Slider (props) {
  const { value, min, max, onChange, step } = props
  const [cur, setCur] = useState(Number(value) || 0)
  let minv = Number(min) || 0
  let maxv = Number(max) || 100
  let range = maxv - minv
  const icon = useRef()
  const box = useRef()
  const process = useRef()
  let options = {
    start: (e) => {
      startX = e.pageX
      curWidth = process.current.getBoundingClientRect().width
      totalWidth = box.current.getBoundingClientRect().width
    },
    move: (e) => {
      let x = (curWidth + e.pageX - startX) * 100 / totalWidth
      if (step) {
        let count = maxv / step
        let tag = ''
        for (let i = 1; i < count + 1; i++) {
          let p = i / count * 100
          if (x > p) {
            tag = p
            endvalue = i * step
          }
        }
        setCur(tag)
      } else {
        endvalue = x
        if (x > 100) {endvalue = 100}
        if (x < 0) {endvalue = 0}
        setCur(endvalue)
      }
    },
    end: (e) => {
      // console.log(endvalue)
      onChange(parseInt(endvalue))
    }
  }
  // console.log('render')
  return (
    <>
      <div className="r-slider" ref={box}>
        <div className="r-slider-process" ref={process} style={{width: cur / range * maxv + '%'}}>
          <div className="r-slider-process-inner">
            <div
              className="r-slider-icon"
              ref={icon}
              onTouchStart={(e) => options.start(e.changedTouches[0] || e.touches[0])}
              onTouchMove={(e) => options.move(e.changedTouches[0] || e.touches[0])}
              onTouchEnd={(e) => options.end(e.changedTouches[0] || e.touches[0])}
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Slider

