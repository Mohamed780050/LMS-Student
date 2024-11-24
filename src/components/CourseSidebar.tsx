import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";
import CourseSidebarChapters from "./CourseSidebarChapters";
import CourseSidebarChaptersSkeleton from "./Skeletons/CourseSidebarChaptersSkeleton";

function CourseSidebar({ isLoading }: { isLoading: boolean }) {
  const { courseName } = useSelector(
    (state: RootState) => state.CourseInfo.course
  );
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
      <div className="p-7 flex items-center justify-center border-b">
        <h1 className="font-semibold">{isLoading ? "loading" : courseName}</h1>
        {/* TODO: add progress */}
      </div>
      {isLoading ? (
        <CourseSidebarChaptersSkeleton />
      ) : (
        <CourseSidebarChapters />
      )}
    </div>
  );
}
export default CourseSidebar;
