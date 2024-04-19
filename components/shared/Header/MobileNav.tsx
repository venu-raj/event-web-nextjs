import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import NavItem from "./NavItem";

const MobileNav = () => {
  return (
    <nav className=" md:hidden">
      <Sheet>
        <SheetTrigger className=" align-middle">
          <Image
            src="/menu.svg"
            alt="menu"
            width={30}
            height={30}
            className=" cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className=" flex flex-col gap-7 bg-white md:hidden">
          <NavItem />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
