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
