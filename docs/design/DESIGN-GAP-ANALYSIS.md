# Design Gap Analysis — Silver Fox Engineering

Central version: `1.1.0-alpha.1`  
Profile: `engineering`

| Area | Current | Central target | Classification | Phase action |
|---|---|---|---|---|
| Locale URL | clean same-URL active, legacy /fa output still exists | no locale path segments at all | MIGRATE | remove legacy /fa generated routes |
| Locale state | local provider/localStorage | central locale helper + consumer persistence | COMPLIANT → MIGRATE runtime helper | preserve UX, replace duplicate helper logic |
| Persian font | Shabnam | approved central Engineering profile = Shabnam | COMPLIANT | consume registry/semantic role |
| English font | Inter stack | approved central Engineering profile = Inter | COMPLIANT | consume registry/semantic role |
| Persian digits | inconsistent/not centrally guaranteed | Persian digits for human values | MIGRATE | use central formatter selectively |
| Raw/local tokens | local root variables | central semantic package | MIGRATE | compatibility aliases first |
| Shell width | 1240px | central default 1280px | ADAPTABLE pending visual proof | do not change blindly |
| Header | mature Engineering implementation | future central shared Header | APPROVED-LOCAL / UPSTREAM-CANDIDATE | preserve in Phase 1; extract later |
| Mega menu | keyboard-aware, mobile fallback | shared behavior target | APPROVED-LOCAL / UPSTREAM-CANDIDATE | preserve; compare with Fastreserve model |
| Footer | Engineering-specific | composable central Footer target | APPROVED-LOCAL | preserve in first integration |
| Technology Radar | Engineering-specific tool | profile-specific | ADAPTABLE | preserve |
| Platform diagrams | Engineering-specific | profile-specific | ADAPTABLE | preserve |
| Focus | local orange treatment | central focus semantics | MIGRATE candidate | map token and validate contrast |
| Responsive QA | existing matrix | central expanded matrix | MIGRATE | extend widths |
| Reduced motion | existing | central requirement | COMPLIANT | keep |
| Persian copy | independently authored | independently authored | COMPLIANT | preserve |
| Cards | restrained | restrained | COMPLIANT | preserve |

## Guardrail

A difference is not a bug by default.
Approved local patterns remain protected until a central replacement proves equal or better in behavior, accessibility and responsive quality.

## Phase 2 shared-component convergence

| Area | Phase 1 state | Phase 2 target | Classification | Action |
|---|---|---|---|---|
| Header runtime | local approved implementation | central `SfSiteHeader` | MIGRATE | central behavior; local data/brand preserved |
| Mega Menu runtime | local | central web-ui | MIGRATE | preserve Engineering content and feature panels |
| Mobile Menu runtime | local | central web-ui | MIGRATE | preserve accordion semantics |
| Footer structure | local | central `SfSiteFooter` | MIGRATE | preserve Engineering content/external links |
| Navigation routes | consumer-owned | consumer-owned | ADAPTABLE | language-neutral hrefs remain local |
| Technology Radar/diagrams | local | local | ADAPTABLE | not centralized |
