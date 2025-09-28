import { industryExpartDatas } from "@/lib/constants/db";
import IndustryExpartSingle from "./industry-expart-single";

const IndustryExpart = () => {
  return (
    <div className="bg-[#0D0A25] pt-10 pb-10 w-full">
      <div className="flex-center flex-col flex-1 wrapper w-full relative gap-10">
        <div className="flex-between gap-5">
          <h1 className="text-white text-5xl">Our Industry Expertises</h1>
          <p className="text-white">
            Our deep understanding of diverse industries empowers us to design
            customized software solutions. Let our expertise be the catalyst for
            your next triumph
          </p>
        </div>
        <div className="flex justify-between flex-wrap gap-20">
          {industryExpartDatas.map((data) => {
            return (
              <div key={data.title} className="basis-1/6">
                <IndustryExpartSingle Icon={data.icon} title={data.title} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IndustryExpart;
