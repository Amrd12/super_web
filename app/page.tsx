"use client";

import Image from "next/image";
import Link from "next/link";
import launcherLogo from "./launcher.png";
import { motion } from "framer-motion";
import {
  Route,
  ShieldCheck,
  UserCheck,
  DollarSign,
  Headphones,
} from "lucide-react";

const aboutContent = {
  section_about: "---------------- ABOUT ----------------",
  aboutUsTitle: "About Us",
  aboutIntro:
    "At S-UPER, we are committed to providing high-quality ride-sharing services to ensure that our users receive the best transportation in the security and comfort of their journeys.",
  aboutOurVision: "Our Vision",
  aboutVisionText:
    "To transform the ride-sharing industry by offering comprehensive, user-centered services that improve travel quality.",
  aboutOurMission: "Our Mission",
  aboutMissionText:
    "To provide professional, efficient, and secure ride-sharing services across a variety of transportation needs.",
  aboutWhyChooseUs: "Why Choose Us",
  aboutSafetyTitle: "Advanced Safety Features",
  aboutSafetyDesc: "Real-time tracking and emergency assistance.",
  aboutDriversTitle: "Verified Drivers",
  aboutDriversDesc: "Thorough background checks and training.",
  aboutPricingTitle: "Affordable Pricing",
  aboutPricingDesc: "Transparent fare estimates and flexible payments.",
  aboutSupportTitle: "24/7 Support",
  aboutSupportDesc: "Dedicated service to assist with any queries.",
  aboutFooter: "© 2026 S-UPER. All rights reserved.",
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8F9FA] via-white to-[#F3F7FF] text-slate-900">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-10 lg:px-10 lg:py-16">
        <motion.section
          className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-[#D66E00] shadow-sm shadow-orange-100">
              {aboutContent.section_about}
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-flex items-center gap-3 rounded-full bg-[#FFE8D6] px-4 py-2 text-sm font-semibold text-[#AE5E0C] shadow-sm shadow-orange-100">
                <div className="h-2.5 w-2.5 rounded-full bg-[#D66E00]" />
                Premium Ride Experience
              </div>

              <div className="grid gap-4 rounded-[28px] border border-slate-200 bg-white px-4 py-4 shadow-sm shadow-slate-200 sm:grid-cols-[auto_1fr] sm:items-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#FF8C00]/25 bg-[#FFF5E8] shadow-inner shadow-orange-50">
                  <Image src={launcherLogo} width={68} height={68} alt="Launcher logo" className="h-16 w-16 object-contain" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Premium brand</p>
                  <p className="text-sm font-semibold text-slate-950">S-UPER</p>
                </div>
              </div>

              <p className="text-sm uppercase tracking-[0.3em] text-orange-500">{aboutContent.aboutUsTitle}</p>
              <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                S-UPER Secure Drive
              </h1>

              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                {aboutContent.aboutIntro}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
                <h2 className="text-lg font-semibold text-slate-950">{aboutContent.aboutOurVision}</h2>
                <p className="mt-3 text-slate-600">{aboutContent.aboutVisionText}</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
                <h2 className="text-lg font-semibold text-slate-950">{aboutContent.aboutOurMission}</h2>
                <p className="mt-3 text-slate-600">{aboutContent.aboutMissionText}</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Link href="/privacy" className="inline-flex items-center justify-center rounded-full bg-[#FF8C00] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-[#e67600]">
                View Privacy Policy
              </Link>
              <Link href="/terms" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50">
                Read Terms of Service
              </Link>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-gradient-to-br from-[#FFFAF6] to-[#FFF1E6] px-6 py-8 shadow-[0_35px_120px_rgba(255,138,0,0.18)] sm:px-8">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#FFB85C]/20 blur-3xl" />
            <div className="absolute -left-16 bottom-10 h-48 w-48 rounded-full bg-[#FF8C00]/15 blur-3xl" />
            <div className="relative z-10 flex h-full flex-col gap-8">
              <div className="flex items-center gap-3 rounded-3xl bg-white/90 px-4 py-3 shadow-sm shadow-slate-200">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#FF8C00] text-white shadow-md shadow-orange-200">
                  <Route className="h-7 w-7" strokeWidth={2.2} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Secure Ride</p>
                  <p className="text-xl font-semibold text-slate-950">Smart routing & easy booking</p>
                </div>
              </div>

              <div className="rounded-[32px] bg-slate-950 p-6 text-white shadow-[0_25px_60px_rgba(15,23,42,0.25)]">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#FF8C00] text-2xl font-black text-slate-950">
                    S
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-orange-200">S-UPER</p>
                    <p className="text-2xl font-black">Secure Drive</p>
                  </div>
                </div>
                <p className="mt-6 max-w-xs text-sm leading-6 text-orange-100/90">
                  Experience the new standard for premium transportation with strong safety, verified drivers, and transparent pricing.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[32px] bg-white/90 p-5 shadow-sm shadow-slate-200">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Fast Booking</p>
                  <p className="mt-3 text-xl font-semibold text-slate-950">Instant ride matching</p>
                </div>
                <div className="rounded-[32px] bg-white/90 p-5 shadow-sm shadow-slate-200">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Trusted service</p>
                  <p className="mt-3 text-xl font-semibold text-slate-950">Quality drivers every time</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="rounded-[40px] border border-slate-200 bg-white/90 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.08)]"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants} className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.28em] text-orange-500">{aboutContent.aboutWhyChooseUs}</p>
              <h2 className="text-3xl font-black text-slate-950 sm:text-4xl">The safer, smarter way to travel.</h2>
              <p className="max-w-xl text-lg leading-8 text-slate-600">
                Our premium service pairs advanced technology with real people so every journey feels reliable, refined, and personal.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <motion.div variants={itemVariants} className="rounded-[32px] border border-slate-200 bg-[#FFF7ED] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFE6CC] text-[#D97400]">
                  <ShieldCheck className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{aboutContent.aboutSafetyTitle}</h3>
                <p className="mt-3 text-slate-600">{aboutContent.aboutSafetyDesc}</p>
              </motion.div>

              <motion.div variants={itemVariants} className="rounded-[32px] border border-slate-200 bg-[#F5F7FF] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D5E4FF] text-[#1D4ED8]">
                  <UserCheck className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{aboutContent.aboutDriversTitle}</h3>
                <p className="mt-3 text-slate-600">{aboutContent.aboutDriversDesc}</p>
              </motion.div>

              <motion.div variants={itemVariants} className="rounded-[32px] border border-slate-200 bg-[#ECFDF5] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#BBF7D0] text-[#047857]">
                  <DollarSign className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{aboutContent.aboutPricingTitle}</h3>
                <p className="mt-3 text-slate-600">{aboutContent.aboutPricingDesc}</p>
              </motion.div>

              <motion.div variants={itemVariants} className="rounded-[32px] border border-slate-200 bg-[#F8FAFC] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C7D2FE] text-[#4338CA]">
                  <Headphones className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{aboutContent.aboutSupportTitle}</h3>
                <p className="mt-3 text-slate-600">{aboutContent.aboutSupportDesc}</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        <footer className="text-center text-sm text-slate-500">{aboutContent.aboutFooter}</footer>
      </div>
    </div>
  );
}
