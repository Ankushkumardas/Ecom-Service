import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
const initialState = {
  inAuthenticated: false,
  isLoading: false,
  user: null,
};

export const registerUser=createAsyncThunk('/auth/register',
  async(formdata)=>{
    await axios.post()
  }
)
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setusers:(state,action)=>{

    }
  },
});

export const {setusers}=authSlice.actions;
export default authSlice.reducer;