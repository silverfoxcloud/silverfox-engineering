# Silver Fox Engineering Portal Architecture

## Public route model

The portal uses two statically generated, crawlable language trees.

English examples:

- `/`
- `/architecture/`
- `/technology-radar/`
- `/platforms/fox-pay/`

Persian examples:

- `/fa/`
- `/fa/architecture/`
- `/fa/technology-radar/`
- `/fa/platforms/fox-pay/`

Each route renders its language at build time. Language switching navigates to the corresponding alternate URL instead of changing a browser-only preference.

## Locale semantics

Page components receive locale explicitly from the route. This keeps the static HTML, visible copy, direction and navigation consistent before hydration.

- English page roots use `lang="en"` and `dir="ltr"`.
- Persian page roots use `lang="fa"` and `dir="rtl"`.
- The Persian nested layout synchronizes document-level `lang` and `dir` immediately.
- Internal navigation stays within the active language tree.
- No locale state is persisted in `localStorage`.

## Navigation

`SiteHeader` owns desktop and mobile navigation state.

Desktop mega menus:

- use a full-width outer surface;
- keep navigation content in the shared centered shell;
- use contextual featured content per navigation family;
- close on destination selection, backdrop click, Escape, route change or another menu selection;
- place a restrained blur/dim layer over page content.

Mobile uses a dedicated navigation surface instead of compressing the desktop mega-menu.

## Architecture visualization

`ArchitectureMap` exposes titles in the overview and moves explanation into one live contextual detail panel. Mouse hover, keyboard focus and click all select a node. The CTA from the detail panel opens the corresponding canonical route.

## Product presentation

The home page no longer presents all platforms/products as five identical cards. Product stories use alternating editorial rows with capability signals so each product has its own technical proposition while keeping one visual system.

## RTL / LTR

Both languages use the same shared components and content model, but they are rendered through distinct static route trees. Direction, typography, navigation, focus behavior and responsive rules remain one implementation with two explicit locale inputs rather than two forked applications.

## Technology Radar

`TechnologyRadar` keeps node positions stable across filters so category/status changes do not cause misleading jumps. Desktop uses four explicit decision rings and a live contextual detail panel. Keyboard focus and pointer hover expose the same information. Tablet/mobile switches to grouped readable lists rather than shrinking the desktop radar.

The public statuses are:

- Adopt
- Use when justified
- Trial
- Assess

Technology copy describes engineering context and trade-offs rather than implying that every evaluated technology is deployed.

## Domain-specific visuals

Engineering disciplines use dedicated system diagrams rather than one repeated illustration. Architecture, Data Engineering, DevOps & SRE and Technology Radar keep their purpose-built visualizations; Cloud, Security, Platform and AI now also expose distinct diagrams aligned to their public engineering narrative.

Motion is intentionally restrained and informational:

- Cloud visualizes traffic and lifecycle flow across edge, delivery, workloads and observability.
- Security visualizes layered identity, authorization, tenancy and audit boundaries.
- Platform visualizes shared capabilities consumed through versioned contracts by independently released products.
- AI visualizes bounded inference, evaluation, human ownership and operational feedback.
- All SVG motion stops when `prefers-reduced-motion: reduce` is active.

Platform/product pages also use dedicated hero compositions:

- SFAS: shared admin shell and RTL/LTR primitives.
- License Platform: organization, product, entitlement, license and usage relationships.
- Fox Pay: product-to-router-to-provider orchestration plus verification/reconciliation signals.
- ExoTravel: product-owned travel-commerce lifecycle.
- ExoHub: ecosystem integration hub with explicit shared boundaries.


## Content sourcing and product truth

Public copy is grounded in the canonical Silver Fox project documents and current product repository status.

Source precedence:

1. current project status and accepted phase reports;
2. canonical architecture/roadmap documents;
3. older reports and historical design material.

The portal distinguishes three states:

- implemented/current;
- current engineering baseline with a known release gate;
- roadmap/target architecture.

A roadmap item is never promoted to a shipped capability merely to strengthen marketing copy. Private infrastructure topology, credentials, secret formats, internal defensive controls and exploitable operational procedures stay outside the public portal.

## SEO and language alternates

Every public engineering and platform page has:

- a language-specific title and description;
- its own canonical URL;
- OpenGraph URL and locale;
- reciprocal `hreflang` links for English and Persian;
- an `x-default` pointing at the English primary route.

The sitemap includes both language versions and their language alternates. This makes the Persian edition directly crawlable instead of relying on client-side locale switching.
