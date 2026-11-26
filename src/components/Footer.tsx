import { Brain, Linkedin, Github, Youtube, Instagram, ExternalLink } from "lucide-react";
import { siteData } from "@/lib/data";

const socialLinks = [
  { icon: Linkedin, href: siteData.linkedin, label: "LinkedIn" },
  { icon: Github, href: siteData.github, label: "GitHub" },
  { icon: Youtube, href: siteData.youtube, label: "YouTube" },
  { icon: Instagram, href: siteData.instagram, label: "Instagram" },
  { icon: ExternalLink, href: siteData.lattes, label: "Lattes" },
];

const footerLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Formação", href: "#formacao" },
  { label: "Projetos", href: "#projetos" },
  { label: "Palestras", href: "#palestras" },
  { label: "Publicações", href: "#publicacoes" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white">Ricardo Lima</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Arquiteto de Dados e IA | Professor de Pós-Graduação | Especialista em IA Generativa
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4">Navegação</p>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-500 hover:text-cyan-400 text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4">Redes Sociais</p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Ricardo Roberto de Lima — Arquiteto de Dados e IA
          </p>
          <p className="text-slate-700 text-xs">
            Desenvolvido com Next.js 15 · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
