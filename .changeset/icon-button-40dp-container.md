---
"@aramiworks/ui": patch
---

Render IconButton's visual container at 40×40dp to match Figma node 70:2 (was 48×48). The 48×48dp touch target is preserved via `hitSlop={4}`, mirroring the Checkbox pattern of separating visual size from accessibility hit area.
