import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionHeading from "@/components/ui/section-heading";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  title?: string;
  subTitle?: string;
};
export const ContactForm = ({ title, subTitle }: Props) => {
  return (
    <section className="bg-[#f7f9f8] rounded-4xl w-full p-10">
      {(title || subTitle) && (
        <SectionHeading title={title} subTitle={subTitle} />
      )}
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col md:flex-row gap-5">
          <Input
            type="text"
            placeholder="name"
            className="basis-1/2 bg-white"
          />
          <Input
            type="text"
            placeholder="phone"
            className="basis-1/2 bg-white"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <Input
            type="email"
            placeholder="Email"
            className="basis-1/2 bg-white"
          />
          <Input
            type="email"
            placeholder="Subject"
            className="basis-1/2 bg-white"
          />
        </div>
        <div className="flex flex-col">
          <Textarea
            placeholder="Type your message here."
            className="bg-white h-[200px]"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Input id="picture" type="file" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 md:flex-row">
          <Button className="cursor-pointer uppercase">Submit</Button>
        </div>
      </div>
    </section>
  );
};
