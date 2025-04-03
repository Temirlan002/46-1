import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./counterSlice"

export const store = configureStore({
    reducer: {  
        usersReducer
    }
})