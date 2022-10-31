import { VALIDATE_ERRORS } from '../../global-constans'

export const isValidUsername = (
  username: string,
  setErrorText: (error: string) => void
): boolean | void => {
  const value = username.trim().length

  if (!value) {
    return setErrorText(VALIDATE_ERRORS.nameIsEmpty)
  }

  if (value < 4) {
    return setErrorText(VALIDATE_ERRORS.nameIsTooShort)
  }

  if (value > 40) {
    return setErrorText(VALIDATE_ERRORS.nameIsTooLong)
  }

  return (
    /^[a-zA-Z ]/.test(username) || setErrorText(VALIDATE_ERRORS.nameIsNotValid)
  )
}
