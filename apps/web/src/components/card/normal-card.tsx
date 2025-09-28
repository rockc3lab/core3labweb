import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type NormalCardProps = {
  image: StaticImageData;
  title: string;
  description: string;
  link: string;
  classNames: string;
};
const NormalCard = ({
  image,
  title,
  description,
  link,
  classNames,
}: NormalCardProps) => {
  return (
    <Card className={`${classNames}`}>
      <CardContent className="flex-center flex-col spect-square gap-2">
        <Image src={image} height={55} width={55} alt="Who We Are" />
        <h1>{title}</h1>
        <p>{description}</p>
        <Link href={link} className="font-bold text-[var(--color-accent)]">
          Read More &gt;
        </Link>
      </CardContent>
    </Card>
  );
};

export default NormalCard;
