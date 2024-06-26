import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataStudentForm1: {
    studentName: "",
    surnameStudent: "",
    documentType: "",
    emailStudent: "",
    documentNumber: "",
    gender: "",
  },
  dataStudentForm2: {
    age: "",
    residenceDepartment: "",

    phoneNumber: "",
    password: "",
    passwordConfirmation: "",
    dataTreatment: false,
  },
  contactForm: {
    contactName: "",
    contactEmail: "",
    contactMessage: "",
  },
  dataForm: {},
};

const studentFormSlice = createSlice({
  name: "infoStudentForm",
  initialState,
  reducers: {
    addInfo: (state, action) => {
      state.dataForm = action.payload;
    },
  },
});

export const { addInfo, sendData } = studentFormSlice.actions;
export default studentFormSlice.reducer;
