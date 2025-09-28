type TechSingleProps = {
  classNames: string;
  title: string;
};
const TechSingle = ({ title, classNames }: TechSingleProps) => {
  return <div className={`font-bold text-3xl ${classNames}`}>{title}</div>;
};

export default TechSingle;
