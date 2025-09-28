import ProjectBased from "@/components/services/project-based";
import SectionHeading from "@/components/ui/section-heading";

const Page = () => {
  return (
    <section className="flex-center flex-col w-full relative mt-10">
      <SectionHeading
        dimTitle="we are best"
        title="Project Based"
        subTitle="Team"
      />
      <ProjectBased />
    </section>
  );
};

export default Page;
