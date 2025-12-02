import Image from "next/image";
import Link from "next/link"; // Added Link import
import CTASection from "@/components/CTASection";
import { FaArrowRight, FaCode, FaArrowDown } from "react-icons/fa";

export default function SoftwareDevelopmentPage() {
  const services = [
    {
      title: "Custom Web Applications",
      description:
        "Build powerful, scalable, and secure web applications tailored to your business workflows.",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&h=300&fit=crop&crop=center",
      link: "/services/web-apps", // You can add specific links here
    },
    {
      title: "Mobile App Ecosystems",
      description:
        "High-performance native and cross-platform mobile apps for iOS and Android using Flutter & React Native.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop&crop=center",
      link: "/services/mobile",
    },
    {
      title: "ERP & CRM Architecture",
      description:
        "Comprehensive enterprise systems that streamline operations and enhance customer relationships.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop&crop=center",
      link: "/services/erp-crm",
    },
    {
      title: "API Integration",
      description:
        "Robust, secure APIs and third-party service integration for seamless system communication.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop&crop=center",
      link: "/services/api",
    },
    {
      title: "Cloud Infrastructure",
      description:
        "Cloud-native applications and serverless architecture on AWS, Azure, and GCP.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center",
      link: "/services/cloud",
    },
    {
      title: "E-Commerce Platforms",
      description:
        "Custom online stores with secure payment integrations and subscription management.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop&crop=center",
      link: "/services/ecommerce",
    },
    {
      title: "Process Automation",
      description:
        "RPA solutions and workflow optimization to reduce manual tasks and minimize errors.",
      image:
        "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=600&auto=format&fit=crop&q=60",
      link: "/services/automation",
    },
    {
      title: "UI/UX Engineering",
      description:
        "User-centered design principles creating clean, beautiful interfaces that deliver exceptional experiences.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop&crop=center",
      link: "/services/ui-ux",
    },
  ];

  return (
    <main className="bg-white min-h-screen text-zinc-900 selection:bg-zinc-900 selection:text-white">
      {/* 1. Immersive Hero Section */}
      <section className="relative h-[85vh] w-full flex flex-col justify-end pb-12 md:pb-20 px-6 md:px-12">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-zinc-900">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          >
            <source src="/coding.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-screen-2xl mx-auto border-b border-zinc-200 pb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-zinc-100 rounded-lg border border-zinc-200">
              <FaCode className="w-4 h-4 text-zinc-600" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              Engineering Division
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-white mb-8 max-w-6xl">
            Software & <br />
            <span className="text-zinc-400">Development.</span>
          </h1>

          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <p className="text-white text-lg md:text-xl max-w-5xl leading-relaxed text-balance">
              We engineer robust digital products. From complex backend
              architectures to fluid frontend experiences, we build the future.
            </p>
            <div className="hidden md:flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
              <FaArrowDown className="animate-bounce" />
              Scroll to explore
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Modular Grid */}
      <section className="w-full px-6 md:px-12 py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h2 className="text-4xl font-bold tracking-tight">
              Core Competencies
            </h2>
            <p className="text-zinc-500 max-w-md text-right hidden md:block">
              Our technical stack is agnostic. Our focus is performance,
              security, and scalability.
            </p>
          </div>

          {/* The Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 border border-zinc-200">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white h-full flex flex-col justify-between overflow-hidden hover:bg-zinc-50 transition-colors duration-500"
              >
                {/* Numbering */}
                <div className="p-8 pb-0 flex justify-between items-start">
                  <span className="text-xs font-mono text-zinc-300">
                    0{index + 1}
                  </span>
                  {/* Decorative Arrow (Top Right) */}
                  <FaArrowRight className="w-4 h-4 text-zinc-300 -rotate-45 group-hover:rotate-0 group-hover:text-zinc-900 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="p-8 relative z-10">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-4 leading-tight group-hover:translate-x-1 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6 opacity-80 group-hover:opacity-100">
                    {service.description}
                  </p>

                  {/* --- NEW CTA ADDED HERE --- */}
                  <Link
                    href={service.link || "/contact"}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-900 border-b border-zinc-200 pb-1 group-hover:border-zinc-900 transition-colors duration-300"
                  >
                    View Solutions
                    <FaArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Image Reveal Section */}
                <div className="relative w-full aspect-[4/3] overflow-hidden mt-auto">
                  <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/5 z-10 transition-colors" />
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
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
