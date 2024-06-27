import { createSlice } from '@reduxjs/toolkit'
import { loginUser } from "../actions/usersAction"
import { registerUser } from "../actions/usersAction"
// initial state
const initialState = {
    loading: false,
    users:[],
    filter:[],
    user: {},
    error: false,
    success: false,
    message: null,
  }
  // users slice
  const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
  // Register user
  // [registerUser.pending]: (state) => {
  //   state.loading = true
  //   state.error = null
  //   console.log("user pending");
  // },
  // [registerUser.fulfilled]: (state, { payload }) => {
  //   state.loading = false
  //   state.users = payload
  //   state.success = true
  //   state.error = false
  //   state.message = payload.message
  //   console.log(payload.users);
  // },
  // [registerUser.rejected]: (state, { payload }) => {
  //   state.loading = false
  //   state.error = true
  //   state.message = payload.message
  //   state.success = false
  //   console.log("user rejected");
  // },
    // user login
    [loginUser.pending]: (state) => {
      state.loading = true
      state.error = null
      console.log("user pending");
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.users = payload
      state.success = true
      state.error = false
      state.message = payload.message
      console.log("yyyyyyyyyyy",payload.users);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = true
      state.message = payload.message
      state.success = false
      console.log("user rejected");
    }
   }})
export default usersSlice.reducer