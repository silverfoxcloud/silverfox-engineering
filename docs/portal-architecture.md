# Silver Fox Engineering Portal Architecture

## Deployment model

Silver Fox Engineering is a statically exported Next.js application deployed through GitHub Pages.

The repository contains:

- public UI and static route generation;
- source-controlled bilingual content/data;
- SVG and CSS engineering visuals;
- build/deploy workflows;
- Chromium/Playwright browser QA.

It does **not** contain a writable application API, database, migrations or authenticated CMS/Admin runtime.

## Clean public route model

The normal application has one route tree for both languages.

Core areas include:

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

Package, Engineering Note, Architecture Decision and Build Story detail routes are generated from verified source-controlled records.

No normal navigation creates `/fa`, `/en`, locale query parameters or locale hashes.

## Same-URL locale architecture

`LocaleProvider` is mounted at the root layout.

The active locale:

- is `en` or `fa`;
- is persisted under `silverfox-engineering-locale`;
- updates every shared page without route navigation;
- sets `document.documentElement.lang`;
- sets `document.documentElement.dir`;
- persists across clean-route navigation and reload.

English renders `lang="en" dir="ltr"`.
Persian renders `lang="fa" dir="rtl"`.

### Pre-hydration behavior

Static export defaults to conservative English markup so server output and the first React render remain hydration-safe.

A small inline bootstrap in the root `<head>` reads the persisted locale before normal application rendering, applies `lang` / `dir` and marks Persian restoration as pending. The body remains hidden only during this short restoration window. `LocaleProvider` resolves the same persisted value in a layout effect and removes the pending marker on the next frame.

This avoids an exposed EN → FA content flash while preserving hydration correctness.

## Legacy `/fa` migration

Old indexed `/fa/...` static pages remain only for compatibility.

Each legacy page:

- contains no unique application content;
- declares the equivalent clean canonical route;
- is `noindex,follow`;
- writes Persian to the locale storage key;
- applies Persian document direction immediately;
- uses `window.location.replace(...)` to migrate to the clean route.

Because replacement is used, the migration does not intentionally add an extra Back-button entry.

## SEO model and trade-off

Same-URL bilingual content cannot truthfully use the same SEO model as two separately crawlable locale URLs.

The active architecture therefore:

- publishes one canonical per clean route;
- does not emit reciprocal `hreflang` links to fake active language pages;
- keeps static metadata accurate and conservative;
- updates browser title/description when the active locale changes;
- updates document `lang` / `dir` with locale state.

The explicit trade-off is that English and Persian are not independently crawlable localized documents at separate URLs. This is accepted because unchanged visible URLs are a product requirement.

## Navigation

`SiteHeader` owns desktop and mobile navigation.

Desktop:

- grouped Engineering / Platforms / Packages / Resources navigation;
- white mega-menu surface;
- keyboard-operable triggers;
- Escape close;
- focus return;
- backdrop close.

Mobile:

- dedicated navigation surface;
- per-group accordion controls;
- `aria-expanded` / `aria-controls`;
- Escape close and focus return.

Language switching is a state control, not a Link.

## Page architecture

### Homepage

The homepage is directional and progressively reveals complexity rather than dumping complete architecture into one page.

### Engineering domain pages

Architecture, cloud, security, data, AI, DevOps/SRE and principles use shared editorial hierarchy with domain-specific content and technical visuals.

### Platform pages

SFAS, License Platform, Fox Pay, ExoTravel and ExoHub have distinct technical models and preserve current-state wording from verified data.

### Packages

The Package Directory and package detail pages present source-controlled release truth. The canonical package facts remain prerelease `0.2.0-alpha.12`, `next`, private GitHub Packages unless source evidence changes.

### Engineering Library

Engineering Notes, Architecture Decisions, Build Stories and Changelog use publication-oriented layouts and preserve source/status context.

### Technology Radar

The factual Radar dataset and filter behavior are preserved. The visual environment is light, blips are visible without entrance animation, and mobile uses a list representation.

## Visual architecture

The portal now uses one semantic light design system from `app/globals.css`.

The previous stacked dark refinement layer is intentionally retired. Public page types share:

- semantic color tokens;
- typography;
- spacing;
- border/radius rules;
- button hierarchy;
- navigation;
- publication layouts;
- package/code surfaces;
- diagram grammar;
- responsive behavior.

Current Kinde is documented as a visual benchmark / interaction reference only; the Silver Fox implementation owns its information architecture, content, diagrams and product identity.

## Performance

The architecture avoids a large general-purpose animation library.

Interactions use React already present in the application plus CSS transitions where appropriate. Static export, SVGs and targeted client boundaries remain the default approach.

Locale data is source-controlled and shared by the existing bilingual records rather than duplicated into a second active route tree.

## QA

`.github/workflows/visual-qa.yml` builds the static export and runs Chromium/Playwright on pull requests and main.

Browser coverage validates:

- 320, 375, 430, 768, 1024, 1280, 1440 and 1920;
- EN/LTR and FA/RTL;
- full-page screenshots for major routes;
- clean route smoke coverage;
- same-URL language switching;
- persistence after navigation/reload;
- document `lang` / `dir`;
- absence of generated locale-prefixed routes;
- absence of generated `/en` and `/fa` links;
- hydration/browser errors;
- navigation focus return;
- mobile accordion behavior;
- Radar visibility/filtering;
- reduced motion;
- horizontal overflow and broken images.

## Central web-platform dependency

Shared public-web runtime contracts come from `silverfoxcloud/silverfox-web-design-system`.

The Engineering consumer imports central tokens, font-profile metadata and locale helpers.
Consumer-specific routes, technical content, diagrams and source-grounded publication data remain local.

Canonical public route generation must reject locale path segments.
