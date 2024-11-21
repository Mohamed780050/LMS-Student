import { Input } from "./ui/input";
import { useRef } from "react";
import { useSearchParams } from "react-router-dom";

function SearchInput() {
  const [searchParams, setSearchParams] = useSearchParams();
  const courseTitle = useRef<HTMLInputElement | null>(null);
  return (
    <div className="md:pl-56 min-w-64 md:min-w-96">
      <Input
        ref={courseTitle}
        placeholder="search for....."
        onChange={() => {
          setSearchParams({
            ...Object.fromEntries(searchParams.entries()),
            title: `${courseTitle.current?.value}`,
          });
        }}
      />
    </div>
  );
}
export default SearchInput;
