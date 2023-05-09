import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import entertainmentReducer from "./reducers/entReducer";
import entertainmentSaga from "./sagas/entertainmentSaga";

const saga = createSagaMiddleware()

const store = configureStore({
    reducer: {
        entertainment: entertainmentReducer,
    },
    middleware:[saga]
})
saga.run(entertainmentSaga)

export default store;