# Phase 2 Plan — Shared Component Convergence

Date: 2026-10-02

## Target

Replace duplicated Engineering Header/Footer interaction runtime with central `@silverfoxcloud/web-ui@1.2.0-alpha.1`.

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
