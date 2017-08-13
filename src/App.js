import React from 'react'
import { Provider } from 'react-redux'
import Webboard from './components/Webboard'
import configStore from './redux'

const store = configStore()
const App = () =>
  <Provider store={store}>
    <Webboard />
  </Provider>
export default App
