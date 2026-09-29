# Portal Iteration Status — 2026-09-29

## Implemented in this iteration

- Homepage restructured around a shorter capability-led narrative rather than embedding the full Technology Radar.
- New core-capability storytelling for Cloud Platform, Security/Governance, Observability/Reliability, Data/Integration, AI and multilingual product experience.
- New multilingual-experience engineering SVG with reduced-motion-safe animation.
- Architecture page expanded from four generic sections into explicit product/platform boundaries, data ownership, contracts, events, multi-tenancy, reliability, security, distribution and evolutionary architecture.
- Architecture nodes now route directly to their related engineering context while hover/focus still drives the detail panel.
- SFAS, License Platform and Fox Pay pages now distinguish current engineering status from roadmap scope using current project repositories and canonical documents.
- ExoTravel and ExoHub pages now describe bounded ownership and anti-duplication architecture without claiming unverified shipped capability.
- Platform pages now include deeper technical narrative sections rather than sharing only a generic capabilities/approach skeleton.
- Persian brand references, technical terminology and interface digits received another native-language audit.
- Resource mega menu now includes Architecture as specified.
- Footer corporate identity and localized company links aligned with the brand/domain strategy.


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
- Cloud, Security, Platform and AI visuals refined into domain-specific system diagrams with reduced-motion-safe animation.
- Product/platform hero visuals differentiated for SFAS, License Platform, Fox Pay, ExoTravel and ExoHub instead of reusing one generic logo treatment.
- CI now performs an explicit TypeScript check before the static export build.
- Homepage copy refinement in Persian and English.
- Dedicated Engineering Principles resource and homepage narrative section.
- Product copy tightened to distinguish target architecture from deployed/current capability where status is not yet confirmed.
- Documentation for locale/routing, navigation, architecture and RTL/LTR behavior.

## Validation required after commit

- GitHub Actions build/export.
- Deployed route verification.
- Desktop visual review at 1920 and 1440.
- Tablet visual review at 1024 and 768.
- Mobile visual review at 430 and 390.
- Persian RTL and English LTR screenshot review.
- Final Technology Radar visual/collision review at deployed viewport sizes.
- Final visual review of the new product/platform hero compositions, capability rows and domain-specific SVG motion on the deployed site.
- Final viewport screenshot review at 1920/1440/1024/768/430/390 for both English LTR and Persian RTL.

This document intentionally does not mark the redesign complete until those checks are performed.
