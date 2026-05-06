---
"@aramiworks/ui": patch
---

Card Figma master (`647:20`): add `Type=filled` and `Type=outlined` variants alongside the existing `elevated` so Figma matches the 3 variants in `card.tsx`. Bindings: `elevated` → `surface` + shadow XS; `filled` → `surfaceVariant`; `outlined` → `surface` + `outlineVariant` 1px stroke. All radii bound to `radii.md`. No runtime change.
