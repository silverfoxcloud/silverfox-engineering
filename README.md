# Silver Fox Engineering

The bilingual public engineering portal of Silver Fox. It explains the architecture, platform boundaries, packages, engineering decisions, build stories and technology choices behind the ecosystem without exposing sensitive implementation detail.

## Purpose

The portal is an engineering publication rather than a generic corporate landing page. Its job is to make public technical decisions understandable: how shared capabilities are separated from product ownership, how platform boundaries are designed, what has actually shipped, how technologies are evaluated, and where a capability is still roadmap rather than current runtime.

## Public areas

The current public surface includes:

- architecture, cloud platform, security, data, AI and DevOps/SRE;
- Technology Radar and Engineering Principles;
- SFAS, Silver Fox License Platform, Fox Pay, ExoTravel and ExoHub;
- a verified SFAS Package Directory with package detail pages;
- Engineering Notes;
- public Architecture Decisions;
- Engineering Build Stories;
- an evidence-based Engineering Changelog;
- English LTR and Persian RTL as equal route trees.

English and Persian are independently edited. Persian is not generated as sentence-by-sentence machine translation.

## Source governance

Public technical claims are grounded in current product repositories and the canonical `silverfox-project-documents` references.

Source precedence is:

1. current project status and accepted completion reports;
2. accepted ADRs and current implementation documentation;
3. canonical roadmaps and architecture documents;
4. older design material only when it remains consistent with current evidence.

Roadmap concepts are labeled as direction rather than shipped features. Private topology, credentials, secrets, exploitable defensive detail and sensitive schemas are not published.

### Package truth

The public Package Directory currently contains seven verified SFAS packages. The source manifests and SFAS project status establish:

- canonical scope: `@silverfoxcloud/*`;
- version: `0.2.0-alpha.12`;
- lifecycle: prerelease;
- dist-tag: `next`;
- canonical registry: private GitHub Packages;
- first controlled publication: PASS;
- real-registry clean install/import: PASS.

The portal does not label these packages Stable or public when the source evidence does not support that claim.

## Runtime architecture

This repository is a static Next.js export deployed on GitHub Pages. There is no application database, API backend or existing CMS/Admin runtime in this repository.

That matters for content administration: the engineering prompt requires extending an existing admin rather than creating a disconnected replacement. Because no admin exists here, package/publication content remains source-controlled data. A future authenticated CMS would require an explicit platform architecture decision and a writable backend; it is not simulated inside the static site.

## Public routing and locale

English uses the primary route tree, for example:

- `/`
- `/architecture/`
- `/packages/`
- `/engineering/`
- `/architecture-decisions/`
- `/build-stories/`
- `/changelog/`
- `/platforms/fox-pay/`

Persian uses an equally indexable `/fa/` tree, for example:

- `/fa/`
- `/fa/architecture/`
- `/fa/packages/`
- `/fa/engineering/`
- `/fa/architecture-decisions/`
- `/fa/build-stories/`
- `/fa/changelog/`
- `/fa/platforms/fox-pay/`

Each language page has its own canonical URL and reciprocal `hreflang`. Language switching is route-based, so crawlers and users receive the same language-specific document.

## Quality gates

Every change must preserve:

- TypeScript validation and static export;
- English LTR and Persian RTL behavior;
- keyboard navigation and focus visibility;
- reduced-motion behavior;
- responsive layouts;
- no horizontal overflow;
- no broken local images;
- canonical/hreflang/sitemap consistency.

`.github/workflows/visual-qa.yml` runs Chromium/Playwright against the built static export and covers the required desktop, tablet and mobile widths. Browser evidence is uploaded as a workflow artifact.

## Documentation

- `docs/portal-architecture.md`
- `docs/design-system.md`
- `docs/iteration-status.md`
