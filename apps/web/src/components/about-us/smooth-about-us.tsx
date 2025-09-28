import aboutUs from "@/assets/images/c3lab/about-us2.png";
import { Origami, Phone, Users } from "lucide-react";
import Image from "next/image";
import SmoothAboutUsSingle from "./smooth-about-us-single";
const SmoothAboutUs = () => {
  return (
    <div className="pt-10 pb-10 bg-[#0c0a25] text-white">
      <div className="flex-center flex-col w-full relative gap-10 flex-1 wrapper">
        <h1 className="text-5xl font-bold text-center">
          Simple, streamlined, and effective—this is how we work.
        </h1>
        <div className="py-4 w-full flex flex-col justify-between md:flex-row gap-5  flex-wrap">
          <div className="flex flex-col gap-5 basis-1/2">
            <SmoothAboutUsSingle
              Icon={Phone}
              iconClass="bg-[#d9d3ff] text-black"
              title="Arrange a Planning Session"
              description="Meet with us to discuss your business objectives. We'll craft a personalized approach, set clear goals, establish timelines, and determine the resources necessary to achieve them."
            />
            <SmoothAboutUsSingle
              Icon={Users}
              iconClass="bg-[#d3fee8] text-black"
              title="Build the Team That Delivers"
              description="Accelerate your project setup, select a collaborative approach, and integrate our top-tier experts with your objectives."
            />
            <SmoothAboutUsSingle
              Icon={Origami}
              iconClass="bg-[#c5e8ff] text-black"
              title="Begin Your Venture with Positivity"
              description="Set key goals with us, and we'll get started right away. You'll receive proactive updates as we adapt to your evolving needs—your satisfaction drives our excellence."
            />
          </div>
          <Image
            src={aboutUs}
            height={500}
            width={300}
            alt="about us"
            className="basis-1/3 hidden md:block mr-5 h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SmoothAboutUs;
