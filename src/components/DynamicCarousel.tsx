"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

type Props = {
  images: string[];
};

export default function DynamicCarousel({ images }: Props) {
  const [api, setApi] = React.useState<CarouselApi | null>(null);

  if (!images || images.length === 0) {
    return <div className="text-center text-gray-500">No images found</div>;
  }

  return (
    <div dir="ltr" className="w-full max-w-4xl mx-auto">
      <Carousel setApi={setApi} className="w-full relative">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem
              key={index}
              className="flex justify-center items-center"
            >
              <Card className="w-full bg-transparent border-0 shadow-none">
                <CardContent className="flex justify-center items-center p-4">
                  <img
                    src={src}
                    loading="lazy"
                    alt={`Slide ${index + 1}`}
                    className="
                      w-full
                      h-auto
                      max-h-[500px]
                      object-contain
                      rounded-xl
                      shadow-md
                      transition-transform
                      duration-300
                      hover:scale-[1.02]
                    "
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Desktop arrows overlay */}
        <div className="hidden md:flex absolute inset-y-0 left-0 right-0 justify-between items-center px-2">
          <CarouselPrevious className="p-2 bg-[var(--primary)] text-white rounded-lg" />
          <CarouselNext className="p-2 bg-[var(--primary)] text-white rounded-lg" />
        </div>
      </Carousel>

      {/* Mobile arrows below slider */}
      <div className="flex justify-center gap-4 mt-4 md:hidden w-full">
        <button
          onClick={() => api?.scrollPrev()}
          className="px-6 py-2 bg-[var(--primary)] text-white rounded-lg"
        >
          Prev
        </button>
        <button
          onClick={() => api?.scrollNext()}
          className="px-6 py-2 bg-[var(--primary)] text-white rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}

