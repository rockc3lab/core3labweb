"use client";
import byggeprojekt from "@/assets/images/clients/byggeprojekt.png";
import nextdecade from "@/assets/images/clients/client3.png";
import ju from "@/assets/images/clients/client4.png";
import exigo from "@/assets/images/clients/exigo.png";
import salextra from "@/assets/images/clients/salextra.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import SectionHeading from "../ui/section-heading";
import ClientSingle from "./client-single";
const ClientHome = () => {
  return (
    <div className="flex-center flex-col flex-1 p-20 w-full relative gap-10 md:gap-0 bg-[#f7f9f8]">
      <SectionHeading
        dimTitle="Our Clients"
        title="Valuable"
        subTitle="Clients"
      />
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className="items-start">
          <CarouselItem className="md:basis-1/3">
            <ClientSingle
              image={byggeprojekt}
              client="byggeprojekt"
              url="https://www.byggeprojekt.dk/da"
              height={30}
              width={192}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <ClientSingle
              image={exigo}
              client="exigo"
              url="https://www.exigo.com/"
              height={75}
              width={129}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <ClientSingle
              image={salextra}
              client="salextra"
              url="https://www.salextra.com.bd/"
              height={47}
              width={193}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <ClientSingle
              image={nextdecade}
              client="nextdecade"
              url="https://www.next-decade.com/"
              height={76}
              width={186}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <ClientSingle
              image={ju}
              client="ju"
              url="https://juniv.edu/"
              height={155}
              width={131}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ClientHome;
