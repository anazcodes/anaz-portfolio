"use client";

import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import {
  GitHubIcon,
  LeetCodeIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";
import { profile, whatsapp } from "@/lib/data";

const contactLinks = [
  {
    label: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "github.com/anazcodes",
    href: "https://github.com/anazcodes",
    icon: GitHubIcon,
  },
  {
    label: "linkedin.com/in/anaz-rasheed",
    href: "https://linkedin.com/in/anaz-rasheed",
    icon: LinkedInIcon,
  },
  {
    label: "leetcode.com/u/anaz_ibinu_rasheed",
    href: "https://leetcode.com/u/anaz_ibinu_rasheed/",
    icon: LeetCodeIcon,
  },
  {
    label: whatsapp.displayNumber,
    href: whatsapp.href,
    icon: WhatsAppIcon,
  },
];

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (!response.ok) throw new Error("Failed to send");

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s build something together."
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <FadeIn>
          <p className="max-w-md text-base leading-relaxed text-text-muted">
            Have a project in mind, an opening on your team, or just want to
            talk systems and AI? My inbox is open.
          </p>

          <ul className="mt-8 space-y-4">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center gap-3 text-sm text-text-muted transition-colors hover:text-accent"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted transition-colors group-hover:border-accent group-hover:text-accent">
                    <link.icon size={16} strokeWidth={1.8} />
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-text"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full rounded-lg border border-border bg-bg-card px-4 py-2.5 text-sm text-text placeholder:text-text-faint focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-text"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-lg border border-border bg-bg-card px-4 py-2.5 text-sm text-text placeholder:text-text-faint focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-text"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-lg border border-border bg-bg-card px-4 py-2.5 text-sm text-text placeholder:text-text-faint focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Tell me a bit about what you're building..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            <p role="status" aria-live="polite" className="text-sm">
              {status === "sent" ? (
                <span className="text-accent">
                  Thanks for reaching out! I&rsquo;ll get back to you soon.
                </span>
              ) : null}
              {status === "error" ? (
                <span className="text-text-muted">
                  Unable to communicate with Anaz through email at this point
                  in time. Please reach out via{" "}
                  <a
                    href="https://linkedin.com/in/anaz-rasheed"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-accent hover:text-accent-strong"
                  >
                    LinkedIn
                  </a>{" "}
                  or{" "}
                  <a
                    href={whatsapp.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-accent hover:text-accent-strong"
                  >
                    WhatsApp
                  </a>{" "}
                  instead.
                </span>
              ) : null}
            </p>
          </form>
        </FadeIn>
      </div>
    </Section>
  );
}
