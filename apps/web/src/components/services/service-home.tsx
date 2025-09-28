import service1 from "@/assets/images/icon/service1.png";
import service2 from "@/assets/images/icon/service2.png";
import service3 from "@/assets/images/icon/service3.png";
import service4 from "@/assets/images/icon/service4.png";
import service5 from "@/assets/images/icon/service5.png";
import service6 from "@/assets/images/icon/service6.png";
import SectionHeading from "../ui/section-heading";
import ServiceSingle from "./service-single";
const ServiceHome = () => {
  return (
    <div className="flex-center flex-col flex-1 wrapper w-full relative gap-10 md:gap-0">
      <SectionHeading
        dimTitle="Our services"
        title="Why Core3Lab"
        subTitle="Services"
      />
      <div className="flex-between flex-col md:flex-row md:flex-wrap gap-10 z-1">
        <ServiceSingle
          image={service1}
          title="Corporate Social Responsibilities"
          classNames="md:w-[30%]"
        />
        <ServiceSingle
          image={service2}
          title="Updated Technologies"
          classNames="md:w-[30%]"
        />
        <ServiceSingle
          image={service3}
          title="Business Ethics & Practices"
          classNames="md:w-[30%]"
        />
        <ServiceSingle
          image={service4}
          title="Quality Service Assurance"
          classNames="md:w-[30%]"
        />
        <ServiceSingle
          image={service5}
          title="Efficient Project Management"
          classNames="md:w-[30%]"
        />
        <ServiceSingle
          image={service6}
          title="Efficient Customer Service"
          classNames="md:w-[30%]"
        />
      </div>
    </div>
  );
};

export default ServiceHome;
