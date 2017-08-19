import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const initialState = {
  auth: {
    id: '',
    accessToken: '',
    email: '',
    error: '',
    loading: false,
  },
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
    case 'SIGNUP': {
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: true,
        },
      }
    }
    case 'SIGNUP_SUCCESS': {
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
        },
      }
    }
    case 'SIGNUP_FAIL': {
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          error: action.payload,
        },
      }
    }
    default:
      return state
  }
}

const configStore = () => {
  // Running on nodejs disable devtool
  if (typeof window === 'undefined') {
    return createStore(reducer, applyMiddleware(thunk))
  }
  const composeEnhancers = composeWithDevTools({})
  return createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
}

export default configStore
