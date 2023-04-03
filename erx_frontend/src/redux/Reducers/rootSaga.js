import { all } from "redux-saga/effects";
import { watchAppointmentSaga } from "./appointmentReducer";

export function* watcherSaga() {
  yield all([watchAppointmentSaga()]);
}
