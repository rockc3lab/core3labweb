import Image, { StaticImageData } from "next/image";

type roundStepProps = {
  image: StaticImageData;
  title: string;
  classNames: string;
};
const RoundStep = ({ image, title, classNames }: roundStepProps) => {
  return (
    <div className="flex-center flex-col gap-5">
      <div
        className={`flex-center w-[255px] h-[255px] rounded-full ${classNames}`}
      >
        <Image src={image} height={87} width={87} alt={title} />
      </div>
      <h2 className="text-[#2f2c2c] text-xl">{title}</h2>
    </div>
  );
};

export default RoundStep;
