'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import launcherLogo from '../launcher.png';

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1C1C1E]">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl shadow-sm shadow-slate-100">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
          <Link href="/" className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-3 py-2 text-slate-800 shadow-sm transition hover:bg-slate-50">
            <div className="h-10 w-10 overflow-hidden rounded-full bg-[#FF8C00]/10">
              <Image src={launcherLogo} width={40} height={40} alt="Launcher logo" className="h-10 w-10 object-contain" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">S-UPER</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Content with Fade-Up Animation */}
      <main className="mx-auto max-w-4xl px-6 py-14 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <h1 className="text-4xl font-extrabold tracking-tight mb-8">
            {title}
          </h1>
          <div className="prose prose-lg text-gray-600 leading-relaxed space-y-6">
            {children}
          </div>
        </motion.div>
      </main>
    </div>
  );
}