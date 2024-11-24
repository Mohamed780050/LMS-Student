import { Skeleton } from "@/components/ui/skeleton";
import getACourse from "@/config/getACourse";
import { RootState } from "@/Redux/store";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function CoursePage({ isLoading }: { isLoading: boolean }) {
  const { courseName } = useSelector(
    (state: RootState) => state.CourseInfo.course
  );
  return <span>{isLoading ? <Skeleton/> : courseName}</span>;
}
export default CoursePage;
