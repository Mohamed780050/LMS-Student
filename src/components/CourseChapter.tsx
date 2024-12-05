import { CourseChaptersInterface } from "@/interfaces/interfaces";
import ChapterVideo from "./chapter/chapterVideo";

function CourseChapter({
  chapterInfo,
}: {
  chapterInfo: CourseChaptersInterface;
}) {
  return (
    <div className="p-4">
      <ChapterVideo isFree={chapterInfo.isFree} />
    </div>
  );
}
export default CourseChapter;
