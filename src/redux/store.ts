import { configureStore } from '@reduxjs/toolkit'
import {handleAuth} from './reducers/loginReducer'

export const store = configureStore({
  reducer: {
    handleAuth,
  },
})
