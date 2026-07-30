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

### Contact form email

The contact form posts to `src/app/api/contact/route.ts`, which sends email via [Resend](https://resend.com). Without an API key configured, the form still works but falls back to showing a "reach out via LinkedIn or WhatsApp" message instead of erroring.

To enable real email sending:

1. Sign up at [resend.com](https://resend.com) using `anazibinurasheed@gmail.com`.
2. Create an API key.
3. Add it as an environment variable named `RESEND_API_KEY`:
   - Locally: create `.env.local` with `RESEND_API_KEY=re_xxxxxxxx`.
   - On Vercel: Project → Settings → Environment Variables → add `RESEND_API_KEY`, then redeploy.

Without a verified custom domain on Resend, the sending address `onboarding@resend.dev` can only deliver to the email you signed up with — which is exactly this site's contact address, so no domain setup is required.

## Project structure

- `src/lib/data.ts` — all site content (profile, experience, skills, certifications, projects, etc.), edit this to update copy.
- `src/components/layout/` — sidebar/profile card, mobile nav, footer.
- `src/components/sections/` — page sections (Hero, About, Skills, Projects, Contact, ...).
- `src/components/ui/` — shared primitives (Section wrapper, FadeIn scroll animation, icons).

Placeholders left to fill in:

- Project screenshots: see comment in `src/components/sections/Projects.tsx`, drop images under `public/projects/`.

## Deploying

The app is a standard Next.js App Router project and deploys to [Vercel](https://vercel.com/new) out of the box.
