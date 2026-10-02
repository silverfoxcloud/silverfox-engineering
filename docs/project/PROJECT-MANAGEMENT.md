# Project Management — Central Web Platform Adoption

## Project

Silver Fox Engineering central public-web platform pilot.

## Governance

Central source of truth:
`silverfoxcloud/silverfox-web-design-system`

Consumer:
`silverfoxcloud/silverfox-engineering`

## Phase method

Each phase follows:
Inspect → Audit → Gap Analysis → Plan → Implement → Validate → Document → Close.

Required phase artifacts:
- business model / operating rationale;
- plan;
- tasks;
- milestones;
- Gantt;
- architecture impact;
- design gap/migration docs;
- QA evidence;
- compliance report;
- end-of-phase report;
- Git/GitHub record.

## Git policy

All reachable project commits should use the configured human identity.
No AI co-author trailers.
GitHub-generated `web-flow` commits are normalized when necessary without losing validated tree content.

## Change ownership

CORE reusable changes go upstream to the central web-design-system.
Engineering-only technical/editorial content remains local.
Approved local patterns are preserved until a central replacement proves equal or better.

## Release gates

No phase closes on documentation claims alone.
A closure commit must pass the repository's build/typecheck/browser QA gate.
