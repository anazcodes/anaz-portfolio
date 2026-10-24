import Image from "next/image";
import { profile, socials } from "@/lib/data";
import { socialIconMap } from "@/components/ui/icons";

export default function ProfileCard() {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <Image
        src="/profile.webp"
        alt="Portrait of Anaz Rasheed"
        width={128}
        height={128}
        priority
        className="h-28 w-28 md:h-32 md:w-32 rounded-full object-cover object-top ring-2 ring-accent/40"
      />

      <h1 className="mt-5 text-xl font-bold tracking-tight text-text">
        {profile.name}
      </h1>
      <p className="mt-1 text-sm font-medium text-accent">{profile.title}</p>

      <div className="mt-4 space-y-1.5 text-sm text-text-muted">
        <p>
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-accent"
          >
            {profile.email}
          </a>
        </p>
        <p>{profile.location}</p>
      </div>

      <ul className="mt-5 flex items-center gap-3">
        {socials.map((social) => {
          const Icon = socialIconMap[social.icon];
          return (
            <li key={social.label}>
              <a
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Icon size={16} strokeWidth={1.8} />
              </a>
            </li>
          );
        })}
      </ul>

      <a
        href="#contact"
        className="mt-6 w-full md:w-full rounded-full bg-accent px-6 py-3 text-center text-sm font-semibold text-bg transition-colors hover:bg-accent-strong"
      >
        Hire Me
      </a>
    </div>
  );
}
