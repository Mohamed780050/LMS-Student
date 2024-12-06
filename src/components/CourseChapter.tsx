import { CourseChaptersInterface } from "@/interfaces/interfaces";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import ChapterVideo from "./chapter/ChapterVideo";

function CourseChapter({
  chapterInfo,
}: {
  chapterInfo: CourseChaptersInterface;
}) {
  const { price } = useSelector((state: RootState) => state.CourseInfo.course);
  return (
    <>
      <div className="p-4">
        <ChapterVideo isFree={chapterInfo.isFree} />
      </div>
      <div className="p-4 flex flex-col md:flex-row items-center justify-between border-b">
        <h2 className="text-2xl font-semibold mb-2">
          {" "}
          {chapterInfo.chapterName}
        </h2>
        <Button className="bg-emerald-500 hover:bg-emerald-600">
          Enroll for {price}$
        </Button>
      </div>
      <p>{chapterInfo.description}</p>
    </>
  );
}
export default CourseChapter;
