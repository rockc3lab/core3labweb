import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
type SoftwareCardCardProps = {
  titile: string;
  description: string;
  image: unknown;
  classNames?: string;
};
const SoftwareCard = ({
  titile,
  description,
  image,
  classNames,
}: SoftwareCardCardProps) => {
  return (
    <Card className={`${classNames}`}>
      <CardContent className="flex-center flex-col spect-square gap-2 h-[450px]">
        <h2 className="text-3xl">{titile}</h2>
        <p>{description}</p>
        <Image
          src={image as StaticImageData}
          height={200}
          width={200}
          alt={titile}
        />
      </CardContent>
    </Card>
  );
};

export default SoftwareCard;
