# Phase 2 Live Status

Date: 2026-10-02

## Central

- package family `1.2.0-alpha.3`: **PUBLISHED**
- `@silverfoxcloud/web-ui@1.2.0-alpha.3`: **PUBLISHED**
- Alpha 2 central validation: **PASS**
- Alpha 2 publish workflow: **PASS**

## Engineering

- branch: `phase-2/shared-component-convergence`
- PR: #6
- package Actions read access: **RESOLVED**
- Header migration: **IMPLEMENTED**
- Mega Menu migration: **IMPLEMENTED**
- Mobile Menu migration: **IMPLEMENTED**
- Footer migration: **IMPLEMENTED**
- same-visible-URL locale: **PRESERVED**
- source-owned route/content model: **PRESERVED**
- package lock: **SYNCHRONIZED TO REGISTRY ALPHA 2 METADATA**
- deterministic install: **RESTORED TO npm ci**

## Run #98 findings

PASS:
- package access/install;
- Playwright runtime install;
- TypeScript;
- static export.

Browser failure classification:
1. real consumer CSS integration regression at <=390px: typography wordmark hidden because a legacy override referenced `.siteHeader`;
2. QA selector issue: locale persistence test selected a hidden `/architecture/` link inside central menu markup.

Both are remediated in the closure commit.

## Closure gate

The latest PR #6 Visual QA run after these remediations is authoritative.

Required:
- full route/viewport matrix;
- EN/LTR + FA/RTL;
- no locale route segments;
- click-only Engineering desktop disclosure;
- Escape/focus return;
- mobile accordion;
- mobile focus containment;
- mobile→desktop state cleanup;
- reduced motion;
- Persian human digits;
- 200% reflow proxy.

M2 is achieved only after the latest PR head passes this gate and PR #6 is merged.


## Run #98 evidence and Alpha 3 response

Run #98 proved:
- GitHub Packages access: PASS;
- application dependency install: PASS;
- Playwright runtime: PASS;
- TypeScript: PASS;
- static export: PASS.

Browser QA exposed:
1. a real mobile wordmark regression caused by a leftover Engineering selector that only recognized the legacy `.siteHeader`;
2. a language-switch test selecting a hidden Mega Menu route;
3. visual artifact comparison showing Footer composition drift from the approved Phase 1 baseline.

Alpha 3 fixes all three before M2:
- central Footer uses profile-driven identity placement;
- Engineering uses the approved first-column identity layout;
- mobile wordmark selector recognizes the central Header;
- language-switch navigation uses a visible route target.
