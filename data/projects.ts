export interface ProjectItem {
  name: string;
  desc: string;
  github?: string;
  link?: string;
  linkText?: string;
  tag?: string;
}

export const enterpriseProjects: ProjectItem[] = [
  {
    name: "Tekion Accounting & Financial Platform",
    desc: "Core enterprise Accounting platform at Tekion driving Journal Entries, Schedules, and Bank Reconciliations. Architected high-integrity financial workflows and ledger interfaces for modern automotive dealerships.",
    link: "https://tekion.com",
    linkText: "TEKION.COM",
    tag: "TEKION CORP",
  },
  {
    name: "TekionPay & Payment SDK",
    desc: "Payments platform built on Stripe. Engineered custom Payment SDK from scratch for both B2B and B2C applications with React, Next.js (SSR), Redux, and i18n, integrated into Tekion ARC platform.",
    link: "https://tekion.com",
    linkText: "TEKION.COM",
    tag: "TEKION CORP",
  },
];

export const personalProjects: ProjectItem[] = [
  {
    name: "sophisticated-todo-app",
    desc: "Modern task management and productivity web application built with TypeScript, React, and deployed on Vercel with an interactive user experience.",
    github: "https://github.com/tdvkiran/sophisticated-todo-app",
    link: "https://sophisticated-todo-app.vercel.app",
    linkText: "LIVE DEMO",
    tag: "FULL STACK",
  },
  {
    name: "finance-dashboard",
    desc: "Financial analytics and portfolio tracking dashboard application built with Python for tracking markets and metrics.",
    github: "https://github.com/tdvkiran/finance-dashboard",
    tag: "PYTHON",
  },
  {
    name: "Cross-Platform Graphical Viewer Engine",
    desc: "Engine for cross-platform 2D/3D graphical viewing and display across Web, Desktop, Android, and iOS using React, React Native, and WPF (.NET).",
    tag: "GRAPHICS",
  },
  {
    name: "developer-portfolio",
    desc: "Cyberpunk and terminal-inspired software engineer portfolio showcasing technical experience, projects, skills, and telemetry.",
    github: "https://github.com/tdvkiran/developer-portfolio",
    link: "https://github.com/tdvkiran/developer-portfolio",
    linkText: "GITHUB",
    tag: "PORTFOLIO",
  },
];

export const projects: ProjectItem[] = [...enterpriseProjects, ...personalProjects];
