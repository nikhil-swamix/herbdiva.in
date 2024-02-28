"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function HeroCarousel() {
  const slides = [
    { title: "best offer", desc: "New Arrivals On Sale", img: "slide_01.jpg" },
    {
      title: "Flash Deals",
      desc: "Get your best products",
      img: "slide_02.jpg",
    },
    {
      title: "Last Minute",
      desc: "Grab last minute deals",
      img: "slide_03.jpg",
    },
  ]
  
  return (
    <Carousel
      className="h-full"
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent className="h-full m-0">
        {slides.map(({ title, desc, img }) => (
          <CarouselItem key={title} className="h-full p-0 relative">
            <Image
              src={`/${img}`}
              width={1600}
              height={800}
              quality={100}
              priority
              alt="slider image 1"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col gap-y-3 text-center w-full px-5 md:px-6 lg:px-7">
              <div className="font-[700] uppercase text-orange text-[22px] tracking-wide">
                {title}
              </div>
              <div className="text-[36px] sm:text-[50px] md:text-[65px] 9s:text-[75px] text-white font-medium uppercase leading-tight tracking-[0.5px]">
                {desc}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
