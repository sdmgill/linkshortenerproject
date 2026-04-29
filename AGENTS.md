# Agent Instructions — Link Shortener Project

> ## ⚠️ CRITICAL — MANDATORY READING BEFORE ANY CODE GENERATION
> **You MUST read the relevant `/docs` instruction files BEFORE writing a single line of code.**
> Skipping this step is NOT permitted under any circumstances.
> There are NO exceptions to this rule.

This file is the entry point for all LLM coding agents working on this codebase.
Before writing any code, you **MUST** read the relevant guide(s) listed below from the `/docs` directory.

> **WARNING — This is NOT the Next.js you know.**
> Next.js 16, React 19, Tailwind v4, Clerk v7, and shadcn's Radix Nova style all have breaking
> changes from widely-trained versions. APIs, file conventions, and component APIs differ.
> Always read the docs in `node_modules/next/dist/docs/` before writing framework code.
> Heed all deprecation notices.

---

> ### STOP — Read the Docs First
> Do **not** generate any code until you have opened and read every `/docs` file relevant to your task.
> Failure to do so will result in incorrect, broken, or non-compliant code.

For detailed guidelines on specific topics, refer to the modular documentation in the `/docs` directory.
**ALWAYS read the relevant `.md` file BEFORE generating ANY code — no exceptions:**

| Topic | File |
|-------|------|
| Authentication & Clerk | [`/docs/auth.md`](/docs/auth.md) |
| UI Components (shadcn/ui) | [`/docs/ui.md`](/docs/ui.md) |

## Hard Rules

- **Do not invent APIs.** If you are not certain an API exists in the installed version, check `node_modules`.
- **Do not install new packages** without explicit user approval.
- **Do not change `db/schema.ts`** without also generating a migration (`drizzle-kit generate`).
- **Do not use `any` in TypeScript.** Use proper types or `unknown` with narrowing.
- **Server Components are the default.** Only add `"use client"` when browser APIs or React hooks are required.
- **All secrets go in `.env.local`** and are never committed or hardcoded.
