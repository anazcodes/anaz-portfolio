import FadeIn from "@/components/ui/FadeIn";
import { heroStats } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative scroll-mt-24 overflow-hidden border-b border-border/60 px-5 py-16 sm:px-8 sm:py-24 md:px-12 md:py-28 lg:px-16"
    >
      <div
        aria-hidden="true"
        className="accent-glow pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full sm:h-96 sm:w-96"
      />

      <div className="relative max-w-2xl">
        <FadeIn>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Software Engineer
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-text sm:text-4xl md:text-5xl">
            Software Engineer building{" "}
            <span className="text-accent">scalable, AI-powered systems.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-6 text-base leading-relaxed text-text-muted sm:text-lg">
            I work across backend engineering, distributed systems, and AI
            integration &mdash; designing reliable services and shipping
            AI-powered features that hold up under real-world load.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent-strong"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
            >
              Contact
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <dl className="mt-14 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-bold text-accent">
                  {stat.value}
                </dd>
                <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>
    </section>
  );
}
