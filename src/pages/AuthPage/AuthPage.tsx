import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAppSelector } from '../../store/hooks'

import { AuthLayout } from './components/AuthLayout/AuthLayout'
import { Login } from './components/Login/Login'
import { Register } from './components/Register/Register'
import { Button } from '../../components/Button/Button'

export const AuthPage = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const { loading, role } = useAppSelector((state) => state.user)

  const title = location.pathname === '/login' ? 'Войти' : 'Регистрация'

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
        {location.pathname === '/login' && <Login button={button} />}
        {location.pathname === '/register' && <Register button={button} />}
      </AuthLayout>
    </>
  )
}
