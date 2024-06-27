   // config
import { configureStore } from '@reduxjs/toolkit'
import postReducer from '../reducers/postReducer'
  // reducers
import fileReducer from '../reducers/fileReducer'
import filenameReducer from '../reducers/filenameReducer'
import  userReducer  from '../reducers/userReducer'
// store
const store = configureStore({
  // reducer
  reducer: {
    fileList: fileReducer,
    filename: filenameReducer,
    posts: postReducer,
    users: userReducer,
  }
})
// export
export default store
// import fileReducer from '../reducers/fileReducer'
// import filenameReducer from '../reducers/filenameReducer'
// import  userReducer  from '../reducers/userReducer'
// import postReducer from '../reducers/postReducer'
// import yearReducer from '../reducers/yearReducer'
// import {configureStore} from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage'
// import {combineReducers} from "redux"; 
// import { persistReducer } from 'redux-persist'
// import thunk from 'redux-thunk'
// import monthReducer from '../reducers/monthReducer'
// import dayReducer from '../reducers/dayReducer'
// import fileDayReducer from '../reducers/fileDayReducer'
// import fileMonthReducer from '../reducers/fileMonthReducer'
// import fileYearReducer from '../reducers/fileYearReducer'
// const reducers = combineReducers({
//          files: fileReducer,
//          filename: filenameReducer,
//          users: userReducer,
//          posts:postReducer,
//          postYear:yearReducer,
//          postMonth:monthReducer,
//          postDay:dayReducer,
//          fileYear:fileYearReducer,
//          fileMonth:fileMonthReducer,
//          fileDay:fileDayReducer
//           });
//   const persistConfig = {
//             key: 'root',
//             storage
//           };
//   const persistedReducer = persistReducer(persistConfig, reducers); 
//   const store = configureStore({
//       reducer: persistedReducer,
//       devTools: process.env.NODE_ENV !== 'production',
//       middleware: [thunk]
//      });
// export default store;
