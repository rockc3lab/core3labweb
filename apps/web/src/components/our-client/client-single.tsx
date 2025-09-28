import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
type ClientSingleProps = {
  image: StaticImageData;
  client: string;
  url: string;
  height: number;
  width: number;
};
const ClientSingle = ({
  image,
  client,
  url,
  height,
  width,
}: ClientSingleProps) => {
  return (
    <Card className="h-60 p-0">
      <CardContent className="flex aspect-square items-center justify-center h-60">
        <Link href={url} target="_blank">
          <Image src={image} height={height} width={width} alt={client} />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ClientSingle;
