# Phase 2 Project Management

## Branch

`phase-2/shared-component-convergence`

## Central version

`silverfox-web-design-system@1.2.0-alpha.2`

## Sequence

1. pin central web-ui dependency;
2. configure Next transpilation for alpha source package;
3. adapt Engineering navigation/content into central data contracts;
4. replace local Header interaction runtime;
5. replace local Footer structure;
6. update QA selectors/contracts;
7. run TypeScript/static export;
8. run EN/LTR + FA/RTL browser matrix;
9. manually review representative screenshots;
10. upstream any component defects;
11. re-release central alpha if required;
12. close Engineering and central Phase 2 reports.

## Protected decisions

- same visible URL for English/Persian;
- no `/en` or `/fa` canonical/generated route;
- typography-only Header identity;
- Engineering content/IA;
- Shabnam Persian profile;
- Inter English profile;
- Technology Radar and architecture visuals;
- static Next.js export.

## Git policy

All reachable implementation commits must use:
`Hadi Nobakht <hadinobakht@aol.com>`

No AI/co-author trailers.
Avoid GitHub-generated merge commits when they violate the human-only committer policy.

## Exit

Phase closes only with M2 browser evidence and synchronized central/consumer reports.
