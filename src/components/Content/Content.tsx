import React from 'react'

import { Navigate } from '../Navigate/Navigate'
import { Aside } from '../Aside/Aside'

import styles from './styles.module.scss'

type TProps = {
  children: React.ReactNode
  isNavigateVisible?: boolean
  isShowAuthControls?: boolean
}

export const Content: React.FC<TProps> = ({
  children,
  isNavigateVisible,
  isShowAuthControls,
}) => {
  return (
    <main className='container'>
      <div className={styles.row}>
        {isNavigateVisible && <Navigate />}
        <section className={styles.children}>{children}</section>
        <Aside isShowAuthControls={isShowAuthControls}/>
      </div>
    </main>
  )
}
