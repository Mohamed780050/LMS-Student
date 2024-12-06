import toast from "react-hot-toast";
import Axios from "./Axios";

export default async function buyCourse(courseId: string, studentId: string) {
  try {
    const response = await Axios.post(`/students/buyCourse`, {
      studentId,
      courseId,
    });
    console.log(response.data);
    toast.success("You Enrolled");
    return response.data;
  } catch (err: any) {
    if (err.response.status === 401)
      toast.error(`${err.response.data.message}`);
  }
}
