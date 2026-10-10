import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Mono } from "next/font/google";

import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-space-mono",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const seoData = {
  title: "Kiran Tadisetti | Staff Software Engineer",
  siteName: "Kiran Tadisetti Portfolio",
  author: "Kiran Tadisetti",
  description:
    "Staff Software Engineer with 8+ years of experience architecting enterprise Accounting systems (Journal Entries, Schedules, Bank Reconciliations) and Payments infrastructure at Tekion.",
  keywords: [
    "Kiran Tadisetti",
    "tdvkiran",
    "Staff Software Engineer",
    "Frontend Architect",
    "Accounting Systems",
    "Journal Entries",
    "Bank Reconciliations",
    "Payments",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Ruby on Rails",
    "Tekion",
    "Stripe",
    "Portfolio",
  ],
  url: "https://github.com/tdvkiran",
  image: "https://avatars.githubusercontent.com/u/15996863?v=4",
};

export const metadata: Metadata = {
  metadataBase: new URL(seoData.url),
  title: seoData.title,
  description: seoData.description,
  applicationName: seoData.siteName,
  authors: [{ name: seoData.author, url: seoData.url }],
  creator: seoData.author,
  publisher: seoData.author,
  keywords: seoData.keywords,
  other: {
    title: seoData.title,
  },
  alternates: {
    canonical: seoData.url,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: seoData.url,
    siteName: seoData.siteName,
    title: seoData.title,
    description: seoData.description,
    images: [
      {
        url: seoData.image,
        width: 460,
        height: 460,
        alt: seoData.author,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoData.title,
    description: seoData.description,
    images: [seoData.image],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${spaceMono.variable} ${ibmPlexMono.variable}`}
    >
      <body className="bg-terminal-bg text-terminal-text antialiased">
        {children}
      </body>
    </html>
  );
}
