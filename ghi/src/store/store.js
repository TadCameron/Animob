import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApiSlice } from '../authApi'

export const store = configureStore({
  reducer: {
    [authApiSlice.reducerPath]: authApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApiSlice.middleware),
})

setupListeners(store.dispatch)
// apislice w endpoints
// mutations
