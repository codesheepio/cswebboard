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

const initialState = {
  email: '',
  password: '',
  confirm: '',
  error: '',
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP/EMAIL_CHANGE':
      return {
        ...state,
        email: action.payload,
      }
    case 'SIGNUP/PASSWORD_CHANGE':
      return {
        ...state,
        password: action.payload,
      }
    case 'SIGNUP/CONFIRM_CHANGE':
      return {
        ...state,
        confirm: action.payload,
      }
    case 'SIGNUP/VALIDATE_ERROR':
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}
export default reducer
