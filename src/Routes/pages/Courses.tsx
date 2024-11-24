import Category from "@/components/Category";
import SearchInput from "@/components/SearchInput";
import SelectedCourses from "@/components/SelectedCourses";

function Courses() {
  return (
    <>
      <div className="px-6 pt-2 md:hidden md:mb-0">
        <SearchInput />
      </div>
      <div className="px-6 pt-2">
        <Category />
        <SelectedCourses />
      </div>
    </>
  );
}
export default Courses;
