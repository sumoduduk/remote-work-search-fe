import { Button } from "@/components/ui/button";
import { SheetTrigger } from "@/components/ui/sheet";

const MenuTrigger = () => {
  return (
    <SheetTrigger asChild className="md:hidden">
      <Button variant="ghost" size="sm" className="relative">
        {/* <Icons.menu /> */}
        <span className="sr-only">Toggle Menu</span>
      </Button>
    </SheetTrigger>
  );
};

export default MenuTrigger;
