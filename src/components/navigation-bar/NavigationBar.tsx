import { ModeToggle } from "../toggle-theme";
import MobileMenu from "./MobileMenu";
import { NavigationMenu } from "./NavigationMenu";

const mainNav = [
  {
    title: "About Us",
    href: "/about",
  },
];

const NavigationBar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-muted-border bg-background mb-12">
      <nav className="container flex h-16 items-center space-x-4 sm:justify-between px-4 md:px-32">
        <NavigationMenu items={mainNav} />
        <MobileMenu items={mainNav} />
        <div className="hidden w-[200px] items-center justify-end space-x-4 md:flex">
          <div className="hidden items-center space-x-1 md:flex">
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
