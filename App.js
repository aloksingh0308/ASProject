import React from 'react'
import Login from './src/auth/login'
import Routes from './src/utils/routes'
import { Provider } from 'react-redux'
import store from './store'
export default function App() {
  return (
    < Provider store={store} >
      <Routes />
    </Provider>
  )
}
