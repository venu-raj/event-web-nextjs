import React from "react";
import menuData from "./menuData";
import Link from "next/link";

const NavItem = () => {
  return (
    <ul className=" gap-15 items-center gap-10 md:flex-between">
      {menuData.map((menuItem) => (
        <li>
          <Link href={menuItem.path ?? "/"}>{menuItem.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItem;
