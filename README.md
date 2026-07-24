# Anaz Rasheed — Portfolio

Personal portfolio site for Anaz Rasheed, a Software Engineer specializing in AI & Distributed Systems.

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- [Framer Motion](https://motion.dev) for scroll-in animations
- [lucide-react](https://lucide.dev) for iconography (brand marks are hand-rolled SVGs, see `src/components/ui/icons.tsx`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project structure

- `src/lib/data.ts` — all site content (profile, experience, skills, certifications, projects, etc.), edit this to update copy.
- `src/components/layout/` — sidebar/profile card, mobile nav, footer.
- `src/components/sections/` — page sections (Hero, About, Skills, Projects, Contact, ...).
- `src/components/ui/` — shared primitives (Section wrapper, FadeIn scroll animation, icons).

Placeholders to replace with real assets:

- Profile photo: see comment in `src/components/layout/ProfileCard.tsx`, drop the image at `public/profile.jpg`.
- Project screenshots: see comment in `src/components/sections/Projects.tsx`, drop images under `public/projects/`.

## Deploying

The app is a standard Next.js App Router project and deploys to [Vercel](https://vercel.com/new) out of the box.
