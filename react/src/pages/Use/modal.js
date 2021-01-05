import React, { useState, useEffect, createContext } from 'react'
import { connect } from 'react-redux'
// import { Button } from 'antd-mobile'
// import { Button, Toast } from 'rsnake'
import styles from './style/use.scss'
import Modal from '@/components/modal'
// export const ModalContext = createContext()
let use = function fun () {
  const [modalVisible, setModalVisible] = useState(false)
  const modalConfig = {
    visible: modalVisible,
    closeOverlay: false, // mask是否点击可以关闭
    close: () => {
      setModalVisible(false)
    },
    closeBtn: true, // 显示关闭按钮
    closeText: '关闭'
  }
  function setConfirm () {
    setTimeout(() => {
      console.log('处理完成....')
      setModalVisible(false)
    }, 2000)
  }
  const modalChildren = (
    <div className={styles['dialog']}>
      {/* <span onClick={() => setModalVisible(false)} className="closeBtn">x</span> */}
      <div>这是内容-遮罩层点击不关闭</div>
      <div className="flex">
        <div onClick={() => setModalVisible(false)}>取消</div><div onClick={() => setConfirm()}>确定</div>
      </div>
    </div>
  );
  const [modalVisibleTop, setModalVisibleTop] = useState(false)
  const modalConfigTop = {
    visible: modalVisibleTop,
    position: 'top',
    close: () => {
      setModalVisibleTop(false)
    }
  }
  const modalChildrenCom = (
    <div className={styles['dialog']}>
      <div>这是内容</div>
    </div>
  );
  const [modalVisibleBtm, setModalVisibleBtm] = useState(false)
  const modalConfigBtm = {
    visible: modalVisibleBtm,
    position: 'bottom',
    close: () => {
      setModalVisibleBtm(false)
    }
  }
  // 1111
  const [modalVisibleLeft, setModalVisibleLeft] = useState(false)
  const modalConfigLeft = {
    visible: modalVisibleLeft,
    position: 'left',
    close: () => {
      setModalVisibleLeft(false)
    }
  }
  // 11
  const [modalVisibleRight, setModalVisibleRight] = useState(false)
  const modalConfigRight = {
    visible: modalVisibleRight,
    position: 'right',
    close: () => {
      setModalVisibleRight(false)
    }
  }
  return (
    <div className={styles['container']}>
      <div className="parter">基本用法</div>
      <ul>
        <li onClick={() => setModalVisible(true)}>普通弹出窗</li>
        <li onClick={() => setModalVisibleTop(true)}>顶部弹出</li>
        <li onClick={() => setModalVisibleBtm(true)}>底部弹出</li>
        <li onClick={() => setModalVisibleLeft(true)}>左边弹出</li>
        <li onClick={() => setModalVisibleRight(true)}>右边弹出</li>
      </ul>
      <Modal {...modalConfig}>{modalChildren}</Modal>
      <Modal {...modalConfigTop}>{modalChildrenCom}</Modal>
      <Modal {...modalConfigBtm}>{modalChildrenCom}</Modal>
      <Modal {...modalConfigLeft}>{modalChildrenCom}</Modal>
      <Modal {...modalConfigRight}>{modalChildrenCom}</Modal>
      {/* <div>测试滚动----<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>asdasdasdasdasd<br/>end</div> */}
    </div>
  )
}

export default use
