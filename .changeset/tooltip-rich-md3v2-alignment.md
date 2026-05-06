---
"@aramiworks/ui": patch
---

Tooltip Figma rich variant (`649:4`): align to code's MD3 v2 vocabulary. Was: `inverseSurface` bg + `xs` radius + `#FFFFFF` title + `outlineVariant` body (matching plain). Now: `surfaceContainer` bg + `md` radius + small shadow + `onSurface` title + `onSurfaceVariant` body (matches `tooltip.tsx` `RichContainer`). Plain variant unchanged. No runtime change.
