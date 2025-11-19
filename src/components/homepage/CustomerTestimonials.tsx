"use client";

import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LuStar } from "react-icons/lu";
// Import your StrapiImage component
import Image from "next/image";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <LuStar
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default function CustomerTestimonials({ data }: any) {
  // Don't render if there's no data
  if (!data?.testimonials) return null;

  return (
    <section className="py-24 bg-gray-50 min-h-[800px]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {data.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {/* Map over the dynamic 'data.testimonials' array */}
              {data.testimonials.map((testimonial: any, index: number) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col"
                  >
                    {/* Image Section - Using StrapiImage */}
                    {testimonial.image?.url && (
                      <div className="relative h-72 w-full overflow-hidden">
                        <Image
                          width={200}
                          height={200}
                          src={testimonial.image.url}
                          alt={`${testimonial.name}`}
                          className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                      </div>
                    )}

                    <div className="p-6 flex flex-col grow">
                      <div className="mb-4">
                        {/* Convert starCount string to a number */}
                        <StarRating rating={+testimonial.starCount || 0} />
                      </div>

                      <blockquote className="text-gray-700 mb-6 grow">
                        <p className="text-sm leading-relaxed italic">
                          {/* Render feedback, stripping outer quotes */}"
                          {testimonial.feedback.replace(/^"|"$/g, "")}"
                        </p>
                      </blockquote>

                      <div className="border-t pt-4">
                        <div className="font-semibold text-gray-900 text-sm">
                          {testimonial.name}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </motion.div>

        {/* Mobile navigation dots */}
        <div className="flex justify-center mt-8 md:hidden">
          <div className="flex space-x-2">
            {data.testimonials.slice(0, 3).map((_: any, index: number) => (
              <div key={index} className="w-2 h-2 bg-gray-300 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
