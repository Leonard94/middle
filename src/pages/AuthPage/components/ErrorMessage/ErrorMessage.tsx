import styles from './styles.module.scss'

type TProps = {
  error: string | null
}

export const ErrorMessage: React.FC<TProps> = ({ error }) => {
  if (!error) {
    return null
  } else {
    return <div className={styles.error}>{error}</div>
  }
}
