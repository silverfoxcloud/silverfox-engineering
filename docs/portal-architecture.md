# Silver Fox Engineering Portal Architecture

## Deployment model

Silver Fox Engineering is a statically exported Next.js application deployed through GitHub Pages.

The repository currently contains:

- public UI and static route generation;
- source-controlled bilingual content/data;
- SVG and CSS engineering visuals;
- build/deploy workflows;
- browser QA.

It does **not** contain a writable application API, database, migrations or an existing CMS/Admin runtime.

This distinction is intentional. A future authenticated content-management system would require a separate architecture decision for storage, authentication, authorization, preview and publishing. A disconnected mock admin is not treated as an acceptable substitute.

## Public route model

The portal uses two statically generated, crawlable language trees.

Core English areas include:

- `/`
- `/architecture/`
- `/platform/`
- `/cloud/`
- `/security/`
- `/data/`
- `/ai/`
- `/devops-sre/`
- `/technology-radar/`
- `/engineering-principles/`
- `/packages/`
- `/engineering/`
- `/architecture-decisions/`
- `/build-stories/`
- `/changelog/`
- `/platforms/{product}/`

Persian mirrors these through `/fa/...`.

Package, Engineering Note, Architecture Decision and Build Story detail routes are generated from verified source-controlled records.

## Locale semantics

Page components receive locale explicitly from the route.

- English page roots use `lang="en"` and `dir="ltr"`.
- Persian page roots use `lang="fa"` and `dir="rtl"`.
- The Persian nested layout synchronizes document-level language/direction immediately.
- Internal navigation remains within the active language tree.
- Language switching navigates to the corresponding alternate route.
- No locale preference is required to render the correct static document.

## Navigation

`SiteHeader` owns desktop and mobile navigation.

Desktop groups now cover:

- Engineering;
- Platforms;
- Packages;
- Resources / Engineering Library.

The full-width mega menu closes on destination selection, backdrop click, Escape, route change or another group selection. Mobile uses a dedicated navigation surface rather than compressing the desktop panel.

## Homepage information architecture

The homepage is intentionally directional rather than a duplicate of every deep page.

Current journey:

1. Hero + interactive ecosystem architecture;
2. light editorial engineering model;
3. dark core capability narrative;
4. shared platform/product foundations;
5. light verified package release surface;
6. dark Engineering Build Stories and Recently Shipped evidence;
7. light Engineering Notes;
8. dark Technology Radar teaser;
9. final engineering identity statement.

The light/dark alternation creates an editorial rhythm: infrastructure and interactive system surfaces stay predominantly dark, while knowledge and explanation can move onto light editorial surfaces.

## Architecture visualization

`ArchitectureMap` exposes shared capability/product boundaries with one contextual detail panel.

- hover and focus update context;
- click navigates to the relevant engineering/platform page;
- touch has direct navigation;
- motion is supplemental rather than required to understand the fallback content.

## Platforms and product truth

Platform pages use dedicated visual models for SFAS, License Platform, Fox Pay, ExoTravel and ExoHub.

Content distinguishes:

- implemented/current capability;
- current engineering baseline with a release or adoption gate;
- accepted architecture direction;
- roadmap/proposed work.

An accepted ADR is not automatically presented as shipped runtime behavior.

## Packages

The Package Directory is built from live SFAS package manifests and current SFAS status evidence.

Current package family:

- `@silverfoxcloud/sfas-foundation`
- `@silverfoxcloud/sfas-core`
- `@silverfoxcloud/sfas-html-adapter`
- `@silverfoxcloud/sfas-react-adapter`
- `@silverfoxcloud/sfas-jalali`
- `@silverfoxcloud/sfas-datatable`
- `@silverfoxcloud/sfas-date-picker`

All are represented as prerelease `0.2.0-alpha.12` on the `next` channel in the private GitHub Packages registry. Registry credentials are never embedded in public copy.

Package administration is source-controlled because this repository has no existing CMS/Admin runtime to extend.

## Engineering Library

The Engineering Library consists of:

- Engineering Notes: authored public explanations derived from real architecture and implementation evidence;
- Architecture Decisions: public-safe summaries of accepted ADRs;
- Build Stories: real system-building narratives grounded in reports/tests/milestones;
- Changelog: verifiable releases and completed engineering work.

Portal publication dates are not used to fabricate historical article dates. Where a source ADR or phase has its own historical date, the source date is shown separately.

## Technology Radar

The Technology Radar preserves its factual technology/status dataset and supports:

- Adopt;
- Use when justified;
- Trial;
- Assess;
- status/category filtering;
- keyboard-accessible blips;
- contextual details;
- a separate mobile list representation.

Node positions are stable across filters. Radar blips are visible by default rather than depending on entry-animation completion, and filtering changes emphasis without making active results disappear. Technology copy explains use context rather than claiming every assessed technology is deployed.

## Motion and reduced motion

Motion explains relationship or lifecycle where useful.

- architecture signal motion;
- product flow/pulse visuals;
- radar reveal/filter transitions;
- restrained interaction and diagram transitions.

Primary content visibility is never gated by JavaScript or scroll position. When `prefers-reduced-motion: reduce` is active, animated engineering surfaces stop their nonessential motion.

## SEO

Public routes provide language-specific:

- titles and descriptions;
- canonical URLs;
- reciprocal English/Persian `hreflang`;
- `x-default`;
- OpenGraph metadata.

The root adds Twitter summary metadata plus Organization/WebSite JSON-LD. `robots.txt` exposes the bilingual sitemap. The sitemap includes engineering, platform, package and publication routes.

## Quality gates

GitHub Pages CI runs:

1. dependency install;
2. TypeScript validation;
3. static export;
4. Pages deployment.

A separate Chromium Playwright workflow builds the same export and validates:

- required viewport widths;
- both EN/LTR and FA/RTL;
- route health;
- horizontal overflow;
- broken images;
- language switch;
- desktop mega-menu keyboard behavior;
- mobile navigation;
- Technology Radar interaction;
- reduced-motion behavior.

Full-page screenshots capture a settled rendered state after a controlled document scroll. Primary content visibility is asserted independently of animation, while Radar QA explicitly verifies that active blips remain visible before and after filtering.
