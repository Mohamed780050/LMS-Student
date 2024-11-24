import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";
import CourseSidebarChapters from "./CourseSidebarChapters";

function CourseSidebar({ isLoading }: { isLoading: boolean }) {
  const { courseName, _id, AuthorId } = useSelector(
    (state: RootState) => state.CourseInfo.course
  );
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
      <div className="p-8 flex items-center justify-center border-b">
        <h1 className="font-semibold">{isLoading ? "loading" : courseName}</h1>
        {/* TODO: add progress */}
      </div>
      {isLoading ? "Loading" : <CourseSidebarChapters />}
    </div>
  );
}
export default CourseSidebar;
