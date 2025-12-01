"use client";

import { ChevronRight, Send } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsInstagram, BsLinkedin, BsTiktok } from "react-icons/bs";

export default function FooterComponent({ data }: any) {
  // Map social icons to the component array
  const icons = [BsInstagram, BsLinkedin, BsTiktok];

  return (
    <motion.footer
      id="contact"
      className="relative bg-neutral-950 text-neutral-300 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* --- Ambient Background Effects --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Border Gradient */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent" />

        {/* Red Glow (Top Right) */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-red-600/10 blur-[100px]" />

        {/* Cool Glow (Bottom Left) */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-blue-900/10 blur-[100px]" />

        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-soft-light"></div>
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-6 md:px-10 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Section 1: Brand and Socials (Spans 4 columns) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h3 className="text-white text-3xl font-bold tracking-tight mb-2">
                {data?.title}
                <span className="text-red-600">.</span>
              </h3>
              <p className="text-neutral-500 leading-relaxed text-sm max-w-xs">
                {data?.description}
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {data?.socials?.map((social: any, index: number) => {
                const IconComponent = icons[index];
                return (
                  <Link
                    key={social.id}
                    href={social.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Spacer Column (Optional) */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Section 2: Services (Spans 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-6">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {data?.services?.map((service: any) => (
                <li key={service.id}>
                  <Link
                    href={`/${service.path}`}
                    className="text-neutral-400 hover:text-red-500 transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Company (Spans 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-6">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {data?.company?.map((item: any) => (
                <li key={item.id}>
                  <Link
                    href={`/${item.path}`}
                    className="text-neutral-400 hover:text-red-500 transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Newsletter (Spans 3 cols) */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors duration-500">
              <h4 className="text-white font-bold mb-2">{data?.loop?.title}</h4>
              <p className="text-neutral-400 text-xs mb-6 leading-relaxed">
                {data?.loop?.description}
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    required
                    aria-label="Email address"
                    placeholder="Your email address"
                    className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500/50 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm py-3 transition-all shadow-lg shadow-red-900/20 hover:shadow-red-900/40 flex items-center justify-center gap-2 group"
                >
                  Subscribe
                  <Send className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <div className="mt-4 pt-4 border-t border-white/5">
                <p className="text-neutral-500 text-[10px] leading-tight">
                  {data?.loop?.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Locations & Copyright */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs text-neutral-500">
          {/* We Work With - Horizontal List now */}
          <div className="flex flex-wrap items-center gap-x-2">
            <span className="text-neutral-300 font-semibold">We work in:</span>
            {data?.workWith?.map((location: any, index: number) => (
              <span key={location.id} className="flex items-center">
                {index > 0 && <span className="mx-2 text-neutral-700">•</span>}
                <span className="text-neutral-400">{location.name}</span>
              </span>
            ))}
            <span className="mx-2 text-neutral-700">•</span>
            <span className="text-red-500 font-medium">Global</span>
          </div>

          <div className="text-right">{data?.rights}</div>
        </div>
      </div>
    </motion.footer>
  );
}
