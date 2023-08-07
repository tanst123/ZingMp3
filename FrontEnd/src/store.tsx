import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import rootReducer from "./reducer/zingSlice";

const reducer = combineReducers({
  root: rootReducer,
});
const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
