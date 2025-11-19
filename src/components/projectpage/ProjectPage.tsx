"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";

import Image from "next/image";
import VideoModal from "./VideoModal";

export default function ProjectPage({ cta, projects }: any) {
  const [openVideoUrl, setOpenVideoUrl] = useState<string | null>(null);
  const [openTitle, setOpenTitle] = useState<string | undefined>(undefined);

  return (
    <div>
      {/* Hero Section with Video */}
      <div className="relative h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/about.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Our Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl max-w-3xl mx-auto"
            >
              Discover our portfolio of creative projects and see the impact of
              our work
            </motion.p>
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600">Click a project to watch its video.</p>
          </div>

          {!projects ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-lg text-gray-600">Loading projects...</div>
            </div>
          ) : projects.length === 0 ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-lg text-gray-600">
                No projects available at the moment.
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project: any) => {
                const hasLink = project.link && project.link.trim().length > 0;

                return (
                  <button
                    key={project.id}
                    disabled={!hasLink}
                    onClick={() => {
                      if (hasLink) {
                        setOpenVideoUrl(project.link);
                        setOpenTitle(project.title);
                      }
                    }}
                    className={`group text-left rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ${
                      hasLink
                        ? "hover:shadow-md cursor-pointer"
                        : "cursor-default opacity-80"
                    }`}
                  >
                    {/* CHANGES START HERE */}
                    {/* Removed h-64 from this div so it can adapt to the image height */}
                    <div className="w-full relative bg-gray-100 flex items-center justify-center min-h-[16rem]">
                      {" "}
                      {/* Added min-h for consistent initial height */}
                      {project.image?.url ? (
                        <Image
                          // These width/height are for Next.js Image component optimization.
                          // The actual rendered size will be controlled by CSS.
                          width={1000} // A sufficiently large width for optimization
                          height={1000} // A sufficiently large height for optimization
                          src={project.image.url}
                          alt={`${project.title} image`}
                          // Make image fill width and adjust height automatically
                          className="w-full h-auto block"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-500 p-4">
                          No Image
                        </div>
                      )}
                      {hasLink && (
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                      )}
                    </div>
                    {/* CHANGES END HERE */}
                    <div className="p-4">
                      <h2 className="text-lg font-semibold text-gray-900">
                        {project.title}
                      </h2>
                      <p className="text-sm text-gray-600">
                        {hasLink ? "Tap to watch video." : "Coming Soon"}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <CTASection data={cta} />
      <VideoModal
        open={Boolean(openVideoUrl)}
        videoUrl={openVideoUrl}
        title={openTitle}
        onClose={() => {
          setOpenVideoUrl(null);
          setOpenTitle(undefined);
        }}
      />
    </div>
  );
}
