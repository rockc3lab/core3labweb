import aboutus2 from "@/assets/images/c3lab/about-us4.png";
import Image from "next/image";
const MainServices = () => {
  return (
    <div className="flex flex-col wrapper">
      <div className="flex flex-col md:flex-row gap-5">
        <Image
          src={aboutus2}
          width={400}
          height={400}
          alt="service"
          className="basis-1/2"
        />
        <div className="basis-1/2">
          <h1 className="font-bold">Why should you be Interested?</h1>
          <p>
            With extensive multi-platform capabilities, covering the most of
            popular programming languages and frameworks, our aim is to provide
            &quot;all-in-one&quot; place for our clients. We provide support,
            specialized software, and pre/post assistance directly to our
            customers enabling them to focus on their core markets while still
            being able to provide high levels of service to their customers.
            While we cover a wide range of development themes and topic areas,
            our areas of expertise are around: dynamic web, complex
            multi-platform projects, mobile integration, web services and SaaS
            platforms, NoSQL databases, vendor-independent solutions and Open
            Source.
          </p>
          <h1 className="font-bold">We also:</h1>
          <p>
            Develop tools and add-ons around frameworks and technologies we are
            using. Work with partners to produce tailor-made research products
            which aim to support more effective development practices. Design
            and support the models of effective knowledge mobilization
            strategies Build and support systems which enable innovative
            approaches and collaboration around the common and specific business
            practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainServices;
