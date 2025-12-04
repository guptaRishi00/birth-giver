"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import VideoModal from "@/components/projectpage/VideoModal";
import { cn, getStrapiMedia } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

export default function CinematicCarousel({ projects }: { projects: any[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [openVideoUrl, setOpenVideoUrl] = useState<string | null>(null);
  const [openTitle, setOpenTitle] = useState<string | undefined>(undefined);

  // 1. Configure Auto-play: 4000ms (4 seconds) delay
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleStreamClick = (
    e: React.MouseEvent,
    videoUrl: string,
    title: string
  ) => {
    e.stopPropagation();
    if (videoUrl) {
      setOpenVideoUrl(videoUrl);
      setOpenTitle(title);
    }
  };

  if (!projects || projects.length === 0) return null;

  return (
    <section className="w-full py-12 md:py-20">
      <div className="w-full">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl text-center font-bold text-zinc-900 mb-3 tracking-tight">
            Featured Productions
          </h2>
          <p className="text-zinc-500 text-center text-lg">
            Our latest originals and cinematic releases.
          </p>
        </div>

        {/* Cinematic Carousel */}
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
          onMouseEnter={() => plugin.current.stop()}
          onMouseLeave={() => plugin.current.play()}
        >
          <CarouselContent className="-ml-4 md:-ml-8">
            {projects.map((project, index) => {
              const isActive = index === current;
              const imageUrl = getStrapiMedia(project.image?.url);

              return (
                <CarouselItem
                  key={project.id}
                  // UPDATED WIDTH: 85% width on mobile, 80% on desktop (Much wider)
                  className="pl-4 md:pl-8 basis-[85%] md:basis-[80%] lg:basis-[85%] xl:basis-[80%] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                >
                  <div
                    className={cn(
                      // UPDATED HEIGHT: Fixed VH height instead of aspect-ratio
                      // h-[60vh] on mobile, h-[80vh] on desktop for massive cinematic impact
                      "relative h-[60vh] md:h-[80vh] w-full rounded-3xl overflow-hidden transform transition-all duration-700 shadow-2xl",
                      isActive
                        ? "scale-100 opacity-100 shadow-black/30"
                        : "scale-[0.92] opacity-60 grayscale-[30%] blur-[1px]"
                    )}
                  >
                    {/* Background Image */}
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority={index < 3}
                        sizes="(max-width: 768px) 85vw, 85vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-zinc-200 flex items-center justify-center text-zinc-400">
                        Image Unavailable
                      </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-20 flex flex-col items-start justify-end h-full pointer-events-none">
                      <div
                        className={cn(
                          "transition-all duration-700 flex flex-col items-start gap-4 md:gap-8 max-w-5xl pointer-events-auto",
                          isActive
                            ? "translate-y-0 opacity-100 delay-100"
                            : "translate-y-12 opacity-0"
                        )}
                      >
                        <h3 className="text-4xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] drop-shadow-xl">
                          {project.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm md:text-lg font-medium text-zinc-200/90">
                          <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white border border-white/10">
                            Film Production
                          </span>
                          <span>•</span>
                          <span>
                            {new Date(
                              project.updatedAt || Date.now()
                            ).getFullYear()}
                          </span>
                          <span>•</span>
                          <span>4K Ultra HD</span>
                        </div>

                        <p className="hidden md:block text-zinc-300 text-lg md:text-2xl leading-relaxed line-clamp-3 max-w-3xl font-light">
                          {project.description ||
                            "A cinematic masterpiece produced by BirthGiver Film Productions. Experience the story unfolding in vivid detail."}
                        </p>

                        {project.link && (
                          <button
                            onClick={(e) =>
                              handleStreamClick(e, project.link, project.title)
                            }
                            className="group mt-4 bg-white text-black hover:bg-zinc-200 transition-all duration-300 px-10 py-5 rounded-full font-bold text-base md:text-xl inline-flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105"
                          >
                            <span>Watch Trailer</span>
                            <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                              <FaPlay className="w-3 h-3 ml-0.5" />
                            </div>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          {/* Navigation Arrows */}
          {/* <div className="hidden md:block">
            <CarouselPrevious className="left-8 lg:left-16 h-16 w-16 bg-white/10 hover:bg-white border-none text-white hover:text-black backdrop-blur-md transition-all scale-110" />
            <CarouselNext className="right-8 lg:right-16 h-16 w-16 bg-white/10 hover:bg-white border-none text-white hover:text-black backdrop-blur-md transition-all scale-110" />
          </div> */}
        </Carousel>

        {/* Circle Sliders (Dots) */}
        <div className="flex justify-center items-center gap-4 mt-12">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-3 w-3 rounded-full transition-all duration-500",
                current === index
                  ? "bg-zinc-900"
                  : "bg-zinc-300 hover:bg-zinc-400"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <VideoModal
        open={Boolean(openVideoUrl)}
        videoUrl={openVideoUrl}
        title={openTitle}
        onClose={() => {
          setOpenVideoUrl(null);
          setOpenTitle(undefined);
        }}
      />
    </section>
  );
}
