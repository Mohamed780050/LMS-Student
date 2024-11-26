import { RootState } from "@/Redux/store";
import { Lock, PlayCircle } from "lucide-react";
import { useSelector } from "react-redux";

function CourseSidebarChapters() {
  const { chapters } = useSelector((state: RootState) => state.chapters);
  return (
    <>
      <ul className="flex flex-col w-full gap-2">
        {chapters.map((chapter) => (
          <li
            className={`flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20 cursor-pointer ${
              // chapter.active &&
              // "text-slate-700 bg-slate-200/20 hover:bg-slate-200/20 hover:text-slate-700"
              ""
              // TODO: make sure to add active to chapter and isCompleted.
              // chapter.isCompleted && "text-emerald-700 hover:text-emerald-700"
              // chapter.isCompleted && chapter.active && "bg-emerald-200/20"
            }`}
          >
            <div
              className={`flex items-center gap-x-2 py-4 ${
                // chapter.active && "text-slate-700"
                // chapter.isCompleted && "text-emerald-700"
                ""
              }`}
            >
              {chapter.isFree ? <PlayCircle size={22} /> : <Lock size={22} />}
              <p>{chapter.chapterName}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
export default CourseSidebarChapters;
