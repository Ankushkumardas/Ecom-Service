import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./slices/auth-slice.js";

const store = configureStore({
  reducer: {
    auth: authreducer,
  },
});
export default store;
