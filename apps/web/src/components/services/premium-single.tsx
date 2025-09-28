interface PremiumSingleProps {
  Icon: React.ElementType;
  title: string;
  description: string;
  parentClass: string;
}
const PremiumSingle = ({
  Icon,
  title,
  description,
  parentClass,
}: PremiumSingleProps) => {
  return (
    <div className={`flex flex-col gap-5 text-white ${parentClass} p-5`}>
      <Icon />
      <h2 className="font-bold text-2xl">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default PremiumSingle;
