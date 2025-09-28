"use client";
import logoIcon from "@/assets/images/logo/logo-icon.png";
import image1 from "@/assets/images/services/call_to _action_img1.png";
import image2 from "@/assets/images/services/call_to _action_img2.png";
import { FacebookIcon } from "@/icons/facebook-icon";
import { LinkedInIcon } from "@/icons/LinkedIn-icon";
import { APP_NAME } from "@/lib/constants";
import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t w-full footer-bg-gradient">
      <div className="flex justify-center items-center mt-10">
        <div className="basis-1/3 hidden md:block">
          <Image src={image1} height={456} width={313} alt="core3lab" />
        </div>
        <div className="flex flex-col md:w-[500px] mb:ml-10">
          <div className="flex-center flex-col gap-5 mb-10">
            <h2 className="flex-center flex-col text-center">
              <small className="uppercase text-[#494444] text-[14px]">
                Promise to make
              </small>
              <span className="">
                <span className="text-[#2f2c2c] text-4xl font-bold">
                  Highest Quality Software
                </span>
                <br />
                <span className="text-[#fa6742] text-4xl ml-3 font-bold">
                  to take you top
                </span>
              </span>
            </h2>
            <span className="animate-border"></span>
          </div>
        </div>
        <div className="basis-1/3 self-end hidden md:block">
          <Image src={image2} height={316} width={562} alt="core3lab" />
        </div>
      </div>
      <div className="bg-black">
        <div className="flex items-start flex-col md:flex-row wrapper gap-10 md:gap-30 bg-black">
          <div className="flex flex-col shadow-2xl bg-[#202020] p-10 z-1 gap-2 rounded">
            <Image src={logoIcon} height={271} width={285} alt="Core3Lab" />
            <p className="text-center text-gray-50">Where Dreams Come True</p>
            <h1 className="font-bole text-2xl text-white mt-5">Follow us</h1>
            <div className="flex-start gap-2">
              <Link href="https://www.facebook.com/core3lab#" target="_blamk">
                <FacebookIcon className="w-8 h-8 text-white" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/core3lab"
                target="_blamk"
              >
                <LinkedInIcon className="w-8 h-8 text-white" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row items-start text-white mt-5">
              <div className="flex flex-col md:flex-row items-start gap-10">
                <div className="flex-start gap-5">
                  <div className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-full">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-2xl">
                      Dhaka, Bangladesh
                    </span>
                    <span className="font-noraml tex-xl">
                      HOUSE# 289-290, FLAT# C7,
                      <br /> ROAD#8/A (Old-15) WEST DHANMONDI, <br />
                      DHAKA 1209
                    </span>
                  </div>
                </div>
                <div className="flex-start gap-2">
                  <div className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-full">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-2xl">+8809678800544</span>
                    <span className="font-noraml tex-xl">Give us a call</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-10 md:gap-40 mt-10 p-5">
              <div className="flex items-start flex-col not-visited:items-start">
                <div className="flex flex-col gap-5 mb-5">
                  <h2 className="flex-center  flex-col">
                    <span className="flex-center flex-col md:flex-row gap-2">
                      <span className="text-white text-2xl font-bold">
                        Useful Links
                      </span>
                    </span>
                  </h2>
                  <span className="animate-border"></span>
                </div>
                <ul className="text-[#878787]">
                  <li className="mb-2">
                    <Link href="#">About Us</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="#">Services</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="#">Engagement Modes</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="#">Projects</Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-start flex-col gap-5 mb-5">
                  <h2 className="flex items-start flex-col">
                    <span className="flex items-start flex-col md:flex-row gap-2">
                      <span className="text-white text-2xl font-bold">
                        Useful Links
                      </span>
                    </span>
                  </h2>
                  <span className="animate-border"></span>
                </div>
                <ul className="text-[#878787]">
                  <li className="mb-2">
                    <Link href="#">Vacancies</Link>
                  </li>
                  <li>
                    <Link href="#">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-center bg-[#202020] text-white p-5">
        {currentYear} {APP_NAME}. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
