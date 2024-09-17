import { NavLink } from 'react-router-dom';
import { AppRoutes } from '../lib/router';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu"
import { HeartHandshake, Linkedin, Github } from 'lucide-react';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

function MainNavigation() {
  const getActiveClassName = ({ isActive }: { isActive: boolean }): string | undefined => isActive ? "p-4 bg-accent text-accent-foreground rounded-sm" : "p-4";

  const menuItems = [
    { to: AppRoutes.HOME, label: 'Home' },
    { to: AppRoutes.RESUME, label: 'Resume' },
    { to: AppRoutes.ABOUT, label: 'Achievements' },
    { to: AppRoutes.CONTACT, label: 'Contact' },
  ];

  return (
    <header className="flex h-header w-full shrink-0 items-center px-4 md:px-6 border-b sticky">
      <div className="w-[250px]">
        <NavLink to={AppRoutes.HOME} className="flex items-center gap-2 text-lg font-semibold sm:text-base">
          <HeartHandshake className="h-6 w-6" />
          <span className=''>Yuliia Malovichko</span>
        </NavLink>
      </div>
      <div className="flex w-full">
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.to}>
                <NavLink
                  to={item.to}
                  className={getActiveClassName}
                  end={item.to === AppRoutes.HOME}
                >
                  {item.label}
                </NavLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `${getActiveClassName({ isActive })} block`
                  }
                  end={item.to === AppRoutes.HOME}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex ml-auto gap-3">
        <a href="https://www.linkedin.com/in/yuliia-malovichko-98807a6a/" target="_blank">
          <Linkedin />
        </a>
        <a href="https://github.com/juliamalovi" target="_blank">
          <Github />
        </a>
      </div>
    </header>
  );
}

export default MainNavigation;
