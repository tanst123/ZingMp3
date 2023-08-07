import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sideMenu : []
}

const zingSlice = createSlice({
    name : "zing",
    initialState: initialState,
    reducers : {
        MENU_LAYOUT : (state, action) => {
            state.sideMenu = action.payload;
        }
    }
})

const {actions, reducer} = zingSlice;
export const {MENU_LAYOUT} = actions;
export default reducer;