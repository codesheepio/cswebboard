// action creators
export const signup = () => ({
  type: 'SIGNUP',
})
export const signupSuccess = (id, accessToken, email) => ({
  type: 'SIGNUP_SUCCESS',
  payload: {
    id,
    accessToken,
    email,
  },
})
export const signupFail = error => ({
  type: 'SIGNUP_FAIL',
  payload: error,
})
export const login = () => ({
  type: 'LOGIN',
})
export const loginSuccess = (id, accessToken, email) => ({
  type: 'LOGIN_SUCCESS',
  payload: {
    id,
    accessToken,
    email,
  },
})
export const logingFail = error => ({
  type: 'LOGIN_FAIL',
  payload: error,
})
export const logout = () => ({
  type: 'LOGOUT',
})
export const logoutSuccess = () => ({
  type: 'LOGOUT_SUCCESS',
})
export const logoutFail = () => ({
  type: 'LOGOUT_FAIL',
})
