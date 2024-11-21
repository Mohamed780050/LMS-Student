import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  categorySelected: "",
};
export const global = createSlice({
  name: "global",
  initialState,
  reducers: {
    changeCategory: (state, action: PayloadAction<string>) => {
      state.categorySelected = action.payload;
    },
  },
});

export const { changeCategory } = global.actions;
export default global.reducer;