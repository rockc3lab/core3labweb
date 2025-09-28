"use client";
import { techDatas } from "@/lib/constants/db";
import DynamicCarousel from "./dynamic-carousel";
import TechSingle from "./tech-single";
const Technologies = () => {
  return (
    <div className="pt-10 pb-10">
      <div className="flex-center flex-col w-full relative gap-10">
        <div className="flex justify-center flex-col gap-5">
          <h1 className="text-5xl">Expertise Across All Technology Stacks</h1>
          <p>
            We recognize that in today’s competitive market, businesses need
            custom software solutions to stay ahead.
          </p>
        </div>
        <div className="py-4 w-full flex flex-col gap-5">
          <DynamicCarousel
            key="ltr"
            dataList={techDatas || []}
            width={300}
            height={200}
            duration={25}
            direction="ltr"
            Comp={TechSingle}
          />

          {/* Left to right */}
          <DynamicCarousel
            key="rtl"
            dataList={techDatas}
            width={300}
            height={200}
            duration={25}
            direction="rtl"
            Comp={TechSingle}
          />
          {/* Left to right */}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
