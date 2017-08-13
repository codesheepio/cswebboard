import configStore from './redux'
import {
  emailChange,
  passwordChange,
  confirmChange,
} from './redux/modules/signup'

const store = configStore()
store.subscribe(() => console.log(store.getState()))
store.dispatch(emailChange('topscores@gmail.com'))
store.dispatch(passwordChange('secret'))
store.dispatch(confirmChange('secret'))
