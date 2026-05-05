# ahoy-boilerplate

A minimal **Vite + React + TypeScript** starter that consumes Teamleader's
[`@teamleader/ahoy`](https://www.npmjs.com/package/@teamleader/ahoy) design
system. Includes a three-level navigation shell (primary modules → secondary
tabs → tertiary sub-rail on Settings) and a topbar with the standard quick
actions, so you can prototype an ahoy-styled feature without wiring up the
shell yourself.

There are no tests, linters or formatters configured. Add them yourself if
the prototype outgrows the boilerplate.

## Stack

| Concern | Choice |
| --- | --- |
| Bundler / dev server | Vite 5 |
| UI library | React 18 |
| Language | TypeScript 5 |
| Routing | `react-router-dom` v6 |
| Design system | `@teamleader/ahoy` 3.x |
| CSS pipeline | PostCSS 8 with the plugins ahoy peer-requires |
| License | MIT (same as ahoy) |

## Run it

```bash
npm install
npm run dev      # starts Vite at http://localhost:5173
npm run build    # type-checks and bundles to dist/
npm run preview  # serves the production build locally
```

## Routing model

- `/` → `/dashboard/overview`
- `/:module/overview` → `ModuleOverviewPage`
- `/:module/detail` → `ModuleDetailPage`
- `/settings` → `/settings/general/overview`
- `/settings/:section/overview` and `/settings/:section/detail` → settings + tertiary nav

The `:module` segment is matched against `MODULES` in `src/navigation/modules.ts`.
Unknown ids still render — with the raw id as the title — so the shell never
crashes during prototyping.

See [CLAUDE.md](./CLAUDE.md) for layout and how to extend the boilerplate.

## License

[MIT](./LICENSE)
