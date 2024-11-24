import CourseSidebar from "@/components/CourseSidebar";
import getACourse from "@/config/getACourse";
import CoursePage from "@/Routes/pages/CoursePage";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function CoursePageLayout() {
  const { id } = useParams();
  const {  isLoading } = useQuery({
    queryKey: [""],
    queryFn: () => getACourse(`${id}`),
  });
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-80 flex-col fixed inset-y-0 z-50">
         <CourseSidebar isLoading={isLoading}/>
      </div>
      <main className="md:pl-80 h-full">
         <CoursePage isLoading={isLoading}/>
      </main>
    </div>
  );
}
export default CoursePageLayout;
