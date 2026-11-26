export const siteData = {
  name: "Ricardo Roberto de Lima",
  title: "Arquiteto de Dados e IA | Engenheiro de Software | Professor de Pós-Graduação",
  subtitle: "Especialista em IA Generativa, Dados e Cloud Computing",
  description:
    "Profissional com mais de 28 anos de experiência atuando em engenharia de software, arquitetura de soluções, inteligência artificial, governança de dados, sistemas distribuídos e transformação digital.",
  email: "contato@ricardolima.dev",
  linkedin: "https://www.linkedin.com/in/ricardorobertolima/",
  github: "https://github.com/ricardorlima",
  youtube: "https://youtube.com/@ricardorlima",
  instagram: "https://instagram.com/ricardorlima",
  lattes: "http://lattes.cnpq.br/",
};

export const stats = [
  { value: 28, suffix: "+", label: "Anos de Experiência" },
  { value: 5000, suffix: "+", label: "Alunos Formados" },
  { value: 50, suffix: "+", label: "Projetos Entregues" },
  { value: 15, suffix: "+", label: "Certificações" },
];

export const education = [
  {
    degree: "Mestrado em Engenharia de Software",
    institution: "CESAR School",
    period: "2018 – 2020",
    description: "Pesquisa em arquitetura de software, sistemas distribuídos e qualidade de software.",
    icon: "🎓",
  },
  {
    degree: "MBA em Machine Learning e IA",
    institution: "IGTI / XP Educação",
    period: "2021 – 2022",
    description: "Especialização em algoritmos de ML, Deep Learning, NLP e IA aplicada a negócios.",
    icon: "🤖",
  },
  {
    degree: "MBA em Tecnologia da Informação",
    institution: "UNIPÊ",
    period: "2010 – 2012",
    description: "Gestão de TI, governança corporativa, projetos e arquitetura empresarial.",
    icon: "💼",
  },
  {
    degree: "Tecnologia em Processamento de Dados",
    institution: "ASPER",
    period: "1993 – 1997",
    description: "Fundamentos de computação, programação, banco de dados e sistemas de informação.",
    icon: "💻",
  },
];

export const experiences = [
  {
    company: "DATAPREV",
    role: "Arquiteto de Dados e IA Sênior",
    period: "2010 – Presente",
    description:
      "Liderança técnica em projetos de modernização de plataformas de dados, implementação de Data Lakehouse, soluções de IA Generativa e governança de dados para a previdência social brasileira.",
    tags: ["Data Lakehouse", "IA Generativa", "Oracle OCI", "Python", "Governança de Dados"],
    highlight: true,
  },
  {
    company: "Governo do Estado da Paraíba",
    role: "Arquiteto de Soluções",
    period: "2005 – 2010",
    description:
      "Arquitetura e desenvolvimento de sistemas de informação para órgãos estaduais, integração de sistemas legados e modernização tecnológica.",
    tags: ["Java", "SOA", "Integração de Sistemas", "Arquitetura Corporativa"],
    highlight: false,
  },
  {
    company: "CODATA",
    role: "Analista de Sistemas Sênior",
    period: "2000 – 2005",
    description:
      "Desenvolvimento e manutenção de sistemas críticos para o governo estadual, liderança de equipes técnicas e gestão de projetos de TI.",
    tags: ["Java", "Oracle", "Gestão de Projetos", "Sistemas Críticos"],
    highlight: false,
  },
  {
    company: "DETRAN-PB / Prefeitura de João Pessoa",
    role: "Engenheiro de Software",
    period: "1996 – 2000",
    description:
      "Desenvolvimento de sistemas de gestão pública, automação de processos e implementação de soluções tecnológicas para serviços ao cidadão.",
    tags: ["Delphi", "SQL Server", "Automação", "Sistemas Públicos"],
    highlight: false,
  },
];

export const skills = [
  {
    category: "IA Generativa",
    icon: "🧠",
    color: "from-blue-600 to-cyan-500",
    items: ["LLMs", "RAG", "Multiagentes", "CrewAI", "LangChain", "Prompt Engineering", "Fine-tuning"],
  },
  {
    category: "Engenharia de Dados",
    icon: "🗄️",
    color: "from-cyan-500 to-teal-500",
    items: ["Data Lakehouse", "Data Lake", "ETL/ELT", "Data Governance", "Data Mesh", "Apache Spark", "dbt"],
  },
  {
    category: "Cloud Computing",
    icon: "☁️",
    color: "from-indigo-600 to-blue-500",
    items: ["Oracle OCI", "Microsoft Azure", "AWS", "Huawei Cloud", "Kubernetes", "Docker", "Terraform"],
  },
  {
    category: "Machine Learning",
    icon: "📊",
    color: "from-purple-600 to-indigo-500",
    items: ["Deep Learning", "NLP", "Computer Vision", "MLOps", "AutoML", "Scikit-learn", "TensorFlow"],
  },
  {
    category: "Desenvolvimento",
    icon: "⚙️",
    color: "from-blue-500 to-cyan-400",
    items: ["Python", "Java", "APIs REST", "Microserviços", "FastAPI", "Spring Boot", "GraphQL"],
  },
  {
    category: "Arquitetura",
    icon: "🏗️",
    color: "from-teal-500 to-cyan-400",
    items: ["Arquitetura Corporativa", "SOA", "Event-Driven", "TOGAF", "Domain-Driven Design", "Clean Architecture"],
  },
];

export const teaching = [
  { institution: "PUC Minas", role: "Professor de Pós-Graduação", area: "IA e Engenharia de Dados" },
  { institution: "IBMEC", role: "Professor de Pós-Graduação", area: "Machine Learning e Big Data" },
  { institution: "UNYLEYA", role: "Professor de Pós-Graduação", area: "Inteligência Artificial" },
  { institution: "UNIPÊ", role: "Professor de Pós-Graduação", area: "Engenharia de Software" },
  { institution: "Descomplica", role: "Professor", area: "Ciência de Dados" },
  { institution: "Estácio", role: "Professor de Pós-Graduação", area: "Tecnologia da Informação" },
  { institution: "UNIFACISA", role: "Professor", area: "Sistemas de Informação" },
  { institution: "CESAR School", role: "Professor de Pós-Graduação", area: "Engenharia de Software" },
  { institution: "UNINASSAU", role: "Professor", area: "Análise e Desenvolvimento de Sistemas" },
];

export const projects = [
  {
    title: "Plataforma de IA Generativa Corporativa",
    description: "Implementação de plataforma RAG empresarial com LLMs para automação de processos previdenciários.",
    problem: "Processos manuais lentos e inconsistentes na análise de documentos previdenciários.",
    solution: "Pipeline RAG com embeddings vetoriais, LLM fine-tuned e interface conversacional.",
    technologies: ["LangChain", "OpenAI", "Oracle OCI", "Python", "FastAPI", "Vector DB"],
    benefits: ["70% redução no tempo de análise", "95% de precisão", "Escalabilidade automática"],
    icon: "🤖",
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Data Lakehouse Previdenciário",
    description: "Arquitetura moderna de Data Lakehouse para consolidação e análise de dados da previdência social.",
    problem: "Dados fragmentados em silos, sem visão unificada para tomada de decisão.",
    solution: "Lakehouse com Delta Lake, camadas Bronze/Silver/Gold e catálogo de dados unificado.",
    technologies: ["Apache Spark", "Delta Lake", "Oracle OCI", "dbt", "Apache Airflow"],
    benefits: ["Dados unificados", "Redução de 60% no tempo de relatórios", "Governança centralizada"],
    icon: "🗄️",
    color: "from-cyan-500 to-teal-500",
  },
  {
    title: "Sistema Multiagentes Inteligentes",
    description: "Orquestração de agentes de IA para automação de workflows complexos com CrewAI.",
    problem: "Workflows complexos exigindo múltiplas decisões especializadas simultâneas.",
    solution: "Arquitetura multiagente com CrewAI, agentes especializados e memória compartilhada.",
    technologies: ["CrewAI", "LangChain", "Python", "Redis", "FastAPI", "Docker"],
    benefits: ["Automação de 80% dos workflows", "Redução de erros humanos", "Escalabilidade"],
    icon: "🕸️",
    color: "from-indigo-600 to-blue-500",
  },
  {
    title: "Oracle AI Database Integration",
    description: "Integração de capacidades de IA nativa no Oracle Database para análise em tempo real.",
    problem: "Latência alta ao mover dados para análise em sistemas externos.",
    solution: "IA embarcada no banco com Oracle ML, eliminando movimentação de dados.",
    technologies: ["Oracle Database 23ai", "Oracle ML", "Python", "SQL", "OCI"],
    benefits: ["Latência próxima de zero", "Segurança de dados", "Redução de infraestrutura"],
    icon: "🔮",
    color: "from-purple-600 to-indigo-500",
  },
  {
    title: "Plataforma RAG Empresarial",
    description: "Sistema de Retrieval-Augmented Generation para base de conhecimento corporativa.",
    problem: "Conhecimento institucional disperso e inacessível para colaboradores.",
    solution: "RAG com chunking semântico, reranking e interface conversacional multimodal.",
    technologies: ["LlamaIndex", "Qdrant", "Azure OpenAI", "Next.js", "FastAPI"],
    benefits: ["Acesso instantâneo ao conhecimento", "Onboarding 50% mais rápido", "Redução de suporte"],
    icon: "📚",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Governança de Dados Corporativa",
    description: "Implementação de framework de Data Governance com catálogo, linhagem e qualidade de dados.",
    problem: "Falta de confiança nos dados e ausência de rastreabilidade para compliance.",
    solution: "Data Catalog com Apache Atlas, políticas de qualidade e dashboard de observabilidade.",
    technologies: ["Apache Atlas", "Great Expectations", "Apache Airflow", "Python", "Grafana"],
    benefits: ["Compliance garantido", "Confiança nos dados", "Redução de incidentes em 65%"],
    icon: "🛡️",
    color: "from-teal-500 to-cyan-400",
  },
];

export const talks = [
  {
    title: "IA Generativa na Transformação Digital do Setor Público",
    event: "Congresso Nacional de TI Governamental",
    date: "2024",
    type: "Palestra",
    description: "Como LLMs e RAG estão revolucionando processos no setor público brasileiro.",
  },
  {
    title: "Data Lakehouse: Arquitetura Moderna para Dados Corporativos",
    event: "Data Summit Brasil",
    date: "2024",
    type: "Workshop",
    description: "Hands-on sobre implementação de Lakehouse com Delta Lake e Apache Spark.",
  },
  {
    title: "Agentes de IA com CrewAI e LangChain",
    event: "AI Conference São Paulo",
    date: "2023",
    type: "Palestra",
    description: "Construindo sistemas multiagentes para automação de processos complexos.",
  },
  {
    title: "Governança de Dados na Era da IA",
    event: "CONARQ — Congresso de Arquitetura de Dados",
    date: "2023",
    type: "Palestra",
    description: "Frameworks e práticas para garantir qualidade, segurança e compliance de dados.",
  },
  {
    title: "MLOps: Da Experimentação à Produção",
    event: "Machine Learning Summit",
    date: "2022",
    type: "Workshop",
    description: "Pipeline completo de MLOps com monitoramento, versionamento e deploy automatizado.",
  },
  {
    title: "Cloud Native Data Engineering",
    event: "Oracle CloudWorld Brasil",
    date: "2022",
    type: "Palestra",
    description: "Arquiteturas de dados nativas em nuvem com Oracle OCI e serviços gerenciados.",
  },
];

export const publications = [
  {
    title: "Arquiteturas RAG para Domínios Especializados: Desafios e Soluções",
    summary: "Análise comparativa de estratégias de chunking, embedding e reranking para RAG em domínios técnicos complexos.",
    date: "2024",
    tags: ["RAG", "LLM", "IA Generativa", "Engenharia de Dados"],
    link: "#",
  },
  {
    title: "Data Lakehouse no Setor Público: Um Estudo de Caso",
    summary: "Implementação de arquitetura Lakehouse em órgão federal brasileiro com foco em governança e performance.",
    date: "2023",
    tags: ["Data Lakehouse", "Setor Público", "Apache Spark", "Delta Lake"],
    link: "#",
  },
  {
    title: "Multiagentes com CrewAI: Padrões de Orquestração para Produção",
    summary: "Padrões arquiteturais para sistemas multiagentes robustos, escaláveis e observáveis em ambiente produtivo.",
    date: "2024",
    tags: ["CrewAI", "Multiagentes", "LangChain", "MLOps"],
    link: "#",
  },
  {
    title: "Governança de Dados como Habilitador da IA Confiável",
    summary: "Como práticas sólidas de Data Governance são pré-requisito para implementações de IA responsável e auditável.",
    date: "2023",
    tags: ["Data Governance", "IA Responsável", "Compliance", "Qualidade de Dados"],
    link: "#",
  },
];

export const certifications = [
  { name: "Oracle Cloud Infrastructure AI Foundations", issuer: "Oracle", year: "2024", icon: "🔮" },
  { name: "AWS Machine Learning Specialty", issuer: "Amazon Web Services", year: "2023", icon: "☁️" },
  { name: "Microsoft Azure AI Engineer", issuer: "Microsoft", year: "2023", icon: "🔷" },
  { name: "Professional Scrum Master (PSM I)", issuer: "Scrum.org", year: "2022", icon: "🏆" },
  { name: "Google Professional Data Engineer", issuer: "Google Cloud", year: "2022", icon: "📊" },
  { name: "Huawei HCIA-AI", issuer: "Huawei", year: "2024", icon: "🌐" },
  { name: "Databricks Certified Data Engineer", issuer: "Databricks", year: "2023", icon: "⚡" },
  { name: "LangChain & LLM Engineering", issuer: "DeepLearning.AI", year: "2024", icon: "🧠" },
];

export const testimonials = [
  {
    name: "Ana Carolina Mendes",
    role: "Aluna de Pós-Graduação",
    institution: "PUC Minas",
    text: "O Professor Ricardo tem uma capacidade única de transformar conceitos complexos de IA em conhecimento aplicável. Suas aulas mudaram minha visão sobre arquitetura de dados.",
    avatar: "AC",
  },
  {
    name: "Carlos Eduardo Silva",
    role: "Gerente de TI",
    institution: "Empresa Privada",
    text: "A consultoria do Ricardo foi fundamental para nossa transformação digital. Implementamos um Data Lakehouse que reduziu nossos custos operacionais em 40%.",
    avatar: "CE",
  },
  {
    name: "Fernanda Oliveira",
    role: "Coordenadora Acadêmica",
    institution: "IBMEC",
    text: "Ricardo é um dos professores mais comprometidos e atualizados que temos. Seus alunos consistentemente apresentam os melhores projetos finais.",
    avatar: "FO",
  },
  {
    name: "Marcos Vinícius Costa",
    role: "Engenheiro de Dados",
    institution: "Startup de Tecnologia",
    text: "Aprendi mais sobre IA Generativa e RAG nas aulas do Ricardo do que em meses de estudo autodidata. Conteúdo extremamente prático e atual.",
    avatar: "MV",
  },
  {
    name: "Juliana Ferreira",
    role: "Diretora de Inovação",
    institution: "Órgão Federal",
    text: "O Ricardo liderou a implementação da nossa plataforma de IA com maestria técnica e visão estratégica. Resultado acima de todas as expectativas.",
    avatar: "JF",
  },
];

export const partners = [
  "DATAPREV", "PUC Minas", "IBMEC", "UNYLEYA", "UNIPÊ",
  "CESAR School", "Estácio", "DSA", "Oracle", "Microsoft",
  "AWS", "Huawei", "Databricks", "UNIFACISA", "UNINASSAU",
];
