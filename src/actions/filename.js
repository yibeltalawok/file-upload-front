import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { handleSuccess, handleError } from "../utils/toast";
export const eplusappfile = createAsyncThunk(
  "fileData",
  async (formData, thunkAPI) => {

    // for(let [name, value] of formData) {
    //   alert(`${name} = ${value}`); // key1 = value1, then key2 = value2
    // }
  console.log("comming here")

      try {
        let baseUrl = `http://localhost:11278/fileupload-api/eplusapp/create`;
        //Or
        // let baseUrl = `http://localhost:11278/fileupload-api/eplusapp/getAll`;
        let response = await axios.post(baseUrl,formData);

        // condition
        if (response.status === 200) {
         handleSuccess("በትክክል ፋይል ልከዋል !");
          return response.data;
          
        } else {
         handleError(response.message);
          return thunkAPI.rejectWithValue(response.data);
        }
      } catch (e) {
        console.log("Error", e.response.data);
       handleError(e.response.data.message);
        return thunkAPI.rejectWithValue(e.response.data);
      }

    });

  export const viewfiles = createAsyncThunk(
  "fileList",
  async (thunkAPI) => {
    try {
      let URL = `http://localhost:11278/fileupload-api/eplusapp/all`;

        console.log('view files action');
      // let response = await createContact(message);
      let response = await axios.get(URL);
      // console.log("images and other fiiles==",response)
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


        export const deleteFile = createAsyncThunk(
          "fileList",
          async (data, thunkAPI) => {
            
            const id=data.ID;
            const folder=data.folder;
            try {
              let URL = `http://localhost:11278/fileupload-api/eplusapp/${folder}/${id}`;
                console.log('view files action');
              // let response = await createContact(message);
              let response = await axios.delete(URL);
              console.log("delete file :", response);
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
