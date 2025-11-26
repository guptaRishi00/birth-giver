"use client";

import React, { useState } from "react";
import CTASection from "@/components/CTASection";
import { FaArrowRight, FaPlus, FaMinus } from "react-icons/fa";

export default function MarketingStrategyPage() {
  const [activeTrend, setActiveTrend] = useState<number | null>(0);

  const toggleTrend = (index: number) => {
    setActiveTrend(activeTrend === index ? null : index);
  };

  const steps = [
    {
      number: "01",
      title: "Market Research",
      desc: "Data-driven insights into customer behavior and trends.",
    },
    {
      number: "02",
      title: "Identify Goals",
      desc: "Define clear, measurable objectives (KPIs, ROAS).",
    },
    {
      number: "03",
      title: "Target Audience",
      desc: "Create detailed personas and understand pain points.",
    },
    {
      number: "04",
      title: "Competitor Analysis",
      desc: "Identify gaps in the market and capitalize on them.",
    },
    {
      number: "05",
      title: "Value Proposition",
      desc: "Define your unique angle and why you matter.",
    },
    {
      number: "06",
      title: "Budget Allocation",
      desc: "Strategic resource distribution for maximum impact.",
    },
    {
      number: "07",
      title: "Content Strategy",
      desc: "Crafting the narrative and tone of voice.",
    },
    {
      number: "08",
      title: "Launch Campaign",
      desc: "Execution across selected channels.",
    },
    {
      number: "09",
      title: "Monitor & Optimize",
      desc: "Real-time analytics and performance tuning.",
    },
  ];

  const trends = [
    {
      title: "AI Integration",
      desc: "Automating personalization and predictive analytics.",
    },
    {
      title: "Data Analytics",
      desc: "Leveraging big data for granular decision making.",
    },
    {
      title: "Content Evolution",
      desc: "Interactive, user-generated, and long-form value.",
    },
    {
      title: "Social Commerce",
      desc: "Seamless shopping experiences within social apps.",
    },
    {
      title: "Video Dominance",
      desc: "Short-form and live streaming as primary drivers.",
    },
    {
      title: "Voice Search",
      desc: "Optimizing for conversational queries and assistants.",
    },
    {
      title: "Sustainability",
      desc: "Eco-conscious branding as a core value proposition.",
    },
    {
      title: "AR & VR",
      desc: "Immersive brand experiences and virtual try-ons.",
    },
    {
      title: "Hyper-Personalization",
      desc: "Individualized customer journeys at scale.",
    },
    {
      title: "Omnichannel",
      desc: "Unified experience across physical and digital.",
    },
  ];

  return (
    <main className="bg-white min-h-screen text-black selection:bg-red-600 selection:text-white font-sans">
      {/* 1. Typographic Hero with Video Overlay */}
      <section className="relative w-full h-screen flex flex-col justify-between border-b-4 border-black">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover grayscale opacity-50"
          >
            <source src="/marketing.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 px-6 md:px-12 pt-12 flex justify-between items-start">
          <div className="w-4 h-4 bg-red-600 animate-pulse"></div>
          <span className="font-mono text-xs font-bold tracking-widest uppercase">
            Est. 2025 / Global Strategy
          </span>
        </div>

        <div className="relative z-10 px-6 md:px-12 pb-12">
          <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter uppercase mix-blend-hard-light">
            Marktng <br />
            <span className="text-red-600">Strategy.</span>
          </h1>
          <div className="mt-8 flex flex-col md:flex-row justify-between items-end border-t border-black pt-6">
            <p className="max-w-md text-lg font-medium leading-tight">
              Comprehensive solutions to maximize reach. We don't just guess; we
              engineer impact.
            </p>
            <div className="hidden md:flex items-center gap-2 font-bold uppercase tracking-widest text-sm">
              Scroll for Analysis{" "}
              <FaArrowRight className="rotate-90 text-red-600" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Traditional vs Digital (The Split Grid) */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 border-b-4 border-black">
        {/* Traditional - Left */}
        <div className="p-12 lg:p-24 border-b-4 lg:border-b-0 lg:border-r-4 border-black hover:bg-zinc-50 transition-colors">
          <span className="block text-red-600 font-bold text-6xl mb-6 font-mono">
            I.
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-8">
            Traditional
          </h2>
          <ul className="space-y-6">
            {[
              "Print Media & Press",
              "Broadcast (TV/Radio)",
              "OOH & Billboards",
              "Direct Mail",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-4 text-xl font-medium border-b border-gray-200 pb-2"
              >
                <span className="w-2 h-2 bg-black rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-gray-500 leading-relaxed">
            The foundation of mass awareness. Best for broad demographic
            targeting and high-trust local presence.
          </p>
        </div>

        {/* Digital - Right */}
        <div className="p-12 lg:p-24 bg-black text-white selection:bg-white selection:text-red-600">
          <span className="block text-red-600 font-bold text-6xl mb-6 font-mono">
            II.
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-8">
            Digital
          </h2>
          <ul className="space-y-6">
            {[
              "Social Ecosystems",
              "SEO & SEM",
              "Programmatic Ads",
              "Content Engines",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-4 text-xl font-medium border-b border-gray-800 pb-2"
              >
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-gray-400 leading-relaxed">
            Precision targeting with real-time attribution. The engine of modern
            growth and community building.
          </p>
        </div>
      </section>

      {/* 3. The Roadmap (Sticky Timeline) */}
      <section className="relative w-full border-b-4 border-black">
        <div className="flex flex-col lg:flex-row">
          {/* Sticky Title */}
          <div className="lg:w-1/3 lg:sticky lg:top-0 lg:h-screen bg-red-600 text-white p-12 flex flex-col justify-between z-10">
            <div>
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6">
                The <br /> Blueprint
              </h2>
              <p className="font-mono text-sm uppercase tracking-widest opacity-80">
                Methodology
              </p>
            </div>
            <div className="hidden lg:block">
              <FaArrowRight className="w-12 h-12 rotate-90 md:rotate-0" />
            </div>
          </div>

          {/* Scrollable Steps */}
          <div className="lg:w-2/3 bg-white">
            {steps.map((step, i) => (
              <div
                key={i}
                className="group flex flex-col md:flex-row border-b-2 border-black last:border-b-0 min-h-[200px]"
              >
                <div className="p-8 md:p-12 md:w-1/4 border-b md:border-b-0 md:border-r-2 border-black flex items-start">
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-black to-gray-400 group-hover:text-red-600 transition-colors">
                    {step.number}
                  </span>
                </div>
                <div className="p-8 md:p-12 md:w-3/4 flex flex-col justify-center group-hover:bg-zinc-50 transition-colors">
                  <h3 className="text-2xl md:text-3xl font-bold uppercase mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 font-medium">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 2025 Forecast (Interactive List) */}
      <section className="py-24 px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="mb-16 border-b-4 border-black pb-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            2025 <span className="text-red-600">Forecast</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-0">
          {trends.map((trend, i) => (
            <div key={i} className="border-b border-gray-200">
              <button
                onClick={() => toggleTrend(i)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <span
                  className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${
                    activeTrend === i
                      ? "text-red-600"
                      : "text-black group-hover:text-red-600"
                  }`}
                >
                  {trend.title}
                </span>
                <div
                  className={`transition-transform duration-300 ${
                    activeTrend === i ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {activeTrend === i ? (
                    <FaMinus className="text-red-600" />
                  ) : (
                    <FaPlus />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeTrend === i
                    ? "max-h-40 opacity-100 mb-8"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  {trend.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Wrapper with adjusted padding */}
      <div className="border-t-4 border-black">
        <CTASection />
      </div>
    </main>
  );
}
