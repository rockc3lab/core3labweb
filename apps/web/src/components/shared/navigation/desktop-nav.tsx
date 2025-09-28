"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { menuItems } from "@/lib/constants";
import Link from "next/link";

const DesktopNav = () => {
  const navItems: NavItem[] = menuItems;
  const renderNavItem = (item: NavItem) => {
    if (item.subItems) {
      return (
        <NavigationMenuItem key={item.title}>
          <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
          <NavigationMenuContent className="z-10">
            <ul className="grid w-[200px] gap-4">
              {item.subItems.map((component) => (
                <li key={component.title}>
                  <NavigationMenuLink asChild>
                    <Link href={component.href || "#"}> {component.title}</Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    }
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link key={item.href} href={item.href || "#"}>
            {item?.title}
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  };
  return (
    <NavigationMenu viewport={false} className="hidden md:block">
      <NavigationMenuList>{navItems.map(renderNavItem)}</NavigationMenuList>
    </NavigationMenu>
  );
};
export default DesktopNav;
