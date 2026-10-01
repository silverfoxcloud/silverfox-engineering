# Phase 1 Plan — Central Web Platform Integration

Date: 2026-10-01  
Central target: `silverfox-web-design-system@1.1.0-alpha.1`

## Objective

Make Silver Fox Engineering consume real central runtime packages while preserving the current approved Engineering experience.

## Scope

1. Add central package registry configuration.
2. Consume:
   - `@silverfoxcloud/web-tokens`
   - `@silverfoxcloud/web-fonts`
   - `@silverfoxcloud/web-locale`
3. Add package-read permissions to CI.
4. Map current CSS into the central semantic layer without blind visual replacement.
5. Replace local direction helpers with central locale helpers where safe.
6. Enforce Persian human-facing digit policy incrementally.
7. Remove locale path generation/legacy `/fa` surface before phase completion.
8. Extend visual QA to the central viewport matrix.
9. Keep project documentation synchronized.
10. Produce a final Phase 1 report.

## Protected local behavior

Until a specific migration is proven safe:
- current Engineering navigation IA;
- typography-only Engineering wordmark;
- Technology Radar;
- architecture/platform visuals;
- publication structures;
- evidence-backed package content;
- current section composition.

## Not in scope yet

Full Header/Footer visual redesign is deferred until central component parity is proven.
Phase 1 can prepare extraction/migration, but must not replace approved behavior just for uniformity.

## Exit milestone

M1 — Engineering Consumes Central Runtime.
