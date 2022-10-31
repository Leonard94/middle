import { Link, useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { logout } from '../../../../store/data/user/userSlice'

import { Button } from '../../../../components/Button/Button'

import Logo from '../../../../assets/icons/logo.svg'
import { ReactComponent as IconLine } from '../../../../assets/icons/line.svg'

import styles from './styles.module.scss'

export const HomeHeader = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { role } = useAppSelector((state) => state.user)

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.body}>
          <Link to='/' className={styles.logo} title='На главную'>
            <img src={Logo} alt='Логотип middle' />
          </Link>
          <nav>
            <ul className={styles.menu}>
              <li>
                <Link to='recent'>Недавнее</Link>
              </li>
              {role === 'user' ? (
                <>
                  <li>
                    <Link to='/favorites'>Фавориты</Link>
                  </li>
                  <li>
                    <Button
                      typeView='default'
                      type='button'
                      onClick={() => dispatch(logout())}
                      small
                    >
                      Выйти
                    </Button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to='register'>Регистрация</Link>
                  </li>
                  <li>
                    <Button
                      typeView='primary'
                      type='button'
                      onClick={() => navigate('/login')}
                      small
                    >
                      Войти
                    </Button>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
      <IconLine className={styles.line} />
    </header>
  )
}
