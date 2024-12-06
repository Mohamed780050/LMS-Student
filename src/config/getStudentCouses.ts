import Axios from "./Axios";

export default async function getStudentCourses(id: string) {
  try {
    const response = await Axios.get(`/students/${id}`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
