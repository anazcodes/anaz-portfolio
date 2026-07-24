import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import { whatIDo } from "@/lib/data";

export default function WhatIDo() {
  return (
    <Section id="what-i-do" eyebrow="What I Do" title="Where I add value">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whatIDo.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.08}>
            <div className="h-full rounded-2xl border border-border bg-bg-card p-6 transition-colors hover:border-accent/50">
              <h3 className="text-base font-semibold text-text">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
