---
"@aramiworks/ui": patch
---

specs stories: align all 22 `*-specs.story.tsx` files (atoms + molecules + organisms) from legacy `md.sys.color.*` vocabulary to Montage token names. Mechanical sweep matching the Icon precedent (PR #278): `md.sys.color.primary` → `primary`, `md.sys.color.on-primary` → `onPrimary`, `md.sys.color.surface-container-high` → `surfaceContainerHigh`, etc. No runtime change — pure documentation cleanup.
