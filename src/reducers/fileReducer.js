import { createSlice } from '@reduxjs/toolkit'
import { fileUpload  } from '../actions/fileAction';
import {viewfiles,deleteFile} from '../actions/filename';
const initialState = {
    file:{},
    loading: false,
    fileList: [],
    error: false,
    success: false,
    message: null,
    // isLogin: false,
   }
const userSlice = createSlice({
  name:'fileList',
  initialState,
  reducers: {},
  extraReducers: {

    [viewfiles.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [viewfiles.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true
      state.error = false
      state.fileList = payload
      // console.log("all file lists are==",payload);

    },
    [viewfiles.rejected]: (state, { payload }) => {
      state.loading = false 
      state.error = true 
      state.message = payload.message
      state.success = false
      state.files = false
    },
    // uploadfiles
    [fileUpload.pending]: (state) => {
      state.loading = true
      state.error = null     
    },
    [fileUpload.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true // send file succefully
      state.error = false
      state.fileList = payload
      state.message = payload.message
      // console.log("filemen is:",payload);

    },
    [fileUpload.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = true
      state.message = payload.message
      state.success = false
      console.log("uploadfile fial");
    },

        //delete
    [deleteFile.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [deleteFile.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true
      state.error = false
      state.fileList = payload
      // console.log("yibe file filemen=:",payload);
    },
    [deleteFile.rejected]: (state, { payload }) => {
      state.loading = false 
      state.error = true 
      state.message = payload.message
      state.success = false
      },
    },})
export default userSlice.reducer