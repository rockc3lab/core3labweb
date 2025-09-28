import process1 from "@/assets/images/icon/process1.png";
import process2 from "@/assets/images/icon/process2.png";
import process3 from "@/assets/images/icon/process3.png";
import process4 from "@/assets/images/icon/process4.png";
import process from "@/assets/images/process/work_process.png";
import Image from "next/image";
import SectionHeading from "../ui/section-heading";
import RoundStep from "./round-step";
const StepHome = () => {
  return (
    <div className="flex-center flex-col flex-1 wrapper w-full relative gap-10 md:gap-0">
      <SectionHeading
        dimTitle="Ease Steps"
        title="Our Working"
        subTitle="Process"
      />
      <div className="flex-between flex-col md:flex-row gap-10 z-1">
        <RoundStep
          title="01. Research Project"
          image={process1}
          classNames="bg-[#32cc73]"
        />
        <RoundStep
          title="02. Find Ideas"
          image={process2}
          classNames="bg-[#fa6742] md:mt-[65px]"
        />
        <RoundStep
          title="03. Start Optimization"
          image={process3}
          classNames="bg-[#478fff]"
        />
        <RoundStep
          title="04. Reach Target"
          image={process4}
          classNames="bg-[#ffb72f] md:mt-[65px]"
        />
      </div>
      <Image
        src={process}
        height={106}
        width={1396}
        alt="Who We Are"
        className="hidden md:block absolute bottom-40"
      />
    </div>
  );
};

export default StepHome;
