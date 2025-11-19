import Image from "next/image";
import CTASection from "@/components/CTASection";
import { getPageBySlug } from "@/data/loader";

export default async function FilmProductionPage() {
  const response = await getPageBySlug("film-production");

  // Access the first item in the data array to find the blocks
  const filmBlock = response.data[0].blocks.find(
    (block: any) => block.__component === "blocks.film"
  );

  const herosection = filmBlock?.herosection;
  const services = filmBlock?.services || [];

  console.log("Film Production Page Data: ", herosection);

  return (
    <div className="w-full">
      {/* Video Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src={herosection?.video?.url} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {herosection?.title}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              {herosection?.description}
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full px-4 md:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {filmBlock?.title}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {filmBlock?.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: any, index: any) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative w-full h-44 sm:h-52 md:h-56">
                  <Image
                    src={service.image?.url}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    priority={index < 3}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CTASection />
    </div>
  );
}
