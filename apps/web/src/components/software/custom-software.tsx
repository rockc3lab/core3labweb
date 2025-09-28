import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { customSoft } from "@/lib/constants/db";
import SoftwareCard from "./software-card";
const CustomSoftware = () => {
  return (
    <div className="bg-[#0D0A25] pt-10 pb-10">
      <div className="flex-center flex-col flex-1 wrapper w-full relative gap-10">
        <div className="flex-between gap-5">
          <h1 className="text-white text-5xl">
            Custom-Built Software Offerings
          </h1>
          <p className="text-white">
            Your trusted partner for custom software development outsourcing, we
            provide efficient, scalable, and robust solutions to clients
            globally.
          </p>
        </div>
        <div className="py-4 w-full">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {customSoft.map((data) => {
                return (
                  <CarouselItem
                    key={data?.title}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <SoftwareCard
                      key={data?.title}
                      titile={data.title}
                      description={data.description}
                      image={data.image}
                      classNames={data.classNames}
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CustomSoftware;
