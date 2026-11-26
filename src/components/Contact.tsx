"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mic, Briefcase, Mail, User, Building, MessageSquare } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", company: "", subject: "", message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, integrate with email service
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", company: "", subject: "", message: "" });
  };

  const inputClass =
    "w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors";

  return (
    <SectionWrapper id="contato" className="bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="Contato"
          title="Vamos"
          highlight="Conversar"
          subtitle="Disponível para consultorias, palestras, projetos de IA e parcerias acadêmicas."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: CTAs + Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {[
                {
                  icon: Mic,
                  title: "Agendar Palestra",
                  desc: "Palestras e workshops sobre IA, dados e transformação digital para eventos e empresas.",
                  color: "from-blue-600 to-cyan-500",
                },
                {
                  icon: Briefcase,
                  title: "Solicitar Consultoria",
                  desc: "Consultoria especializada em IA Generativa, Data Lakehouse e arquitetura de dados.",
                  color: "from-cyan-500 to-teal-500",
                },
                {
                  icon: Mail,
                  title: "Parcerias Acadêmicas",
                  desc: "Colaborações com instituições de ensino para cursos, disciplinas e pesquisas.",
                  color: "from-indigo-600 to-blue-500",
                },
              ].map(({ icon: Icon, title, desc, color }) => (
                <div key={title} className="glass rounded-2xl p-5 border border-white/10 flex gap-4 card-hover">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">{title}</h3>
                    <p className="text-slate-400 text-xs mt-1 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass rounded-2xl p-5 border border-cyan-500/20">
              <p className="text-slate-400 text-sm mb-3">Resposta em até 24 horas úteis</p>
              <p className="text-cyan-400 text-sm font-medium">contato@ricardolima.dev</p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 border border-white/10 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className={`${inputClass} pl-10`}
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className={`${inputClass} pl-10`}
                  />
                </div>
              </div>

              <div className="relative">
                <Building className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Empresa / Instituição"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className={`${inputClass} pl-10`}
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Assunto"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  required
                  className={`${inputClass} pl-10`}
                />
              </div>

              <textarea
                placeholder="Sua mensagem..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                className={`${inputClass} resize-none`}
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg shadow-blue-600/30"
              >
                {sent ? (
                  "Mensagem enviada! ✓"
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
