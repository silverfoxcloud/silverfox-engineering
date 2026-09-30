# Silver Fox Engineering Design System

## Direction

The current visual language is **quiet technical editorial**: light, spacious, developer-first and evidence-led.

A current Kinde website review on 2026-09-30 is used only as a **visual benchmark / interaction reference**. The implementation adapts high-level principles such as restrained navigation, large editorial headings, progressive disclosure, light product surfaces and concise CTA hierarchy. It does not copy Kinde copy, logos, illustrations, proprietary product UI or brand identity.

The intended combination is:

- disciplined light visual system;
- Silver Fox technical depth;
- Silver Fox ecosystem content and diagrams.

The site must not read as cyberpunk, terminal-first, glassmorphic, neon, gradient-led, card-wall or generic AI SaaS.

## Semantic tokens

The implemented core tokens in `app/globals.css` are:

| Token | Value | Use |
| --- | --- | --- |
| `--page` | `#ffffff` | primary page |
| `--page-subtle` | `#f6f6f3` | editorial grouping |
| `--surface` | `#ffffff` | component surface |
| `--surface-muted` | `#f1f2ef` | subdued controls/surfaces |
| `--text-primary` | `#121315` | primary typography |
| `--text-secondary` | `#5d6167` | body/supporting text |
| `--text-tertiary` | `#7a7f86` | metadata |
| `--border` | `#e2e3df` | standard divider |
| `--border-strong` | `#c9cbc6` | stronger technical boundary |
| `--button-primary` | `#121315` | primary CTA |
| `--button-primary-text` | `#ffffff` | primary CTA text |
| `--button-secondary` | `#f2f3f0` | secondary CTA |
| `--button-secondary-text` | `#17181a` | secondary CTA text |
| `--focus` | `#555bd6` | focus intent |
| `--technical-accent` | `#5b61d6` | restrained technical state |
| `--technical-accent-soft` | `#ececff` | selected technical state |
| `--success` | `#287a58` | verified success only |
| `--warning` | `#8a681c` | warning state only |

Large dark navy sections and cyan/orange flooding are no longer part of the portal grammar. Accent exists to distinguish state or flow, not to brand entire sections.

## Typography

English uses a safe modern system stack led by Inter when available. Persian uses its own Tahoma / Segoe UI / Arial fallback stack and receives independent line-height and display-size tuning.

Rules:

- display headings are large but controlled;
- headings use short readable line lengths;
- body text remains high contrast and relatively narrow;
- navigation typography is compact;
- metadata is visibly subordinate;
- Persian does not inherit Latin letter spacing;
- code, package IDs, versions and URLs remain LTR-isolated inside RTL pages.

## Spatial system

The shared `.shell` max width is 1240px.

Large sections rely on:

- generous vertical rhythm;
- borders and off-white section grouping before cards;
- editorial rows;
- split copy / technical visual sections;
- full-width technical moments;
- intentional asymmetry only when it helps hierarchy.

Cards are not a default container. Repeated rounded-rectangle mosaics are avoided.

## Header and navigation

Desktop navigation is grouped into:

- Engineering;
- Platforms;
- Packages;
- Resources.

The mega menu is a white, bordered, low-shadow surface with concise descriptions and one justified feature panel.

Accessibility behavior includes:

- native buttons;
- `aria-expanded` / `aria-controls`;
- keyboard operation;
- Escape close;
- focus return to the opening trigger.

Mobile navigation is a dedicated accordion rather than a compressed desktop mega menu.

The locale control is a button, not a localized link, because language does not exist in the visible URL.

## Homepage grammar

The homepage progressively reveals complexity:

1. minimal confidence-led Hero;
2. interactive Silver Fox architecture visual;
3. verified engineering stack strip;
4. engineering model;
5. core capability editorial rows;
6. platform storytelling;
7. verified package evidence;
8. real Build Stories and recently shipped work;
9. Engineering Notes;
10. Technology Radar;
11. quiet final engineering statement.

The Hero positioning is:

- EN: **Independent products. Shared engineering leverage.**
- FA: **محصولات مستقل؛ توان مهندسی مشترک.**

## Technical visuals

Generic decorative dark diagrams were migrated to the light technical grammar.

Engineering visuals use:

- white/off-white canvases;
- neutral relationship lines;
- near-black labels;
- selective `--technical-accent`;
- no glow;
- no cyberpunk grid;
- no dependence on animation for content visibility.

The five platform visuals remain structurally distinct:

- SFAS: design primitives, adapters and RTL/LTR;
- License Platform: organization/product → entitlement → license/usage;
- Fox Pay: product → router → providers with verification/reconciliation;
- ExoTravel: discovery → booking → payment → travel/operations;
- ExoHub: shared ecosystem integration boundaries.

## Packages and code

Package pages use editorial rows for discovery and dark code surfaces only where code itself benefits from high contrast.

Package presentation includes verified identity, version, lifecycle, registry, compatibility, dependencies and install commands. It never invents downloads, stars or a Stable state.

## Engineering Library

Engineering Notes, Architecture Decisions and Build Stories are treated as a publication rather than marketing card grids.

Detail pages prioritize:

- readable width;
- source/status metadata;
- section hierarchy;
- trade-offs and consequences;
- related reading.

Changelog is a chronological engineering feed.

## Technology Radar

The Radar is a light engineering tool:

- visible blips from initial render;
- neutral rings;
- restrained selected state;
- keyboard-operable controls;
- status/category filters;
- contextual detail;
- dedicated mobile list representation.

Filtering never relies on entrance animation for visibility.

## Motion

Motion is restrained and functional.

Allowed:

- menu transitions;
- selected-state changes;
- architecture relationship cues;
- Radar interaction;
- small diagram flows.

Disallowed:

- constant particle fields;
- mouse followers;
- ambient glow loops;
- heavy parallax;
- attention-seeking background animation.

`prefers-reduced-motion: reduce` collapses nonessential animation/transition time, while primary content remains visible.

## RTL / LTR

RTL and LTR are equal product modes.

- CSS logical properties are preferred;
- every shared component responds to locale state;
- Persian copy is independently authored;
- code and technical identifiers stay LTR-isolated;
- mobile and desktop are validated in both directions.

## Accessibility

The quality bar is WCAG 2.2 AA-oriented.

Implementation and browser QA cover:

- visible focus;
- keyboard navigation;
- focus return;
- semantic controls;
- accessible names;
- heading hierarchy;
- touch target sizing;
- neutral text contrast;
- reduced motion;
- code overflow;
- responsive tables/rows;
- Radar keyboard interaction;
- RTL document order.

Accessibility takes precedence over visual imitation of any reference site.
