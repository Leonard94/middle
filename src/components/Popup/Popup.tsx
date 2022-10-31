import React from 'react'

import { Portal } from './components/Portal/Portal'

import styles from './styles.module.scss'

type TProps = {
  children: React.ReactNode
  onClose: () => void
  isOpen: boolean
}

export const Popup: React.FC<TProps> = ({ children, onClose, isOpen }) => {
  if (!isOpen) {
    return null
  }
  return (
    <Portal>
      <div className={styles.popup}>
        <div className={styles.overlay} onClick={onClose} />
        <div className={styles.content}>{children}</div>
      </div>
    </Portal>
  )
}
