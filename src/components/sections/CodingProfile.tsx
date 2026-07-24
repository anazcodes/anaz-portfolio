import { Award, ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import { LeetCodeIcon } from "@/components/ui/icons";
import { codingProfile } from "@/lib/data";

export default function CodingProfile() {
  return (
    <Section
      id="coding-profile"
      eyebrow="Coding Profile"
      title="Problem solving"
    >
      <FadeIn>
        <a
          href={codingProfile.url}
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col gap-6 rounded-2xl border border-border bg-bg-card p-6 transition-colors hover:border-accent/50 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
              <LeetCodeIcon size={22} />
            </span>
            <div>
              <p className="text-base font-semibold text-text">
                {codingProfile.platform}
              </p>
              <p className="text-sm text-text-muted">
                {codingProfile.problemsSolved} problems solved
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              {codingProfile.topLanguages.map((lang) => (
                <span
                  key={lang}
                  className="rounded-full border border-border px-3 py-1 text-xs font-medium text-text-muted"
                >
                  {lang}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              <Award size={14} />
              {codingProfile.badge}
            </span>
            <ArrowUpRight
              size={18}
              className="hidden text-text-faint transition-colors group-hover:text-accent sm:block"
            />
          </div>
        </a>
      </FadeIn>
    </Section>
  );
}
