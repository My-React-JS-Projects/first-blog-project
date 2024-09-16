import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./authSlice"

const store = configureStore({
  reducer: {
    auth: authSlice,
    // TODO: Add another slice for posts
  },
})

export default store
