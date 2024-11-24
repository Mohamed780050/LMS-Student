import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";

function CourseSidebarChapters() {
  const {chapters} = useSelector((state:RootState) => state.chapters)
  return (
    <>
      <ul className="flex flex-col w-full">
        {chapters.map(chapter => <li>{chapter.chapterName}</li>)}
      </ul>
    </>
  );
}
export default CourseSidebarChapters;
