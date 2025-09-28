import DedicatedTeam from "@/components/services/dedicated-team";
import SectionHeading from "@/components/ui/section-heading";

const Page = () => {
  return (
    <section className="flex-center flex-col w-full relative mt-10">
      <SectionHeading
        dimTitle="we are best"
        title="Dedicated"
        subTitle="Team"
      />
      <DedicatedTeam />
    </section>
  );
};

export default Page;
