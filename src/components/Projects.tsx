"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle } from "lucide-react";
import { projects } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <SectionWrapper id="projetos">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Projetos de IA"
          title="Soluções de"
          highlight="Alto Impacto"
          subtitle="Projetos reais que transformaram operações e geraram valor mensurável para organizações."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl border border-white/10 overflow-hidden card-hover"
            >
              {/* Card header */}
              <div className={`p-6 bg-gradient-to-br ${project.color} bg-opacity-10`}>
                <div className="text-4xl mb-3">{project.icon}</div>
                <h3 className="font-bold text-white text-base mb-2">{project.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>
              </div>

              {/* Technologies */}
              <div className="px-6 py-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 rounded-md bg-slate-800 text-slate-400 text-xs border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expandable details */}
              <div className="px-6 pb-4">
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="flex items-center gap-2 text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors"
                >
                  Ver detalhes
                  <ChevronDown className={`w-4 h-4 transition-transform ${expanded === i ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 space-y-3">
                        <div>
                          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Problema</p>
                          <p className="text-slate-400 text-sm">{project.problem}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Solução</p>
                          <p className="text-slate-400 text-sm">{project.solution}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Benefícios</p>
                          <ul className="space-y-1">
                            {project.benefits.map((b) => (
                              <li key={b} className="flex items-center gap-2 text-sm text-slate-300">
                                <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
