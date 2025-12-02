import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { getPageBySlug } from "@/data/loader";
import { FaArrowRight, FaVideo, FaPlay } from "react-icons/fa";

export default async function FilmProductionPage() {
  const response = await getPageBySlug("film-production");
  const filmBlock = response.data[0]?.blocks?.find(
    (block: any) => block.__component === "blocks.film"
  );

  const herosection = filmBlock?.herosection;
  const services = filmBlock?.services || [];

  return (
    <main className="bg-white text-zinc-900 w-full min-h-screen selection:bg-red-600 selection:text-white">
      {/* --- 1. Cinematic Hero Section --- */}
      <section className="relative h-[90vh] w-full flex flex-col justify-end pb-12 md:pb-24 px-6 md:px-12 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-90"
          >
            <source src={herosection?.video?.url} type="video/mp4" />
          </video>
          {/* Gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-screen-2xl mx-auto border-t border-white/20 pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
            <span className="text-xs font-mono uppercase tracking-widest text-white/80">
              Live Production
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter mb-8 text-white max-w-6xl">
            {herosection?.title || "Visual Storytelling"}
          </h1>

          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl leading-relaxed">
              {herosection?.description ||
                "We craft cinematic experiences that captivate audiences. From concept to final cut, we bring stories to life."}
            </p>

            <div className="flex items-center gap-4 text-white/60 text-xs font-mono uppercase tracking-widest">
              <span>Scroll to Explore</span>
              <div className="h-px w-12 bg-white/40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. Production Services (Architectural Grid) --- */}
      <section className="relative w-full px-6 md:px-12 py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-zinc-200 pb-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                {filmBlock?.title || "Production Services"}
              </h2>
              <p className="text-zinc-500 font-medium">
                End-to-end execution for global brands.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-zinc-100 rounded-full">
              <FaVideo className="text-zinc-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                Studio Floor
              </span>
            </div>
          </div>

          {/* The Grid: 2 Columns for Cinematic Width */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200">
            {services.map((service: any, index: any) => (
              <div
                key={index}
                className="group relative bg-white h-full min-h-[500px] flex flex-col justify-between overflow-hidden hover:bg-zinc-50 transition-colors duration-500"
              >
                {/* Header: Number & Icon */}
                <div className="p-8 md:p-10 pb-0 flex justify-between items-start">
                  <span className="text-xs font-mono text-zinc-300">
                    0{index + 1}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-colors duration-300">
                    <FaArrowRight className="w-3 h-3 text-zinc-300 -rotate-45 group-hover:rotate-0 group-hover:text-white transition-all duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 relative z-10 max-w-lg">
                  <h3 className="text-3xl font-bold text-zinc-900 mb-4 leading-tight group-hover:translate-x-1 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-8 opacity-80 group-hover:opacity-100">
                    {service.description}
                  </p>

                  {/* Explicit CTA */}
                  <Link
                    href={`/services/${service.slug}` || "/contact"}
                    className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-900 border-b border-zinc-200 pb-1 group-hover:border-red-600 transition-colors duration-300"
                  >
                    View Showreel
                    <FaPlay className="w-2 h-2 text-red-600 ml-1" />
                  </Link>
                </div>

                {/* Cinematic Image Reveal (Bottom) */}
                {/* Aspect ratio 16:9 for Film vibe */}
                <div className="relative w-full aspect-video overflow-hidden mt-auto border-t border-zinc-100">
                  <Image
                    src={service.image?.url}
                    alt={service.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Subtle noise overlay for film grain effect */}
                  <div className="absolute inset-0  opacity-0 group-hover:opacity-100 pointer-events-none mix-blend-overlay"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
