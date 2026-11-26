"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <SectionWrapper id="especialidades">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Especialidades"
          title="Áreas de"
          highlight="Expertise"
          subtitle="Domínio técnico profundo em tecnologias de ponta que impulsionam a transformação digital."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 border border-white/10 card-hover group"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-2xl shadow-lg`}>
                  {skill.icon}
                </div>
                <h3 className="font-bold text-white text-base">{skill.category}</h3>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg bg-slate-800/80 text-slate-300 text-xs font-medium border border-slate-700/50 group-hover:border-slate-600 transition-colors"
                  >
                    {item}
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
