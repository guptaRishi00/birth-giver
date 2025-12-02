"use client";

import React, { useState } from "react";
import Image from "next/image";
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
    <main className="bg-zinc-50 min-h-screen text-black selection:bg-red-600 selection:text-white font-sans">
      {/* 1. Typographic Hero with Video Overlay */}
      <section className="relative w-full h-[90vh] flex flex-col justify-between rounded-b-3xl overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover grayscale opacity-60"
          >
            {/* Replace with your actual video path */}
            <source src="/marketing.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/40"></div>
        </div>

        {/* Top Tagline */}
        <div className="relative z-10 px-6 md:px-12 pt-12 flex justify-between items-start">
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm py-2 px-4 rounded-full">
            <div className="w-3 h-3 bg-red-600 animate-pulse rounded-full"></div>
            <span className="font-mono text-xs font-bold tracking-widest uppercase">
              Est. 2025 / Global Strategy
            </span>
          </div>
        </div>

        {/* Main Title Area */}
        <div className="relative z-10 px-6 md:px-12 pb-16 text-white">
          <h1 className="text-[10vw] leading-[0.9] font-black tracking-tighter uppercase drop-shadow-xl">
            Marktng <br />
            <span className="text-red-500">Strategy.</span>
          </h1>
          <div className="mt-12 flex flex-col md:flex-row justify-between items-end border-t border-white/30 pt-8">
            <p className="max-w-md text-xl font-medium leading-tight text-white/90">
              Comprehensive solutions to maximize reach. We don't just guess; we
              engineer impact.
            </p>
            <div className="hidden md:flex items-center gap-3 font-bold uppercase tracking-widest text-sm bg-red-600 py-3 px-6 rounded-full mt-6 md:mt-0 hover:bg-red-700 transition-colors cursor-pointer">
              Scroll for Analysis{" "}
              <FaArrowRight className="rotate-90 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Traditional vs Digital (Visual Cards) */}
      <section className="w-full max-w-[1800px] mx-auto px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Traditional Card */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl group hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
          <div className="relative h-64 w-full mb-10 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop"
              alt="Traditional advertising, newspapers and print media"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
          </div>
          <span className="block text-red-600 font-bold text-6xl mb-4 font-mono">
            I.
          </span>
          <h2 className="text-4xl font-black uppercase mb-8">Traditional</h2>
          <ul className="space-y-4">
            {[
              "Print Media & Press",
              "Broadcast (TV/Radio)",
              "OOH & Billboards",
              "Direct Mail",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-4 text-xl font-medium border-b border-gray-100 pb-3"
              >
                <span className="w-2 h-2 bg-black rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-gray-500 leading-relaxed font-medium">
            The foundation of mass awareness. Best for broad demographic
            targeting and high-trust local presence.
          </p>
        </div>

        {/* Digital Card */}
        <div className="bg-black text-white p-8 md:p-12 rounded-3xl shadow-xl group hover:shadow-2xl transition-all duration-500 relative overflow-hidden selection:bg-white selection:text-black">
          <div className="relative h-64 w-full mb-10 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
              alt="Digital analytics and data visualization on screens"
              fill
              className="object-cover opacity-60 group-hover:opacity-90 transition-all duration-700 scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          </div>

          <span className="block text-red-600 font-bold text-6xl mb-4 font-mono relative z-10">
            II.
          </span>
          <h2 className="text-4xl font-black uppercase mb-8 relative z-10">
            Digital
          </h2>
          <ul className="space-y-4 relative z-10">
            {[
              "Social Ecosystems",
              "SEO & SEM",
              "Programmatic Ads",
              "Content Engines",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-4 text-xl font-medium border-b border-gray-800 pb-3"
              >
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-gray-400 leading-relaxed font-medium relative z-10">
            Precision targeting with real-time attribution. The engine of modern
            growth and community building.
          </p>
        </div>
      </section>

      {/* 3. The Roadmap (Sticky Timeline with Visuals) */}
      <section className="relative w-full py-24 px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sticky Title Visual Panel */}
          <div className="lg:w-1/3 lg:sticky lg:top-12 lg:h-[80vh]">
            <div className="bg-red-600 text-white p-12 flex flex-col justify-between h-full rounded-3xl relative overflow-hidden shadow-lg">
              {/* Abstract Blueprint Background Image */}
              <div className="absolute inset-0 z-0 mix-blend-overlay opacity-40">
                <Image
                  src="https://images.unsplash.com/photo-1507208773393-40d9fc670acf?q=80&w=1000&auto=format&fit=crop"
                  alt="Abstract blueprint architecture"
                  fill
                  className="object-cover grayscale"
                />
              </div>

              <div className="relative z-10">
                <h2 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6 drop-shadow-md">
                  The <br /> Blueprint
                </h2>
                <p className="font-mono text-sm uppercase tracking-widest opacity-90 bg-black/20 inline-block px-4 py-2 rounded-full">
                  Methodology
                </p>
              </div>
              <div className="hidden lg:block relative z-10">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md">
                  <FaArrowRight className="w-6 h-6 rotate-90 md:rotate-0" />
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable Steps */}
          <div className="lg:w-2/3 bg-white rounded-3xl shadow-sm overflow-hidden">
            {steps.map((step, i) => (
              <div
                key={i}
                className="group flex flex-col md:flex-row border-b border-gray-100 last:border-b-0 min-h-[180px]"
              >
                <div className="p-8 md:w-1/4 flex items-center bg-zinc-50 group-hover:bg-red-50 transition-colors">
                  <span className="text-5xl font-black text-gray-300 group-hover:text-red-600 transition-colors">
                    {step.number}
                  </span>
                </div>
                <div className="p-8 md:w-3/4 flex flex-col justify-center group-hover:bg-zinc-50 transition-colors">
                  <h3 className="text-2xl font-bold uppercase mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 font-medium text-lg leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 2025 Forecast with Header Visual */}
      <section className="py-24 px-6 md:px-12 max-w-[1800px] mx-auto bg-white rounded-3xl shadow-sm my-12">
        <div className="mb-16 flex flex-col md:flex-row items-center gap-8 pb-8 border-b border-gray-100">
          <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden shrink-0 shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
              alt="Future technology network globe"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
              2025 <span className="text-red-600">Forecast</span>
            </h2>
            <p className="mt-4 text-xl text-gray-500 font-medium max-w-xl">
              Emerging trends define the future landscape. Stay ahead of the
              curve.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-0 px-4">
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
                  className={`transition-transform duration-300 bg-gray-100 rounded-full p-3 group-hover:bg-red-50 ${
                    activeTrend === i ? "rotate-180 bg-red-100" : "rotate-0"
                  }`}
                >
                  {activeTrend === i ? (
                    <FaMinus className="text-red-600" />
                  ) : (
                    <FaPlus className="text-gray-600 group-hover:text-red-600" />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeTrend === i
                    ? "max-h-40 opacity-100 mb-10"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-xl text-gray-600 leading-relaxed font-medium pl-2 border-l-4 border-red-600">
                  {trend.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Wrapper */}
      <div className="rounded-t-3xl overflow-hidden">
        <CTASection />
      </div>
    </main>
  );
}
