import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataStudentForm1: {
    names: "",
    lastNames: "",
    typeDocument: "",
    email: "",
    numberDocument: "",
    gender: "",
  },
  dataStudentForm2: {
    birthdate: "",
    department: "",
    cityId: "",
    phone: "",
    password: "",
    passwordConfirm: "",
    dataTreatment: false,
  },
  contactForm: {
    contactName: "",
    contactEmail: "",
    contactMessage: "",
  },

  bookTutoring: {
    reserveName: "",
    reserveEmail: "",
    reserveDate: "",
    reserveHour: "",
    reserveSubject: "",
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
