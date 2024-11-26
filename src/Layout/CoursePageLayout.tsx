import CourseNavbar from "@/components/CourseNavbar";
import CourseSidebar from "@/components/CourseSidebar";
import getACourse from "@/config/getACourse";
import CoursePage from "@/Routes/pages/CoursePage";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function CoursePageLayout() {
  const { id } = useParams();
  const { isLoading } = useQuery({
    queryKey: [""],
    queryFn: () => getACourse(`${id}`),
  });
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-60 w-full fixed inset-y-0 z-50 ">
        <CourseNavbar />
      </div>
      <div className="hidden md:flex h-full w-60 flex-col fixed inset-y-0 z-50">
        <CourseSidebar isLoading={isLoading} />
      </div>
      <main className="md:pl-60 h-full pt-[80px]">
        <CoursePage isLoading={isLoading} />
      </main>
    </div>
  );
}
export default CoursePageLayout;
