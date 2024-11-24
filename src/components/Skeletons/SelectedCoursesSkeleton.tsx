import { Skeleton } from "../ui/skeleton";

function SelectedCoursesSkeleton() {
  return (
    <>
      {Array.from({ length: 7 }, (_, index) => (
        <li className="border rounded-lg p-3 h-full" key={index}>
          <div className="relative w-full aspect-video rounded-sm overflow-hidden">
            <Skeleton className="w-full h-36" />
          </div>
          <div className="flex flex-col pt-2">
            <p className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
              <Skeleton className="w-24 h-7" />
            </p>
            {/* <p className="text-xs mt-2">
              <Skeleton className="w-24 h-4" />
            </p> */}
            <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
              <div className="flex items-center gap-x-1 text-slate-500">
                <Skeleton className="w-24 h-6" />
              </div>
            </div>
            <p className="text-md md:text-sm font-medium text-slate-700">
              <Skeleton className="w-24 h-6" />
            </p>
          </div>
        </li>
      ))}
    </>
  );
}
export default SelectedCoursesSkeleton;
