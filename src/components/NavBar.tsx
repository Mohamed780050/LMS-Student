import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import Sidebar from "./Sidebar";
import SearchInput from "./SearchInput";
import ProfileDropMenu from "./ProfileDropMenu";
function NavBar() {
  // TODO: remember to remove the search input from other route from my courses route
  return (
    <>
      <nav className="p-4 border-b justify-between h-full flex items-center bg-origin shadow-sm">
        <div className="flex items-center space-x-3">
          <Sheet>
            <SheetTrigger className="md:hidden  hover:opacity-75 transition">
              <Menu size={30} />
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bg-popover max-w-[350px]">
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
        <ProfileDropMenu />
      </nav>
    </>
  );
}
export default NavBar;
