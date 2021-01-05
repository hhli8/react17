import React, { useEffect, useRef, useState } from 'react'
import './style/index.css'
import { createPortal } from 'react-dom'

// class Modal extends React.Component {
//   constructor (props) {
//     super(props)
//     console.log(props)
//     this.state = {}
//   }
//   render () {
//     return (
//       <div className="r-modal">
//         <div className="r-modal-o"></div>
//         <div className="r-modal-c">
//           <div>asdasdasd</div>
//         </div>
//       </div>
//     )
//   }
// }
const Modal = function (props) {
  const [uiShow, setUiShow] = useState(false)
  const { children, visible, close, closeOverlay, closeText, closeBtn, position } = props;
  // closeOverlay-默认true
  const bodyOverflow = useRef(window.getComputedStyle(document.body).overflow)
  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setUiShow(true)
      })
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = bodyOverflow.current;
    }
  }, [visible]);

  function handleClose () {
    setUiShow(false)
    setTimeout(() => {
      close()
    }, 300)
  }
  function handleOverlay () {
    if (closeOverlay === false) {return}
    handleClose()
  }
  const modal = createPortal(
    <div className="r-modal">
      <div className={['r-modal-o', uiShow ? 'act' : ''].join(' ')} onClick={() => handleOverlay()}></div>
      <div className={[position ? `r-modal-c-${position}` : 'r-modal-c', uiShow ? '' : 'bounce-out'].join(' ')}>
        {closeBtn && <span onClick={() => handleClose()} className="close-btn">{closeText}</span>}
        <>{children}</>
      </div>
    </div>,
    document.body
  )
  return (
    <>{visible && modal}</>
  )
}

export default Modal
