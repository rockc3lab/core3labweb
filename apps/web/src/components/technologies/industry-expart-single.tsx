type IndustryExpartSingleProps = {
  Icon: React.ElementType;
  title: string;
};

const IndustryExpartSingle = ({ Icon, title }: IndustryExpartSingleProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 text-white">
      <Icon />
      <h1>{title}</h1>
    </div>
  );
};

export default IndustryExpartSingle;
