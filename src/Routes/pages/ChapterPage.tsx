import getAChapter from "@/config/getAChapter";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function ChapterPage() {
  const { chapterId } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: [""],
    queryFn: async () => await getAChapter(`${chapterId}`),
  });
  return <div>ChapterPage {chapterId}
  {data?.chapterName}
  </div>;
}
export default ChapterPage;
