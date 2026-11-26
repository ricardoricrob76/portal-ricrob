import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ricardo Roberto de Lima | Arquiteto de Dados e IA",
  description:
    "Portal profissional de Ricardo Roberto de Lima — Arquiteto de Dados e IA, Engenheiro de Software, Professor de Pós-Graduação e Especialista em IA Generativa, Dados e Cloud Computing com mais de 28 anos de experiência.",
  keywords: [
    "Ricardo Roberto de Lima",
    "Arquiteto de Dados",
    "Inteligência Artificial",
    "IA Generativa",
    "Engenharia de Dados",
    "Machine Learning",
    "DATAPREV",
    "Professor Pós-Graduação",
    "LLM",
    "RAG",
    "LangChain",
    "CrewAI",
    "Cloud Computing",
    "Data Lakehouse",
  ],
  authors: [{ name: "Ricardo Roberto de Lima" }],
  creator: "Ricardo Roberto de Lima",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ricardolima.dev",
    title: "Ricardo Roberto de Lima | Arquiteto de Dados e IA",
    description:
      "Profissional com mais de 28 anos de experiência em engenharia de software, arquitetura de dados, IA generativa e transformação digital.",
    siteName: "Ricardo Roberto de Lima",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricardo Roberto de Lima | Arquiteto de Dados e IA",
    description:
      "Arquiteto de Dados e IA | Professor de Pós-Graduação | Especialista em IA Generativa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
