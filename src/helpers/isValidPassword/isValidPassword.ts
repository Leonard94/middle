import { VALIDATE_ERRORS } from '../../global-constans'

export const isValidPassword = (
  password: string,
  setErrorText: (error: string) => void
): boolean | void => {
  if (password.length === 0) {
    return setErrorText(VALIDATE_ERRORS.passwordIsEmpty)
  }

  return (
    /^(?=.*[A-Za-z])[A-Za-z\d]{8,}$/.test(String(password).toLowerCase()) ||
    setErrorText(VALIDATE_ERRORS.passwordIsNotValid)
  )
}
