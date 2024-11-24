import { Skeleton } from "../ui/skeleton";

function CourseSidebarChaptersSkeleton() {
  return (
    <ul className="flex flex-col w-full gap-2">
      {Array.from({ length: 5 }, (_, index) => (
        <li
          className={`flex items-center gap-x-2 text-slate-500 text-sm font-[500] px-6 transition-all hover:text-slate-600 hover:bg-slate-300/20 cursor-pointer`}
        >
          <div className={`flex items-center gap-x-2 py-4 w-full`}>
            <Skeleton className="h-[22px] w-full" />
          </div>
        </li>
      ))}
    </ul>
  );
}
export default CourseSidebarChaptersSkeleton;
