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
  {
    name: "Cross-Platform Graphical Viewer Engine",
    desc: "High-performance graphical display engine for cross-platform 2D/3D visualization across Web, Desktop, Android, and iOS using React, React Native, and WPF (.NET). Awarded 3 consecutive POB awards.",
    tag: "HEXAGON / OCTAVE",
  },
];

export const personalProjects: ProjectItem[] = [
  {
    name: "EDA NYC Taxi Analysis",
    desc: "Comprehensive Exploratory Data Analysis (EDA) on New York City Yellow Taxi operations (2023), investigating geospatial distributions, demand surge patterns, and revenue optimization strategies.",
    github: "https://github.com/tdvkiran/EDA_NYC_Taxi_Analysis_Kiran_Tadisetti",
    tag: "DATA SCIENCE",
  },
  {
    name: "covid19-Tracker",
    desc: "Real-time COVID-19 pandemic analytics dashboard built with React, Material-UI, Chart.js, and Axios, visualizing live global and country-wise infection curves and recovery metrics.",
    github: "https://github.com/tdvkiran/covid19-Tracker",
    link: "https://tdvkiran.github.io/covid19-Tracker",
    tag: "REACT / CHARTS",
  },
  {
    name: "pay-tek-cars",
    desc: "Automotive showcase and payment checkout web app built with React, Material-UI, and Axios, implementing vehicle selection and checkout workflows.",
    github: "https://github.com/tdvkiran/pay-tek-cars",
    tag: "REACT",
  },
  {
    name: "nodejs-weather-website",
    desc: "Weather forecast web application built with Node.js, Express, and Handlebars (HBS), integrating location geocoding and real-time weather APIs.",
    github: "https://github.com/tdvkiran/nodejs-weather-website",
    tag: "NODE.JS",
  },
  {
    name: "sophisticated-todo-app",
    desc: "Modern task management and productivity web application built with TypeScript, React, and deployed on Vercel with an interactive user experience.",
    github: "https://github.com/tdvkiran/sophisticated-todo-app",
    link: "https://sophisticated-todo-app.vercel.app",
    tag: "FULL STACK",
  },
  {
    name: "finance-dashboard",
    desc: "Financial analytics and portfolio tracking dashboard application built with Python for tracking markets and metrics.",
    github: "https://github.com/tdvkiran/finance-dashboard",
    tag: "PYTHON",
  },
  {
    name: "developer-portfolio",
    desc: "Cyberpunk and terminal-inspired software engineer portfolio showcasing technical experience, projects, skills, and telemetry.",
    github: "https://github.com/tdvkiran/developer-portfolio",
    tag: "PORTFOLIO",
  },
];

export const projects: ProjectItem[] = [...enterpriseProjects, ...personalProjects];
