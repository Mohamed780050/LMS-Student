import data from "@/data/data";
import { cn } from "@/lib/utils";
import { changeCategory } from "@/Redux/global";
import { RootState } from "@/Redux/store";
import { useDispatch, useSelector } from "react-redux";
const CategoryItems = data.CategoryItems;
function Category() {
  const dispatch = useDispatch()
  const {categorySelected} = useSelector((state:RootState) => state.global)
  return (
    <ul className="flex space-x-2 overflow-x-auto pb-2 categoryScroll">
      {CategoryItems.map((item) => (
        <li>
          <button
            onClick={() => dispatch(changeCategory(item.label))}
            className={cn(
              "flex items-center text-nowrap py-2 px-3 border border-slate-200 rounded-full gap-x-1 hover:border-sky-700 transition text-sm",
              categorySelected === item.label && "border-sky-700 bg-sky-200/40"
              
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
