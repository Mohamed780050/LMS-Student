import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useRef } from "react";
import { useSearchParams } from "react-router-dom";

function SearchInput() {
  // TODO: don't forget to use Debounce and how to use it
  const [searchParams, setSearchParams] = useSearchParams();
  const courseTitle = useRef<HTMLInputElement | null>(null);
  return (
    <div className="md:ml-56 w-full relative">
      <Input
        ref={courseTitle}
        placeholder="Search for a course"
        defaultValue={
          searchParams.get("title") ? `${searchParams.get("title")}` : undefined
        }
        onChange={() => {
          setSearchParams({
            ...Object.fromEntries(searchParams.entries()),
            title: `${courseTitle.current?.value}`,
          });
        }}
        className="bg-slate-100 focus-visible:ring-slate-200 rounded-full"
      />
      <Search
        onClick={() => courseTitle.current?.focus()}
        className="w-4 h-4 absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-slate-600"
      />
    </div>
  );
}
export default SearchInput;
