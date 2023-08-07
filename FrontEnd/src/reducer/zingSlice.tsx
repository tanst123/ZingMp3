import { createSlice } from "@reduxjs/toolkit";

type sideMenuType = {
  id: string;
  key?: string;
  label: string;
  title: string;
  children?: sideMenuType[];
};

type state = {
  sideMenu: sideMenuType | [];
};
const initialState: state = {
  sideMenu: [],
};

const zingSlice = createSlice({
  name: "zing",
  initialState: initialState,
  reducers: {
    increase: (state, action) => {
      state.sideMenu = action.payload;
    },
  },
});

const { actions, reducer } = zingSlice;
export const { increase } = actions;
export default reducer;
