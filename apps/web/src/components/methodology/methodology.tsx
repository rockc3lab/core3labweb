import MethodologyCard from "../card/methodology-card";

const Methodology = () => {
  return (
    <div className="bg-black pt-10 pb-10 w-full">
      <div className="flex-center flex-col flex-1 wrapper w-full relative gap-10">
        <div className="flex-between">
          <h1 className="text-white text-5xl">Our Collaborative Approach</h1>
          <p className="text-white">
            Following agile principles, we guarantee timely delivery and
            exceptional quality in every software product.
          </p>
        </div>
        <div className="flex items-start flex-col md:flex-row gap-4">
          <MethodologyCard
            number="01"
            classNames="bg-[#2cc2a7]"
            titile="Technology Team Extension"
            description="Scale your capabilities with our premium IT staff augmentation services. We supply skilled professionals to boost your team’s performance."
          />
          <MethodologyCard
            number="02"
            classNames="bg-[#F96742]"
            titile="Idea-to-Market MVP Developments"
            description="Turn ideas into market-ready products with Core3Lab's MVP software development expertise. We craft core features that captivate early users and keep your project on budget."
          />
          <MethodologyCard
            number="03"
            classNames="bg-[#468EFF]"
            titile="Full-Cycle Software Development"
            description="Core3Lab'a offers a complete end-to-end software development process to launch a new product. From idea to exceptional product with our custom end-to-end software development solutions."
          />
          <MethodologyCard
            number="04"
            classNames="bg-[#FFB730]"
            titile="Remote/Offshore Development Services"
            description="Core3Lab specializes in complete end-to-end software development, guiding you from the spark of an idea to an exceptional finished product."
          />
        </div>
      </div>
    </div>
  );
};

export default Methodology;
