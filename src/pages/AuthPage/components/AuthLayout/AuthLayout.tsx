import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

type TProps = {
  children: React.ReactNode
  title: string
}

export const AuthLayout: React.FC<TProps> = ({ children, title }) => {
  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.left}>
            <div className={styles.inner}>
              <h1 className={styles.title}>{title}</h1>
              {children}
              <Link
                to={title === 'Войти' ? '/register' : '/login'}
                className={styles.btn}
              >
                <span className={styles.line} />
                <p>
                  {title === 'Войти' ? 'Или зарегистрироваться' : 'Или войти'}
                </p>
              </Link>
            </div>
          </div>
          <div className={styles.background}>
            <h2>Welcome Back</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
