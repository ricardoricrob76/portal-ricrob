"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <SectionWrapper id="formacao">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          badge="Formação Acadêmica"
          title="Base do"
          highlight="Conhecimento"
          subtitle="Formação sólida que combina teoria e prática em engenharia de software, dados e inteligência artificial."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-cyan-500 to-transparent" />

          <div className="space-y-8">
            {education.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 sm:gap-0 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 border-2 border-navy z-10 mt-6" />

                {/* Spacer for opposite side */}
                <div className="hidden sm:block sm:w-1/2" />

                {/* Card */}
                <div className={`ml-12 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12" : "sm:pl-12"}`}>
                  <div className="glass rounded-2xl p-6 border border-white/10 card-hover">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h3 className="font-bold text-white text-base">{item.degree}</h3>
                        <p className="text-cyan-400 text-sm font-medium">{item.institution}</p>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                    <div className="mt-3 inline-block px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-xs font-medium border border-blue-600/30">
                      {item.period}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
