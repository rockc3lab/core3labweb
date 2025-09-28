"use client";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

const MainNavigation = () => {
  return (
    <div className="space-x-2">
      <DesktopNav />
      <MobileNav />
    </div>
  );
};

export default MainNavigation;
