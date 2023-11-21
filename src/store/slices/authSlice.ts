import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loggedInAs: undefined,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.loggedInAs = action.payload
    },
    logout: (state) => {
      state.loggedInAs = undefined
    },
  },
})

export const selectLoggedInAs = (state) => state.auth.loggedInAs;

export const { login, logout } = authSlice.actions

export default authSlice.reducer
