# UI Components — shadcn/ui

All UI elements in this project use **shadcn/ui** components.

## Hard Rules

- **Never create custom UI components.** Always use an existing shadcn/ui component.
- **Never write raw HTML elements** (`<button>`, `<input>`, `<dialog>`, etc.) for UI — import the shadcn/ui equivalent.
- **Never install third-party component libraries.** shadcn/ui is the only UI library.

## Adding Components

If a required shadcn/ui component has not yet been added to the project, run:

```bash
npx shadcn@latest add <component-name>
```

Components are generated into `components/ui/`. Import from there:

```ts
import { Button } from "@/components/ui/button";
```

## Available Components

Check `components/ui/` for already-added components before running the add command.

## Styling

- Use the `className` prop with Tailwind utility classes for layout/spacing overrides.
- Do not override shadcn/ui component internals with custom CSS unless absolutely necessary.
- Use the `variant` and `size` props provided by each component before reaching for custom styles.
