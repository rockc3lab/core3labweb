import feature1 from "@/assets/images/icon/feature1.png";
import feature2 from "@/assets/images/icon/feature2.png";
import feature3 from "@/assets/images/icon/feature3.png";
import NormalCard from "../card/normal-card";
const FeatureHome = () => {
  return (
    <div className="feature relative">
      <div className="flex-center flex-col md:flex-row gap-2">
        <h2 className="font-bold text-4xl text-center md:text-right basis-1/3">
          We always pursue the <br />
          highest possible <br /> standard <br /> within our work!
        </h2>
        <div className="hidden md:block border-l border-1 border-[var(--color-accent)] h-[300px] m-5"></div>
        <p className="basis-1/3 line-height-2 m-2">
          Our expertise is in development and delivering contemporary high
          quality solutions and setting up teams of specialists matching highest
          technical and business requirements. We do develop our own products
          and it helps us to understand not only the processes inside but
          critical business aspects and risks that are parts of each project
          lifecycle. This valuable experience allows to establish a unique
          relationship with each client. We always take a creative and
          open-minded approach aiming to deliver values to our customers,
          because in many cases the customer — not the competition — is the key
          to a company&apos;s prospects.
        </p>
      </div>
      <div className="flex justify-center items-start flex-col md:flex-row gap-2 flex-1 wrapper w-full">
        <NormalCard
          classNames="basis-1/3"
          image={feature1}
          title="Who we are"
          description="A software company that consists of IT professionals who care and love what they do."
          link="/apps"
        />
        <NormalCard
          classNames="basis-1/3"
          image={feature2}
          title="Our services"
          description="We provide a range of development services, consulting and technology advisory, graphical design and far beyond of these."
          link="/apps"
        />
        <NormalCard
          classNames="basis-1/3"
          image={feature3}
          title="How to engage"
          description="Three engagement models to ensure that whatever the requirement is, we have a proven solution that is delivered with confidence."
          link="/apps"
        />
      </div>
    </div>
  );
};

export default FeatureHome;
