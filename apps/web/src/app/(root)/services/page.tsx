import Methodology from "@/components/methodology/methodology";
import MainServices from "@/components/services/main-services";
import SectionHeading from "@/components/ui/section-heading";

const Services = () => {
  return (
    <section className="flex-center flex-col w-full relative mt-10">
      <SectionHeading dimTitle="we are best" title="" subTitle="Services" />
      <MainServices />
      <Methodology />
    </section>
  );
};

export default Services;
