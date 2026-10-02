# Phase 2 Tasks — Engineering

## Integration
- [x] add `@silverfoxcloud/web-ui@1.2.0-alpha.3`;
- [x] sync package-lock with real Alpha 2 registry metadata;
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
- [x] package install — Actions package access resolved; Alpha 2 install PASS in run #98.
- [x] typecheck — PASS in run #98; closure run must reconfirm.
- [x] static export — PASS in run #98; closure run must reconfirm.
- [ ] same-visible-URL locale — closure browser gate.
- [ ] no `/en` or `/fa` routes — closure browser gate.
- [ ] EN/LTR — closure browser gate.
- [ ] FA/RTL — closure browser gate.
- [ ] 320–1920 responsive matrix — closure browser gate.
- [ ] keyboard/Escape/focus return + click-only desktop disclosure — closure browser gate.
- [ ] mobile accordion + focus containment + desktop-breakpoint cleanup — closure browser gate.
- [ ] reduced motion — closure browser gate.
- [ ] screenshot/manual review — closure artifact.

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
- Central `web-ui@1.2.0-alpha.3` is published successfully.
- Engineering PR #6 attempts real GitHub Packages installation.
- Current CI failure: `403 permission_denied: read_package` for `@silverfoxcloud/web-ui`.
- Existing central tokens/fonts/locale package access remains valid.
- No copied-source fallback is allowed.


## Alpha 3 parity remediation
- [x] inspect Phase 1 baseline artifact vs Phase 2 Alpha 2 artifact;
- [x] classify Footer composition drift as a real parity issue;
- [x] move Footer identity-layout choice into the central API;
- [x] preserve Engineering Footer with `identityPlacement="column"`;
- [x] fix compact-mobile typography wordmark visibility;
- [x] fix hidden-link false negative in locale navigation QA;
- [ ] run full Alpha 3 browser matrix;
- [ ] compare final Alpha 3 representative screenshots to Phase 1 baseline.
