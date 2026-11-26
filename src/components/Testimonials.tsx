"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <SectionWrapper id="depoimentos">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          badge="Depoimentos"
          title="O que dizem"
          highlight="sobre Ricardo"
          subtitle="Feedback de alunos, clientes e parceiros que vivenciaram a excelência do trabalho."
        />

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-3xl p-8 sm:p-10 border border-white/10 text-center"
            >
              <Quote className="w-10 h-10 text-cyan-500/40 mx-auto mb-6" />

              <p className="text-slate-200 text-lg sm:text-xl leading-relaxed mb-8 italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                  {testimonials[current].avatar}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white">{testimonials[current].name}</p>
                  <p className="text-cyan-400 text-sm">{testimonials[current].role}</p>
                  <p className="text-slate-500 text-xs">{testimonials[current].institution}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-cyan-400 w-6" : "bg-slate-600"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
