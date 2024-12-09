import { store } from "@/Redux/store";
import Axios from "./Axios";
import { changeCourseInfo } from "@/Redux/CourseInfo";
import getAllCourseChapter from "./getAllCoursechapter";
import { changeChaptersInfo } from "@/Redux/chapters";
import { changeIsCourseLoading } from "@/Redux/global";

export default async function getACourse(id: string) {
  try {
    store.dispatch(changeIsCourseLoading(true));
    const response = await Axios.get(`/courses/${id}`);
    store.dispatch(changeCourseInfo(response.data));
    const Chapters = await getAllCourseChapter(
      response.data._id,
      response.data.AuthorId
    );
    store.dispatch(changeChaptersInfo(Chapters));
    store.dispatch(changeIsCourseLoading(false));
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
