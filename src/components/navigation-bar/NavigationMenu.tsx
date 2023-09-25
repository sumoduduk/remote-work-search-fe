import { Link } from "react-router-dom";

import { NavItem } from "@/types/nav";
import { cn } from "@/lib/utils";

export interface MainNavProps {
  items?: NavItem[];
}

export function NavigationMenu({ items }: MainNavProps) {
  return (
    <div className="flex flex-1 gap-6 md:gap-10">
      <Link to="/" className="flex w-[200px] items-center space-x-2">
        <span className="inline-block font-bold">RemoteWork Finder</span>
      </Link>
      {items?.length ? (
        <ul className="hidden flex-1 justify-center gap-6 md:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <li key={index}>
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center text-sm font-medium text-muted-foreground ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                      item.disabled && "cursor-not-allowed opacity-80",
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              ),
          )}
        </ul>
      ) : null}
    </div>
  );
}
