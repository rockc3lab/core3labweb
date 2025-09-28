import ondemand from "@/assets/images/services/on-demand-model.png";
import Image from "next/image";
const OnDemand = () => {
  return (
    <div className="wrapper flex flex-col gap-5 mb-10">
      <p>
        This model provides you with a possibility to pay for our services in
        parts according to the payment schedule specified under the contract.
        After we sign a contract stipulating the team roles and their rates, we
        invoice you monthly accordingly to the work finished and services
        provided.
      </p>
      <p>
        While being recommended for big and middle size project this model can
        be applied for technical support and small projects that could be
        executed within On-Demand model as well. There is several details and
        limits we have defined for small projects and on-demand technical
        support:
      </p>
      <ul className="list-disc leading-10">
        <li>
          services provided only within the field of our technological expertise
        </li>
        <li>
          we may use resources from the pool of freelancers to extend the team
          with technologies that we do not maintain internally
        </li>
        <li>the lowest boundary to go with On-Demand model is 16 hours</li>
        <li>
          there is no guarantee we process and execute your request immediately
          within the common model
        </li>
        <li>
          to assure fast evaluation and scheduling you may need to pay the
          retention fee monthly
        </li>
        <li>
          requests with the urgent priority priced differently and require
          retention plan included to be processed immediately
        </li>
      </ul>
      <div className="flex flex-col md:flex-row gap-5 md:gap-25">
        <Image
          src={ondemand}
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
            <li>Tasks implementation on demand.</li>
            <li>Minimal scope and well predictable budget.</li>
            <li>Requirements can be updated on-the-fly.</li>
            <li>Project can be canceled at any stage.</li>
            <li>Pay as you go.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OnDemand;
