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

## Validation completed before the latest content expansion

- GitHub Pages typecheck/build/deploy passed for the bilingual routing and for the new homepage editorial light/dark rhythm.
- Initial Playwright Visual QA run #1 completed successfully.
- The first browser artifact exposed a QA-capture weakness: scroll-reveal/initial radar animation could be captured before settling.
- QA was improved to wait, scroll through the document, return to the top and capture the settled state.
- Production TypeScript and browser QA dependencies were separated after an early workflow integration issue.

## Final validation in progress

The final browser/deploy gate must run against the latest commit that includes:

- packages;
- engineering publications;
- homepage package/story/changelog/note sections;
- editorial light/dark rhythm;
- expanded sitemap;
- updated browser route coverage.

Required final visual review:

- 320, 375, 430, 768, 1024, 1280, 1440 and 1920 widths;
- English LTR and Persian RTL;
- Homepage;
- Technology Radar;
- key Platform pages;
- Package Directory/detail;
- Engineering Notes;
- Architecture Decisions;
- Build Stories;
- Changelog;
- desktop Mega Menu and mobile navigation;
- no horizontal overflow;
- reduced-motion state.

This document intentionally does not mark the portal complete until the latest workflow and its screenshot evidence are reviewed.
