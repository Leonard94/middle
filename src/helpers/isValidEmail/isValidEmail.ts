import { VALIDATE_ERRORS } from '../../global-constans'

export const isValidEmail = (
  email: string,
  setErrorText: (error: string) => void
): boolean | void => {
  if (email.trim().length === 0) {
    return setErrorText(VALIDATE_ERRORS.emailIsEmpty)
  }

  const regex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

  return (
    regex.test(email.toLowerCase()) ||
    setErrorText(VALIDATE_ERRORS.emailIsNotValid)
  )
}
