# KrishiSetu Project Rules

## Stack

- Next.js 14 App Router
- TypeScript strict (no `any`, no `@ts-ignore`)
- Tailwind CSS
- Zod for runtime type checking
- Vitest for unit testing
- Playwright for E2E testing
- Open-Meteo for weather data
- ISRIC SoilGrids for soil data
- LLM gateway (OpenAI-compatible)
- Manual PWA service worker
- No database (seed JSON + localStorage + stateless API routes)
- Deploy on Vercel

## Rules

1. Never add a dependency without stating why; prefer zero new deps.
2. TypeScript strict: no `any`, no `@ts-ignore`.
3. All external calls go through server routes in `src/app/api/**` with Zod validation, timeout, try/catch, and typed fallback.
4. LLM rules:
   - Only via `src/lib/llm.ts`
   - Never expose LLM_API_KEY or LLM_BASE_URL to the client
   - Always ask for JSON-only output, extract and Zod-validate it
   - Retry once, then fall back
   - Never let the LLM invent pesticide doses
   - LLM output is advisory text, never the source of numeric scores
5. Never hardcode secrets; read `process.env` and validate in `src/lib/env.ts`. Provide `.env.example`.
6. Mobile-first (360px first), tap targets ≥44px, WCAG AA contrast.
7. After every task, run `npm run check` and fix all errors before reporting done.
8. Do not modify files outside the current task's scope. Do not rewrite working code.
9. Commit after each task with a clear message.

## Folders

- `src/app/(app)/advisory`: Advisory page
- `src/app/(app)/doctor`: Crop Doctor page
- `src/app/(app)/network`: BRICS Network page
- `src/app/api`: API routes
- `src/components/ui`: UI components
- `src/components/layout`: Layout components
- `src/lib`: Utility functions
- `src/lib/engine`: Rule engine
- `src/lib/services`: External service clients
- `src/data`: Seed data
- `src/i18n`: Internationalization
- `public/icons`: Icons
- `tests/unit`: Unit tests
- `tests/e2e`: E2E tests

## Design System

- CSS variables for light/dark (earthy green #2f7d4f primary, soil brown, sun amber, sky blue)
- System-ui font stack
- Radius 14px
- Components in `src/components/ui`: Button, Card, Field, Select, Badge, Spinner, Alert, ProgressBar
- Layout: AppShell with header (logo "KrishiSetu 🌾", language switcher placeholder, small "AI online/offline" status dot placeholder) and mobile bottom nav with 3 tabs: Advisory, Crop Doctor, BRICS Network (active state, aria-current)

## Environment

- `.env.example` with placeholders for LLM_BASE_URL, LLM_API_KEY, LLM_MODEL, LLM_VISION_MODEL, ALLOWED_ORIGINS
- `.env.local` with actual values (git-ignored)

## Git

- `.gitignore` includes `.env*.local`, `node_modules`, `.next`
- Commit message format: "chore: scaffold KrishiSetu"
- Push to main branch

## Done Check

- `npm run check` passes
- `npm run dev` shows the 3 tabs at 360px
- CLAUDE.md and .env.example exist
- .env.local is ignored by git (verify with `git status`)
- No features beyond this

## Next Steps

1. Create the 3 route pages with placeholder headings inside AppShell
2. Implement the design system
3. Set up the LLM gateway
4. Create the API routes for weather and soil data
5. Implement the PWA service worker
6. Write unit and E2E tests
7. Set up CI/CD for Vercel
