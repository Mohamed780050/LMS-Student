import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";
import data from "@/data/data";
import CoursePageSkeleton from "@/components/Skeletons/CoursePageSkeleton";

function CoursePage() {
  const { courseName, ImageURL, Description, price } = useSelector(
    (state: RootState) => state.CourseInfo.course
  );
  const { isCourseLoading } = useSelector((state: RootState) => state.global);

  return (
    <>
      {isCourseLoading ? (
        <CoursePageSkeleton/>
      ) : (
        <div className="p-1">
          <div className="aspect-video max-h-[525px] relative overflow-hidden w-full">
            <img className="" src={ImageURL} alt={`${courseName}`} />
            <ul className="absolute top-1 right-1">
              {data.CourseData.map((item) => (
                <li className="p-2 border flex bg-white items-center space-x-3 rounded-md select-none shadow-sm hover:scale-105 transition-all">
                  <span className="text-sky-500">{item.Icon}</span>
                  <p>40+ Hours of content</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-5">
            <h1 className="text-xl font-semibold">{courseName}</h1>
            <pre className="my-2 text-wrap border-b pb-2">{Description}</pre>
            <div className="pt-2 flex items-center justify-between">
              <Button className="bg-emerald-500 hover:bg-emerald-600">
                Enroll
              </Button>
              <p className="font-bold text-3xl">{price}$</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default CoursePage;
