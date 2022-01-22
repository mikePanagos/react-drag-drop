import { configureStore } from '@reduxjs/toolkit'
import navSlice from './features/nav-slice'
export const store = configureStore({
  reducer: {
      navagation:navSlice
  },
})