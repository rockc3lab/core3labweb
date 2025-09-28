import HomeAboutUs from "@/components/about-us/home-about-us";
import SmoothAboutUs from "@/components/about-us/smooth-about-us";
import BlogHome from "@/components/blogs/blog-home";
import FaqCommon from "@/components/faq/faq-common";
import FeatureHome from "@/components/feature/feature-home";
import Methodology from "@/components/methodology/methodology";
import PremiumServices from "@/components/services/premium-services";
import ServiceHome from "@/components/services/service-home";
import MainCarousel from "@/components/shared/carousel/main-carousel";
import CustomSoftware from "@/components/software/custom-software";
import StepHome from "@/components/steps/step-home";
import IndustryExpart from "@/components/technologies/industtry-expart";
import Technologies from "@/components/technologies/technologies";

export default function Home() {
  return (
    <>
      <MainCarousel />
      <FeatureHome />
      <StepHome />
      <Methodology />
      <ServiceHome />
      <PremiumServices />
      <CustomSoftware />
      <Technologies />
      <IndustryExpart />
      <HomeAboutUs />
      <SmoothAboutUs />
      <FaqCommon />
      <BlogHome classNames="bg-[#0c0a25] text-white" />
      {/* <ClientHome /> */}
    </>
  );
}
