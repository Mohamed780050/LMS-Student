import getAllCourses from "@/config/getAllCourse";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import SelectedCoursesSkeleton from "./Skeletons/SelectedCoursesSkeleton";
import { CourseInfo } from "@/interfaces/interfaces";
import CourseCard from "./CourseCard";

function SelectedCourses() {
  const [params] = useSearchParams();
  const { data, isLoading } = useQuery({
    queryKey: [`${params.get("category")}`, `${params.get("title")}`],
    queryFn: async () =>
      await getAllCourses(
        `${params.get("category") ? params.get("category") : ""}`,
        `${params.get("title") ? params.get("title") : ""}`
      ),
  });
  return (
    <>
      <ul className="grid grid-cols-1  xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 mt-4">
        {isLoading ? (
          <SelectedCoursesSkeleton />
        ) : (
          <>
            {data.map((course: CourseInfo, index: number) => (
              // TODO: make sure to put the process the to the course card
              <CourseCard
                key={index}
                _id={course._id}
                courseName={course.courseName}
                ImageURL={course.ImageURL}
                chapters={course.chapters.length}
                price={course.price}
                category={course.catagory}
              />
            ))}
          </>
        )}
      </ul>
      {!data?.length && !isLoading && (
        <div className="text-center mt-6 text-lg text-muted-foreground">
          No courses
        </div>
      )}
    </>
  );
}
export default SelectedCourses;
