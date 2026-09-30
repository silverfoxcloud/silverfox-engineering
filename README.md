# Silver Fox Engineering

Silver Fox Engineering is the bilingual public engineering portal for the Silver Fox ecosystem. It explains architecture, platform boundaries, verified packages, engineering decisions, build stories, releases and technology choices without exposing sensitive implementation detail.

## Purpose

This repository is an engineering publication, not a generic corporate landing page. Public content is expected to answer what a system does, why it exists, how its boundary works, which trade-offs matter, what its current state is and what evidence supports the claim.

The portal does not fabricate customers, historical activity, release maturity, package state, certifications or runtime capability.

## Public areas

The current clean route tree includes:

- Architecture, Cloud Platform, Cloud Infrastructure, Security, Data, AI, DevOps/SRE, Technology Radar and Engineering Principles;
- SFAS, Silver Fox License Platform, Fox Pay, ExoTravel and ExoHub;
- the verified SFAS Package Directory and package detail pages;
- Engineering Notes;
- public Architecture Decisions;
- Engineering Build Stories;
- the Engineering Changelog.

English and Persian are independently edited. Persian is not treated as a sentence-by-sentence machine translation of English.

## Source governance

Public technical claims are grounded in current product repositories, accepted ADRs, accepted phase reports and canonical Silver Fox documentation.

Source precedence is:

1. current product status and accepted completion reports;
2. accepted ADRs and current implementation documentation;
3. canonical roadmaps and architecture documents;
4. older design material only where it remains consistent with current evidence.

Roadmap concepts are labeled as direction rather than shipped features. Private topology, credentials, secrets, exploitable defensive detail and sensitive schemas are not published.

### Package truth

The Package Directory currently represents seven verified SFAS packages:

- canonical scope: `@silverfoxcloud/*`;
- version: `0.2.0-alpha.12`;
- lifecycle: prerelease;
- dist-tag: `next`;
- canonical registry: private GitHub Packages;
- first controlled publication: PASS;
- real-registry clean install/import: PASS.

The portal does not call prerelease software Stable and does not expose registry credentials.

## Runtime architecture

This repository is a static Next.js export deployed through GitHub Pages. It contains the public UI, source-controlled bilingual data, engineering visuals, build/deploy workflows and browser QA.

It does not contain a writable application API, database, migrations or authenticated CMS/Admin runtime. A future CMS requires a separate architecture decision covering writable storage, authentication/RBAC, preview, publishing and operational ownership.

## Same-URL locale architecture

English and Persian share one visible URL for every public page.

Examples:

- `/`
- `/architecture/`
- `/packages/`
- `/engineering/`
- `/platforms/fox-pay/`

The active locale is application state rather than route state.

- provider: `LocaleProvider`;
- persistence key: `silverfox-engineering-locale`;
- English: `lang="en" dir="ltr"`;
- Persian: `lang="fa" dir="rtl"`;
- switching language does not navigate and does not add a history entry;
- internal links remain language-neutral;
- locale persists across clean-route navigation and reload;
- a small pre-hydration bootstrap applies the persisted document language/direction before visible application state.

Legacy `/fa/...` URLs remain only as compatibility entry points. They contain no unique content, are `noindex`, store Persian as the active locale and replace the legacy URL with the equivalent clean canonical route.

### SEO trade-off

One canonical URL is published per content route. The active route architecture does not advertise fake reciprocal language URLs or misleading `hreflang` pairs.

Because both languages intentionally share one static URL, English and Persian are not presented as independently crawlable localized documents. Static metadata remains conservative; visible title/description are updated for the active locale in the browser. This is a deliberate product requirement and is documented as an SEO trade-off rather than hidden.

## Visual system

The portal uses a light, editorial, developer-first design system.

The current live Kinde site was used as a visual benchmark and interaction reference for spacing discipline, navigation density, light surfaces, developer-oriented product storytelling and restrained CTA hierarchy. Silver Fox does not copy Kinde branding, proprietary imagery, product UI or marketing copy and is not affiliated with Kinde.

Silver Fox identity remains grounded in its typography-only header wordmark, engineering diagrams, platform names, technical content, package evidence and system boundaries. Persian UI typography is self-hosted Shabnam under the SIL Open Font License 1.1.

See `docs/design-system.md` for the implemented semantic tokens and component rules.

## Quality gates

Release validation covers:

- TypeScript validation;
- production static export;
- every generated clean route;
- legacy `/fa` migration;
- same-URL locale switching;
- locale persistence after navigation and reload;
- document `lang` / `dir`;
- absence of generated `/fa` links;
- keyboard navigation and focus return;
- mobile accordion navigation;
- WCAG-oriented focus/contrast semantics;
- Technology Radar interaction;
- reduced motion;
- horizontal overflow;
- broken local images;
- EN/LTR and FA/RTL;
- full-page browser screenshots at 320, 375, 430, 768, 1024, 1280, 1440 and 1920.

`.github/workflows/visual-qa.yml` runs the Chromium/Playwright suite on pull requests and main.

## Documentation

- `docs/portal-architecture.md`
- `docs/design-system.md`
- `docs/iteration-status.md`
