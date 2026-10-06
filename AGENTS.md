# AGENTS.md — astro-bun-skeleton

Bun-only repo. Use `bun install` and `bun run <script>` (shorthand `bun dev` also works). Do not use npm/yarn/pnpm or npx.

## Commands
- Setup: `bun install`; copy template: `cp .env.development .env` (`.env` and `.env.production` are gitignored, never commit secrets).
- Dev: `bun run dev` → `localhost:4321`. Build: `bun run build` → `dist/`. Preview: `bun run preview`.
- No test, lint, format, typecheck scripts, and no CI. Verify with `bun run build`; run `bunx astro check` only for ad-hoc type diagnostics (not configured here).

## Env
- Schema is enforced in `astro.config.mjs`: `API_URL` (client/public, required string), `PORT` (client/public, optional number), `API_SECRET` (server/secret).
- Import via `astro:env/client` or `astro:env/server` (see `src/pages/example.astro`). Never use `import.meta.env` or leak `API_SECRET` to client code.

## Imports & content
- Always use tsconfig aliases: `@layouts/*`, `@components/*`, `@pages/*`, `@content/*`, `@assets/*`, `@datatypes/*` (= `src/types/*`), `@src/*`. Do not use relative imports across those boundaries.
- Structured content goes in `src/content/*.yml|json|ts` and is imported directly (YAML works via `@rollup/plugin-yaml` + `src/types/yml.d.ts` — keep both in sync).

## Structure
- `src/pages/` = file-based routes; `src/layouts/BaseLayout.astro` = shared shell (global CSS + `ClientRouter`); page JS in `src/scripts/` loaded via `<script src="...">`.
- Strict TS (`astro/tsconfigs/strict`). `dist/` and `.astro/` are generated — never edit. Formatting: 2-space, LF, trim trailing whitespace, final newline.
