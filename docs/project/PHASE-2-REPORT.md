# Phase 2 End Report — Shared Component Convergence

Date: 2026-10-03  
Consumer: `silverfoxcloud/silverfox-engineering`  
Central platform: `silverfoxcloud/silverfox-web-design-system@1.2.0-alpha.4`  
Engineering PR: #6  
Reference runtime commit: `80310ab66225ce5ce2a059bd962b1e60cb2f4eed`

## Status

**ENGINEERING PASS — E2-M5 ACHIEVED ON THE PHASE BRANCH.**  
**ECOSYSTEM M2: MERGE/MAIN VALIDATION PENDING.**

## Delivered

### Central runtime consumption
- Header consumes central `SfSiteHeader`;
- Mega Menu interaction/state is centrally owned;
- Mobile Menu accordion/focus behavior is centrally owned;
- Footer consumes central `SfSiteFooter`;
- exact central package family is pinned to `1.2.0-alpha.4`;
- package-lock uses real GitHub Packages integrity/resolved metadata;
- CI uses deterministic `npm ci`;
- no copied central component source exists in Engineering.

### Consumer ownership preserved
Engineering still owns:
- route tree;
- navigation labels and descriptions;
- English/Persian content;
- locale persistence UX;
- typography-only Engineering wordmark;
- Technology Radar;
- architecture/platform diagrams;
- publication content and evidence.

### Locale and typography
- canonical public routes remain language-neutral;
- no generated `/en` or `/fa` route surface;
- EN/LTR and FA/RTL remain equal acceptance targets;
- Engineering profile uses Inter + Shabnam;
- Persian human-facing numerals remain Persian;
- technical identifiers/versions stay ASCII/LTR.

## Central refinements discovered by the pilot

### Alpha 2 — interaction semantics
The first shared Header candidate did not preserve Engineering's click-only desktop disclosure exactly.

Central corrections:
- `hoverIntent=false` disables hover opening;
- `focusOpensMenu` became explicit;
- mobile focus containment added;
- mobile state closes when crossing to desktop width.

### Alpha 3 — Footer structural parity
Visual artifact comparison found that Alpha 2 changed the approved Engineering Footer composition.

Central corrections:
- Footer identity placement became profile-driven;
- Engineering uses `identityPlacement="column"`;
- Engineering neutral surfaces, shell and Footer layout were restored centrally.

### Alpha 4 — Footer typography/rhythm parity
Compact visual comparison still showed small Footer type/rhythm drift.

Central corrections:
- Engineering Footer heading/link/baseline metrics restored as profile values;
- global CORE values were not changed for Fastreserve/Corporate consumers.

## Final QA evidence

### Deterministic parity gate — run #106
Commit: `b7f8d55955c229227651f46f5433d6b2f2eb0c92`

Result: **401 / 401 PASS**

Additional parity assertions included:
- desktop Header height/shell geometry;
- compact Header height and visible wordmark;
- Footer identity-column geometry;
- click-only desktop disclosure;
- Escape/focus return;
- mobile accordion/focus containment;
- mobile→desktop cleanup.

### Post-cleanup gate — run #107
Commit: `80310ab66225ce5ce2a059bd962b1e60cb2f4eed`

Result: **401 / 401 PASS**

This run validates the same full matrix after removing superseded local Header/Footer CSS.

Artifact:
- ID: `11264942111`
- digest: `sha256:677d6fc3f4c2cf11d920e0826eef2ae2f728fc518b4b5f68d267e18e37323a22`

### Covered acceptance
- `npm ci`;
- TypeScript;
- static export;
- EN/LTR;
- FA/RTL;
- 320–1920 responsive matrix;
- same-visible-URL locale;
- no locale route segments;
- Persian human digits;
- ASCII technical versions;
- keyboard/Escape/focus return;
- Engineering click-only desktop menu profile;
- mobile accordion;
- mobile focus containment;
- mobile→desktop state cleanup;
- reduced motion;
- 200% effective-width reflow proxy;
- dedicated Header/Footer geometry checks;
- representative Phase 1 vs Phase 2 artifact review.

## Visual parity review

Representative Phase 1 and Alpha 4 artifacts were compared directly.

Result:
- Header desktop: approved structure/geometry preserved;
- Header compact/mobile: wordmark, locale control and mobile trigger preserved;
- Footer desktop: identity-first-column structure, four link columns, baseline row and typography preserved;
- no approved Engineering layout was replaced merely for central uniformity.

The pilot therefore validates the intended governance rule: centralization must preserve proven consumer behavior through profiles rather than force every product into identical presentation.

## Legacy cleanup

After parity was proven:
- old local Header state-machine source was already removed;
- old local Footer component structure was already removed;
- 19 superseded Header/Footer CSS selectors were removed;
- consumer-owned wordmark/language/logo styles were retained;
- run #107 confirmed no regression after cleanup.

## Exceptions

**0 true design exceptions.**

Engineering-specific Radar, diagrams, content IA and click-only disclosure are profile/adaptable behavior, not exceptions.

## Phase result

Engineering E2-M0 through E2-M5: **ACHIEVED**.

Ecosystem **M2 — Engineering Reference PASS** becomes final when this fast-forwardable branch is integrated into `main` and the mainline validation succeeds.

## Next

Phase 3 — Engineering Reference Release:
- finalize the post-pilot Engineering profile;
- convert validated parity checks into reusable central QA contracts;
- formalize the central upgrade/release workflow;
- identify only proven section primitives for possible upstream extraction;
- prepare the Silver Fox main website as the next consumer after the Engineering reference release.
