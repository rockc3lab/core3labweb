import {
  AppWindow,
  AppWindowMac,
  Bug,
  CloudCheck,
  Database,
  DatabaseBackup,
  UserCircle2,
} from "lucide-react";
import PremiumSingle from "./premium-single";

const PremiumServices = () => {
  return (
    <div className="bg-black pt-10 pb-10">
      <div className="flex-center flex-col flex-1 wrapper w-full relative gap-10">
        <div className="flex-between">
          <h1 className="text-white text-5xl">
            Enterprise-Grade Custom Software Development
          </h1>
          <p className="text-white">
            We focus on building long-term business relationships as your
            trusted software development partner.
          </p>
        </div>
        <div className="flex items-start flex-col md:flex-row md:flex-wrap gap-y-10 py-4">
          <PremiumSingle
            Icon={AppWindow}
            title="Scalable System Design"
            description="High-performing product giving you a tailored solution for your business."
            parentClass="md:basis-1/3"
          />
          <PremiumSingle
            Icon={CloudCheck}
            title="Cloud Services"
            description="Cloud outsourcing provider managed cloud services for businesses."
            parentClass="md:basis-1/3"
          />
          <PremiumSingle
            Icon={UserCircle2}
            title="Consultation Service"
            description="High-performing product giving you a tailored solution for your business."
            parentClass="md:basis-1/3"
          />
          <PremiumSingle
            Icon={Database}
            title="Database Management"
            description="High-performing product giving you a tailored solution for your business."
            parentClass="md:basis-1/3"
          />
          <PremiumSingle
            Icon={DatabaseBackup}
            title="Big Data & Data Science"
            description="High-performing product giving you a tailored solution for your business."
            parentClass="md:basis-1/3"
          />
          <PremiumSingle
            Icon={AppWindow}
            title="Embedded System Design"
            description="High-performing product giving you a tailored solution for your business."
            parentClass="md:basis-1/3"
          />
          <PremiumSingle
            Icon={AppWindow}
            title="Mobile Application Dev"
            description="High-performing product giving you a tailored solution for your business."
            parentClass="md:basis-1/3"
          />
          <PremiumSingle
            Icon={AppWindowMac}
            title="UX Design"
            description="High-performing product giving you a tailored solution for your business."
            parentClass="md:basis-1/3"
          />
          <PremiumSingle
            Icon={Bug}
            title="SQA"
            description="High-performing product giving you a tailored solution for your business."
            parentClass="md:basis-1/3"
          />
        </div>
      </div>
    </div>
  );
};

export default PremiumServices;
