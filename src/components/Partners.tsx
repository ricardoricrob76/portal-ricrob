"use client";

import { motion } from "framer-motion";
import { partners } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

export default function Partners() {
  const doubled = [...partners, ...partners];

  return (
    <SectionWrapper className="bg-slate-900/50 py-16">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-slate-500 text-sm font-medium uppercase tracking-widest mb-10">
          Parceiros & Instituições
        </p>

        <div className="overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900/50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900/50 to-transparent z-10" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 w-max"
          >
            {doubled.map((partner, i) => (
              <div
                key={i}
                className="flex-shrink-0 glass rounded-xl px-6 py-3 border border-white/10 text-slate-400 text-sm font-semibold hover:text-white hover:border-cyan-500/30 transition-all whitespace-nowrap"
              >
                {partner}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
