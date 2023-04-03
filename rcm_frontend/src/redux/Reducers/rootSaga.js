import { all } from "redux-saga/effects";
import { watchPatientSaga } from "./patientsReducer";

export function* watcherSaga() {
  yield all([watchPatientSaga()]);
}
