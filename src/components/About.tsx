"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Brain, Users } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

const highlights = [
  { icon: Brain, label: "IA Generativa", desc: "LLMs, RAG, Multiagentes" },
  { icon: BookOpen, label: "Docência", desc: "9+ Instituições de Ensino" },
  { icon: Award, label: "Certificações", desc: "Oracle, AWS, Azure, Google" },
  { icon: Users, label: "Liderança", desc: "Times de Alta Performance" },
];

export default function About() {
  return (
    <SectionWrapper id="sobre" className="bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Sobre"
          title="Quem é"
          highlight="Ricardo Lima"
          subtitle="Uma trajetória de mais de 28 anos construída na interseção entre tecnologia, inovação e educação."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 blur-2xl" />
              <div className="relative glass rounded-3xl p-1 gradient-border">
                <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 aspect-[4/5] flex items-center justify-center">
                  {/* Placeholder avatar */}
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mx-auto mb-4 text-5xl font-black text-white">
                      RL
                    </div>
                    <p className="text-slate-400 text-sm">Ricardo Roberto de Lima</p>
                    <p className="text-cyan-400 text-xs mt-1">Arquiteto de Dados & IA</p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 border border-cyan-500/30">
                <div className="text-2xl font-black gradient-text">28+</div>
                <div className="text-xs text-slate-400">Anos de Exp.</div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Ricardo Roberto de Lima é <strong className="text-white">Arquiteto de Dados e IA Sênior na DATAPREV</strong>,
                onde lidera iniciativas estratégicas de modernização tecnológica, implementação de plataformas de dados
                e soluções de Inteligência Artificial para a previdência social brasileira.
              </p>
              <p>
                Com formação em <strong className="text-white">Mestrado em Engenharia de Software pelo CESAR</strong>,
                MBA em Machine Learning e vasta experiência prática, Ricardo combina profundidade técnica com
                visão estratégica para entregar soluções de alto impacto.
              </p>
              <p>
                Como <strong className="text-white">professor de pós-graduação</strong> em instituições como PUC Minas,
                IBMEC e UNYLEYA, Ricardo forma a próxima geração de profissionais em IA, Engenharia de Dados
                e Arquitetura de Software, com metodologia prática e conteúdo sempre atualizado.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {highlights.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="glass rounded-xl p-4 border border-white/10 card-hover">
                  <Icon className="w-5 h-5 text-cyan-400 mb-2" />
                  <div className="text-sm font-semibold text-white">{label}</div>
                  <div className="text-xs text-slate-400">{desc}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href="#contato"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl text-sm hover:opacity-90 transition-opacity"
              >
                Solicitar Consultoria
              </a>
              <a
                href="#formacao"
                className="px-6 py-3 glass border border-white/20 text-white font-semibold rounded-xl text-sm hover:border-cyan-500/50 transition-colors"
              >
                Ver Formação
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
