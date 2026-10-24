import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools & technologies I use">
      <div className="space-y-8">
        {skillGroups.map((group, index) => (
          <FadeIn key={group.category} delay={index * 0.05}>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-text-faint">
              {group.category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border bg-bg-card px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
