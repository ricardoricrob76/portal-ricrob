"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

export default function Certifications() {
  return (
    <SectionWrapper id="certificacoes" className="bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="Certificações"
          title="Credenciais"
          highlight="Reconhecidas"
          subtitle="Certificações das principais plataformas e organizações de tecnologia do mundo."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="glass rounded-2xl p-5 border border-white/10 card-hover text-center"
            >
              <div className="text-4xl mb-3">{cert.icon}</div>
              <h3 className="font-semibold text-white text-sm mb-1 leading-snug">{cert.name}</h3>
              <p className="text-cyan-400 text-xs font-medium mb-2">{cert.issuer}</p>
              <span className="inline-block px-2.5 py-1 rounded-full bg-blue-600/20 text-blue-400 text-xs border border-blue-600/30">
                {cert.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
