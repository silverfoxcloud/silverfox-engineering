# Phase 2 End Report — Shared Component Convergence

Date: 2026-10-02  
Consumer: `silverfoxcloud/silverfox-engineering`  
Central platform: `silverfoxcloud/silverfox-web-design-system@1.2.0-alpha.2`  
PR: #6

## Status

**COMPLETION CANDIDATE — authoritative closure Visual QA pending.**

## Delivered

- Engineering Header consumes central `SfSiteHeader`;
- Mega Menu behavior is centrally owned;
- Mobile Menu/accordion/focus runtime is centrally owned;
- Engineering Footer consumes central `SfSiteFooter`;
- route/content definitions remain consumer-owned;
- same-visible-URL locale architecture is preserved;
- no source copy of central components exists;
- exact Alpha 2 package versions and integrity metadata are locked;
- CI/deploy use deterministic package installation.

## Profile preservation

Engineering intentionally remains click-only on desktop disclosure:
- `hoverIntent={false}`;
- `focusOpensMenu={false}`;
- keyboard activation opens the panel;
- Escape closes and returns focus.

This differs from the proven Fastreserve hover-intent model by profile, not by fork.

## Alpha 2 upstream refinement

Before reference acceptance, Alpha 1 was audited against both Engineering and Fastreserve. Central Alpha 2 corrected:
- hoverIntent semantics;
- explicit focus-open semantics;
- mobile focus containment;
- mobile→desktop state cleanup;
- Engineering compact mobile gutter profile behavior.

## Pre-closure evidence — run #98

PASS:
- private GitHub Package access;
- central Alpha 2 install;
- Playwright runtime;
- TypeScript;
- static export.

Browser QA found:
- <=390px wordmark hidden by an obsolete consumer CSS selector;
- a test clicking a hidden menu route link.

Both are remediated in the closure commit.

## Closure gate

The latest Visual QA run on the latest PR #6 head must be SUCCESS.

It validates:
- EN/LTR and FA/RTL;
- 320–1920 matrix;
- same-visible-URL locale;
- no `/en` or `/fa` route surfaces;
- Persian human digits and ASCII technical identifiers;
- click-only desktop disclosure;
- keyboard/Escape/focus return;
- mobile accordion and focus containment;
- mobile→desktop cleanup;
- reduced motion;
- 200% reflow proxy.

When that run succeeds and PR #6 is merged, Engineering E2-M5 and ecosystem M2 are achieved without requiring a documentation-only follow-up commit.
