import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  categorySelected: "",
  courseTitle: "",
  isCourseLoading: false,
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
    changeIsCourseLoading: (state, action: PayloadAction<boolean>) => {
      state.isCourseLoading = action.payload;
    },
  },
});

export const { changeCategory, changeCourseTitle, changeIsCourseLoading } =
  global.actions;
export default global.reducer;
