# Phase 2 Live Status

Date: 2026-10-02

## Central

- package family `1.2.0-alpha.2`: **PUBLISHED**
- `@silverfoxcloud/web-ui@1.2.0-alpha.2`: **PUBLISHED**
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
