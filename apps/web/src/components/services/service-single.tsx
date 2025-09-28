import Image, { StaticImageData } from "next/image";

type ServiceSingleProps = {
  image: StaticImageData;
  title: string;
  classNames: string;
};
const ServiceSingle = ({ image, title, classNames }: ServiceSingleProps) => {
  return (
    <div className={`flex-start flex-col gap-10 ${classNames}`}>
      <Image src={image} height={64} width={72} alt={title} />
      <h2 className="text-center text-2xl font-semibold hover:text-[var(--color-accent)] cursor-info">
        {title}
      </h2>
    </div>
  );
};

export default ServiceSingle;
