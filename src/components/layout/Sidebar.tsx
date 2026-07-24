import { navLinks } from "@/lib/data";
import ProfileCard from "./ProfileCard";

export default function Sidebar() {
  return (
    <aside className="border-b border-border px-5 py-8 sm:px-8 md:fixed md:inset-y-0 md:left-0 md:z-30 md:w-[300px] md:border-b-0 md:border-r md:border-border md:overflow-y-auto md:px-10 md:py-12">
      <div className="mx-auto max-w-sm md:mx-0 md:flex md:h-full md:max-w-none md:flex-col md:justify-center">
        <ProfileCard />

        <nav
          aria-label="Primary"
          className="mt-10 hidden border-t border-border pt-8 md:block"
        >
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-text-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
