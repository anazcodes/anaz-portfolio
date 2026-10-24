export const profile = {
  name: "Anaz Rasheed",
  title: "Software Engineer Building AI Applications | Product Engineer | AI Engineer | Golang",
  location: "Kasaragod, Kerala, India",
  email: "anazibinurasheed@gmail.com",
  siteUrl: "https://anazrasheed.vercel.app",
};

export const whatsapp = {
  displayNumber: "+91 85901 38151",
  /** wa.me expects the number without "+", spaces, or leading zeros. */
  href: "https://wa.me/918590138151?text=Hi%20Anaz%2C%20I%20found%20your%20portfolio%20and%20wanted%20to%20connect!",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/anazcodes", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/anaz-rasheed", icon: "linkedin" },
  { label: "LeetCode", href: "https://leetcode.com/u/anaz_ibinu_rasheed/", icon: "leetcode" },
  { label: "WhatsApp", href: whatsapp.href, icon: "whatsapp" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
] as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "$100M+", label: "processed in the first year of the AltCase platform I led the backend for" },
  { value: "15K–25K", label: "orders a day processed in near real-time at Turinix" },
  { value: "30M+", label: "records through a custom data pipeline" },
];

export const whatIDo = [
  {
    title: "Backend Engineering & System Design",
    description:
      "Owning systems end to end in Go, PostgreSQL, Redis and gRPC: architecture, deployment, monitoring, and fixing things when they break in production.",
  },
  {
    title: "AI & LLM Integration",
    description:
      "Building production-ready AI systems with LLMs and generative AI, backed by data you can trust and AI-assisted development in daily work.",
  },
  {
    title: "Cloud & Distributed Systems",
    description:
      "Real-time, horizontally scalable systems with WebSockets and Pub/Sub, shipped on Docker, Kubernetes, AWS and GCP with CI/CD and Grafana/Loki observability.",
  },
];

export const aboutParagraphs = [
  "I help build production-ready AI systems. My foundation is nearly four years of backend engineering across fintech, restaurant tech and real-time systems, building software that keeps working when real money and real volume hit it.",
  "Today I build restaurant tech infrastructure at Turinix end to end, from system design to the products managers use every day. I started writing Go in 2022 at Brototype, and since then I've moved from building features to owning systems end to end: architecture, deployment, monitoring, and fixing things when they break in production.",
  "Now I'm bringing that same discipline to AI. I use AI-assisted development every day in my work, and I'm deepening the fundamentals through certifications in Generative AI and LLMs and a degree in Data Science & AI.",
  "AI has made demos easy. What it hasn't changed is everything after the demo: data you can trust, systems that hold up under real load, and failures you can actually see and fix. That gap between a demo and a real product is where I like to work.",
];

export const aboutExtras = {
  openSource:
    "Open source: supported the sqlc community by resolving developers' issues and unblocking them on features the documentation didn't cover.",
  outsideCode:
    "Outside of code, I read a lot. Books have shaped how I think more than any course has.",
  languages: [
    { name: "English", level: "Native or bilingual" },
    { name: "Malayalam", level: "Native or bilingual" },
    { name: "Arabic", level: "Limited working" },
    { name: "Hindi", level: "Limited working" },
    { name: "Tamil", level: "Elementary" },
  ],
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  summary?: string;
  achievements?: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Turinix",
    location: "Mumbai, Maharashtra",
    period: "May 2025 – Present",
    summary:
      "Building Turinix's restaurant tech infrastructure end to end, from system design to the products managers use every day. Helped the company take control of ~98% of its data and business logic, and built the engine that processes 15K–25K orders a day in near real-time.",
    achievements: [
      "Reduced third-party dependency by rebuilding business logic in-house through documentation-driven development, minute-level diff validation and iterative refinement.",
      "Designed and ran a custom data pipeline that has processed 30M+ records for large-scale business analytics.",
      "Integrated sales forecasting for restaurants across the ecosystem and built Labor Scheduling software that plans employee shifts around projected demand for upcoming days and hours.",
      "Built a Labor & Sales mobile web app that gives managers and admins real-time business insights, and Recipe Management software that automates inventory tracking by syncing data across the ecosystem.",
      "Improved system efficiency and reliability by optimizing CPU-heavy, highly concurrent backend calls and tuning large-scale SQL queries through execution-pattern analysis.",
    ],
  },
  {
    role: "Golang Developer",
    company: "We3.Tech",
    location: "Mumbai, Maharashtra",
    period: "Mar 2024 – Apr 2025",
    summary:
      "Led backend development for AltCase, a fintech investment platform that went on to process $100M+ in investments in its first financial year.",
    achievements: [
      "Built investment, KYC and bank integration features and shipped dedicated APIs for web and mobile clients.",
      "Improved API efficiency by up to 83%: replaced blocking sequential calls with Go concurrency, cut a 6-query database flow down to 1 using PostgreSQL custom types and functions, and added connection pooling to reduce TLS handshake overhead.",
      "Designed a scalable low-level architecture that improved system performance and long-term maintainability.",
      "Containerized the UI and API with Docker and built CI/CD pipelines that automated every release and minimized deployment downtime.",
      "Set up self-hosted observability with Grafana, Loki and Promtail, plus real-time email alerts, so production issues were caught and fixed fast.",
      "Protected sensitive financial data by adding request-body encryption for web clients.",
      "Mentored developers on Git workflows and introduced structured logging and error-handling standards across projects.",
    ],
  },
  {
    role: "GoLang Developer",
    company: "Brototype",
    location: "Ernakulam, Kerala",
    period: "Dec 2022 – Mar 2024",
    summary:
      "Built backend systems in Go, from a horizontally scalable real-time chat system to an e-commerce REST API built on Clean Architecture.",
    achievements: [
      "Built a distributed real-time chat system for the Codenation developer community as microservices (chat, authentication and API gateway), supporting one-to-one and group messaging.",
      "Scaled the chat service horizontally with Pub/Sub message distribution, and handled WebSocket connections with goroutines and channels.",
      "Improved fault tolerance with exponential-backoff retries, and blocked unsafe file uploads with content-type detection, storing media on AWS S3.",
      "Built Device Mart, an e-commerce REST API in Go (Gin, PostgreSQL) following Clean Architecture, with Swagger documentation.",
      "Dockerized services and deployed them on Google Compute Engine and on AWS EC2 behind Nginx.",
    ],
  },
];

export type EducationItem = {
  institution: string;
  program: string;
  period?: string;
};

export const education: EducationItem[] = [
  {
    institution: "Manipal University Jaipur",
    program: "BCA, Data Science & Artificial Intelligence",
  },
  {
    institution: "Packapeer Academy",
    program: "Skill Development Course, Computer Software Engineering",
    period: "Dec 2022 – Mar 2024",
  },
];

export const skillGroups = [
  {
    category: "AI & ML",
    items: ["Python", "LLMs & Generative AI", "Supervised Learning", "scikit-learn", "Pandas", "NumPy"],
  },
  {
    category: "Backend",
    items: ["Go", "PostgreSQL", "Redis", "gRPC", "WebSockets", "Microservices", "System Design"],
  },
  {
    category: "Data",
    items: ["Data Pipelines", "SQL Performance Tuning", "Analytics", "Forecasting"],
  },
  {
    category: "Frontend",
    items: ["React", "Vite", "Tailwind CSS", "Zustand"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "Kubernetes", "CI/CD", "AWS", "GCP", "Grafana", "Loki"],
  },
];

export type Certification = {
  name: string;
  issuer?: string;
  date?: string;
  credentialId?: string;
  url?: string;
};

export const certifications: Certification[] = [
  {
    name: "Generative AI and LLMs: Architecture and Data Preparation",
    issuer: "IBM",
    date: "Sep 2026",
    credentialId: "GHNYD2P4W9J4",
    url: "https://coursera.org/verify/GHNYD2P4W9J4",
  },
  {
    name: "Machine Learning with Python",
    issuer: "IBM",
    date: "Sep 2026",
    credentialId: "BXCFJVUDCGZ4",
    url: "https://coursera.org/verify/BXCFJVUDCGZ4",
  },
  {
    name: "Go",
    issuer: "HackerRank",
    date: "Mar 2024",
    credentialId: "8B19OCF12BB1",
    url: "#",
  },
  { name: "S.O.L.I.D Principles", issuer: "Scaler", date: "Jan 2024", url: "#" },
  { name: "Scale Streaming Platforms", issuer: "Scaler", date: "Mar 2024", url: "#" },
  {
    name: "System Design: Design a Rate Limiter",
    issuer: "Scaler",
    date: "Dec 2023",
    url: "#",
  },
];

export type Project = {
  name: string;
  description: string;
  stack: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    name: "AltCase",
    description:
      "Fintech investment platform. I led the backend: investment, KYC and bank integration features, dedicated web and mobile APIs, and self-hosted Grafana/Loki observability. It processed $100M+ in investments in its first financial year.",
    stack: ["Go", "PostgreSQL", "Docker", "Grafana", "Loki"],
    url: "#",
  },
  {
    name: "Turinix Restaurant Tech",
    description:
      "Restaurant tech infrastructure built end to end: a near real-time engine processing 15K–25K orders a day, a 30M+ record data pipeline, sales forecasting, labor scheduling, a Labor & Sales web app and recipe management.",
    stack: ["Real-time systems", "Data pipelines", "Forecasting"],
  },
  {
    name: "Codenation",
    description:
      "Distributed real-time chat system for a developer community, built as microservices (chat, authentication, API gateway) with Pub/Sub for horizontal scaling, WebSockets, exponential-backoff retries and safe file uploads on AWS S3.",
    stack: ["Go", "WebSocket", "Pub/Sub", "Docker", "AWS S3"],
    url: "#",
  },
  {
    name: "Device Mart",
    description:
      "E-commerce REST API in Go following Clean Architecture, documented with Swagger, containerized and deployed on Google Compute Engine and AWS EC2 behind Nginx.",
    stack: ["Go", "Gin", "PostgreSQL", "Docker", "Nginx"],
    url: "#",
  },
];

export const codingProfile = {
  platform: "LeetCode",
  url: "https://leetcode.com/u/anaz_ibinu_rasheed/",
  problemsSolved: "129",
  topLanguages: ["Go", "Python3"],
  badge: "50 Days Badge 2024",
};
