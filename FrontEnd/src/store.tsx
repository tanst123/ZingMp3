import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import rootReducer from "./reducer/zingSlice";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

const reducer = combineReducers({
  root: rootReducer,
});
const store = configureStore({
  reducer: reducer,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
