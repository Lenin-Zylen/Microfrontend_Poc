import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
// import { patientSlice } from "./Action/patientsAction";
import patientSlice from "./Action/patientsAction";
//import patientSaga from "./Reducers/patientsReducer";
import { watcherSaga } from "./Reducers/rootSaga";

const reducers = combineReducers({
  patients: patientSlice,
});
let sagaMiddleWare = createSagaMiddleware();
const middleware = [sagaMiddleWare];

const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const Store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middleware),
});

export const persistStorage = persistStore(Store);
sagaMiddleWare.run(watcherSaga);
