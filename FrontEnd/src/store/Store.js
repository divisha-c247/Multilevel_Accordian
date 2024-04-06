import { configureStore } from "@reduxjs/toolkit";
import { Role } from "./slice/Slice";
const Store = configureStore({
  reducer: { 
    Role :Role.reducer,
  },
});
export default Store;
