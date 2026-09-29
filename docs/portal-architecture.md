# Silver Fox Engineering Portal Architecture

## Public route model

Language is an application preference, not part of the canonical URL.

Canonical examples:

- `/`
- `/architecture/`
- `/technology-radar/`
- `/platforms/fox-pay/`
- `/platforms/license-platform/`

The sitemap publishes only canonical clean routes.

Legacy Persian URLs under `/fa/...` remain as `noindex` static redirect pages so existing links can move users to the canonical route while restoring Persian as their preference.

## Locale state

The public site is statically exported to GitHub Pages, so there is no request-time server session or cookie-aware rendering layer.

Locale state is therefore handled by `LocaleProvider`:

- persisted in `localStorage`;
- restored when a canonical route is opened directly;
- applied to `html[lang]` and `html[dir]`;
- switched without route navigation;
- current route and scroll context remain unchanged;
- React uses `useSyncExternalStore` with an English server snapshot to avoid hydration mismatch.

Because the deployment is a static export, build-time metadata uses English as the default canonical representation. The active client locale updates the document title and description where appropriate. Canonical URLs remain language-neutral.

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

Both languages use the same route and component tree. Direction is updated at the document root and each page root, so layout, navigation, focus order and copy remain part of the same implementation rather than separate route trees.

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

## SEO with locale-neutral routes

Each engineering and platform route has its own build-time title, description, canonical URL and OpenGraph URL. The sitemap contains only clean canonical routes.

The locale architecture intentionally serves Persian and English on the same canonical URL. Standard hreflang is therefore not emitted because valid hreflang alternates require distinct crawlable language URLs. Pointing both `fa` and `en` at the same canonical resource would be misleading and provides no meaningful alternate for crawlers.

If language-specific indexable URLs are introduced in the future, hreflang can be added as part of that routing decision rather than as an invalid metadata-only workaround.
