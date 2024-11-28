import { Skeleton } from "@/components/ui/skeleton";
import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";

function CoursePage({ isLoading }: { isLoading: boolean }) {
  const { courseName } = useSelector(
    (state: RootState) => state.CourseInfo.course
  );
  return <span>{isLoading ? <Skeleton/> : courseName}</span>;
}
export default CoursePage;
