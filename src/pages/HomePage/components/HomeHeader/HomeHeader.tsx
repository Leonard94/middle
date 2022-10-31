import { NavLink, useNavigate } from 'react-router-dom'

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
          <NavLink to='/' className={styles.logo} title='Вернуться на главную'>
            <img src={Logo} alt='Логотип middle' />
          </NavLink>
          <nav>
            <ul className={styles.menu}>
              <li>
                <NavLink to='recent'>Недавние</NavLink>
              </li>
              {role === 'user' ? (
                <>
                  <li>
                    <NavLink to='/favorites'>Фавориты</NavLink>
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
                    <NavLink to='register'>Регистрация</NavLink>
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
