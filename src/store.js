import React from 'react'
import {configureStore} from '@reduxjs/toolkit'
import userReducer from './@features/User/userSlice'


let middlewares = []

if (process.env.NODE_ENV === 'development') {
  const {createLogger} = require(`redux-logger`)
  const logger = createLogger({
    collapsed: (getState, action, logEntry) => !logEntry.error,
  })

  middlewares.push(logger)
}

export const store = configureStore({
  reducer: {
  user:userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(middlewares),
  devTools: process.env.NODE_ENV === 'development',
})

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
