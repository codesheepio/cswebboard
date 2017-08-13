// action creators
export const emailChange = email => ({
  type: 'SIGNUP/EMAIL_CHANGE',
  payload: email,
})
export const passwordChange = password => ({
  type: 'SIGNUP/PASSWORD_CHANGE',
  payload: password,
})
export const confirmChange = confirm => ({
  type: 'SIGNUP/CONFIRM_CHANGE',
  payload: confirm,
})
export const validateError = error => ({
  type: 'SIGNUP/VALIDATE_ERROR',
  payload: error,
})
