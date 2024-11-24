import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import Sidebar from "./Sidebar";
import SearchInput from "./SearchInput";
const mainLocation = `${window.location.origin}/search`;
function NavBar() {
  console.log(window.location);
  // TODO: remember to remove the search input from other route from my courses route
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
            {/* {window.location.href === mainLocation && 
            <SearchInput />
          } */}
            <SearchInput />
          </div>
        </div>
        <div>Info</div>
      </nav>
    </>
  );
}
export default NavBar;
