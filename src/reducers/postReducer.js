    import { createSlice } from '@reduxjs/toolkit'
    import { postData,
             viewPost,
             deletePost,
             updatePost,
             searchByDate,
             searchByMonth,
             searchByYear
            } from '../actions/postAction';

    const initialState = {
      // file:{},
      loading: false,
      posts: [],
      error: false,
      success: false,
      message: null,
      isLogin: false
    }
    const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers: {},
    extraReducers: {
    // post
    [postData.pending]: (state) => {
      state.loading = true
      state.error = null     
    },
    [postData.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true // send file succefully
      state.error = false
      state.posts = payload
      state.message = payload.message
      // console.log("poststo register  is:",payload);
    },

      [postData.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = true
        state.message = payload.message
        state.success = false
        // console.log("post fial");
      },    
          //delete post    
      [deletePost.pending]: (state) => {
        state.loading = true
        state.error = null     
      },
      [deletePost.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.success = true // send file succefully
        state.error = false
        state.posts = payload
        state.message = payload.message
        // console.log("posts is:",payload);
      },
      [deletePost.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = true
        state.message = payload.message
        state.success = false
        // console.log("uploadfile fial");
      },

        
        //update post    
        [updatePost.pending]: (state) => {
          state.loading = true
          state.error = null     
        },
        [updatePost.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.success = true // send file succefully
          state.error = false
          state.posts = payload
          state.message = payload.message
          // console.log("update posts is:",payload);
        },
        [updatePost.rejected]: (state, { payload }) => {
          state.loading = false
          state.error = true
          state.message = payload.message
          state.success = false
          // console.log("update fial");
        },

        [viewPost.pending]: (state) => {
          state.loading = true
          state.error = null     
        },
        [viewPost.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.success = true // send file succefully
          state.error = false
          state.posts = payload
          state.message = payload.message
          // console.log("posts data isss:",payload);
        },
        [viewPost.rejected]: (state, { payload }) => {
          state.loading = false
          state.error = true
          state.message = payload.message
          state.success = false
          // console.log("uploadfile fial");
        },
        [searchByDate.pending]: (state) => {
          state.loading = true
          state.error = null     
        },
        [searchByDate.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.success = true // send file succefully
          state.error = false
          state.posts = payload
          state.message = payload.message
          // console.log("posts data isss:",payload);
        },
        [searchByDate.rejected]: (state, { payload }) => {
          state.loading = false
          state.error = true
          state.message = payload.message
          state.success = false
          // console.log("uploadfile fial");
        },
        [searchByDate.pending]: (state) => {
          state.loading = true
          state.error = null     
        },
        [searchByDate.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.success = true // send file succefully
          state.error = false
          state.posts = payload
          state.message = payload.message
          // console.log("posts data isss:",payload);
        },
        [searchByDate.rejected]: (state, { payload }) => {
          state.loading = false
          state.error = true
          state.message = payload.message
          state.success = false
          // console.log("uploadfile fial");
        },
        [searchByMonth.pending]: (state) => {
          state.loading = true
          state.error = null     
        },
        [searchByMonth.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.success = true // send file succefully
          state.error = false
          state.posts = payload
          state.message = payload.message
          // console.log("posts data isss:",payload);
        },
        [searchByMonth.rejected]: (state, { payload }) => {
          state.loading = false
          state.error = true
          state.message = payload.message
          state.success = false
          // console.log("uploadfile fial");
        },
        [searchByYear.pending]: (state) => {
          state.loading = true
          state.error = null     
        },
        [searchByYear.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.success = true // send file succefully
          state.error = false
          state.posts = payload
          state.message = payload.message
          // console.log("posts data isss:",payload);
        },
        [searchByYear.rejected]: (state, { payload }) => {
          state.loading = false
          state.error = true
          state.message = payload.message
          state.success = false
          // console.log("uploadfile fial");
        }
      }})
    export default postSlice.reducer