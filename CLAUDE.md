# Ahoy Boilerplate — Agent Instructions

See [README.md](./README.md) for the project pitch, stack, run instructions,
and routing model.

## Prefer ahoy components

The point of this boilerplate is to prototype with `@teamleader/ahoy`. Reach
for an ahoy component before writing custom UI — `Button`, `IconButton`,
`Input`, `Select`, `Dialog`, `Popover`, `Tooltip`, `Box`, `Flex`,
`OverviewPage`, `DetailPage`, `Heading*`, `TextBody`, etc. The full export
list is at the bottom of `node_modules/@teamleader/ahoy/dist/es/index.js`;
types are in `node_modules/@teamleader/ahoy/dist/types`. Same goes for icons
and illustrations — `Icon*MediumOutline` / `Icon*MediumFilled`,
`Illustration*` — import them from `@teamleader/ahoy` directly. Only fall
back to bespoke markup or CSS when ahoy genuinely doesn't cover the case.

## How to add things

**A new primary module** — append `{ id, label, icon, iconActive }` to
`MODULES` in `src/navigation/modules.ts`. Pick a `Icon*MediumOutline` /
`Icon*MediumFilled` pair from `@teamleader/ahoy`. Done — it shows up in the
rail and `/<id>/overview` and `/<id>/detail` route automatically.

**A custom page** for a specific module — create the component under
`src/pages/<module>/`, then add a dedicated route in `src/App.tsx` *above* the
generic `:module` route so it wins:
```tsx
<Route path="projects" element={<ModuleLayout />}>
  <Route path="overview" element={<ProjectsOverviewPage />} />
</Route>
```

**A secondary tab** — add `{ id: '<id>', label: '<Label>' }` to the `tabs`
array on the module entry in `src/navigation/modules.ts`. A placeholder page
renders automatically. Add a dedicated `<Route>` in `src/App.tsx` and a page
component under `src/pages/<module>/` only when you need a real page component.

**A settings tab** — same pattern: add `{ id: '<id>', label: '<Label>' }` to
the `tabs` array on the relevant entry in `src/pages/settings/tertiaryItems.ts`.

**A settings section** — append `{ id, label }` to
`src/pages/settings/tertiaryItems.ts`.

**Prototype-time constants** (user name, notification count) — edit `src/config.ts`.

**Design tokens** — `src/global.css` already imports ahoy's foundation, so
your own CSS can reference `var(--color-mint-darkest)`,
`var(--color-neutral-light)`, etc. The full token list is in
`node_modules/@teamleader/ahoy/dist/es/foundation/colors/index.css`.
