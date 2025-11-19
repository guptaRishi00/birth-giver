"use client";

import React, { useState } from "react";
import Link from "next/link";
import CTASection from "@/components/CTASection";

// Accept 'cta' data as a prop
export default function ContactPage({ cta }: { cta: any }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    try {
      setStatus("submitting");
      // Mock submission - replace with actual API call if needed
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="w-full px-4 md:px-20 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Call Us
            </h2>
            <Link
              href="tel:+447776842718"
              className="text-red-600 font-medium hover:text-red-700"
            >
              +44 7776 842718
            </Link>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Email Us
            </h2>
            <Link
              href="mailto:bgfp@birthgiverfilmproduction.com"
              className="text-red-600 font-medium hover:text-red-700 break-all"
            >
              bgfp@birthgiverfilmproduction.com
            </Link>
          </div>
        </div>

        <div className="mt-10 bg-white border border-gray-200 rounded-xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Send us a message
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="col-span-1">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Your full name"
                required
              />
            </div>
            <div className="col-span-1">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="phone"
              >
                Phone (optional)
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="+44 ..."
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="How can we help?"
                required
              />
            </div>
            <div className="col-span-1 md:col-span-2 flex items-center gap-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold bg-red-600 text-white hover:bg-red-700 transition-colors disabled:opacity-60"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : "Send message"}
              </button>
              {status === "success" && (
                <span className="text-sm text-green-600">
                  Thanks! We’ll get back to you shortly.
                </span>
              )}
              {status === "error" && (
                <span className="text-sm text-red-600">
                  Please fill out required fields.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
      {/* Pass the data prop here */}
      <CTASection data={cta} />
    </div>
  );
}
