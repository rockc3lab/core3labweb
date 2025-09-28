import OnDemand from "@/components/services/on-demand";
import SectionHeading from "@/components/ui/section-heading";

const Page = () => {
  return (
    <section className="flex-center flex-col w-full relative mt-10">
      <SectionHeading
        dimTitle="we are best"
        title="On-Demand"
        subTitle="Team"
      />
      <OnDemand />
    </section>
  );
};

export default Page;
