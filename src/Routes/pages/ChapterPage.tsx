import CourseChapter from "@/components/CourseChapter";
import getAChapter from "@/config/getAChapter";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function ChapterPage() {
  const { chapterId } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: [`${chapterId}`],
    queryFn: async () => await getAChapter(`${chapterId}`),
  });
  return (
    <div className="flex flex-col max-w-4xl mx-auto pb-20">
      {isLoading ? "Loading" : <CourseChapter chapterInfo={data} />}
    </div>
  );
}
export default ChapterPage;
