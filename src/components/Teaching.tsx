"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { teaching } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

export default function Teaching() {
  return (
    <SectionWrapper id="docencia" className="bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Docência & Educação"
          title="Formando"
          highlight="Líderes em Tecnologia"
          subtitle="Atuação como professor de pós-graduação em 9 das principais instituições de ensino do Brasil."
        />

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
          {[
            { value: "9+", label: "Instituições" },
            { value: "5.000+", label: "Alunos Formados" },
            { value: "15+", label: "Disciplinas" },
          ].map((s) => (
            <div key={s.label} className="glass rounded-2xl p-4 text-center border border-white/10">
              <div className="text-2xl font-black gradient-text">{s.value}</div>
              <div className="text-xs text-slate-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {teaching.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass rounded-2xl p-5 border border-white/10 card-hover flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">{item.institution}</h3>
                <p className="text-cyan-400 text-xs font-medium mt-0.5">{item.role}</p>
                <p className="text-slate-500 text-xs mt-1">{item.area}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Courses highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 glass rounded-3xl p-8 border border-cyan-500/20 bg-gradient-to-br from-blue-900/20 to-cyan-900/10"
        >
          <h3 className="text-xl font-bold text-white mb-4">Disciplinas Ministradas</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "IA Generativa", "Machine Learning", "Deep Learning", "Engenharia de Dados",
              "Data Lakehouse", "Arquitetura de Software", "Cloud Computing", "NLP",
              "MLOps", "Governança de Dados", "Python para Dados", "LLMs e RAG",
            ].map((course) => (
              <span
                key={course}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-sm border border-slate-700 hover:border-cyan-500/50 transition-colors"
              >
                {course}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
