# Phase 2 Plan — Shared Component Convergence

Date: 2026-10-02

## Target

Replace duplicated Engineering Header/Footer interaction runtime with central `@silverfoxcloud/web-ui@1.2.0-alpha.2`.

## Method

Centralize behavior/structure while preserving Engineering-owned content and profile identity.

The migration does not centralize Technology Radar, platform diagrams, publication content or route definitions.

## Key acceptance rules

- no locale path segments;
- English/Persian remain same-path state;
- Shabnam/Inter profile preserved;
- keyboard and focus behavior cannot regress;
- mobile is not a squeezed desktop menu;
- central package source is not copied into this repository;
- browser QA and documentation must pass before M2.


## Alpha 2 refinement

The reference consumer moved to Alpha 2 before browser acceptance because Alpha 1 did not preserve Engineering's click-only desktop disclosure semantics exactly.

Engineering explicitly configures:
- `hoverIntent={false}`
- `focusOpensMenu={false}`
- mobile focus containment enabled

This preserves the approved Engineering behavior while leaving Fastreserve free to opt into hover-intent/focus-open behavior in its later profile migration.
