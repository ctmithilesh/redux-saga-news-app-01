import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import entertainmentReducer from "./reducers/entReducer";
import entertainmentSaga from "./sagas/entertainmentSaga";
import thunk from "redux-thunk";
import todoReducer from "./reducers/todoReducer";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    entertainment: entertainmentReducer,
    todos:todoReducer
  },
  middleware: [saga, thunk]
});
saga.run(entertainmentSaga);

export default store;
