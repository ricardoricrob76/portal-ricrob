"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowUpRight, Calendar } from "lucide-react";
import { publications } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

export default function Publications() {
  return (
    <SectionWrapper id="publicacoes">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          badge="Publicações & Artigos"
          title="Produção"
          highlight="Intelectual"
          subtitle="Artigos técnicos e publicações sobre IA, engenharia de dados e arquitetura de software."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {publications.map((pub, i) => (
            <motion.a
              key={i}
              href={pub.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 border border-white/10 card-hover group block"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors flex-shrink-0 mt-1" />
              </div>

              <h3 className="font-bold text-white text-base mb-2 group-hover:text-cyan-400 transition-colors leading-snug">
                {pub.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-4">{pub.summary}</p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {pub.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 text-xs border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="flex items-center gap-1 text-slate-500 text-xs">
                  <Calendar className="w-3 h-3" />
                  {pub.date}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
