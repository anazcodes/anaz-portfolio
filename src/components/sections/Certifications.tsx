import { ExternalLink } from "lucide-react";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Professional certifications"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {certifications.map((cert, index) => (
          <FadeIn key={cert.name} delay={index * 0.05}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-bg-card p-6">
              <div>
                <h3 className="text-base font-semibold text-text">
                  {cert.name}
                </h3>
                <p className="mt-1 text-sm text-text-muted">{cert.issuer}</p>
                <p className="mt-1 text-xs text-text-faint">{cert.date}</p>
                {cert.credentialId ? (
                  <p className="mt-1 text-xs text-text-faint">
                    Credential ID: {cert.credentialId}
                  </p>
                ) : null}
              </div>
              <a
                href={cert.url ?? "#"}
                target={cert.url && cert.url !== "#" ? "_blank" : undefined}
                rel={
                  cert.url && cert.url !== "#" ? "noreferrer" : undefined
                }
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-strong"
              >
                Show credential
                <ExternalLink size={14} />
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
