import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";
import CourseSidebarChapters from "./CourseSidebarChapters";
import CourseSidebarChaptersSkeleton from "./Skeletons/CourseSidebarChaptersSkeleton";
import { Skeleton } from "./ui/skeleton";

function CourseSidebar({ isLoading }: { isLoading: boolean }) {
  const { courseName } = useSelector(
    (state: RootState) => state.CourseInfo.course
  );
  console.log(isLoading);
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
      <div className="p-7 flex items-center justify-center border-b">
        <h1 className="font-semibold w-full text-center">
          {isLoading ? <Skeleton className="h-6 w-full" /> : courseName}
        </h1>
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
