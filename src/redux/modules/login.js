// action creators
export const emailChange = email => ({
  type: 'LOGIN/EMAIL_CHANGE',
  payload: email,
})
export const passwordChange = password => ({
  type: 'LOGIN/PASSWORD_CHANGE',
  payload: password,
})
export const validateError = error => ({
  type: 'LOGIN/VALIDATE_ERROR',
  payload: error,
})
