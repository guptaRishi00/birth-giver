import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { FaArrowRight } from "react-icons/fa";
import { getGlobalData, getPageBySlug } from "@/data/loader";

export default async function Services() {
  const response = await getPageBySlug("services");
  const serviceBlock = response.data[0]?.blocks?.find(
    (block: any) => block.__component === "blocks.service"
  );
  const herosection = serviceBlock?.herosection;
  const services = serviceBlock?.services || [];

  const globalresponse = await getGlobalData();
  const cta = globalresponse?.data?.cta[0];
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        {" "}
        {/* new */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={herosection?.video?.url} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              {herosection.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full px-4 md:px-20 py-16 ">
        <div className="w-full mx-auto">
          <div className="space-y-16">
            {services.map((service: any, index: any) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden">
                <div className="p-8 md:p-12">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h2>
                      <p className="text-gray-600 text-justify max-w-8xl">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {service.subServices.map(
                      (subService: any, subIndex: any) => (
                        <div key={subIndex}>
                          <div className="group bg-white border border-gray-200 rounded-xl h-full overflow-hidden hover:shadow-lg transition-all">
                            <div className="relative h-50 w-full overflow-hidden">
                              <Image
                                src={
                                  subService.image?.url ||
                                  "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963f?q=80&w=1200&auto=format&fit=crop"
                                }
                                alt={subService.name || "Service Image"}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                priority={subIndex < 3}
                              />
                            </div>
                            <div className="p-6">
                              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                {subService.title}
                              </h4>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {subService.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                    {/* Get Your Quote Card */}
                    <div className="group bg-linear-to-br from-red-600 to-red-700 border border-red-600 rounded-xl overflow-hidden hover:shadow-lg transition-all">
                      <div className="relative h-50 w-full overflow-hidden bg-linear-to-br from-red-500 to-red-600 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaArrowRight className="w-8 h-8" />
                          </div>
                          <h4 className="text-lg font-semibold mb-2">
                            Ready to Get Started?
                          </h4>
                          <p className="text-sm opacity-90 mb-4">
                            Get your personalized quote today
                          </p>
                        </div>
                      </div>
                      <div className="p-6">
                        <Link
                          href="/contact"
                          className="w-full inline-flex items-center justify-center px-6 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          Get Your Quote
                          <FaArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-10 md:hidden">
                    <Link
                      href={service.href}
                      className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Explore {service.title}
                      <FaArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CTASection data={cta} />
    </div>
  );
}
