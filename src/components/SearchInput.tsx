import { useDispatch } from "react-redux";
import { Input } from "./ui/input";
import { changeCourseTitle } from "@/Redux/global";
import { useRef } from "react";

function SearchInput() {
  const courseTitle = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();
  return (
    <div className="md:pl-56 min-w-64 md:min-w-96">
      <Input
        ref={courseTitle}
        placeholder="search for....."
        onChange={() => {
          const timer = setTimeout(() => {
            console.log(courseTitle.current?.value);
            dispatch(changeCourseTitle(`${courseTitle.current?.value}`));
            return () => clearTimeout(timer);
          }, 1500);
        }}
      />
    </div>
  );
}
export default SearchInput;
