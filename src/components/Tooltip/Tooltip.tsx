import classnames from 'classnames'

import styles from './styles.module.scss'

type TProps = {
  children: React.ReactNode
  title: string
  position?: 'top' | 'right' | 'bottom' | 'left'
}

export const Tooltip: React.FC<TProps> = ({
  children,
  title,
  position = 'right',
}) => {
  const style = classnames(styles.tooltip_text, styles[position])

  return (
    <span className={styles.body}>
      {children}
      <div className={styles.tooltip}>
        <span className={style}>{title}</span>
      </div>
    </span>
  )
}
