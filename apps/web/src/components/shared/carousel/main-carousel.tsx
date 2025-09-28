"use client";
import aboutUs4 from "@/assets/images/c3lab/about-us4.png";
import aboutUs5 from "@/assets/images/c3lab/about-us5.png";
import aboutUs6 from "@/assets/images/c3lab/about-us6.png";
import arrow1 from "@/assets/images/slider/pattern_arrow1.png";
import arrow2 from "@/assets/images/slider/pattern_arrow2.png";
import arrow3 from "@/assets/images/slider/pattern_arrow3.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
const MainCarousel = () => {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 10000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent className="">
        <CarouselItem className="basis-full">
          <Card className="bg-[#006d77]">
            <CardContent className="flex-center  aspect-square  p-6 h-[600px]">
              <div className="slider-arrow">
                <Image src={arrow2} height={150} width={150} alt="Loading..." />
                <Image src={arrow1} height={150} width={150} alt="Loading..." />
                <Image src={arrow3} height={150} width={150} alt="Loading..." />
              </div>
              <div className="flex-center flex-col md:flex-row p-5">
                <div className="flex flex-col basis-1/3  gap-2">
                  <h1 className="h1-bold text-white">Easy Solution</h1>
                  <h1 className="h1-bold ">Easy Life</h1>
                  <p className="text-xl text-white">
                    Drawing upon our extensive experience working with
                    multicultural customers and IT specialists, we assembled a
                    dedicated and trusted team of professionals who share the
                    same values, are totally committed to clients success, and
                    work hard to deliver the experience of excellence to them.
                  </p>
                  <Button className="cursor-pointer uppercase w-fit rounded-full p-5">
                    Read More
                  </Button>
                </div>
                <Image
                  className="basis-1/3 shape-2"
                  src={aboutUs6}
                  height={534}
                  width={440}
                  alt="Loading..."
                />
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="basis-full relative">
          <Card className="bg-[#bee1e6]">
            <CardContent className="flex aspect-square items-center justify-center p-6 h-[600px]">
              <div className="slider-arrow">
                <Image src={arrow2} height={150} width={150} alt="Loading..." />
                <Image src={arrow1} height={150} width={150} alt="Loading..." />
                <Image src={arrow3} height={150} width={150} alt="Loading..." />
              </div>
              <div className="flex-center flex-col md:flex-row p-5">
                <div className="flex flex-col basis-1/3  gap-2">
                  <h1 className="h1-bold">Building the Work</h1>
                  <h1 className="h1-bold ">Ecosystem</h1>
                  <p className="text-xl">
                    We manage our partners services by offering and deploying
                    their products in the local market as a sole partner.
                  </p>
                  <Button className="cursor-pointer uppercase w-fit rounded-full p-5">
                    Read More
                  </Button>
                </div>
                <Image
                  className="basis-1/3 shape-2"
                  src={aboutUs4}
                  height={534}
                  width={440}
                  alt="Loading..."
                />
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="basis-full relative" key={3}>
          <Card className="bg-[#faede3]">
            <CardContent className="flex aspect-square items-center justify-center p-6 h-[600px]">
              <div className="slider-arrow">
                <Image src={arrow2} height={150} width={150} alt="Loading..." />
                <Image src={arrow1} height={150} width={150} alt="Loading..." />
                <Image src={arrow3} height={150} width={150} alt="Loading..." />
              </div>
              <div className="flex-center flex-col md:flex-row p-5">
                <div className="flex flex-col basis-1/3  gap-2">
                  <h1 className="font-bold text-6xl">
                    We are
                    <span className="text-[#006d77] ml-2 mr-2">
                      awesome team
                    </span>
                    for your business dream
                  </h1>
                  <p className="text-xl text-[#667085]">
                    Integrated workflow designed for product teams. We create
                    world-class development and branding
                  </p>
                  <Button className="cursor-pointer uppercase w-fit rounded-full p-5">
                    Read More
                  </Button>
                </div>
                <Image
                  className="basis-1/3 shape-2"
                  src={aboutUs5}
                  height={534}
                  width={440}
                  alt="Loading..."
                />
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="md:left-10 left-0" />
      <CarouselNext className="md:right-10 right-0" />
    </Carousel>
  );
};

export default MainCarousel;
