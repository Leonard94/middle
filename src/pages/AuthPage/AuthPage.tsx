import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { resetError } from '../../store/data/user/userSlice'

import { AuthLayout } from './components/AuthLayout/AuthLayout'
import { Login } from './components/Login/Login'
import { Register } from './components/Register/Register'
import { Button } from '../../components/Button/Button'

export const AuthPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { loading, role, error } = useAppSelector((state) => state.user)

  const title = location.pathname === '/login' ? 'Войти' : 'Регистрация'

  const handleResetError = () => {
    dispatch(resetError())
  }

  const button = (
    <Button
      typeView='primary'
      full
      type='submit'
      disabled={loading === 'loading'}
    >
      {title}
    </Button>
  )

  useEffect(() => {
    if (role === 'user') navigate('/')
  })

  return (
    <>
      <AuthLayout title={title}>
        {location.pathname === '/login' && (
          <Login
            button={button}
            error={error}
            handleResetError={handleResetError}
          />
        )}
        {location.pathname === '/register' && (
          <Register
            button={button}
            error={error}
            handleResetError={handleResetError}
          />
        )}
      </AuthLayout>
    </>
  )
}
