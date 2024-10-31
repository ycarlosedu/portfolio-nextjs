"use client";
import Image from "next/image";
import { useCallback } from "react";

import { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import { cn } from "@/lib/utils";
import { DotButton, useDotButton } from "./dots";

export type CarouselList = {
  name: string;
  image: string;
}[];

type CarouselProps = {
  list: CarouselList;
  imageClassName?: string;
};

export default function Carousel({ list, imageClassName }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 })
  ]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  return (
    <div className="embla">
      <div
        className="embla__viewport flex flex-col items-center justify-center gap-6"
        ref={emblaRef}
      >
        <div className="embla__container">
          {list.map((item) => (
            <div key={item.name} className="embla__slide w-full">
              <Image
                src={item.image}
                alt={`Logo/Imagem do(a) ${item.name}`}
                width={1244}
                height={700}
                className={cn("md:w-[512px] max-h-64", imageClassName)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              aria-label={`Ir para item ${index + 1}`}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
