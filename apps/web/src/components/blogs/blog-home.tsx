import { blogDatas } from "@/lib/constants/db";
import BlogCard from "./blog-card";

type BlogHomeProps = {
  classNames: string;
};
const BlogHome = ({ classNames }: BlogHomeProps) => {
  return (
    <div className={`pt-10 pb-10 ${classNames}`}>
      <div className="flex-center flex-col w-full relative gap-10 flex-1 wrapper">
        <h1 className="text-5xl font-bold text-center">Explore Our Blogs</h1>
        <div className="py-4 w-full flex flex-col md:flex-row gap-5 justify-between">
          {blogDatas.map((data, idx) => {
            return (
              <div key={idx} className="md:basis-1/3">
                <BlogCard
                  category={data.category}
                  title={data.title}
                  shortDescription={data.shortDescription}
                  blogImg={data.blogImg}
                  author={data.author}
                  authorImg={data.authorImg}
                  publishedDate={data.publishedDate}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
