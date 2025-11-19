"use client";

import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import Image from "next/image";

export default function CareersPage({ careersBlock, cta }: any) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src={careersBlock?.herosection?.video?.url}
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                {careersBlock?.herosection?.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                {careersBlock?.herosection?.description}
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                {/* FIXED: Mapped tags from props */}
                {careersBlock?.herosection?.tags?.map((tag: any) => (
                  <span
                    key={tag.id}
                    className="bg-red-500/20 text-red-300 px-4 py-2 rounded-full"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {careersBlock?.culture?.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {careersBlock?.culture?.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* This section was already correct */}
            {careersBlock?.culture?.cards?.map((card: any, index: any) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image
                    src={card.image?.url}
                    alt={card.image?.name || "culture icon"}
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {careersBlock?.internship?.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {careersBlock?.internship?.description}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {/* FIXED: Mapped careersBlock.internship.jobs */}
            {careersBlock?.internship?.jobs?.map((job: any, index: any) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-8 border border-gray-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {job?.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {job?.tags?.map((tag: any) => (
                        <span
                          className="bg-red-500/10 text-red-600 px-3 py-1 rounded-full text-sm"
                          key={tag?.id}
                        >
                          {tag?.title}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">
                      <FaBriefcase className="inline w-4 h-4 mr-2" />
                      {job?.place}
                    </p>
                  </div>
                </div>

                {/* FIXED: Used job.job_description */}
                <p className="text-gray-700 mb-6">{job.job_description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Requirements:
                  </h4>
                  {/* FIXED: Split string into <li> elements */}
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {job.requirements
                      ?.split("\n")
                      .slice(1)
                      .map((item: string, i: number) => (
                        <li key={i}>{item.replace(/^- /, "")}</li>
                      ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Benefits:
                  </h4>
                  {/* FIXED: Split string into <li> elements */}
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {job.benefits
                      ?.split("\n")
                      .slice(1)
                      .map((item: string, i: number) => (
                        <li key={i}>{item.replace(/^- /, "")}</li>
                      ))}
                  </ul>
                </div>

                <button className="w-full bg-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks & Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* FIXED: Using dynamic title */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {careersBlock?.gain?.title}
            </h2>
            {/* FIXED: Using dynamic description */}
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {careersBlock?.gain?.description}
            </p>
          </motion.div>

          {/* FIXED: Mapped careersBlock.gain.cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careersBlock?.gain?.cards?.map((card: any, index: any) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md text-center flex flex-col items-center"
              >
                <Image
                  src={card.image?.url}
                  alt={card.image?.name || "perk icon"}
                  width={32}
                  height={32}
                  className="w-8 h-8 text-red-500 mx-auto mb-3"
                />
                <p className="text-gray-700 font-medium">{card.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* FIXED: Using dynamic title */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {careersBlock?.apply?.title}
            </h2>
            {/* FIXED: Using dynamic description */}
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {careersBlock?.apply?.description}
            </p>
          </motion.div>

          {/* FIXED: Mapped careersBlock.apply.cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {careersBlock?.apply?.cards?.map((step: any, index: any) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection data={cta} />
    </div>
  );
}
