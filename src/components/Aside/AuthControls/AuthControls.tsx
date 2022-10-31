import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { logout } from '../../../store/data/user/userSlice'

import { Button } from '../../Button/Button'

import styles from './styles.module.scss'

export const AuthControls = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { user, role } = useAppSelector((state) => state.user)

  return (
    <div className={styles.auth}>
      {role === 'guest' && (
        <>
          <Button
            type='button'
            typeView='primary'
            small
            onClick={() => navigate('/login')}
          >
            Войти
          </Button>
          <Button
            type='button'
            typeView='text'
            small
            onClick={() => navigate('/register')}
          >
            Регистрация
          </Button>
        </>
      )}
      {role === 'user' && (
        <>
          <div className={styles.user}>
            <div className={styles.img}>
              {user.image && user.username && (
                <img src={user.image} alt={user.username} />
              )}
            </div>
            <div className={styles.username}>{user.username}</div>
          </div>
          <Button
            type='button'
            typeView='primary'
            small
            style={{ marginBottom: '10px' }}
            onClick={() => navigate('/createnewarticle')}
          >
            Написать статью
          </Button>
          <Button
            type='button'
            typeView='default'
            small
            onClick={() => dispatch(logout())}
          >
            Выйти
          </Button>
        </>
      )}
    </div>
  )
}
