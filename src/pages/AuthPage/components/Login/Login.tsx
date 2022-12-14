import { useEffect, useState } from 'react'

import { Input } from '../../../../components/Input/Input'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'

import { useAppDispatch } from '../../../../store/hooks'
import { login } from '../../../../store/data/user/userSlice'

import { VALIDATE_ERRORS } from '../../../../global-constans'

type TPprops = {
  button: JSX.Element
  error: string | null
  handleResetError: () => void
}

export const Login: React.FC<TPprops> = ({ button, error, handleResetError }) => {
  const dispatch = useAppDispatch()

  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const [errorEmail, setErrorEmail] = useState<null | string>(null)
  const [errorPassword, setErrorPassword] = useState<null | string>(null)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const isCorrectEmail = () => {
    return (
      values.email.trim().length !== 0 ||
      setErrorEmail(VALIDATE_ERRORS.emailIsEmpty)
    )
  }

  const isCorrectPassword = () => {
    return (
      values.password.length !== 0 ||
      setErrorPassword(VALIDATE_ERRORS.passwordIsEmpty)
    )
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    const email = isCorrectEmail()
    const password = isCorrectPassword()

    if (email && password) {
      const data = {
        email: values.email,
        password: values.password,
      }
      dispatch(login(data))
    }
  }

  useEffect(() => {
    return () => {
      handleResetError()
    }
  }, [])

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Input
        label='Электронная почта'
        name='email'
        placeholder='mail@mail.com'
        type='text'
        value={values.email}
        onChange={handleInput}
        error={errorEmail}
        onFocus={() => setErrorEmail(null)}
        style={{ marginBottom: '30px' }}
      />
      <Input
        label='Пароль'
        name='password'
        placeholder='Введите пароль'
        type='password'
        value={values.password}
        onChange={handleInput}
        error={errorPassword}
        onFocus={() => setErrorPassword(null)}
        style={{ marginBottom: '30px' }}
      />
      <ErrorMessage error={error} />
      {button}
    </form>
  )
}
