import { Skeleton } from "../ui/skeleton";

function HomeSkeleton() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <Skeleton className="w-full h-[73.6px]" />
        <Skeleton className="w-full h-[73.6px]" />
      </div>
      <ul className="grid grid-cols-1  xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
      {Array.from({ length: 7 }, (_, index) => (
        <li className="border rounded-lg p-3 h-full" key={index}>
          <div className="relative w-full aspect-video rounded-sm mb-2 overflow-hidden">
            <Skeleton className="w-full h-full" />
          </div>
          <div className="flex flex-col">
            <p className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
              <Skeleton className="w-full h-6" />
            </p>
            {/* <p className="text-xs mt-2">
              <Skeleton className="w-24 h-4" />
            </p> */}
            <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs pr-4">
                <Skeleton className="w-full h-6" />
            </div>
            <p className="text-md md:text-sm font-medium text-slate-700 pr-8">
              <Skeleton className="w-full h-6" />
            </p>
          </div>
        </li>
      ))}
      </ul>
    </>
  );
}
export default HomeSkeleton;
