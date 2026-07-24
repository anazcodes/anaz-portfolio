import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools & technologies I use">
      <FadeIn>
        <ul className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-border bg-bg-card px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:border-accent hover:text-accent"
            >
              {skill}
            </li>
          ))}
        </ul>
      </FadeIn>
    </Section>
  );
}
