# Phase 1 Task Backlog

## Central dependency integration
- [x] Configure GitHub Packages registry.
- [x] Add exact central package dependencies.
- [x] Update CI for package read access.
- [x] Prove package installation in PR CI.
- [x] Update/reconcile lockfile.

## Runtime
- [x] Import central token CSS.
- [x] Map current Engineering semantic tokens to central semantics.
- [x] Consume central font profile registry.
- [x] Consume central locale/direction helpers.
- [x] Use central Persian-number formatter for human-facing values in migrated shared/human-number surfaces.

## Locale routing
- [x] Remove generated/canonical `/fa` routes.
- [x] Ensure no `/en` routes exist.
- [x] Remove legacy locale redirect component when no longer needed.
- [x] Update QA/docs; generated route tree contains no locale surface.
- [x] Verify language switching preserves pathname.

## QA
- [x] Typecheck.
- [x] Static export build.
- [x] EN/LTR.
- [x] FA/RTL.
- [x] 1920.
- [x] 1600.
- [x] 1440.
- [x] 1280.
- [x] 1120.
- [x] 1024.
- [x] 834.
- [x] 768.
- [x] 430.
- [x] 414.
- [x] 390.
- [x] 375.
- [x] 360.
- [x] 200% zoom effective-width reflow proxy. Dedicated manual/browser zoom review remains a Phase 2 enhancement, but the Phase 1 automated proxy passed.
- [x] keyboard/focus.
- [x] reduced motion.
- [x] Persian digits on migrated human-facing number surfaces.
- [x] no locale URL segments.

## Documentation
- [x] Business model.
- [x] Phase plan.
- [x] Milestones.
- [x] Gantt.
- [x] Gap analysis baseline.
- [x] Migration plan.
- [x] Final Phase 1 compliance report.
- [x] Phase 1 end report.

## Post-close hardening
- [x] Use `npm ci` in deploy and Visual QA workflows.
- [x] Keep exact central package versions locked.
