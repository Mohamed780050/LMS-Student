import data from "@/data/data";
import { cn } from "@/lib/utils";
import { useSearchParams } from "react-router-dom";
const CategoryItems = data.CategoryItems;
function Category() {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <ul className="flex space-x-2 overflow-x-auto pb-2 categoryScroll">
      {CategoryItems.map((item) => (
        <li>
          <button
            onClick={() => {
              setSearchParams({
                ...Object.fromEntries(searchParams.entries()),
                category: item.label,
              });
            }}
            className={cn(
              "flex items-center text-nowrap py-2 px-3 border border-slate-200 rounded-full gap-x-1 hover:border-sky-700 transition text-sm",
              searchParams.get("category") === item.label &&
                "border-sky-700 bg-sky-200/40"
            )}
          >
            {item.Icon}
            <span>{item.label}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
export default Category;
