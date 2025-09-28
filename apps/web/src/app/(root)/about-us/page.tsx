import MainAboutUs from "@/components/about-us/main-about-us";
import IndustryExpart from "@/components/technologies/industtry-expart";
import SectionHeading from "@/components/ui/section-heading";

const AboutUs = () => {
  return (
    <section className="flex-center flex-col w-full relative mt-10">
      <SectionHeading dimTitle="About Us" title="About" subTitle="Core3Lab" />
      <MainAboutUs />
      <IndustryExpart />
    </section>
  );
};

export default AboutUs;
