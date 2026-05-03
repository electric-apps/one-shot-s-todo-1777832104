# Plan: Hello World Counter App

## Description

A single-page TanStack Start app that greets the user and provides an interactive counter button. No database or sync layer required.

## User Flows

1. User opens the app and sees a centered "Hello" heading.
2. User sees a counter button displaying the current count (starts at 0).
3. User clicks the button — the count increments by 1.
4. Count is local React state; no persistence between page reloads.

## Data Model

None. No Postgres tables, no Drizzle schema, no Electric shapes.

## Key Technical Decisions

- **No DB / No sync**: pure client-side React state (`useState`) for the counter.
- **Single route**: modify `src/routes/index.tsx` only — no new routes needed.
- **No SSR concern**: `ssr: false` is NOT needed because there is no `useLiveQuery`.
- **Styling**: Tailwind 4 utility classes; use existing shadcn `Button` component from `src/components/ui/button.tsx` for the counter button.

## Implementation Phases

### Phase 1 — UI (only change needed)

- Edit `src/routes/index.tsx`:
  - Add `useState<number>(0)` for the counter.
  - Render a centered layout with:
    - `<h1>` showing "Hello"
    - `<Button onClick={() => setCount(c => c + 1)}>Count: {count}</Button>`

### Phase 2 — Build & Verify

- Run `pnpm build` and confirm it exits 0.
- Run `pnpm typecheck` (or `tsc --noEmit`) and confirm no type errors.

### Phase 3 — Tests

- Add a Vitest test in `tests/counter.test.tsx` that:
  - Renders the index route component.
  - Asserts "Hello" text is visible.
  - Clicks the button and asserts the count increments.

### Phase 4 — README

- Update `README.md` with a one-paragraph description and `pnpm dev` instructions.

### Phase 5 — Deploy

- No environment variables required (no DB, no Electric).
- `pnpm build` output is the deployable artifact.
