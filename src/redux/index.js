import { createStore } from 'redux'

const initialState = {
  signup: {
    email: '',
    password: '',
    confirm: '',
    error: '',
  },
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP/EMAIL_CHANGE':
      return {
        ...state,
        signup: {
          ...state.signup,
          email: action.payload,
        },
      }
    case 'SIGNUP/PASSWORD_CHANGE':
      return {
        ...state,
        signup: {
          ...state.signup,
          password: action.payload,
        },
      }
    case 'SIGNUP/CONFIRM_CHANGE':
      return {
        ...state,
        signup: {
          ...state.signup,
          confirm: action.payload,
        },
      }
    case 'SIGNUP/VALIDATE_ERROR':
      return {
        ...state,
        signup: {
          ...state.signup,
          error: action.payload,
        },
      }
    default:
      return state
  }
}

const configStore = () => {
  // Running on nodejs disable devtool
  if (typeof window === 'undefined') {
    return createStore(reducer)
  }
  return createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}

export default configStore
