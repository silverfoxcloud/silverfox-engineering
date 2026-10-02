# Phase 1 End Report — Central Web Platform Integration

Date: 2026-10-02  
Branch: `phase-1/central-web-platform-integration`  
Central version: `1.1.0-alpha.1`  
Status: **PASS CANDIDATE — final documentation-head CI + merge pending**

## Objective

Make Silver Fox Engineering the first real consumer of centrally published Silver Fox public-web runtime packages without redesigning approved Engineering UI blindly.

## Delivered

### Central dependencies
- `@silverfoxcloud/web-tokens@1.1.0-alpha.1`
- `@silverfoxcloud/web-fonts@1.1.0-alpha.1`
- `@silverfoxcloud/web-locale@1.1.0-alpha.1`

All three are installed from GitHub Packages and locked with verified registry metadata/integrity values.

### Runtime integration
- central token CSS imported;
- local semantic compatibility maintained to avoid uncontrolled visual churn;
- Engineering font profile consumes central registry: Inter + Shabnam;
- document direction now uses central locale helper;
- generated human indexes/dates migrated to central Persian-digit helper where touched.

### Locale architecture
Removed:
- `app/fa/**`
- `LegacyLocaleRedirect.tsx`

The source route tree now contains neither `app/fa` nor `app/en`.

Language switching remains application state on the same visible pathname.

### QA expansion
Viewport coverage:
320, 360, 375, 390, 414, 430, 768, 834, 1024, 1120, 1280, 1440, 1600, 1920.

Run #84 evidence:
- dependency install: PASS
- Playwright runtime install: PASS
- TypeScript: PASS
- static export build: PASS
- static QA server: PASS
- Playwright: **392 / 392 PASS**
- visual QA artifact: `11240829222`
- digest: `sha256:6322030f7411f829e9efff89c44f11f4838c6dba3377d2bc11e6cc75648bcf65`

## Defects found and fixed

1. Cross-repository GitHub Packages initially returned 403.
   - Package Actions access was granted to Engineering.
   - verified by successful application dependency installation.

2. Playwright install initially returned 401.
   - the second npm install step lacked `NODE_AUTH_TOKEN`.
   - workflow authentication was corrected.

3. Central token CSS import initially broke Turbopack parsing.
   - a literal escaped newline was corrected to a real newline.

4. Locale-link QA initially treated `/engineering/` as `/en`.
   - selector logic was corrected to match only complete `/en` or `/fa` path segments.

5. Lockfile initially did not contain newly installed central packages.
   - exact registry `resolved` and `integrity` metadata from CI were committed.

## Authorship

All implementation commits inspected in this phase use:
- Author: `hadinobakht`
- Committer: `hadinobakht`

No AI/co-author trailer is introduced.

## Explicit deferred work

Phase 2 — Engineering Reference Implementation:
- central shared Header/Mega Menu/Mobile Menu/Footer;
- deeper central section primitives;
- full visual convergence decisions;
- dedicated 200% zoom evidence;
- focus token convergence;
- shell width decision;
- promote proven Engineering/Fastreserve patterns upstream.

## Phase disposition

**Runtime adoption is PASS.**

E-M5 becomes fully ACHIEVED after the documentation-head validation passes and PR #4 is merged.
