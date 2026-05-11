---
"@aramiworks/ui": patch
---

Replace hardcoded fontSize/lineHeight numbers in TextField (LabelText, HelperText, CounterText, TextInput) with references to `src/tokens/generated/typography.ts`. Specs story now reads sizes from the same tokens, so it stays current with the Montage-aligned token pipeline. Mirrors the pattern established for Text and Tooltip in PR #287.
