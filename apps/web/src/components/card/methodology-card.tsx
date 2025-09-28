import { Card, CardContent } from "@/components/ui/card";
type MethodologyCardProps = {
  number: string;
  titile: string;
  description: string;
  classNames?: string;
  numberClass?: string;
};
const MethodologyCard = ({
  number,
  titile,
  description,
  classNames,
  numberClass,
}: MethodologyCardProps) => {
  return (
    <Card className={`${classNames}`}>
      <CardContent className="flex-center flex-col spect-square gap-2">
        <div className={`numbers ${numberClass}`}>{number}</div>
        <h2 className="text-3xl">{titile}</h2>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};

export default MethodologyCard;
