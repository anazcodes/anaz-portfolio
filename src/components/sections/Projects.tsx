import { ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import { projects, type Project } from "@/lib/data";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-card transition-colors hover:border-accent/50"
    >
      {/* Browser-window mockup frame */}
      <div className="flex items-center gap-1.5 border-b border-border bg-bg-elevated px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" aria-hidden="true" />
      </div>

      {/*
        Screenshot placeholder.
        Replace with next/image once a real screenshot is available, e.g.
        <Image src="/projects/altcase.png" alt="Screenshot of the AltCase dashboard" fill className="object-cover" />
      */}
      <div
        role="img"
        aria-label={`Screenshot placeholder for ${project.name}`}
        className="flex aspect-video items-center justify-center bg-bg-elevated text-xs font-medium uppercase tracking-wide text-text-faint"
      >
        Screenshot placeholder
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-base font-semibold text-text">{project.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
          {project.description}
        </p>

        {project.stack.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border px-3 py-1 text-xs font-medium text-text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}

        {project.url ? (
          <a
            href={project.url}
            target={project.url !== "#" ? "_blank" : undefined}
            rel={project.url !== "#" ? "noreferrer" : undefined}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-strong"
          >
            Visit
            <ArrowUpRight size={14} />
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Work" title="Selected projects">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <FadeIn key={project.name + index} delay={(index % 3) * 0.08}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
