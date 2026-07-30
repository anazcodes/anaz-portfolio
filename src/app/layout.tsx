import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://anazrasheed.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Anaz Rasheed — Software Engineer, AI & Distributed Systems",
  description:
    "Portfolio of Anaz Rasheed, a Software Engineer based in Kasaragod, Kerala, India, building scalable, AI-powered backend and distributed systems.",
  keywords: [
    "Anaz Rasheed",
    "Software Engineer",
    "Backend Engineer",
    "Golang Developer",
    "Distributed Systems",
    "AI Engineer",
    "Kerala",
  ],
  authors: [{ name: "Anaz Rasheed" }],
  openGraph: {
    title: "Anaz Rasheed — Software Engineer, AI & Distributed Systems",
    description:
      "Building scalable, AI-powered backend and distributed systems. Explore my work, skills, and experience.",
    url: siteUrl,
    siteName: "Anaz Rasheed",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anaz Rasheed — Software Engineer, AI & Distributed Systems",
    description:
      "Building scalable, AI-powered backend and distributed systems.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text selection:bg-accent/30 selection:text-accent">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
