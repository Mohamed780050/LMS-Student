import CourseCard from "@/components/CourseCard";
import InfoCard from "@/components/InfoCard";
import getStudentCourses from "@/config/getStudentCouses";
import { CourseInfo } from "@/interfaces/interfaces";
import { useQuery } from "@tanstack/react-query";
import { CheckCircle, Clock } from "lucide-react";

function Home() {
  const user = JSON.parse(`${window.localStorage.getItem("userInfo")}`);
  const { data, isLoading } = useQuery({
    queryKey: [Home],
    queryFn: async () => await getStudentCourses(`${user.id}`),
  });
  console.log(data);
  return (
    <div className="p-6 space-y-4">
      {isLoading ? (
        "loading"
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <InfoCard numberOfItem={5} icon={Clock} label="In Progress" />
            </div>
            <div>
              <InfoCard
                numberOfItem={5}
                variant="success"
                icon={CheckCircle}
                label="In Progress"
              />
            </div>
          </div>
          <ul className="grid grid-cols-1  xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
            {data.courseInfo.map(
              (
                course: Pick<
                  CourseInfo,
                  | "_id"
                  | "ImageURL"
                  | "courseName"
                  | "price"
                  | "catagory"
                  | "chapters"
                >,
                index: number
              ) => (
                <CourseCard
                  key={index}
                  _id={`${course._id}`}
                  courseName={`${course.courseName}`}
                  ImageURL={`${course.ImageURL}`}
                  category={course.catagory}
                  price={course.price}
                  chapters={course.chapters.length}
                  showProgress={true}
                  chaptersProgress={data.studentProgress.Courses[index]}
                />
              )
            )}
          </ul>
        </>
      )}
    </div>
  );
}
export default Home;
