import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux"
import rootReducer from "./reducer/zingSlice";

const reducer = combineReducers({
    root: rootReducer
})
const store = configureStore({
    reducer : reducer
})

export default store;