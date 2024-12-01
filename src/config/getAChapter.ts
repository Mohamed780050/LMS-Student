import Axios from "./Axios";

export default async function getAChapter(chapterId: string) {
  try {
    const response = await Axios.get(
      `/chapters/published/${chapterId}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
