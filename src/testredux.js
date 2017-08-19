import configStore from './redux'
import { signup } from './redux/modules/auth'

const store = configStore()
store.subscribe(() => console.log(store.getState()))
store.dispatch(signup('topscores@gmail.com', '1234'))
