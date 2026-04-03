# modui

CSS Modules UI components for React. Copy, paste, customize.

> **Work in progress** — not ready for production use yet.

## What is this?

A [shadcn/ui](https://ui.shadcn.com)-style component library that uses **CSS Modules + CSS Custom Properties** instead of Tailwind CSS.

- No Tailwind dependency — just standard CSS
- Scoped styles via CSS Modules, no class name collisions
- Themeable with CSS Custom Properties
- Accessible interactions via Radix UI (where needed)
- Copy-paste distribution via CLI

## Usage

```sh
npx modui init
npx modui add button
```

## Why?

- Your project can't or doesn't want to use Tailwind
- You want styles you can inspect and debug in DevTools
- You want CSS that works with any build tool, no plugins required
- You want components that integrate into existing CSS codebases

## Tech Stack

| Layer | Technology |
|---|---|
| Styling | CSS Modules |
| Theming | CSS Custom Properties |
| Variants | `data-*` attributes |
| Interactions | Radix UI (where needed) |
| Distribution | CLI (`npx modui add`) |

## Development

```sh
pnpm install
pnpm build
```

## License

MIT
