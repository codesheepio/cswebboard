import { createStore, applyMiddleware } from 'redux'
import { combineReducer } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import authReducer from './modules/auth'
import signupReducer from './modules/signup'

const reducer = combineReducer({
  auth: authReducer,
  signup: signupReducer,
})
const configStore = () => {
  // Running on nodejs disable devtool
  if (typeof window === 'undefined') {
    return createStore(reducer, applyMiddleware(thunk))
  }
  const composeEnhancers = composeWithDevTools({})
  return createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
}

export default configStore
