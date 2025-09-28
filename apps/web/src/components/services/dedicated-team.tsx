import dedicatedteam from "@/assets/images/services/dedicated-model.png";
import Image from "next/image";
const DedicatedTeam = () => {
  return (
    <div className="wrapper flex flex-col gap-5 mb-10">
      <p>
        This model allows you to set up a dedicated offshore operation with
        minimum risk. We establish software development teams in such a way as
        to enable the client to work directly with the developers, thus
        achieving the highest level of productivity possible. By handling the
        recruitment process and operational management, leveraging our expertise
        in the local market, we create a pool of candidates whom you will be
        able to screen personally. Once specialists are approved by you, they
        are hired and we set up workplaces and equipment, and your team is ready
        to work on your tasks under your direct supervision.
      </p>
      <div className="flex flex-col md:flex-row gap-5 md:gap-25">
        <Image
          src={dedicatedteam}
          width={540}
          height={524}
          alt="dedicated-team"
          className="basis-1/2"
        />
        <div className="basis-1/2">
          <h1 className="font-bold text-3xl mb-5">
            Why should you be Interested?
          </h1>
          <ul className="list-disc leading-10 ml-5">
            <li>Skilled professionals working just for you.</li>
            <li>Ability to select, manage and control team members.</li>
            <li>Ability to manage the team.</li>
            <li>Project can be started faster with incomplete requirements.</li>
            <li>Higher level of project security and confidentiality.</li>
            <li>Scope is not fixed and changes are welcome.</li>
            <li>No start up or maintenance costs or taxes.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DedicatedTeam;
