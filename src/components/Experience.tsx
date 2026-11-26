"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { experiences } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <SectionWrapper id="experiencia" className="bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="Experiência Profissional"
          title="Trajetória de"
          highlight="Impacto"
          subtitle="Mais de 28 anos construindo soluções tecnológicas de alto impacto no setor público e privado."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative glass rounded-2xl p-6 border card-hover ${
                exp.highlight
                  ? "border-cyan-500/40 bg-gradient-to-br from-blue-900/30 to-cyan-900/20"
                  : "border-white/10"
              }`}
            >
              {exp.highlight && (
                <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-semibold border border-cyan-500/30">
                  Atual
                </div>
              )}

              <div className="flex items-start gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  exp.highlight ? "bg-gradient-to-br from-blue-600 to-cyan-500" : "bg-slate-700"
                }`}>
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">{exp.company}</h3>
                  <p className={`text-sm font-medium ${exp.highlight ? "text-cyan-400" : "text-blue-400"}`}>
                    {exp.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-3">
                <Calendar className="w-3.5 h-3.5" />
                {exp.period}
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs border border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
