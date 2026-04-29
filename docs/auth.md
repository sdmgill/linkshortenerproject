# Authentication — Clerk

## Rules

- **Clerk is the only auth provider.** Do not implement any other auth method (NextAuth, custom JWT, sessions, etc.).
- Use Clerk v7 APIs only. Check `node_modules/@clerk/` before writing any Clerk code.

## Protected Routes

- `/dashboard` is a protected route — users must be signed in to access it.
- Enforce protection via Clerk middleware (`clerkMiddleware`) in `middleware.ts`.
- Unauthenticated users hitting `/dashboard` must be redirected to sign-in.

## Redirects

- If a signed-in user visits `/` (homepage), redirect them to `/dashboard`.
- Implement this redirect in the homepage Server Component using `auth()` from `@clerk/nextjs/server`.

## Sign In / Sign Up UI

- Sign-in and sign-up must **always open as a modal**, never as a dedicated page.
- Use Clerk's `<SignInButton mode="modal">` and `<SignUpButton mode="modal">` components.
- Do not create custom auth forms or pages.

## Secrets

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` must live in `.env.local` only — never hardcoded.
