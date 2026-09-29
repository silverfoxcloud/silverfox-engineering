# Portal Iteration Status — 2026-09-29

## Implemented in this iteration

- Clean canonical routes without `/fa` or `/en`.
- Persisted locale preference on the same route.
- Legacy `/fa/...` redirect pages marked `noindex`.
- Locale-neutral sitemap.
- Full-width desktop mega-menu with backdrop blur.
- Deterministic menu close behavior: destination, outside click, Escape, route change and category switch.
- Context-specific featured content for Engineering, Platforms and Resources.
- Dedicated mobile navigation surface.
- Simplified Architecture overview with one contextual detail panel.
- Product storytelling that replaces the five-card platform grid.
- Expanded engineering footer.
- Technology Radar v2 with stable positions, status/category filters, contextual detail and a dedicated mobile representation.
- Dedicated Architecture, Data, DevOps/SRE and Technology Radar SVGs replacing reused generic visuals.
- Homepage copy refinement in Persian and English.
- Documentation for locale/routing, navigation, architecture and RTL/LTR behavior.

## Validation required after commit

- GitHub Actions build/export.
- Deployed route verification.
- Desktop visual review at 1920 and 1440.
- Tablet visual review at 1024 and 768.
- Mobile visual review at 430 and 390.
- Persian RTL and English LTR screenshot review.
- Final Technology Radar visual/collision review at deployed viewport sizes.
- Final motion review for the remaining domain-specific surfaces.

This document intentionally does not mark the redesign complete until those checks are performed.
