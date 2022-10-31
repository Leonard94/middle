import { useState } from 'react'

import { useAppDispatch } from '../../../../store/hooks'
import { createNewUser } from '../../../../store/data/user/userSlice'

import { Input } from '../../../../components/Input/Input'

import { isValidEmail } from '../../../../helpers/isValidEmail/isValidEmail'
import { isValidPassword } from '../../../../helpers/isValidPassword/isValidPassword'
import { isValidUsername } from '../../../../helpers/isValidUsername/isValidUsername'
import { isValidConfirmPassword } from '../../../../helpers/isValidConfirmPassword/isValidConfirmPassword'

type TPprops = {
  button: JSX.Element
}

export const Register: React.FC<TPprops> = ({ button }) => {
  const dispatch = useAppDispatch()

  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [errorUsername, setErrorUsername] = useState<null | string>(null)
  const [errorEmail, setErrorEmail] = useState<null | string>(null)
  const [errorPassword, setErrorPassword] = useState<null | string>(null)
  const [errorConfirmPassword, setErrorConfirmPassword] = useState<
    null | string
  >(null)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    const isUsernameCorrect = isValidUsername(values.username, setErrorUsername)
    const isEmailCorrect = isValidEmail(values.email, setErrorEmail)
    const isPasswordCorrect = isValidPassword(values.password, setErrorPassword)
    const isConfirmPasswordCorrect = isValidConfirmPassword(
      values.password,
      values.confirmPassword,
      setErrorConfirmPassword
    )

    if (
      isUsernameCorrect &&
      isEmailCorrect &&
      isPasswordCorrect &&
      isConfirmPasswordCorrect
    ) {
      const data = {
        username: values.username,
        email: values.email,
        password: values.password,
      }
      dispatch(createNewUser(data))
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Input
        label='Имя'
        name='username'
        placeholder='Vladislav'
        type='text'
        value={values.username}
        onChange={handleInput}
        error={errorUsername}
        onFocus={() => setErrorUsername(null)}
        style={{ marginBottom: '30px' }}
      />
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
      <Input
        label='Подтвердить пароль'
        name='confirmPassword'
        placeholder='Введите пароль'
        type='password'
        value={values.confirmPassword}
        onChange={handleInput}
        error={errorConfirmPassword}
        onFocus={() => setErrorConfirmPassword(null)}
        style={{ marginBottom: '40px' }}
      />
      {button}
    </form>
  )
}
