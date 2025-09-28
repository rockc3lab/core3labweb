import aboutUs from "@/assets/images/c3lab/about-us.png";
import { Accordion } from "@/components/ui/accordion";
import Image from "next/image";
import FaqCommonSingle from "./faq-common-single";
const FaqCommon = () => {
  return (
    <div className="pt-10 pb-10">
      <div className="flex-center flex-col w-full relative gap-10 flex-1 wrapper">
        <h1 className="text-5xl font-bold text-center">
          Top Questions Answered
        </h1>
        <div className="py-4 w-full flex flex-col md:flex-row gap-5 justify-between">
          <Image
            src={aboutUs}
            height={500}
            width={300}
            alt="about us"
            className="basis-1/3 hidden md:block mr-5 h-[500px]"
          />

          <Accordion
            type="single"
            collapsible
            className="basis-1/2"
            defaultValue="item-1"
          >
            <FaqCommonSingle
              key="01"
              serial="01"
              question="What you need to know about offshore software development."
              answer={
                <p className="leading-5 ml-20">
                  Offshore software development involves outsourcing software
                  development projects to teams or professionals located in
                  other countries. It allows companies to leverage global talent
                  for their software needs.
                </p>
              }
            />
            <FaqCommonSingle
              key="02"
              serial="02"
              question="How can I locate a reliable offshore software development company?"
              answer={
                <div className="ml-20">
                  <h3 className=" text-[18px] font-medium">
                    When searching for an offshore software development partner,
                    keep these points in mind:
                  </h3>
                  <ul className="leading-10">
                    <ol>
                      <strong>01 Research Online:</strong>
                      Explore potential companies through online searches,
                      directories, and reviews.
                    </ol>
                    <ol>
                      <strong>02 Review Portfolios:</strong> Examine past
                      projects to assess their expertise and quality of work.
                    </ol>
                    <ol>
                      <strong>03 Evaluate Communication:</strong> Ensure they
                      have clear, reliable communication channels for seamless
                      collaboration.
                    </ol>
                    <ol>
                      <strong>04 Assess Technical Skills:</strong> Verify they
                      work with the technologies and programming languages your
                      project requires.
                    </ol>
                    <ol>
                      <strong>05 Check Security Measures: </strong>Confirm the
                      company follows strong data protection and security
                      practices.
                    </ol>
                    <ol>
                      <strong>06 Start Small:</strong> Consider beginning with a
                      small trial project to evaluate performance before
                      committing to a larger engagement.
                    </ol>
                  </ul>
                </div>
              }
            />
            <FaqCommonSingle
              key="03"
              serial="03"
              question="How to find and hire offshore developers for your startup."
              answer={
                <div className="ml-20">
                  <h3 className=" text-[18px] font-medium">
                    When hiring an offshore developer for your startup, keep
                    these key steps in mind:
                  </h3>
                  <ul className="leading-10 mt-5">
                    <ol>
                      <strong>01 Define Project Requirements:</strong> Clearly
                      outline your project goals, scope, and expectations.
                    </ol>
                    <ol>
                      <strong>02 Check Experience and Expertise:</strong>
                      Consider the developer’s skills, previous work, and client
                      reviews.
                    </ol>
                    <ol>
                      <strong>03 Assess Skills and Fit:</strong> Evaluate
                      technical abilities, communication skills, and cultural
                      compatibility.
                    </ol>
                    <ol>
                      <strong>04 Review Portfolios and Case Studies:</strong>{" "}
                      Examine past projects to understand the quality and style
                      of work.
                    </ol>
                    <ol>
                      <strong>05 Consider Time Zone Compatibility: </strong>
                      Ensure their working hours align with your startup’s
                      schedule.
                    </ol>
                    <ol>
                      <strong>06 Set Clear Guidelines:</strong> Provide detailed
                      instructions and expectations to facilitate smooth
                      collaboration.
                    </ol>
                  </ul>
                </div>
              }
            />
            <FaqCommonSingle
              key="04"
              serial="04"
              question="Reasons to choose Core3Lab Limited as your offshore development partner."
              answer={
                <p className="leading-5  ml-20">
                  Core3Lab Limited brings extensive experience, industry
                  expertise, and a commitment to high-quality offshore software
                  development. Our affordability and strong communication make
                  us the ideal choice for your project.
                </p>
              }
            />
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqCommon;
