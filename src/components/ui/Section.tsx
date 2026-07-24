import type { ReactNode } from "react";
import FadeIn from "./FadeIn";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-16 sm:py-20 border-b border-border/60 last:border-b-0 ${className ?? ""}`}
    >
      <div className="px-5 sm:px-8 md:px-12 lg:px-16">
        <FadeIn>
          <div className="mb-10 sm:mb-12">
            {eyebrow ? (
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
              {title}
            </h2>
          </div>
        </FadeIn>
        {children}
      </div>
    </section>
  );
}
