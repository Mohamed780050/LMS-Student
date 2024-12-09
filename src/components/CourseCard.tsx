import { CourseInfo, studentCourse } from "@/interfaces/interfaces";
import { Link } from "react-router-dom";
import IconBage from "./IconBadge";
import { BookOpen } from "lucide-react";

function CourseCard({
  _id,
  ImageURL,
  category,
  chapters,
  courseName,
  price,
  showProgress = false,
  chaptersProgress,
}: Pick<CourseInfo, "_id" | "ImageURL" | "courseName" | "price"> & {
  category: string;
  chapters: number;
  showProgress?: boolean;
  chaptersProgress?: studentCourse;
}) {
  return (
    <li className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
      <Link to={`/course/${_id}`}>
        <div className="relative w-full aspect-video rounded-sm overflow-hidden">
          <img
            className="object-cover hover:scale-105 transition"
            src={`${ImageURL}`}
            alt={`${courseName}photo`}
          />
        </div>
        <div className="flex flex-col pt-2">
          <p className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
            {courseName}
          </p>
          <p className="text-xs text-muted-foreground">{category}</p>
          <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
            <div className="flex items-center gap-x-1 text-slate-500">
              <IconBage icon={BookOpen} size="sm" />
              <span>
                {chapters} {chapters === 1 ? "chapter" : "chapters"}
              </span>
            </div>
          </div>
          {!showProgress && (
            <p className="text-md md:text-sm font-medium text-slate-700">
              ${price}
            </p>
          )}
          {showProgress && chaptersProgress && (
            <div className="flex items-center justify-between space-x-2">
              <div className="w-full bg-slate-500 rounded overflow-hidden relative h-2">
                <span
                  className="bg-sky-500 absolute block h-full left-0 top-0"
                  style={{
                    width: `${
                      chaptersProgress.chapters.filter(
                        (chapter) => chapter.completed === true
                      ).length /
                      chaptersProgress.chapters.filter(
                        (chapter) => chapter.completed === false
                      ).length
                    }%`,
                  }}
                ></span>
              </div>
              <span>
                {
                  chaptersProgress.chapters.filter(
                    (chapter) => chapter.completed === true
                  ).length
                }
                %
              </span>
            </div>
          )}
        </div>
      </Link>
    </li>
  );
}
export default CourseCard;
