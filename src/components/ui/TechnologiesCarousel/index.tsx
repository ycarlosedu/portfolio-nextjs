"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import Badge from "../Badge";
import { ProjectInfos } from "../ProjectCard";

type CarouselProps = {
  list: ProjectInfos["technologies"];
};

export default function TechnologiesCarousel({ list }: CarouselProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 1000 })
  ]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container gap-2">
          {list?.map((item) => <Badge key={item}>{item}</Badge>)}
        </div>
      </div>
    </div>
  );
}
