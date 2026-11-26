interface Props {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}

export default function SectionHeader({ badge, title, highlight, subtitle }: Props) {
  return (
    <div className="text-center mb-16">
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
