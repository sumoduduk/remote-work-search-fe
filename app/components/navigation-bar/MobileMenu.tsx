import { NavItem } from "~/types/nav";
import { cn } from "~/lib/utils";

import { ModeToggle } from "../toggle-theme";
import { Sheet, SheetContent } from "../ui/sheet";
import MenuTrigger from "./MenuTrigger";
import { Link } from "@remix-run/react";

export interface MobileMenuProps {
  items?: NavItem[];
}

const MobileMenu = ({ items }: MobileMenuProps) => {
  const renderItems = (item: NavItem, index: number) => {
    if (!item.href) return null;
    return (
      <li key={index}>
        <Link
          to={item.href}
          className={cn(
            "items-center text-center text-sm font-medium text-muted-foreground",
            item.disabled && "w-full flex-1 cursor-not-allowed opacity-80",
          )}
        >
          {item.title}
        </Link>
      </li>
    );
  };

  return (
    <Sheet>
      <MenuTrigger />
      <SheetContent className="flex flex-col items-center justify-start w-1/2">
        {items?.length ? (
          <ul className="my-8 flex flex-col justify-center gap-6 text-center">
            {items?.map(renderItems)}
          </ul>
        ) : null}
        <div className="flex space-x-5 items-center justify-between">
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
