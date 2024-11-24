import { CourseChaptersInterface } from "@/interfaces/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {chapters:CourseChaptersInterface[]} = {
  chapters:[{
    _id:"",
    AuthorId:"",
    chapterName:"",
    CourseId:"",
    Date:{
      full:""
      ,normal:""
    },
    description:"",
    isFree:false,
    isPublished:false,
    position:0,
    videoURL:""
  }]
};
export const chapters = createSlice({
  name: "chapters",
  initialState,
  reducers: {
    changeChaptersInfo: (state, action: PayloadAction<CourseChaptersInterface[]>) => {
      state.chapters = action.payload;
    },
  },
});

export const { changeChaptersInfo } = chapters.actions;
export default chapters.reducer;