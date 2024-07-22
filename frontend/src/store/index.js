import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./Auth.js"

export const store = configureStore({
    reducer: {
      auth:authReducer
    },
  })

  