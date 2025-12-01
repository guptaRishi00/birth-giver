import Image from "next/image";
import CTASection from "@/components/CTASection";
import { getPageBySlug } from "@/data/loader";
import { FaArrowRight } from "react-icons/fa";

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
      {/* Kept text white here because it sits on top of a video */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-90"
          >
            <source src={herosection?.video?.url} type="video/mp4" />
          </video>
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 md:px-20 max-w-7xl mx-auto">
          <span className="text-red-500 tracking-[0.3em] uppercase text-sm font-bold mb-4 animate-fadeIn">
            Est. Production House
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mb-6 max-w-4xl text-white">
            {herosection?.title}
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
            {herosection?.description}
          </p>

          <div className="flex items-center gap-4">
            {/* Smooth Scroll Indicator */}
            <div className="h-[1px] w-12 bg-white/50" />
            <span className="text-xs uppercase tracking-widest text-white/80">
              Scroll to Explore
            </span>
          </div>
        </div>
      </section>

      {/* --- 2. Services Grid (Clean White Theme) --- */}
      <section className="relative px-6 md:px-20 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-zinc-900">
              {filmBlock?.title || "Our Production Services"}
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl max-w-3xl leading-relaxed">
              {filmBlock?.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: any, index: any) => (
              <div
                key={index}
                // Cards keep dark background for image visibility, but sit on a white page
                className="group relative h-[450px] w-full overflow-hidden rounded-2xl bg-zinc-100 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={service.image?.url}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Dark Gradient Overlay to make text inside card readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-red-500 font-mono text-xs uppercase tracking-widest mb-2 block opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                      0{index + 1} // Service
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                      {service.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 delay-200">
                      Learn More <FaArrowRight className="text-red-500" />
                    </div>
                  </div>
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
