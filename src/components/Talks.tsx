"use client";

import { motion } from "framer-motion";
import { Mic, Calendar, Tag } from "lucide-react";
import { talks } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

const typeColors: Record<string, string> = {
  Palestra: "bg-blue-600/20 text-blue-400 border-blue-600/30",
  Workshop: "bg-cyan-600/20 text-cyan-400 border-cyan-600/30",
  Seminário: "bg-purple-600/20 text-purple-400 border-purple-600/30",
};

export default function Talks() {
  return (
    <SectionWrapper id="palestras" className="bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          badge="Palestras & Eventos"
          title="Compartilhando"
          highlight="Conhecimento"
          subtitle="Presença ativa em congressos, seminários e workshops nacionais sobre IA e tecnologia."
        />

        <div className="space-y-4">
          {talks.map((talk, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 border border-white/10 card-hover flex gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                <Mic className="w-5 h-5 text-white" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-white text-base">{talk.title}</h3>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium border flex-shrink-0 ${typeColors[talk.type] || typeColors.Palestra}`}>
                    {talk.type}
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 text-xs text-slate-500 mb-2">
                  <span className="flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {talk.event}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {talk.date}
                  </span>
                </div>

                <p className="text-slate-400 text-sm">{talk.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-slate-400 mb-4">Interessado em uma palestra ou workshop para sua empresa ou evento?</p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            <Mic className="w-4 h-4" />
            Agendar Palestra
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
