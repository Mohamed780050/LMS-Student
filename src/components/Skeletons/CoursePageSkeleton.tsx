import data from "@/data/data";
import { Skeleton } from "../ui/skeleton";

function CoursePageSkeleton() {
  return (
    <div className="p-1">
      <div className="aspect-video max-h-[525px] relative overflow-hidden w-full">
        <Skeleton className="w-full h-full" />
        <ul className="absolute top-1 right-1">
          {data.CourseData.map((item) => (
            <li className="p-2 border flex bg-white items-center space-x-3 rounded-md select-none shadow-sm hover:scale-105 transition-all">
              <span className="text-sky-500">{item.Icon}</span>
              <Skeleton className="h-6 w-40" />
            </li>
          ))}
        </ul>
      </div>
      <div className="p-5">
        <h1 className="">
          <Skeleton className="h-7 w-28" />
        </h1>
        <pre className="my-2 border-b pb-2 flex flex-col gap-2">
          <div className="">
            <Skeleton className="h-5 w-full" />
          </div>
          <div className="pr-6">
            <Skeleton className="h-5 w-full" />
          </div>
          <div className="pr-12">
            <Skeleton className="h-5 w-full" />
          </div>
          <div className="pr-24">
            <Skeleton className="h-5 w-full" />
          </div>
        </pre>
        <div className="pt-2 flex items-center justify-between">
          <Skeleton className="w-[68px] h-9" />
          <Skeleton className="h-9 w-[52px]" />
        </div>
      </div>
    </div>
  );
}
export default CoursePageSkeleton;
