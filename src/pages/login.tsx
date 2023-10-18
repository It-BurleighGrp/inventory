import { LoginTemplate } from '@/Components'
import { Provider } from 'react-redux'
import React from 'react'
import { store } from '@/redux/store'

export default function LoginPage() {
  return (
    <Provider store={store}>
      <LoginTemplate />
    </Provider>
  )
}
