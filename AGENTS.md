# AGENTS.md

Single-page personal portfolio (Next.js App Router, TypeScript, Tailwind CSS v4), deployed on Vercel.

- Use **pnpm**, not npm/yarn/bun — agents habitually reach for npm; every script here runs through pnpm (see `package.json`).
- All content — experiences, projects, social links — lives in typed arrays at the top of `src/app/page.tsx`. Content edits change the arrays, never the JSX.
- Accessibility is a core requirement: preserve the semantic HTML, `aria-labelledby` headings, and sr-only/focus-visible patterns already in the markup and `globals.css`.
- Interactive elements use Tailwind `purple-600` as the accent; stay on it.
- `pnpm lint` and `pnpm build` both pass before any change is done.
