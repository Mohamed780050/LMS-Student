import { store } from "@/Redux/store";
import Axios from "./Axios";
import { changeCourseInfo } from "@/Redux/CourseInfo";
import getAllCourseChapter from "./getAllCoursechapter";
import { changeChaptersInfo } from "@/Redux/chapters";

export default async function getACourse(id: string) {
  try {
    const response = await Axios.get(`/courses/${id}`);
    store.dispatch(changeCourseInfo(response.data));
    const Chapters = await getAllCourseChapter(
      response.data._id,
      response.data.AuthorId
    );
    store.dispatch(changeChaptersInfo(Chapters));
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
