# Phase 2 Tasks — Engineering

## Integration
- [x] add `@silverfoxcloud/web-ui@1.2.0-alpha.2`;
- [ ] sync package-lock;
- [x] add Next `transpilePackages`;
- [x] import central web-ui styles.

## Header
- [x] convert Engineering groups to central navigation contract;
- [x] add Next Link adapter;
- [x] preserve locale switch;
- [x] preserve typography-only wordmark;
- [x] migrate desktop menu behavior (pending browser QA);
- [x] migrate mobile menu behavior (pending browser QA);
- [x] remove superseded local Header state machine;

## Footer
- [x] convert footer columns to central contract;
- [x] preserve Engineering external links/content;
- [x] migrate Footer to central component (pending browser QA);
- [x] preserve Persian human-facing copyright digits;

## QA
- [x] update central component selectors;
- [ ] package install — BLOCKED only by `@silverfoxcloud/web-ui` Actions package access.
- [ ] typecheck;
- [ ] static export;
- [ ] same-visible-URL locale;
- [ ] no `/en` or `/fa` routes;
- [ ] EN/LTR;
- [ ] FA/RTL;
- [ ] 320–1920 responsive matrix;
- [ ] keyboard/Escape/focus return + click-only desktop disclosure;
- [ ] mobile accordion + focus containment + desktop-breakpoint cleanup;
- [ ] reduced motion;
- [ ] screenshot/manual review.

## Documentation
- [x] Business Model;
- [x] Project Management;
- [x] Milestones;
- [x] Gantt;
- [x] Tasks;
- [x] Gap Analysis update;
- [ ] Compliance Report;
- [ ] Phase 2 End Report.


## Current integration gate — 2026-10-02
- Central `web-ui@1.2.0-alpha.2` is published successfully.
- Engineering PR #6 attempts real GitHub Packages installation.
- Current CI failure: `403 permission_denied: read_package` for `@silverfoxcloud/web-ui`.
- Existing central tokens/fonts/locale package access remains valid.
- No copied-source fallback is allowed.
