import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="px-5 py-8 text-center text-xs text-text-faint sm:px-8 md:px-12 lg:px-16">
      <p>
        &copy; {new Date().getFullYear()} {profile.name}. Built with Next.js
        &amp; Tailwind CSS.
      </p>
    </footer>
  );
}
