import { configureStore } from "@reduxjs/toolkit";
import studentFormSlice from "../features/studentFormSlice";




export const store = configureStore({
    reducer:{
        infoStudentForm:studentFormSlice
    }
})