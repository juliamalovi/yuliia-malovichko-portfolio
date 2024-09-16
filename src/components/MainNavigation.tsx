import { NavLink } from 'react-router-dom';
import { AppRoutes } from '../lib/router';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu"
import { HeartHandshake, Linkedin, Github } from 'lucide-react';


function MainNavigation() {
  const getActiveClassName = ({ isActive }: { isActive: boolean }): string | undefined => isActive ? "p-4 bg-accent text-accent-foreground rounded-sm" : "p-4";

  return (
    <header className="flex h-header w-full shrink-0 items-center px-4 md:px-6 border-b sticky">
      <div className="w-[250px]">
        <NavLink to={AppRoutes.HOME} className="flex items-center gap-2 text-lg font-semibold sm:text-base">
          <HeartHandshake className="h-6 w-6" />
          <span className=''>Yuliia Malovichko</span>
        </NavLink>
      </div>
      <div className="flex w-full justify-center">
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavLink
                to={AppRoutes.HOME}
                className={getActiveClassName}
                end
              >
                Home
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                to={AppRoutes.RESUME}
                className={getActiveClassName}
              >
                Resume
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                to={AppRoutes.ABOUT}
                className={getActiveClassName}
              >
                Achievements
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                to={AppRoutes.CONTACT}
                className={getActiveClassName}
              >
                Contact
              </NavLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
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
