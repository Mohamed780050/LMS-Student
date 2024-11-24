import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import Sidebar from "./Sidebar";
import SearchInput from "./SearchInput";
function NavBar() {
  return (
    <>
      <nav className="p-4 border-b justify-between h-full flex items-center bg-white shadow-sm">
        <div className="flex items-center space-x-3">
          <Sheet>
            <SheetTrigger className="md:hidden  hover:opacity-75 transition">
              <Menu size={30} />
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bg-white max-w-[350px]">
              <Sidebar />
            </SheetContent>
          </Sheet>
          <div className="hidden md:block min-w-80">
            <SearchInput />
          </div>
        </div>
        <div>Info</div>
      </nav>
    </>
  );
}
export default NavBar;
