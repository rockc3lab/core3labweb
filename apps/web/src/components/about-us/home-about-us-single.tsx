type HomeAboutUsSingleProps = {
  Icon: React.ElementType;
  title: string;
  description: string;
  iconClass: string;
};
const HomeAboutUsSingle = ({
  Icon,
  iconClass,
  title,
  description,
}: HomeAboutUsSingleProps) => {
  return (
    <div className="flex items-start gap-5">
      <div className={`rounded-full p-3 ${iconClass}`}>
        <Icon />
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HomeAboutUsSingle;
