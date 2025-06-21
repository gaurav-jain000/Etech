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
  SheetFooter,
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
import SignInFreeTrialCTA from "./sign-in-free-trial-cta";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4 maximus py-4 md:py-12 absolute right-0 left-0 top-0 bg-inherit">
      <Logo />
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button
            size="icon"
            variant={"secondary"}
            className="bg-signature text-white"
          >
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
          </SheetHeader>
          <nav className="px-4 grow flex flex-col justify-center gap-4">
            <Accordion type="single" collapsible className="w-full">
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
            <SignInFreeTrialCTA />
          </nav>
          <SheetFooter>
            <div className="w-fit mx-auto">
              <SocialIcons />
            </div>
          </SheetFooter>
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
                          className={navigationMenuTriggerStyle({
                            className: "w-full! justify-start bg-white",
                          })}
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
      <SignInFreeTrialCTA className="max-md:hidden" />
    </header>
  );
}

export function Logo({ theme = "light" }: { theme?: "light" | "dark" }) {
  return (
    <Link
      to="/"
      className={`text-2xl font-bold no-underline ${
        theme === "light" ? "text-gray-800" : "text-white"
      }`}
    >
      Etech.
    </Link>
  );
}

export function SocialIcons() {
  return (
    <div className="flex items-center gap-4">
      {[
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.6em"
              height="1.6em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
              ></path>
            </svg>
          ),
          link: "https://facebook.com",
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.6em"
              height="1.6em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
              ></path>
            </svg>
          ),
          link: "https://whatsapp.com",
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.6em"
              height="1.6em"
              viewBox="0 0 14 14"
            >
              <g fill="none">
                <g clipPath="url(#primeTwitter0)">
                  <path
                    fill="currentColor"
                    d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="primeTwitter0">
                    <path fill="#fff" d="M0 0h14v14H0z"></path>
                  </clipPath>
                </defs>
              </g>
            </svg>
          ),
          link: "https://x.com",
        },
      ].map((social) => (
        <a
          key={social.link}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer me"
          className="text-[var(--theme-gradient-top-left)] bg-background p-2 rounded-full hover:bg-white text-xs"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
