import { Clock, Contact, HandFist, User } from "lucide-react";
import HomeAboutUsSingle from "./home-about-us-single";

const HomeAboutUs = () => {
  return (
    <div className="pt-10 pb-10">
      <div className="flex-center flex-col w-full relative gap-10 flex-1 wrapper">
        <h1 className="text-5xl font-bold text-center">
          Together, we will pave the way to your success.
        </h1>
        <div className="py-4 w-full flex flex-col md:flex-row justify-between gap-5  flex-wrap">
          <div className="basis-1/3">
            <HomeAboutUsSingle
              Icon={User}
              iconClass="bg-[#d9d3ff]"
              title="Skilled Development Professionals"
              description="Backed by 100+ technology proficiencies, our professional developers create solutions for any challenge"
            />
          </div>
          <div className="basis-1/3">
            <HomeAboutUsSingle
              Icon={HandFist}
              iconClass="bg-[#d3fee8]"
              title="Client Relationship Specialists"
              description="Personalized strategies for every valued client."
            />
          </div>
          <div className="basis-1/3">
            <HomeAboutUsSingle
              Icon={Contact}
              iconClass="bg-[#c5e8ff]"
              title="Responsive Plan"
              description="Flexible, forward-thinking strategies that evolve with your goals."
            />
          </div>
          <div className="basis-1/3">
            <HomeAboutUsSingle
              Icon={Clock}
              iconClass="bg-[#ffd4ee]"
              title="Deadline-Driven Delivery"
              description="Your Timeline, Our Commitment. Early delivery without compromising quality."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
