# Phase 2 Business Model — Shared Component Convergence

## Objective

Make Silver Fox Engineering consume the centrally owned Header, Mega Menu, Mobile Menu and Footer runtime so future ecosystem design changes can ship through package upgrades rather than local component rewrites.

## Central dependency

`@silverfoxcloud/web-ui@1.2.0-alpha.1`

Source of truth:
`silverfoxcloud/silverfox-web-design-system`

## Business value

- shared navigation defects are fixed once;
- shared accessibility behavior is maintained once;
- future Header/Footer design changes can propagate by central version upgrade;
- Engineering remains a distinct technical/editorial profile;
- the same runtime can later serve Silver Fox main and Fastreserve.

## Consumer-owned assets

Engineering continues to own:
- navigation labels/content;
- route tree;
- technology/platform content;
- diagrams;
- Technology Radar;
- wordmark content;
- source-grounded publications.

## Central-owned assets

Central package owns:
- navigation interaction state;
- Escape/focus-return behavior;
- pointer/focus closing;
- mobile accordion;
- shared semantic markup;
- responsive Header/Footer grammar;
- profile CSS contract.

## Success

Phase 2 succeeds when removing/upgrading the central package is enough to prove that Header/Footer behavior is no longer implemented independently in Engineering.
