import { CourseInfo } from "@/interfaces/interfaces";
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
}: Pick<CourseInfo, "_id" | "ImageURL" | "courseName" | "price"> & {
  category: string;
  chapters: number;
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
          <p className="text-md md:text-sm font-medium text-slate-700">
            ${price}
          </p>
        </div>
      </Link>
    </li>
  );
}
export default CourseCard;
