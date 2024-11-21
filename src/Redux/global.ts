import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  categorySelected: "",
  courseTitle:""
};
export const global = createSlice({
  name: "global",
  initialState,
  reducers: {
    changeCategory: (state, action: PayloadAction<string>) => {
      state.categorySelected = action.payload;
    },
    changeCourseTitle: (state, action: PayloadAction<string>) => {
      state.categorySelected = action.payload;
    },
  },
});

export const { changeCategory,changeCourseTitle } = global.actions;
export default global.reducer;