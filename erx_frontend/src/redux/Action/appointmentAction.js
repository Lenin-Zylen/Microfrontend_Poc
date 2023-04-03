import { createSlice } from "@reduxjs/toolkit";

export const appointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    appointmentData: [],
    createAppointmentData: [],
    isLoading: false,
    successMsg:"",
    errorMsg: "",
    successMeassage:"",
    appointmentEditData:{},
  },

  reducers: {
    getAllAppointmentSlice: (state, action) =>{

        state.appointmentData = action.payload;
        return state; 
    },
    addAppointmentSlice: (state, action) =>{

       // state.successMsg = action.payload;
        return state; 
    },
    resetAppointmentStateSlice: (state, action) =>{
        state.appointmentData = [];
        return state;
    },
    setAppointmentError: (state,payload) =>{
        return state;
    },
    editAppointmentGetDataSlice:(state, action) =>{

      state.appointmentEditData = action.payload;
      return state;
    },
    editAppointmentSlice:(state, action) =>{
    //  console.log(action.payload)
    },
    resetAppointmentSlice:(state, action)=>{
      state.appointmentEditData = {};
    }

  },
});


export default appointmentSlice.reducer;
export const {
getAllAppointmentSlice,
addAppointmentSlice,
resetAppointmentStateSlice,
setAppointmentError,
editAppointmentGetDataSlice,
editAppointmentSlice, 
resetAppointmentSlice

} = appointmentSlice.actions;
