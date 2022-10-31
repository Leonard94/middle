import { VALIDATE_ERRORS } from '../../global-constans'

export const isValidConfirmPassword = (
  password: string,
  confirmPassword: string,
  setErrorText: (error: string) => void
): boolean | void => {
  if (confirmPassword.length === 0) {
    return setErrorText(VALIDATE_ERRORS.confirmPasswordIsEmpty)
  }

  return (
    confirmPassword === password ||
    setErrorText(VALIDATE_ERRORS.confirmPasswordIsNotMatch)
  )
}
