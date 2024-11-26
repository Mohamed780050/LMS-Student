import Axios from "./Axios";

export default async function getAllCourseChapter(
  courseId: string,
  AuthorId: string
) {
  try {
    const response = await Axios.get(
      `/chapters/?CourseId=${courseId}&AuthorId=${AuthorId}`
    );
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
