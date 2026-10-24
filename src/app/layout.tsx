import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { profile } from "@/lib/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = profile.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Anaz Rasheed — Software Engineer Building AI Applications",
  description:
    "Portfolio of Anaz Rasheed, a Software Engineer in Kasaragod, Kerala, India, building production-ready AI systems with nearly four years of backend engineering across fintech, restaurant tech and real-time systems.",
  keywords: [
    "Anaz Rasheed",
    "Software Engineer",
    "Backend Engineer",
    "Golang Developer",
    "Distributed Systems",
    "AI Engineer",
    "Product Engineer",
    "Kerala",
  ],
  authors: [{ name: "Anaz Rasheed" }],
  openGraph: {
    title: "Anaz Rasheed — Software Engineer Building AI Applications",
    description:
      "Building production-ready AI systems. Explore my work, skills, and experience.",
    url: siteUrl,
    siteName: "Anaz Rasheed",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anaz Rasheed — Software Engineer Building AI Applications",
    description:
      "Building production-ready AI systems.",
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
