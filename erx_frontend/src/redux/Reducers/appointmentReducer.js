import { put, takeEvery } from "redux-saga/effects";

import { getAppointmentAPI, createAppointmentAPI, editAppointmentAPI } from "../../apis"
import { getAllAppointmentSlice,
    addAppointmentSlice,
    resetAppointmentStateSlice,
    setAppointmentError, 
    editAppointmentGetDataSlice,
    editAppointmentSlice
  } from "../Action/appointmentAction";

import { GET_ALL_APPOINTMENTS, CREATE_APPOINTMENTS, EDIT_APPOINTMENTS, EDIT_APPOINTMENTS_DATA } from "../Types";

import { toast } from "react-toastify";

export function* getAppointmentSaga() {
  try {
    const clients = yield getAppointmentAPI();
    yield put(getAllAppointmentSlice(clients.data));
  } catch (error) {
    console.error(error);
    if (typeof error.response.data.messages === "object") {
      yield put(resetAppointmentStateSlice());
      error.response.data.messages.map((item) => {
        return toast.error(`${item.message} `);
      });
    } else if (
      typeof error.response.data.message === "undefined" ||
      typeof error.response.data === "undefined"
    ) {
      toast.error(error.message);
      yield put(resetAppointmentStateSlice());
    }
    toast.error(error.response.data.message);
    yield put(resetAppointmentStateSlice());
  }
}

export function* createAppointmentSaga(action) {
  try {
    const response = yield createAppointmentAPI(action.payload);
    yield put(addAppointmentSlice(response.data));
    
    toast.success("Appointment Added Sucessfully");
  } catch (error) {
    console.error(error);

    if (
      typeof error.response.data !== "undefined" &&
      typeof error.response.data.messages === "object"
    ) {
      yield put(setAppointmentError());
      error.response.data.messages.map((item) => {
        return toast.error(`${item.message} `);
      });
    } else if (
      typeof error.response.data === "undefined" ||
      typeof error.response.data.message === "undefined"
    ) {
      toast.error(error.message);
      yield put(setAppointmentError());
    } else {
      toast.error(error.response.data.message);
      yield put(setAppointmentError());
    }
  }
}

export function* editAppointmentSaga(action) {

  yield put(editAppointmentGetDataSlice(action.payload));
}

export function* editAppointmentDataSaga(action) {
  try {
    const response = yield editAppointmentAPI(action.payload);
    yield put(editAppointmentSlice(response.data));
    
    toast.success("Appointment Updated Sucessfully");
  } catch (error) {
    console.error(error);

    if (
      typeof error.response.data !== "undefined" &&
      typeof error.response.data.messages === "object"
    ) {
      yield put(setAppointmentError());
      error.response.data.messages.map((item) => {
        return toast.error(`${item.message} `);
      });
    } else if (
      typeof error.response.data === "undefined" ||
      typeof error.response.data.message === "undefined"
    ) {
      toast.error(error.message);
      yield put(setAppointmentError());
    } else {
      toast.error(error.response.data.message);
      yield put(setAppointmentError());
    }
  }
}


export function* watchAppointmentSaga() {
  yield takeEvery(GET_ALL_APPOINTMENTS, getAppointmentSaga);
  yield takeEvery(CREATE_APPOINTMENTS, createAppointmentSaga);
  yield takeEvery(EDIT_APPOINTMENTS, editAppointmentSaga);
  yield takeEvery(EDIT_APPOINTMENTS_DATA, editAppointmentDataSaga);

}
