import { put, takeEvery } from "redux-saga/effects";

import { getPatientsAPI, createPatientsAPI, editPatientsAPI } from "../../apis";
import {
  getAllPatientsSlice,
  addPatientSlice,
  resetPatientStateSlice,
  setPatientError,
  editPatientGetDataSlice,
  editPatientSlice,
} from "../Action/patientsAction";
import {
  GET_ALL_PATIENTS,
  CREATE_PATIENT,
  EDIT_PATIENTS,
  EDIT_PATENTS_DATA,
} from "../Types";
import { toast } from "react-toastify";

export function* getPatientsSaga() {
  try {
    const clients = yield getPatientsAPI();
    yield put(getAllPatientsSlice(clients.data));
  } catch (error) {
    console.error(error);
    if (typeof error.response.data.messages === "object") {
      yield put(resetPatientStateSlice());
      error.response.data.messages.map((item) => {
        return toast.error(`${item.message} `);
      });
    } else if (
      typeof error.response.data.message === "undefined" ||
      typeof error.response.data === "undefined"
    ) {
      toast.error(error.message);
      yield put(resetPatientStateSlice());
    }
    toast.error(error.response.data.message);
    yield put(resetPatientStateSlice());
  }
}

export function* createPatientSaga(action) {
  try {
    const response = yield createPatientsAPI(action.payload);
    yield put(addPatientSlice(response.data));
    toast.success("Patient Added Sucessfully");
  } catch (error) {
    console.error(error);

    if (
      typeof error.response.data !== "undefined" &&
      typeof error.response.data.messages === "object"
    ) {
      yield put(setPatientError());
      error.response.data.messages.map((item) => {
        return toast.error(`${item.message} `);
      });
    } else if (
      typeof error.response.data === "undefined" ||
      typeof error.response.data.message === "undefined"
    ) {
      toast.error(error.message);
      yield put(setPatientError());
    } else {
      toast.error(error.response.data.message);
      yield put(setPatientError());
    }
  }
}

export function* editPatientSaga(action) {

  yield put(editPatientGetDataSlice(action.payload));
}

export function* editPatientsDataSaga(action) {
  try {
    const response = yield editPatientsAPI(action.payload);

    yield put(editPatientSlice(response.data));
    toast.success("Patient Updated Sucessfully");
  } catch (error) {
    console.error(error);
    if (
      typeof error.response.data !== "undefined" &&
      typeof error.response.data.messages === "object"
    ) {
      yield put(setPatientError());
      error.response.data.messages.map((item) => {
        return toast.error(`${item.message} `);
      });
    } else if (
      typeof error.response.data === "undefined" ||
      typeof error.response.data.message === "undefined"
    ) {
      toast.error(error.message);
      yield put(setPatientError());
    } else {
      toast.error(error.response.data.message);
      yield put(setPatientError());
    }
  }
}

//

export function* watchPatientSaga() {
  yield takeEvery(GET_ALL_PATIENTS, getPatientsSaga);
  yield takeEvery(CREATE_PATIENT, createPatientSaga);
  yield takeEvery(EDIT_PATIENTS, editPatientSaga);
  yield takeEvery(EDIT_PATENTS_DATA, editPatientsDataSaga);
}
