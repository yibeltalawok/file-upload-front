import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { handleSuccess, handleError } from "../utils/toast";

export const postData = createAsyncThunk(
  "posts",
  async (formData, thunkAPI) => {
    // for(let [name, value] of formData) {
    //   console.log("PostAction=",`${name} = ${value}`); // key1 = value1, then key2 = value2
    // }
  console.log("comming here")
      try {
        let baseUrl = `http://localhost:11278/fileupload-api/posts/postData`;
        //Or
        let response = await axios.post(baseUrl,formData);
        // condition
        if (response.status === 200) {
         handleSuccess("በትክክል ፋይል ልከዋል !");
         alert("በትክክል መመዝገብ ችላዋል")
          return response.data;          
        } else {
         handleError(response.message);
          return thunkAPI.rejectWithValue(response.data);
        }
      } catch (e) {
        console.log("Error", e.response.data);
       handleError(e.response.data.message);
        return thunkAPI.rejectWithValue(e.response.data);
      }});
     
      export const viewPost = createAsyncThunk(
        "posts",
        async (thunkAPI) => {
          try {
            let URL = `http://localhost:11278/fileupload-api/posts/getData`;
            let response = await axios.get(URL);
            // console.log("response=",response)
            if (response.status === 200) {
              return response.data;
            } else {
              handleError(response.message);
              return thunkAPI.rejectWithValue(response.data);
            }
          } catch (e) {
            console.log("Error", e.response.data);
            handleError("loading...");
            return thunkAPI.rejectWithValue(e.response.data);
          }});
              export const deletePost = createAsyncThunk(
                "posts",
                async (id, thunkAPI) => {
                  try {
                    let URL = `http://localhost:11278/fileupload-api/posts/${id}`;
                      console.log('view files action');
                    // let response = await createContact(message);
                    let response = await axios.delete(URL);
                    // console.log("response:",response)
                    if (response.status === 200) {
                      return response.data;
                    } else {
                      handleError(response.message);
                      return thunkAPI.rejectWithValue(response.data);
                    }
                  } catch (e) {
                    console.log("Error", e.response.data);
                    handleError("loading...");
                    return thunkAPI.rejectWithValue(e.response.data);
                  }});
    
                  export const updatePost = createAsyncThunk(
                    "posts",
                    async (postData, thunkAPI) => {
                      // const id=data.ID;
                      //  console.log("id=",postData.id)
                      // for(let [name, value] of postData.formData) {
                      //   console.log("postAction=",`${name} = ${value}`); // key1 = value1, then key2 = value2
                      //    }
                      // const postData=data.postData;
                      try {
                        let URL = `http://localhost:11278/fileupload-api/posts/${postData.id}`;
                          console.log('view files action');
                        // let response = await createContact(message);
                        let response = await axios.put(URL,postData.formData);
                        console.log("response:",response)
                        if (response.status === 200) {
                          return response.data;
                        } else {
                          handleError(response.message);
                          return thunkAPI.rejectWithValue(response.data);
                        }
                      } catch (e) {
                        console.log("Error", e.response.data);
                        handleError("loading...");
                        return thunkAPI.rejectWithValue(e.response.data);
                      }});
                      export const fetchPost = createAsyncThunk(
                        "posts",
                        async (id, thunkAPI) => {
                          // const id=data.ID;
                          console.log(id)
                          // const postData=data.postData;
                          try {
                            let URL = `http://localhost:11278/fileupload-api/posts/${id}`;
                              console.log('view files action');
                            // let response = await createContact(message);
                            let response = await axios.get(URL);
                            console.log("response:",response)
                            if (response.status === 200) {
                              return response.data;
                            } else {
                              handleError(response.message);
                              return thunkAPI.rejectWithValue(response.data);
                            }
                          } catch (e) {
                            console.log("Error", e.response.data);
                            handleError("loading...");
                            return thunkAPI.rejectWithValue(e.response.data);
                          }});
                          // Search by date
                     export const searchByDate = createAsyncThunk(
                            "posts",
                            async (searchData, thunkAPI) => {
                              // const id=data.ID;
                              // alert(searchData.year+searchData.month+searchData.day)
                              // const postData=data.postData;
                              try {
                                let URL = `http://localhost:11278/fileupload-api/posts/searchByDate?year=${searchData.year}&month=${searchData.month} &day=${searchData.day}`;
                                  console.log('view files action');
                                // let response = await createContact(message);
                                let response = await axios.get(URL);
                                console.log("response:",response)
                                if (response.status === 200) {
                                  return response.data;
                                } else {
                                  handleError(response.message);
                                  return thunkAPI.rejectWithValue(response.data);
                                }
                              } catch (e) {
                                console.log("Error", e.response.data);
                                handleError("loading...");
                                return thunkAPI.rejectWithValue(e.response.data);
                              }});
                              // Search by Month
                              export const searchByMonth = createAsyncThunk(
                                "posts",
                                async (searchData, thunkAPI) => {
                                  // const id=data.ID;
                                  // alert(searchData.year+searchData.month)
                                  // const postData=data.postData;
                                  try {
                                    let URL = `http://localhost:11278/fileupload-api/posts/searchByMonth?year=${searchData.year}&month=${searchData.month}`;
                                      console.log('view files action');
                                    // let response = await createContact(message);
                                    let response = await axios.get(URL);
                                    console.log("response:",response)
                                    if (response.status === 200) {
                                      return response.data;
                                    } else {
                                      handleError(response.message);
                                      return thunkAPI.rejectWithValue(response.data);
                                    }
                                  } catch (e) {
                                    console.log("Error", e.response.data);
                                    handleError("loading...");
                                    return thunkAPI.rejectWithValue(e.response.data);
                                  }});
                                                                // Search by Month
                              export const searchByYear = createAsyncThunk(
                                "posts",
                                async (searchData, thunkAPI) => {
                                  // const id=data.ID;
                                  // alert(searchData.year)
                                  // const postData=data.postData;
                                  try {
                                    let URL = `http://localhost:11278/fileupload-api/posts/searchByYear?year=${searchData.year}`;
                                      console.log('view files action');
                                    // let response = await createContact(message);
                                    let response = await axios.get(URL);
                                    console.log("response:",response)
                                    if (response.status === 200) {
                                      return response.data;
                                    } else {
                                      handleError(response.message);
                                      return thunkAPI.rejectWithValue(response.data);
                                    }
                                  } catch (e) {
                                    console.log("Error", e.response.data);
                                    handleError("loading...");
                                    return thunkAPI.rejectWithValue(e.response.data);
                                  }});