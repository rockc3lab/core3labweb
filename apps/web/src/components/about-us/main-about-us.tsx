import aboutus1 from "@/assets/images/c3lab/about-us2.png";
import aboutus2 from "@/assets/images/c3lab/about-us7.png";
import aboutus3 from "@/assets/images/c3lab/about-us8.png";
import Image from "next/image";
const MainAboutUs = () => {
  return (
    <section className="bg-[#006d77] text-white w-full">
      <div className="flex flex-col my-10 justify-between md:flex-row gap-5 wrapper">
        <div className="flex flex-col items-center md:flex-row gap-5 basis-1/2">
          <div className="flex flex-col gap-5">
            <Image
              src={aboutus2}
              width={306}
              height={204}
              alt="about-us"
              className="rounded-xl"
            />
            <Image
              src={aboutus3}
              width={306}
              height={204}
              alt="about-us"
              className="rounded-xl"
            />
          </div>
          <Image
            src={aboutus1}
            width={306}
            height={204}
            alt="about-us"
            className="md:h-[432px]"
          />
        </div>
        <div className="basis-1/2 flex flex-col gap-5">
          <p>
            Since the inception, Core3Lab Limited has been providing specialized
            software engineering, research and development services to offshore
            and local organizations from different sectors such as construction,
            telecommunications, transportation, finance, education etc.
          </p>
          <p>
            Core3Lab is one of the fastest growing IT based service providing
            startups in Bangladesh. Our talented and highly motivated engineers
            and developers are always eager to explore technological
            advancements by working with cutting edge technologies.
          </p>
          <p>
            We offer Software Solution Development & Deployment Services,
            Technology Outsourcing Services, Consultancy Services, and Managed
            IT Services which include Infrastructure Management, Deployment, and
            System Integration services to the clients.
          </p>
          <p>
            For many years our specialists have been architecting and building
            software products and gained the experience that now positions
            Core3Lab to exceed client expectations. Members of the core team
            have been in the Software industry for more than 12 years, and most
            of them have been working together for years now.
          </p>
          <p>
            We fully appreciate the importance of customer service,
            communication and visibility, and built Core3Lab on these core
            values. Drawing upon our extensive experience working with
            multicultural customers and IT specialists, we assembled a dedicated
            and trusted team of professionals who share the same values, are
            totally committed to client&apos;s success, and work hard to deliver
            the experience of excellence to them.
          </p>
          <h1 className="font-bold underline underline-offset-8">
            Our Mission
          </h1>
          <ul className="list-disc">
            <li>Empowering local talent with global exposure</li>
            <li>Delivering value through strategic business alliance</li>
            <li>
              Creating agility via technical excellence and innovative solutions
            </li>
            <li>
              Providing highly scalable, efficient and reliable solutions to
              global businesses
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainAboutUs;
