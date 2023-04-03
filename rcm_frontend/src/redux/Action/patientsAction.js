import { createSlice } from "@reduxjs/toolkit";

export const patientSlice = createSlice({
  name: "patients",
  initialState: {
    patientsData: [],
    createPatientsData: [],
    isLoading: false,
    errorMsg: "",
    successMeassage:"",
    patientEditData:{}
  },

  reducers: {
    getAllPatientsSlice: (state, action) => {
    
      
      state.patientsData = action.payload;

      return state;
    },
    addPatientSlice: (state, action) => {
    
      //state.patientsData = [action.payload, ...state.patients];
      return state;
    },
    resetPatientStateSlice: (state) => {
      state.patientsData = [];
      //state.error = true;
      return state;
    },
    setPatientError: (state) => {
      // state.error = true;
      // state.loader = false;
      return state;
    },
    editPatientGetDataSlice:(state,action)=>{

      state.patientEditData = action.payload;
      return state;
    },
    editPatientSlice:(state,action)=>{
      
    },
    patientResetDataSlice:(state,action)=>{
      state.patientEditData = {}
      return state;
    }

    // createPatientFailure:(state,action) =>{
    //     console.log(action.payload);
    //     state.isLoading = false;
    // }
  },
  //   extraReducers:(builder) =>{

  //   }
});
export default patientSlice.reducer;
export const {
  getAllPatientsSlice,
  addPatientSlice,
  resetPatientStateSlice,
  setPatientError,
  editPatientGetDataSlice,
  editPatientSlice,
  patientResetDataSlice
} = patientSlice.actions;
