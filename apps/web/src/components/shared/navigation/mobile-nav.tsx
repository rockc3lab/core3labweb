"use client";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { menuItems } from "@/lib/constants";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});
  const navItems: NavItem[] = menuItems;
  const toggleSubmenu = (title: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const renderNavItem = (item: NavItem) => {
    if (item.subItems) {
      return (
        <Collapsible
          key={item.title}
          open={openSubmenus[item.title]}
          onOpenChange={() => toggleSubmenu(item.title)}
          className="w-full"
        >
          <div className="flex items-center justify-between">
            <span className="px-4 py-2 text-lg font-medium">{item.title}</span>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                {openSubmenus[item.title] ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="pl-6">
            {item.subItems.map((subItem) => (
              <Link
                key={subItem.href}
                href={subItem.href || "#"}
                className="block px-4 py-2 text-lg font-medium hover:bg-accent rounded-md"
                onClick={() => setOpen(false)}
              >
                {subItem.title}
              </Link>
            ))}
          </CollapsibleContent>
        </Collapsible>
      );
    }

    return (
      <Link
        key={item.href}
        href={item.href || "#"}
        className="px-4 py-2 text-lg font-medium hover:bg-accent rounded-md block"
        onClick={() => setOpen(false)}
      >
        {item.title}
      </Link>
    );
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[300px] sm:w-[400px]"
        aria-label="Navigation Menu"
      >
        <nav className="flex flex-col gap-2 pt-6">
          {navItems.map(renderNavItem)}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
