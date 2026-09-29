# Portal Iteration Status — 2026-09-29

## Implemented

### Core portal

- Bilingual, crawlable English and Persian route trees.
- Route-based language switching with reciprocal canonical/hreflang metadata.
- Full-width desktop mega menu and dedicated mobile navigation.
- Interactive architecture surface with route-aware nodes.
- Deep Architecture, Platform, Cloud, Security, Data, AI, DevOps/SRE, Technology Radar and Engineering Principles pages.
- Deep platform/product pages for SFAS, License Platform, Fox Pay, ExoTravel and ExoHub.
- Product lifecycle/status copy rewritten to distinguish current implementation from accepted architecture and roadmap work.
- Dedicated platform and engineering SVG/HTML visualizations with reduced-motion handling.

### Homepage

- Capability-led narrative instead of repeating the full deep-page content.
- Dark Hero and systems sections balanced with light editorial knowledge sections.
- Shared product foundations.
- Verified package release section.
- Engineering Build Stories.
- Recently Shipped / Changelog evidence.
- Engineering Notes.
- Technology Radar teaser.

### Packages

A live repository audit confirmed seven publishable SFAS packages.

Current public facts represented in the portal:

- version: `0.2.0-alpha.12`;
- lifecycle: prerelease;
- dist-tag: `next`;
- canonical scope: `@silverfoxcloud/*`;
- registry: private GitHub Packages;
- first controlled publication: PASS;
- real-registry clean install/import: PASS.

Implemented:

- `/packages/` and `/fa/packages/`;
- seven bilingual package detail pairs;
- install/registry guidance without exposing credentials;
- version, lifecycle, compatibility and dependency surfaces;
- Packages mega-menu group;
- package routes in sitemap and browser QA.

### Engineering Library

Implemented bilingual index/detail routes for:

- Engineering Notes;
- Architecture Decisions;
- Engineering Build Stories;
- Engineering Changelog.

Publication content is source-grounded in current product repositories and accepted reports/ADRs. No historical article dates were manufactured.

### SEO

- language-specific canonical URLs;
- reciprocal English/Persian `hreflang`;
- `x-default`;
- OpenGraph locale metadata;
- Twitter summary metadata;
- bilingual sitemap including package/publication routes;
- Organization/WebSite JSON-LD;
- robots sitemap declaration.

### Code quality

- removed obsolete client-side metadata mutation;
- removed old locale metadata helper;
- removed superseded/unused Engineering Stories component/data;
- kept Playwright dependencies isolated inside the Visual QA workflow so production typecheck/build do not depend on the test runtime.

## Admin / CMS audit

The engineering repository has no existing application backend, database, migrations or CMS/Admin runtime. It is a static Next.js export deployed on GitHub Pages.

Therefore Package Admin / publication CRUD has **not** been fabricated as a disconnected interface. Current package/publication data is source-controlled.

Adding an authenticated CMS requires a separate architecture decision for a writable backend, identity/RBAC, storage, preview and publishing. This remains genuinely incomplete relative to a future CMS scope, but building a fake static admin would violate the requirement to extend the existing architecture rather than invent a disconnected one.

## Final validation completed

The current static-public portal scope is complete and validated.

### Production deployment

- Validated application/QA HEAD: `7162f37c50baf6159d2a9c829b449bde49450613`.
- GitHub Pages workflow: run `172` / `36619153616`.
- TypeScript validation: **PASS**.
- Static export: **PASS**.
- Pages artifact upload: **PASS**.
- Production deployment: **PASS**.

### Browser / visual QA

- Silver Fox Engineering Visual QA: run `58` / `36619153619`.
- Result: **348 / 348 tests PASS**.
- Browser: Chromium via Playwright `1.55.0`.
- The browser suite validated required responsive widths: `320`, `375`, `430`, `768`, `1024`, `1280`, `1440`, and `1920`.
- English LTR and Persian RTL were both exercised.
- Major visual routes were captured across all required widths.
- The complete public route set was smoke-tested in mobile and desktop modes.
- No horizontal-overflow assertion failed.
- No broken-image assertion failed.
- Language switching, desktop mega-menu keyboard close, mobile navigation/Escape, Radar filtering, visible Radar blips, and reduced-motion behavior all passed.
- Browser console/page errors remained release-blocking in the suite.

### Manual artifact review

Workflow screenshot artifacts were inspected in addition to automated assertions.

Reviewed examples include:

- Homepage — English and Persian at desktop and mobile widths;
- Technology Radar — English and Persian desktop;
- Package Directory;
- Engineering Notes;
- Engineering Changelog;
- platform/product surfaces.

The review confirmed the intended dark/light editorial rhythm, readable RTL/LTR hierarchy, visible homepage capability/product/publication content, and visible Technology Radar blips.

### Defects found and closed during final QA

1. **Homepage full-page capture exposed blank content rows.**
   - Primary content visibility was decoupled from reveal/scroll state.
   - Homepage editorial rows now render visible by default.

2. **Technology Radar main blips were too dependent on entry animation.**
   - Blips now render visible by default.
   - QA explicitly requires visible unfiltered blips before and after filtering.

3. **Browser QA isolation initially leaked TypeScript-only syntax into the JavaScript test entrypoint.**
   - The Playwright runtime remains isolated from production TypeScript/build dependencies.

4. **Reduced-motion browser rounding returned `1e-06s` rather than literal `0s`.**
   - The assertion now uses a numeric near-zero tolerance while still requiring primary content to remain visible.

### Git authorship audit

- Current HEAD author and committer: `Hadi Nobakht <hadinobakht@aol.com>`.
- The latest 100 commits were checked for AI/assistant attribution markers.
- No `Co-authored-by`, Claude, ChatGPT, OpenAI or equivalent AI trailer was found.

## Explicit future architecture item — Admin / CMS

The public engineering portal is complete for its current static GitHub Pages architecture.

An authenticated Package Admin / publication CMS is **not** part of the current runtime because this repository has no writable backend, database, migrations or existing Admin/CMS system to extend. Current package and publication records remain source-controlled.

A future CMS requires an explicit architecture decision covering storage, authentication/RBAC, preview, publishing and operational ownership. A disconnected static mock admin is intentionally not treated as completion of that requirement.
