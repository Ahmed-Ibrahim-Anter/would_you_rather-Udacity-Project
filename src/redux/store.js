import { configureStore } from '@reduxjs/toolkit'
import authUserSlice  from './authSlice'
import questionSlice from './questionSlice'
import userSlice from './userSlice'
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    question: questionSlice,
    user: userSlice,
    auth: authUserSlice,
   
  },
 middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})