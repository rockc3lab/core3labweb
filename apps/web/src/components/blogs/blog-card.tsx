import Image, { StaticImageData } from "next/image";

type BlogCardProps = {
  category: string;
  title: string;
  shortDescription: string;
  blogImg: StaticImageData;
  author: string;
  authorImg: StaticImageData;
  publishedDate: string;
};
const BlogCard = ({
  category,
  title,
  shortDescription,
  blogImg,
  author,
  authorImg,
  publishedDate,
}: BlogCardProps) => {
  return (
    <div className="flex flex-col gap-5">
      <Image src={blogImg} width={380} height={214} alt={title} />
      <h3 className="text-muted">{category}</h3>
      <h1 className="font-bold text-2xl">{title}</h1>
      <p className="text-[16px] font-medium line-clamp-2">{shortDescription}</p>
      <div className="flex items-center gap-5">
        <div className="rounded-full bg-[white] p-2">
          <Image src={authorImg} width={30} height={30} alt={author} />
        </div>
        <div className="flex flex-col">
          <h2 className="text-[16px] font-medium">{author}</h2>
          <h3 className="text-muted">{publishedDate}</h3>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
