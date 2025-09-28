import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import MainNavigation from "../navigation";

const Header = () => {
  return (
    <header
      className="w-full border-b 
       fixed top-0 z-10 
       bg-[#FBFBFB]  
    shadow-md shadow-black/5 dark:bg-neutral-600 
    dark:shadow-black/10 lg:flex-wrap lg:justify-start"
    >
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/logo2.png"
              alt={`${APP_NAME}`}
              height={48}
              width={48}
              priority={true}
            />
            <span className="hidden lg:block font-bold text-4xl ml-1.5">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <MainNavigation />
        {/* <div className="space-x-2"></div> */}
      </div>
    </header>
  );
};

export default Header;
