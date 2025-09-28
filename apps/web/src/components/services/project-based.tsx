import projectBased from "@/assets/images/services/project-based-model.png";
import Image from "next/image";
const ProjectBased = () => {
  return (
    <div className="wrapper flex flex-col gap-5 mb-10">
      <p>
        Project based model is ideal when the client requires work that can be
        provided with very quick turnaround. Likewise, a client may prefer a
        fixed price contract because it is easier to set a budget for such
        projects. This model does not suit well with updating and extending
        requirements on-the-fly due to the estimation made. In the case it is
        hard to clarify all services and amount of work needed to finish the
        project in time then there is a certain risk for the client and it is
        desirable to choose either On-Demand or Dedicated Team Model. Project
        Based model for the same reasons is used only for technologies and
        platforms that are within the field of our expertise. With this model we
        invoice after we deliver results but for the projects with development
        time-span longer then a month we may request make payments at specific
        project&apos;s check points with provisioning deliverable versions.
      </p>
      <div className="flex flex-col md:flex-row gap-5 md:gap-25">
        <Image
          src={projectBased}
          width={540}
          height={253}
          alt="dedicated-team"
          className="basis-1/2"
        />
        <div className="basis-1/2">
          <h1 className="font-bold text-3xl mb-5">
            Why should you be Interested?
          </h1>
          <ul className="list-disc leading-10 ml-5">
            <li>Fixed budget: customer has predictability of his costs.</li>
            <li>Well-defined time limits.</li>
            <li>No need for project management on the customer side.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectBased;
