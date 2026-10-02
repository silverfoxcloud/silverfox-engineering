# Phase 2 Milestones — Engineering Consumer

| ID | Milestone | Status | Acceptance |
|---|---|---|---|
| E2-M0 | Phase baseline | ACHIEVED | management docs + central package target defined |
| E2-M1 | web-ui dependency installed | **ACHIEVED** | Alpha 2 package install, typecheck and static export passed in PR run #98 |
| E2-M2 | Header migration | **ACHIEVED — closure QA pending** | central Header/Menu runtime consumed; local interaction state machine removed; Engineering click-only profile preserved |
| E2-M3 | Footer migration | **ACHIEVED — closure QA pending** | central Footer runtime consumed with Engineering-owned content |
| E2-M4 | Browser QA | **CLOSURE GATE** | latest PR Visual QA for the closure commit must pass EN/LTR, FA/RTL, responsive, keyboard/focus/reduced-motion and interaction assertions |
| E2-M5 | Reference convergence | **CLOSURE GATE** | latest PR Visual QA succeeds and compliance/end report are present |
| M2 | Engineering Reference PASS | **CLOSURE GATE** | M2 becomes ACHIEVED when the latest Phase 2 PR head Visual QA is SUCCESS and PR #6 is merged |

## Evidence

Pre-closure run #98 proved:
- private `web-ui@1.2.0-alpha.2` access: PASS;
- deterministic registry metadata captured;
- TypeScript: PASS;
- static export: PASS.

Its browser matrix exposed two integration defects that are remediated in the closure commit:
- the old <=390px Engineering CSS override still targeted `.siteHeader`, hiding the typography wordmark after migration;
- a locale-persistence test selected a hidden menu link instead of a visible route link.

## Closure rule

The latest Visual QA run for the latest PR #6 head is the authoritative self-referential closure gate. No documentation-only commit is required after that run succeeds.
