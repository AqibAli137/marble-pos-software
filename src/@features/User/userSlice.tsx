import React from 'react'
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  name: '',
  isLoading: true,
  users: [],
  loggedInUser: {},
  initialUser:{}
}

export const userLogin = createAsyncThunk('user/userLogin', async (values: any, thunkAPI) => {
  const resp = await axios.post('https://localhost:7016/api/Auth/Login', values)
  return resp.data
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload
    },
    logoutUser: (state) => {
      state.loggedInUser = {}
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state, {type, payload}) => {
        state.isLoading = true
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loggedInUser = action.payload.user
        state.isLoading = false
      })
      .addCase(userLogin.rejected, (state) => {
        state.isLoading = false
      })
  },
})

// Action creators are generated for each case reducer function
export const {changeName, logoutUser} = userSlice.actions
export default userSlice.reducer
