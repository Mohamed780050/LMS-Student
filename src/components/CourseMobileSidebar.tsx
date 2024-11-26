import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CourseSidebar from "./CourseSidebar";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";

function CourseMobileSidebar() {
  const { isCourseLoading } = useSelector((state: RootState) => state.global);
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition ">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <CourseSidebar isLoading={isCourseLoading} />
      </SheetContent>
    </Sheet>
  );
}
export default CourseMobileSidebar;
