import { CourseInfo as Courseinerface } from "@/interfaces/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MyCourse = Omit<Courseinerface, "IsPublished" | "completed" | "total">;

const initialState: { course: MyCourse } = {
  course: {
    _id: "",
    courseName: "",
    Description: "",
    ImageURL: "",
    price: 0,
    Date: {
      normal: "",
      full: "",
    },
    catagory: "",
    AuthorId: "",
    Attachments: [],
    chapters: [],
    students: 0,
    rating: 0,
  },
};
export const CourseInfo = createSlice({
  name: "courseInfo",
  initialState,
  reducers: {
    changeCourseInfo: (
      state,
      action: PayloadAction<
        Omit<Courseinerface, "IsPublished" | "completed" | "total">
      >
    ) => {
      state.course = action.payload;
    },
  },
});

export const { changeCourseInfo } = CourseInfo.actions;
export default CourseInfo.reducer;
