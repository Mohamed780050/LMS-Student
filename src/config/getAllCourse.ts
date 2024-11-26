import Axios from "./Axios";

export default async function getAllCourses(category?: string, title?: string) {
  try {
    const response = await Axios.get(
      `/courses/?${category ? `category=${category}` : ""}${
        title ? `&title=${title}` : ""
      }`
    );
    return response.data.Courses;
  } catch (err) {
    console.log(err);
  }
}
