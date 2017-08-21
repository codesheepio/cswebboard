import * as api from '../../api'

// action creators
export const signup = (email, password) => {
  return async dispatch => {
    dispatch({ type: 'SIGNUP' })
    try {
      const credential = await api.post('http://localhost:3000/api/users', {
        email,
        password,
      })
      window.location = '/login'
      dispatch(signupSuccess())
    } catch (err) {
      console.log(err)
      dispatch(signupFail('cannot create user'))
    }
  }
}
export const signupSuccess = () => ({
  type: 'SIGNUP_SUCCESS',
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

const initialState = {
  id: '',
  accessToken: '',
  email: '',
  error: '',
  loading: false,
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'SIGNUP_SUCCESS': {
      return {
        ...state,
        loading: false,
      }
    }
    case 'SIGNUP_FAIL': {
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    }
    default:
      return state
  }
}
export default reducer
