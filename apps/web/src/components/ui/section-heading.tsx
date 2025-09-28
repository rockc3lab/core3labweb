type HeadingProps = {
  dimTitle?: string;
  title?: string;
  subTitle?: string;
  border?: boolean;
};
const SectionHeading = ({
  dimTitle,
  title,
  subTitle,
  border = true,
}: HeadingProps) => {
  return (
    <div className="flex-center flex-col gap-5 mb-10">
      <h2 className="flex-center  flex-col">
        <small className="uppercase text-[#b4b4b4] text-[14px]">
          {dimTitle}
        </small>
        <span className="flex-center flex-col md:flex-row gap-2">
          <span className="text-[#2f2c2c] text-5xl">{title}</span>
          <span className="text-[#fa6742] text-5xl">{subTitle}</span>
        </span>
      </h2>
      {border && <span className="animate-border"></span>}
    </div>
  );
};

export default SectionHeading;
