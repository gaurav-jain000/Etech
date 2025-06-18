import { Link } from "react-router";
import { navLinksArr } from "~/lib/shared";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { MenuIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function Header() {
  return (
    <header className="flex items-center max-md:justify-between gap-4 maximus py-12">
      <Logo />
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button size="icon" variant={"secondary"}>
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
          </SheetHeader>
          <nav className="px-4">
            <Accordion type="single" collapsible>
              {navLinksArr.map((navLink) => {
                if (!navLink.menu)
                  return (
                    <SheetClose key={navLink.title} asChild>
                      <Link
                        to={navLink.link}
                        className="text-xl py-4 w-full block my-0"
                      >
                        {navLink.title}
                      </Link>
                    </SheetClose>
                  );
                return (
                  <AccordionItem
                    value={navLink.title}
                    key={navLink.title}
                    className="border-b-transparent!"
                  >
                    <div className="flex items-center justify-between gap-2 my-2">
                      <SheetClose className=" text-xl">
                        {navLink.title}
                      </SheetClose>
                      <AccordionTrigger className="bg-gray-100 px-2" />
                    </div>
                    <AccordionContent className="py-2 overflow-hidden border rounded-xl border-gray-400">
                      <ul className="flex flex-col gap-2">
                        {navLink.menu.map((menuItem) => (
                          <li key={menuItem.title}>
                            <SheetClose
                              className="w-full! justify-start!"
                              asChild
                            >
                              <Link
                                to={menuItem.link}
                                className={navigationMenuTriggerStyle()}
                              >
                                {menuItem.title}
                              </Link>
                            </SheetClose>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </nav>
        </SheetContent>
      </Sheet>
      <NavigationMenu viewport={false} className="max-md:hidden">
        <NavigationMenuList>
          {navLinksArr.map((navLink) => {
            if (!navLink.menu)
              return (
                <Link
                  key={navLink.title}
                  to={navLink.link}
                  className={navigationMenuTriggerStyle()}
                >
                  {navLink.title}
                </Link>
              );
            return (
              <NavigationMenuItem key={navLink.title}>
                <NavigationMenuTrigger>{navLink.title}</NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[300px]">
                  <ul className="flex flex-col gap-2">
                    {navLink.menu.map((menuItem) => (
                      <li key={menuItem.title}>
                        <Link
                          to={menuItem.link}
                          className={navigationMenuTriggerStyle()}
                        >
                          {menuItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

export function Logo() {
  return (
    <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">
      Etech.
    </Link>
  );
}
