# Portfolio Webapp

Sebastian's personal portfolio website — built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) with `tailwindcss-animate` and `@tailwindcss/forms`
- [GSAP](https://gsap.com/) and [Motion](https://motion.dev/) for animations
- [Zod](https://zod.dev/) for env variable validation
- [Jest](https://jestjs.io/) + [Testing Library](https://testing-library.com/) for tests

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (developed/tested on Node 22)
- [pnpm](https://pnpm.io/) (this repo uses `pnpm` — see the `format`/`lint:fix` scripts)

## Running the site locally

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start the dev server:

   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads as you edit files under `src/`.

## Other scripts

| Command             | Description                              |
| -------------------- | ----------------------------------------- |
| `pnpm build`          | Create a production build                 |
| `pnpm start`          | Serve the production build (run after `build`) |
| `pnpm lint`           | Run ESLint                                |
| `pnpm lint:fix`       | Fix lint issues and format the codebase   |
| `pnpm typecheck`      | Run the TypeScript compiler in check-only mode |
| `pnpm test`           | Run the Jest test suite                   |
| `pnpm test:watch`     | Run Jest in watch mode                    |
| `pnpm format`         | Format the codebase with Prettier         |
| `pnpm format:check`   | Check formatting without writing changes  |

## Project structure

```
src/
├── app/          # Next.js App Router entry (layout.tsx, page.tsx)
├── components/   # Page sections (Navbar, Hero, About, Resume, Projects, Contact, Footer, ...)
├── constant/      # Shared constants, incl. env helpers
├── lib/          # Utilities and env validation
└── styles/       # Global styles
public/
├── favicon/      # Favicon assets
├── fonts/        # Self-hosted fonts
├── images/       # Site images
├── svg/          # SVG assets
└── resume.pdf    # Downloadable resume
```

## Environment variables

No environment variables are required to run the site locally. Optionally, set:

```
NEXT_PUBLIC_SHOW_LOGGER=true
```

to enable logging in production builds (logging is always on in development).

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com/) (see `vercel.json`). A sitemap and `robots.txt` are generated automatically after each build via `next-sitemap`.
