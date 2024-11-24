import { configureStore } from "@reduxjs/toolkit";
import passwordLength from "./passwordLength";
import global from "./global";
import CourseInfo from "./CourseInfo";
import chapters from "./chapters";
// ...

export const store = configureStore({
  reducer: {
    passwordLength: passwordLength,
    global: global,
    CourseInfo: CourseInfo,
    chapters: chapters,
  },
});

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
