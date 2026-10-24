import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import {
  aboutExtras,
  aboutParagraphs,
  education,
  experience,
} from "@/lib/data";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <FadeIn>
        <div className="max-w-2xl space-y-4 text-base leading-relaxed text-text-muted">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>{aboutExtras.openSource}</p>
          <p>{aboutExtras.outsideCode}</p>
        </div>
      </FadeIn>

      <div className="mt-12">
        <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-text-faint">
          Experience
        </h3>
        <ol className="mt-6 space-y-8 border-l border-border pl-6">
          {experience.map((item, index) => (
            <FadeIn as="li" key={`${item.company}-${item.period}`} delay={index * 0.08}>
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg"
                />
                <p className="text-xs font-medium uppercase tracking-wide text-accent">
                  {item.period}
                </p>
                <h4 className="mt-1 text-base font-semibold text-text">
                  {item.role}
                </h4>
                <p className="text-sm text-text-muted">
                  {item.company} &middot; {item.location}
                </p>
                {item.summary ? (
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {item.summary}
                  </p>
                ) : null}
                {item.achievements ? (
                  <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-accent/60">
                    {item.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="text-sm leading-relaxed text-text-muted"
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </FadeIn>
          ))}
        </ol>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-text-faint">
            Education
          </h3>
          <ul className="mt-6 space-y-4">
            {education.map((item, index) => (
              <FadeIn as="li" key={item.institution} delay={index * 0.08}>
                <p className="text-base font-semibold text-text">
                  {item.institution}
                </p>
                <p className="text-sm text-text-muted">{item.program}</p>
                {item.period ? (
                  <p className="text-xs text-text-faint">{item.period}</p>
                ) : null}
              </FadeIn>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-text-faint">
            Languages
          </h3>
          <ul className="mt-6 space-y-2">
            {aboutExtras.languages.map((language) => (
              <li key={language.name} className="text-sm text-text-muted">
                <span className="font-semibold text-text">{language.name}</span>{" "}
                &middot; {language.level}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
