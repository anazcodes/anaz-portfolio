export const profile = {
  name: "Anaz Rasheed",
  title: "Software Engineer | AI & Distributed Systems",
  location: "Kasaragod, Kerala, India",
  email: "anazibinurasheed@gmail.com",
  taglineShort: "Building scalable, AI-powered systems.",
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
  { value: "129+", label: "LeetCode problems solved" },
  { value: "₹1,000Cr+", label: "mobilised via platform I helped build" },
  { value: "6", label: "professional certifications" },
];

export const whatIDo = [
  {
    title: "Backend Engineering & System Design",
    description:
      "Designing reliable, high-throughput services and APIs, from data modeling to fault-tolerant architecture that scales with real traffic.",
  },
  {
    title: "AI & LLM Integration",
    description:
      "Embedding AI-powered features and LLM workflows into production systems to turn complex requirements into practical, working tools.",
  },
  {
    title: "Cloud & Distributed Systems",
    description:
      "Building and operating containerized, observable, distributed systems on cloud infrastructure with CI/CD pipelines and monitoring built in.",
  },
];

export const aboutText =
  "Software Engineer passionate about building scalable software, AI-powered solutions, and data-driven platforms that solve real business problems. Expertise spans backend engineering, full-stack development, system design, cloud technologies, AI integration, data analytics, and secure application development (OWASP, RBAC, JWT), turning complex requirements into reliable, high-performance systems.";

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  achievements?: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Turinix",
    location: "Mumbai (Remote)",
    period: "May 2025 – Present",
  },
  {
    role: "Golang Developer",
    company: "We3.Tech",
    location: "Mumbai",
    period: "Mar 2024 – Apr 2025",
    achievements: [
      "Built backend systems (investment, KYC, bank-account verification) for AltCase, a fintech platform that mobilised over ₹1,000 crore in private market opportunities in FY26; improved API performance by reducing database calls by 83%.",
    ],
  },
  {
    role: "GoLang Developer (Freelance)",
    company: "Packapeer Academy",
    location: "Ernakulam, Kerala",
    period: "Dec 2022 – Mar 2024",
  },
];

export type EducationItem = {
  institution: string;
  program: string;
};

export const education: EducationItem[] = [
  {
    institution: "Brototype",
    program: "Web Development using Golang, Computer Software Engineering",
  },
  {
    institution: "Manipal University Jaipur",
    program: "BCA, Data Science & Artificial Intelligence",
  },
];

export const skills = [
  "Go(lang)",
  "MySQL",
  "WebSocket",
  "Docker",
  "Kubernetes",
  "Grafana",
  "CI/CD",
  "Git",
  "Java",
  "System Design",
  "Microservices",
  "Python",
];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
};

export const certifications: Certification[] = [
  { name: "Learn Python", issuer: "Scrimba", date: "May 2025", url: "#" },
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
  {
    name: "Monolith and Microservices Architecture",
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
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    name: "AltCase",
    description:
      "Fintech investment platform — built investment, KYC, and bank-integration modules plus observability tooling. The platform mobilised over ₹1,000 crore in private market opportunities in FY26.",
    stack: ["Go", "Grafana"],
    url: "#",
  },
  {
    name: "Codenation",
    description:
      "Distributed real-time chat system built for a developer community, designed for low-latency messaging at scale.",
    stack: ["Go", "Docker", "WebSocket"],
    url: "#",
  },
  {
    name: "Coming Soon",
    description: "A new project is in the works. Check back soon for details.",
    stack: [],
    placeholder: true,
  },
  {
    name: "Coming Soon",
    description: "A new project is in the works. Check back soon for details.",
    stack: [],
    placeholder: true,
  },
];

export const codingProfile = {
  platform: "LeetCode",
  url: "https://leetcode.com/u/anaz_ibinu_rasheed/",
  problemsSolved: "129",
  topLanguages: ["Go", "Python3"],
  badge: "50 Days Badge 2024",
};
